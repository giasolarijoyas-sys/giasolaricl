import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackFbEvent, trackPageView } from "@/lib/analytics";

/** Envía page_view a GA4 y Meta Pixel en cada cambio de ruta (SPA). */
const RouteTracker = () => {
  const location = useLocation();
  const isFirstFbRef = useRef(true);

  useEffect(() => {
    // Pequeño delay para que <title> ya se haya actualizado vía react-helmet
    const id = window.setTimeout(() => {
      trackPageView(location.pathname + location.search);
      // El PageView inicial ya lo dispara el snippet base en index.html;
      // aquí solo enviamos en cambios de ruta posteriores.
      if (isFirstFbRef.current) {
        isFirstFbRef.current = false;
      } else {
        trackFbEvent("PageView");
      }
    }, 0);
    return () => window.clearTimeout(id);
  }, [location.pathname, location.search]);
  return null;
};

export default RouteTracker;
