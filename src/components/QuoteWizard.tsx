import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const JEWELRY_TYPES = [
  "Anillo de compromiso",
  "Argollas de matrimonio",
  "Collar",
  "Aros",
  "Pulsera",
  "Otro",
];

const METALS = [
  "Oro amarillo 18k",
  "Oro blanco 18k",
  "Oro rosa 18k",
  "Platino",
  "No estoy segura, necesito asesoría",
];

const STONES = [
  "Diamante natural",
  "Diamante de laboratorio",
  "Zafiro",
  "Esmeralda",
  "Otra",
  "Necesito asesoría",
];

const BUDGETS = [
  "$1.500.000 – $2.000.000",
  "$2.000.000 – $3.000.000",
  "$3.000.000 – $4.000.000",
  "$4.000.000 – $5.000.000",
  "Más de $5.000.000",
  "Prefiero conversarlo",
];

interface FormData {
  pieza: string;
  metal: string;
  piedra: string;
  presupuesto: string;
  nombre: string;
  email: string;
  whatsapp: string;
  fechaEntrega: string;
  comentarios: string;
}

const INITIAL: FormData = {
  pieza: "",
  metal: "",
  piedra: "",
  presupuesto: "",
  nombre: "",
  email: "",
  whatsapp: "",
  fechaEntrega: "",
  comentarios: "",
};

const STEP_TITLES = [
  "Tipo de joya",
  "Metal preferido",
  "Piedra principal",
  "Presupuesto",
  "Datos de contacto",
];

const QuoteWizard = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>({ ...INITIAL });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (partial: Partial<FormData>) => setData(prev => ({ ...prev, ...partial }));

  const canNext = () => {
    switch (step) {
      case 0: return !!data.pieza;
      case 1: return !!data.metal;
      case 2: return !!data.piedra;
      case 3: return !!data.presupuesto;
      case 4: return data.nombre.trim() && data.email.trim() && data.whatsapp.trim();
      default: return false;
    }
  };

  const next = () => { if (canNext() && step < 4) setStep(s => s + 1); };
  const prev = () => { if (step > 0) setStep(s => s - 1); };

  const submit = async () => {
    if (!canNext()) return;
    setSending(true);
    try {
      const { error } = await supabase.from("quotes").insert({
        nombre: data.nombre.trim(),
        email: data.email.trim(),
        whatsapp: data.whatsapp.trim(),
        pieza: data.pieza,
        metal: data.metal,
        piedra: data.piedra,
        presupuesto: data.presupuesto,
        fecha_limite: data.fechaEntrega || null,
        referencias: data.comentarios || null,
        status: "nueva",
      });
      if (error) throw error;
      setSent(true);
      toast.success("Cotización enviada");
    } catch {
      toast.error("Error al enviar. Intenta de nuevo.");
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <section id="cotizador" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-border rounded-lg p-10 md:p-16 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              Cotización recibida
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md mx-auto mb-2">
              Gracias. Te contacto personalmente en menos de 24 horas con una propuesta detallada.
            </p>
            <p className="text-muted-foreground text-sm">— Macarena González Solari</p>
          </motion.div>
        </div>
      </section>
    );
  }

  const RadioGrid = ({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {options.map(opt => (
        <button key={opt} onClick={() => onChange(opt)}
          className={`p-4 rounded-lg border text-sm text-left transition-all ${
            value === opt
              ? "border-primary bg-primary/10 text-foreground"
              : "border-border bg-background text-muted-foreground hover:border-primary/50"
          }`}>
          {opt}
        </button>
      ))}
    </div>
  );

  return (
    <section id="cotizador" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Cotizador</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
            Cotiza tu <em className="text-primary not-italic">joya</em>
          </h2>
        </motion.div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            <span>Paso {step + 1} de 5 — {STEP_TITLES[step]}</span>
            <span>{Math.round(((step + 1) / 5) * 100)}%</span>
          </div>
          <Progress value={((step + 1) / 5) * 100} className="h-1.5" />
        </div>

        <div className="bg-card border border-border rounded-lg p-6 md:p-10 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>

              {step === 0 && (
                <>
                  <h3 className="font-display text-xl text-foreground mb-6">¿Qué tipo de joya buscas?</h3>
                  <RadioGrid options={JEWELRY_TYPES} value={data.pieza} onChange={v => update({ pieza: v })} />
                </>
              )}

              {step === 1 && (
                <>
                  <h3 className="font-display text-xl text-foreground mb-6">¿Qué metal prefieres?</h3>
                  <RadioGrid options={METALS} value={data.metal} onChange={v => update({ metal: v })} />
                </>
              )}

              {step === 2 && (
                <>
                  <h3 className="font-display text-xl text-foreground mb-6">¿Qué piedra principal te interesa?</h3>
                  <RadioGrid options={STONES} value={data.piedra} onChange={v => update({ piedra: v })} />
                </>
              )}

              {step === 3 && (
                <>
                  <h3 className="font-display text-xl text-foreground mb-6">¿Cuál es tu presupuesto aproximado?</h3>
                  <RadioGrid options={BUDGETS} value={data.presupuesto} onChange={v => update({ presupuesto: v })} />
                </>
              )}

              {step === 4 && (
                <>
                  <h3 className="font-display text-xl text-foreground mb-6">Tus datos de contacto</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1.5">Nombre *</label>
                      <input type="text" value={data.nombre} onChange={e => update({ nombre: e.target.value })}
                        placeholder="Tu nombre"
                        className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1.5">Email *</label>
                      <input type="email" value={data.email} onChange={e => update({ email: e.target.value })}
                        placeholder="tu@email.com"
                        className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1.5">WhatsApp *</label>
                      <input type="tel" value={data.whatsapp} onChange={e => update({ whatsapp: e.target.value })}
                        placeholder="+56 9 XXXX XXXX"
                        className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1.5">Fecha tentativa de entrega</label>
                      <input type="date" value={data.fechaEntrega} onChange={e => update({ fechaEntrega: e.target.value })}
                        className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1.5">Comentarios</label>
                      <textarea value={data.comentarios} onChange={e => update({ comentarios: e.target.value })}
                        placeholder="Cuéntanos más sobre lo que buscas..."
                        className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all min-h-[80px]" />
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            {step > 0 ? (
              <button onClick={prev}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ChevronLeft size={16} /> Atrás
              </button>
            ) : <div />}

            {step < 4 ? (
              <button onClick={next} disabled={!canNext()}
                className="flex items-center gap-1 bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Siguiente <ChevronRight size={16} />
              </button>
            ) : (
              <button onClick={submit} disabled={!canNext() || sending}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                <Send size={16} /> {sending ? "Enviando..." : "Enviar cotización"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteWizard;
