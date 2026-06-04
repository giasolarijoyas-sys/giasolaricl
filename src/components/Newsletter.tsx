import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitting(true);
    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({ email });

      if (error) {
        if (error.code === "23505") {
          toast({ title: "Ya estás en el círculo", description: "Este correo ya está suscrito. ¡Gracias!" });
        } else {
          throw error;
        }
      } else {
        setSubscribed(true);
        toast({ title: "Bienvenida al círculo", description: "Te llegará la próxima carta del showroom." });
      }
      setEmail("");
    } catch {
      toast({ title: "Algo falló", description: "No pudimos registrar tu correo. Intenta de nuevo." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      className="py-24 md:py-28 px-4 md:px-8"
      style={{ background: "#3A4429", color: "#F5EFE6" }}
    >
      <div className="container mx-auto max-w-2xl text-center">
        <p
          className="mb-4"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#C9A87C",
          }}
        >
          Círculo Gia
        </p>
        <h2
          style={{
            fontFamily: "'Bodoni Moda', serif",
            fontWeight: 400,
            fontSize: "clamp(32px, 3.5vw, 48px)",
            lineHeight: 1.1,
            color: "#F5EFE6",
          }}
        >
          Súmate al círculo.
        </h2>
        <p
          className="mt-5 mb-10"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            lineHeight: 1.6,
            color: "rgba(245,239,230,0.8)",
            maxWidth: "520px",
            margin: "20px auto 40px",
          }}
        >
          Una vez al mes te mando piezas nuevas, novias reales y el detrás de
          escena del showroom. Sin spam, sin venta agresiva.
        </p>

        {subscribed ? (
          <p
            style={{
              fontFamily: "'Bodoni Moda', serif",
              fontStyle: "italic",
              fontSize: "22px",
              color: "#C9A87C",
            }}
          >
            Gracias por sumarte. Nos vemos por correo.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu correo"
              className="flex-1 px-5 py-3.5 outline-none placeholder:text-cream/40"
              style={{
                background: "transparent",
                border: "1px solid #C9A87C",
                color: "#F5EFE6",
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
                background: "#C9A87C",
                color: "#3A4429",
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderRadius: "999px",
              }}
            >
              {submitting ? <Loader2 size={14} className="animate-spin" /> : "Sumarme →"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
