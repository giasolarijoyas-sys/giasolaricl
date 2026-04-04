import { useState } from "react";
import { Gift, Heart, Send, Loader2, Calendar, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const TIPO_JOYA_OPTIONS = [
  "Anillo de compromiso",
  "Argolla de matrimonio",
  "Collar / Colgante",
  "Aros",
  "Pulsera",
  "Otro",
];

const METAL_OPTIONS = ["Oro 18k amarillo", "Oro 18k blanco", "Oro 18k rosado", "Platino", "No estoy segura"];
const PIEDRA_OPTIONS = ["Diamante", "Zafiro", "Esmeralda", "Rubí", "Moissanite", "Sin piedra", "No estoy segura"];
const PRESUPUESTO_OPTIONS = [
  "Hasta $500.000",
  "$500.000–$1.000.000",
  "$1.000.000–$2.000.000",
  "$2.000.000–$4.000.000",
  "+$4.000.000",
  "Prefiero no indicarlo",
];

const WishListForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    whatsapp: "",
    nombre_pareja: "",
    fecha_cumple_pareja: "",
    fecha_aniversario: "",
    otras_fechas: "",
    preferencias: "",
    tipo_joya: "",
    metal_preferido: "",
    piedra_preferida: "",
    presupuesto_aproximado: "",
    notas: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.whatsapp || !formData.nombre_pareja || !formData.preferencias) {
      toast({ title: "Faltan datos", description: "Completa los campos obligatorios marcados con *" });
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.from("wish_list").insert({
        nombre: formData.nombre,
        email: formData.email,
        whatsapp: formData.whatsapp,
        nombre_pareja: formData.nombre_pareja,
        fecha_cumple_pareja: formData.fecha_cumple_pareja || null,
        fecha_aniversario: formData.fecha_aniversario || null,
        otras_fechas: formData.otras_fechas || null,
        preferencias: formData.preferencias,
        tipo_joya: formData.tipo_joya || null,
        metal_preferido: formData.metal_preferido || null,
        piedra_preferida: formData.piedra_preferida || null,
        presupuesto_aproximado: formData.presupuesto_aproximado || null,
        notas: formData.notas || null,
      });

      if (error) throw error;
      setSubmitted(true);
      toast({ title: "¡Recibido! 💎", description: "Nos pondremos en contacto antes de las fechas importantes." });
    } catch (err) {
      console.error(err);
      toast({ title: "Error", description: "No pudimos enviar tu información. Intenta de nuevo." });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="wish-list" className="py-20 bg-secondary/30">
        <div className="container max-w-2xl mx-auto px-4 text-center">
          <div className="bg-card rounded-2xl p-10 shadow-lg border border-border">
            <Heart className="mx-auto mb-4 text-primary" size={48} fill="currentColor" />
            <h3 className="font-display text-2xl mb-3 text-foreground">¡Gracias por confiar en nosotros!</h3>
            <p className="text-muted-foreground">
              Te contactaremos antes de cada fecha importante para ayudarte a sorprender a {formData.nombre_pareja} con la joya perfecta.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const inputClass = "w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all";
  const labelClass = "text-sm font-medium text-foreground block mb-1.5";

  return (
    <section id="wish-list" className="py-20 bg-secondary/30">
      <div className="container max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Gift size={16} />
            Lista de deseos
          </div>
          <h2 className="font-display text-3xl md:text-4xl mb-3 text-foreground">
            Déjanos saber qué te gustaría
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cuéntanos sobre las fechas especiales y lo que te gustaría recibir. Nos encargaremos de guiar a tu pareja para que te sorprenda con la joya perfecta. <span className="font-medium text-foreground">¡Todo en total confidencialidad!</span>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border space-y-6">
          {/* Tus datos */}
          <div>
            <h3 className="font-display text-lg mb-4 text-foreground flex items-center gap-2">
              <Sparkles size={18} className="text-primary" /> Tus datos
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Tu nombre *</label>
                <input type="text" required value={formData.nombre} onChange={(e) => update("nombre", e.target.value)} className={inputClass} placeholder="María González" />
              </div>
              <div>
                <label className={labelClass}>WhatsApp *</label>
                <input type="tel" required value={formData.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} className={inputClass} placeholder="+56 9 XXXX XXXX" />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>Email *</label>
                <input type="email" required value={formData.email} onChange={(e) => update("email", e.target.value)} className={inputClass} placeholder="maria@email.com" />
              </div>
            </div>
          </div>

          {/* Datos de la pareja */}
          <div>
            <h3 className="font-display text-lg mb-4 text-foreground flex items-center gap-2">
              <Calendar size={18} className="text-primary" /> Fechas importantes
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className={labelClass}>Nombre de tu pareja *</label>
                <input type="text" required value={formData.nombre_pareja} onChange={(e) => update("nombre_pareja", e.target.value)} className={inputClass} placeholder="Juan Pérez" />
              </div>
              <div>
                <label className={labelClass}>Cumpleaños de tu pareja</label>
                <input type="date" value={formData.fecha_cumple_pareja} onChange={(e) => update("fecha_cumple_pareja", e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Aniversario</label>
                <input type="date" value={formData.fecha_aniversario} onChange={(e) => update("fecha_aniversario", e.target.value)} className={inputClass} />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>Otras fechas importantes</label>
                <input type="text" value={formData.otras_fechas} onChange={(e) => update("otras_fechas", e.target.value)} className={inputClass} placeholder="Ej: Navidad, San Valentín, graduación…" />
              </div>
            </div>
          </div>

          {/* Preferencias */}
          <div>
            <h3 className="font-display text-lg mb-4 text-foreground flex items-center gap-2">
              <Heart size={18} className="text-primary" /> Qué te gustaría
            </h3>
            <div className="grid gap-4">
              <div>
                <label className={labelClass}>¿Qué te gustaría recibir? *</label>
                <textarea
                  required
                  value={formData.preferencias}
                  onChange={(e) => update("preferencias", e.target.value)}
                  className={`${inputClass} min-h-[80px]`}
                  placeholder="Cuéntanos qué tipo de joya te encantaría, en qué estilo, o describe tu joya soñada…"
                />
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className={labelClass}>Tipo de joya</label>
                  <select value={formData.tipo_joya} onChange={(e) => update("tipo_joya", e.target.value)} className={inputClass}>
                    <option value="">Seleccionar…</option>
                    {TIPO_JOYA_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Metal</label>
                  <select value={formData.metal_preferido} onChange={(e) => update("metal_preferido", e.target.value)} className={inputClass}>
                    <option value="">Seleccionar…</option>
                    {METAL_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Piedra</label>
                  <select value={formData.piedra_preferida} onChange={(e) => update("piedra_preferida", e.target.value)} className={inputClass}>
                    <option value="">Seleccionar…</option>
                    {PIEDRA_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Presupuesto aproximado</label>
                  <select value={formData.presupuesto_aproximado} onChange={(e) => update("presupuesto_aproximado", e.target.value)} className={inputClass}>
                    <option value="">Seleccionar…</option>
                    {PRESUPUESTO_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Notas adicionales</label>
                  <input type="text" value={formData.notas} onChange={(e) => update("notas", e.target.value)} className={inputClass} placeholder="Talla de anillo, alergias, etc." />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base"
          >
            {submitting ? (
              <><Loader2 size={18} className="animate-spin" /> Enviando...</>
            ) : (
              <><Send size={18} /> Enviar mi lista de deseos</>
            )}
          </button>

          <p className="text-xs text-muted-foreground text-center">
            🔒 Tu información es 100% confidencial. Solo la usaremos para guiar a tu pareja.
          </p>
        </form>
      </div>
    </section>
  );
};

export default WishListForm;
