import type { StepProps } from "../types";
import { AESTHETIC_KEYWORDS, JEWELRY_COLORS } from "../taxonomies";

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
        Exploración de estilo
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        ¿Qué palabras describen mejor su estilo? Puedes elegir varias.
      </p>

      <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Estética que la representa</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {AESTHETIC_KEYWORDS.map((a) => (
          <OptionCard
            key={a.key}
            emoji={a.emoji}
            label={a.label}
            selected={answers.aestheticPreference.includes(a.key)}
            onClick={() => toggleAesthetic(a.key)}
          />
        ))}
      </div>

      <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">¿Qué color de joyería usa normalmente?</p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {JEWELRY_COLORS.map((c) => (
          <OptionCard
            key={c.key}
            emoji={c.emoji}
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
