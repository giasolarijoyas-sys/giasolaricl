import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Andrés V.",
    piece: "Solitario oval · Platino",
    text: "Yo no cachaba nada de anillos. La Maca me preguntó cosas de la Fran que ni yo había pensado y armó algo que cuando se lo puse, me dijo 'es exactamente lo que siempre soñé'. Eso fue todo.",
  },
  {
    name: "Roberto S.",
    piece: "Collar con zafiro · Oro 18k amarillo",
    text: "Quería algo especial pa nuestros 10 años, no un regalo más. Mi mujer cuando lo vio se largó a llorar. Me dijo que era como si alguien hubiera metido nuestra historia en una joya.",
  },
  {
    name: "Ignacio F.",
    piece: "Argollas de matrimonio · Oro 18k amarillo",
    text: "Lo que más rescato es la honestidad. Le dije mi presupuesto a la Maca y en vez de meterme más plata, me mostró exactamente lo que se podía hacer. Quedaron increíbles.",
  },
  {
    name: "Tomás R.",
    piece: "Diamante natural GIA · Platino",
    text: "Soy medio hinchapelotas con los detalles y fui con mil preguntas técnicas. La Maca las respondió todas sin drama. La pieza quedó tal cual la pedí, cero improvisación.",
  },
  {
    name: "Martín G.",
    piece: "Tricillo diamantes · Platino",
    text: "Coticé en tres joyerías antes. La Maca fue la única que me explicó las diferencias entre piedras sin tratar de venderme la más cara. Ahí caché que estaba en el lugar correcto.",
  },
  {
    name: "Diego M.",
    piece: "Argollas grabadas · Oro 18k amarillo",
    text: "Las argollas las elegimos con calma, disfrutando cada paso. La Maca nos hizo sentir que cada detalle importaba. Quedaron exactamente como las imaginamos.",
  },
  {
    name: "Felipe A.",
    piece: "Anillo de compromiso · Diamante Lab · Oro 18k blanco",
    text: "Quería algo especial sin gastar una locura y la Maca me mostró diamantes de laboratorio que brillan increíble. Mi polola está chocha y se ve espectacular.",
  },
  {
    name: "Sebastián C.",
    piece: "Solitario esmeralda · Oro 18k amarillo",
    text: "Mi señora siempre quiso una esmeralda. Le conté eso a la Maca y me ayudó a pillar la piedra perfecta. El anillo quedó mucho mejor de lo que imaginé. La propuesta fue un éxito total.",
  },
  {
    name: "Nicolás P.",
    piece: "Anillo halo · Diamante lab · Platino",
    text: "Quería algo espectacular pero sin dejar la billetera vacía. La Maca me recomendó un diamante de laboratorio y weon, es idéntico a uno natural. Ella quedó loca.",
  },
  {
    name: "Cristóbal L.",
    piece: "Solitario cushion · Oro 18k amarillo",
    text: "Le describí el estilo de mi polola — piola pero con su toque — y la Maca lo pilló al tiro. Diseñó algo que es exactamente ella. La cara que puso no tiene precio.",
  },
  {
    name: "Matías H.",
    piece: "Anillo vintage · Zafiro · Platino",
    text: "Busqué meses un anillo con onda vintage y no encontraba nada. Llegué donde la Maca, le mostré tres fotos de Pinterest y en dos semanas me tenía algo mejor que cualquiera de esas fotos.",
  },
  {
    name: "Gonzalo E.",
    piece: "Solitario oval · Diamante GIA · Platino",
    text: "Me daba susto equivocarme. La Maca me preguntó cosas de mi señora que yo ni había pensado — qué joyas usa, cómo se viste. Con eso armó algo perfecto, cero riesgo.",
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

  // Show 1 on mobile, 2 on md, 3 on lg
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const update = () => setVisibleCount(getVisibleCount());
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
          {/* Navigation arrows */}
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

          {/* Cards */}
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

          {/* Dots */}
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
