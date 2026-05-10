import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import WhatsAppButton from "@/components/WhatsAppButton";

export const DIARIO_ENTRIES = [
  {
    slug: "catalina-m",
    novia: "Catalina M.",
    pieza: "Anillo Felisa",
    frase: "Quería honrar a mi abuela en algo que pudiera mirar todos los días.",
    img: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "trinidad-v",
    novia: "Trinidad V.",
    pieza: "Solitario Oval",
    frase: "Algo simple, pero que se notara que era pensado.",
    img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "florencia-a",
    novia: "Florencia A.",
    pieza: "Halo Cushion",
    frase: "Buscaba esa luz cálida del oro amarillo, sin ser obvia.",
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "antonia-r",
    novia: "Antonia R.",
    pieza: "Argolla cintillo",
    frase: "Que se sintiera parte de mí, no encima de mí.",
    img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "magdalena-s",
    novia: "Magdalena S.",
    pieza: "Anillo Isabel",
    frase: "Llegué con una foto vieja de mi mamá. Salimos con esto.",
    img: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "pilar-o",
    novia: "Pilar O.",
    pieza: "Trilogía vintage",
    frase: "Tres piedras, tres momentos. Lo entendió al toque.",
    img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=900&q=80",
  },
];

const Diario = () => {
  return (
    <div className="min-h-screen" style={{ background: "#F5EFE6" }}>
      <SEO
        title="Diario de Atelier | Historias detrás de cada pieza · Gia Solari"
        description="Las historias de novias reales que pasaron por el atelier. Cada pieza nace de una conversación. Lee sus historias."
        path="/diario"
      />
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <header className="text-center mb-16 max-w-2xl mx-auto">
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
              Bitácora
            </p>
            <h1
              style={{
                fontFamily: "'Bodoni Moda', serif",
                fontWeight: 400,
                fontSize: "clamp(40px, 5vw, 64px)",
                lineHeight: 1.05,
                color: "#3A4429",
              }}
            >
              Diario de Atelier
            </h1>
            <p
              className="mt-6"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                color: "#6B7752",
                lineHeight: 1.6,
              }}
            >
              Las historias detrás de las piezas. Novias reales, momentos reales.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {DIARIO_ENTRIES.map((e) => (
              <Link key={e.slug} to={`/diario/${e.slug}`} className="group block">
                <div
                  className="overflow-hidden mb-5"
                  style={{ aspectRatio: "4 / 5", background: "#EBE2D2" }}
                >
                  <img
                    src={e.img}
                    alt={`${e.novia} — ${e.pieza}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#C9A87C",
                  }}
                >
                  {e.novia} · {e.pieza}
                </p>
                <p
                  className="mt-3"
                  style={{
                    fontFamily: "'Bodoni Moda', serif",
                    fontStyle: "italic",
                    fontSize: "20px",
                    lineHeight: 1.35,
                    color: "#3A4429",
                  }}
                >
                  «{e.frase}»
                </p>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#4A5536",
                  }}
                >
                  Leer la historia →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Newsletter />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Diario;
