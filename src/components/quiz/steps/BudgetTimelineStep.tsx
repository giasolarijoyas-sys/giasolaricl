import type { StepProps } from "../types";
import { BUDGET_RANGES } from "../taxonomies";

const BudgetTimelineStep = ({ answers, onUpdate }: StepProps) => {
  return (
    <div>
      <h3 className="font-display text-xl mb-2 text-foreground">
        Presupuesto
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        ¿Cuánto tienes pensado invertir? Todo es orientativo.
      </p>

      <div className="space-y-3 mb-6">
        {BUDGET_RANGES.map((b) => (
          <button
            key={b.key}
            onClick={() => onUpdate({ budgetRange: b.key })}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all text-sm ${
              answers.budgetRange === b.key
                ? "border-primary bg-primary/10 text-foreground font-medium"
                : "border-border hover:border-primary/40 text-muted-foreground"
            }`}
          >
            {b.label}
          </button>
        ))}
      </div>

      <div>
        <label className="text-sm text-muted-foreground block mb-1">Fecha límite (si tienes)</label>
        <input
          type="date"
          value={answers.deadline}
          onChange={(e) => onUpdate({ deadline: e.target.value })}
          className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
        />
      </div>
    </div>
  );
};

export default BudgetTimelineStep;
