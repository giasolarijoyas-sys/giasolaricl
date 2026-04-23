import { motion } from "framer-motion";
import { ShieldCheck, Gem, PenLine } from "lucide-react";

const cards = [
  {
    icon: ShieldCheck,
    title: "Garantía por Gusto — Únicos en Chile",
    desc: "Si la pieza no te encanta al recibirla, la ajustamos o reemplazamos. Somos la única joyería chilena que ofrece esta garantía.",
  },
  {
    icon: Gem,
    title: "Réplica — GRATIS",
    desc: "Junto a tu anillo de compromiso entregamos una réplica en plata y moissanite, sin costo. Para viaje, uso diario o para usar sin preocuparte.",
  },
  {
    icon: PenLine,
    title: "Grabado — GRATIS",
    desc: "Grabamos por dentro de tu anillo lo que quieras: una frase, una fecha o un dibujo simple. Un detalle que solo ustedes dos conocen.",
  },
];

const SoloEnGiaSolari = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
          Diferenciadores exclusivos
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
          Lo que solo encontrás en{" "}
          <em className="text-primary not-italic">Gia Solari</em>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 md:p-10 border-2 border-primary/30 rounded-lg bg-primary/5 text-center flex flex-col items-center hover:border-primary/60 transition-colors"
          >
            <c.icon size={36} className="text-primary mb-5" strokeWidth={1.4} />
            <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 leading-tight">
              {c.title}
            </h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {c.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SoloEnGiaSolari;
