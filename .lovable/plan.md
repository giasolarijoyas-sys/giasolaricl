

## Plan: Logos transparentes + Panel Admin + Banners visuales

### Resumen

Tres cambios principales: (1) reemplazar los logos con las nuevas versiones de fondo transparente que subas, (2) crear un panel de administracion protegido con login en `/admin`, y (3) agregar banners/separadores visuales con fotos de joyeria entre las secciones de la pagina principal.

---

### 1. Logos con fondo transparente

**Pendiente de ti**: necesito que subas los logos con fondo transparente (PNG). Cuando los tengas, reemplazo `src/assets/logo-horizontal.png` y `src/assets/logo-icon.png`. En el Footer se quita el filtro `brightness-0 invert` para que se vea el logo tal cual.

---

### 2. Panel de administracion (`/admin`) con login

**Base de datos:**
- Crear tabla `user_roles` con columnas `id`, `user_id` (ref auth.users), `role` (enum: admin, staff).
- Crear funcion `has_role()` security definer para verificar roles sin recursion RLS.
- Agregar politicas RLS en `quotes` para que admin/staff puedan SELECT y UPDATE.
- Agregar politicas RLS en `wish_list` y `newsletter_subscribers` para SELECT por admin.

**Autenticacion:**
- Pagina `/admin/login` con formulario email + contrasena usando Supabase Auth (`signInWithPassword`).
- Layout protegido que verifica sesion + rol admin antes de mostrar contenido.
- Boton de cerrar sesion.

**Panel principal (`/admin`):**
- Sidebar con secciones: Cotizaciones, Lista de Deseos, Newsletter, Estadisticas.
- **Cotizaciones**: tabla con filtros por estado (nueva, en proceso, completada). Cada fila muestra nombre, pieza, metal, piedra, fecha, estado. Click para ver detalle completo con imagenes, respuestas del quiz y recomendacion.
- **Detalle de cotizacion**: boton "Generar Propuesta PDF" que crea un PDF profesional con logo, datos del cliente, especificaciones de la joya, rango de precio estimado, y condiciones. Se genera en el navegador con una libreria como jsPDF o react-pdf.
- **Lista de Deseos**: tabla con los registros de wish_list.
- **Newsletter**: lista de suscriptores.
- **Estadisticas basicas**: total cotizaciones, cotizaciones del mes, piezas mas solicitadas.

**Footer:**
- Agregar link discreto "Administracion" en la columna Informacion del footer que lleve a `/admin`.

---

### 3. Banners visuales entre secciones (homepage)

Inspirado en Ninito Coronal y las fotos que subiste (anillos con zafiro, halo, manos con joyas):

- Crear componente `SectionBanner` reutilizable: imagen de fondo a ancho completo con overlay oscuro y texto opcional (frase corta o CTA). Altura ~40-50vh. Efecto parallax sutil opcional.
- Agregar las fotos subidas como assets del proyecto (convertir HEIF a JPG).
- Insertar banners en `Index.tsx` entre secciones:
  - Entre WhyUs y QuizContainer: banner con foto del anillo halo zafiro en caja + texto "Cada detalle cuenta"
  - Entre Gallery y Historia: banner con foto de manos con joyas + texto "Hecho a tu medida"
  - Entre Testimonials y WishListForm: banner con foto del solitario halo + CTA "Cotiza tu joya"
- Variar fondos de algunas secciones existentes (alternar entre `bg-background` y `bg-card` o un tono crema suave) para romper la monotonia visual.

---

### Archivos principales a crear/modificar

| Archivo | Accion |
|---------|--------|
| `src/assets/logo-*` | Reemplazar con logos transparentes |
| `src/components/Footer.tsx` | Quitar filtro invert, agregar link Admin |
| `src/components/SectionBanner.tsx` | Nuevo componente de banner visual |
| `src/pages/Index.tsx` | Insertar banners entre secciones |
| `src/pages/admin/Login.tsx` | Pagina de login admin |
| `src/pages/admin/Dashboard.tsx` | Panel principal |
| `src/pages/admin/QuoteDetail.tsx` | Detalle de cotizacion + generacion PDF |
| `src/components/admin/AdminLayout.tsx` | Layout con sidebar y proteccion de ruta |
| `src/components/admin/AdminSidebar.tsx` | Sidebar de navegacion |
| `src/App.tsx` | Agregar rutas /admin/* |
| Migration SQL | Tabla user_roles, funcion has_role, politicas RLS |
| Assets nuevos | Fotos subidas convertidas a JPG |

