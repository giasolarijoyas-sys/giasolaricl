import { motion } from "framer-motion";

const reasons = [
  { emoji: "🤍", title: "Especialistas en Platino", desc: "De las pocas joyerías en Chile que trabaja el platino con verdadera maestría." },
  { emoji: "💎", title: "Piedras Certificadas", desc: "Solo piedras con certificado GIA o IGI. Transparencia total." },
  { emoji: "✍️", title: "100% a Pedido", desc: "Ninguna pieza es igual. Cada joya nace de tu historia." },
  { emoji: "🌿", title: "Transparencia Total", desc: "Te explicamos cada material y proceso. Quiero que entiendas exactamente lo que estás eligiendo." },
  { emoji: "❤️", title: "Atención Personalizada", desc: "La Maca te acompaña personalmente en todo el proceso." },
  { emoji: "📍", title: "Santiago, Chile", desc: "Showroom en Las Condes. Visítanos con cita previa." },
];

const WhyUs = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-8 border border-border rounded-lg hover:border-primary/30 transition-colors"
            >
              <span className="text-3xl mb-4 block">{r.emoji}</span>
              <h3 className="font-display text-lg text-foreground mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
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
