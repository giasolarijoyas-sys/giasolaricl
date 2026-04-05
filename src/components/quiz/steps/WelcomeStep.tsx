import { motion } from "framer-motion";
import { Heart, ArrowRight, Target, Clock, MessageCircle } from "lucide-react";
import type { StepProps } from "../types";

const WelcomeStep = ({ onNext }: StepProps) => {
  return (
    <div className="text-center py-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <Heart size={48} className="text-primary mx-auto mb-4" />
      </motion.div>

      <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
        No necesitas saber exactamente qué anillo quiere
      </h3>
      <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto mb-3">
        Te recomendaremos el anillo perfecto basado en lo que nos digas.
      </p>
      <p className="text-muted-foreground text-sm max-w-md mx-auto mb-8">
        Puedes saltarte cualquier pregunta que no sepas. Siempre llegarás a una recomendación personalizada.
      </p>

      <button
        onClick={onNext}
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
      >
        Comenzar <ArrowRight size={18} />
      </button>

      <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto">
        {[
          { icon: Target, text: 'Recomendación personalizada' },
          { icon: Clock, text: 'Solo 3–5 minutos' },
          { icon: MessageCircle, text: 'Respuesta en 24 horas' },
        ].map((item) => (
          <div key={item.text} className="text-center">
            <item.icon size={20} className="text-primary mx-auto mb-1" />
            <p className="text-xs text-muted-foreground mt-1">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomeStep;
