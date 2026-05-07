import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import heroImage from "@/assets/joyas/halo-brillante-platino-01.jpg";

const Hero = () => {
  return (
    <section className="relative bg-background pt-[72px] md:pt-0 md:min-h-screen">
      <div className="md:grid md:grid-cols-12 md:min-h-screen">
        {/* Imagen — derecha en desktop, arriba en mobile */}
        <div className="order-1 md:order-2 md:col-span-7 relative overflow-hidden">
          <div className="h-[42vh] sm:h-[50vh] md:h-screen">
            <img
              src={heroImage}
              alt="Anillo Halo Brillante en platino — Atelier Gia Solari, Santiago de Chile"
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Panel de texto — izquierda en desktop, abajo en mobile */}
        <div className="order-2 md:order-1 md:col-span-5 bg-cream flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-6 py-12 md:px-12 lg:px-16 md:py-20 max-w-xl mx-auto md:mx-0"
          >
            <p className="text-gold tracking-[0.32em] uppercase text-[11px] md:text-xs mb-5">
              Atelier Gia Solari
            </p>
            <h1 className="font-display text-[30px] leading-[1.08] sm:text-4xl md:text-5xl lg:text-[56px] text-charcoal mb-5">
              Anillos de compromiso, hechos a mano en Santiago.
            </h1>
            <p className="text-charcoal/75 text-[15px] md:text-base leading-relaxed mb-8 max-w-md">
              Cada pieza nace en conversación contigo. Diseñamos en oro 18k y
              platino, con diamantes y piedras de color certificadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/joyas"
                className="min-h-[48px] px-7 py-3 bg-charcoal text-cream font-semibold tracking-[0.2em] uppercase text-xs text-center hover:bg-charcoal/90 transition-colors flex items-center justify-center"
              >
                Ver catálogo
              </a>
              <a
                href="/cotizar"
                className="min-h-[48px] px-7 py-3 border border-charcoal/40 text-charcoal tracking-[0.2em] uppercase text-xs text-center hover:border-gold hover:text-gold transition-colors flex items-center justify-center"
              >
                Cotizar tu pieza
              </a>
            </div>
            <a
              href={buildWhatsAppUrl("home_hero")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-[11px] tracking-[0.2em] uppercase text-charcoal/60 hover:text-gold transition-colors"
            >
              o escribime por WhatsApp →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
