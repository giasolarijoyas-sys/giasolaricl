import { useMemo, useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { X, SearchX, SlidersHorizontal } from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { JOYAS, formatPrecioDesde } from "@/data/joyas";

const OLIVE = "#4A5536";
const OLIVE_DEEP = "#3A4429";
const OLIVE_SOFT = "#6B7752";
const CHAMPAGNE = "#C9A87C";
const CREAM = "#F5EFE6";
const CREAM_WARM = "#EBE2D2";
const TERRACOTA = "#B5704A";
const INK = "#1A1A18";
const LINE = "#D9D2C4";

// === FILTER OPTIONS ===
const TIPOS = [
  { id: "todos", label: "Ver todo", match: null as null | ((c: string) => boolean) },
  { id: "bodas", label: "Anillos de compromiso y argollas", match: (c: string) => c === "Anillo de compromiso" || c === "Argolla" },
  { id: "aros", label: "Aros", match: (c: string) => c === "Aros" },
  { id: "collares", label: "Collares", match: (c: string) => c === "Collar" },
  { id: "pulseras", label: "Pulseras y esclavas", match: (c: string) => c === "Pulsera" },
  { id: "familia", label: "Joyas de familia", match: (c: string) => c.toLowerCase().includes("familia") },
  { id: "vintage", label: "Vintage (piezas únicas)", match: (c: string) => c === "Vintage" },
];

const ESTILOS = [
  "Halo",
  "Solitarios",
  "Tres y cinco piedras",
  "Pavé",
  "Cintillos",
  "Eternity",
  "Color",
];

const METALES = [
  "Oro 18k amarillo",
  "Oro 18k blanco",
  "Oro 18k rosa",
  "Platino",
];

const PIEDRAS = [
  "Diamante",
  "Zafiro",
  "Aguamarina",
  "Esmeralda",
  "Ónix",
  "Sin piedra",
];


const PAGE_SIZE = 12;

// Estilo del item: matchea estilo de la pieza con label de filtro
const matchEstilo = (joyaEstilo: string | undefined, filtro: string) => {
  if (!joyaEstilo) return false;
  const e = joyaEstilo.toLowerCase();
  const f = filtro.toLowerCase();
  if (f === "halo") return e.includes("halo") || e.includes("color");
  if (f === "solitarios") return e.includes("solitar") || e.includes("atemporal");
  if (f === "tres y cinco piedras") return e.includes("tres") || e.includes("cinco") || e.includes("trilog");
  if (f === "pavé") return e.includes("pavé") || e.includes("pave");
  return e.includes(f);
};

const matchPiedra = (joyaPiedra: string | undefined, filtro: string) => {
  if (filtro === "Sin piedra") return !joyaPiedra || joyaPiedra.toLowerCase().includes("sin piedra");
  if (!joyaPiedra) return false;
  return joyaPiedra.toLowerCase().includes(filtro.toLowerCase().split(" ")[0]);
};

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: OLIVE_SOFT }}>{children}</p>
);

type FilterState = {
  tipo: string;
  estilo: string[];
  metal: string[];
  piedra: string[];
};

const Joyas = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // === read filters from URL ===
  const filters: FilterState = useMemo(() => {
    const tipo = searchParams.get("tipo") ?? "todos";
    const estilo = (searchParams.get("estilo") ?? "").split(",").filter(Boolean);
    const metal = (searchParams.get("metal") ?? "").split(",").filter(Boolean);
    const piedra = (searchParams.get("piedra") ?? "").split(",").filter(Boolean);
    return { tipo, estilo, metal, piedra };
  }, [searchParams]);

  const updateFilters = (next: Partial<FilterState>) => {
    const merged = { ...filters, ...next };
    const params = new URLSearchParams();
    if (merged.tipo !== "todos") params.set("tipo", merged.tipo);
    if (merged.estilo.length) params.set("estilo", merged.estilo.join(","));
    if (merged.metal.length) params.set("metal", merged.metal.join(","));
    if (merged.piedra.length) params.set("piedra", merged.piedra.join(","));
    setSearchParams(params, { replace: true });
    setVisibleCount(PAGE_SIZE);
  };

  const toggleArray = (key: "estilo" | "metal" | "piedra", val: string) => {
    const arr = filters[key];
    updateFilters({ [key]: arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val] } as Partial<FilterState>);
  };

  const clearAll = () => {
    setSearchParams(new URLSearchParams(), { replace: true });
    setVisibleCount(PAGE_SIZE);
  };

  // Active filter count
  const activeCount =
    (filters.tipo !== "todos" ? 1 : 0) +
    filters.estilo.length +
    filters.metal.length +
    filters.piedra.length;

  // === Filter joyas ===
  const baseJoyas = useMemo(() => JOYAS.filter((j) => !j.isPlaceholder), []);
  const filtered = useMemo(() => {
    return baseJoyas.filter((j) => {
      const tipoOpt = TIPOS.find((t) => t.id === filters.tipo);
      if (tipoOpt?.match && !tipoOpt.match(j.categoria)) return false;
      if (filters.estilo.length && !filters.estilo.some((e) => matchEstilo(j.estilo, e))) return false;
      if (filters.metal.length && !filters.metal.some((m) => (j.metalPrincipal ?? "").toLowerCase() === m.toLowerCase())) return false;
      if (filters.piedra.length && !filters.piedra.some((p) => matchPiedra(j.piedraCentral, p))) return false;
      return true;
    });
  }, [baseJoyas, filters]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  // === SEO dynamic title ===
  const dynamicTitle = useMemo(() => {
    const parts: string[] = [];
    const tipoOpt = TIPOS.find((t) => t.id === filters.tipo);
    if (tipoOpt && tipoOpt.id !== "todos") parts.push(tipoOpt.label);
    else parts.push("Anillos de Compromiso y Argollas de Matrimonio");
    if (filters.estilo.length) parts.push(filters.estilo.join(" / "));
    if (filters.metal.length) parts.push(`en ${filters.metal.join(" / ")}`);
    return `${parts.join(" ")} en Santiago | Gia Solari`;
  }, [filters]);

  const dynamicDesc = useMemo(() => {
    const tipoOpt = TIPOS.find((t) => t.id === filters.tipo);
    const tipoLabel = tipoOpt && tipoOpt.id !== "todos" ? tipoOpt.label.toLowerCase() : "anillos de compromiso y argollas de matrimonio a medida";
    const filtros = [...filters.estilo, ...filters.metal, ...filters.piedra].join(", ");
    return `Catálogo de ${tipoLabel}${filtros ? ` (${filtros})` : ""} en oro 18k, platino y diamante certificado GIA/IGI. Hechas a mano en Santiago, showroom en Vitacura. Cotiza tu pieza.`;
  }, [filters]);


  // === Chips ===
  type Chip = { label: string; onRemove: () => void };
  const chips: Chip[] = [];
  if (filters.tipo !== "todos") {
    const lbl = TIPOS.find((t) => t.id === filters.tipo)?.label;
    if (lbl) chips.push({ label: lbl, onRemove: () => updateFilters({ tipo: "todos" }) });
  }
  filters.estilo.forEach((e) => chips.push({ label: e, onRemove: () => toggleArray("estilo", e) }));
  filters.metal.forEach((m) => chips.push({ label: m, onRemove: () => toggleArray("metal", m) }));
  filters.piedra.forEach((p) => chips.push({ label: p, onRemove: () => toggleArray("piedra", p) }));

  // Lock body scroll on drawer
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const showEstilo = filters.tipo === "bodas";

  // === SIDEBAR CONTENT ===
  const Sidebar = () => (
    <aside className="space-y-8">
      <div className="flex items-center justify-between">
        <Eyebrow>Filtros</Eyebrow>
        {activeCount > 0 && (
          <button onClick={clearAll} className="text-[12px] underline" style={{ color: OLIVE_DEEP, fontFamily: "Inter, sans-serif" }}>
            Limpiar todo
          </button>
        )}
      </div>

      {/* TIPO */}
      <div className="pb-8" style={{ borderBottom: `1px solid ${LINE}` }}>
        <p className="mb-4" style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: OLIVE_SOFT }}>Tipo</p>
        <div className="flex flex-wrap gap-2">
          {TIPOS.map((t) => {
            const active = filters.tipo === t.id;
            return (
              <button
                key={t.id}
                onClick={() => updateFilters({ tipo: t.id, estilo: [] })}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12.5px",
                  color: active ? OLIVE_DEEP : INK,
                  background: "transparent",
                  border: `${active ? 2 : 1}px solid ${OLIVE}`,
                  borderRadius: "999px",
                  padding: active ? "5px 13px" : "6px 14px",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ESTILO (only if compromiso) */}
      {showEstilo && (
        <div className="pb-8" style={{ borderBottom: `1px solid ${LINE}` }}>
          <p className="mb-4" style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: OLIVE_SOFT }}>Estilo</p>
          <div className="flex flex-col gap-2.5">
            {ESTILOS.map((e) => {
              const active = filters.estilo.includes(e);
              return (
                <label key={e} className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={active} onChange={() => toggleArray("estilo", e)} className="sr-only" />
                  <span
                    className="inline-flex items-center justify-center"
                    style={{
                      width: 14, height: 14,
                      border: `1px solid ${active ? OLIVE : LINE}`,
                      background: active ? OLIVE : "transparent",
                      flexShrink: 0,
                    }}
                  >
                    {active && <span style={{ color: CREAM, fontSize: 10, lineHeight: 1 }}>✓</span>}
                  </span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13.5px", color: INK }}>{e}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}

      {/* METAL */}
      <div className="pb-8" style={{ borderBottom: `1px solid ${LINE}` }}>
        <p className="mb-4" style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: OLIVE_SOFT }}>Metal</p>
        <div className="flex flex-col gap-2.5">
          {METALES.map((m) => {
            const active = filters.metal.includes(m);
            return (
              <label key={m} className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={active} onChange={() => toggleArray("metal", m)} className="sr-only" />
                <span
                  className="inline-flex items-center justify-center"
                  style={{
                    width: 14, height: 14,
                    border: `1px solid ${active ? OLIVE : LINE}`,
                    background: active ? OLIVE : "transparent",
                    flexShrink: 0,
                  }}
                >
                  {active && <span style={{ color: CREAM, fontSize: 10, lineHeight: 1 }}>✓</span>}
                </span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13.5px", color: INK }}>{m}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* PIEDRA */}
      <div className="pb-8" style={{ borderBottom: `1px solid ${LINE}` }}>
        <p className="mb-4" style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: OLIVE_SOFT }}>Piedra</p>
        <div className="flex flex-col gap-2.5">
          {PIEDRAS.map((p) => {
            const active = filters.piedra.includes(p);
            return (
              <label key={p} className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={active} onChange={() => toggleArray("piedra", p)} className="sr-only" />
                <span
                  className="inline-flex items-center justify-center"
                  style={{
                    width: 14, height: 14,
                    border: `1px solid ${active ? OLIVE : LINE}`,
                    background: active ? OLIVE : "transparent",
                    flexShrink: 0,
                  }}
                >
                  {active && <span style={{ color: CREAM, fontSize: 10, lineHeight: 1 }}>✓</span>}
                </span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13.5px", color: INK }}>{p}</span>
              </label>
            );
          })}
        </div>
      </div>

    </aside>
  );

  return (
    <div className="min-h-screen" style={{ background: CREAM }}>
      <SEO title={dynamicTitle} description={dynamicDesc} path="/joyas" />
      <Helmet>
        <link rel="canonical" href="https://www.giasolari.cl/joyas" />
        <style>{`.joya-card:hover{box-shadow:0 8px 24px rgba(0,0,0,0.08);}`}</style>
      </Helmet>
      <Navbar />

      <main className="pt-28 md:pt-36 pb-32">
        {/* HEADER */}
        <header className="container mx-auto px-4 md:px-8 text-center mb-14 md:mb-20">
          <Eyebrow>Catálogo</Eyebrow>
          <h1
            className="mt-4 mb-5"
            style={{
              fontFamily: "'Bodoni Moda', serif",
              fontWeight: 400,
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: 1.05,
              color: OLIVE_DEEP,
            }}
          >
            Joyas Gia Solari
          </h1>
          <p
            className="mx-auto"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "17px",
              lineHeight: 1.6,
              color: OLIVE_SOFT,
              maxWidth: "600px",
            }}
          >
            Encuentra tu pieza o pídeme una a medida. Cada joya está hecha en el showroom, en oro 18k, platino y diamantes certificados.
          </p>
        </header>

        {/* MOBILE FILTER BUTTON */}
        <div className="lg:hidden container mx-auto px-4 mb-6 sticky top-[72px] z-30">
          <button
            onClick={() => setDrawerOpen(true)}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-full"
            style={{
              background: OLIVE,
              color: CREAM,
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <SlidersHorizontal size={16} strokeWidth={1.5} />
            Filtros {activeCount > 0 && `(${activeCount})`}
          </button>
        </div>

        <div className="container mx-auto px-4 md:px-8">
          <div className="lg:grid lg:gap-12" style={{ gridTemplateColumns: "280px 1fr" }}>
            {/* DESKTOP SIDEBAR */}
            <div className="hidden lg:block">
              <div className="sticky" style={{ top: "140px" }}>
                <Sidebar />
              </div>
            </div>

            {/* RIGHT, CHIPS + GRID */}
            <div>
              {chips.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {chips.map((c, i) => (
                    <button
                      key={i}
                      onClick={c.onRemove}
                      className="inline-flex items-center gap-2 transition-colors hover:opacity-70"
                      style={{
                        background: CREAM_WARM,
                        color: OLIVE_DEEP,
                        padding: "6px 14px",
                        borderRadius: "999px",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "12px",
                      }}
                    >
                      {c.label}
                      <X size={12} strokeWidth={1.8} />
                    </button>
                  ))}
                </div>
              )}

              {/* EMPTY STATE */}
              {filtered.length === 0 ? (
                <div className="text-center py-24 md:py-32">
                  <SearchX size={40} strokeWidth={1.2} style={{ color: OLIVE_SOFT, margin: "0 auto 24px" }} />
                  <h3 className="mb-3" style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "28px", color: OLIVE_DEEP }}>
                    No encontré piezas con esos filtros.
                  </h3>
                  <p className="mb-7" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: OLIVE_SOFT }}>
                    Si tienes algo concreto en mente, lo diseñamos juntas.
                  </p>
                  <Link
                    to="/cotizar"
                    className="inline-block rounded-full transition-colors"
                    style={{
                      background: OLIVE,
                      color: CREAM,
                      padding: "14px 32px",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "13px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Cotizar pieza única →
                  </Link>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visible.map((p, i) => {
                      const hoverImg = p.imagenes[1];
                      const priceLabel = formatPrecioDesde(p.precioDesde) ?? "Precio a cotizar";
                      return (
                        <motion.article
                          key={p.slug}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: Math.min(i, 5) * 0.04 }}
                          className="group joya-card"
                          style={{
                            padding: "12px",
                            borderRadius: "4px",
                            transition: "box-shadow 0.3s ease, transform 0.3s ease",
                          }}
                        >
                          <Link to={`/joyas/${p.slug}`} className="block">
                            <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 5", background: CREAM_WARM }}>
                              <img
                                src={p.imagenes[0]}
                                alt={`${p.nombre}, ${p.material}`}
                                loading={i < 6 ? "eager" : "lazy"}
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                                style={{ opacity: 1 }}
                              />
                              {hoverImg && (
                                <img
                                  src={hoverImg}
                                  alt=""
                                  aria-hidden="true"
                                  loading="lazy"
                                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />
                              )}
                              {p.categoria === "Vintage" && (
                                <span
                                  className="absolute top-3 left-3"
                                  style={{
                                    background: TERRACOTA,
                                    color: CREAM,
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "10px",
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    padding: "4px 10px",
                                  }}
                                >
                                  Vintage, Único
                                </span>
                              )}
                            </div>
                            <div className="py-4 px-1">
                              <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "20px", color: "#2A2520", lineHeight: 1.25, fontWeight: 400 }}>
                                {p.nombre}
                              </h2>
                              <p className="mt-2" style={{ fontFamily: "Inter, sans-serif", fontSize: "12.5px", color: "#7A7266", fontWeight: 400 }}>
                                {priceLabel}
                              </p>
                            </div>
                          </Link>
                        </motion.article>
                      );
                    })}
                  </div>

                  {hasMore && (
                    <div className="text-center mt-16">
                      <button
                        onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                        className="rounded-full transition-colors"
                        style={{
                          border: `1px solid ${OLIVE}`,
                          color: OLIVE,
                          padding: "14px 32px",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "13px",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          background: "transparent",
                        }}
                      >
                        Ver más piezas →
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 z-[80] lg:hidden"
              style={{ background: "rgba(26,26,24,0.4)" }}
            />
            <motion.aside
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm z-[81] overflow-y-auto lg:hidden"
              style={{ background: CREAM, padding: "24px 24px 80px" }}
            >
              <div className="flex items-center justify-between mb-8">
                <p style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "22px", color: OLIVE_DEEP }}>Filtros</p>
                <button onClick={() => setDrawerOpen(false)} aria-label="Cerrar"><X size={22} style={{ color: INK }} /></button>
              </div>
              <Sidebar />
              <button
                onClick={() => setDrawerOpen(false)}
                className="fixed bottom-4 left-4 right-4 rounded-full"
                style={{
                  background: OLIVE, color: CREAM, padding: "14px",
                  fontFamily: "Inter, sans-serif", fontSize: "13px",
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  width: "calc(85% - 32px)", maxWidth: "calc(384px - 32px)",
                }}
              >
                Ver {filtered.length} pieza{filtered.length === 1 ? "" : "s"}
              </button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Joyas;
