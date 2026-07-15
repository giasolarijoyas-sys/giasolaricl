import { Eye, ShieldCheck, Heart, Hammer } from "lucide-react";

const OLIVE = "#4A5536";
const DARK = "#3A4429";
const MUTED = "#6B7752";

const pilares = [
  {
    Icon: Eye,
    title: "Visto antes de fabricar",
    text: "Te muestro un render de cómo se verá tu pieza antes de hacerla.",
  },
  {
    Icon: ShieldCheck,
    title: "Garantía por Gusto",
    text: "Si no te fascina, la rediseñamos.",
  },
  {
    Icon: Heart,
    title: "Cómoda y segura",
    text: "La diseño baja y al ras para que no te la saques nunca, y aseguro la piedra con las grifas necesarias para que jamás se caiga.",
  },
  {
    Icon: Hammer,
    title: "Hecha a mano",
    text: "Cada pieza una a la vez, en Santiago.",
  },
];

const TresPilares = () => (
  <section className="py-10 md:py-20" style={{ background: "#F5EFE6" }}>
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-4 gap-10 md:gap-10 max-w-6xl mx-auto">
        {pilares.map(({ Icon, title, text }) => (
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
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TresPilares;
