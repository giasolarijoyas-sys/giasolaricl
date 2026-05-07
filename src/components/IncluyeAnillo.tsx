import { motion } from "framer-motion";
import { Check, Plus } from "lucide-react";

const incluidos = [
  "Grabado interior personalizado (gratis)",
  "Garantía por Gusto",
  "Certificación Gia Solari",
];

const opcionales = [
  "Certificación GIA del diamante (según pieza)",
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

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-5">
        <motion.div className="border border-primary/30 rounded-lg bg-primary/5 p-7">
          <p className="text-[11px] tracking-widest uppercase text-primary mb-4">
            Incluido en todas las piezas
          </p>
          <ul className="space-y-3">
            {incluidos.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center">
                  <Check size={14} className="text-primary" strokeWidth={2.5} />
                </span>
                <span className="text-foreground text-sm leading-snug">{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="border border-border rounded-lg bg-background p-7">
          <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-4">
            Opcional según pieza
          </p>
          <ul className="space-y-3">
            {opcionales.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                  <Plus size={14} className="text-muted-foreground" strokeWidth={2.5} />
                </span>
                <span className="text-foreground text-sm leading-snug">{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-6 max-w-2xl mx-auto italic">
        * Beneficios incluidos solo en anillos de compromiso. No aplican a aros,
        collares ni argollas de matrimonio.
      </p>
    </div>
  </section>
);

export default IncluyeAnillo;
