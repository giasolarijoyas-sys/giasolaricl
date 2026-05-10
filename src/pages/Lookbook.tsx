import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import WhatsAppButton from "@/components/WhatsAppButton";

const SHOTS = [
  { src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80", h: 520, alt: "Anillo de compromiso sobre lino" },
  { src: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80", h: 380, alt: "Anillo vintage de oro" },
  { src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80", h: 460, alt: "Diamante en mano con luz mediterránea" },
  { src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80", h: 540, alt: "Caja de terciopelo verde con joya" },
  { src: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=900&q=80", h: 400, alt: "Tela champán con anillo de oro" },
  { src: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=900&q=80", h: 500, alt: "Anillo de compromiso entre olivos" },
  { src: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=900&q=80", h: 360, alt: "Joya sobre mármol con luz cálida" },
  { src: "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?auto=format&fit=crop&w=900&q=80", h: 480, alt: "Anillo vintage con pátina" },
  { src: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80", h: 540, alt: "Mano con joya, luz nude" },
  { src: "https://images.unsplash.com/photo-1594735797933-d0c2cd2a7c4f?auto=format&fit=crop&w=900&q=80", h: 420, alt: "Anillo de compromiso con zafiro" },
  { src: "https://images.unsplash.com/photo-1583937443351-d7c0c8e3e4c7?auto=format&fit=crop&w=900&q=80", h: 500, alt: "Anillo art déco con baguette" },
  { src: "https://images.unsplash.com/photo-1517630800677-932d836ab680?auto=format&fit=crop&w=900&q=80", h: 380, alt: "Argollas de matrimonio con rama de olivo" },
];

const QUOTES = [
  null,
  null,
  null,
  null,
  "«Cada pieza nace de una conversación.»",
  null,
  null,
  null,
  null,
  "«Hechas para durar y para nombrarse.»",
  null,
  null,
];

const Lookbook = () => {
  return (
    <div className="min-h-screen" style={{ background: "#EBE2D2" }}>
      <SEO
        title="Lookbook Editorial | Gia Solari Joyas"
        description="El universo Gia Solari en imágenes. Atelier, piezas, y el estilo que nos define."
        path="/lookbook"
      />
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
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
              Lookbook
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
              Editorial Gia Solari
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
              Imágenes que cuentan el universo Gia. Nada está a la venta acá — esto
              es para mirar.
            </p>
          </header>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 [column-fill:_balance]">
            {SHOTS.map((s, i) => (
              <div key={i} className="break-inside-avoid mb-4 md:mb-6 relative">
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="w-full h-auto block"
                  style={{ minHeight: `${s.h * 0.6}px` }}
                />
                {QUOTES[i] && (
                  <div
                    className="absolute inset-0 flex items-center justify-center p-6"
                    style={{ background: "rgba(58,68,41,0.45)" }}
                  >
                    <p
                      className="text-center max-w-md"
                      style={{
                        fontFamily: "'Bodoni Moda', serif",
                        fontStyle: "italic",
                        fontSize: "clamp(20px, 2vw, 28px)",
                        color: "#F5EFE6",
                        lineHeight: 1.3,
                      }}
                    >
                      {QUOTES[i]}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/cotizar"
              className="inline-block transition-all"
              style={{
                background: "#4A5536",
                color: "#F5EFE6",
                padding: "14px 32px",
                borderRadius: "999px",
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Cotizar una pieza similar
            </Link>
          </div>
        </div>
      </main>

      <Newsletter />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Lookbook;
