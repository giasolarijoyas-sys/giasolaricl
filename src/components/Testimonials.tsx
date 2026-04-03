import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Andrés V.",
    piece: "Solitario oval · Platino",
    text: "No tenía idea de por dónde empezar. Macarena me hizo las preguntas correctas — no sobre el anillo, sino sobre Francisca. Cuando se lo puse, me dijo que era exactamente lo que siempre había soñado.",
  },
  {
    name: "Roberto S.",
    piece: "Collar con zafiro · Oro 18k amarillo",
    text: "Quería algo para nuestro décimo aniversario que fuera más que un regalo. Cuando mi esposa vio la pieza, lloró. Dijo que era como si alguien hubiera convertido una historia en oro.",
  },
  {
    name: "Catalina M.",
    piece: "Transformación · Aros heredados",
    text: "Tenía los aros de mi abuela guardados hace diez años. Macarena los transformó en algo completamente nuevo sin perder el oro original. Ahora los uso todos los días.",
  },
  {
    name: "Ignacio F.",
    piece: "Argollas de matrimonio · Oro 18k blanco",
    text: "Lo que más me sorprendió fue la honestidad. Le dije mi presupuesto y en vez de empujarme a gastar más, me mostró exactamente lo que era posible — y quedó espectacular.",
  },
  {
    name: "Valentina P.",
    piece: "Anillo de autor · Zafiro azul · Oro 18k rosado",
    text: "Me regalé un anillo por mis 40 años. Macarena me ayudó a diseñar algo que dijera exactamente quién soy. Fue la primera vez que me sentí el centro del proceso.",
  },
  {
    name: "Tomás R.",
    piece: "Diamante natural GIA · Platino",
    text: "Soy bastante exigente y fui con muchas preguntas técnicas. Macarena las respondió todas sin dudar. La pieza que hicimos juntos es exactamente lo que pedí.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-24 md:py-32 bg-card">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
