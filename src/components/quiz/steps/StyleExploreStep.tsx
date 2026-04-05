import type { StepProps } from "../types";
import { AESTHETIC_KEYWORDS, JEWELRY_COLORS } from "../taxonomies";

const OptionCard = ({ label, selected, onClick }: {
  label: string; selected: boolean; onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`p-4 rounded-lg border-2 transition-all text-center text-sm font-medium ${
      selected ? "border-primary bg-primary/10 text-foreground" : "border-border hover:border-primary/40 text-muted-foreground"
    }`}
  >
    {label}
  </button>
);

const StyleExploreStep = ({ answers, onUpdate }: StepProps) => {
  const toggleAesthetic = (key: string) => {
    const current = answers.aestheticPreference;
    const next = current.includes(key)
      ? current.filter(k => k !== key)
      : [...current, key];
    onUpdate({ aestheticPreference: next });
  };

  return (
    <div>
      <h3 className="font-display text-xl mb-2 text-foreground">
        Estilo
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        ¿Qué estética la representa? Puedes elegir varias.
      </p>

      <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Estética</p>
      <div className="grid grid-cols-2 gap-3 mb-8">
        {AESTHETIC_KEYWORDS.map((a) => (
          <OptionCard
            key={a.key}
            label={a.label}
            selected={answers.aestheticPreference.includes(a.key)}
            onClick={() => toggleAesthetic(a.key)}
          />
        ))}
      </div>

      <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">¿Qué color de joyería usa?</p>
      <div className="grid grid-cols-2 gap-3">
        {JEWELRY_COLORS.map((c) => (
          <OptionCard
            key={c.key}
            label={c.label}
            selected={answers.jewelryColorPreference === c.key}
            onClick={() => onUpdate({ jewelryColorPreference: c.key })}
          />
        ))}
      </div>
    </div>
  );
};

export default StyleExploreStep;
