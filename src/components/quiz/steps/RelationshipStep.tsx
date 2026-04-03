import type { StepProps } from "../types";
import { RELATIONSHIP_LENGTHS, HINT_OPTIONS } from "../taxonomies";

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

const RelationshipStep = ({ answers, onUpdate }: StepProps) => {
  return (
    <div>
      <h3 className="font-display text-xl mb-2 text-foreground">
        Cuéntanos sobre su relación
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        Esto nos ayuda a entender el contexto y recomendarte algo que tenga significado.
      </p>

      <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">¿Cuánto llevan juntos?</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {RELATIONSHIP_LENGTHS.map((r) => (
          <OptionCard
            key={r.key}
            emoji="💑"
            label={r.label}
            selected={answers.relationshipLength === r.key}
            onClick={() => onUpdate({ relationshipLength: r.key })}
          />
        ))}
      </div>

      <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">¿Ha dado pistas sobre el anillo?</p>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {HINT_OPTIONS.map((h) => (
          <OptionCard
            key={h.key}
            emoji={h.emoji}
            label={h.label}
            selected={answers.hasGivenHints === h.key}
            onClick={() => onUpdate({ hasGivenHints: h.key })}
          />
        ))}
      </div>

      {(answers.hasGivenHints === 'yes_specific' || answers.hasGivenHints === 'yes_vague') && (
        <div>
          <label className="text-sm text-muted-foreground block mb-1">Cuéntanos las pistas</label>
          <textarea
            value={answers.hintsDescription}
            onChange={(e) => onUpdate({ hintsDescription: e.target.value })}
            rows={3}
            placeholder="Ej: Le gustan los anillos con halo, ha mirado anillos con zafiro..."
            className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm resize-none"
          />
        </div>
      )}
    </div>
  );
};

export default RelationshipStep;
