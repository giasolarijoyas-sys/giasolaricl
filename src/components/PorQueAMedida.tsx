const OLIVE = "#4A5536";
const DARK = "#3A4429";
const MUTED = "#6B7752";
const CARAMEL = "#C9A87C";

const rows = [
  {
    label: "Diseño",
    medida: "Lo diseñamos juntos, a partir de tu historia.",
    vitrina: "Eliges entre lo que ya está hecho.",
  },
  {
    label: "Seguridad",
    medida: "Ves el render antes de fabricar.",
    vitrina: "Lo ves cuando ya está terminado.",
  },
  {
    label: "Significado",
    medida: "Tu historia y grabado dentro de la pieza.",
    vitrina: "Un producto más en una vitrina.",
  },
  {
    label: "Respaldo",
    medida: "Garantía por Gusto: si no te fascina, la rediseñamos.",
    vitrina: "Garantía acotada de cambio o devolución.",
  },
];

const PorQueAMedida = () => (
  <section className="py-20 md:py-28" style={{ background: "#F5EFE6" }}>
    <div className="container mx-auto px-4 md:px-8 max-w-5xl">
      <div className="text-center mb-12">
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
          Por qué a medida
        </p>
        <h2
          style={{
            fontFamily: "'Bodoni Moda', serif",
            fontSize: "clamp(28px, 3.8vw, 44px)",
            color: DARK,
            lineHeight: 1.15,
          }}
        >
          A medida <em style={{ color: CARAMEL }}>vs.</em> vitrina
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_1fr] gap-y-3 md:gap-y-4">
        <div className="hidden md:block" />
        <div
          className="hidden md:block text-center pb-3 border-b"
          style={{
            fontFamily: "'Bodoni Moda', serif",
            color: DARK,
            fontSize: "18px",
            borderColor: "rgba(74,85,54,0.25)",
          }}
        >
          A medida (Gia Solari)
        </div>
        <div
          className="hidden md:block text-center pb-3 border-b"
          style={{
            fontFamily: "'Bodoni Moda', serif",
            color: MUTED,
            fontSize: "18px",
            borderColor: "rgba(74,85,54,0.25)",
          }}
        >
          Vitrina
        </div>

        {rows.map((r) => (
          <div key={r.label} className="contents">
            <div
              className="pt-5 md:pt-4"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: OLIVE,
              }}
            >
              {r.label}
            </div>
            <div
              className="py-2 md:py-4 md:px-4"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14.5px",
                color: DARK,
                lineHeight: 1.55,
                borderBottom: "1px solid rgba(74,85,54,0.12)",
              }}
            >
              <span className="md:hidden block text-[11px] tracking-[0.18em] uppercase mb-1" style={{ color: OLIVE }}>A medida</span>
              {r.medida}
            </div>
            <div
              className="py-2 md:py-4 md:px-4"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14.5px",
                color: MUTED,
                lineHeight: 1.55,
                borderBottom: "1px solid rgba(74,85,54,0.12)",
              }}
            >
              <span className="md:hidden block text-[11px] tracking-[0.18em] uppercase mb-1" style={{ color: MUTED }}>Vitrina</span>
              {r.vitrina}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PorQueAMedida;
