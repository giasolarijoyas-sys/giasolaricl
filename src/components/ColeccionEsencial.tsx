const OLIVE = "#4A5536";
const OLIVE_DARK = "#3A4429";
const CREAM = "#F5EFE6";
const CREAM_WARM = "#EBE2D2";
const BORDER = "#D9D2C4";
const INK = "#1A1A18";
const MUTED = "#6B7752";
const CARAMEL = "#C9A87C";

type Modelo = {
  nombre: string;
  detalle: string;
  precio: string;
  img?: string;
};

const modelos: Modelo[] = [
  {
    nombre: "Esencial",
    detalle: "Solitario · diamante de laboratorio 0,25 ct · oro 18k o platino",
    precio: "Desde $2.250.000",
  },
  {
    nombre: "Esencial +",
    detalle: "Solitario · diamante de laboratorio 0,30 ct · oro 18k o platino",
    precio: "Desde $2.600.000",
  },
  {
    nombre: "Clásico",
    detalle: "Solitario · diamante de laboratorio 0,50 ct · oro 18k o platino",
    precio: "Desde $3.225.000",
  },
];

const waUrl = (nombre: string) =>
  `https://wa.me/56984049502?text=${encodeURIComponent(
    `Hola Gia, me interesa el solitario ${nombre} de la Colección Esencial 💍`
  )}`;

type Props = { withContainer?: boolean };

const ColeccionEsencial = ({ withContainer = true }: Props) => {
  const Wrapper: React.ElementType = withContainer ? "section" : "div";

  return (
    <Wrapper
      className={withContainer ? "py-24 md:py-28" : ""}
      style={withContainer ? { background: CREAM } : undefined}
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Encabezado */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p
            className="mb-4"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: MUTED,
            }}
          >
            Colección Esencial
          </p>
          <h2
            style={{
              fontFamily: "'Bodoni Moda', serif",
              fontWeight: 400,
              fontSize: "clamp(30px, 3.6vw, 48px)",
              lineHeight: 1.1,
              color: OLIVE_DARK,
            }}
          >
            El solitario de verdad, a medida
          </h2>
          <p
            className="mt-5"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              lineHeight: 1.7,
              color: INK,
              fontWeight: 300,
            }}
          >
            Una piedra central certificada, hecha a tu medida, desde $2.250.000.
            No es una montura con piedritas: es tu solitario completo.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {modelos.map((m) => (
            <article
              key={m.nombre}
              className="flex flex-col"
              style={{
                background: CREAM,
                border: `1px solid ${BORDER}`,
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <div
                className="relative"
                style={{
                  aspectRatio: "4 / 5",
                  background: CREAM_WARM,
                  borderBottom: `1px solid ${BORDER}`,
                }}
              >
                {m.img ? (
                  <img
                    src={m.img}
                    alt={`Solitario ${m.nombre} – Gia Solari`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      style={{
                        fontFamily: "'Bodoni Moda', serif",
                        fontSize: "64px",
                        color: CARAMEL,
                        opacity: 0.55,
                      }}
                      aria-hidden="true"
                    >
                      ✦
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 md:p-7 flex flex-col flex-1">
                <h3
                  style={{
                    fontFamily: "'Bodoni Moda', serif",
                    fontWeight: 400,
                    fontSize: "26px",
                    lineHeight: 1.1,
                    color: OLIVE_DARK,
                  }}
                >
                  {m.nombre}
                </h3>
                <p
                  className="mt-3"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13.5px",
                    lineHeight: 1.6,
                    color: INK,
                    fontWeight: 300,
                  }}
                >
                  {m.detalle}
                </p>
                <p
                  className="mt-5"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: MUTED,
                  }}
                >
                  {m.precio}
                </p>

                <div className="mt-auto pt-6 flex flex-col gap-2">
                  <a
                    href={waUrl(m.nombre)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center transition-colors"
                    style={{
                      background: OLIVE,
                      color: CREAM,
                      padding: "11px 18px",
                      borderRadius: "999px",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "12.5px",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = OLIVE_DARK)}
                    onMouseLeave={(e) => (e.currentTarget.style.background = OLIVE)}
                  >
                    Cotizar este modelo
                  </a>
                  <a
                    href="/cotizar"
                    className="text-center"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "11.5px",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: MUTED,
                      paddingTop: "4px",
                    }}
                  >
                    o cotizar en el formulario →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Nota al pie */}
        <p
          className="mt-12 max-w-3xl mx-auto text-center"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            lineHeight: 1.7,
            color: MUTED,
            fontWeight: 300,
          }}
        >
          Todos los valores incluyen la piedra central certificada, el metal noble,
          la hechura artesanal y el Certificado Gia Solari. Diamantes de laboratorio
          certificados. El precio final varía según el tamaño y los detalles que
          conversemos.
        </p>
      </div>
    </Wrapper>
  );
};

export default ColeccionEsencial;
