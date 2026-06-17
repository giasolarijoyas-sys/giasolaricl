import { useState } from "react";
import { Loader2 } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitting(true);
    // Simulamos un pequeño delay para que se sienta real
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubscribed(true);
    setSubmitting(false);
    setEmail("");
  };

  return (
    <section
      className="py-24 md:py-32 px-4 md:px-8"
      style={{ background: "#FDFAF6" }}
    >
      <div className="mx-auto text-center" style={{ maxWidth: "520px" }}>
        <h2
          style={{
            fontFamily: "'Bodoni Moda', 'Playfair Display', serif",
            fontWeight: 400,
            fontSize: "clamp(32px, 3.5vw, 48px)",
            lineHeight: 1.1,
            color: "#1A1614",
          }}
        >
          Sé la primera en saber
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
          Nuevas piezas, acceso anticipado y cosas que no publico en ningún otro lado.
        </p>

        {subscribed ? (
          <p
            style={{
              fontFamily: "'Bodoni Moda', 'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "22px",
              color: "#B8995A",
            }}
          >
            Perfecto, te aviso pronto.
          </p>
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
                "Quiero recibir novedades"
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
