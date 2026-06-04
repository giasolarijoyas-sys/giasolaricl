import { Link } from "react-router-dom";
import { JOYAS, formatPrecioDesde } from "@/data/joyas";

const NewIn = () => {
  // Toma las primeras 6 piezas reales (no placeholders) como "recién salidas"
  // hasta que se agregue un campo createdAt real al catálogo.
  const piezas = JOYAS.filter((j) => !j.isPlaceholder).slice(0, 6);

  if (piezas.length === 0) return null;

  return (
    <section className="py-24 md:py-28" style={{ background: "#F5EFE6" }}>
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
            Recién salido del taller
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
            New In
          </h2>
        </div>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex gap-4 md:gap-6 md:grid md:grid-cols-3 lg:grid-cols-6">
            {piezas.map((p) => {
              const precio = formatPrecioDesde(p.precioDesde);
              return (
                <Link
                  key={p.slug}
                  to={`/joyas/${p.slug}`}
                  className="flex-[0_0_60%] sm:flex-[0_0_40%] md:flex-auto group"
                >
                  <div
                    className="overflow-hidden mb-3"
                    style={{ aspectRatio: "4 / 5", background: "#EBE2D2" }}
                  >
                    <img
                      src={p.imagenes[0]}
                      alt={p.nombre}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Bodoni Moda', serif",
                      fontSize: "18px",
                      color: "#3A4429",
                    }}
                  >
                    {p.nombre}
                  </h3>
                  <p
                    className="mt-1"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "13px",
                      color: "#C9A87C",
                    }}
                  >
                    {precio || "Desde $1.200.000"}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/new"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#4A5536",
              borderBottom: "1px solid #C9A87C",
              paddingBottom: "4px",
            }}
          >
            Ver todas las novedades →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewIn;
