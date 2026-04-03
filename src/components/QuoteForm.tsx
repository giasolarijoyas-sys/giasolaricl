import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Send, Upload, X, Heart, Calendar, Image, CheckCircle, Loader2, SkipForward } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

type FormData = {
  pieza: string;
  metal: string;
  piedra: string;
  forma: string;
  quilates: string;
  estilo: string;
  engaste: string;
  grabado: string;
  referencias: string;
  nombre: string;
  whatsapp: string;
  email: string;
  comoNosConociste: string;
  presupuesto: string;
  fechaLimite: string;
  nombrePareja: string;
  fechaAniversario: string;
  fechaCumplePareja: string;
  notasPareja: string;
  imagenes: File[];
  // Perfil de ella
  queLeGusta: string;
  deporte: string;
  trabajo: string;
  usaJoyas: string;
  estiloVestir: string;
  colorFavorito: string;
  notasExtra: string;
  tallaMano: string;
};

const STEPS = [
  { num: 1, label: "Pieza" },
  { num: 2, label: "Metal" },
  { num: 3, label: "Piedra" },
  { num: 4, label: "Estilo" },
  { num: 5, label: "Inspiración" },
  { num: 6, label: "Cuéntanos de ella" },
  { num: 7, label: "Talla" },
  { num: 8, label: "Datos" },
];

const piezas = [
  { emoji: "💍", label: "Anillo de compromiso", desc: "Solitarios, halo, tricillo" },
  { emoji: "🔄", label: "Argollas de matrimonio", desc: "Lisas, grabadas, diamantes" },
  { emoji: "✨", label: "Aros", desc: "Clásicos o personalizados" },
  { emoji: "📿", label: "Collar", desc: "Colgantes y piezas especiales" },
  { emoji: "⛓️", label: "Pulsera", desc: "Pulsera fina o con detalles" },
  { emoji: "🔗", label: "Esclava", desc: "Esclavas en oro o platino" },
  { emoji: "🔮", label: "Transformar joya heredada", desc: "Nueva vida a tu tesoro" },
  { emoji: "💫", label: "Otra joya", desc: "Cuéntanos qué tienes en mente" },
];

const metales = [
  { emoji: "🟡", label: "Oro 18k Amarillo" },
  { emoji: "🤍", label: "Platino" },
  { emoji: "⚪", label: "Oro 18k Blanco" },
  { emoji: "🌸", label: "Oro 18k Rosado" },
];

const piedras = [
  { emoji: "💎", label: "Diamante Natural" },
  { emoji: "🔬", label: "Diamante Lab" },
  { emoji: "⭐", label: "Moissanita" },
  { emoji: "💙", label: "Zafiro" },
  { emoji: "💚", label: "Esmeralda" },
  { emoji: "❤️", label: "Rubí" },
  { emoji: "🔗", label: "Sin piedra central" },
];

const estilos = [
  { emoji: "🏛️", label: "Clásico" },
  { emoji: "◻️", label: "Moderno" },
  { emoji: "🌹", label: "Vintage" },
];

const engastes = [
  { emoji: "💍", label: "Solitario" },
  { emoji: "✨", label: "Laterales" },
  { emoji: "👑", label: "Halo" },
  { emoji: "💫", label: "Tricillo" },
  { emoji: "〰️", label: "Liso / sin engaste" },
];

const tallaManos = [
  { emoji: "🤏", label: "XS — Mano muy delgada", desc: "Talla 4–5 (aprox. 15mm)" },
  { emoji: "✋", label: "S — Mano delgada", desc: "Talla 5–6 (aprox. 16mm)" },
  { emoji: "🖐️", label: "M — Mano mediana", desc: "Talla 6–7 (aprox. 17mm)" },
  { emoji: "🫲", label: "L — Mano ancha", desc: "Talla 7–8 (aprox. 18mm)" },
  { emoji: "🤚", label: "XL — Mano grande", desc: "Talla 8+ (aprox. 19mm+)" },
  { emoji: "❓", label: "No lo sé", desc: "Te ayudamos a medir" },
];

const OptionCard = ({
  emoji,
  label,
  desc,
  selected,
  onClick,
}: {
  emoji: string;
  label: string;
  desc?: string;
  selected: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all text-center ${
      selected
        ? "border-primary bg-primary/10"
        : "border-border hover:border-primary/40"
    }`}
  >
    <span className="text-2xl">{emoji}</span>
    <span className="text-sm font-medium text-foreground">{label}</span>
    {desc && <span className="text-xs text-muted-foreground">{desc}</span>}
  </button>
);

const QuoteForm = () => {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<FormData>({
    pieza: "",
    metal: "",
    piedra: "",
    forma: "",
    quilates: "",
    estilo: "",
    engaste: "",
    grabado: "",
    referencias: "",
    nombre: "",
    whatsapp: "",
    email: "",
    comoNosConociste: "",
    presupuesto: "",
    fechaLimite: "",
    nombrePareja: "",
    fechaAniversario: "",
    fechaCumplePareja: "",
    notasPareja: "",
    imagenes: [],
    queLeGusta: "",
    deporte: "",
    trabajo: "",
    usaJoyas: "",
    estiloVestir: "",
    colorFavorito: "",
    notasExtra: "",
    tallaMano: "",
  });

  const set = (key: keyof FormData, val: string) =>
    setForm((p) => ({ ...p, [key]: val }));

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setForm((p) => ({ ...p, imagenes: [...p.imagenes, ...files].slice(0, 5) }));
  };

  const removeImage = (idx: number) => {
    setForm((p) => ({ ...p, imagenes: p.imagenes.filter((_, i) => i !== idx) }));
  };

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length));
  const prev = () => setStep((s) => Math.max(s - 1, 1));
  const skip = () => next();

  const uploadImages = async (): Promise<string[]> => {
    const urls: string[] = [];
    for (const file of form.imagenes) {
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
    if (!form.nombre || !form.whatsapp || !form.email) {
      toast({
        title: "Faltan datos",
        description: "Por favor completa al menos nombre, WhatsApp y email.",
      });
      return;
    }

    setSubmitting(true);
    try {
      const imageUrls = form.imagenes.length > 0 ? await uploadImages() : [];

      const perfilElla = [
        form.queLeGusta ? `Le gusta: ${form.queLeGusta}` : "",
        form.deporte ? `Deporte: ${form.deporte}` : "",
        form.trabajo ? `Trabajo: ${form.trabajo}` : "",
        form.usaJoyas ? `Usa joyas: ${form.usaJoyas}` : "",
        form.estiloVestir ? `Estilo: ${form.estiloVestir}` : "",
        form.colorFavorito ? `Color favorito: ${form.colorFavorito}` : "",
        form.notasExtra ? `Notas: ${form.notasExtra}` : "",
        form.tallaMano ? `Talla mano: ${form.tallaMano}` : "",
      ].filter(Boolean).join(" | ");

      const { error } = await supabase.functions.invoke('process-quote', {
        body: {
          pieza: form.pieza,
          metal: form.metal || "Oro 18k Amarillo",
          piedra: form.piedra,
          forma: form.forma,
          quilates: form.quilates,
          estilo: form.estilo,
          engaste: form.engaste,
          grabado: form.grabado,
          referencias: form.referencias,
          nombre: form.nombre,
          whatsapp: form.whatsapp,
          email: form.email,
          como_nos_conociste: form.comoNosConociste,
          presupuesto: form.presupuesto,
          fecha_limite: form.fechaLimite,
          nombre_pareja: form.nombrePareja,
          fecha_aniversario: form.fechaAniversario,
          fecha_cumple_pareja: form.fechaCumplePareja,
          notas_pareja: perfilElla || form.notasPareja,
          image_urls: imageUrls,
        },
      });

      if (error) throw error;
      setSubmitted(true);
    } catch (err) {
      console.error('Submit error:', err);
      toast({
        title: "Error al enviar",
        description: "Hubo un problema enviando tu cotización. Inténtalo de nuevo o escríbenos por WhatsApp.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Check if step is skippable (all except datos personales)
  const isSkippable = step !== STEPS.length;

  if (submitted) {
    return (
      <section id="cotizador" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-border rounded-lg p-10 md:p-16 text-center"
          >
            <CheckCircle size={48} className="text-primary mx-auto mb-6" />
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              ¡Cotización recibida!
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md mx-auto mb-2">
              Gracias, <strong className="text-foreground">{form.nombre}</strong>. 
              Recibí tu solicitud y te contacto personalmente en menos de 24 horas 
              con una propuesta detallada.
            </p>
            <p className="text-muted-foreground text-sm">
              — Macarena González Solari
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="cotizador" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
            Cotizador
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
            Diseña tu <em className="text-primary not-italic">joya ideal</em>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Cuéntame tu visión paso a paso — o sáltate lo que no sepas y te ayudo.
            Te respondo con una propuesta personalizada en menos de 24 horas.
          </p>
        </motion.div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-1 mb-10">
          {STEPS.map((s) => (
            <div key={s.num} className="flex items-center gap-1">
              <button
                onClick={() => setStep(s.num)}
                className={`w-8 h-8 rounded-full text-xs font-medium flex items-center justify-center transition-all ${
                  step === s.num
                    ? "bg-primary text-primary-foreground"
                    : step > s.num
                    ? "bg-primary/20 text-primary"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {s.num}
              </button>
              {s.num < STEPS.length && (
                <div
                  className={`w-4 md:w-8 h-px ${
                    step > s.num ? "bg-primary" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="bg-card border border-border rounded-lg p-6 md:p-10 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Step 1: Pieza */}
              {step === 1 && (
                <div>
                  <h3 className="font-display text-xl mb-2 text-foreground">
                    ¿Qué pieza estás buscando?
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Hacemos todo tipo de joyas a pedido. Selecciona o sáltate este paso.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {piezas.map((p) => (
                      <OptionCard
                        key={p.label}
                        {...p}
                        selected={form.pieza === p.label}
                        onClick={() => set("pieza", p.label)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Metal */}
              {step === 2 && (
                <div>
                  <h3 className="font-display text-xl mb-2 text-foreground">
                    Elige tu metal
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {form.pieza === "Argollas de matrimonio"
                      ? "Las argollas se trabajan en Oro 18k Amarillo"
                      : "Los metales más nobles para tu pieza"}
                  </p>
                  {form.pieza === "Argollas de matrimonio" ? (
                    <div className="grid grid-cols-1 max-w-xs mx-auto gap-3">
                      <OptionCard
                        emoji="🟡"
                        label="Oro 18k Amarillo"
                        selected={true}
                        onClick={() => set("metal", "Oro 18k Amarillo")}
                      />
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      {metales.map((m) => (
                        <OptionCard
                          key={m.label}
                          {...m}
                          selected={form.metal === m.label}
                          onClick={() => set("metal", m.label)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Piedra */}
              {step === 3 && (
                <div>
                  <h3 className="font-display text-xl mb-2 text-foreground">
                    Piedra central
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    ¿Qué piedra imaginas? Si no estás seguro, sáltate este paso y te asesoramos.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                    {piedras.map((p) => (
                      <OptionCard
                        key={p.label}
                        {...p}
                        selected={form.piedra === p.label}
                        onClick={() => set("piedra", p.label)}
                      />
                    ))}
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground block mb-1">Forma (si aplica)</label>
                      <select
                        value={form.forma}
                        onChange={(e) => set("forma", e.target.value)}
                        className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
                      >
                        <option value="">Seleccionar…</option>
                        <option>Redonda</option>
                        <option>Oval</option>
                        <option>Pera</option>
                        <option>Princesa</option>
                        <option>Esmeralda</option>
                        <option>Marquesa</option>
                        <option>Corazón</option>
                        <option>Cushion</option>
                        <option>No lo tengo claro</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground block mb-1">Quilates (si aplica)</label>
                      <select
                        value={form.quilates}
                        onChange={(e) => set("quilates", e.target.value)}
                        className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
                      >
                        <option value="">Seleccionar…</option>
                        <option>0.3–0.5 ct</option>
                        <option>0.5–0.8 ct</option>
                        <option>0.8–1.0 ct</option>
                        <option>1.0–1.5 ct</option>
                        <option>1.5–2.0 ct</option>
                        <option>+2.0 ct</option>
                        <option>No lo sé</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Estilo */}
              {step === 4 && (
                <div>
                  <h3 className="font-display text-xl mb-2 text-foreground">
                    Estilo y diseño
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    ¿Cómo lo imaginas? Si no lo tienes claro, te ayudamos.
                  </p>
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Estilo</p>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {estilos.map((e) => (
                      <OptionCard
                        key={e.label}
                        {...e}
                        selected={form.estilo === e.label}
                        onClick={() => set("estilo", e.label)}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Diseño / Engaste</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                    {engastes.map((e) => (
                      <OptionCard
                        key={e.label}
                        {...e}
                        selected={form.engaste === e.label}
                        onClick={() => set("engaste", e.label)}
                      />
                    ))}
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-1">Grabado (opcional)</label>
                    <input
                      type="text"
                      value={form.grabado}
                      onChange={(e) => set("grabado", e.target.value)}
                      placeholder="Ej: M & C — 14.02.2025"
                      className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
                    />
                  </div>
                </div>
              )}

              {/* Step 5: Inspiración */}
              {step === 5 && (
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
                      value={form.referencias}
                      onChange={(e) => set("referencias", e.target.value)}
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

                    {form.imagenes.length > 0 && (
                      <div className="flex gap-3 mt-4 flex-wrap">
                        {form.imagenes.map((file, i) => (
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
              )}

              {/* Step 6: Cuéntanos de ella */}
              {step === 6 && (
                <div>
                  <h3 className="font-display text-xl mb-2 text-foreground flex items-center gap-2">
                    <Heart size={20} className="text-primary" /> Cuéntanos de ella
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Mientras más sepamos de tu futura mujer, mejor podemos recomendarte el anillo perfecto.
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
                        value={form.nombrePareja}
                        onChange={(e) => set("nombrePareja", e.target.value)}
                        placeholder="Para personalizar tu experiencia"
                        className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground block mb-1">¿Qué le gusta hacer?</label>
                        <input
                          type="text"
                          value={form.queLeGusta}
                          onChange={(e) => set("queLeGusta", e.target.value)}
                          placeholder="Ej: Viajar, cocinar, leer, naturaleza..."
                          className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground block mb-1">¿Hace deporte?</label>
                        <input
                          type="text"
                          value={form.deporte}
                          onChange={(e) => set("deporte", e.target.value)}
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
                          value={form.trabajo}
                          onChange={(e) => set("trabajo", e.target.value)}
                          placeholder="Ej: Arquitecta, doctora, profesora..."
                          className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground block mb-1">¿Usa joyas regularmente?</label>
                        <select
                          value={form.usaJoyas}
                          onChange={(e) => set("usaJoyas", e.target.value)}
                          className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
                        >
                          <option value="">Seleccionar…</option>
                          <option>Sí, todos los días</option>
                          <option>A veces, en ocasiones especiales</option>
                          <option>Casi nunca</option>
                          <option>No lo sé</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground block mb-1">¿Cómo describirías su estilo?</label>
                        <select
                          value={form.estiloVestir}
                          onChange={(e) => set("estiloVestir", e.target.value)}
                          className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
                        >
                          <option value="">Seleccionar…</option>
                          <option>Clásico / elegante</option>
                          <option>Moderno / minimalista</option>
                          <option>Bohemio / relajado</option>
                          <option>Glamoroso / llamativo</option>
                          <option>Deportivo / casual</option>
                          <option>No sabría describirlo</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground block mb-1">Color favorito de ella</label>
                        <input
                          type="text"
                          value={form.colorFavorito}
                          onChange={(e) => set("colorFavorito", e.target.value)}
                          placeholder="Ej: Azul, dorado, rosa..."
                          className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground block mb-1 flex items-center gap-1">
                          <Calendar size={14} /> Fecha de aniversario
                        </label>
                        <input
                          type="date"
                          value={form.fechaAniversario}
                          onChange={(e) => set("fechaAniversario", e.target.value)}
                          className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground block mb-1 flex items-center gap-1">
                          <Calendar size={14} /> Cumpleaños de tu pareja
                        </label>
                        <input
                          type="date"
                          value={form.fechaCumplePareja}
                          onChange={(e) => set("fechaCumplePareja", e.target.value)}
                          className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground block mb-1">
                        ¿Algo más que nos ayude a conocerla?
                      </label>
                      <textarea
                        value={form.notasExtra}
                        onChange={(e) => set("notasExtra", e.target.value)}
                        rows={3}
                        placeholder="Ej: Le gustan los diseños vintage, su color favorito es el azul, estamos juntos hace 5 años, le encanta el mar..."
                        className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 7: Talla de mano */}
              {step === 7 && (
                <div>
                  <h3 className="font-display text-xl mb-2 text-foreground">
                    Talla aproximada
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    ¿Qué tipo de mano tiene? Si no lo sabes, te ayudamos a medir después.
                    Esto es solo una referencia inicial.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {tallaManos.map((t) => (
                      <OptionCard
                        key={t.label}
                        {...t}
                        selected={form.tallaMano === t.label}
                        onClick={() => set("tallaMano", t.label)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Step 8: Datos personales */}
              {step === 8 && (
                <div>
                  <h3 className="font-display text-xl mb-2 text-foreground">
                    Tus datos
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Te envío una cotización personalizada en menos de 24 horas
                  </p>
                  <div className="grid gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground block mb-1">Nombre *</label>
                      <input
                        type="text"
                        required
                        value={form.nombre}
                        onChange={(e) => set("nombre", e.target.value)}
                        className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground block mb-1">WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={form.whatsapp}
                          onChange={(e) => set("whatsapp", e.target.value)}
                          placeholder="+56 9 XXXX XXXX"
                          className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground block mb-1">Email *</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                          className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground block mb-1">¿Cómo nos conociste?</label>
                        <select
                          value={form.comoNosConociste}
                          onChange={(e) => set("comoNosConociste", e.target.value)}
                          className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
                        >
                          <option value="">Seleccionar…</option>
                          <option>Instagram</option>
                          <option>Google</option>
                          <option>Referido</option>
                          <option>TikTok</option>
                          <option>Otro</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground block mb-1">Presupuesto (CLP)</label>
                        <select
                          value={form.presupuesto}
                          onChange={(e) => set("presupuesto", e.target.value)}
                          className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
                        >
                          <option value="">Seleccionar…</option>
                          <option>Hasta $500.000</option>
                          <option>$500.000–$1.000.000</option>
                          <option>$1.000.000–$2.000.000</option>
                          <option>$2.000.000–$4.000.000</option>
                          <option>+$4.000.000</option>
                          <option>Prefiero no indicarlo</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground block mb-1">Fecha límite (si tienes)</label>
                      <input
                        type="date"
                        value={form.fechaLimite}
                        onChange={(e) => set("fechaLimite", e.target.value)}
                        className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm"
                      />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-border">
            <button
              onClick={prev}
              disabled={step === 1}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={16} /> Volver
            </button>

            <div className="flex items-center gap-3">
              {isSkippable && (
                <button
                  onClick={skip}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Saltar <SkipForward size={14} />
                </button>
              )}

              {step < STEPS.length ? (
                <button
                  onClick={next}
                  className="flex items-center gap-1 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity rounded-lg"
                >
                  Continuar <ChevronRight size={16} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="flex items-center gap-2 px-6 py-2.5 bg-gradient-gold text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity rounded-lg disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Enviar cotización
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
