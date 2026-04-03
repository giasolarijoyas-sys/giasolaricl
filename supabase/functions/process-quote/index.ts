import { corsHeaders } from '@supabase/supabase-js/cors'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.1'
import { z } from 'https://esm.sh/zod@3.25.76'

const QuoteSchema = z.object({
  pieza: z.string().min(1).max(255),
  metal: z.string().min(1).max(255),
  piedra: z.string().max(255).optional().default(''),
  forma: z.string().max(255).optional().default(''),
  quilates: z.string().max(255).optional().default(''),
  estilo: z.string().max(255).optional().default(''),
  engaste: z.string().max(255).optional().default(''),
  grabado: z.string().max(500).optional().default(''),
  referencias: z.string().max(1000).optional().default(''),
  nombre: z.string().min(1).max(255),
  whatsapp: z.string().min(1).max(50),
  email: z.string().email().max(255),
  como_nos_conociste: z.string().max(255).optional().default(''),
  presupuesto: z.string().max(255).optional().default(''),
  fecha_limite: z.string().optional().default(''),
  nombre_pareja: z.string().max(255).optional().default(''),
  fecha_aniversario: z.string().optional().default(''),
  fecha_cumple_pareja: z.string().optional().default(''),
  notas_pareja: z.string().max(2000).optional().default(''),
  image_urls: z.array(z.string()).optional().default([]),
})

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const body = await req.json()
    const parsed = QuoteSchema.safeParse(body)

    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const data = parsed.data

    // Use service role to insert (bypasses RLS for reading back)
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, serviceRoleKey)

    // Clean up empty date fields
    const insertData: Record<string, unknown> = {
      ...data,
      fecha_limite: data.fecha_limite || null,
      fecha_aniversario: data.fecha_aniversario || null,
      fecha_cumple_pareja: data.fecha_cumple_pareja || null,
    }

    const { data: quote, error } = await supabase
      .from('quotes')
      .insert(insertData)
      .select()
      .single()

    if (error) {
      console.error('Insert error:', error)
      return new Response(
        JSON.stringify({ error: 'Error al guardar la cotización' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log(`Quote saved: ${quote.id} from ${data.nombre} (${data.email})`)

    return new Response(
      JSON.stringify({ success: true, id: quote.id }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (err) {
    console.error('Process quote error:', err)
    return new Response(
      JSON.stringify({ error: 'Error interno' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
