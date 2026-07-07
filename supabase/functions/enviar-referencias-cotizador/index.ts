import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const FROM = "Gia Solari <cotizaciones@giasolari.cl>";
const TO = "giasolarijoyas@gmail.com";

const escape = (s: unknown) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const safeUrl = (u: unknown): string | null => {
  const s = String(u ?? "");
  return /^https?:\/\//i.test(s) ? s : null;
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const resumen = body?.resumen ?? {};
    const contacto = body?.contacto ?? {};
    const imageUrls: string[] = Array.isArray(body?.imageUrls) ? body.imageUrls : [];
    const cleanUrls = imageUrls.map(safeUrl).filter((u): u is string => !!u).slice(0, 5);

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return new Response(JSON.stringify({ ok: false, error: "not_configured" }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const row = (label: string, value: string) =>
      value
        ? `<tr><td style="padding:8px 12px;font-weight:bold;width:38%;color:#1A1614;background:#F5F0E8;">${escape(
            label,
          )}</td><td style="padding:8px 12px;color:#1A1614;">${escape(value)}</td></tr>`
        : "";

    const imagesHtml = cleanUrls.length
      ? `<h3 style="margin-top:24px;font-size:15px;color:#1A1614;">Fotos de referencia (${cleanUrls.length})</h3>
         <p style="margin:0 0 8px;font-size:12px;color:#7A7266;">Enlaces válidos por 7 días (bucket privado).</p>
         ${cleanUrls
           .map(
             (u) =>
               `<p style="margin:8px 0;"><a href="${escape(u)}" target="_blank" style="color:#B8995A;word-break:break-all;">${escape(u)}</a></p>`,
           )
           .join("")}`
      : "";

    const subjectName = String(contacto.nombre ?? "").trim() || String(resumen.pieza ?? "pieza");
    const conFotos = cleanUrls.length > 0 ? " (con fotos)" : "";

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:20px;color:#1A1614;">
        <div style="text-align:center;padding:20px 0;border-bottom:2px solid #B8995A;">
          <h1 style="color:#B8995A;font-size:22px;margin:0;">Nueva cotización completada</h1>
          <p style="color:#666;font-size:13px;margin:6px 0 0;">Cotizador · Gia Solari</p>
        </div>
        <table style="width:100%;border-collapse:collapse;margin-top:20px;font-size:14px;">
          ${row("Nombre", contacto.nombre)}
          ${row("Correo", contacto.email)}
          ${row("Pieza", resumen.pieza)}
          ${row("Metal", resumen.metal)}
          ${row("Piedra", resumen.piedra)}
          ${row("Estilo", resumen.estilo)}
          ${row("Tamaño", resumen.tamano)}
          ${row("Presupuesto", resumen.presupuesto)}
          ${row("Rango estimado", resumen.rango)}
        </table>
        ${imagesHtml}
        <p style="color:#999;font-size:11px;text-align:center;margin-top:30px;">
          Cotizador de giasolari.cl · ${escape(new Date().toLocaleString("es-CL"))}
        </p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: contacto.email || "giasolarijoyas@gmail.com",
        subject: `Cotización — ${String(subjectName).slice(0, 60)}${conFotos}`,
        html,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Resend error:", res.status, text);
      return new Response(JSON.stringify({ ok: false, error: "send_failed" }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("enviar-referencias-cotizador exception:", err);
    return new Response(JSON.stringify({ ok: false, error: "exception" }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
