import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Diamond, Clock, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-halo-cushion.png";

const OLIVE = "#4A5536";
const OLIVE_DARK = "#3A4429";
const CREAM = "#F5EFE6";
const CHAMPAGNE = "#F5EFE6";
const INK = "#1A1A18";
const CARAMEL = "#C9A87C";
const MUTED_TXT = "#6B7752";
const MUTED = "#6B7752";

const HERO_IMG = heroImg;
const INSTAGRAM_WA_URL = "https://wa.me/56984049502?text=Hola%20Maca%2C%20vengo%20del%20sitio%20web%20y%20quiero%20cotizar%20una%20pieza";

const Hero = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      raf && cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        setOffset(y * -0.08);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      raf && cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      className="w-full flex flex-col md:flex-row-reverse pt-[60px] md:pt-[112px] items-stretch hero-shell"
    >
      {/* Imagen */}
      <div
        ref={imgRef}
        className="relative overflow-hidden md:w-[60%] w-full hero-img-wrap"
      >
        <div className="absolute inset-0 md:hidden">
          <img
            src={HERO_IMG}
            alt="Anillo de compromiso sobre lino nude con rama de olivo y caja de terciopelo verde oliva"
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center", transform: `translateY(${offset}px)` }}
          />
        </div>
        <div className="hidden md:block absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Anillo de compromiso sobre lino nude con rama de olivo y caja de terciopelo verde oliva"
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover"
            style={{
              objectPosition: "center",
              aspectRatio: "4 / 5",
              transform: `translateY(${offset}px)`,
            }}
          />
        </div>
      </div>

      {/* Texto */}
      <div
        className="md:w-[40%] flex items-center"
        style={{ background: CHAMPAGNE, minHeight: "auto" }}
      >
        <div className="w-full" style={{ padding: "24px" }}>
          <div className="md:p-[80px] md:pl-[64px] p-0 max-w-[560px]">

            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: "clamp(28px, 4.4vw, 56px)",
                lineHeight: 1.12,
                color: INK,
                marginBottom: "10px",
              }}
            >
              La joya que se hereda empieza con una <em>conversación</em>
            </h1>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "15px",
                color: CARAMEL,
                letterSpacing: "0.04em",
                marginBottom: "14px",
              }}
            >
              Joyas que trascienden generaciones
            </p>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                color: MUTED_TXT,
                lineHeight: 1.5,
                maxWidth: "480px",
                marginBottom: "20px",
              }}
            >
              Anillos de compromiso y joyas a medida en oro 18k y platino, hechas a mano en Santiago. Diamantes certificados GIA/IGI.
            </p>


            {/* CTA primario */}
            <a
              href={INSTAGRAM_WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center transition-all inline-block"
              style={{
                background: OLIVE,
                color: CREAM,
                padding: "16px 36px",
                borderRadius: "999px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = OLIVE_DARK;
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = OLIVE;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Cotiza tu pieza
            </a>

            {/* CTA secundario */}
            <p style={{ marginTop: "12px" }}>
              <a
                href="#galeria"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  color: OLIVE,
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  textDecorationColor: "rgba(74,85,54,0.4)",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = OLIVE_DARK)}
                onMouseLeave={(e) => (e.currentTarget.style.color = OLIVE)}
              >
                Ver la colección ↓
              </a>
            </p>
            <p style={{ marginTop: "8px" }}>
              <a
                href="/agenda"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  color: MUTED,
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  textDecorationColor: "rgba(107,119,82,0.3)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = CARAMEL)}
                onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
              >
                Agendar visita al showroom
              </a>
            </p>

            {/* Barra de confianza */}
            <div
              className="flex flex-wrap items-center gap-x-4 gap-y-2"
              style={{ marginTop: "20px" }}
            >
              {[
                { icon: Shield, text: "Garantía por Gusto" },
                { icon: Diamond, text: "Diamantes certificados" },
                { icon: Clock, text: "Respuesta personal en 24h" },
                { icon: MapPin, text: "Showroom en Vitacura" },
              ].map((item) => (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-1"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    color: MUTED,
                    letterSpacing: "0.01em",
                  }}
                >
                  <item.icon size={13} strokeWidth={1.5} />
                  {item.text}
                </span>
              ))}
            </div>

            {/* Social proof */}
            <a
              href="https://www.instagram.com/giasolarijoyas/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 hover:opacity-70 transition-opacity"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                color: "#A8B49A",
                letterSpacing: "0.01em",
              }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              <span>Síguenos en Instagram y TikTok → @giasolarijoyas</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        /* Móvil: hero compacto para que se vea la foto pero también asome producto real debajo */
        .hero-shell { min-height: auto; }
        .hero-img-wrap { min-height: 40vh; max-height: 52vh; }
        @media (min-width: 768px) {
          .hero-shell { min-height: 88vh; }
          .hero-img-wrap { min-height: 88vh; max-height: none; height: auto; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
