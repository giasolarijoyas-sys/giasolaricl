# Prerender.io + Cloudflare Worker — Setup para giasolari.cl

Esta guía deja el sitio servido como HTML estático para bots (Googlebot, Bingbot,
Facebook, WhatsApp, Twitter, LinkedIn, Slack), sin afectar a usuarios humanos.

---

## 1. Crear cuenta en Prerender.io y obtener token

1. Ir a https://prerender.io y crear cuenta (plan free incluye 250 páginas).
2. En el dashboard → **Settings** → copiar el valor de **Prerender Token**.
   Se ve así: `aBcD1234EfGh5678IjKl`.
3. En **Add URL** agregar: `https://www.giasolari.cl`.
4. (Opcional) En **Cache Manager** → **Recache** para forzar refresh tras
   cambios en el sitio.

Guardá el token, lo necesitás en el paso 3.

---

## 2. Verificar dominio en Cloudflare

Requisito: `giasolari.cl` debe estar en tu cuenta de Cloudflare con los
nameservers apuntados ahí (DNS administrado por Cloudflare).

Si todavía no está: Cloudflare Dashboard → **Add a Site** → seguir el wizard
para mover los nameservers desde tu registrador (NIC Chile, GoDaddy, etc.).

---

## 3. Crear el Cloudflare Worker

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Worker**.
2. Nombrarlo: `giasolari-prerender`.
3. Pegar el código completo de la sección **"Código del Worker"** abajo.
4. **Deploy**.
5. En el Worker recién creado → **Settings** → **Variables and Secrets**:
   - `PRERENDER_TOKEN` = `<el token del paso 1>` (marcar como **Secret**)
   - `ORIGIN_HOST` = `giasolaricl.lovable.app`
6. **Save and Deploy**.

---

## 4. Asociar el Worker al dominio

1. En el Worker → **Settings** → **Triggers** → **Add Custom Domain**.
2. Agregar:
   - `www.giasolari.cl`
   - `giasolari.cl`
3. Cloudflare crea automáticamente las rutas y el certificado SSL.

A partir de este momento todo el tráfico a `giasolari.cl` pasa por el Worker.

---

## 5. Verificación

```bash
# Como bot — debe devolver HTML pre-renderizado con texto real
curl -A "Googlebot" https://www.giasolari.cl/ -L | grep '<h1'

# Como humano — debe devolver el HTML normal de Lovable (con <div id="root">)
curl -A "Mozilla/5.0" https://www.giasolari.cl/ -L | grep 'id="root"'

# Header de control — el response a bots debe traer X-Prerendered: true
curl -A "Googlebot" -I https://www.giasolari.cl/
```

Después: en Google Search Console → **URL Inspection** → pegar la URL →
**Request Indexing**.

---

## 6. Código del Worker (listo para pegar)

```js
/**
 * Cloudflare Worker — giasolari.cl prerender proxy
 *
 * Detecta bots (Googlebot, Bingbot, Facebook, WhatsApp, Twitter, LinkedIn,
 * Slack, etc.) y los reenvía a Prerender.io para que reciban HTML pre-renderizado.
 * Los humanos van directo al origen (Lovable).
 *
 * Variables requeridas (Worker → Settings → Variables and Secrets):
 *   PRERENDER_TOKEN  (Secret)  — token de prerender.io
 *   ORIGIN_HOST      (Plain)   — giasolaricl.lovable.app
 */

const BOT_USER_AGENTS = [
  "googlebot",
  "bingbot",
  "yahoo! slurp",
  "duckduckbot",
  "yandex",
  "baiduspider",
  "facebookexternalhit",
  "facebot",
  "twitterbot",
  "linkedinbot",
  "whatsapp",
  "slackbot",
  "telegrambot",
  "discordbot",
  "applebot",
  "redditbot",
  "embedly",
  "pinterest",
  "skypeuripreview",
  "vkshare",
  "tumblr",
  "flipboard",
  "quora link preview",
  "showyoubot",
  "outbrain",
  "nuzzel",
  "bitlybot",
  "google page speed",
  "chrome-lighthouse",
];

// Assets que NUNCA pasan por prerender
const SKIP_EXTENSIONS = [
  ".js", ".css", ".xml", ".json", ".less", ".png", ".jpg", ".jpeg",
  ".gif", ".webp", ".svg", ".ico", ".pdf", ".doc", ".txt", ".rss",
  ".zip", ".mp3", ".mp4", ".m4a", ".m4v", ".mov", ".webm", ".woff",
  ".woff2", ".ttf", ".otf", ".webmanifest",
];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const userAgent = (request.headers.get("User-Agent") || "").toLowerCase();
    const path = url.pathname.toLowerCase();

    const originHost = env.ORIGIN_HOST || "giasolaricl.lovable.app";
    const originUrl = `https://${originHost}${url.pathname}${url.search}`;

    const isAsset = SKIP_EXTENSIONS.some((ext) => path.endsWith(ext));
    const isBot = BOT_USER_AGENTS.some((bot) => userAgent.includes(bot));
    const shouldPrerender =
      isBot && !isAsset && request.method === "GET" && env.PRERENDER_TOKEN;

    if (shouldPrerender) {
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
        const headers = new Headers(response.headers);
        headers.set("X-Prerendered", "true");
        headers.set("Cache-Control", "public, max-age=600");
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers,
        });
      } catch (err) {
        console.error("Prerender failed, falling back to origin:", err);
      }
    }

    // Humanos (o fallback): proxy directo al origen
    const originRequest = new Request(originUrl, request);
    originRequest.headers.set("Host", originHost);
    return fetch(originRequest);
  },
};
```

---

## 7. Mantenimiento

- Cada vez que cambies contenido importante (nuevas piezas, textos), entrá a
  Prerender.io → **Cache Manager** → **Recache** la URL afectada.
- Si agregás rutas nuevas, asegurate que estén en `public/sitemap.xml` para
  que Prerender las descubra.
- El plan free de Prerender.io cachea 250 páginas. Si el sitio crece más,
  evaluar plan pago.
