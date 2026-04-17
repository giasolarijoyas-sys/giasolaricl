import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CATEGORIAS } from "./CategoriaCatalogo";

const PiezaDetalle = () => {
  const { categoria, pieza } = useParams<{ categoria: string; pieza: string }>();
  const cat = categoria ? CATEGORIAS[categoria] : undefined;
  const item = cat?.piezas.find((p) => p.slug === pieza);

  if (!cat || !item) return <Navigate to="/catalogo" replace />;

  const waText = encodeURIComponent(
    `Hola Gia, te escribo desde la web, me gustaría cotizar la pieza "${item.nombre}"...`,
  );

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: item.nombre,
    description: item.descripcion,
    image: item.imagenes.map((i) => `https://www.giasolari.cl${i}`),
    brand: { "@type": "Brand", name: "Gia Solari" },
    category: cat.nombre,
    material: item.material,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "CLP",
      lowPrice: "1800000",
      offerCount: "1",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Gia Solari Joyas" },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${item.nombre} | ${cat.nombre} — Gia Solari`}
        description={`${item.nombre}: ${item.descripcion} ${item.material}.`}
        path={`/catalogo/${categoria}/${pieza}`}
        image={item.imagenes[0]}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(productJsonLd)}</script>
      </Helmet>
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <nav className="text-xs tracking-widest uppercase text-charcoal/60 mb-6">
            <Link to="/catalogo" className="hover:text-gold">Catálogo</Link>
            {" / "}
            <Link to={`/catalogo/${categoria}`} className="hover:text-gold">{cat.nombre}</Link>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="grid grid-cols-1 gap-3">
              {item.imagenes.map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden bg-cream/40">
                  <img
                    src={src}
                    alt={`${item.nombre} - foto ${i + 1}`}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="lg:sticky lg:top-24 self-start">
              <h1 className="text-3xl md:text-4xl font-display text-charcoal mb-3">{item.nombre}</h1>
              <p className="text-xs uppercase tracking-widest text-gold mb-5">{item.material}</p>
              <p className="text-charcoal/80 leading-relaxed mb-6">{item.descripcion}</p>

              <div className="border-t border-b border-gold/20 py-5 mb-6">
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Cada pieza se cotiza a medida según el metal, las piedras y el diseño elegido.
                  Pide tu cotización personalizada por WhatsApp.
                </p>
              </div>

              <a
                href={`https://wa.me/56984049502?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center min-h-[48px] px-6 py-4 bg-gradient-gold text-charcoal font-semibold tracking-widest uppercase text-sm mb-3"
              >
                Cotizar esta pieza
              </a>
              <Link
                to="/garantia-por-gusto"
                className="block text-center text-xs tracking-widest uppercase text-charcoal/60 hover:text-gold"
              >
                Incluye Garantía por Gusto
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PiezaDetalle;
