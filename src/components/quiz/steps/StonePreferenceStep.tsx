import type { StepProps } from "../types";
import { CENTER_STONE_TYPES, STONE_SHAPES, SIZE_PREFERENCES } from "../taxonomies";

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

const StonePreferenceStep = ({ answers, onUpdate }: StepProps) => {
  return (
    <div>
      <h3 className="font-display text-xl mb-2 text-foreground">
        Piedra central
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        ¿Qué piedra imaginas? Si no estás seguro, sáltate este paso y te asesoramos.
      </p>

      <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Tipo de piedra</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {CENTER_STONE_TYPES.map((s) => (
          <OptionCard
            key={s.key}
            emoji={s.emoji}
            label={s.label}
            desc={s.desc}
            selected={answers.stoneType === s.key}
            onClick={() => onUpdate({ stoneType: s.key })}
          />
        ))}
      </div>

      <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Forma de la piedra</p>
      <div className="grid grid-cols-3 gap-3 mb-6">
        {STONE_SHAPES.map((s) => (
          <OptionCard
            key={s.key}
            emoji={s.emoji}
            label={s.label}
            desc={s.desc}
            selected={answers.stoneShape === s.key}
            onClick={() => onUpdate({ stoneShape: s.key })}
          />
        ))}
      </div>

      <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Tamaño visual deseado</p>
      <div className="grid grid-cols-3 gap-3">
        {SIZE_PREFERENCES.map((s) => (
          <OptionCard
            key={s.key}
            emoji={s.emoji}
            label={s.label}
            desc={s.desc}
            selected={answers.sizePreference === s.key}
            onClick={() => onUpdate({ sizePreference: s.key })}
          />
        ))}
      </div>
    </div>
  );
};

export default StonePreferenceStep;
