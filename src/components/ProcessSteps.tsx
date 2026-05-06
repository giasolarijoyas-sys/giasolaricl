import { motion } from "framer-motion";
import { MessageCircle, Gem, CheckCircle, Hammer, Gift } from "lucide-react";

const steps = [
  {
    num: 1,
    icon: MessageCircle,
    title: "Cuéntanos tu idea",
    desc: "Estilo, piedra, metal, referencias",
  },
  {
    num: 2,
    icon: Gem,
    title: "Propuesta con boceto",
    desc: "Selección de piedras y diseño",
  },
  {
    num: 3,
    icon: CheckCircle,
    title: "Aprobación del diseño final",
    desc: "Lo revisamos juntas antes de fabricar",
  },
  {
    num: 4,
    icon: Hammer,
    title: "Fabricación",
    desc: "Con el 70% comenzamos a crear tu pieza",
  },
  {
    num: 5,
    icon: Gift,
    title: "Entrega",
    desc: "Con tu Garantía por Gusto",
  },
];

const ProcessSteps = () => {
  return (
    <section className="py-24 md:py-32 bg-[hsl(var(--accent))]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
            Cómo trabajamos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
            Tu joya en{" "}
            <em className="text-primary not-italic">5 pasos</em>
          </h2>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block">
          {/* Connector line */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute top-[2.75rem] left-[10%] right-[10%] h-px bg-border" />
            <div className="grid grid-cols-5 gap-4 relative">
              {steps.map((s, i) => (
                <motion.div
                  key={s.num}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Number circle */}
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-xl mb-4 relative z-10 shadow-md">
                    {s.num}
                  </div>
                  {/* Icon */}
                  <s.icon size={22} className="text-primary mb-3" />
                  {/* Title */}
                  <h3 className="font-display text-sm font-bold text-foreground mb-1 leading-tight">
                    {s.title}
                  </h3>
                  {/* Description */}
                  <p className="text-muted-foreground text-xs leading-relaxed max-w-[160px]">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden max-w-sm mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 relative"
            >
              {/* Vertical line + number */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-base shrink-0 shadow-md">
                  {s.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-border my-1" />
                )}
              </div>
              {/* Content */}
              <div className="pb-8">
                <div className="flex items-center gap-2 mb-1">
                  <s.icon size={16} className="text-primary" />
                  <h3 className="font-display text-sm font-bold text-foreground">
                    {s.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
