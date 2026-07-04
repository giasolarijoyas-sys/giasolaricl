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
 * Attach a global listener that fires "click_whatsapp" for any anchor
 * pointing to wa.me / api.whatsapp.com. Se llama una sola vez al iniciar app.
 */
let whatsappTrackingInitialized = false;
export function initWhatsAppClickTracking(): void {
  if (whatsappTrackingInitialized || typeof document === "undefined") return;
  whatsappTrackingInitialized = true;

  document.addEventListener(
    "click",
    (e) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (/wa\.me|api\.whatsapp\.com/i.test(href)) {
        trackEvent("click_whatsapp", {
          link_url: href,
          location: window.location.pathname,
        });
        trackFbEvent("ClickWhatsApp", { link_url: href }, "trackCustom");
      }
    },
    { capture: true }
  );
}
