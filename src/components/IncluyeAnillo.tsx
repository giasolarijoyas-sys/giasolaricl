import { motion } from "framer-motion";
import { Sparkles, PenLine, Gem } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  {
    icon: Sparkles,
    titulo: "Diseño a medida",
    desc: "Cada pieza se crea desde cero según tu historia.",
    href: null,
  },
  {
    icon: PenLine,
    titulo: "Grabado personalizado",
    desc: "Gratis, en el interior del anillo. Nombres, fecha o frase especial.",
    href: null,
  },
  {
    icon: Gem,
    titulo: "La Hermana",
    desc: "Una réplica en plata y moissanita, para usar en el día a día sin miedo.",
    href: "/la-hermana",
  },
];

const IncluyeAnillo = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center mb-12">
        <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Incluido</p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground">
          Qué incluye tu anillo de compromiso
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {items.map((item, i) => {
          const Icon = item.icon;
          const Card = (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-border rounded-lg p-8 bg-background flex flex-col h-full hover:border-primary/40 transition-colors"
            >
              <Icon className="w-7 h-7 text-primary mb-4" strokeWidth={1.4} />
              <h3 className="font-display text-xl text-foreground mb-3">{item.titulo}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              {item.href && (
                <span className="mt-4 text-xs uppercase tracking-widest text-primary">
                  Conocer más →
                </span>
              )}
            </motion.div>
          );
          return item.href ? (
            <Link key={item.titulo} to={item.href} className="block">
              {Card}
            </Link>
          ) : (
            <div key={item.titulo}>{Card}</div>
          );
        })}
      </div>
    </div>
  </section>
);

export default IncluyeAnillo;
