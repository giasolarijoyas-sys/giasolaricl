import { motion } from "framer-motion";
import heroImage from "@/assets/hero-ring.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Anillo de compromiso solitario en platino sobre mármol"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold-light tracking-[0.3em] uppercase text-sm mb-6"
          >
            Oro 18k · Platino · Diamantes certificados
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display text-cream leading-tight mb-6"
          >
            Joyas únicas que{" "}
            <em className="text-gold-light not-italic">cuentan tu historia</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-cream/70 text-lg md:text-xl mb-10 max-w-lg font-light leading-relaxed"
          >
            Diseñamos anillos de compromiso personalizados con atención uno a
            uno y una experiencia pensada para durar generaciones.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#cotizador"
              className="px-8 py-4 bg-gradient-gold text-charcoal font-semibold tracking-widest uppercase text-sm text-center hover:opacity-90 transition-opacity"
            >
              Cotiza tu joya
            </a>
            <a
              href="#historia"
              className="px-8 py-4 border border-cream/30 text-cream tracking-widest uppercase text-sm text-center hover:border-gold-light hover:text-gold-light transition-colors"
            >
              Conocer más →
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-gold/60 to-transparent"
      />
    </section>
  );
};

export default Hero;
