import { motion } from "framer-motion";
import { PenLine, Award, Diamond } from "lucide-react";

const items = [
  { icon: PenLine, text: "Grabado interior personalizado — gratis" },
  { icon: Award, text: "Certificación Gia Solari incluida" },
  { icon: Diamond, text: "Diamantes y piedras certificadas" },
];

const SoloEnGiaSolariCompact = () => (
  <section className="py-12 md:py-16 bg-primary/5 border-y border-primary/20">
    <div className="container mx-auto px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-primary tracking-[0.3em] uppercase text-xs mb-6">
          Lo que solo encontrás en Gia Solari
        </p>
        <ul className="grid sm:grid-cols-3 gap-4 md:gap-6">
          {items.map((it, i) => (
            <motion.li
              key={it.text}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 text-sm md:text-base text-foreground"
            >
              <it.icon size={22} className="text-primary shrink-0" strokeWidth={1.4} />
              <span className="leading-snug">{it.text}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default SoloEnGiaSolariCompact;
