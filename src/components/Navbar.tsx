import { useState, useEffect } from "react";
import { Menu, X, Heart, ChevronDown, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const OLIVE = "#4A5536";
const OLIVE_DARK = "#3A4429";
const CREAM = "#F5EFE6";
const CREAM_WARM = "#EBE2D2";
const BORDER = "#D9D2C4";
const INK = "#1A1A18";
const CARAMEL = "#C9A87C";
const MUTED = "#6B7752";

const WHATSAPP_URL = "https://wa.me/56984049502";

type SubItem = { label: string; href: string };
const joyasMenuCols: { title: string; items: SubItem[] }[] = [
  {
    title: "Anillos de compromiso y argollas",
    items: [
      { label: "Halos", href: "/joyas?tipo=bodas&estilo=Halo" },
      { label: "Solitarios", href: "/joyas?tipo=bodas&estilo=Solitarios" },
      { label: "Tres y cinco piedras", href: "/joyas?tipo=bodas&estilo=Tres+y+cinco+piedras" },
      { label: "Pavé", href: "/joyas?tipo=bodas&estilo=Pavé" },
      { label: "Cintillos", href: "/joyas?tipo=bodas&estilo=Cintillos" },
      { label: "Eternity", href: "/joyas?tipo=bodas&estilo=Eternity" },
      { label: "Color (zafiro, aguamarina, esmeralda)", href: "/joyas?tipo=bodas&estilo=Color" },
      { label: "Ver todos →", href: "/joyas?tipo=bodas" },
    ],
  },
  {
    title: "Otras piezas",
    items: [
      { label: "Aros", href: "/joyas?tipo=aros" },
      { label: "Collares", href: "/joyas?tipo=collares" },
      { label: "Pulseras y esclavas", href: "/joyas?tipo=pulseras" },
      { label: "Joyas de familia", href: "/joyas?tipo=familia" },
      { label: "Vintage", href: "/joyas?tipo=vintage" },
    ],
  },
];

const significadosItems: SubItem[] = [
  { label: "Las Piedras", href: "/significados/piedras" },
  { label: "Los Diseños", href: "/significados/disenos" },
  { label: "Filosofía", href: "/filosofia" },
];

const mainLinks = [
  { label: "New In", href: "/new" },
  { label: "Aprende", href: "/aprende" },
  { label: "Sobre Gia", href: "/sobre-gia" },
];

// WhatsApp icon (brand)
const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
  </svg>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [joyasOpen, setJoyasOpen] = useState(false);
  const [sigOpen, setSigOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] flex flex-col">
        {/* Top bar — sociales y atelier */}
        <div
          className="hidden md:flex h-10 items-center justify-between px-4 md:px-8"
          style={{ background: OLIVE_DARK, color: CARAMEL }}
        >
          <p
            className="flex-1 text-center"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Atelier en Las Condes · Solo con cita previa
          </p>
          <div className="flex items-center gap-4 absolute right-4 md:right-8">
            <a href="https://www.instagram.com/giasolari.cl/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-70">
              <Instagram size={14} strokeWidth={1.5} />
            </a>
            <a href="https://cl.pinterest.com/giasolarijoyas/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="hover:opacity-70">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M11 7c2.5-.5 5 1 5 3.5S14 15 12 14.5c-.7-.2-1-.8-.8-1.5l1.3-5.5"/><path d="M11 14l-1.5 6"/></svg>
            </a>
            <a href="https://www.tiktok.com/@giasolari.cl" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:opacity-70">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:opacity-70">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z"/></svg>
            </a>
          </div>
        </div>

      <nav
        className="backdrop-blur-md"
        style={{
          background: `${CREAM}E0`,
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div className="container mx-auto h-[60px] md:h-[72px] px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            aria-label="Gia Solari Joyas - Inicio"
            className="block focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-4 shrink-0"
            style={{ outlineColor: CARAMEL, paddingRight: "16px" }}
          >
            <picture>
              <source media="(max-width: 480px)" srcSet="/monograma-oliva.svg" />
              <img
                src="/wordmark-oliva.svg"
                alt="Gia Solari Joyas"
                className="block w-[140px] md:w-[180px] max-[480px]:w-auto max-[480px]:h-9"
                style={{ minWidth: "120px" }}
              />
            </picture>
          </a>

          {/* Center links - desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Joyas dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setJoyasOpen(true)}
              onMouseLeave={() => setJoyasOpen(false)}
            >
              <button
                aria-haspopup="true"
                aria-expanded={joyasOpen}
                onClick={() => setJoyasOpen((v) => !v)}
                className="flex items-center gap-1 transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: joyasOpen ? CARAMEL : "#4A5536",
                }}
              >
                <span className="nav-underline">Joyas</span>
                <ChevronDown size={14} className={`transition-transform ${joyasOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {joyasOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[640px] p-8"
                    style={{
                      background: CREAM,
                      boxShadow: "0 12px 32px -8px rgba(31, 36, 23, 0.18)",
                      borderRadius: "8px",
                      border: `1px solid ${BORDER}`,
                    }}
                  >
                    <div className="grid grid-cols-2 gap-8">
                      {joyasMenuCols.map((col) => (
                        <div key={col.title}>
                          <p
                            className="mb-3"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "10.5px",
                              letterSpacing: "0.22em",
                              textTransform: "uppercase",
                              color: MUTED,
                            }}
                          >
                            {col.title}
                          </p>
                          <ul className="flex flex-col gap-1.5">
                            {col.items.map((it) => (
                              <li key={it.label}>
                                <a
                                  href={it.href}
                                  className="block py-1 transition-colors hover:text-[#C9A87C]"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "13.5px",
                                    fontWeight: 400,
                                    color: INK,
                                  }}
                                >
                                  {it.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Significados dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSigOpen(true)}
              onMouseLeave={() => setSigOpen(false)}
            >
              <button
                aria-haspopup="true"
                aria-expanded={sigOpen}
                onClick={() => setSigOpen((v) => !v)}
                className="flex items-center gap-1 transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: sigOpen ? CARAMEL : "#4A5536",
                }}
              >
                <span className="nav-underline">Significados</span>
                <ChevronDown size={14} className={`transition-transform ${sigOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {sigOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[240px] p-5"
                    style={{
                      background: CREAM,
                      boxShadow: "0 12px 32px -8px rgba(31, 36, 23, 0.18)",
                      borderRadius: "8px",
                      border: `1px solid ${BORDER}`,
                    }}
                  >
                    <ul className="flex flex-col gap-1.5">
                      {significadosItems.map((it) => (
                        <li key={it.href}>
                          <a
                            href={it.href}
                            className="block py-1.5 transition-colors hover:text-[#C9A87C]"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "13.5px",
                              fontWeight: 400,
                              color: INK,
                            }}
                          >
                            {it.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>



            {mainLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-underline"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#4A5536",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right zone - desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/cotizar"
              className="transition-colors"
              style={{
                background: OLIVE,
                color: CREAM,
                padding: "10px 22px",
                borderRadius: "999px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = OLIVE_DARK)}
              onMouseLeave={(e) => (e.currentTarget.style.background = OLIVE)}
            >
              Cotizar
            </a>
            <a
              href="/agenda"
              className="transition-colors"
              style={{
                border: `1px solid ${OLIVE}`,
                color: OLIVE,
                padding: "10px 22px",
                borderRadius: "999px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Agendar
            </a>

            <a
              href="/lista-de-deseos"
              aria-label="Mis favoritas"
              title="Mis favoritas"
              className="p-2 rounded-full hover:bg-[#F5EFE6] transition-colors"
            >
              <Heart size={20} strokeWidth={1.5} style={{ color: INK }} />
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
              className="p-2 rounded-full transition-colors group"
            >
              <WhatsAppIcon className="w-5 h-5 transition-colors" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X size={24} style={{ color: INK }} /> : <Menu size={24} style={{ color: INK }} />}
          </button>
        </div>
      </nav>
      </div>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{ background: CREAM_WARM, paddingTop: "60px" }}
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-7 px-6">
              <a
                href="/joyas"
                onClick={() => setOpen(false)}
                style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: "italic", fontSize: "28px", color: INK }}
              >
                Joyas
              </a>
              {mainLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: "italic", fontSize: "28px", color: INK }}
                >
                  {l.label}
                </a>
              ))}
              {significadosItems.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: "italic", fontSize: "22px", color: MUTED }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/lista-de-deseos"
                onClick={() => setOpen(false)}
                style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: "italic", fontSize: "22px", color: MUTED }}
              >
                Mis favoritas
              </a>
            </div>

            <div className="px-6 pb-8 pt-4 flex flex-col gap-3" style={{ borderTop: `1px solid ${BORDER}` }}>
              <a
                href="/cotizar"
                onClick={() => setOpen(false)}
                className="text-center"
                style={{
                  background: OLIVE, color: CREAM, padding: "14px 22px", borderRadius: "999px",
                  fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                }}
              >
                Cotizar
              </a>
              <a
                href="/agenda"
                onClick={() => setOpen(false)}
                className="text-center"
                style={{
                  border: `1px solid ${OLIVE}`, color: OLIVE, padding: "13px 22px", borderRadius: "999px",
                  fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                }}
              >
                Agendar
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center justify-center gap-2 mt-2"
                style={{ color: "#25D366", fontFamily: "'Inter', sans-serif", fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-underline {
          position: relative;
          padding-bottom: 4px;
          transition: color 0.2s;
        }
        .nav-underline::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 1px;
          background: ${CARAMEL};
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.25s ease;
        }
        .nav-underline:hover { color: ${CARAMEL} !important; }
        .nav-underline:hover::after { transform: scaleX(1); }
        nav a:focus-visible, nav button:focus-visible {
          outline: 2px solid ${CARAMEL};
          outline-offset: 3px;
          border-radius: 4px;
        }
        nav a[href*="wa.me"]:hover svg { color: #25D366 !important; }
        nav a[href*="wa.me"] svg { color: ${MUTED}; }
      `}</style>
    </>
  );
};

export default Navbar;
