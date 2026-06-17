import { Award, Sparkles, ShieldCheck } from "lucide-react";

const OLIVE = "#4A5536";
const DARK = "#3A4429";
const MUTED = "#6B7752";

const WHATSAPP_LIMPIEZA =
  "https://wa.me/56984049502?text=" +
  encodeURIComponent("Hola Maca, quiero coordinar mi limpieza gratuita");

const items = [
  {
    Icon: Award,
    title: "Certificado de autenticidad",
    text: "Cada pieza viaja con su certificado Gia Solari: materiales, piedras y firma del taller.",
    extra: null as React.ReactNode,
  },
  {
    Icon: Sparkles,
    title: "Limpieza profesional gratis",
    text: "Durante el primer año, tu joya vuelve al taller para una limpieza profesional sin costo.",
    extra: (
      <>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            color: MUTED,
            lineHeight: 1.6,
            marginTop: "10px",
          }}
        >
          Para coordinarla, escríbeme por WhatsApp con la fecha que te acomoda.
        </p>
        <a
          href={WHATSAPP_LIMPIEZA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 transition-opacity hover:opacity-70"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: OLIVE,
            borderBottom: `1px solid ${OLIVE}`,
            paddingBottom: "2px",
          }}
        >
          Coordinar por WhatsApp
        </a>
      </>
    ),
  },
  {
    Icon: ShieldCheck,
    title: "Garantía de uso normal",
    text: "Cubrimos el uso cotidiano de la pieza. Si algo cede con el uso normal, lo solucionamos.",
    extra: null as React.ReactNode,
  },
];

const Posventa = () => (
  <section className="py-16 md:py-20" style={{ background: "#FAF7F1" }}>
    <div className="container mx-auto px-4 md:px-8 max-w-5xl">
      <div className="text-center mb-10 md:mb-12">
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: OLIVE,
            marginBottom: "12px",
          }}
        >
          Posventa
        </p>
        <h2
          style={{
            fontFamily: "'Bodoni Moda', serif",
            fontSize: "clamp(26px, 3.4vw, 38px)",
            color: DARK,
          }}
        >
          Lo que viene después de entregarte tu joya
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-10 md:gap-12">
        {items.map(({ Icon, title, text, extra }) => (
          <div key={title} className="text-center md:text-left">
            <Icon size={26} strokeWidth={1.3} style={{ color: OLIVE }} className="mx-auto md:mx-0 mb-4" />
            <h3
              style={{
                fontFamily: "'Bodoni Moda', serif",
                fontSize: "20px",
                color: DARK,
                marginBottom: "8px",
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                color: MUTED,
                lineHeight: 1.6,
              }}
            >
              {text}
            </p>
            {extra}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Posventa;
