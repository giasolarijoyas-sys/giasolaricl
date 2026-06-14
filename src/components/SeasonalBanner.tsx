import { useEffect, useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "gs_seasonal_banner_dismissed";
const WA_URL =
  "https://wa.me/56984049502?text=Hola%20Gia%2C%20quiero%20cotizar%20antes%20del%2030%20de%20junio";

const SeasonalBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem(STORAGE_KEY);
      if (!dismissed) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <div
      role="region"
      aria-label="Aviso estacional"
      style={{
        background: "#556B44",
        color: "#FFFFFF",
        fontFamily: "Inter, sans-serif",
        fontSize: "13px",
        lineHeight: 1.3,
      }}
      className="relative flex items-center justify-center px-10 py-2 text-center"
    >
      <p>
        <span aria-hidden="true">💍</span> Junio: mes de propuestas · Encargos esta semana llegan antes del 30 ·{" "}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:opacity-80"
          style={{ color: "#FFFFFF", fontWeight: 500 }}
        >
          Cotiza ahora
        </a>
      </p>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Cerrar aviso"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:opacity-80"
        style={{ color: "#FFFFFF" }}
      >
        <X size={14} strokeWidth={2} />
      </button>
    </div>
  );
};

export default SeasonalBanner;
