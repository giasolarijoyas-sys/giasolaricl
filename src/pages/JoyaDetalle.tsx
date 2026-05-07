import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MessageCircle, Pencil, Hammer, Calendar } from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { JOYAS, formatPrecioDesde } from "@/data/joyas";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const JoyaDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = JOYAS.find((p) => p.slug === slug);

  if (!item) return <Navigate to="/joyas" replace />;

  const waUrl = buildWhatsAppUrl("pieza_especifica", { nombre: item.nombre });
  const precioLabel = formatPrecioDesde(item.precioDesde);

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
      ...(item.precioDesde
        ? { price: item.precioDesde, priceCurrency: "CLP" }
        : {}),
    },
  };

  const [foto, ...galeria] = item.imagenes;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${item.nombre} | ${item.categoria} — Gia Solari`}
        description={`${item.nombre}. ${item.descripcion} ${item.material}. Pieza única, hecha a medida.`}
        path={`/joyas/${item.slug}`}
        image={item.imagenes[0]}
        noindex={item.isPlaceholder}
      />
      <Helmet>
        {!item.isPlaceholder && (
          <script type="application/ld+json">{JSON.stringify(productJsonLd)}</script>
        )}
      </Helmet>
      <Navbar />

      <main className="pt-24 pb-32">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <nav className="text-xs tracking-widest uppercase text-charcoal/60 mb-6">
            <Link to="/joyas" className="hover:text-gold">
              ← Joyas
            </Link>
          </nav>

          {/* HERO: foto principal + datos */}
          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            <div className="aspect-[4/5] overflow-hidden bg-cream rounded-[4px]">
              <img
                src={foto}
                alt={`${item.nombre} — ${item.material}`}
                loading="eager"
                className="w-full h-full object-cover"
              />
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
              {precioLabel && (
                <p className="text-base text-charcoal mb-5 font-medium">
                  {precioLabel}{" "}
                  <span className="text-charcoal/50 text-xs uppercase tracking-wider">
                    · referencial
                  </span>
                </p>
              )}
              <p className="text-charcoal/80 leading-relaxed mb-6">
                {item.descripcion}
              </p>

              <div className="border-t border-b border-gold/20 py-5 mb-6">
                <p className="text-sm text-charcoal/70 leading-relaxed italic">
                  Pieza única — cotiza a medida. Cada joya se fabrica especialmente
                  para ti, según el metal, las piedras y los detalles que elijas.
                </p>
                <p className="mt-3 text-[12px] text-charcoal/60 italic leading-relaxed">
                  Cada pieza de Gia Solari se fabrica a mano, una por una. El
                  resultado final puede variar levemente de la imagen de referencia.
                </p>
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full min-h-[48px] px-6 py-4 bg-gradient-gold text-charcoal font-semibold tracking-widest uppercase text-sm mb-3"
              >
                <MessageCircle className="w-4 h-4" />
                Cotizar esta pieza por WhatsApp
              </a>
              <Link
                to="/cotizar"
                className="inline-flex items-center justify-center w-full min-h-[48px] px-6 py-3 border border-charcoal/40 text-charcoal font-semibold tracking-widest uppercase text-xs hover:border-gold hover:text-gold transition-colors mb-3"
              >
                Cotizar pieza similar
              </Link>
              <Link
                to="/garantia-por-gusto"
                className="block text-center text-xs tracking-widest uppercase text-charcoal/60 hover:text-gold"
              >
                Incluye Garantía por Gusto
              </Link>
            </div>
          </div>

          {/* SOBRE ESTA PIEZA */}
          <section className="mb-16 max-w-3xl">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
              Sobre esta pieza
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-5">
              {item.nombre}
            </h2>
            <p className="text-charcoal/80 leading-relaxed mb-5 whitespace-pre-line">
              {item.descripcionLarga ?? item.descripcion}
            </p>
            <dl className="grid sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gold/20 pt-5">
              <div>
                <dt className="text-[11px] tracking-widest uppercase text-charcoal/50 mb-1">
                  Materiales
                </dt>
                <dd className="text-sm text-charcoal/80">{item.material}</dd>
              </div>
              <div>
                <dt className="text-[11px] tracking-widest uppercase text-charcoal/50 mb-1">
                  Categoría
                </dt>
                <dd className="text-sm text-charcoal/80">{item.categoria}</dd>
              </div>
            </dl>

            {item.historia && (
              <div className="mt-8 p-6 bg-cream/50 border-l-2 border-gold">
                <p className="text-[11px] tracking-widest uppercase text-gold mb-2">
                  La historia
                </p>
                <p className="text-charcoal/80 leading-relaxed italic">
                  {item.historia}
                </p>
              </div>
            )}
          </section>

          {/* GALERÍA SCROLLEABLE */}
          {galeria.length > 0 && (
            <section className="mb-16 -mx-4 md:mx-0">
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4 px-4 md:px-0">
                Galería
              </p>
              <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 px-4 md:px-0 snap-x snap-mandatory">
                {galeria.map((src, i) => (
                  <div
                    key={i}
                    className="flex-[0_0_80%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] snap-start aspect-[4/5] overflow-hidden bg-cream rounded-[4px]"
                  >
                    <img
                      src={src}
                      alt={`${item.nombre} — foto ${i + 2}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CÓMO TRABAJAMOS */}
          <section className="mb-16 border-t border-gold/20 pt-12">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3 text-center">
              Cómo trabajamos
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-charcoal text-center mb-10">
              De la conversación a tu joya
            </h2>
            <ol className="grid md:grid-cols-3 gap-8">
              {[
                {
                  Icon: MessageCircle,
                  titulo: "Conversamos",
                  texto:
                    "Nos cuentas qué imaginas. Te asesoramos sobre piedras, metales y formato sin compromiso.",
                },
                {
                  Icon: Pencil,
                  titulo: "Diseñamos",
                  texto:
                    "Hacemos un boceto a mano y lo ajustamos hasta que la pieza sea exactamente lo que quieres.",
                },
                {
                  Icon: Hammer,
                  titulo: "Fabricamos a mano",
                  texto:
                    "Tu joya se hace una por una en nuestro taller en Santiago. 4 a 6 semanas desde la aprobación.",
                },
              ].map(({ Icon, titulo, texto }, i) => (
                <li key={titulo} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cream border border-gold/30 mb-4">
                    <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <p className="text-[11px] tracking-widest uppercase text-gold mb-2">
                    Paso {i + 1}
                  </p>
                  <h3 className="font-display text-lg text-charcoal mb-2">
                    {titulo}
                  </h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    {texto}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* CTA FINAL */}
          <section className="text-center border-t border-gold/20 pt-12">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-4">
              ¿Te gustaría verla en persona?
            </h2>
            <p className="text-charcoal/70 text-sm mb-6 max-w-md mx-auto">
              Te recibimos en nuestro showroom en Las Condes con cita previa.
              Conversamos sobre tu pieza, te mostramos materiales y muestras reales.
            </p>
            <Link
              to="/agenda"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-4 bg-charcoal text-cream font-semibold tracking-widest uppercase text-sm hover:bg-gold hover:text-charcoal transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Agendar visita al showroom
            </Link>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppButton hideOnMobile />

      {/* Sticky CTA mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[998] bg-background/95 backdrop-blur-md border-t border-gold/20 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full min-h-[48px] px-4 py-3 bg-gradient-gold text-charcoal font-semibold tracking-widest uppercase text-xs"
        >
          <MessageCircle className="w-4 h-4" />
          Cotizar por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default JoyaDetalle;
