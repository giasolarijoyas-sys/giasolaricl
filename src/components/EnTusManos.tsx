import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import foto1 from "@/assets/en-tus-manos-1.jpg";
import foto2 from "@/assets/en-tus-manos-2.jpg";
import foto3 from "@/assets/en-tus-manos-3.jpg";
import foto4 from "@/assets/en-tus-manos-4.jpg";
import foto5 from "@/assets/en-tus-manos-5.jpg";
import foto6 from "@/assets/en-tus-manos-6.jpg";
import foto7 from "@/assets/en-tus-manos-7.jpg";
import foto8 from "@/assets/en-tus-manos-8.jpg";
import foto9 from "@/assets/en-tus-manos-9.jpg";
import foto10 from "@/assets/en-tus-manos-10.jpg";

const slides = [
  { id: 0, src: foto1, alt: "Clienta usando anillo de compromiso Gia Solari en mano" },
  { id: 1, src: foto2, alt: "Detalle de anillo solitario en mano de clienta" },
  { id: 2, src: foto3, alt: "Clienta mostrando anillo halo con diamante" },
  { id: 3, src: foto4, alt: "Anillo de compromiso en oro 18k puesto en mano" },
  { id: 4, src: foto5, alt: "Clienta con anillo tricillo de diamantes" },
  { id: 5, src: foto6, alt: "Detalle de anillo pavé en mano de clienta" },
  { id: 6, src: foto7, alt: "Clienta mostrando argollas de matrimonio" },
  { id: 7, src: foto8, alt: "Anillo solitario con diamante puesto en mano" },
  { id: 8, src: foto9, alt: "Clienta con anillo art déco de Gia Solari" },
  { id: 9, src: foto10, alt: "Detalle de anillo de compromiso en mano" },
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
          className="text-center mb-12"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Galería</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
            En tus manos
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto italic">
            Cada joya, una historia que empieza a usarse y crear su historia
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative max-w-xs mx-auto overflow-hidden rounded-lg"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="aspect-[3/4] relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={slides[current].src}
                alt={slides[current].alt}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full object-cover scale-[0.85]"
              />
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === current ? "bg-primary w-4" : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Foto ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm mb-3">
            ¿Ya tienes tu pieza? Etiquétame en Instagram
          </p>
          <a
            href="https://www.instagram.com/giasolarijoyas/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 border border-primary text-primary text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all"
          >
            @giasolarijoyas
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EnTusManos;
