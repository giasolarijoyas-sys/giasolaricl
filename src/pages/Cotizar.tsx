import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, MessageCircle } from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WHATSAPP_PHONE } from "@/lib/whatsapp";

type TipoKey =
  | "anillo_compromiso"
  | "alianza"
  | "aros"
  | "colgante"
  | "pulsera_esclava";

type MetalKey =
  | "oro_amarillo"
  | "oro_rosado"
  | "oro_blanco"
  | "platino"
  | "a_definir";

const TIPOS: { key: TipoKey; label: string }[] = [
  { key: "anillo_compromiso", label: "Anillo de compromiso" },
  { key: "alianza", label: "Argollas de matrimonio" },
  { key: "aros", label: "Aros" },
  { key: "colgante", label: "Collar" },
  { key: "pulsera_esclava", label: "Pulsera / Esclava" },
];

const METALES: { key: MetalKey; label: string; swatch: string }[] = [
  { key: "oro_amarillo", label: "Oro 18k amarillo", swatch: "#D4AF37" },
  { key: "oro_rosado", label: "Oro 18k rosado", swatch: "#E0BFB8" },
  { key: "oro_blanco", label: "Oro 18k blanco", swatch: "#E8E8E8" },
  { key: "platino", label: "Platino", swatch: "#CFCFCF" },
  { key: "a_definir", label: "No sé, me ayudás a decidir", swatch: "transparent" },
];

const PIEDRAS_COMPROMISO = [
  { key: "diamante_natural", label: "Diamante natural" },
  { key: "diamante_lab", label: "Diamante lab grown" },
  { key: "aguamarina", label: "Aguamarina" },
  { key: "zafiro", label: "Zafiro" },
  { key: "esmeralda", label: "Esmeralda" },
  { key: "otra_color", label: "Otra piedra de color (rubí, ónix, etc.)" },
  { key: "sin_piedra", label: "Sin piedra principal grande" },
  { key: "a_definir", label: "No sé, me ayudás a decidir" },
];

const PIEDRAS_ALIANZA = [
  { key: "sin_piedras", label: "Sin piedras" },
  { key: "con_diamantes", label: "Con diamantes (eternity, cinco diamantes, etc.)" },
  { key: "a_definir", label: "No sé, me ayudás a decidir" },
];

const PIEDRAS_OTROS = [
  { key: "sin_piedras", label: "Sin piedras" },
  { key: "con_piedras", label: "Con piedras (diamantes o color)" },
  { key: "a_definir", label: "No sé, me ayudás a decidir" },
];

const PRESUPUESTOS = [
  { key: "hasta_1.8", label: "Hasta $1.800.000" },
  { key: "1.8_2.8", label: "$1.800.000 – $2.800.000" },
  { key: "2.8_3.5", label: "$2.800.000 – $3.500.000" },
  { key: "3.5_4.5", label: "$3.500.000 – $4.500.000" },
  { key: "5_mas", label: "Más de $5.000.000" },
  { key: "conversar", label: "Prefiero conversarlo" },
];

const RANGOS_BASE: Record<string, Record<string, { min: number; max: number }>> = {
  anillo_compromiso: {
    sin_piedra: { min: 1500000, max: 2200000 },
    aguamarina: { min: 1500000, max: 3000000 },
    zafiro: { min: 1500000, max: 3000000 },
    esmeralda: { min: 1500000, max: 3000000 },
    otra_color: { min: 1500000, max: 3000000 },
    diamante_lab: { min: 1800000, max: 4000000 },
    diamante_natural: { min: 2500000, max: 9000000 },
  },
  alianza: {
    sin_piedras: { min: 600000, max: 1300000 },
    con_diamantes: { min: 1300000, max: 3500000 },
  },
  aros: {
    sin_piedras: { min: 300000, max: 800000 },
    con_piedras: { min: 800000, max: 2200000 },
  },
  colgante: {
    sin_piedras: { min: 350000, max: 1000000 },
    con_piedras: { min: 800000, max: 2200000 },
  },
  pulsera_esclava: {
    sin_piedras: { min: 350000, max: 1000000 },
    con_piedras: { min: 800000, max: 2200000 },
  },
};

const formatCLP = (n: number) => "$" + n.toLocaleString("es-CL");

function calcularRango(tipo: string, metal: string, piedra: string) {
  const grupo = RANGOS_BASE[tipo];
  if (!grupo) return null;
  const base = grupo[piedra];
  if (!base) return null;
  let { min, max } = base;
  if (metal === "platino") {
    min = Math.round((min * 1.3) / 100000) * 100000;
    max = Math.round((max * 1.3) / 100000) * 100000;
  }
  return { min, max };
}

const Cotizar = () => {
  const [step, setStep] = useState(1);
  const [tipo, setTipo] = useState<string>("");
  const [metal, setMetal] = useState<string>("");
  const [piedra, setPiedra] = useState<string>("");
  const [presupuesto, setPresupuesto] = useState<string>("");

  const piedrasOptions =
    tipo === "anillo_compromiso"
      ? PIEDRAS_COMPROMISO
      : tipo === "alianza"
      ? PIEDRAS_ALIANZA
      : PIEDRAS_OTROS;

  const tipoLabel = TIPOS.find((t) => t.key === tipo)?.label ?? "";
  const metalLabel = METALES.find((m) => m.key === metal)?.label ?? "";
  const piedraLabel = piedrasOptions.find((p) => p.key === piedra)?.label ?? "";
  const presupuestoLabel = PRESUPUESTOS.find((p) => p.key === presupuesto)?.label ?? "";

  const rango = calcularRango(tipo, metal, piedra);
  const showRango =
    rango && metal !== "a_definir" && piedra !== "a_definir" && presupuesto !== "conversar";

  const buildWaUrl = () => {
    const rangoText = showRango && rango
      ? `El cotizador me mostró un rango de ${formatCLP(rango.min)} – ${formatCLP(rango.max)}. Me gustaría conversar los detalles.`
      : `Me gustaría que me ayudes a definir los detalles.`;
    const text = `Hola Gia! Vengo del cotizador del sitio.

🎁 Pieza: ${tipoLabel}
✨ Metal: ${metalLabel}
💎 Piedra: ${piedraLabel}
💰 Presupuesto: ${presupuestoLabel}

${rangoText}

Gracias!`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
  };

  const reset = () => {
    setStep(1);
    setTipo("");
    setMetal("");
    setPiedra("");
    setPresupuesto("");
  };

  const canNext =
    (step === 1 && tipo) ||
    (step === 2 && metal) ||
    (step === 3 && piedra) ||
    (step === 4 && presupuesto);

  const next = () => {
    if (step === 3 && tipo) {
      // ensure piedra valid for the tipo group; if user changed tipo earlier, reset
    }
    setStep((s) => Math.min(5, s + 1));
  };
  const back = () => setStep((s) => Math.max(1, s - 1));

  // when tipo changes, reset piedra
  const selectTipo = (k: string) => {
    if (k !== tipo) setPiedra("");
    setTipo(k);
  };

  const Card = ({
    selected,
    onClick,
    children,
  }: {
    selected: boolean;
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      role="button"
      onClick={onClick}
      className={`w-full text-left p-4 md:p-5 rounded-md border-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
        selected
          ? "border-gold bg-cream/80 text-charcoal"
          : "border-charcoal/15 bg-background hover:border-gold/50 text-charcoal/80"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Cotizá tu pieza · Gia Solari Joyas"
        description="Cotizador online: armá tu anillo o joya en 4 pasos y recibí un presupuesto aproximado al instante. Joyería hecha a mano en Santiago."
        path="/cotizar"
      />
      <Navbar />

      <main className="flex-1 pt-28 pb-32 md:pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <header className="text-center mb-8">
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
              Cotizador
            </p>
            <h1 className="font-display text-3xl md:text-4xl text-charcoal mb-3">
              Cotizá tu pieza
            </h1>
            <p className="text-charcoal/70 text-sm md:text-base">
              4 preguntas y armamos el presupuesto aproximado en menos de un minuto.
            </p>
          </header>

          {step <= 4 && (
            <div className="mb-8" aria-label={`Paso ${step} de 4`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs tracking-widest uppercase text-charcoal/60">
                  Paso {step} de 4
                </span>
                <span className="text-xs text-charcoal/60">{Math.round((step / 4) * 100)}%</span>
              </div>
              <div className="h-1 bg-charcoal/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gold"
                  initial={false}
                  animate={{ width: `${(step / 4) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          )}

          <div className="bg-cream/40 border border-gold/15 rounded-lg p-5 md:p-8 min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {step === 1 && (
                  <div>
                    <h2 className="font-display text-xl md:text-2xl text-charcoal mb-5">
                      ¿Qué pieza tenés en mente?
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {TIPOS.map((t) => (
                        <Card key={t.key} selected={tipo === t.key} onClick={() => selectTipo(t.key)}>
                          <span className="font-medium text-sm md:text-base">{t.label}</span>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h2 className="font-display text-xl md:text-2xl text-charcoal mb-5">
                      ¿En qué metal la imaginás?
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {METALES.map((m) => (
                        <Card key={m.key} selected={metal === m.key} onClick={() => setMetal(m.key)}>
                          <div className="flex items-center gap-3">
                            <span
                              aria-hidden
                              className="inline-block w-6 h-6 rounded-full border border-charcoal/20"
                              style={{ background: m.swatch }}
                            />
                            <div>
                              <p className="font-medium text-sm">{m.label}</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h2 className="font-display text-xl md:text-2xl text-charcoal mb-5">
                      ¿Qué piedra te gustaría?
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {piedrasOptions.map((p) => (
                        <Card key={p.key} selected={piedra === p.key} onClick={() => setPiedra(p.key)}>
                          <span className="font-medium text-sm md:text-base">{p.label}</span>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <h2 className="font-display text-xl md:text-2xl text-charcoal mb-2">
                      ¿Qué presupuesto manejás aproximadamente?
                    </h2>
                    <p className="text-sm text-charcoal/60 mb-5">
                      No tiene que ser exacto, sirve para orientarnos.
                    </p>
                    <div className="space-y-3">
                      {PRESUPUESTOS.map((p) => (
                        <Card
                          key={p.key}
                          selected={presupuesto === p.key}
                          onClick={() => setPresupuesto(p.key)}
                        >
                          <span className="font-medium text-sm md:text-base">{p.label}</span>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div className="text-center py-4">
                    {showRango && rango ? (
                      <>
                        <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
                          Rango aproximado
                        </p>
                        <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-5 leading-tight">
                          Tu pieza estaría aproximadamente entre
                          <br />
                          <span className="text-gold">
                            {formatCLP(rango.min)} – {formatCLP(rango.max)}
                          </span>
                        </h2>
                        <p className="text-sm text-charcoal/70 mb-8 max-w-md mx-auto leading-relaxed">
                          El precio final depende del quilataje de la piedra y los detalles que conversemos.
                          Cada anillo incluye Certificado Gia Solari.
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
                          Conversemos
                        </p>
                        <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-5">
                          Conversemos los detalles
                        </h2>
                        <p className="text-sm text-charcoal/70 mb-8 max-w-md mx-auto leading-relaxed">
                          Cada pieza es única y prefiero armar la cotización contigo.
                        </p>
                      </>
                    )}

                    <a
                      href={buildWaUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[52px] px-8 py-4 bg-gradient-gold text-charcoal font-semibold tracking-widest uppercase text-sm hover:opacity-90 transition-opacity"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Conversar con Gia por WhatsApp
                    </a>
                    <div className="mt-6">
                      <button
                        onClick={reset}
                        className="text-xs tracking-widest uppercase text-charcoal/60 hover:text-gold underline-offset-4 hover:underline"
                      >
                        Volver a empezar
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav buttons (desktop / inline) */}
          {step <= 4 && (
            <div className="hidden md:flex items-center justify-between mt-6">
              <button
                onClick={back}
                disabled={step === 1}
                className="flex items-center gap-1 text-sm text-charcoal/70 hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={16} /> Atrás
              </button>
              <button
                onClick={next}
                disabled={!canNext}
                className="px-7 py-3 bg-charcoal text-cream tracking-widest uppercase text-xs font-semibold hover:bg-gold hover:text-charcoal transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {step === 4 ? "Ver resultado" : "Siguiente"}
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Sticky bottom (mobile) */}
      {step <= 4 && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-[998] bg-background/95 backdrop-blur-md border-t border-gold/20 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          <div className="flex items-center gap-2">
            {step > 1 && (
              <button
                onClick={back}
                className="flex items-center justify-center gap-1 px-4 min-h-[48px] border border-charcoal/30 text-charcoal text-xs tracking-widest uppercase"
              >
                <ChevronLeft size={16} /> Atrás
              </button>
            )}
            <button
              onClick={next}
              disabled={!canNext}
              className="flex-1 min-h-[48px] px-6 bg-charcoal text-cream tracking-widest uppercase text-xs font-semibold disabled:opacity-40"
            >
              {step === 4 ? "Ver resultado" : "Siguiente"}
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Cotizar;
