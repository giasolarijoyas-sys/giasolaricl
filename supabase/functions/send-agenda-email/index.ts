import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const MAX_FIELD = 500;
const MAX_NOTES = 2000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const HORA_RE = /^[\d:apmAPM\s.-]{1,10}$/;

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const RESEND_API_URL = "https://api.resend.com/emails";

const ADMIN_EMAIL = "giasolarijoyas@gmail.com";
// IMPORTANTE: para enviar a clientes, hay que verificar el dominio
// giasolari.cl en Resend (https://resend.com/domains).
// Mientras tanto se usa onboarding@resend.dev, que solo permite enviar
// al email del owner de la cuenta Resend (= giasolarijoyas@gmail.com).
const FROM_ADMIN = "Gia Solari Web <onboarding@resend.dev>";
const FROM_CLIENTE = "Gia Solari <onboarding@resend.dev>";

interface AgendaPayload {
  nombre: string;
  whatsapp: string;
  email?: string;
  fecha: string;
  hora: string;
  motivo?: string;
  notas?: string;
}

const escapeHtml = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const buildAdminHtml = (d: AgendaPayload) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #2b2b2b;">
    <h2 style="color: #b8860b; margin: 0 0 16px;">Nueva solicitud de visita</h2>
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Nombre</td><td>${escapeHtml(d.nombre)}</td></tr>
      <tr><td style="padding: 8px 0; font-weight: bold;">WhatsApp</td><td><a href="https://wa.me/${d.whatsapp.replace(/\D/g, "")}">${escapeHtml(d.whatsapp)}</a></td></tr>
      <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td>${escapeHtml(d.email || "—")}</td></tr>
      <tr><td style="padding: 8px 0; font-weight: bold;">Fecha</td><td>${escapeHtml(d.fecha)}</td></tr>
      <tr><td style="padding: 8px 0; font-weight: bold;">Hora</td><td>${escapeHtml(d.hora)}</td></tr>
      <tr><td style="padding: 8px 0; font-weight: bold;">Motivo</td><td>${escapeHtml(d.motivo || "—")}</td></tr>
      <tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Notas</td><td>${escapeHtml(d.notas || "—")}</td></tr>
    </table>
    <p style="margin-top: 24px; font-size: 12px; color: #888;">Enviado desde giasolari.cl/agenda</p>
  </div>
`;

const buildClienteHtml = (d: AgendaPayload) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #2b2b2b; background: #ffffff;">
    <h2 style="color: #b8860b; margin: 0 0 16px; font-family: Georgia, serif;">Hola ${escapeHtml(d.nombre)},</h2>
    <p style="line-height: 1.6;">Recibimos tu solicitud de visita al showroom de Gia Solari en Las Condes. Te confirmamos disponibilidad por WhatsApp en menos de 24 horas.</p>
    <div style="background: #faf6ee; border-left: 3px solid #b8860b; padding: 16px; margin: 24px 0;">
      <p style="margin: 0 0 8px;"><strong>Fecha solicitada:</strong> ${escapeHtml(d.fecha)}</p>
      <p style="margin: 0 0 8px;"><strong>Hora:</strong> ${escapeHtml(d.hora)}</p>
      <p style="margin: 0;"><strong>Motivo:</strong> ${escapeHtml(d.motivo || "Asesoría personalizada")}</p>
    </div>
    <p style="line-height: 1.6;">Si necesitás algo antes, escribinos directo:</p>
    <p style="text-align: center; margin: 32px 0;">
      <a href="https://wa.me/56984049502" style="display: inline-block; background: #25D366; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 4px; font-weight: bold;">Conversar por WhatsApp</a>
    </p>
    <p style="font-size: 13px; color: #777; line-height: 1.6; margin-top: 32px;">Gracias por elegir Gia Solari.<br/>Gianna & Maca</p>
  </div>
`;

async function sendEmail(opts: {
  from: string;
  to: string;
  subject: string;
  html: string;
}) {
  const res = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: opts.from,
      to: [opts.to],
      subject: opts.subject,
      html: opts.html,
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    console.error("Resend error:", res.status, data);
    throw new Error(typeof data === "object" ? JSON.stringify(data) : "Resend error");
  }
  return data;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (!RESEND_API_KEY) {
    return new Response(
      JSON.stringify({ error: "RESEND_API_KEY not configured" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }

  try {
    // Require a valid Supabase JWT (anon key is fine) to block raw curl spam.
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    const token = authHeader.replace("Bearer ", "");
    const supa = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
    );
    const { data: claimsData, error: claimsErr } = await supa.auth.getClaims(token);
    if (claimsErr || !claimsData?.claims) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const body = (await req.json()) as AgendaPayload;

    if (!body.nombre || !body.whatsapp || !body.fecha || !body.hora) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Length + format validation to prevent abuse/oversized payloads.
    const checks: Array<[string, string | undefined, number]> = [
      ["nombre", body.nombre, MAX_FIELD],
      ["whatsapp", body.whatsapp, 40],
      ["fecha", body.fecha, 20],
      ["hora", body.hora, 10],
      ["motivo", body.motivo, MAX_FIELD],
      ["notas", body.notas, MAX_NOTES],
      ["email", body.email, 254],
    ];
    for (const [field, val, max] of checks) {
      if (val !== undefined && val !== null && String(val).length > max) {
        return new Response(
          JSON.stringify({ error: `Campo ${field} excede el largo máximo` }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
    }
    if (body.email && !EMAIL_RE.test(body.email)) {
      return new Response(
        JSON.stringify({ error: "Email inválido" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    if (!DATE_RE.test(body.fecha) || !HORA_RE.test(body.hora)) {
      return new Response(
        JSON.stringify({ error: "Formato de fecha u hora inválido" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Mail al equipo (siempre)
    const adminResult = await sendEmail({
      from: FROM_ADMIN,
      to: ADMIN_EMAIL,
      subject: `Nueva visita: ${body.nombre} — ${body.fecha} ${body.hora}`,
      html: buildAdminHtml(body),
    });

    // Mail de confirmación al cliente (si dejó email)
    let clientResult: unknown = null;
    if (body.email) {
      try {
        clientResult = await sendEmail({
          from: FROM_CLIENTE,
          to: body.email,
          subject: "Recibimos tu solicitud de visita — Gia Solari",
          html: buildClienteHtml(body),
        });
      } catch (err) {
        // No bloquear si el envío al cliente falla (típicamente por dominio no verificado)
        console.warn("No se pudo enviar mail al cliente:", err);
      }
    }

    return new Response(
      JSON.stringify({ ok: true, admin: adminResult, client: clientResult }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("send-agenda-email error:", msg);
    return new Response(
      JSON.stringify({ error: msg }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
