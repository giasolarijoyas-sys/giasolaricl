const cards = [
  {
    title: "Anillos de compromiso",
    href: "/joyas?categoria=Anillo+de+compromiso",
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Argollas de matrimonio",
    href: "/joyas?categoria=Argolla",
    img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Vintage",
    href: "/joyas?categoria=Vintage",
    img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Aros",
    href: "/joyas?categoria=Aros",
    img: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Collares",
    href: "/joyas?categoria=Collar",
    img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Joyas de familia",
    href: "/joyas",
    img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
  },
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
              className="relative block overflow-hidden group"
              style={{ aspectRatio: "4 / 5" }}
            >
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(58,68,41,0.85) 0%, rgba(58,68,41,0.15) 55%, rgba(58,68,41,0) 100%)",
                }}
              />
              <h3
                className="absolute left-0 right-0 bottom-0 p-5 md:p-7 text-center"
                style={{
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: "clamp(20px, 2.2vw, 32px)",
                  color: "#F5EFE6",
                  fontWeight: 400,
                }}
              >
                {c.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VitrinaCategorias;
