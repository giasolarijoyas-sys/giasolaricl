import imgBodas from "@/assets/gal-halo-olivo.png";
import imgVintage from "@/assets/gal-vintage-detail.jpg";
import imgAros from "@/assets/gal-prod-img_2104.jpg";
import imgCollares from "@/assets/gal-prod-img_2147.jpg";
import imgFamilia from "@/assets/banner-hands.jpg";

const cards = [
  { title: "Anillos de compromiso y argollas", href: "/joyas?tipo=bodas", img: imgBodas },
  { title: "Vintage", href: "/joyas?tipo=vintage", img: imgVintage },
  { title: "Aros", href: "/joyas?tipo=aros", img: imgAros },
  { title: "Collares", href: "/joyas?tipo=collares", img: imgCollares },
  { title: "Joyas de familia", href: "/joyas?tipo=familia", img: imgFamilia },
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
              className="relative block group overflow-hidden"
              style={{
                aspectRatio: "4 / 5",
                border: "1px solid rgba(58,68,41,0.18)",
                background: "#EBE2D2",
              }}
            >
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay para legibilidad del texto */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(26,26,24,0.15) 0%, rgba(26,26,24,0.55) 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <h3
                  style={{
                    fontFamily: "'Bodoni Moda', serif",
                    fontSize: "clamp(20px, 2.2vw, 30px)",
                    color: "#F5EFE6",
                    fontWeight: 400,
                    lineHeight: 1.2,
                    textShadow: "0 1px 12px rgba(0,0,0,0.35)",
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
                  color: "#F5EFE6",
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
