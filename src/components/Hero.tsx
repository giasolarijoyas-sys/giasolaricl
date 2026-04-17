import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import heroImage from "@/assets/maca-hero.jpeg";
import heroDsc5775 from "@/assets/hero-dsc-5775.jpg";
import heroDsc5803 from "@/assets/hero-dsc-5803.jpg";
import heroVideo1 from "@/assets/hero-video-1.mp4.asset.json";
import bannerHands from "@/assets/banner-hands.jpg";

type Slide = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

const slides: Slide[] = [
  { type: "image", src: heroImage, alt: "Macarena González Solari, fundadora de Gia Solari" },
  { type: "video", src: heroVideo1.url },
  { type: "image", src: heroDsc5775, alt: "Anillo tricillo con marco dorado" },
  { type: "image", src: heroDsc5803, alt: "Anillo tricillo en cofre de terciopelo" },
  { type: "image", src: bannerHands, alt: "Joyas Gia Solari en detalle" },
];

const INTERVAL_IMAGE = 2500;
const INTERVAL_VIDEO = 3000;

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const duration = slides[current].type === "video" ? INTERVAL_VIDEO : INTERVAL_IMAGE;
    const timer = setTimeout(next, duration);
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
          {slides[current].type === "video" ? (
            <video
              src={slides[current].src}
              autoPlay
              muted
              playsInline
              loop
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={slides[current].src}
              alt={slides[current].alt || "Gia Solari"}
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold-light tracking-[0.3em] uppercase text-xs md:text-sm mb-6"
          >
            Oro 18k · Platino · Diamantes certificados
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[28px] leading-[1.1] sm:text-4xl md:text-6xl lg:text-7xl font-display text-cream mb-5"
          >
            Joyería de autor en{" "}
            <em className="text-gold-light not-italic">Santiago</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-cream/80 text-base md:text-xl mb-8 max-w-lg font-light leading-relaxed"
          >
            Anillos de compromiso y argollas con{" "}
            <a href="/garantia-por-gusto" className="text-gold-light underline-offset-4 hover:underline">
              Garantía por Gusto
            </a>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href="/catalogo"
              className="min-h-[48px] px-6 py-3 bg-gradient-gold text-charcoal font-semibold tracking-widest uppercase text-sm text-center hover:opacity-90 transition-opacity flex items-center justify-center"
            >
              Ver piezas
            </a>
            <a
              href="https://wa.me/56984049502?text=Hola%20Gia%2C%20te%20escribo%20desde%20la%20web%2C%20me%20gustar%C3%ADa%20cotizar..."
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] px-6 py-3 border border-cream/40 text-cream tracking-widest uppercase text-sm text-center hover:border-gold-light hover:text-gold-light transition-colors flex items-center justify-center"
            >
              Cotizar por WhatsApp
            </a>
          </motion.div>
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
