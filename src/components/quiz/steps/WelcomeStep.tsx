import { motion } from "framer-motion";
import { Heart, Gem, Lightbulb, HelpCircle } from "lucide-react";
import type { StepProps } from "../types";
import type { KnowledgeLevel } from "../types";

const paths: { key: KnowledgeLevel; icon: typeof Gem; title: string; desc: string }[] = [
  {
    key: 'expert',
    icon: Gem,
    title: 'Sé lo que quiero',
    desc: 'Ya tengo claro el tipo de piedra, metal y estilo.',
  },
  {
    key: 'intermediate',
    icon: Lightbulb,
    title: 'Tengo una idea',
    desc: 'Sé más o menos qué busco, pero necesito orientación.',
  },
  {
    key: 'beginner',
    icon: HelpCircle,
    title: 'No tengo idea',
    desc: 'No sé nada de joyas, pero quiero algo increíble.',
  },
];

const WelcomeStep = ({ answers, onUpdate, onNext }: StepProps) => {
  const selectPath = (level: KnowledgeLevel) => {
    onUpdate({ knowledgeLevel: level });
    onNext();
  };

  return (
    <div className="text-center py-4">
      <motion.div
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <Heart size={40} className="text-primary mx-auto mb-3" />
      </motion.div>

      <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">
        Diseña tu anillo ideal
      </h3>
      <p className="text-muted-foreground text-sm max-w-md mx-auto mb-8">
        ¿Qué tanto sabes sobre el anillo que buscas?
      </p>

      <div className="grid gap-4 max-w-md mx-auto">
        {paths.map((path, i) => (
          <motion.button
            key={path.key}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            onClick={() => selectPath(path.key)}
            className={`flex items-center gap-4 p-5 rounded-lg border-2 transition-all text-left ${
              answers.knowledgeLevel === path.key
                ? "border-primary bg-primary/10"
                : "border-border hover:border-primary/40"
            }`}
          >
            <path.icon size={24} className="text-primary shrink-0" />
            <div>
              <p className="font-medium text-foreground text-sm">{path.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{path.desc}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default WelcomeStep;
