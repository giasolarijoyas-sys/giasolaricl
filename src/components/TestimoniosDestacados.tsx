import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonios } from "@/data/testimonios";

const TestimoniosDestacados = () => {
  const destacados = testimonios.filter((t) => t.destacado);
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? destacados.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === destacados.length - 1 ? 0 : i + 1));

  if (destacados.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Testimonios</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Lo que dicen quienes ya pasaron por acá
          </h2>
        </div>

        {/* Desktop: grid 3 columnas */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {destacados.slice(0, 3).map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-border rounded-lg p-8 bg-background flex flex-col"
            >
              <p className="text-foreground italic leading-relaxed mb-6">"{t.cita}"</p>
              <p className="font-bold text-foreground mt-auto">{t.autor}</p>
              <p className="text-xs text-muted-foreground mt-1">{t.pieza}</p>
            </motion.article>
          ))}
        </div>

        {/* Mobile: carrusel 1-a-1 */}
        <div className="md:hidden max-w-md mx-auto">
          <motion.article
            key={destacados[index].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border border-border rounded-lg p-8 bg-background"
          >
            <p className="text-foreground italic leading-relaxed mb-6">"{destacados[index].cita}"</p>
            <p className="font-bold text-foreground">{destacados[index].autor}</p>
            <p className="text-xs text-muted-foreground mt-1">{destacados[index].pieza}</p>
          </motion.article>

          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prev}
              aria-label="Testimonio anterior"
              className="p-2 border border-border rounded-full hover:bg-card transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>
            <span className="text-xs text-muted-foreground tracking-widest">
              {index + 1} / {destacados.length}
            </span>
            <button
              onClick={next}
              aria-label="Testimonio siguiente"
              className="p-2 border border-border rounded-full hover:bg-card transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimoniosDestacados;
