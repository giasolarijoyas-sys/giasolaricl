import { useState, useRef } from "react";
import { Gift, Heart, Send, Loader2, Calendar, Sparkles, ImagePlus, Link, X } from "lucide-react";
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

const METAL_OPTIONS = ["Oro 18k amarillo", "Oro 18k blanco", "Platino", "No estoy segura"];
const PIEDRA_OPTIONS = ["Diamante", "Zafiro", "Esmeralda", "Rubí", "Aguamarina", "Sin piedra", "No estoy segura"];
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
    whatsapp_pareja: "",
    fecha_cumple: "",
    fecha_aniversario: "",
    otras_fechas: "",
    preferencias: "",
    tipo_joya: "",
    metal_preferido: "",
    piedra_preferida: "",
    presupuesto_aproximado: "",
    referencias: "",
    notas: "",
  });
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleImageAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (images.length + files.length > 5) {
      toast({ title: "Máximo 5 fotos", description: "Puedes adjuntar hasta 5 imágenes." });
      return;
    }
    const newImages = [...images, ...files];
    setImages(newImages);
    const newPreviews = files.map((f) => URL.createObjectURL(f));
    setPreviews((prev) => [...prev, ...newPreviews]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeImage = (idx: number) => {
    URL.revokeObjectURL(previews[idx]);
    setImages((prev) => prev.filter((_, i) => i !== idx));
    setPreviews((prev) => prev.filter((_, i) => i !== idx));
  };

  const uploadImages = async (): Promise<string[]> => {
    const urls: string[] = [];
    for (const file of images) {
      const ext = file.name.split(".").pop();
      const path = `wish-list/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const { error } = await supabase.storage.from("quote-images").upload(path, file);
      if (error) throw error;
      const { data } = supabase.storage.from("quote-images").getPublicUrl(path);
      urls.push(data.publicUrl);
    }
    return urls;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.whatsapp || !formData.nombre_pareja || !formData.preferencias) {
      toast({ title: "Faltan datos", description: "Completa los campos obligatorios marcados con *" });
      return;
    }

    setSubmitting(true);
    try {
      let imageUrls: string[] = [];
      if (images.length > 0) {
        imageUrls = await uploadImages();
      }

      const { error } = await supabase.from("wish_list").insert({
        nombre: formData.nombre,
        email: formData.email,
        whatsapp: formData.whatsapp,
        nombre_pareja: formData.nombre_pareja,
        fecha_cumple_pareja: formData.fecha_cumple || null,
        fecha_aniversario: formData.fecha_aniversario || null,
        otras_fechas: formData.otras_fechas || null,
        preferencias: formData.preferencias,
        tipo_joya: formData.tipo_joya || null,
        metal_preferido: formData.metal_preferido || null,
        piedra_preferida: formData.piedra_preferida || null,
        presupuesto_aproximado: formData.presupuesto_aproximado || null,
        referencias: formData.referencias || null,
        image_urls: imageUrls.length > 0 ? imageUrls : null,
        notas: formData.notas || null,
      });

      if (error) throw error;
      setSubmitted(true);
      toast({ title: "¡Recibido! 💎", description: "Nos contactaremos con tu pareja en el momento justo." });
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
            <h3 className="font-display text-2xl mb-3 text-foreground">¡Gracias por confiar en nosotras!</h3>
            <p className="text-muted-foreground">
              La Maca se contactará con {formData.nombre_pareja} antes de tus fechas especiales para ayudarlo a elegir la joya perfecta para ti. ¡Todo en secreto! 🤫
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
            Déjanos saber <em className="text-primary not-italic">qué te gustaría</em>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cuéntanos qué joyas te hacen soñar y tus fechas importantes. La Maca se encargará de contactar a tu pareja en el momento justo para que te sorprenda con el regalo perfecto. <span className="font-medium text-foreground">¡Tu pareja no se va a enterar que tú nos escribiste!</span>
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
                <label className={labelClass}>Tu WhatsApp *</label>
                <input type="tel" required value={formData.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} className={inputClass} placeholder="+56 9 XXXX XXXX" />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>Tu email *</label>
                <input type="email" required value={formData.email} onChange={(e) => update("email", e.target.value)} className={inputClass} placeholder="maria@email.com" />
              </div>
            </div>
          </div>

          {/* Datos de la pareja */}
          <div>
            <h3 className="font-display text-lg mb-4 text-foreground flex items-center gap-2">
              <Heart size={18} className="text-primary" /> Tu pareja
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Nombre de tu pareja *</label>
                <input type="text" required value={formData.nombre_pareja} onChange={(e) => update("nombre_pareja", e.target.value)} className={inputClass} placeholder="Juan Pérez" />
              </div>
              <div>
                <label className={labelClass}>WhatsApp de tu pareja</label>
                <input type="tel" value={formData.whatsapp_pareja} onChange={(e) => update("whatsapp_pareja", e.target.value)} className={inputClass} placeholder="+56 9 XXXX XXXX" />
              </div>
            </div>
          </div>

          {/* Fechas importantes */}
          <div>
            <h3 className="font-display text-lg mb-4 text-foreground flex items-center gap-2">
              <Calendar size={18} className="text-primary" /> Tus fechas importantes
            </h3>
            <p className="text-xs text-muted-foreground mb-3">
              Las fechas en que <span className="font-medium">a ti</span> te gustaría recibir tu regalo.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Tu cumpleaños</label>
                <input type="date" value={formData.fecha_cumple} onChange={(e) => update("fecha_cumple", e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Aniversario</label>
                <input type="date" value={formData.fecha_aniversario} onChange={(e) => update("fecha_aniversario", e.target.value)} className={inputClass} />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>Otras fechas especiales</label>
                <input type="text" value={formData.otras_fechas} onChange={(e) => update("otras_fechas", e.target.value)} className={inputClass} placeholder="Ej: Navidad, San Valentín, graduación…" />
              </div>
            </div>
          </div>

          {/* Qué te gustaría */}
          <div>
            <h3 className="font-display text-lg mb-4 text-foreground flex items-center gap-2">
              <Gift size={18} className="text-primary" /> Qué te gustaría recibir
            </h3>
            <div className="grid gap-4">
              <div>
                <label className={labelClass}>Descríbenos tu joya soñada *</label>
                <textarea
                  required
                  value={formData.preferencias}
                  onChange={(e) => update("preferencias", e.target.value)}
                  className={`${inputClass} min-h-[80px]`}
                  placeholder="Cuéntanos qué te encantaría… un anillo solitario clásico, un collar con piedra de color, algo vintage…"
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

              {/* Inspiración: fotos y links */}
              <div>
                <label className={labelClass}>Fotos de inspiración</label>
                <p className="text-xs text-muted-foreground mb-2">Sube hasta 5 fotos de joyas que te gusten (Pinterest, Instagram, capturas…)</p>
                <div className="flex flex-wrap gap-3 mb-3">
                  {previews.map((src, i) => (
                    <div key={i} className="relative w-20 h-20 rounded-lg overflow-hidden border border-border group">
                      <img src={src} alt={`Inspiración ${i + 1}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeImage(i)}
                        className="absolute top-0.5 right-0.5 bg-background/80 rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={14} className="text-foreground" />
                      </button>
                    </div>
                  ))}
                  {images.length < 5 && (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-20 h-20 rounded-lg border-2 border-dashed border-border hover:border-primary/50 flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ImagePlus size={20} />
                      <span className="text-[10px]">Agregar</span>
                    </button>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageAdd}
                  className="hidden"
                />
              </div>

              <div>
                <label className={labelClass}>
                  <Link size={14} className="inline mr-1.5 text-primary" />
                  Links de referencia
                </label>
                <input
                  type="text"
                  value={formData.referencias}
                  onChange={(e) => update("referencias", e.target.value)}
                  className={inputClass}
                  placeholder="Pega links de Pinterest, Instagram o cualquier joya que te guste…"
                />
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
            🔒 100% confidencial. Tu pareja nunca sabrá que tú nos escribiste primero.
          </p>
        </form>
      </div>
    </section>
  );
};

export default WishListForm;
