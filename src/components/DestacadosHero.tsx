import { Link } from "react-router-dom";
import { JOYAS } from "@/data/joyas";

/**
 * Piezas destacadas justo debajo del Hero.
 * Muestra "producto real" apenas entras (crítico en móvil desde Instagram).
 * Selección basada en las páginas de producto con más tráfico + variedad de estilos.
 */
const DESTACADOS_SLUGS = [
  "anillo-lady-di",          // Lady Di, Zafiro (el más icónico)
  "solitario-oval-oro-blanco", // Olivia · Solitario Oval
  "trilogia-tres-diamantes",   // Carlotta · Trilogía (tricillo clásico)
  "solitario-clasico-pave",    // Allegra · Solitario Pavé
  "trilogia-laterales-pera",   // Dalia · Trilogía Pera
  "halo-cushion-diamante"      // Valentina · Halo Cushion
];

const OLIVE = "#4A5536";
const OLIVE_DEEP = "#3A4429";
const OLIVE_SOFT = "#6B7752";
const CREAM = "#F5EFE6";
const CREAM_WARM = "#EBE2D2";
const INK = "#1A1A18";
const CHAMPAGNE = "#C9A87C";

const DestacadosHero = () => {
  const piezas = DESTACADOS_SLUGS
    .map((slug) => JOYAS.find((j) => j.slug === slug))
    .filter((j): j is NonNullable<typeof j> => Boolean(j && !j.isPlaceholder));

  if (piezas.length === 0) return null;

  return (
    <section
      aria-label="Piezas destacadas"
      style={{ background: CREAM, padding: "40px 0 32px" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-6 md:mb-8">
          <div>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: CHAMPAGNE,
                marginBottom: 8,
              }}
            >
              Piezas destacadas
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: "clamp(22px, 3vw, 32px)",
                lineHeight: 1.1,
                color: OLIVE_DEEP,
              }}
            >
              Nuestros anillos más buscados
            </h2>
          </div>
          <Link
            to="/joyas"
            className="hidden md:inline-block"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              color: OLIVE,
              textDecoration: "underline",
              textUnderlineOffset: 3,
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            Ver toda la colección →
          </Link>
        </div>

        {/* Móvil: scroll horizontal. Desktop: grilla 6 columnas */}
        <div
          className="flex md:grid gap-3 md:gap-5 overflow-x-auto md:overflow-visible pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none"
          style={{
            scrollbarWidth: "none",
            gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
          }}
        >
          {piezas.map((p) => (
            <Link
              key={p.slug}
              to={`/joyas/${p.slug}`}
              className="group flex-shrink-0 snap-start block"
              style={{ width: "44vw", maxWidth: 180 }}
            >
              <div
                className="md:w-full overflow-hidden"
                style={{ aspectRatio: "4/5", background: CREAM_WARM }}
              >
                <img
                  src={p.imagenes[0]}
                  alt={`${p.nombre}, ${p.categoria}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p
                className="mt-2"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 14,
                  lineHeight: 1.2,
                  color: INK,
                }}
              >
                {p.nombre.replace(" · ", ", ")}
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 11,
                  color: OLIVE_SOFT,
                  marginTop: 2,
                }}
              >
                Cotizar
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-6 md:hidden text-center">
          <Link
            to="/joyas"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              color: OLIVE,
              textDecoration: "underline",
              textUnderlineOffset: 3,
              fontWeight: 500,
            }}
          >
            Ver toda la colección →
          </Link>
        </div>
      </div>

      <style>{`
        section[aria-label="Piezas destacadas"] > div > div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default DestacadosHero;
