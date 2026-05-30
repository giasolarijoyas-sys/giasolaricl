import { motion } from "framer-motion";
import { Diamond, CircleDot, Award } from "lucide-react";

const badges = [
  {
    icon: Diamond,
    title: "Diamantes certificados GIA/IGI",
    subtitle: "Con certificado gemológico incluido",
  },
  {
    icon: CircleDot,
    title: "100% a pedido en Santiago",
    subtitle: "Cada pieza se diseña y fabrica especialmente para ti",
  },
  {
    icon: Award,
    title: "Certificación Gia Solari",
    subtitle: "Cada pieza incluye su certificado de autenticidad",
  },
];

const TrustBadges = () => (
  <section className="py-12 md:py-16 bg-background border-b border-border/50">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {badges.map((b, i) => (
          <motion.div
            key={b.title}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <b.icon className="w-8 h-8 text-primary mx-auto mb-3" strokeWidth={1.2} />
            <h3 className="font-display text-base md:text-lg text-foreground mb-1">{b.title}</h3>
            <p className="text-muted-foreground text-sm">{b.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadges;
