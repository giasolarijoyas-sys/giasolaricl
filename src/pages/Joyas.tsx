import { Link, useSearchParams } from "react-router-dom";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { JOYAS, HAS_REAL_JOYAS } from "@/data/joyas";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const waUrl = (nombre: string) => buildWhatsAppUrl("pieza_especifica", { nombre });

const Joyas = () => {
  const [searchParams] = useSearchParams();
  const showPlaceholders = searchParams.get("preview") === "1";
  const visibleJoyas = showPlaceholders
    ? JOYAS
    : JOYAS.filter((j) => !j.isPlaceholder);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Colección de Joyas | Gia Solari"
        description="Piezas únicas diseñadas y fabricadas a mano: anillos de compromiso, argollas de matrimonio, collares y aros en oro 18k y platino."
        path="/joyas"
      />
      <Navbar />

      <main className="pt-24 pb-32">
        <div className="max-w-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">
              Nuestra Colección
            </p>
            <h1 className="text-3xl md:text-4xl font-display text-charcoal mb-3">
              Colección de joyas a medida
            </h1>
            <p className="text-charcoal/70 text-sm leading-relaxed">
              Cada pieza es única, hecha a mano en Santiago. Pieza única — cotiza
              a medida.
            </p>
            <p className="mt-4 text-[12px] text-charcoal/60 italic max-w-md mx-auto leading-relaxed">
              Cada pieza de Gia Solari se fabrica a mano, una por una. El resultado
              final puede variar levemente de la imagen de referencia.
            </p>
          </motion.div>

          {/* Mensaje "preparando fotos" SOLO si no hay ninguna pieza real cargada */}
          {visibleJoyas.length === 0 && !HAS_REAL_JOYAS && (
            <div className="text-center py-16 border border-gold/20 rounded-[4px] bg-cream/30">
              <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                Estamos preparando las fotos de nuestras piezas. Mientras tanto,
                podemos cotizar tu joya por WhatsApp.
              </p>
              <a
                href={buildWhatsAppUrl("pieza_custom")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block min-h-[44px] px-6 py-3 bg-gradient-gold text-charcoal text-xs tracking-widest uppercase font-semibold"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          )}

          <div className="space-y-7 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-3">
            {visibleJoyas.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: Math.min(i, 5) * 0.05 }}
                className="bg-cream/40"
              >
                <Link to={`/joyas/${p.slug}`} className="block">
                  <div className="aspect-[4/5] overflow-hidden bg-cream rounded-[4px]">
                    <img
                      src={p.imagenes[0]}
                      alt={p.nombre}
                      loading={i < 2 ? "eager" : "lazy"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
                <div className="pt-3 px-1">
                  <h2 className="font-display text-[18px] text-charcoal leading-tight">
                    {p.nombre}
                  </h2>
                  <p className="text-[13px] text-charcoal/60 mt-1 mb-3">
                    {p.material}
                  </p>
                  <p className="text-[12px] text-charcoal/50 italic mb-3">
                    Pieza única — cotiza a medida
                  </p>
                  <a
                    href={waUrl(p.nombre)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full min-h-[44px] px-4 py-3 bg-charcoal text-cream text-xs tracking-widest uppercase hover:bg-gold hover:text-charcoal transition-colors"
                  >
                    Cotizar por WhatsApp
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA final */}
          <div className="mt-16 text-center border-t border-gold/20 pt-12">
            <h2 className="font-display text-2xl text-charcoal mb-4">
              ¿Querés algo a tu medida?
            </h2>
            <p className="text-charcoal/70 text-sm mb-6 max-w-md mx-auto">
              Diseñamos cada pieza desde cero según tu historia. Conversemos.
            </p>
            <a
              href={buildWhatsAppUrl("home_hero")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block min-h-[48px] px-8 py-4 bg-gradient-gold text-charcoal font-semibold tracking-widest uppercase text-sm"
            >
              Cotizá por WhatsApp
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Joyas;
