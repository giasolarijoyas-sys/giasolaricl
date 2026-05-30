import { useEffect, useRef, useState } from "react";
import { Instagram } from "lucide-react";
import heroImg from "@/assets/hero-halo-cushion.png";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const OLIVE = "#4A5536";
const OLIVE_DARK = "#3A4429";
const CREAM = "#F5EFE6";
const CHAMPAGNE = "#F5EFE6";
const INK = "#1A1A18";
const CARAMEL = "#C9A87C";
const MUTED_TXT = "#6B7752";
const MUTED = "#6B7752";

const HERO_IMG = heroImg;

// Pinterest icon (lineal)
const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M11 7c2.5-.5 5 1 5 3.5S14 15 12 14.5c-.7-.2-1-.8-.8-1.5l1.3-5.5" />
    <path d="M11 14l-1.5 6" />
  </svg>
);

// TikTok icon (lineal)
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Hero = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      raf && cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        // 0.92x scroll => translate up by 0.08x
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
      className="w-full flex flex-col md:flex-row-reverse pt-[60px] md:pt-[112px] items-stretch"
      style={{ minHeight: "88vh" }}
    >
      {/* Imagen */}
      <div
        ref={imgRef}
        className="relative overflow-hidden md:w-[60%] w-full"
        style={{ minHeight: "60vh" }}
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
        style={{ background: CHAMPAGNE, minHeight: "60vh" }}
      >
        <div
          className="w-full"
          style={{ padding: "32px" }}
        >
          <div className="md:p-[80px] md:pl-[64px] p-0 max-w-[560px]">

            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: "clamp(32px, 4.4vw, 56px)",
                lineHeight: 1.15,
                color: INK,
                marginBottom: "20px",
              }}
            >
              Una joya que se pasa de generación en generación empieza con una <em>conversación</em>
            </h1>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: MUTED_TXT,
                lineHeight: 1.6,
                maxWidth: "460px",
                marginBottom: "36px",
              }}
            >
              Diseño a medida en oro 18k y platino · Diamantes certificados GIA/IGI · Atelier en Las Condes
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={buildWhatsAppUrl("home_hero")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center transition-all"
                style={{
                  background: OLIVE,
                  color: CREAM,
                  padding: "14px 32px",
                  borderRadius: "999px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
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
            </div>

            <p
              style={{
                marginTop: "12px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                lineHeight: 1.5,
                color: MUTED,
              }}
            >
              Te respondo personalmente en menos de 24h · Sin compromiso
            </p>


            <p
              style={{
                marginTop: "48px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                letterSpacing: "0.05em",
                color: MUTED,
              }}
            >
              Garantía por Gusto · Diamantes certificados · Atelier solo con cita previa
            </p>

            <div className="flex items-center gap-4" style={{ marginTop: "16px", color: MUTED }}>
              <a
                href="https://instagram.com/giasolari.cl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hero-social"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="hero-social"
              >
                <PinterestIcon width={18} height={18} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hero-social"
              >
                <TikTokIcon width={18} height={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          section[class*="flex-row"] > div:first-child { height: auto; min-height: 88vh; }
        }
        .hero-social { color: ${MUTED}; transition: color .2s; }
        .hero-social:hover { color: ${CARAMEL}; }
      `}</style>
    </section>
  );
};

export default Hero;
