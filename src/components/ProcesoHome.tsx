import { buildWhatsAppUrl } from "@/lib/whatsapp";

const OLIVE = "#4A5536";
const OLIVE_DARK = "#3A4429";
const CREAM = "#F5EFE6";
const DARK = "#3A4429";
const MUTED = "#6B7752";

const pasos = [
  {
    n: "01",
    title: "Me cuentas qué tienes en mente",
    text: "Por WhatsApp o en el showroom. Sin compromiso.",
  },
  {
    n: "02",
    title: "Diseñamos juntos antes de fabricar nada",
    text: "Bocetos, piedras y materiales. Tú apruebas cada paso.",
  },
  {
    n: "03",
    title: "Te entrego tu joya",
    text: "Con certificado y Garantía por Gusto.",
  },
];

const ProcesoHome = () => (
  <section className="py-12 md:py-28 bg-background">
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center mb-10 md:mb-14 max-w-2xl mx-auto">
        <p
          className="mb-4"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: OLIVE,
          }}
        >
          Cómo trabajamos
        </p>
        <h2
          style={{
            fontFamily: "'Bodoni Moda', serif",
            fontWeight: 400,
            fontSize: "clamp(30px, 3.5vw, 44px)",
            lineHeight: 1.1,
            color: DARK,
          }}
        >
          De la idea a tu joya, en <em>3 pasos</em>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-12 max-w-5xl mx-auto mb-10 md:mb-14">
        {pasos.map((p) => (
          <div key={p.n} className="text-center md:text-left">
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "44px",
                color: OLIVE,
                lineHeight: 1,
                marginBottom: "12px",
              }}
            >
              {p.n}
            </div>
            <h3
              style={{
                fontFamily: "'Bodoni Moda', serif",
                fontSize: "20px",
                color: DARK,
                marginBottom: "8px",
                lineHeight: 1.25,
              }}
            >
              {p.title}
            </h3>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                color: MUTED,
                lineHeight: 1.6,
              }}
            >
              {p.text}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href={buildWhatsAppUrl("home_hero")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-all"
          style={{
            background: OLIVE,
            color: CREAM,
            padding: "14px 32px",
            borderRadius: "999px",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = OLIVE_DARK)}
          onMouseLeave={(e) => (e.currentTarget.style.background = OLIVE)}
        >
          Partimos por WhatsApp →
        </a>
      </div>
    </div>
  </section>
);

export default ProcesoHome;
