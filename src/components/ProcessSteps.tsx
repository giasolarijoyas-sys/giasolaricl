import { motion } from "framer-motion";
import { MessageCircle, Palette, Eye, Package } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "1. Conversamos",
    desc: "Nos cuentas qué buscas, tu estilo, presupuesto y la ocasión. Te asesoramos sin compromiso.",
  },
  {
    icon: Palette,
    title: "2. Diseñamos",
    desc: "Creamos una propuesta personalizada con renders y selección de piedras para tu aprobación.",
  },
  {
    icon: Eye,
    title: "3. Apruebas",
    desc: "Ves exactamente cómo quedará tu joya antes de que la fabriquemos. Sin sorpresas.",
  },
  {
    icon: Package,
    title: "4. Entregamos",
    desc: "Fabricamos tu pieza artesanalmente y te la entregamos en persona con su certificación.",
  },
];

const ProcessSteps = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
            Cómo trabajamos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
            Tu joya en{" "}
            <em className="text-primary not-italic">4 pasos</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 border border-border rounded-lg hover:border-primary/30 transition-colors relative"
            >
              <s.icon size={28} className="text-primary mx-auto mb-4" />
              <h3 className="font-display text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
