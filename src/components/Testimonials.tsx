import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Helmet } from "react-helmet-async";

const testimonials = [
  {
    name: "Roberto S.",
    city: "Santiago",
    piece: "Collar con zafiro · Oro amarillo 18k",
    text: "Quería algo especial pa nuestros 10 años de casado, no un regalo más. Cuando la Fran vio el collar, se emocionó tanto... como si alguien se hubiese metido nuestra historia en él.",
  },
  {
    name: "Ignacio F.",
    city: "Santiago",
    piece: "Aros de oro blanco y aguamarina",
    text: "Lo que más rescato es la honestidad. Le di mi presupuesto a la Maca, y me mostró las alternativas que se podía hacer. Los aros quedaron increíbles.",
  },
  {
    name: "Tomás R.",
    city: "Santiago",
    piece: "Diamante natural GIA · Platino",
    text: "Soy medio hinchador con los detalles y fui con mil preguntas técnicas... la Maca las respondió todas sin drama. El anillo quedó tal cual como me mostró que sería, cero improvisación.",
  },
  {
    name: "Felipe A.",
    city: "Santiago",
    piece: "Anillo de compromiso · Diamante lab · Oro 18k blanco",
    text: "Quería algo especial sin gastar una locura y la Maca me mostró diamantes de laboratorio que brillan increíble. Mi polola está chocha y su anillo quedó espectacular.",
  },
  {
    name: "Martina G.",
    city: "Santiago",
    piece: "Esclava en platino",
    text: "Tenía varias cadenas de oro rotas que no usaba. La Maca me recibió el metal y me explicó todo. Ahí caché que estaba en el lugar correcto.",
  },
  {
    name: "Diego M.",
    city: "Santiago",
    piece: "Argollas grabadas · Oro 18k",
    text: "A pesar que en argollas no hay muchos diseños, la Maca nos mostró alternativas y nos hizo sentir que cada detalle importaba. Quedaron exactamente como queríamos.",
  },
  {
    name: "Sebastián C.",
    city: "Santiago",
    piece: "Solitario esmeralda · Oro 18k amarillo",
    text: "Mi señora siempre quiso una esmeralda. Le conté eso a la Maca y me ayudó a encontrar la piedra perfecta. El anillo quedó mucho más lindo de lo que imaginé. Su propuesta fue un éxito.",
  },
  {
    name: "Cristóbal L.",
    city: "Santiago",
    piece: "Solitario · Oro 18k amarillo",
    text: "Le describí el estilo de mi polola — piola pero con su toque — y la Maca lo pilló al tiro. La cara que puso cuando se lo di, no tiene precio.",
  },
  {
    name: "Valentina P.",
    city: "Viña del Mar",
    piece: "Anillo de compromiso · Diamante natural · Platino",
    text: "Desde la primera reunión sentí que estaba en buenas manos. La Maca me explicó todo con paciencia y me ayudó a elegir la piedra perfecta dentro de mi presupuesto.",
  },
  {
    name: "Andrés K.",
    city: "Santiago",
    piece: "Argollas · Platino",
    text: "Queríamos algo simple pero especial. Las argollas en platino quedaron perfectas, y el grabado interior fue un detalle que mi señora amó.",
  },
  {
    name: "Camila R.",
    city: "Concepción",
    piece: "Collar personalizado · Oro 18k",
    text: "Hice todo por WhatsApp y Zoom porque vivo en regiones. La Maca fue súper atenta y el collar llegó tal cual como lo imaginé. Servicio impecable.",
  },
  {
    name: "Francisco M.",
    city: "Santiago",
    piece: "Anillo tres piedras · Oro blanco 18k",
    text: "El proceso fue increíble. Ver los renders antes de fabricar me dio mucha confianza. El anillo superó todas mis expectativas.",
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

  const t = testimonials[current];

  const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    "name": "Gia Solari Joyas",
    "url": "https://www.giasolari.cl",
    "review": testimonials.map(t => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": t.name },
      "reviewBody": t.text,
      "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 },
      "itemReviewed": { "@type": "Product", "name": t.piece },
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 5,
      "reviewCount": testimonials.length,
      "bestRating": 5,
    },
  };

  return (
    <section
      id="testimonios"
      className="py-24 md:py-32 bg-card"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(reviewJsonLd)}</script>
      </Helmet>
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

        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={prev}
            className="absolute -left-2 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute -right-2 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-12 px-6 md:px-12"
            >
              {/* Avatar */}
              <div className="shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-display text-2xl md:text-3xl">{t.name[0]}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <Quote className="w-6 h-6 text-primary/30 mb-3 mx-auto md:mx-0" />
                <p className="font-display text-foreground text-base md:text-lg italic leading-relaxed mb-4">
                  "{t.text}"
                </p>
                <div>
                  <p className="text-foreground font-medium">{t.name}, {t.city}</p>
                  <p className="text-muted-foreground text-sm">{t.piece}</p>
                </div>
                <div className="flex gap-0.5 mt-3 justify-center md:justify-start">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={12} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>

              {/* Piece photo placeholder */}
              <div className="shrink-0 hidden lg:block">
                <div className="w-24 h-24 rounded-lg bg-muted" />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-1.5 mt-10">
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
