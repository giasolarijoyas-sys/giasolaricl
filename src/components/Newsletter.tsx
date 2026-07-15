import { useState } from "react";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const GUIA_PDF_URL = "/guia-anillo-compromiso-gia-solari.pdf";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitting(true);
    try {
      const cleanEmail = email.trim().toLowerCase();
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({ email: cleanEmail });
      // Si el email ya existe (unique violation, code 23505), lo tratamos como éxito
      if (error && error.code !== "23505") {
        console.error("Newsletter subscribe error:", error);
      }
      // Enviar guía por correo (no bloqueante)
      try {
        supabase.functions.invoke("enviar-guia", { body: { email: cleanEmail } })
          .catch((e) => console.error("enviar-guia invoke error:", e));
      } catch (e) { console.error("enviar-guia invoke error:", e); }
      try {
        if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
          (window as any).gtag("event", "newsletter_suscrito", {
            already_subscribed: error?.code === "23505",
          });
        }
      } catch { /* noop */ }
      try {
        if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
          (window as any).fbq("track", "Subscribe", {
            already_subscribed: error?.code === "23505",
          });
        }
      } catch { /* noop */ }
    } catch (err) {
      console.error("Newsletter subscribe error:", err);
    }
    // Abrir la guía en una pestaña nueva
    try {
      if (typeof window !== "undefined") {
        window.open(GUIA_PDF_URL, "_blank", "noopener,noreferrer");
      }
    } catch { /* noop */ }
    setSubscribed(true);
    setSubmitting(false);
    setEmail("");
  };

  return (
    <section
      className="py-12 md:py-32 px-4 md:px-8"
      style={{ background: "#FDFAF6" }}
    >
      <div className="mx-auto text-center" style={{ maxWidth: "540px" }}>
        <h2
          style={{
            fontFamily: "'Bodoni Moda', 'Playfair Display', serif",
            fontWeight: 400,
            fontSize: "clamp(32px, 3.5vw, 48px)",
            lineHeight: 1.1,
            color: "#1A1614",
          }}
        >
          Descarga gratis la guía para elegir tu anillo
        </h2>

        <p
          className="mt-4 mb-10"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.6,
            color: "#7A7266",
          }}
        >
          Déjame tu correo y te envío la guía con todo lo que debes saber antes de comprar tu anillo de compromiso: piedras, cortes, metales y presupuesto.
        </p>

        {subscribed ? (
          <div>
            <p
              style={{
                fontFamily: "'Bodoni Moda', 'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "22px",
                color: "#B8995A",
              }}
            >
              Perfecto, también te la envié por correo.
            </p>
            <p
              className="mt-3"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                color: "#7A7266",
              }}
            >
              Si la ventana no se abrió,{" "}
              <a
                href={GUIA_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#4A5536", textDecoration: "underline" }}
              >
                descarga la guía aquí
              </a>
              .
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className="flex-1 px-5 py-3.5 outline-none"
              style={{
                background: "transparent",
                border: "1px solid #E6DFD2",
                color: "#1A1614",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                borderRadius: "999px",
              }}
            />
            <button
              type="submit"
              disabled={submitting || !email}
              className="px-7 py-3.5 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap"
              style={{
                background: "#C9A87C",
                color: "#FDFAF6",
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.05em",
                borderRadius: "999px",
              }}
            >
              {submitting ? (
                <Loader2 size={14} className="animate-spin" />
              ) : (
                "Descargar guía gratis"
              )}
            </button>
          </form>
        )}

        <p
          className="mt-5"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            fontWeight: 300,
            color: "#A8A095",
          }}
        >
          Sin spam. Solo lo que vale la pena.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;

