import { ShieldCheck, BookOpen, Hammer } from "lucide-react";

const OLIVE = "#4A5536";
const DARK = "#3A4429";
const MUTED = "#6B7752";

const pilares = [
  {
    Icon: ShieldCheck,
    title: "Garantía por Gusto",
    text: "30 días para rediseñar si no te enamora.",
  },
  {
    Icon: BookOpen,
    title: "Te explico todo",
    text: "De dónde viene cada material y por qué cuesta lo que cuesta.",
  },
  {
    Icon: Hammer,
    title: "Hecho a mano",
    text: "Cada pieza se fabrica una a la vez, en Santiago.",
  },
];

const TresPilares = () => (
  <section className="py-16 md:py-20" style={{ background: "#F5EFE6" }}>
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-3 gap-10 md:gap-14 max-w-5xl mx-auto">
        {pilares.map(({ Icon, title, text }) => (
          <div key={title} className="text-center md:text-left">
            <Icon size={26} strokeWidth={1.3} style={{ color: OLIVE }} className="mx-auto md:mx-0 mb-4" />
            <h3
              style={{
                fontFamily: "'Bodoni Moda', serif",
                fontSize: "22px",
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
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TresPilares;
