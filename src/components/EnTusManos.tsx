const OLIVE = "#4A5536";
const DARK = "#3A4429";
const MUTED = "#6B7752";

const EnTusManos = () => (
  <section className="py-24 md:py-32" style={{ background: "#FAF7F1" }}>
    <div className="container mx-auto px-4 md:px-8 max-w-2xl text-center">
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "11px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: OLIVE,
          marginBottom: "16px",
        }}
      >
        Comunidad
      </p>
      <h2
        style={{
          fontFamily: "'Bodoni Moda', 'Playfair Display', serif",
          fontSize: "clamp(28px, 3.6vw, 44px)",
          color: DARK,
          lineHeight: 1.15,
        }}
      >
        Joyas que ya viven en Santiago
      </h2>
      <p
        className="mt-5 mb-10 mx-auto"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "15px",
          fontWeight: 300,
          color: MUTED,
          lineHeight: 1.7,
          maxWidth: "440px",
        }}
      >
        Etiquétame en Instagram como @giasolarijoyas y tu joya aparece acá.
      </p>
      <a
        href="https://instagram.com/giasolarijoyas"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-opacity hover:opacity-80"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "12px",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#FDFAF6",
          background: OLIVE,
          padding: "14px 28px",
          borderRadius: "999px",
        }}
      >
        Ver Instagram →
      </a>
    </div>
  </section>
);

export default EnTusManos;
