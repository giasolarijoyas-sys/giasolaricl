/**
 * Wrappers para GA4 (gtag.js). Protegidos: si window.gtag no existe, no rompen.
 * El snippet base de gtag se carga en index.html.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  name: string,
  params: Record<string, unknown> = {}
): void {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", name, params);
    }
  } catch {
    /* noop */
  }
}

/** Envía page_view manual (SPA) a GA4. */
export function trackPageView(path: string, title?: string): void {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: path,
        page_location: window.location.href,
        page_title: title ?? document.title,
      });
    }
  } catch {
    /* noop */
  }
}

/** Meta Pixel event helper — safe if fbq no cargó. */
export function trackFbEvent(
  name: string,
  params: Record<string, unknown> = {},
  type: "track" | "trackCustom" = "track"
): void {
  try {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq(type, name, params);
    }
  } catch {
    /* noop */
  }
}

/**
 * Global click listener: WhatsApp + Cotizar + Agendar.
 * - wa.me / api.whatsapp.com → whatsapp_click (+ legacy click_whatsapp + FB)
 * - Textos "Cotizar" / "Cotiza..." → cotizar_click
 * - Textos "Agendar" / "Agenda..." → agendar_click
 */
let globalClickTrackingInitialized = false;
export function initWhatsAppClickTracking(): void {
  if (globalClickTrackingInitialized || typeof document === "undefined") return;
  globalClickTrackingInitialized = true;

  document.addEventListener(
    "click",
    (e) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const el = target.closest("a, button") as HTMLElement | null;
      if (!el) return;

      const href = el.getAttribute("href") || "";
      const text = (el.textContent || "").trim().toLowerCase();
      const aria = (el.getAttribute("aria-label") || "").toLowerCase();
      const label = `${text} ${aria}`;
      const location = window.location.pathname;

      // WhatsApp
      if (/wa\.me|api\.whatsapp\.com/i.test(href)) {
        trackEvent("whatsapp_click", { link_url: href, location });
        trackEvent("click_whatsapp", { link_url: href, location });
        trackFbEvent("ClickWhatsApp", { link_url: href }, "trackCustom");
        return;
      }

      // Cotizar: enlaces a /cotizar o textos "cotizar" / "cotiza tu"
      const isCotizarHref = /\/cotizar(\/|$|\?|#)/.test(href);
      const isCotizarText = /\bcotiza(r|\s+tu)\b/.test(label);
      if (isCotizarHref || isCotizarText) {
        trackEvent("cotizar_click", { link_url: href || null, location });
        return;
      }

      // Agendar: enlaces a /agenda o textos "agendar" / "agenda visita/cita"
      const isAgendarHref = /\/agenda(\/|$|\?|#)/.test(href);
      const isAgendarText = /\bagenda(r|\s+(visita|cita|tu))\b/.test(label);
      if (isAgendarHref || isAgendarText) {
        trackEvent("agendar_click", { link_url: href || null, location });
      }
    },
    { capture: true }
  );
}
