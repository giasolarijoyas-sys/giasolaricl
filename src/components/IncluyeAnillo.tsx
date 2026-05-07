import { motion } from "framer-motion";
import { Check } from "lucide-react";

const beneficios = [
  "Grabado interior personalizado (gratis)",
  "Garantía por Gusto",
  "Certificado GIA",
  "Certificación Gia Solari",
];

const IncluyeAnillo = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center mb-10">
        <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Incluido</p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground">
          Qué incluye tu anillo de compromiso
        </h2>
      </div>

      <motion.ul
        className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4 md:gap-5 border border-primary/30 rounded-lg bg-primary/5 p-8 md:p-10"
      >
        {beneficios.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center">
              <Check size={14} className="text-primary" strokeWidth={2.5} />
            </span>
            <span className="text-foreground text-sm md:text-base leading-snug">
              {b}
            </span>
          </li>
        ))}
      </motion.ul>

      <p className="text-center text-xs text-muted-foreground mt-6 max-w-2xl mx-auto italic">
        * Beneficios incluidos solo en anillos de compromiso. No aplican a aros,
        collares ni argollas de matrimonio.
      </p>
    </div>
  </section>
);

export default IncluyeAnillo;
