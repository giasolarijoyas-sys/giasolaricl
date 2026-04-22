import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import heroImage from "@/assets/maca-hero.jpeg";
import heroDsc5775 from "@/assets/hero-dsc-5775.jpg";
import heroDsc5803 from "@/assets/hero-dsc-5803.jpg";

type Slide = {
  type: "image";
  src: string;
  alt?: string;
  eyebrow: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
};

const slides: Slide[] = [
  {
    type: "image",
    src: heroImage,
    alt: "Macarena González Solari, fundadora de Gia Solari",
    eyebrow: "Oro 18k · Platino · Diamantes certificados",
    title: "Joyas hechas a medida para",
    titleHighlight: "momentos únicos",
    subtitle: "Anillos de compromiso y argollas con Garantía por Gusto.",
  },
  {
    type: "image",
    src: heroDsc5775,
    alt: "Anillo tricillo con marco dorado",
    eyebrow: "Diseño a medida",
    title: "Diseñamos la pieza",
    titleHighlight: "contigo",
    subtitle: "Bocetos, materiales y diamantes elegidos en conjunto.",
  },
  {
    type: "image",
    src: heroDsc5803,
    alt: "Anillo tricillo en cofre de terciopelo",
    eyebrow: "Materiales certificados",
    title: "Oro 18k, platino y",
    titleHighlight: "diamantes certificados",
    subtitle: "Materiales nobles y trazabilidad completa.",
  },
];

const INTERVAL_IMAGE = 7000;

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(next, INTERVAL_IMAGE);
    return () => clearTimeout(timer);
  }, [current, paused, next]);

  const goTo = (i: number) => setCurrent(i);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].src}
            alt={slides[current].alt || "Gia Solari"}
            loading={current === 0 ? "eager" : "lazy"}
            fetchPriority={current === 0 ? "high" : "auto"}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 pt-[90px] pb-[120px] sm:pt-0 sm:pb-0">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div key={`copy-${current}`}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-gold-light tracking-[0.3em] uppercase text-xs md:text-sm mb-6"
              >
                {slides[current].eyebrow}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-[28px] leading-[1.1] sm:text-4xl md:text-6xl lg:text-7xl font-display text-cream mb-5"
              >
                {slides[current].title}
                {slides[current].titleHighlight && (
                  <>
                    {" "}
                    <em className="text-gold-light not-italic">
                      {slides[current].titleHighlight}
                    </em>
                  </>
                )}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="text-cream/80 text-base md:text-xl mb-8 max-w-lg font-light leading-relaxed"
              >
                {slides[current].subtitle}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="/joyas"
              className="min-h-[48px] px-6 py-3 bg-gradient-gold text-charcoal font-semibold tracking-widest uppercase text-sm text-center hover:opacity-90 transition-opacity flex items-center justify-center"
            >
              Ver piezas
            </a>
            <a
              href={buildWhatsAppUrl("home_hero")}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] px-6 py-3 border border-cream/40 text-cream tracking-widest uppercase text-sm text-center hover:border-gold-light hover:text-gold-light transition-colors flex items-center justify-center"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-gold w-5"
                : "bg-cream/40 hover:bg-cream/60"
            }`}
            aria-label={`Ir a slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
