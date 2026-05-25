const cards = [
  { title: "Anillos de compromiso y argollas", href: "/joyas?tipo=bodas" },
  { title: "Vintage", href: "/joyas?tipo=vintage" },
  { title: "Aros", href: "/joyas?tipo=aros" },
  { title: "Collares", href: "/joyas?tipo=collares" },
  { title: "Joyas de familia", href: "/joyas?tipo=familia" },
];

const VitrinaCategorias = () => {
  return (
    <section className="py-24 md:py-28" style={{ background: "#EBE2D2" }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p
            className="mb-4"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#6B7752",
            }}
          >
            Catálogo
          </p>
          <h2
            style={{
              fontFamily: "'Bodoni Moda', serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 3.5vw, 48px)",
              lineHeight: 1.1,
              color: "#3A4429",
            }}
          >
            Encuentra tu pieza
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="relative block group transition-colors duration-500"
              style={{
                aspectRatio: "4 / 5",
                border: "1px solid rgba(58,68,41,0.18)",
                background: "transparent",
              }}
            >
              <div
                className="absolute inset-0 transition-colors duration-500 group-hover:bg-[rgba(58,68,41,0.04)]"
              />
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <h3
                  style={{
                    fontFamily: "'Bodoni Moda', serif",
                    fontSize: "clamp(20px, 2.2vw, 30px)",
                    color: "#3A4429",
                    fontWeight: 400,
                    lineHeight: 1.2,
                  }}
                >
                  {c.title}
                </h3>
              </div>
              <span
                className="absolute left-1/2 -translate-x-1/2 bottom-6 transition-all duration-500 group-hover:translate-y-[-2px]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#6B7752",
                }}
              >
                Ver →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VitrinaCategorias;
