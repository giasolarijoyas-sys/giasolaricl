
# Auditoría móvil (375px) — reporte de hallazgos

Se capturaron screenshots reales a 375×812 (DPR 2) recorriendo top y 5 scrolls de cada página: Home, Joyas, Ficha de producto, Significados/Piedras, Significados/Diseños, New In, Aprende, Sobre Gia, Cotizar, Agenda, Favoritas, Lista de Deseos, FAQ, Guía de Tallas, más el menú móvil abierto.

Alturas totales medidas en móvil (px): Home 17.498, Sobre Gia 6.735, Piedras 5.700, Joya-detalle 4.903, Aprende 4.529, New In 4.131, Joyas 4.054, Lista deseos 3.839, Diseños 3.355, Guía tallas 2.852, FAQ 2.645, Agenda 2.509, Cotizar 2.233, Favoritas 2.055.

No es un plan de implementación: es diagnóstico. Al aprobar, sigo con un plan de arreglos separado.

---

## PRIORIDAD ALTA (rompen usabilidad o tapan contenido)

1. **Stack flotante de botones (Instagram + COTIZAR + WhatsApp) tapa contenido en TODAS las páginas.** En 375px los tres botones se apilan en la esquina inferior derecha y cubren ~180×260px permanentes.
   - Home: tapa el trust bar ("Showroom en Vitacura") y textos de testimonios ("Maca entendió a la primera…").
   - Joyas/catálogo y New In: cortan los nombres de las piezas de la columna derecha ("Olivia · Solitario O…", "Greta · Halo Amat…").
   - Cotizar y Agenda: **cubren los íconos de calendario/reloj de los inputs de fecha y hora** — el usuario no puede tocarlos.
   - Ficha de producto: se suman al sticky "COTIZAR PIEZA" de abajo → doble capa de flotantes.
   - Piedras: tapan el primer StoneCard.

2. **Menú móvil abierto muestra dos "COTIZAR" simultáneos.** Al abrir el hamburguesa, el CTA "COTIZAR" del footer del menú aparece junto al COTIZAR flotante persistente. Además Instagram+WhatsApp siguen visibles encima del menú.

3. **Sticky bar "COTIZAR PIEZA" de la ficha de producto tapa la descripción.** El bloque "Pieza única hecha a mano. La piedra, el…" queda cortado en la mitad; para leer hay que hacer scroll y el bar reaparece encima.

4. **Chips de filtro en /joyas quedan cortados por el navbar fijo al scrollear.** Los rótulos de categorías ("Halo Cushion", "Cluster") aparecen partidos horizontalmente detrás del header translúcido. El navbar cream no tiene backdrop sólido → siempre se lee el texto de fondo a través.

5. **Header translúcido superpone texto en TODAS las páginas al scrollear.** Se ve el h2 "Certificación real" leyéndose a través del navbar en Sobre Gia; mismo problema en Home, Aprende, Piedras. Falta `backdrop-blur` u opacidad completa cuando `scrollY > 0`.

## PRIORIDAD MEDIA (fricción, mucho scroll o jerarquía rota)

6. **Home tiene 17.498px de alto en móvil (~21 viewports).** Demasiadas secciones apiladas con paddings grandes iguales a desktop. Candidatos a compactar en móvil: TresPilares, WhyUs, ProcesoHome, RangoInversion, IncluyeAnillo, GarantiaSection y separadores `SectionBanner` (cada uno ~350px). Bajar `py-*` en móvil recuperaría 30–40% del alto.

7. **Marquee/Instagram feed muestra rectángulos vacíos.** Al final del Home, el `InstagramFeed` renderiza 9 placeholders de color sólido — parece un error visual, no un feed. En móvil ocupa 3 filas visibles sin contexto.

8. **Botón "FILTROS" en /joyas es enorme.** Ocupa full-width y ~70px de alto sólo para abrir un drawer; empuja las piezas más abajo. Además el buscador + "98 PIEZAS" + FILTROS suman ~260px antes del primer producto.

9. **H1 gigantes en móvil.** "Joyas Gia Solari", "Las Piedras", "Guías sobre diamantes, oro y joyería fina" — el `clamp` mínimo queda muy alto para 375px, generando saltos de línea forzados y mucho vertical wasted. También el H1 de Ficha ("Oval Loredana") ocupa ~110px.

10. **Breadcrumbs en Ficha con separación fea.** Se ve "Inicio  ,  Joyas  ,  Anillo de compromiso  ,  Vintage  ,  Oval Loredana" — el separador es una coma con dos espacios y hace wrap en 375px generando 2 líneas irregulares.

11. **Cards de piezas a 2 columnas quedan muy angostas para nombres largos.** "Vera · Halo Redondo Oro", "Marina · Halo Oval", "Flora · Halo Rubí", "Julieta · Anillo de Perla" hacen wrap a 3 líneas. Considerar `text-sm` móvil o truncate con `line-clamp-2`.

12. **CTA "SIGUIENTE" del cotizador queda deshabilitado y con color gris que parece bug.** En Paso 1 sin selección se ve como si el botón estuviera roto (contraste muy bajo sobre cream). Falta estado visual "elige una opción".

13. **Grabados Simbólicos / secciones tipo grid a 2×2 en móvil apretadas.** En Home s0, las cards "Montaña / Coordenadas / Latido / Huella dactilar" quedan estrechas y la última se corta por los flotantes.

## PRIORIDAD BAJA (pulido)

14. **`SectionBanner` con texto centrado sobre imagen se ve pequeño en móvil.** "Cada Detalle Cuenta", "Hecho a Tu Medida" pierden fuerza; el subtexto casi no se lee.

15. **Espaciado inconsistente entre secciones del Home.** Algunos bloques tienen `py-20` y otros `py-12`, se nota como saltos.

16. **Íconos del hero (Shield/Diamond/Clock/MapPin) hacen wrap en 4 líneas a 375px.** Ocupan ~90px cuando podrían estar en 2 líneas con gap más ajustado.

17. **Enlaces del footer todos en una columna con `text-white/70` sobre negro** — legibilidad OK, pero muy larga (5 secciones apiladas: catálogo, empresa, ayuda, contacto, legal). El footer solo mide ~1.400px en móvil.

18. **Botón WhatsApp flotante no tiene `aria-label` visible** (verificar accesibilidad, no confirmado por screenshot).

19. **`min-height: 88vh` del hero shell desktop no aplica en móvil** — bien resuelto, pero el `hero-img-wrap` en móvil llega a 55vh y aún así el bloque texto+CTA queda comprimido si el trust bar y los flotantes se solapan.

20. **Instagram feed placeholders sin `alt` ni estado "cargando".** En móvil se ve como un bug visual (3 filas de rectángulos beige/marrón).

---

## Recomendación de próximo paso

Al aprobar, el siguiente plan atacaría primero los 5 puntos ALTA (que son los que hacen que el sitio se sienta "roto" en celular), luego los MEDIA (compactación y jerarquía), y por último los BAJA. Los cambios son solo CSS/responsive, sin tocar lógica de negocio, cotizador, favoritos ni filtros.
