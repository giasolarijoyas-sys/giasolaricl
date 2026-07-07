import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JOYAS } from "@/data/joyas";
import { getFavoritas, subscribeFavoritas, toggleFavorita } from "@/lib/favorites";

const OLIVE = "#4A5536";
const OLIVE_DEEP = "#3A4429";
const OLIVE_SOFT = "#6B7752";
const CREAM = "#F5EFE6";
const CREAM_WARM = "#EBE2D2";
const INK = "#1A1A18";

const Favoritas = () => {
  const [slugs, setSlugs] = useState<string[]>([]);

  useEffect(() => {
    setSlugs(getFavoritas());
    return subscribeFavoritas(() => setSlugs(getFavoritas()));
  }, []);

  const piezas = slugs
    .map((s) => JOYAS.find((j) => j.slug === s))
    .filter((j): j is (typeof JOYAS)[number] => !!j);

  return (
    <div className="min-h-screen" style={{ background: CREAM }}>
      <SEO
        title="Mis favoritas | Gia Solari Joyas"
        description="Las piezas que has guardado para revisar más tarde."
        path="/favoritas"
        noindex
      />
      <Navbar />

      <main className="pt-28 md:pt-36 pb-32">
        <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
          <header className="text-center mb-12">
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: OLIVE_SOFT,
              }}
            >
              Tu selección
            </p>
            <h1
              className="mt-3"
              style={{
                fontFamily: "'Bodoni Moda', serif",
                fontWeight: 400,
                fontSize: "clamp(32px, 4vw, 44px)",
                color: OLIVE_DEEP,
              }}
            >
              Mis favoritas
            </h1>
            {piezas.length > 0 && (
              <p
                className="mt-3"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: OLIVE_SOFT }}
              >
                {piezas.length} {piezas.length === 1 ? "pieza guardada" : "piezas guardadas"}
              </p>
            )}
          </header>

          {piezas.length === 0 ? (
            <div
              className="mx-auto max-w-md text-center py-16 px-6 rounded-lg"
              style={{ background: CREAM_WARM }}
            >
              <Heart size={32} strokeWidth={1.5} style={{ color: OLIVE_SOFT, margin: "0 auto" }} />
              <p
                className="mt-5"
                style={{
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: "22px",
                  color: OLIVE_DEEP,
                  lineHeight: 1.3,
                }}
              >
                Aún no has guardado piezas favoritas
              </p>
              <p
                className="mt-3"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: INK,
                }}
              >
                Toca el corazón en cualquier pieza para guardarla aquí y volver a verla cuando
                quieras.
              </p>
              <Link
                to="/joyas"
                className="inline-block mt-6 rounded-full transition-all hover:-translate-y-0.5"
                style={{
                  background: OLIVE,
                  color: CREAM,
                  padding: "14px 28px",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Ver nuestras piezas
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-6">
              {piezas.map((r) => (
                <div key={r.slug} className="relative group">
                  <Link to={`/joyas/${r.slug}`} className="block">
                    <div
                      className="overflow-hidden"
                      style={{ aspectRatio: "4/5", background: CREAM_WARM }}
                    >
                      <img
                        src={r.imagenes[0]}
                        alt={r.nombre}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p
                      className="mt-3"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "11px",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: OLIVE_SOFT,
                      }}
                    >
                      {r.categoria}
                    </p>
                    <p
                      className="mt-1"
                      style={{
                        fontFamily: "'Bodoni Moda', serif",
                        fontSize: "16px",
                        color: OLIVE_DEEP,
                      }}
                    >
                      {r.nombre}
                    </p>
                  </Link>
                  <button
                    type="button"
                    aria-label="Quitar de favoritas"
                    onClick={() => toggleFavorita(r.slug)}
                    className="absolute top-2 right-2 rounded-full backdrop-blur-sm"
                    style={{
                      width: 36,
                      height: 36,
                      background: "rgba(245,239,230,0.9)",
                      border: `1px solid ${OLIVE}`,
                      color: OLIVE,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Heart size={16} strokeWidth={1.5} fill={OLIVE} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Favoritas;
