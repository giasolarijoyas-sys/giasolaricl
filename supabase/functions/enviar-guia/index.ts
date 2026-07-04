import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const GUIA_URL = "https://www.giasolari.cl/guia-anillo-compromiso-gia-solari.pdf";
const FROM = "Gia Solari <hola@giasolari.cl>";

const html = `<!doctype html>
<html lang="es">
  <body style="margin:0;padding:0;background:#FDFAF6;font-family:Inter,Arial,sans-serif;color:#1A1614;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FDFAF6;padding:40px 16px;">
      <tr><td align="center">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #E6DFD2;border-radius:6px;padding:48px 40px;">
          <tr><td>
            <h1 style="margin:0 0 24px;font-family:'Bodoni Moda',Georgia,'Times New Roman',serif;font-weight:400;font-size:30px;line-height:1.2;color:#1A1614;">
              Tu guía para elegir el anillo de compromiso
            </h1>
            <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#4A4238;">
              ¡Hola! Soy Macarena, de Gia Solari Joyas. Gracias por escribirme.
            </p>
            <p style="margin:0 0 28px;font-size:15px;line-height:1.7;color:#4A4238;">
              Aquí tienes la guía que preparé con todo lo esencial antes de comprar un anillo de compromiso: piedras, cortes, metales, presupuesto y las preguntas que conviene hacerse. Espero que te sea útil.
            </p>
            <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 28px;">
              <tr><td style="border-radius:999px;background:#4A5536;">
                <a href="${GUIA_URL}" style="display:inline-block;padding:14px 32px;font-family:Inter,Arial,sans-serif;font-size:13px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:#FDFAF6;text-decoration:none;border-radius:999px;">
                  Descargar la guía
                </a>
              </td></tr>
            </table>
            <p style="margin:0 0 20px;font-size:14px;line-height:1.7;color:#7A7266;">
              Si tienes cualquier duda, puedes responder a este correo. Te leo personalmente.
            </p>
            <p style="margin:0;font-family:'Bodoni Moda',Georgia,serif;font-style:italic;font-size:16px;color:#B8995A;">
              — Macarena, Gia Solari Joyas
            </p>
          </td></tr>
        </table>
        <p style="margin:24px 0 0;font-size:11px;color:#A8A095;font-family:Inter,Arial,sans-serif;">
          Gia Solari Joyas · Santiago, Chile · <a href="https://www.giasolari.cl" style="color:#A8A095;">giasolari.cl</a>
        </p>
      </td></tr>
    </table>
  </body>
</html>`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string") {
      return new Response(JSON.stringify({ ok: false, error: "email required" }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return new Response(JSON.stringify({ ok: false, error: "not_configured" }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM,
        to: [email],
        reply_to: "giasolarijoyas@gmail.com",
        subject: "Tu guía para elegir el anillo de compromiso 💍",
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

    // Agregar el contacto a la audiencia "Newsletter Gia Solari" (best-effort)
    try {
      const audRes = await fetch("https://api.resend.com/audiences", {
        method: "GET",
        headers: { Authorization: `Bearer ${RESEND_API_KEY}` },
      });
      if (!audRes.ok) {
        console.error("Resend audiences list error:", audRes.status, await audRes.text());
      } else {
        const audData = await audRes.json();
        const audiences = Array.isArray(audData?.data) ? audData.data : [];
        const target = audiences.find((a: { name?: string }) => a?.name === "Newsletter Gia Solari");
        if (!target?.id) {
          console.error("Audience 'Newsletter Gia Solari' no encontrada");
        } else {
          const contactRes = await fetch(`https://api.resend.com/audiences/${target.id}/contacts`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({ email, unsubscribed: false }),
          });
          if (!contactRes.ok) {
            // Si ya existe u otro error, solo loguear
            console.error("Resend add contact error:", contactRes.status, await contactRes.text());
          }
        }
      }
    } catch (audErr) {
      console.error("Audience add exception:", audErr);
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("enviar-guia exception:", err);
    return new Response(JSON.stringify({ ok: false, error: "exception" }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
