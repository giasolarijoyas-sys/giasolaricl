import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, MessageCircle, Upload, X, Loader2 } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustMicrocopy from "@/components/TrustMicrocopy";
import { WHATSAPP_PHONE } from "@/lib/whatsapp";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { JOYAS, type Joya } from "@/data/joyas";

const MAX_IMAGES = 5;
const MAX_SIZE_MB = 10;
const ACCEPTED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/heic", "image/heif"];
const ACCEPTED_EXT = /\.(jpe?g|png|webp|heic|heif)$/i;

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
  { key: "a_definir", label: "No sé, ayúdame a decidir", swatch: "transparent" },
];

const PIEDRAS_COMPROMISO = [
  { key: "diamante_natural", label: "Diamante natural" },
  { key: "diamante_lab", label: "Diamante lab grown" },
  { key: "aguamarina", label: "Aguamarina" },
  { key: "zafiro", label: "Zafiro" },
  { key: "esmeralda", label: "Esmeralda" },
  { key: "otra_color", label: "Otra piedra de color (rubí, ónix, etc.)" },
  { key: "sin_piedra", label: "Sin piedra principal grande" },
  { key: "a_definir", label: "No sé, ayúdame a decidir" },
];

const PIEDRAS_ALIANZA = [
  { key: "sin_piedras", label: "Sin piedras" },
  { key: "con_diamantes", label: "Con diamantes (eternity, cinco diamantes, etc.)" },
  { key: "a_definir", label: "No sé, ayúdame a decidir" },
];

const PIEDRAS_OTROS = [
  { key: "sin_piedras", label: "Sin piedras" },
  { key: "con_piedras", label: "Con piedras (diamantes o color)" },
  { key: "a_definir", label: "No sé, ayúdame a decidir" },
];

const ESTILOS = [
  { key: "solitario", label: "Solitario", desc: "Una sola piedra central, banda limpia" },
  { key: "halo", label: "Halo", desc: "Piedra central + halo de diamantes alrededor" },
  { key: "tricillo", label: "Tricillo", desc: "Tres piedras (pasado, presente, futuro)" },
  { key: "cuatricillo", label: "Cuatricillo", desc: "Cuatro piedras alineadas" },
  { key: "cintillo_pave", label: "Cintillo / Pavé", desc: "Banda con diamantes pequeños" },
  { key: "vintage_editorial", label: "Vintage / Editorial", desc: "Art déco, mandala, milgrain" },
  { key: "a_definir", label: "No sé, ayudame a decidir", desc: "" },
];

const TAMANOS = [
  { key: "pequena", label: "Pequeña (0.20 – 0.40 ct)", desc: "Discreta, brilla mucho" },
  { key: "mediana", label: "Mediana (0.50 – 0.80 ct)", desc: "El clásico, presencia equilibrada" },
  { key: "grande", label: "Grande (0.90 – 1.20 ct)", desc: "Protagonista" },
  { key: "extra_grande", label: "Extra grande (1.50 ct+)", desc: "Pieza de declaración" },
  { key: "a_definir", label: "Confío en lo que me recomiende Gia", desc: "" },
];

const PRESUPUESTOS = [
  { key: "hasta_1.8", label: "Hasta $1.800.000" },
  { key: "1.8_2.8", label: "$1.800.000 – $2.800.000" },
  { key: "2.8_3.5", label: "$2.800.000 – $3.500.000" },
  { key: "3.5_4.5", label: "$3.500.000 – $4.500.000" },
  { key: "5_mas", label: "Más de $5.000.000" },
  { key: "conversar", label: "Prefiero conversarlo" },
];

const PRESUPUESTO_MAX: Record<string, number | null> = {
  "hasta_1.8": 1800000,
  "1.8_2.8": 2800000,
  "2.8_3.5": 3500000,
  "3.5_4.5": 4500000,
  "5_mas": null,
  "conversar": null,
};

type RangoLeaf = { min: number; max: number };
type RangoNode = RangoLeaf | Record<string, RangoLeaf>;

const RANGOS_BASE: Record<string, Record<string, RangoNode>> = {
  anillo_compromiso: {
    sin_piedra: { min: 1500000, max: 2200000 },
    aguamarina: { min: 1500000, max: 3000000 },
    zafiro: { min: 1500000, max: 3000000 },
    esmeralda: { min: 1500000, max: 3000000 },
    otra_color: { min: 1500000, max: 3000000 },
    diamante_lab: {
      pequena: { min: 1800000, max: 2500000 },
      mediana: { min: 2500000, max: 4000000 },
      grande: { min: 4000000, max: 6000000 },
      extra_grande: { min: 6000000, max: 9000000 },
      a_definir: { min: 1800000, max: 2800000 },
    },
    diamante_natural: {
      pequena: { min: 2500000, max: 4000000 },
      mediana: { min: 4000000, max: 7000000 },
      grande: { min: 7000000, max: 12000000 },
      extra_grande: { min: 12000000, max: 20000000 },
      a_definir: { min: 2500000, max: 4000000 },
    },
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

const PIEDRA_DEFAULT: Record<string, string> = {
  anillo_compromiso: "diamante_lab",
  alianza: "sin_piedras",
  aros: "sin_piedras",
  colgante: "sin_piedras",
  pulsera_esclava: "sin_piedras",
};

const formatCLP = (n: number) => "$" + n.toLocaleString("es-CL");

function calcularRango(tipo: string, metal: string, piedra: string, tamano: string) {
  const grupo = RANGOS_BASE[tipo];
  if (!grupo) return null;
  const piedraKey = piedra && piedra !== "a_definir" ? piedra : PIEDRA_DEFAULT[tipo];
  const raw: RangoNode | undefined = grupo[piedraKey] ?? Object.values(grupo)[0];
  if (!raw) return null;

  let leaf: RangoLeaf;
  if (typeof (raw as RangoLeaf).min === "number") {
    leaf = raw as RangoLeaf;
  } else {
    const sub = raw as Record<string, RangoLeaf>;
    const tKey = tamano && sub[tamano] ? tamano : "a_definir";
    leaf = sub[tKey] ?? Object.values(sub)[0];
  }
  if (!leaf) return null;

  let { min, max } = leaf;
  if (metal === "platino") {
    // Recargo fijo por metal: el platino solo suma su propio sobreprecio, no escala la piedra.
    min = min + 400000;
    max = max + 400000;
  }
  // El máximo nunca supera el mínimo × 1,6 (rango acotado)
  const cappedMax = Math.min(max, min * 1.6);
  max = Math.round(cappedMax / 100000) * 100000;
  return { min, max };
}

// Mapea una pieza del catálogo (JOYAS) a los valores del cotizador.
function mapJoyaToCotizador(j: Joya): {
  tipo: string;
  metal: string;
  piedra: string;
  estilo: string;
} {
  const cat = (j.categoria || "").toLowerCase();
  let tipo = "";
  if (cat.includes("compromiso")) tipo = "anillo_compromiso";
  else if (cat.includes("argolla") || cat.includes("alianza")) tipo = "alianza";
  else if (cat.includes("aro")) tipo = "aros";
  else if (cat.includes("collar") || cat.includes("colgante")) tipo = "colgante";
  else if (cat.includes("pulsera") || cat.includes("esclava")) tipo = "pulsera_esclava";

  const metalStr = (j.metalPrincipal || j.material || "").toLowerCase();
  let metal = "";
  if (metalStr.includes("platino")) metal = "platino";
  else if (metalStr.includes("blanco")) metal = "oro_blanco";
  else if (metalStr.includes("amarillo")) metal = "oro_amarillo";
  else if (metalStr.includes("rosad")) metal = "oro_rosado";

  const piedraStr = (j.piedraCentral || j.material || "").toLowerCase();
  let piedra = "";
  if (tipo === "anillo_compromiso") {
    if (piedraStr.includes("lab")) piedra = "diamante_lab";
    else if (piedraStr.includes("diamante")) piedra = "diamante_natural";
    else if (piedraStr.includes("zafiro")) piedra = "zafiro";
    else if (piedraStr.includes("aguamarina")) piedra = "aguamarina";
    else if (piedraStr.includes("esmeralda")) piedra = "esmeralda";
    else if (piedraStr) piedra = "otra_color";
  } else if (tipo === "alianza") {
    piedra = piedraStr.includes("diamante") ? "con_diamantes" : "sin_piedras";
  } else if (tipo) {
    piedra = piedraStr && piedraStr !== "sin piedra" ? "con_piedras" : "sin_piedras";
  }

  const nombre = (j.nombre || "").toLowerCase();
  const desc = ((j.descripcionLarga || j.descripcion) || "").toLowerCase();
  const hay = (s: string) => nombre.includes(s) || desc.includes(s);
  let estilo = "";
  if (tipo === "anillo_compromiso") {
    if (hay("solitario")) estilo = "solitario";
    else if (hay("halo")) estilo = "halo";
    else if (hay("trilog") || hay("tricillo") || hay("tres piedras") || hay("tres diamantes"))
      estilo = "tricillo";
    else if (hay("cuatricillo") || hay("cuatro piedras")) estilo = "cuatricillo";
    else if (hay("pav") || hay("cintillo") || hay("eternity") || hay("quintillo"))
      estilo = "cintillo_pave";
    else if (hay("vintage") || hay("art déco") || hay("art deco") || hay("mandala") || hay("milgrain"))
      estilo = "vintage_editorial";
  }

  return { tipo, metal, piedra, estilo };
}

const Cotizar = () => {
  const [step, setStep] = useState(1);
  const [tipo, setTipo] = useState<string>("");
  const [metal, setMetal] = useState<string>("");
  const [piedra, setPiedra] = useState<string>("");
  const [estilo, setEstilo] = useState<string>("");
  const [tamano, setTamano] = useState<string>("");
  const [presupuesto, setPresupuesto] = useState<string>("");
  const [refImages, setRefImages] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Precarga desde ?pieza=slug&modificada=true (llegan desde una ficha)
  const [searchParams] = useSearchParams();
  const piezaSlug = searchParams.get("pieza") || "";
  const modificada = searchParams.get("modificada") === "true";
  const piezaOrigen = useMemo(
    () => (piezaSlug ? JOYAS.find((j) => j.slug === piezaSlug) : undefined),
    [piezaSlug],
  );

  useEffect(() => {
    if (!piezaOrigen) return;
    const preset = mapJoyaToCotizador(piezaOrigen);
    if (preset.tipo) setTipo(preset.tipo);
    if (preset.metal) setMetal(preset.metal);
    if (preset.piedra) setPiedra(preset.piedra);
    if (preset.estilo) setEstilo(preset.estilo);
    // Salta al primer paso todavía no definido
    const stepsForType: string[] = ["tipo", "metal", "piedra"];
    if (preset.tipo === "anillo_compromiso") stepsForType.push("estilo");
    const values: Record<string, string> = {
      tipo: preset.tipo,
      metal: preset.metal,
      piedra: preset.piedra,
      estilo: preset.estilo,
    };
    let idx = 1;
    for (const k of stepsForType) {
      if (values[k]) idx++;
      else break;
    }
    setStep(idx);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [piezaOrigen]);



  const isCompromiso = tipo === "anillo_compromiso";
  const isDiamante = piedra === "diamante_natural" || piedra === "diamante_lab";

  // Pasos dinámicos: 1 Tipo, 2 Metal, 3 Piedra, [4 Estilo si compromiso], [Tamaño si diamante], Presupuesto, Resultado
  const stepsList = useMemo(() => {
    const arr: string[] = ["tipo", "metal", "piedra"];
    if (isCompromiso) arr.push("estilo");
    if (isCompromiso && isDiamante) arr.push("tamano");
    arr.push("presupuesto");
    return arr;
  }, [isCompromiso, isDiamante]);

  const totalSteps = stepsList.length;
  const currentKey = step <= totalSteps ? stepsList[step - 1] : "resultado";
  const isResult = step > totalSteps;

  const piedrasOptions =
    tipo === "anillo_compromiso"
      ? PIEDRAS_COMPROMISO
      : tipo === "alianza"
      ? PIEDRAS_ALIANZA
      : PIEDRAS_OTROS;

  const tipoLabel = TIPOS.find((t) => t.key === tipo)?.label ?? "";
  const metalLabel = METALES.find((m) => m.key === metal)?.label ?? "";
  const piedraLabel = piedrasOptions.find((p) => p.key === piedra)?.label ?? "";
  const estiloLabel = ESTILOS.find((e) => e.key === estilo)?.label ?? "";
  const tamanoLabel = TAMANOS.find((t) => t.key === tamano)?.label ?? "";
  const presupuestoLabel = PRESUPUESTOS.find((p) => p.key === presupuesto)?.label ?? "";

  const rango = calcularRango(tipo, metal, piedra, tamano);
  const presupuestoMax = PRESUPUESTO_MAX[presupuesto] ?? null;
  const presupuestoBajo = !!rango && presupuestoMax !== null && presupuestoMax < rango.min;
  const showRango = !!rango;
  const showPlus =
    !!rango &&
    isCompromiso &&
    isDiamante &&
    (tamano === "extra_grande" || (piedra === "diamante_natural" && tamano === "a_definir")) &&
    rango.max > 12000000;

  // Registro anónimo de la cotización al llegar al resultado (fire-and-forget).
  const cotizacionInsertedRef = useRef(false);
  useEffect(() => {
    if (!isResult) return;
    if (cotizacionInsertedRef.current) return;
    cotizacionInsertedRef.current = true;
    const row = {
      pieza: tipoLabel || null,
      metal: metalLabel || null,
      piedra: piedraLabel || null,
      estilo: estiloLabel || null,
      tamano: tamanoLabel || null,
      presupuesto: presupuestoLabel || null,
      rango_min: rango?.min ?? null,
      rango_max: rango?.max ?? null,
      con_referencias: refImages.length > 0,
      origen_pieza: piezaSlug || null,
    };
    supabase
      .from("cotizaciones")
      .insert(row)
      .then(({ error }) => {
        if (error) console.error("cotizaciones insert error", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isResult]);

  const buildWaUrl = () => {
    const rangoMaxText = showRango && rango
      ? showPlus
        ? `${formatCLP(rango.min)} – $12.000.000+`
        : `${formatCLP(rango.min)} – ${formatCLP(rango.max)}`
      : "";
    const rangoText = showRango
      ? `El cotizador me mostró un rango de ${rangoMaxText}. Me gustaría conversar los detalles.`
      : `Me gustaría que me ayudes a definir los detalles.`;
    const lines = [
      "Hola Maca! Vengo del cotizador del sitio.",
      "",
      `🎁 Pieza: ${tipoLabel}`,
      `✨ Metal: ${metalLabel}`,
      `💎 Piedra: ${piedraLabel}`,
    ];
    if (isCompromiso && estiloLabel) lines.push(`🎨 Estilo: ${estiloLabel}`);
    if (isCompromiso && isDiamante && tamanoLabel) lines.push(`📏 Tamaño piedra: ${tamanoLabel}`);
    lines.push(
      `💰 Presupuesto: ${presupuestoLabel}`,
      "",
      rangoText,
      "",
      "Si tengo fotos de referencia, te las comparto por aquí 👇",
      "",
      "Gracias!",
    );
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(lines.join("\n"))}`;
    try {
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "cotizador_completado", {
          tipo: tipoLabel,
          metal: metalLabel,
          piedra: piedraLabel,
          presupuesto: presupuestoLabel,
        });
      }
    } catch { /* noop */ }
    try {
      if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
        (window as any).fbq("track", "Lead", {
          content_name: "cotizador_completado",
          content_category: tipoLabel,
        });
      }
    } catch { /* noop */ }
    return url;
  };

  const reset = () => {
    setStep(1);
    setTipo("");
    setMetal("");
    setPiedra("");
    setEstilo("");
    setTamano("");
    setPresupuesto("");
    setRefImages([]);
    setEmailSent(false);
  };

  const handleFilesSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const picked = Array.from(e.target.files ?? []);
    if (e.target) e.target.value = "";
    const valid: File[] = [];
    for (const f of picked) {
      const typeOk = ACCEPTED_TYPES.includes(f.type.toLowerCase()) || ACCEPTED_EXT.test(f.name);
      if (!typeOk) {
        toast({
          title: "Formato no válido",
          description: `${f.name} no es una imagen compatible. Usa jpg, png, webp o heic.`,
        });
        continue;
      }
      if (f.size > MAX_SIZE_MB * 1024 * 1024) {
        toast({
          title: "Imagen muy pesada",
          description: `${f.name} supera los ${MAX_SIZE_MB} MB. Comprime la imagen e inténtalo de nuevo.`,
        });
        continue;
      }
      valid.push(f);
    }
    setRefImages((prev) => [...prev, ...valid].slice(0, MAX_IMAGES));
  };

  const removeRefImage = (idx: number) => {
    setRefImages((prev) => prev.filter((_, i) => i !== idx));
  };

  const uploadRefImages = async (): Promise<string[]> => {
    if (refImages.length === 0) return [];
    const urls: string[] = [];
    for (const file of refImages) {
      const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
      const path = `${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}.${ext}`;
      const { error: upErr } = await supabase.storage
        .from("cotizador-referencias")
        .upload(path, file, { contentType: file.type || "image/jpeg", upsert: false });
      if (upErr) {
        console.error("upload error", upErr);
        continue;
      }
      const { data: signed, error: signErr } = await supabase.storage
        .from("cotizador-referencias")
        .createSignedUrl(path, 60 * 60 * 24 * 7); // 7 días
      if (signErr || !signed?.signedUrl) {
        console.error("sign url error", signErr);
        continue;
      }
      urls.push(signed.signedUrl);
    }
    return urls;
  };

  const handleWaClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (refImages.length === 0 || emailSent) return; // deja que el href abra WhatsApp
    e.preventDefault();
    const url = (e.currentTarget as HTMLAnchorElement).href;
    setUploading(true);
    try {
      const imageUrls = await uploadRefImages();
      if (imageUrls.length > 0) {
        const rangoText =
          showRango && rango
            ? showPlus
              ? `${formatCLP(rango.min)} – $12.000.000+`
              : `${formatCLP(rango.min)} – ${formatCLP(rango.max)}`
            : "";
        try {
          await supabase.functions.invoke("enviar-referencias-cotizador", {
            body: {
              resumen: {
                pieza: tipoLabel,
                metal: metalLabel,
                piedra: piedraLabel,
                estilo: estiloLabel,
                tamano: tamanoLabel,
                presupuesto: presupuestoLabel,
                rango: rangoText,
              },
              imageUrls,
            },
          });
        } catch (err) {
          console.error("email invoke error", err);
        }
      }
      setEmailSent(true);
    } catch (err) {
      console.error("ref upload flow error", err);
    } finally {
      setUploading(false);
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };


  const canNext =
    (currentKey === "tipo" && tipo) ||
    (currentKey === "metal" && metal) ||
    (currentKey === "piedra" && piedra) ||
    (currentKey === "estilo" && estilo) ||
    (currentKey === "tamano" && tamano) ||
    (currentKey === "presupuesto" && presupuesto);

  const next = () => setStep((s) => Math.min(totalSteps + 1, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const selectTipo = (k: string) => {
    if (k !== tipo) {
      setPiedra("");
      setEstilo("");
      setTamano("");
    }
    setTipo(k);
  };

  const selectPiedra = (k: string) => {
    if (k !== piedra) setTamano("");
    setPiedra(k);
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
        title="Cotiza tu Anillo de Compromiso a Medida en Santiago | Gia Solari"
        description="Cotizador online: arma tu anillo de compromiso o joya a medida en pocos pasos y recibe un presupuesto aproximado al instante. Hecho a mano en Santiago."
        path="/cotizar"
      />
      <Navbar />

      <main className="flex-1 pt-28 pb-32 md:pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <header className="text-center mb-8">
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">Cotizador</p>
            <h1 className="font-display text-3xl md:text-4xl text-charcoal mb-3">
              Cotiza tu pieza
            </h1>
            <p className="text-charcoal/70 text-sm md:text-base">
              Pocas preguntas y armamos el presupuesto aproximado en menos de un minuto.
            </p>
            <p className="text-charcoal/60 text-xs md:text-sm mt-3">
              ¿Tenés dudas de presupuesto?{" "}
              <Link
                to="/aprende/cuanto-cuesta-anillo-compromiso-chile"
                className="text-gold underline underline-offset-2 hover:opacity-80"
              >
                Mirá nuestra guía de precios
              </Link>
              .
            </p>
          </header>

          {!isResult && (
            <div className="mb-8" aria-label={`Paso ${step} de ${totalSteps}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs tracking-widest uppercase text-charcoal/60">
                  Paso {step} de {totalSteps}
                </span>
                <span className="text-xs text-charcoal/60">
                  {Math.round((step / totalSteps) * 100)}%
                </span>
              </div>
              <div className="h-1 bg-charcoal/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gold"
                  initial={false}
                  animate={{ width: `${(step / totalSteps) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          )}

          <div className="bg-cream/40 border border-gold/15 rounded-lg p-5 md:p-8 min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${step}-${currentKey}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {currentKey === "tipo" && (
                  <div>
                    <h2 className="font-display text-xl md:text-2xl text-charcoal mb-5">
                      ¿Qué pieza tienes en mente?
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

                {currentKey === "metal" && (
                  <div>
                    <h2 className="font-display text-xl md:text-2xl text-charcoal mb-5">
                      ¿En qué metal la imaginas?
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
                            <p className="font-medium text-sm">{m.label}</p>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {currentKey === "piedra" && (
                  <div>
                    <h2 className="font-display text-xl md:text-2xl text-charcoal mb-5">
                      ¿Qué piedra te gustaría?
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {piedrasOptions.map((p) => (
                        <Card key={p.key} selected={piedra === p.key} onClick={() => selectPiedra(p.key)}>
                          <span className="font-medium text-sm md:text-base">{p.label}</span>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {currentKey === "estilo" && (
                  <div>
                    <h2 className="font-display text-xl md:text-2xl text-charcoal mb-5">
                      ¿Qué estilo te gusta más?
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {ESTILOS.map((e) => (
                        <Card key={e.key} selected={estilo === e.key} onClick={() => setEstilo(e.key)}>
                          <p className="font-medium text-sm md:text-base">{e.label}</p>
                          {e.desc && (
                            <p className="text-xs text-charcoal/60 mt-1">{e.desc}</p>
                          )}
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {currentKey === "tamano" && (
                  <div>
                    <h2 className="font-display text-xl md:text-2xl text-charcoal mb-2">
                      ¿Qué tamaño de piedra central imaginas?
                    </h2>
                    <p className="text-sm text-charcoal/60 mb-5">
                      El quilataje es lo que más afecta el precio.
                    </p>
                    <div className="space-y-3">
                      {TAMANOS.map((t) => (
                        <Card key={t.key} selected={tamano === t.key} onClick={() => setTamano(t.key)}>
                          <p className="font-medium text-sm md:text-base">{t.label}</p>
                          {t.desc && <p className="text-xs text-charcoal/60 mt-1">{t.desc}</p>}
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {currentKey === "presupuesto" && (
                  <div>
                    <h2 className="font-display text-xl md:text-2xl text-charcoal mb-2">
                      ¿Qué presupuesto manejas aproximadamente?
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

                {isResult && (
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
                            {formatCLP(rango.min)} –{" "}
                            {showPlus ? "$12.000.000+" : formatCLP(rango.max)}
                          </span>
                        </h2>
                        <p className="text-sm text-charcoal/70 mb-8 max-w-md mx-auto leading-relaxed">
                          {presupuestoBajo
                            ? "Este es un rango orientativo. Cuéntame tu idea y buscamos juntas la mejor opción dentro de lo que tienes pensado."
                            : "El precio final depende del quilataje de la piedra y los detalles que conversemos. Cada anillo incluye Certificado Gia Solari."}
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

                    <div className="mb-6 max-w-md mx-auto text-left border border-gold/20 bg-background/60 rounded-md p-4">
                      <p className="font-medium text-sm text-charcoal mb-1">
                        ¿Tienes fotos de referencia? <span className="text-charcoal/50 font-normal">(opcional)</span>
                      </p>
                      <p className="text-xs text-charcoal/60 mb-3">
                        Sube el anillo o estilo que te inspira. Nos ayuda a entender tu idea.
                      </p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
                        multiple
                        onChange={handleFilesSelected}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={refImages.length >= MAX_IMAGES}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-dashed border-charcoal/30 rounded-md text-xs tracking-widest uppercase text-charcoal/70 hover:border-gold hover:text-gold transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <Upload className="w-4 h-4" />
                        {refImages.length === 0 ? "Subir imágenes" : `Agregar más (${refImages.length}/${MAX_IMAGES})`}
                      </button>
                      {refImages.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {refImages.map((f, i) => (
                            <div key={i} className="relative w-16 h-16 rounded-md overflow-hidden border border-charcoal/15">
                              <img
                                src={URL.createObjectURL(f)}
                                alt={`Referencia ${i + 1}`}
                                className="w-full h-full object-cover"
                              />
                              <button
                                type="button"
                                onClick={() => removeRefImage(i)}
                                aria-label="Quitar imagen"
                                className="absolute top-0 right-0 bg-charcoal/70 text-cream p-0.5 rounded-bl"
                              >
                                <X size={12} />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                      <p className="text-[11px] text-charcoal/50 mt-2">
                        Máximo {MAX_IMAGES} imágenes, hasta {MAX_SIZE_MB} MB cada una. Formatos jpg, png, webp o heic.
                      </p>
                    </div>

                    <a
                      href={buildWaUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleWaClick}
                      aria-disabled={uploading}
                      className={`inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[52px] px-8 py-4 bg-gradient-gold text-charcoal font-semibold tracking-widest uppercase text-sm hover:opacity-90 transition-opacity ${uploading ? "opacity-70 pointer-events-none" : ""}`}
                    >
                      {uploading ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Enviando referencias…</>
                      ) : (
                        <><MessageCircle className="w-4 h-4" /> Conversar con Gia por WhatsApp</>
                      )}
                    </a>
                    <TrustMicrocopy marginTop={14} />
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

          {!isResult && (
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
                {step === totalSteps ? "Ver resultado" : "Siguiente"}
              </button>
            </div>
          )}
        </div>
      </main>

      {!isResult && (
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
              {step === totalSteps ? "Ver resultado" : "Siguiente"}
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Cotizar;
