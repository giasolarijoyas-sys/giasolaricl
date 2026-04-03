import type { StepProps } from "../types";
import { METALS } from "../taxonomies";

const OptionCard = ({ emoji, label, desc, selected, onClick }: {
  emoji: string; label: string; desc?: string; selected: boolean; onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all text-center ${
      selected ? "border-primary bg-primary/10" : "border-border hover:border-primary/40"
    }`}
  >
    <span className="text-2xl">{emoji}</span>
    <span className="text-sm font-medium text-foreground">{label}</span>
    {desc && <span className="text-xs text-muted-foreground">{desc}</span>}
  </button>
);

const MetalStep = ({ answers, onUpdate }: StepProps) => {
  return (
    <div>
      <h3 className="font-display text-xl mb-2 text-foreground">
        Metal preferido
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        {answers.jewelryColorPreference
          ? "Basándonos en el color de joyería que nos dijiste, te sugerimos estas opciones. Pero puedes elegir la que prefieras."
          : "¿En qué metal te gustaría la pieza? Si no estás seguro, sáltate este paso."}
      </p>

      <div className="grid grid-cols-2 gap-3">
        {METALS.map((m) => (
          <OptionCard
            key={m.key}
            emoji={m.emoji}
            label={m.label}
            desc={m.desc}
            selected={answers.metalPreference === m.key}
            onClick={() => onUpdate({ metalPreference: m.key })}
          />
        ))}
      </div>

      <button
        onClick={() => onUpdate({ metalPreference: 'unknown' })}
        className={`mt-4 w-full p-3 rounded-lg border-2 transition-all text-center text-sm ${
          answers.metalPreference === 'unknown'
            ? "border-primary bg-primary/10 text-foreground"
            : "border-border hover:border-primary/40 text-muted-foreground"
        }`}
      >
        ❓ No lo sé — recomiéndame
      </button>
    </div>
  );
};

export default MetalStep;
