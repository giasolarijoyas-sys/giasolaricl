import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import type { QuizAnswers, Recommendation } from "./types";
import { BUDGET_RANGES } from "./taxonomies";

interface LeadCaptureStepProps {
  answers: QuizAnswers;
  recommendation: Recommendation | null;
  onSubmitted: () => void;
}

const LeadCaptureStep = ({ answers, recommendation, onSubmitted }: LeadCaptureStepProps) => {
  const [nombre, setNombre] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [comoNosConociste, setComoNosConociste] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const uploadImages = async (): Promise<string[]> => {
    const urls: string[] = [];
    for (const file of answers.images) {
      const ext = file.name.split('.').pop() || 'jpg';
      const path = `${crypto.randomUUID()}.${ext}`;
      const { error } = await supabase.storage
        .from('quote-images')
        .upload(path, file);
      if (!error) {
        const { data } = supabase.storage
          .from('quote-images')
          .getPublicUrl(path);
        urls.push(data.publicUrl);
      }
    }
    return urls;
  };

  const handleSubmit = async () => {
    if (!nombre || !whatsapp || !email) {
      toast({
        title: "Faltan datos",
        description: "Por favor completa nombre, WhatsApp y email.",
      });
      return;
    }

    setSubmitting(true);
    try {
      const imageUrls = answers.images.length > 0 ? await uploadImages() : [];
      const budgetLabel = BUDGET_RANGES.find(b => b.key === answers.budgetRange)?.label || '';

      const { error } = await supabase.functions.invoke('process-quote', {
        body: {
          pieza: recommendation ? `${recommendation.ringStyleLabel} con ${recommendation.stoneTypeLabel}` : 'Anillo de compromiso',
          metal: recommendation?.metalLabel || 'Por definir',
          piedra: recommendation?.stoneTypeLabel || '',
          forma: recommendation?.stoneShapeLabel || '',
          quilates: '',
          estilo: recommendation?.ringStyleLabel || '',
          engaste: '',
          grabado: '',
          referencias: answers.referenceUrls,
          nombre,
          whatsapp,
          email,
          como_nos_conociste: comoNosConociste,
          presupuesto: budgetLabel || answers.budgetRange,
          fecha_limite: answers.deadline,
          nombre_pareja: answers.partnerName,
          fecha_aniversario: '',
          fecha_cumple_pareja: '',
          notas_pareja: answers.personalityNotes || '',
          image_urls: imageUrls,
          quiz_answers: answers,
          recommendation: recommendation,
          confidence_score: recommendation?.confidenceScore || 0,
        },
      });

      if (error) throw error;
      onSubmitted();
    } catch (err) {
      console.error('Submit error:', err);
      toast({
        title: "Error al enviar",
        description: "Hubo un problema. Inténtalo de nuevo o escríbenos por WhatsApp.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h3 className="font-display text-xl mb-2 text-foreground">
        Tus datos de contacto
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        Te envío una cotización personalizada en menos de 24 horas.
      </p>

      {recommendation && (
        <div className="bg-muted rounded-lg p-4 mb-6">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Opción seleccionada</p>
          <p className="text-sm font-medium text-foreground">
            {recommendation.ringStyleLabel} con {recommendation.stoneTypeLabel} {recommendation.stoneShapeLabel} en {recommendation.metalLabel}
          </p>
        </div>
      )}

      <div className="grid gap-4">
        <div>
          <label className="text-sm text-muted-foreground block mb-1">Nombre *</label>
          <input
            type="text"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-muted-foreground block mb-1">WhatsApp *</label>
            <input
              type="tel"
              required
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="+56 9 XXXX XXXX"
              className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground block mb-1">Email *</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
            />
          </div>
        </div>
        <div>
          <label className="text-sm text-muted-foreground block mb-1">¿Cómo nos conociste?</label>
          <select
            value={comoNosConociste}
            onChange={(e) => setComoNosConociste(e.target.value)}
            className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
          >
            <option value="">Seleccionar…</option>
            <option>Instagram</option>
            <option>Google</option>
            <option>Referido</option>
            <option>Otro</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={submitting || !nombre || !whatsapp || !email}
        className="mt-6 w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {submitting ? (
          <><Loader2 size={18} className="animate-spin" /> Enviando...</>
        ) : (
          <><Send size={18} /> Solicitar cotización</>
        )}
      </button>
    </div>
  );
};

export default LeadCaptureStep;
