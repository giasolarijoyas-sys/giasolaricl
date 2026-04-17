# Prerender.io + Cloudflare Worker — Setup para giasolari.cl

Servir HTML pre-renderizado a bots (Google, FB, WhatsApp, Twitter…) sin migrar de Lovable.
Los usuarios humanos van directo al sitio React; los bots reciben HTML completo desde Prerender.io.

---

## Arquitectura

```
Usuario humano  →  Cloudflare Worker  →  giasolaricl.lovable.app  (React SPA)
Bot (Googlebot) →  Cloudflare Worker  →  service.prerender.io     (HTML pre-renderizado)
```

---

## Paso 1 — Crear cuenta en Prerender.io

1. Ir a https://prerender.io y crear cuenta (free tier: 250 URLs cacheadas).
2. Una vez logueada, ir a **Settings → Account**.
3. Copiar el **Prerender Token** (algo como `aBcDeFgHiJkLmNoPqRsT`).
4. Ir a **Cache Manager → Add URL** y agregar:
   - `https://www.giasolari.cl`
   - `https://www.giasolari.cl/sobre-gia`
   - `https://www.giasolari.cl/garantia-por-gusto`
   - `https://www.giasolari.cl/joyas`
   - `https://www.giasolari.cl/proceso`
   - `https://www.giasolari.cl/agenda`
   - `https://www.giasolari.cl/aprende`
   - `https://www.giasolari.cl/blog`
   - (y cualquier otra ruta que quieras pre-cachear)
5. Click "Recache" para que las renderice ahora.

---

## Paso 2 — Crear el Worker en Cloudflare

> Pre-requisito: el dominio `giasolari.cl` debe estar gestionado en Cloudflare (nameservers apuntando a Cloudflare). Si no lo está, agregá el sitio en Cloudflare → Add Site → seguí instrucciones para cambiar nameservers en NIC.cl. Lleva ~15 min de propagación.

1. Cloudflare Dashboard → **Workers & Pages → Create → Create Worker**.
2. Nombrá el worker: `giasolari-prerender`.
3. **Edit code** → borrá el "hello world" de ejemplo.
4. Pegá el contenido de `cloudflare-worker/prerender-proxy.js` (en este repo).
5. **Save and Deploy**.

### Variables de entorno

En el worker → **Settings → Variables → Environment Variables → Add variable**:

| Variable          | Valor                                  | Encrypt |
|-------------------|----------------------------------------|---------|
| `PRERENDER_TOKEN` | el token copiado en Paso 1            | ✅ Sí   |
| `ORIGIN_HOST`     | `giasolaricl.lovable.app`             | ❌ No   |

Save.

---

## Paso 3 — Conectar el Worker al dominio

1. En el worker → **Settings → Triggers → Add Custom Domain**.
2. Agregar: `www.giasolari.cl`
3. Repetir y agregar: `giasolari.cl`
4. Cloudflare emite cert SSL en ~1 minuto.

> ⚠️ **Importante**: si ya tenés un registro DNS apuntando `www.giasolari.cl` al dominio de Lovable directamente (CNAME a `*.lovable.app`), el Custom Domain del Worker tomará prioridad y todo el tráfico pasará por el Worker. Eso es lo que queremos.

---

## Paso 4 — Verificar

Desde tu terminal:

```bash
# Como humano: debe responder el SPA con <div id="root"></div>
curl https://www.giasolari.cl/ | grep -i 'root'

# Como Googlebot: debe responder HTML pre-renderizado con texto real
curl -A "Googlebot/2.1" https://www.giasolari.cl/ | grep -i 'Joyería'

# Header X-Prerendered: true cuando vino de Prerender
curl -A "Googlebot/2.1" -I https://www.giasolari.cl/
```

También podés probar con:
- https://search.google.com/test/rich-results → pegar URL → "Test URL"
- https://developers.facebook.com/tools/debug/ → pegar URL → "Debug" (verifica OG tags)
- https://cards-dev.twitter.com/validator

---

## Costos

- **Cloudflare Worker**: free tier = 100k requests/día. Sobra para un sitio de joyería.
- **Prerender.io**: free = 250 URLs cacheadas. Plan Hobby USD 15/mes = 1000 URLs.

---

## Mantenimiento

- Cada vez que cambies copy importante o agregues páginas:
  1. Ir a Prerender.io → Cache Manager → Recache (o agregar la URL nueva).
  2. (Opcional) Esperar 24h o forzar la próxima visita del bot.
- El Worker no necesita redeploy a menos que cambies la lista de bots o el código.

---

## Troubleshooting

**Bot recibe SPA vacía**:
- Verificar que `PRERENDER_TOKEN` esté seteado en el Worker.
- Verificar que la URL esté agregada en Prerender Cache Manager.
- Mirar logs del Worker: Cloudflare → Workers → giasolari-prerender → Logs (Real-time).

**Humanos ven el sitio raro o lento**:
- El Worker hace proxy directo al origen para humanos. Si el origen está lento, el Worker no agrega latencia.
- Si ves errores 1xxx de Cloudflare, revisar que `ORIGIN_HOST` apunte al dominio Lovable correcto.

**Loop infinito**:
- Asegurate que `ORIGIN_HOST` NO sea `www.giasolari.cl` (sería el mismo Worker llamándose a sí mismo). Debe ser `giasolaricl.lovable.app`.
