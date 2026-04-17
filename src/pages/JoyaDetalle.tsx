import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { JOYAS } from "@/data/joyas";

const JoyaDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = JOYAS.find((p) => p.slug === slug);

  if (!item) return <Navigate to="/joyas" replace />;

  const waText = encodeURIComponent(`Hola Gia, me interesa ${item.nombre}`);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: item.nombre,
    description: item.descripcion,
    image: item.imagenes.map((i) => `https://www.giasolari.cl${i}`),
    brand: { "@type": "Brand", name: "Gia Solari" },
    category: item.categoria,
    material: item.material,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/MadeToOrder",
      seller: { "@type": "Organization", name: "Gia Solari Joyas" },
      url: `https://www.giasolari.cl/joyas/${item.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${item.nombre} | ${item.categoria} — Gia Solari`}
        description={`${item.nombre}. ${item.descripcion} ${item.material}. Pieza única, hecha a medida.`}
        path={`/joyas/${item.slug}`}
        image={item.imagenes[0]}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(productJsonLd)}</script>
      </Helmet>
      <Navbar />

      <main className="pt-24 pb-32">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <nav className="text-xs tracking-widest uppercase text-charcoal/60 mb-6">
            <Link to="/joyas" className="hover:text-gold">
              ← Joyas
            </Link>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-3">
              {item.imagenes.map((src, i) => (
                <div
                  key={i}
                  className="aspect-[4/5] overflow-hidden bg-cream rounded-[4px]"
                >
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
              <p className="text-xs uppercase tracking-widest text-gold mb-2">
                {item.categoria}
              </p>
              <h1 className="text-3xl md:text-4xl font-display text-charcoal mb-3">
                {item.nombre}
              </h1>
              <p className="text-sm uppercase tracking-wider text-charcoal/70 mb-5">
                {item.material}
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                {item.descripcion}
              </p>

              <div className="border-t border-b border-gold/20 py-5 mb-6">
                <p className="text-sm text-charcoal/70 leading-relaxed italic">
                  Pieza única — cotiza a medida. Cada joya se fabrica especialmente
                  para ti, según el metal, las piedras y los detalles que elijas.
                </p>
              </div>

              <a
                href={`https://wa.me/56984049502?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full min-h-[48px] px-6 py-4 bg-gradient-gold text-charcoal font-semibold tracking-widest uppercase text-sm mb-3"
              >
                Cotizar por WhatsApp
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

export default JoyaDetalle;
