import { useState, useMemo, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ChevronDown, ChevronLeft, ChevronRight, X, ShieldCheck, Award, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JOYAS, formatPrecioDesde } from "@/data/joyas";
import { isFavorita, toggleFavorita, subscribeFavoritas } from "@/lib/favorites";

const OLIVE = "#4A5536";
const OLIVE_DEEP = "#3A4429";
const OLIVE_SOFT = "#6B7752";
const CHAMPAGNE = "#C9A87C";
const CREAM = "#F5EFE6";
const CREAM_WARM = "#EBE2D2";
const INK = "#1A1A18";
const LINE = "#D9D2C4";

const Eyebrow: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <p className={className} style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: OLIVE_SOFT }}>{children}</p>
);

const JoyaDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = JOYAS.find((p) => p.slug === slug);

  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [specsOpen, setSpecsOpen] = useState(false);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setIsFav(isFavorita(slug));
    return subscribeFavoritas(() => setIsFav(isFavorita(slug)));
  }, [slug]);

  const handleToggleFav = () => {
    if (!slug) return;
    const next = toggleFavorita(slug);
    setIsFav(next);
  };

  // Related pieces (same tipo, exclude current)
  const related = useMemo(() => {
    if (!item) return [];
    const sameStyle = JOYAS.filter((j) => !j.isPlaceholder && j.slug !== item.slug && j.categoria === item.categoria && j.estilo === item.estilo);
    const sameTipo = JOYAS.filter((j) => !j.isPlaceholder && j.slug !== item.slug && j.categoria === item.categoria && j.estilo !== item.estilo);
    return [...sameStyle, ...sameTipo].slice(0, 4);
  }, [item]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  if (!item) return <Navigate to="/joyas" replace />;

  const imgs = item.imagenes;
  const tipoEstilo = `${item.categoria}${item.estilo ? `, ${item.estilo}` : ""}`;
  const precioLabel = formatPrecioDesde(item.precioDesde);

  // Split description into emotional + body paragraphs
  const longDesc = item.descripcionLarga ?? item.descripcion;
  const paragraphs = longDesc.split(/\n+/).filter(Boolean);
  const emotional = paragraphs[0] ?? item.descripcion;
  const bodyParas = paragraphs.slice(1);

  // SEO, orientado a búsquedas reales en Chile
  const isRing = item.categoria?.toLowerCase().includes("anillo") || item.categoria?.toLowerCase().includes("argolla");
  const metalLabel = item.metalPrincipal ?? item.material.split(",")[0] ?? "Oro 18k";
  const piedraLabel = item.piedraCentral ?? "";
  const seoTitle = isRing
    ? `${item.nombre}, ${metalLabel}${piedraLabel ? ` con ${piedraLabel}` : ""} | Anillos a Medida Santiago, Gia Solari`
    : `${item.nombre}, ${metalLabel} | Joyería a Medida Santiago, Gia Solari`;
  const seoDescBase = `${item.nombre}, ${item.categoria.toLowerCase()} en ${metalLabel.toLowerCase()}${piedraLabel ? ` con ${piedraLabel.toLowerCase()}` : ""}. ${emotional}`;
  const seoDesc = seoDescBase.replace(/\s+/g, " ").slice(0, 158);
  const absImage = imgs[0].startsWith("http") ? imgs[0] : `https://www.giasolari.cl${imgs[0]}`;
  const priceLabel = item.precioDesde ? `Desde $${item.precioDesde.toLocaleString("es-CL")} CLP` : "A cotizar";
  const altText = `${item.nombre}, ${item.categoria.toLowerCase()} en ${metalLabel.toLowerCase()}${piedraLabel ? ` con ${piedraLabel.toLowerCase()}` : ""}, Gia Solari Joyas Santiago`;

  const productJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: item.nombre,
    image: imgs.map((src) => (src.startsWith("http") ? src : `https://www.giasolari.cl${src}`)),
    description: emotional,
    brand: { "@type": "Brand", name: "Gia Solari Joyas" },
    sku: item.slug,
    category: tipoEstilo,
    material: metalLabel,
    ...(piedraLabel ? { color: piedraLabel } : {}),
    offers: {
      "@type": "Offer",
      priceCurrency: "CLP",
      ...(item.precioDesde ? { price: String(item.precioDesde) } : {}),
      availability: "https://schema.org/MadeToOrder",
      itemCondition: "https://schema.org/NewCondition",
      url: `https://www.giasolari.cl/joyas/${item.slug}`,
      seller: { "@type": "Organization", name: "Gia Solari Joyas" },
    },
  };

  const goPrev = () => setActiveImg((i) => (i - 1 + imgs.length) % imgs.length);
  const goNext = () => setActiveImg((i) => (i + 1) % imgs.length);
  const pinUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
    `https://www.giasolari.cl/joyas/${item.slug}`,
  )}&media=${encodeURIComponent(absImage)}&description=${encodeURIComponent(
    `${item.nombre}, ${metalLabel}${piedraLabel ? ` con ${piedraLabel}` : ""}, Gia Solari Joyas`,
  )}`;

  // Build specs
  const specsRows: { label: string; value: string }[] = [
    { label: "Metal", value: item.metalPrincipal ?? item.material.split(", ")[0] ?? "A definir" },
  ];
  if (item.piedraCentral) specsRows.push({ label: "Centro", value: item.piedraCentral });
  if (item.estilo) specsRows.push({ label: "Estilo", value: item.estilo });
  specsRows.push({ label: "Talla", value: "A medida" });
  specsRows.push({ label: "Hechura", value: "Engaste a mano en taller" });
  specsRows.push({ label: "Materiales", value: item.material });

  return (
    <div className="min-h-screen" style={{ background: CREAM }}>
      <SEO
        title={seoTitle}
        description={seoDesc}
        path={`/joyas/${item.slug}`}
        image={absImage}
        noindex={item.isPlaceholder}
        type="product"
      />
      <Helmet>
        <link rel="canonical" href={`https://www.giasolari.cl/joyas/${item.slug}`} />
        {/* Pinterest Rich Pins (product) + Open Graph product tags */}
        <meta property="product:brand" content="Gia Solari Joyas" />
        <meta property="product:availability" content="made to order" />
        <meta property="product:condition" content="new" />
        <meta property="product:price:currency" content="CLP" />
        {item.precioDesde && (
          <meta property="product:price:amount" content={String(item.precioDesde)} />
        )}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1500" />
        <meta name="pinterest-rich-pin" content="true" />
        {!item.isPlaceholder && (
          <script type="application/ld+json">{JSON.stringify(productJsonLd)}</script>
        )}
      </Helmet>
      <Navbar />

      <main className="pt-28 md:pt-36 pb-44 md:pb-32">
        <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
          {/* BREADCRUMB */}
          <nav className="mb-8 md:mb-10" style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", letterSpacing: "0.1em", color: OLIVE_SOFT }}>
            <Link to="/" className="hover:underline">Inicio</Link>
            <span className="mx-2">,</span>
            <Link to="/joyas" className="hover:underline">Joyas</Link>
            <span className="mx-2">,</span>
            <Link to={`/joyas?tipo=${(() => {
              const c = item.categoria?.toLowerCase() ?? "";
              if (c.includes("argolla") || c.includes("alianza")) return "argollas";
              if (c.includes("anillo")) return "compromiso";
              if (c.includes("aro")) return "aros";
              if (c.includes("collar")) return "collares";
              if (c.includes("pulsera") || c.includes("esclava")) return "pulseras";
              if (c.includes("vintage")) return "vintage";
              if (c.includes("familia")) return "familia";
              return "todos";
            })()}`} className="hover:underline">{item.categoria}</Link>
            {item.estilo && (
              <>
                <span className="mx-2">,</span>
                <span>{item.estilo}</span>
              </>
            )}
            <span className="mx-2">,</span>
            <span style={{ color: OLIVE_DEEP, fontWeight: 500 }}>{item.nombre}</span>
          </nav>

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-[58fr_42fr] gap-8 lg:gap-20">
            {/* LEFT, GALERÍA */}
            <div>
              <button
                type="button"
                onClick={() => setLightbox(true)}
                className="block w-full overflow-hidden cursor-zoom-in max-h-[60vh] md:max-h-none"
                style={{ aspectRatio: "4 / 5", background: CREAM_WARM }}
              >
                <img
                  src={imgs[activeImg]}
                  alt={altText}
                  className="w-full h-full object-cover"
                  loading="eager"
                />

              </button>

              {imgs.length > 1 && (
                <div className="hidden md:flex gap-2 mt-3">
                  {imgs.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className="overflow-hidden transition-all"
                      style={{
                        width: 80, height: 100,
                        border: `${activeImg === i ? "2px" : "1px"} solid ${activeImg === i ? OLIVE : LINE}`,
                        background: CREAM_WARM,
                      }}
                    >
                      <img src={src} alt={`Miniatura ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {imgs.length > 1 && (
                <div className="md:hidden flex justify-center gap-1.5 mt-3">
                  {imgs.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      aria-label={`Ver foto ${i + 1}`}
                      className="rounded-full"
                      style={{
                        width: 6, height: 6,
                        background: activeImg === i ? CHAMPAGNE : LINE,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT, INFO */}
            <div className="lg:sticky lg:self-start" style={{ top: "140px" }}>
              <Eyebrow>{tipoEstilo}</Eyebrow>
              <h1
                className="mt-3"
                style={{
                  fontFamily: "'Bodoni Moda', serif",
                  fontWeight: 400,
                  fontSize: "clamp(36px, 4vw, 48px)",
                  lineHeight: 1.05,
                  color: OLIVE_DEEP,
                }}
              >
                {item.nombre}
              </h1>

              {/* Description */}
              <div className="mt-6 space-y-4">
                <p style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: "italic", fontWeight: 400, fontSize: "19px", lineHeight: 1.5, color: OLIVE_DEEP }}>
                  {emotional}
                </p>
                {bodyParas.map((p, i) => (
                  <p key={i} style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", lineHeight: 1.7, color: INK }}>{p}</p>
                ))}
              </div>

              {/* Price block */}
              <div className="mt-8">
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "22px", fontWeight: 500, color: OLIVE_DEEP }}>
                  {item.precioDesde ? precioLabel : "Precio a cotizar"}
                </p>
                <p className="mt-1" style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: OLIVE_SOFT }}>
                  {item.precioDesde
                    ? "Valor referencial. El precio final depende del diseño que conversemos."
                    : "El valor depende del diseño final que conversemos"}
                </p>
              </div>

              {/* Specs accordion */}
              <button
                type="button"
                onClick={() => setSpecsOpen((v) => !v)}
                className="mt-8 w-full flex items-center justify-between py-4"
                style={{ borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}`, fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500, color: OLIVE_DEEP }}
              >
                <span>Especificaciones técnicas</span>
                <ChevronDown size={16} strokeWidth={1.5} style={{ transform: specsOpen ? "rotate(180deg)" : "none", transition: "transform 200ms" }} />
              </button>
              <AnimatePresence initial={false}>
                {specsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <dl className="py-5 grid sm:grid-cols-2 gap-y-3 gap-x-6">
                      {specsRows.map((s) => (
                        <div key={s.label}>
                          <dt style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: OLIVE_SOFT, marginBottom: "2px" }}>{s.label}</dt>
                          <dd style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: INK }}>{s.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* CTAs (desktop / inline) */}
              <div className="hidden md:block mt-8 space-y-3">
                <Link
                  to={`/cotizar?pieza=${item.slug}`}
                  className="block text-center rounded-full transition-all hover:-translate-y-0.5"
                  style={{ background: OLIVE, color: CREAM, padding: "16px", fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = OLIVE_DEEP)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = OLIVE)}
                >
                  Cotizar {item.nombre}
                </Link>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleToggleFav}
                    aria-pressed={isFav}
                    aria-label={isFav ? "Quitar de favoritas" : "Agregar a favoritas"}
                    className="text-center rounded-full transition-colors flex items-center justify-center gap-2"
                    style={{ border: `1px solid ${OLIVE}`, color: OLIVE, padding: "15px", background: isFav ? CREAM_WARM : "transparent", fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}
                  >
                    <Heart size={14} strokeWidth={1.5} fill={isFav ? OLIVE : "none"} />
                    {isFav ? "Guardada" : "Wishlist"}
                  </button>
                  <a
                    href={pinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Guardar en Pinterest"
                    className="text-center rounded-full transition-colors flex items-center justify-center gap-2"
                    style={{ border: `1px solid ${OLIVE}`, color: OLIVE, padding: "15px", background: "transparent", fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                    Pinterest
                  </a>
                </div>
                <button
                  type="button"
                  className="w-full mt-3 text-center rounded-full transition-colors flex items-center justify-center gap-2"
                  style={{ border: `1px solid ${OLIVE}`, color: OLIVE, padding: "15px", background: "transparent", fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}
                  onClick={() => { window.location.href = "/agenda"; }}
                >
                  Agendar visita al showroom
                </button>

              </div>

              {/* Trust strip */}
              <ul className="mt-7 space-y-2">
                {[
                  { Icon: ShieldCheck, t: "Garantía por Gusto incluida" },
                  { Icon: Award, t: "Diamantes con certificado GIA o IGI, más Certificado Gia Solari" },
                  { Icon: Sparkles, t: "Diseño a medida sobre esta pieza" },
                ].map(({ Icon, t }) => (
                  <li key={t} className="flex items-center gap-2" style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: OLIVE_SOFT }}>
                    <Icon size={14} strokeWidth={1.5} style={{ color: OLIVE_SOFT }} />
                    {t}
                  </li>
                ))}
              </ul>

              {/* Personalizar block */}
              <div className="mt-8 p-6 rounded-lg" style={{ background: CREAM_WARM }}>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500, color: OLIVE_DEEP }}>
                  ¿Te gusta {item.nombre.split(",")[0].trim()} pero quieres cambiar algo?
                </p>
                <p className="mt-2" style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: 1.6, color: INK }}>
                  Cambiamos centro, kilates, metal o forma del halo. Cotiza y te paso opciones a medida.
                </p>
                <Link
                  to={`/cotizar?pieza=${item.slug}&modificada=true`}
                  className="inline-flex items-center gap-1 mt-3 group"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500, color: OLIVE }}
                >
                  Pedir modificaciones
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* RELATED PIECES */}
          {related.length > 0 && (
            <section className="mt-32">
              <div className="text-center mb-12">
                <Eyebrow>También te puede interesar</Eyebrow>
                <h2
                  className="mt-3"
                  style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 400, fontSize: "clamp(28px, 3vw, 36px)", color: OLIVE_DEEP }}
                >
                  Otras piezas en este estilo
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-6">
                {related.map((r) => (
                  <Link key={r.slug} to={`/joyas/${r.slug}`} className="block group">
                    <div className="overflow-hidden" style={{ aspectRatio: "4/5", background: CREAM_WARM }}>
                      <img src={r.imagenes[0]} alt={r.nombre} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <p className="mt-3" style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: OLIVE_SOFT }}>
                      {r.categoria}
                    </p>
                    <p className="mt-1" style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "16px", color: OLIVE_DEEP }}>
                      {r.nombre}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* PROCESO TEASER */}
        <section className="mt-20 py-24 md:py-32" style={{ background: CREAM_WARM }}>
          <div className="container mx-auto px-4 md:px-8 max-w-[1200px] text-center">
            <Eyebrow>De la idea al dedo</Eyebrow>
            <h2
              className="mt-3"
              style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 400, fontSize: "clamp(32px, 3.5vw, 40px)", color: OLIVE_DEEP }}
            >
              Cómo trabajamos juntos
            </h2>
            <p
              className="mt-3 mx-auto"
              style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: "italic", fontSize: "18px", color: OLIVE_SOFT, maxWidth: "560px" }}
            >
              De la idea a tu pieza terminada en cuatro semanas.
            </p>
            <ol className="mt-16 grid md:grid-cols-4 gap-12 md:gap-8 text-center">
              {[
                { n: "01", t: "Conversación", w: "Semana 1" },
                { n: "02", t: "Boceto", w: "Semana 2" },
                { n: "03", t: "Atelier", w: "Semana 3" },
                { n: "04", t: "Entrega", w: "Semana 4" },
              ].map((s) => (
                <li key={s.n}>
                  <p style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 400, fontSize: "56px", color: CHAMPAGNE, lineHeight: 1 }}>{s.n}</p>
                  <p className="mt-3" style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "22px", color: OLIVE_DEEP }}>{s.t}</p>
                  <p className="mt-1" style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: OLIVE_SOFT }}>{s.w}</p>
                </li>
              ))}
            </ol>
            <div className="mt-16">
              <Link to="/proceso" className="underline" style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500, color: OLIVE_DEEP }}>
                Ver el proceso completo →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* MOBILE STICKY CTAs */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-[60] flex gap-2"
        style={{ background: CREAM, padding: "12px 16px calc(12px + env(safe-area-inset-bottom))", boxShadow: "0 -8px 24px rgba(0,0,0,0.08)" }}
      >
        <button
          type="button"
          onClick={handleToggleFav}
          aria-pressed={isFav}
          aria-label={isFav ? "Quitar de favoritas" : "Guardar en favoritas"}
          className="rounded-full"
          style={{ width: 48, height: 48, border: `1px solid ${OLIVE}`, color: OLIVE, background: isFav ? CREAM_WARM : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
        >
          <Heart size={18} strokeWidth={1.5} fill={isFav ? OLIVE : "none"} />
        </button>
        <a
          href={pinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Guardar en Pinterest"
          className="rounded-full"
          style={{ width: 48, height: 48, border: `1px solid ${OLIVE}`, color: OLIVE, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
        </a>
        <Link
          to={`/cotizar?pieza=${item.slug}`}
          className="flex-1 text-center rounded-full"
          style={{ background: OLIVE, color: CREAM, padding: "14px", fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}
        >
          Cotizar pieza
        </Link>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ background: "rgba(26,26,24,0.95)" }}
          >
            <button
              onClick={() => setLightbox(false)}
              aria-label="Cerrar"
              className="absolute top-5 right-5"
              style={{ color: CHAMPAGNE }}
            >
              <X size={28} strokeWidth={1.5} />
            </button>
            {imgs.length > 1 && (
              <>
                <button onClick={goPrev} aria-label="Anterior" className="absolute left-3 md:left-8" style={{ color: CHAMPAGNE }}>
                  <ChevronLeft size={32} strokeWidth={1.5} />
                </button>
                <button onClick={goNext} aria-label="Siguiente" className="absolute right-3 md:right-8" style={{ color: CHAMPAGNE }}>
                  <ChevronRight size={32} strokeWidth={1.5} />
                </button>
              </>
            )}
            <img
              src={imgs[activeImg]}
              alt={item.nombre}
              className="max-h-[90vh] max-w-[92vw] object-contain"
            />
            {imgs.length > 1 && (
              <p
                className="absolute bottom-6 left-0 right-0 text-center"
                style={{ color: CHAMPAGNE, fontFamily: "Inter, sans-serif", fontSize: "11px", letterSpacing: "0.2em" }}
              >
                {activeImg + 1} / {imgs.length}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JoyaDetalle;
