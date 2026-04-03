import type { StepProps } from "../types";
import { BUDGET_RANGES, PRIORITY_OPTIONS } from "../taxonomies";

const BudgetTimelineStep = ({ answers, onUpdate }: StepProps) => {
  const togglePriority = (key: string) => {
    const current = answers.priorities;
    const next = current.includes(key)
      ? current.filter(k => k !== key)
      : [...current, key];
    onUpdate({ priorities: next });
  };

  return (
    <div>
      <h3 className="font-display text-xl mb-2 text-foreground">
        Presupuesto y prioridades
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        Esto nos ayuda a recomendarte opciones realistas. Todo es orientativo.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm text-muted-foreground block mb-2">Presupuesto estimado (CLP)</label>
          <div className="space-y-2">
            {BUDGET_RANGES.map((b) => (
              <button
                key={b.key}
                onClick={() => onUpdate({ budgetRange: b.key })}
                className={`w-full text-left p-3 rounded-lg border-2 transition-all text-sm ${
                  answers.budgetRange === b.key
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border hover:border-primary/40 text-muted-foreground"
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm text-muted-foreground block mb-2">Fecha límite (si tienes)</label>
          <input
            type="date"
            value={answers.deadline}
            onChange={(e) => onUpdate({ deadline: e.target.value })}
            className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm mb-6"
          />

          <label className="text-sm text-muted-foreground block mb-2">
            ¿Qué es más importante? (elige hasta 3)
          </label>
          <div className="flex flex-wrap gap-2">
            {PRIORITY_OPTIONS.map((p) => (
              <button
                key={p.key}
                onClick={() => togglePriority(p.key)}
                disabled={answers.priorities.length >= 3 && !answers.priorities.includes(p.key)}
                className={`inline-flex items-center gap-1 px-3 py-2 rounded-full text-xs font-medium transition-all ${
                  answers.priorities.includes(p.key)
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 disabled:opacity-40"
                }`}
              >
                {p.emoji} {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetTimelineStep;
