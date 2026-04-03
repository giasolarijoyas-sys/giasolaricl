import { useRef } from "react";
import { Upload, X, Image } from "lucide-react";
import type { StepProps } from "../types";

const InspirationStep = ({ answers, onUpdate }: StepProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    onUpdate({ images: [...answers.images, ...files].slice(0, 5) });
  };

  const removeImage = (idx: number) => {
    onUpdate({ images: answers.images.filter((_, i) => i !== idx) });
  };

  return (
    <div>
      <h3 className="font-display text-xl mb-2 text-foreground flex items-center gap-2">
        <Image size={20} className="text-primary" /> Inspiración visual
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        Sube fotos de joyas que te gusten o comparte un link de Pinterest.
        No es obligatorio, pero nos ayuda mucho.
      </p>

      <div className="mb-6">
        <label className="text-sm text-muted-foreground block mb-1">
          Link de Pinterest o referencia web (opcional)
        </label>
        <input
          type="url"
          value={answers.referenceUrls}
          onChange={(e) => onUpdate({ referenceUrls: e.target.value })}
          placeholder="https://www.pinterest.com/..."
          className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
        />
      </div>

      <div>
        <label className="text-sm text-muted-foreground block mb-2">
          Sube imágenes de referencia (máximo 5)
        </label>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFiles}
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-full p-6 border-2 border-dashed border-border rounded-lg hover:border-primary/40 transition-colors flex flex-col items-center gap-2 text-muted-foreground"
        >
          <Upload size={24} />
          <span className="text-sm">Haz clic para subir imágenes</span>
        </button>

        {answers.images.length > 0 && (
          <div className="flex gap-3 mt-4 flex-wrap">
            {answers.images.map((file, i) => (
              <div key={i} className="relative w-20 h-20 rounded-lg overflow-hidden border border-border">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Referencia ${i + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => removeImage(i)}
                  className="absolute top-0 right-0 bg-foreground/70 text-background p-0.5 rounded-bl"
                >
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InspirationStep;
