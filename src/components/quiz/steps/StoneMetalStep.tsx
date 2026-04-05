import type { StepProps } from "../types";
import { CENTER_STONE_TYPES, STONE_SHAPES, METALS } from "../taxonomies";

const OptionCard = ({ label, desc, selected, onClick }: {
  label: string; desc?: string; selected: boolean; onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center gap-1 p-4 rounded-lg border-2 transition-all text-center ${
      selected ? "border-primary bg-primary/10" : "border-border hover:border-primary/40"
    }`}
  >
    <span className="text-sm font-medium text-foreground">{label}</span>
    {desc && <span className="text-xs text-muted-foreground">{desc}</span>}
  </button>
);

const StoneMetalStep = ({ answers, onUpdate }: StepProps) => {
  return (
    <div>
      <h3 className="font-display text-xl mb-2 text-foreground">
        Piedra y metal
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        Elige lo que prefieras. Si no estás seguro, sáltate lo que no sepas.
      </p>

      <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Tipo de piedra</p>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {CENTER_STONE_TYPES.map((s) => (
          <OptionCard
            key={s.key}
            label={s.label}
            desc={s.desc}
            selected={answers.stoneType === s.key}
            onClick={() => onUpdate({ stoneType: s.key })}
          />
        ))}
      </div>

      <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Forma de la piedra</p>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {STONE_SHAPES.map((s) => (
          <OptionCard
            key={s.key}
            label={s.label}
            desc={s.desc}
            selected={answers.stoneShape === s.key}
            onClick={() => onUpdate({ stoneShape: s.key })}
          />
        ))}
      </div>

      <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Metal</p>
      <div className="grid grid-cols-3 gap-3">
        {METALS.map((m) => (
          <OptionCard
            key={m.key}
            label={m.label}
            desc={m.desc}
            selected={answers.metalPreference === m.key}
            onClick={() => onUpdate({ metalPreference: m.key })}
          />
        ))}
      </div>
    </div>
  );
};

export default StoneMetalStep;
