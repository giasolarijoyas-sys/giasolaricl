import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Send, MessageCircle } from "lucide-react";

const SEARCH_OPTIONS = [
  "Anillo de compromiso",
  "Regalo para alguien especial",
  "Una joya para mí",
  "Todavía no sé",
];

const IDEA_OPTIONS = ["Sí", "Más o menos", "No, me guía Maca"];

const QuoteWizard = () => {
  const [step, setStep] = useState(0);
  const [nombre, setNombre] = useState("");
  const [contacto, setContacto] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [idea, setIdea] = useState("");
  const [detalle, setDetalle] = useState("");

  const canNext0 = nombre.trim().length > 0 && contacto.trim().length > 0;
  const canNext1 = busqueda.length > 0;

  const handleSubmit = () => {
    const text = `Hola Maca, soy ${nombre.trim()} y quiero cotizar una joya 💛`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/56984049502?text=${encoded}`, "_blank");
  };

  return (
    <section id="cotizador" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-2xl">
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
            Cotiza tu <em className="text-primary not-italic">joya</em>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            3 pasos simples y te contactamos por WhatsApp.
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="flex items-center gap-1 mb-8">
          {[0, 1, 2].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                s <= step ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-6 md:p-10 min-h-[300px]">
          <AnimatePresence mode="wait">
            {/* STEP 0 — Tus datos */}
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display text-xl text-foreground mb-6">Tus datos</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1.5">Nombre</label>
                    <input
                      type="text"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Tu nombre"
                      className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1.5">Email o WhatsApp</label>
                    <input
                      type="text"
                      value={contacto}
                      onChange={(e) => setContacto(e.target.value)}
                      placeholder="tu@email.com o +56 9 XXXX XXXX"
                      className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Solo te contactamos para cotizar. Nunca te spamearemos.
                  </p>
                </div>

                <div className="flex justify-end mt-8 pt-6 border-t border-border">
                  <button
                    onClick={() => setStep(1)}
                    disabled={!canNext0}
                    className="flex items-center gap-1 bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Siguiente <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 1 — ¿Qué buscas? */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display text-xl text-foreground mb-6">¿Qué estás buscando?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SEARCH_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setBusqueda(opt)}
                      className={`p-4 rounded-lg border text-sm text-left transition-all ${
                        busqueda === opt
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border bg-background text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                  <button
                    onClick={() => setStep(0)}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ChevronLeft size={16} /> Atrás
                  </button>
                  <button
                    onClick={() => setStep(2)}
                    disabled={!canNext1}
                    className="flex items-center gap-1 bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Siguiente <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2 — Tu idea */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display text-xl text-foreground mb-6">¿Tienes idea de lo que quieres?</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {IDEA_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setIdea(opt)}
                      className={`px-4 py-2 rounded-full text-sm border transition-all ${
                        idea === opt
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border bg-background text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                {(idea === "Sí" || idea === "Más o menos") && (
                  <textarea
                    value={detalle}
                    onChange={(e) => setDetalle(e.target.value)}
                    placeholder="Cuéntanos: estilo, piedra, metal, referencias..."
                    className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all min-h-[100px] mb-4"
                  />
                )}

                {idea === "No, me guía Maca" && (
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4">
                    <p className="text-sm text-foreground">
                      Perfecto, eso es exactamente para lo que estamos. Te guiamos en todo.
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                  <button
                    onClick={() => setStep(1)}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ChevronLeft size={16} /> Atrás
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!idea}
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <MessageCircle size={16} /> Enviar mi cotización
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default QuoteWizard;
