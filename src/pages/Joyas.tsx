import { Link, useSearchParams } from "react-router-dom";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { JOYAS, HAS_REAL_JOYAS } from "@/data/joyas";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const waUrl = (nombre: string) => buildWhatsAppUrl("pieza_especifica", { nombre });

const Joyas = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showPlaceholders = searchParams.get("preview") === "1";
  const categoryFilter = searchParams.get("categoria") ?? "todas";
  const metalFilter = searchParams.get("metal") ?? "todos";
  
  const baseJoyas = (showPlaceholders
    ? JOYAS
    : JOYAS.filter((j) => !j.isPlaceholder)
  ).filter((j) => j.categoria !== "Argolla");
  const categories = ["todas", ...Array.from(new Set(baseJoyas.map((j) => j.categoria)))]
  const metals = ["todos", ...Array.from(new Set(baseJoyas.map((j) => j.metalPrincipal ?? j.material.split(" · ")[0]))).filter((m) => m && m.trim() !== "" && m.toLowerCase() !== "a definir")]
  const visibleJoyas = baseJoyas.filter((j) => {
    if (categoryFilter !== "todas" && j.categoria !== categoryFilter) return false;
    if (metalFilter !== "todos" && (j.metalPrincipal ?? j.material.split(" · ")[0]) !== metalFilter) return false;
    return true;
  });

  const updateFilter = (key: "categoria" | "metal", value: string) => {
    const next = new URLSearchParams(searchParams);
    if (["todas", "todos"].includes(value)) next.delete(key);
    else next.set(key, value);
    setSearchParams(next);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Colección de Joyas | Gia Solari"
        description="Piezas únicas diseñadas y fabricadas a mano: anillos de compromiso, argollas de matrimonio, collares y aros en oro 18k y platino."
        path="/joyas"
      />
      <Navbar />

      <main className="pt-24 pb-32">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">
              Nuestra Colección
            </p>
            <h1 className="text-3xl md:text-4xl font-display text-charcoal mb-3">
              Colección de joyas a medida
            </h1>
            <p className="text-charcoal/70 text-sm leading-relaxed max-w-xl mx-auto">
              Cada pieza es única, hecha a mano en Santiago. Pieza única — cotiza
              a medida.
            </p>
            <p className="mt-4 text-[12px] text-charcoal/60 italic max-w-md mx-auto leading-relaxed">
              Cada pieza de Gia Solari se fabrica a mano, una por una. El resultado
              final puede variar levemente de la imagen de referencia.
            </p>
            <p className="mt-3 text-[12px] text-charcoal/70 max-w-md mx-auto leading-relaxed">
              Todo anillo de compromiso incluye{" "}
              <strong>grabado personalizado</strong> sin costo adicional.
            </p>
          </motion.div>

          <div className="mb-10 space-y-4 max-w-3xl mx-auto">
            {[
              { label: "Categoría", key: "categoria" as const, value: categoryFilter, options: categories },
              { label: "Metal", key: "metal" as const, value: metalFilter, options: metals },
              
            ].map((filter) => (
              <div key={filter.key} className="flex flex-wrap items-center justify-center gap-2">
                <span className="mr-1 text-[11px] uppercase tracking-widest text-charcoal/50">
                  {filter.label}
                </span>
                {filter.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateFilter(filter.key, option)}
                    className={`min-h-[34px] px-3 border text-[11px] uppercase tracking-widest transition-colors ${
                      filter.value === option
                        ? "border-gold bg-gold/10 text-charcoal"
                        : "border-gold/20 text-charcoal/60 hover:border-gold/60"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            ))}
          </div>

          {/* Mensaje "preparando fotos" SOLO si no hay ninguna pieza real cargada */}
          {visibleJoyas.length === 0 && !HAS_REAL_JOYAS && (
            <div className="text-center py-16 border border-gold/20 rounded-[4px] bg-cream/30 max-w-xl mx-auto">
              <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                Estamos preparando las fotos de nuestras piezas. Mientras tanto,
                podemos cotizar tu joya por WhatsApp.
              </p>
              <a
                href={buildWhatsAppUrl("pieza_custom")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block min-h-[44px] px-6 py-3 bg-gradient-gold text-charcoal text-xs tracking-widest uppercase font-semibold"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
            {visibleJoyas.map((p, i) => (
              <motion.article
                key={p.slug}
                transition={{ delay: Math.min(i, 5) * 0.03 }}
                className="bg-cream/40"
              >
                <Link to={`/joyas/${p.slug}`} className="block group">
                  <div className="aspect-square overflow-hidden bg-cream rounded-[4px]">
                    <img
                      src={p.imagenes[0]}
                      alt={p.nombre}
                      loading={i < 4 ? "eager" : "lazy"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="pt-2 px-0.5 pb-2">
                    <h2 className="font-display text-[14px] md:text-[16px] text-charcoal leading-tight truncate">
                      {p.nombre}
                    </h2>
                    <p className="text-[11px] md:text-[12px] text-gold mt-0.5 tracking-widest uppercase">
                      Cotizar
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* CTA final */}
          <div className="mt-16 text-center border-t border-gold/20 pt-12">
            <h2 className="font-display text-2xl text-charcoal mb-4">
              ¿Quieres algo a tu medida?
            </h2>
            <p className="text-charcoal/70 text-sm mb-6 max-w-md mx-auto">
              Diseñamos cada pieza desde cero según tu historia. Conversemos.
            </p>
            <a
              href={buildWhatsAppUrl("home_hero")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block min-h-[48px] px-8 py-4 bg-gradient-gold text-charcoal font-semibold tracking-widest uppercase text-sm"
            >
              Cotizá por WhatsApp
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Joyas;
