import { motion } from "framer-motion";
import { ShieldCheck, PenLine, ArrowRight } from "lucide-react";

const items = [
  { icon: ShieldCheck, text: "Garantía por Gusto — únicos en Chile" },
  { icon: PenLine, text: "Grabado interior personalizado — gratis" },
];

const SoloEnGiaSolariCompact = () => (
  <section className="py-12 md:py-16 bg-primary/5 border-y border-primary/20">
    <div className="container mx-auto px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-primary tracking-[0.3em] uppercase text-xs mb-6">
          Lo que solo encontrás en Gia Solari
        </p>
        <ul className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
          {items.map((it, i) => (
            <motion.li
              key={it.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 text-sm md:text-base text-foreground"
            >
              <it.icon size={22} className="text-primary shrink-0" strokeWidth={1.4} />
              <span className="leading-snug">{it.text}</span>
            </motion.li>
          ))}
        </ul>
        <div className="text-center">
          <a
            href="/garantia-por-gusto"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Conocé nuestra Garantía por Gusto
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default SoloEnGiaSolariCompact;
