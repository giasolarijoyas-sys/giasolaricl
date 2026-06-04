import type { StepProps } from "../types";
import { Heart } from "lucide-react";
import { DRESS_STYLES, JEWELRY_USAGE } from "../taxonomies";

const PersonalityStep = ({ answers, onUpdate }: StepProps) => {
  return (
    <div>
      <h3 className="font-display text-xl mb-2 text-foreground flex items-center gap-2">
        <Heart size={20} className="text-primary" /> Cuéntanos de ella
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        Responde lo que puedas, todo es opcional.
      </p>

      <div className="grid gap-4">
        <div>
          <label className="text-sm text-muted-foreground block mb-1">Nombre de tu polola</label>
          <input
            type="text"
            value={answers.partnerName}
            onChange={(e) => onUpdate({ partnerName: e.target.value })}
            placeholder="Para personalizar tu experiencia"
            className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
          />
        </div>

        <div>
          <label className="text-sm text-muted-foreground block mb-2">¿Cómo describirías su estilo?</label>
          <div className="grid grid-cols-2 gap-3">
            {DRESS_STYLES.map((d) => (
              <button
                key={d.key}
                onClick={() => onUpdate({ dressStyle: d.key })}
                className={`p-3 rounded-lg border-2 transition-all text-sm text-left ${
                  answers.dressStyle === d.key
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border hover:border-primary/40 text-muted-foreground"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm text-muted-foreground block mb-2">¿Usa joyas regularmente?</label>
          <div className="grid grid-cols-2 gap-3">
            {JEWELRY_USAGE.map((j) => (
              <button
                key={j.key}
                onClick={() => onUpdate({ wearsJewelry: j.key })}
                className={`p-3 rounded-lg border-2 transition-all text-sm text-left ${
                  answers.wearsJewelry === j.key
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border hover:border-primary/40 text-muted-foreground"
                }`}
              >
                {j.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm text-muted-foreground block mb-1">¿Algo más que nos ayude?</label>
          <textarea
            value={answers.personalityNotes}
            onChange={(e) => onUpdate({ personalityNotes: e.target.value })}
            rows={2}
            placeholder="Ej: Le gustan los diseños vintage, le encanta el mar..."
            className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm resize-none"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalityStep;
