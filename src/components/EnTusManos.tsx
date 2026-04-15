import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import foto1 from "@/assets/en-tus-manos-1.jpg";
import foto2 from "@/assets/en-tus-manos-2.png";

const slides = [
  { id: 0, src: foto1, name: "Momento especial", piece: "Novios con sus argollas" },
  { id: 1, src: foto2, name: "Amor eterno", piece: "Pieza personalizada" },
];

const AUTOPLAY = 4000;

const EnTusManos = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(next, AUTOPLAY);
    return () => clearTimeout(t);
  }, [current, paused, next]);

  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Galería</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
            En tus manos
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto italic">
            Las joyas viven cuando las llevan quienes amo
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative max-w-4xl mx-auto overflow-hidden rounded-lg"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="aspect-[4/3] md:aspect-[16/9] relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={slides[current].src}
                alt={slides[current].name}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Overlay caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <div>
                <p className="text-white font-display text-lg">{slides[current].name}</p>
                <p className="text-white/70 text-sm">{slides[current].piece}</p>
              </div>
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-primary w-5" : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Foto ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm mb-3">
            ¿Ya tienes tu pieza? Etiquétame en Instagram
          </p>
          <a
            href="https://www.instagram.com/giasolari.cl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 border border-primary text-primary text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all"
          >
            @giasolari.cl
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EnTusManos;
