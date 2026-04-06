import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Roberto S.",
    piece: "Collar con zafiro · Oro amarillo 18k",
    text: "Quería algo especial pa nuestros 10 años de casado, no un regalo más. Cuando la Fran vio el collar, se emocionó tanto... como si alguien se hubiese metido nuestra historia en él.",
  },
  {
    name: "Ignacio F.",
    piece: "Aros de oro blanco y aguamarina",
    text: "Lo que más rescato es la honestidad. Le di mi presupuesto a la Maca, y me mostró las alternativas que se podía hacer. Los aros quedaron increíbles.",
  },
  {
    name: "Tomás R.",
    piece: "Diamante natural GIA · Platino",
    text: "Soy medio hinchador con los detalles y fui con mil preguntas técnicas... la Maca las respondió todas sin drama. El anillo quedó tal cual como me mostró que sería, cero improvisación.",
  },
  {
    name: "Felipe A.",
    piece: "Anillo de compromiso · Diamante lab · Oro 18k blanco",
    text: "Quería algo especial sin gastar una locura y la Maca me mostró diamantes de laboratorio que brillan increíble. Mi polola está chocha y su anillo quedó espectacular.",
  },
  {
    name: "Martina G.",
    piece: "Esclava en platino",
    text: "Tenía varias cadenas de oro rotas que no usaba. La Maca me recibió el metal y me explicó todo. Ahí caché que estaba en el lugar correcto.",
  },
  {
    name: "Diego M.",
    piece: "Argollas grabadas · Oro 18k",
    text: "A pesar que en argollas no hay muchos diseños, la Maca nos mostró alternativas y nos hizo sentir que cada detalle importaba. Quedaron exactamente como queríamos.",
  },
  {
    name: "Sebastián C.",
    piece: "Solitario esmeralda · Oro 18k amarillo",
    text: "Mi señora siempre quiso una esmeralda. Le conté eso a la Maca y me ayudó a encontrar la piedra perfecta. El anillo quedó mucho más lindo de lo que imaginé. Su propuesta fue un éxito.",
  },
  {
    name: "Cristóbal L.",
    piece: "Solitario · Oro 18k amarillo",
    text: "Le describí el estilo de mi polola — piola pero con su toque — y la Maca lo pilló al tiro. La cara que puso cuando se lo di, no tiene precio.",
  },
];

const AUTOPLAY_INTERVAL = 5000;

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(next, AUTOPLAY_INTERVAL);
    return () => clearTimeout(timer);
  }, [current, paused, next]);

  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(testimonials[(current + i) % testimonials.length]);
    }
    return result;
  };

  return (
    <section
      id="testimonios"
      className="py-24 md:py-32 bg-card"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
            Historias reales
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
            Lo que dicen quienes{" "}
            <em className="text-primary not-italic">confiaron en nosotras</em>
          </h2>
        </motion.div>

        <div className="relative">
          <button
            onClick={prev}
            className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          <div className="overflow-hidden px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {getVisibleTestimonials().map((t) => (
                  <div
                    key={t.name}
                    className="bg-background border border-border p-6 rounded-lg"
                  >
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          size={14}
                          className="fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display text-sm">
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="text-foreground text-sm font-medium">{t.name}</p>
                        <p className="text-muted-foreground text-xs">{t.piece}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-1.5 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-5" : "bg-border hover:bg-primary/40"
                }`}
                aria-label={`Testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
