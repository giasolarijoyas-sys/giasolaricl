import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.1'
import { z } from 'https://esm.sh/zod@3.25.76'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const BodySchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('quote'), quoteId: z.string().uuid() }),
  z.object({ type: z.literal('wish-list'), wishListId: z.string().uuid() }),
])

const escapeHtml = (str: unknown): string => {
  if (str === null || str === undefined) return ''
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// For values embedded inside URL components (e.g. wa.me links)
const safePhone = (str: unknown) => String(str ?? '').replace(/\D/g, '').slice(0, 20)

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Auth gate — require a valid Supabase JWT (anon from the SDK is acceptable).
    const authHeader = req.headers.get('Authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    const token = authHeader.replace('Bearer ', '')
    const authClient = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
    )
    const { data: claimsData, error: claimsErr } = await authClient.auth.getClaims(token)
    if (claimsErr || !claimsData?.claims) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const rawBody = await req.json()
    // backwards compat: if no type, assume quote
    if (!rawBody.type) rawBody.type = 'quote'

    const parsed = BodySchema.safeParse(rawBody)
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, serviceRoleKey)
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

    if (parsed.data.type === 'wish-list') {
      return await handleWishList(supabase, parsed.data.wishListId, RESEND_API_KEY)
    } else {
      return await handleQuote(supabase, parsed.data.quoteId, RESEND_API_KEY)
    }
  } catch (err) {
    console.error('Process error:', err)
    return new Response(
      JSON.stringify({ error: 'Error interno' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})

async function sendEmail(apiKey: string | undefined, subject: string, html: string) {
  if (!apiKey) {
    console.log('RESEND_API_KEY not configured. Email skipped.')
    return
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
    body: JSON.stringify({
      from: 'Gia Solari <cotizaciones@giasolari.cl>',
      to: ['giasolarijoyas@gmail.com'],
      subject,
      html,
    }),
  })
  if (!res.ok) console.error('Email error:', await res.text())
  else console.log('Email sent:', subject)
}

// Only allow http(s) URLs in image references to avoid javascript: payloads.
const safeImageUrl = (url: unknown): string | null => {
  const s = String(url ?? '')
  if (!/^https?:\/\//i.test(s)) return null
  return escapeHtml(s)
}

async function handleWishList(supabase: any, id: string, apiKey: string | undefined) {
  const { data: w, error } = await supabase.from('wish_list').select('*').eq('id', id).single()
  if (error || !w) {
    return new Response(JSON.stringify({ error: 'Registro no encontrado' }),
      { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
  }

  const imageHtml = w.image_urls?.length
    ? `<h3 style="margin-top:20px;color:#1A1614;">Fotos de inspiración:</h3>` +
      w.image_urls
        .map(safeImageUrl)
        .filter((u: string | null) => u)
        .map((url: string) =>
          `<a href="${url}" target="_blank"><img src="${url}" style="max-width:180px;height:auto;margin:5px;border-radius:8px;border:1px solid #D4C5A9;" /></a>`
        ).join('')
    : ''

  const row = (label: string, value: string | null, bg = false) =>
    value ? `<tr${bg ? ' style="background:#F5F0E8;"' : ''}>
      <td style="padding:10px;font-weight:bold;width:40%;color:#1A1614;">${escapeHtml(label)}</td>
      <td style="padding:10px;color:#1A1614;">${value}</td>
    </tr>` : ''

  const wPhone = safePhone(w.whatsapp)
  const wEmail = escapeHtml(w.email)
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
      <div style="text-align:center;padding:20px 0;border-bottom:2px solid #B8995A;">
        <h1 style="color:#B8995A;font-size:24px;margin:0;">Nueva Lista de Deseos</h1>
        <p style="color:#666;font-size:14px;margin:5px 0 0;">Gia Solari Joyas</p>
      </div>
      <table style="width:100%;border-collapse:collapse;margin-top:20px;">
        ${row('Nombre', escapeHtml(w.nombre), true)}
        ${row('Email', `<a href="mailto:${wEmail}" style="color:#B8995A;">${wEmail}</a>`)}
        ${row('WhatsApp', `<a href="https://wa.me/${wPhone}" style="color:#B8995A;">${escapeHtml(w.whatsapp)}</a>`, true)}
        ${row('Pareja', escapeHtml(w.nombre_pareja))}
        ${row('Cumpleaños', escapeHtml(w.fecha_cumple_pareja), true)}
        ${row('Aniversario', escapeHtml(w.fecha_aniversario))}
        ${row('Otras fechas', escapeHtml(w.otras_fechas), true)}
        ${row('Preferencias', escapeHtml(w.preferencias))}
        ${row('Tipo de joya', escapeHtml(w.tipo_joya), true)}
        ${row('Metal', escapeHtml(w.metal_preferido))}
        ${row('Piedra', escapeHtml(w.piedra_preferida), true)}
        ${row('Presupuesto', escapeHtml(w.presupuesto_aproximado))}
        ${row('Referencias', escapeHtml(w.referencias), true)}
        ${row('Notas', escapeHtml(w.notas))}
      </table>
      ${imageHtml}
      <div style="margin-top:30px;text-align:center;">
        <a href="https://wa.me/${wPhone}?text=${encodeURIComponent(`Hola ${w.nombre}, soy Maca de Gia Solari. Recibí tu lista de deseos. ¡Conversemos!`)}"
          style="display:inline-block;background:#25D366;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">
          Responder por WhatsApp
        </a>
      </div>
      <p style="color:#999;font-size:11px;text-align:center;margin-top:30px;">
        Lista de Deseos ID: ${escapeHtml(w.id)} · ${escapeHtml(new Date(w.created_at).toLocaleString('es-CL'))}
      </p>
    </div>
  `

  await sendEmail(apiKey, `Nueva Lista de Deseos — ${String(w.nombre).slice(0, 80)}`, html)
  return new Response(JSON.stringify({ success: true }),
    { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
}

async function handleQuote(supabase: any, quoteId: string, apiKey: string | undefined) {
  const { data: quote, error } = await supabase.from('quotes').select('*').eq('id', quoteId).single()
  if (error || !quote) {
    return new Response(JSON.stringify({ error: 'Cotización no encontrada' }),
      { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
  }

  const imageHtml = quote.image_urls?.length
    ? `<h3 style="margin-top:20px;">Fotos de referencia:</h3>` +
      quote.image_urls
        .map(safeImageUrl)
        .filter((u: string | null) => u)
        .map((url: string) =>
          `<a href="${url}" target="_blank"><img src="${url}" style="max-width:200px;height:auto;margin:5px;border-radius:8px;border:1px solid #D4C5A9;" /></a>`
        ).join('')
    : ''

  const qPhone = safePhone(quote.whatsapp)
  const qEmail = escapeHtml(quote.email)
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
      <div style="text-align:center;padding:20px 0;border-bottom:2px solid #B8995A;">
        <h1 style="color:#B8995A;font-size:24px;margin:0;">Nueva Cotización</h1>
        <p style="color:#666;font-size:14px;margin:5px 0 0;">Gia Solari Joyas</p>
      </div>
      <table style="width:100%;border-collapse:collapse;margin-top:20px;">
        <tr style="background:#F5F0E8;">
          <td style="padding:10px;font-weight:bold;width:40%;color:#1A1614;">Nombre</td>
          <td style="padding:10px;color:#1A1614;">${escapeHtml(quote.nombre)}</td>
        </tr>
        <tr>
          <td style="padding:10px;font-weight:bold;color:#1A1614;">Email</td>
          <td style="padding:10px;"><a href="mailto:${qEmail}" style="color:#B8995A;">${qEmail}</a></td>
        </tr>
        <tr style="background:#F5F0E8;">
          <td style="padding:10px;font-weight:bold;color:#1A1614;">WhatsApp</td>
          <td style="padding:10px;"><a href="https://wa.me/${qPhone}" style="color:#B8995A;">${escapeHtml(quote.whatsapp)}</a></td>
        </tr>
        <tr>
          <td style="padding:10px;font-weight:bold;color:#1A1614;">Pieza</td>
          <td style="padding:10px;color:#1A1614;">${escapeHtml(quote.pieza)}</td>
        </tr>
        <tr style="background:#F5F0E8;">
          <td style="padding:10px;font-weight:bold;color:#1A1614;">Metal</td>
          <td style="padding:10px;color:#1A1614;">${escapeHtml(quote.metal)}</td>
        </tr>
        ${quote.piedra ? `<tr><td style="padding:10px;font-weight:bold;color:#1A1614;">Piedra</td><td style="padding:10px;color:#1A1614;">${escapeHtml(quote.piedra)}</td></tr>` : ''}
        ${quote.presupuesto ? `<tr style="background:#F5F0E8;"><td style="padding:10px;font-weight:bold;color:#1A1614;">Presupuesto</td><td style="padding:10px;color:#1A1614;">${escapeHtml(quote.presupuesto)}</td></tr>` : ''}
        ${quote.fecha_limite ? `<tr><td style="padding:10px;font-weight:bold;color:#1A1614;">Fecha entrega</td><td style="padding:10px;color:#1A1614;">${escapeHtml(quote.fecha_limite)}</td></tr>` : ''}
        ${quote.referencias ? `<tr style="background:#F5F0E8;"><td style="padding:10px;font-weight:bold;color:#1A1614;">Comentarios</td><td style="padding:10px;color:#1A1614;">${escapeHtml(quote.referencias)}</td></tr>` : ''}
      </table>
      ${imageHtml}
      <div style="margin-top:30px;text-align:center;">
        <a href="https://wa.me/${qPhone}?text=${encodeURIComponent(`Hola ${quote.nombre}, soy Maca de Gia Solari. Recibí tu cotización para ${quote.pieza}. ¡Conversemos!`)}"
          style="display:inline-block;background:#25D366;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">
          Responder por WhatsApp
        </a>
      </div>
      <p style="color:#999;font-size:11px;text-align:center;margin-top:30px;">
        Cotización ID: ${escapeHtml(quote.id)} · ${escapeHtml(new Date(quote.created_at).toLocaleString('es-CL'))}
      </p>
    </div>
  `

  await sendEmail(apiKey, `Nueva cotización: ${String(quote.pieza).slice(0,60)} — ${String(quote.nombre).slice(0,60)}`, html)
  return new Response(JSON.stringify({ success: true }),
    { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
}
