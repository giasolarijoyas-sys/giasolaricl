import { useState } from "react";
import { z } from "zod";
import { Loader2, Download } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type Variant = "full" | "compact";

const emailSchema = z
  .string()
  .trim()
  .email({ message: "Ingresá un correo válido" })
  .max(255, { message: "Correo demasiado largo" });

const LEAD_TAG = "lead-magnet-guia";
const GUIDE_URL = "/guia-anillo-compromiso-gia-solari.pdf";

const LeadMagnetGuia = ({ variant = "full" }: { variant?: Variant }) => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({ email: parsed.data, nombre: LEAD_TAG });

      if (error && error.code !== "23505") throw error;

      setDone(true);
      toast.success("¡Listo! Tu guía está lista para descargar.");
      setEmail("");
    } catch {
      toast.error("No pudimos registrar tu correo. Intentá de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  const isCompact = variant === "compact";

  return (
    <section
      className={isCompact ? "py-16 md:py-20 px-4 md:px-8" : "py-20 md:py-28 px-4 md:px-8"}
      style={{ background: "#F5EFE6" }}
    >
      <div className={`container mx-auto ${isCompact ? "max-w-xl" : "max-w-2xl"} text-center`}>
        <p
          className="mb-4"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#C9A87C",
          }}
        >
          Guía gratuita
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            fontSize: isCompact ? "clamp(24px, 3vw, 32px)" : "clamp(28px, 3.5vw, 42px)",
            lineHeight: 1.15,
            color: "#1A1A18",
          }}
        >
          Tu guía para elegir el anillo de compromiso perfecto
        </h2>
        <p
          className="mt-5 mb-8"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "15px",
            lineHeight: 1.6,
            color: "rgba(26,26,24,0.7)",
            maxWidth: "520px",
            margin: "20px auto 32px",
          }}
        >
          Presupuesto, estilos, tallas y la gran pregunta. Descargala gratis al
          dejarnos tu correo.
        </p>

        {done ? (
          <div className="flex flex-col items-center gap-4">
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "20px",
                color: "#4A5536",
              }}
            >
              ¡Gracias! Tu guía está lista.
            </p>
            <a
              href={GUIDE_URL}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5"
              style={{
                background: "#4A5536",
                color: "#F5EFE6",
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderRadius: "999px",
              }}
            >
              <Download size={14} /> Descargar la guía
            </a>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <label htmlFor={`lead-email-${variant}`} className="sr-only">
              Correo electrónico
            </label>
            <input
              id={`lead-email-${variant}`}
              type="email"
              required
              maxLength={255}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu correo"
              className="flex-1 px-5 py-3.5 outline-none placeholder:text-charcoal/40"
              style={{
                background: "#FFFFFF",
                border: "1px solid #C9A87C",
                color: "#1A1A18",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                borderRadius: "999px",
              }}
            />
            <button
              type="submit"
              disabled={submitting || !email}
              className="px-7 py-3.5 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
              style={{
                background: "#4A5536",
                color: "#F5EFE6",
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderRadius: "999px",
              }}
            >
              {submitting ? <Loader2 size={14} className="animate-spin" /> : "Quiero la guía"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default LeadMagnetGuia;
