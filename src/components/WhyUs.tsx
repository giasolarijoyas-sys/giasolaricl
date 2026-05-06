import { motion } from "framer-motion";
import { MapPin, Gem, Users } from "lucide-react";

const reasons = [
  { icon: MapPin, title: "Atelier propio en Santiago", desc: "Cada pieza se hace a mano en nuestro taller, una a la vez." },
  { icon: Gem, title: "Diamantes certificados GIA o IGI", desc: "Solo trabajamos con piedras certificadas, sin excepciones." },
  { icon: Users, title: "Atención personalizada de principio a fin", desc: "Te acompañamos desde la primera conversación hasta la entrega, no delegamos tu proyecto." },
];

const WhyUs = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
            Por qué elegirnos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
            Lo que nos hace{" "}
            <em className="text-primary not-italic">únicas</em>
          </h2>
        </motion.div>

        {/* Garantía por Gusto — featured */}
        <motion.div
          className="mb-10 p-8 md:p-12 border-2 border-primary/40 rounded-lg bg-primary/5 text-center max-w-2xl mx-auto"
        >
          <ShieldCheck size={36} className="text-primary mx-auto mb-4" />
          <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">
            Garantía por Gusto
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Si no te encanta el resultado, lo rehacemos. Tu satisfacción es
            nuestra prioridad absoluta.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              transition={{ delay: i * 0.08 }}
              className="text-center p-8 border border-border rounded-lg hover:border-primary/30 transition-colors"
            >
              <r.icon size={28} className="text-primary mx-auto mb-4" />
              <h3 className="font-display text-lg text-foreground mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <p className="font-display text-lg md:text-xl italic text-foreground leading-relaxed">
            "Una joya no es un gasto — es una historia que se hereda. La diseño
            para que la uses con orgullo hoy, y tu hija la use con orgullo mañana."
          </p>
          <p className="text-primary text-sm mt-4 tracking-wide">
            — Macarena González Solari · Fundadora Gia Solari
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default WhyUs;
