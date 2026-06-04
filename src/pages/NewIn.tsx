import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import WhatsAppButton from "@/components/WhatsAppButton";
import { JOYAS, formatPrecioDesde } from "@/data/joyas";

const NewIn = () => {
  // Recién salidas del taller. Hasta que el catálogo tenga createdAt real,
  // se muestran las primeras 12 piezas no-placeholder.
  const piezas = JOYAS.filter((j) => !j.isPlaceholder).slice(0, 12);

  return (
    <div className="min-h-screen" style={{ background: "#F5EFE6" }}>
      <SEO
        title="New In | Recién salido del taller, Gia Solari"
        description="Las piezas más recientes del showroom. Anillos de compromiso, argollas y joyas de autor recién entregadas."
        path="/new"
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
              Recién salido del taller
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
              New In
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
              Piezas terminadas hace poco en el showroom.
            </p>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {piezas.map((p) => {
              return (
                <Link key={p.slug} to={`/joyas/${p.slug}`} className="group block">
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
                  <h2
                    style={{
                      fontFamily: "'Bodoni Moda', serif",
                      fontSize: "18px",
                      color: "#3A4429",
                    }}
                  >
                    {p.nombre}
                  </h2>
                  <p
                    className="mt-1"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "13px",
                      color: "#C9A87C",
                    }}
                  >
                    A cotizar
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <Newsletter />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NewIn;
