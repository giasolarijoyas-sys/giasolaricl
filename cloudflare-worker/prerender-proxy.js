/**
 * Cloudflare Worker — giasolari.cl prerender proxy
 *
 * Intercepta requests de bots (Googlebot, Bingbot, FB, WhatsApp, Twitter, LinkedIn)
 * y los reenvía a Prerender.io para que reciban HTML pre-renderizado.
 * Los usuarios humanos van directo al origen (Lovable).
 *
 * --- DEPLOY ---
 *
 * 1. En Cloudflare Dashboard:
 *    - Workers & Pages → Create → Worker → Pegá este código.
 *    - Settings → Variables → Environment Variables:
 *        PRERENDER_TOKEN = tu token de prerender.io (Settings → Account)
 *        ORIGIN_HOST     = giasolaricl.lovable.app   (o tu dominio Lovable)
 *    - Deploy.
 *
 * 2. Asociar el Worker al dominio:
 *    - Workers & Pages → tu worker → Settings → Triggers → Add Custom Domain.
 *    - Agregá: www.giasolari.cl  y  giasolari.cl
 *    - Cloudflare crea automáticamente las rutas y certificado SSL.
 *
 * 3. En Prerender.io (https://prerender.io):
 *    - Crear cuenta. En Settings copiá el "Prerender Token".
 *    - Add URL → https://www.giasolari.cl
 *    - (Opcional) Cache Manager → "Recache" para forzar refresh tras cambios.
 *
 * 4. Verificación:
 *    curl -A "Googlebot" https://www.giasolari.cl/ -L | grep '<h1'
 *    Debe devolver el HTML con texto real (no <div id="root"></div>).
 */

const BOT_USER_AGENTS = [
  "googlebot",
  "yahoo! slurp",
  "bingbot",
  "yandex",
  "baiduspider",
  "facebookexternalhit",
  "twitterbot",
  "rogerbot",
  "linkedinbot",
  "embedly",
  "quora link preview",
  "showyoubot",
  "outbrain",
  "pinterest/0.",
  "developers.google.com/+/web/snippet",
  "slackbot",
  "vkshare",
  "w3c_validator",
  "redditbot",
  "applebot",
  "whatsapp",
  "flipboard",
  "tumblr",
  "bitlybot",
  "skypeuripreview",
  "nuzzel",
  "discordbot",
  "google page speed",
  "qwantify",
  "pinterestbot",
  "bitrix link preview",
  "xing-contenttabreceiver",
  "chrome-lighthouse",
  "telegrambot",
];

// Extensiones que NUNCA pasan por prerender (assets estáticos)
const SKIP_EXTENSIONS = [
  ".js", ".css", ".xml", ".less", ".png", ".jpg", ".jpeg", ".gif",
  ".pdf", ".doc", ".txt", ".ico", ".rss", ".zip", ".mp3", ".rar",
  ".exe", ".wmv", ".doc", ".avi", ".ppt", ".mpg", ".mpeg", ".tif",
  ".wav", ".mov", ".psd", ".ai", ".xls", ".mp4", ".m4a", ".swf",
  ".dat", ".dmg", ".iso", ".flv", ".m4v", ".torrent", ".woff",
  ".woff2", ".ttf", ".svg", ".webmanifest", ".webp",
];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const userAgent = (request.headers.get("User-Agent") || "").toLowerCase();
    const path = url.pathname.toLowerCase();

    const originHost = env.ORIGIN_HOST || "giasolaricl.lovable.app";
    const originUrl = `https://${originHost}${url.pathname}${url.search}`;

    // Skip prerender para assets
    const isAsset = SKIP_EXTENSIONS.some((ext) => path.endsWith(ext));

    // Skip si lleva _escaped_fragment_ raro o si es POST/PUT/DELETE
    const isBot = BOT_USER_AGENTS.some((bot) => userAgent.includes(bot));
    const shouldPrerender =
      isBot && !isAsset && request.method === "GET" && env.PRERENDER_TOKEN;

    if (shouldPrerender) {
      // Reescribe a Prerender.io
      const prerenderUrl = `https://service.prerender.io/${originUrl}`;
      const prerenderRequest = new Request(prerenderUrl, {
        method: "GET",
        headers: {
          "X-Prerender-Token": env.PRERENDER_TOKEN,
          "User-Agent": request.headers.get("User-Agent") || "",
        },
        redirect: "manual",
      });

      try {
        const response = await fetch(prerenderRequest);
        // Cache 10 min en Cloudflare edge
        const headers = new Headers(response.headers);
        headers.set("X-Prerendered", "true");
        headers.set("Cache-Control", "public, max-age=600");
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers,
        });
      } catch (err) {
        // Si Prerender falla, caer al origen sin romper
        console.error("Prerender failed, falling back to origin:", err);
      }
    }

    // Tráfico humano (o fallback): proxy directo al origen
    const originRequest = new Request(originUrl, request);
    originRequest.headers.set("Host", originHost);
    return fetch(originRequest);
  },
};
