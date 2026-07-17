import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";

/** Envía un page_view a GA4 en cada cambio de ruta (SPA). */
const RouteTracker = () => {
  const location = useLocation();
  useEffect(() => {
    // Pequeño delay para que <title> ya se haya actualizado vía react-helmet
    const id = window.setTimeout(() => {
      trackPageView(location.pathname + location.search);
    }, 0);
    return () => window.clearTimeout(id);
  }, [location.pathname, location.search]);
  return null;
};

export default RouteTracker;
