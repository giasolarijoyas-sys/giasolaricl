import type { StepProps } from "../types";
import { Heart } from "lucide-react";
import { DRESS_STYLES, JEWELRY_USAGE } from "../taxonomies";

const PersonalityStep = ({ answers, onUpdate }: StepProps) => {
  return (
    <div>
      <h3 className="font-display text-xl mb-2 text-foreground flex items-center gap-2">
        <Heart size={20} className="text-primary" /> Cuéntanos de ella
      </h3>
      <p className="text-muted-foreground text-sm mb-2">
        Mientras más sepamos, mejor podemos recomendar el anillo perfecto.
        <strong className="text-foreground"> Responde lo que puedas</strong> — todo es opcional.
      </p>
      <p className="text-muted-foreground text-xs mb-6 italic">
        Esto nos ayuda a entender su estilo y proponerte algo que realmente la represente.
      </p>

      <div className="grid gap-4">
        <div>
          <label className="text-sm text-muted-foreground block mb-1">Nombre de tu pareja</label>
          <input
            type="text"
            value={answers.partnerName}
            onChange={(e) => onUpdate({ partnerName: e.target.value })}
            placeholder="Para personalizar tu experiencia"
            className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-muted-foreground block mb-1">¿Qué le gusta hacer?</label>
            <input
              type="text"
              value={answers.hobbies}
              onChange={(e) => onUpdate({ hobbies: e.target.value })}
              placeholder="Ej: Viajar, cocinar, leer, naturaleza..."
              className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground block mb-1">¿Hace deporte?</label>
            <input
              type="text"
              value={answers.sport}
              onChange={(e) => onUpdate({ sport: e.target.value })}
              placeholder="Ej: Yoga, running, gym, no..."
              className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-muted-foreground block mb-1">¿En qué trabaja?</label>
            <input
              type="text"
              value={answers.job}
              onChange={(e) => onUpdate({ job: e.target.value })}
              placeholder="Ej: Arquitecta, doctora, profesora..."
              className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground block mb-1">¿Usa joyas regularmente?</label>
            <select
              value={answers.wearsJewelry}
              onChange={(e) => onUpdate({ wearsJewelry: e.target.value })}
              className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
            >
              <option value="">Seleccionar…</option>
              {JEWELRY_USAGE.map(j => (
                <option key={j.key} value={j.key}>{j.label}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-muted-foreground block mb-1">¿Cómo describirías su estilo?</label>
            <select
              value={answers.dressStyle}
              onChange={(e) => onUpdate({ dressStyle: e.target.value })}
              className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
            >
              <option value="">Seleccionar…</option>
              {DRESS_STYLES.map(d => (
                <option key={d.key} value={d.key}>{d.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm text-muted-foreground block mb-1">Color favorito de ella</label>
            <input
              type="text"
              value={answers.favoriteColor}
              onChange={(e) => onUpdate({ favoriteColor: e.target.value })}
              placeholder="Ej: Azul, dorado, rosa..."
              className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
            />
          </div>
        </div>
        <div>
          <label className="text-sm text-muted-foreground block mb-1">
            ¿Algo más que nos ayude a conocerla?
          </label>
          <textarea
            value={answers.personalityNotes}
            onChange={(e) => onUpdate({ personalityNotes: e.target.value })}
            rows={3}
            placeholder="Ej: Le gustan los diseños vintage, le encanta el mar, es fan de lo minimalista..."
            className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm resize-none"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalityStep;
