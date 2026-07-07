import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import InstagramButton from "./InstagramButton";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const WA_URL = buildWhatsAppUrl("generico", {
  custom: "Hola Maca, me interesa cotizar una joya",
});

const WhatsAppIcon = ({ size = 28 }: { size?: number }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="#FFFFFF" aria-hidden="true">
    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.924 15.924 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.312 22.594c-.39 1.1-2.294 2.136-3.174 2.214-.798.07-1.794.1-2.898-.364a26.692 26.692 0 01-2.624-1.196c-4.612-2.446-7.624-7.13-7.856-7.462-.232-.332-1.894-2.536-1.894-4.836s1.198-3.432 1.624-3.902c.426-.47.928-.588 1.236-.588.308 0 .618.004.888.016.286.014.668-.108 1.044.8.39.94 1.326 3.246 1.442 3.48.118.234.196.508.04.816-.158.308-.236.5-.468.772-.232.274-.49.612-.698.82-.232.232-.474.484-.204.95.27.466 1.2 1.98 2.574 3.21 1.766 1.58 3.254 2.07 3.718 2.304.466.234.736.196 1.006-.118.27-.314 1.158-1.352 1.466-1.818.308-.466.618-.39 1.044-.234.426.158 2.708 1.278 3.174 1.512.466.234.776.352.892.546.118.196.118 1.12-.272 2.198z" />
  </svg>
);

const WhatsAppButton = ({ hideOnMobile = false }: { hideOnMobile?: boolean }) => {
  const [hover, setHover] = useState(false);
  const [hoverCotizar, setHoverCotizar] = useState(false);
  const location = useLocation();

  // Ocultar el FAB de Cotizar en la propia página /cotizar
  const showCotizar = !location.pathname.startsWith("/cotizar");

  // En rutas con barra inferior fija (cotizador y fichas /joyas/:slug),
  // ocultamos todo el FAB en móvil para no solaparlo. En desktop se mantiene.
  const hasMobileBottomBar =
    location.pathname.startsWith("/cotizar") ||
    /^\/joyas\/[^/]+$/.test(location.pathname);
  const effectiveHideOnMobile = hideOnMobile || hasMobileBottomBar;

  return (
    <>
      <div
        className={`fixed bottom-5 right-4 sm:bottom-6 sm:right-6 ${effectiveHideOnMobile ? "hidden sm:block" : "block"}`}
        style={{ zIndex: 9999 }}
      >
        <div className="flex flex-col items-end gap-3">
          <InstagramButton />
          {/* FAB Cotizar — apilado encima del WhatsApp */}
          {showCotizar && (
            <div className="relative">
              <span
                className="hidden sm:block absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap pointer-events-none transition-opacity"
                style={{
                  background: "#1A1A18",
                  color: "#FFFFFF",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  padding: "6px 10px",
                  borderRadius: "6px",
                  opacity: hoverCotizar ? 1 : 0,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}
              >
                Cotiza tu pieza
              </span>
              <Link
                to="/cotizar"
                aria-label="Cotiza tu pieza"
                onMouseEnter={(e) => {
                  setHoverCotizar(true);
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  setHoverCotizar(false);
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                className="flex items-center justify-center rounded-full"
                style={{
                  background: "#4A5536",
                  color: "#F5EFE6",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "12px 20px",
                  height: 50,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  transition: "transform 0.2s ease",
                  whiteSpace: "nowrap",
                }}
              >
                Cotizar
              </Link>
            </div>
          )}

          {/* FAB WhatsApp */}
          <div className="relative">
            <span
              className="hidden sm:block absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap pointer-events-none transition-opacity"
              style={{
                background: "#1A1A18",
                color: "#FFFFFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                padding: "6px 10px",
                borderRadius: "6px",
                opacity: hover ? 1 : 0,
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
            >
              Cotiza por WhatsApp
            </span>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cotiza por WhatsApp"
              onMouseEnter={(e) => {
                setHover(true);
                e.currentTarget.style.transform = "scale(1.08)";
              }}
              onMouseLeave={(e) => {
                setHover(false);
                e.currentTarget.style.transform = "scale(1)";
              }}
              className="flex items-center justify-center rounded-full w-[50px] h-[50px] sm:w-14 sm:h-14"
              style={{
                background: "#25D366",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                transition: "transform 0.2s ease",
              }}
            >
              <WhatsAppIcon size={28} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;
