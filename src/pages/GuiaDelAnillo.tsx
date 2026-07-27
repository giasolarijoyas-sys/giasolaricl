import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Link } from "react-router-dom";
import {
  Circle,
  Gem,
  Sparkles,
  Anchor,
  Layers,
  Palette,
  Ruler,
  Heart,
  ShieldCheck,
} from "lucide-react";

type Chapter = {
  id: string;
  num: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
};

const chapters: Chapter[] = [
  { id: "metal", num: "01", title: "El metal", icon: Circle },
  { id: "piedra", num: "02", title: "La piedra (las 4C)", icon: Gem },
  { id: "formas", num: "03", title: "Las formas y su ventaja", icon: Sparkles },
  { id: "brillo", num: "04", title: "El brillo", icon: Sparkles },
  { id: "engastes", num: "05", title: "Los engastes", icon: Anchor },
  { id: "anatomia", num: "06", title: "Anatomía del anillo", icon: Layers },
  { id: "color", num: "07", title: "Piedras de color", icon: Palette },
  { id: "talla", num: "08", title: "La talla del dedo", icon: Ruler },
  { id: "cuidados", num: "09", title: "Cuidados", icon: ShieldCheck },
];

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-5 scroll-mt-32">{children}</h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-display text-lg md:text-xl text-foreground mt-6 mb-2">{children}</h3>
);

const Callout = ({ children }: { children: React.ReactNode }) => (
  <div
    className="mt-6 p-5 rounded-md border-l-2"
    style={{ background: "#F5EFE6", borderColor: "#C9A87C", color: "#3A3A34" }}
  >
    <p className="text-sm italic leading-relaxed">{children}</p>
  </div>
);

const shapes = [
  { name: "Redondo", desc: "Máximo brillo, atemporal." },
  { name: "Óvalo", desc: "Alarga el dedo y se ve más grande por quilate." },
  { name: "Esmeralda", desc: "Elegancia sobria, destellos de salón; exige alta pureza." },
  { name: "Princesa", desc: "Cuadrado moderno, aprovecha muy bien el peso." },
  { name: "Cojín", desc: "Vintage romántico, destellos cálidos." },
  { name: "Pera", desc: "Esbelto y único, estiliza la mano." },
  { name: "Marquise", desc: "Se ve más grande por quilate que un redondo." },
  { name: "Radiante", desc: "Brillo de redondo con silueta rectangular." },
];

const settings = [
  { name: "Garras / Grifas", desc: "4 a 6 puntas. Máximo brillo, el más popular." },
  { name: "Bisel / Bezel", desc: "Aro de metal completo. Máxima protección, ideal para vida activa." },
  { name: "Medio bisel", desc: "Equilibrio entre protección y luz." },
  { name: "Carril / Channel", desc: "Piedras en rieles; acompañantes protegidas." },
  { name: "Pavé", desc: "Micro-diamantes empedrados; máximo destello y agranda el conjunto." },
  { name: "Gypsy / Flush", desc: "Piedra a ras del metal. Uso rudo, minimalista." },
];

const anatomy = ["Piedra central", "Garras (head)", "Piedras laterales", "Hombros", "Aro (shank)", "Galería"];
const styles = ["Solitario", "Pavé / acompañado", "Halo", "Tres piedras", "Catedral", "Bypass / cruzado"];

const stones = [
  { name: "Zafiro", mohs: "9", desc: "Corindón azul. Ideal para uso diario. Simboliza fidelidad." },
  { name: "Rubí", mohs: "9", desc: "Corindón rojo. Pasión y fuerza." },
  { name: "Esmeralda", mohs: "7,5 – 8", desc: "Berilo verde. Frágil por sus inclusiones (“jardín”); pide cuidado." },
  { name: "Morganita", mohs: "7,5 – 8", desc: "Berilo rosa durazno. Romántica y accesible; luce hermosa en oro rosa." },
  { name: "Aguamarina", mohs: "7,5 – 8", desc: "Berilo azul celeste. Muy limpia visualmente." },
  { name: "Amatista", mohs: "7", desc: "Cuarzo violeta. Económica y expresiva." },
  { name: "Topacio", mohs: "8", desc: "Silicato. Azul luminoso, accesible." },
  { name: "Tanzanita", mohs: "6,5 – 7", desc: "Zoisita azul-violeta. Exclusiva de Tanzania; delicada." },
  { name: "Perla", mohs: "2,5 – 4,5", desc: "Orgánica. Muy blanda; clásica pero sensible a perfumes y cremas." },
];

const GuiaDelAnillo = () => (
  <>
    <SEO
      title="La Biblia del Anillo, guía completa | Gia Solari"
      description="Metal, piedra, corte, brillo, engaste y talla. Guía honesta para elegir el anillo de compromiso, sin tecnicismos vacíos."
      path="/guia-del-anillo"
    />
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="pt-28 pb-14 md:pt-40 md:pb-20" style={{ background: "#F5EFE6" }}>
        <div className="container mx-auto px-4 md:px-8 max-w-[820px] text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p
              className="mb-4"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#C9A87C",
              }}
            >
              Guía para novios
            </p>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-foreground mb-6">
              La Biblia del Anillo
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-[640px] mx-auto">
              Todo lo que vale la pena entender antes de elegir: metal, piedra, corte, brillo y engaste.
              Sin tecnicismos vacíos — solo lo que de verdad cambia cómo se ve y cuánto vale.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 pt-10 md:pt-14 pb-16 md:pb-24 max-w-[760px]">
        <Breadcrumbs items={[{ label: "La Biblia del Anillo" }]} />

        {/* Índice */}
        <nav
          aria-label="Índice de capítulos"
          className="mt-6 mb-14 p-6 md:p-8 rounded-lg border"
          style={{ borderColor: "#D9D2C4", background: "#FFFFFF" }}
        >
          <p
            className="mb-4"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#6B7752",
            }}
          >
            Índice
          </p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {chapters.map((c) => (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  className="flex items-baseline gap-3 py-1 text-foreground hover:text-primary transition-colors"
                >
                  <span className="text-xs tracking-[0.2em] text-primary">{c.num}</span>
                  <span className="text-sm md:text-[15px]">{c.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="space-y-16 text-muted-foreground leading-relaxed">
          {/* CAP 1 */}
          <section id="metal">
            <div className="flex items-center gap-3 mb-3">
              <Circle className="w-5 h-5 text-primary" />
              <span className="text-xs tracking-[0.28em] uppercase text-primary">Capítulo 01</span>
            </div>
            <H2>El metal, de qué está hecho el aro</H2>
            <H3>Platino</H3>
            <p>
              Blanco natural, denso y muy puro (95%). No se destiñe nunca, es hipoalergénico y ofrece el engaste más
              seguro para la piedra. En contra: es el más caro.
            </p>
            <H3>Oro blanco</H3>
            <p>
              Oro aleado y bañado en rodio para verse blanco. Da un look tipo platino a menor precio; el baño se
              renueva cada cierto tiempo.
            </p>
            <H3>Oro amarillo y oro rosa</H3>
            <p>
              Color natural, sin baños. El rosa suma cobre a la aleación. Favorece pieles cálidas y disimula tintes
              amarillos en la piedra central.
            </p>
            <Callout>
              <strong>Quilates de oro ≠ quilates de piedra.</strong> 18k = 75% oro (estándar de joyería fina),
              14k = 58% (más duro y económico), 24k es oro puro pero demasiado blando para engastar.
              El quilate del metal mide pureza; el quilate (carat) del diamante mide peso.
            </Callout>
          </section>

          {/* CAP 2 */}
          <section id="piedra">
            <div className="flex items-center gap-3 mb-3">
              <Gem className="w-5 h-5 text-primary" />
              <span className="text-xs tracking-[0.28em] uppercase text-primary">Capítulo 02</span>
            </div>
            <H2>La piedra, las 4C</H2>
            <H3>Cut / Corte</H3>
            <p>
              La talla: ángulos y proporción de facetas. Es lo que hace que la piedra encienda y la C más importante.
              Un corte excelente brilla más que una piedra más grande mal tallada.
            </p>
            <H3>Color</H3>
            <p>
              De D (incoloro, más valioso) a Z (amarillento). El punto dulce de valor está en G–H: se ven blancos y
              cuestan mucho menos.
            </p>
            <H3>Clarity / Pureza</H3>
            <p>
              Inclusiones de FL (perfecto) a I (visibles). El objetivo es que sea <em>eye-clean</em> (limpio a simple
              vista). VS1–VS2 se ve idéntico a un grado impecable.
            </p>
            <H3>Carat / Quilates</H3>
            <p>
              El peso, no el tamaño visible. Sube de forma exponencial y da saltos en números redondos (1.00 ct). Un
              0.90 se ve casi igual y cuesta menos.
            </p>
            <Callout>
              Jerarquía recomendada: <strong>corte primero</strong>, luego pureza eye-clean, después color G–H,
              y el tamaño al final con el presupuesto que quede.
            </Callout>
            <H3>Certificado</H3>
            <p>Pide siempre certificado GIA o IGI.</p>
            <H3>Los tres tipos de diamante</H3>
            <p>
              <strong className="text-foreground">Natural:</strong> formado en la tierra durante millones de años,
              máxima rareza y valor de reventa.
            </p>
            <p className="mt-2">
              <strong className="text-foreground">Cultivado en laboratorio:</strong> mismo carbono, mismo brillo y con
              certificado. Cuesta una fracción, con menor valor de reventa.
            </p>
            <p className="mt-2">
              <strong className="text-foreground">Simulantes (moissanita, circonia):</strong> imitan el look pero no
              son diamante. Otra composición y menor dureza.
            </p>
          </section>

          {/* CAP 3 */}
          <section id="formas">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-xs tracking-[0.28em] uppercase text-primary">Capítulo 03</span>
            </div>
            <H2>Las formas y su ventaja</H2>
            <div className="grid sm:grid-cols-2 gap-3 mt-4">
              {shapes.map((s) => (
                <div
                  key={s.name}
                  className="p-4 rounded-md border"
                  style={{ borderColor: "#D9D2C4", background: "#FFFFFF" }}
                >
                  <p className="font-display text-foreground text-lg">{s.name}</p>
                  <p className="text-sm mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
            <Callout>
              El redondo es el más caro por su mayor merma al tallar. Óvalo y princesa rinden más tamaño por quilate.
            </Callout>
          </section>

          {/* CAP 4 */}
          <section id="brillo">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-xs tracking-[0.28em] uppercase text-primary">Capítulo 04</span>
            </div>
            <H2>El brillo, por qué brilla</H2>
            <H3>Brillance</H3>
            <p>La luz blanca que rebota al ojo.</p>
            <H3>Fuego</H3>
            <p>Los destellos de color: la piedra actúa como un prisma.</p>
            <H3>Scintillation / Centelleo</H3>
            <p>El titileo al mover la mano.</p>
            <Callout>
              En un corte ideal la luz vuelve al ojo. En uno mal tallado se fuga por abajo y la piedra se ve apagada.
              Por eso vale un corte Excellent o Ideal.
            </Callout>
          </section>

          {/* CAP 5 */}
          <section id="engastes">
            <div className="flex items-center gap-3 mb-3">
              <Anchor className="w-5 h-5 text-primary" />
              <span className="text-xs tracking-[0.28em] uppercase text-primary">Capítulo 05</span>
            </div>
            <H2>Los engastes, cómo se sujeta la piedra</H2>
            <div className="grid sm:grid-cols-2 gap-3 mt-4">
              {settings.map((s) => (
                <div
                  key={s.name}
                  className="p-4 rounded-md border"
                  style={{ borderColor: "#D9D2C4", background: "#FFFFFF" }}
                >
                  <p className="font-display text-foreground text-lg">{s.name}</p>
                  <p className="text-sm mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CAP 6 */}
          <section id="anatomia">
            <div className="flex items-center gap-3 mb-3">
              <Layers className="w-5 h-5 text-primary" />
              <span className="text-xs tracking-[0.28em] uppercase text-primary">Capítulo 06</span>
            </div>
            <H2>Anatomía del anillo</H2>
            <H3>Partes principales</H3>
            <ul className="grid sm:grid-cols-2 gap-y-1 gap-x-6 list-disc pl-5">
              {anatomy.map((p) => (
                <li key={p} className="text-foreground/90">{p}</li>
              ))}
            </ul>
            <H3>Estilos clásicos</H3>
            <ul className="grid sm:grid-cols-2 gap-y-1 gap-x-6 list-disc pl-5">
              {styles.map((p) => (
                <li key={p} className="text-foreground/90">{p}</li>
              ))}
            </ul>
          </section>

          {/* CAP 7 */}
          <section id="color">
            <div className="flex items-center gap-3 mb-3">
              <Palette className="w-5 h-5 text-primary" />
              <span className="text-xs tracking-[0.28em] uppercase text-primary">Capítulo 07</span>
            </div>
            <H2>Piedras de color</H2>
            <p className="mb-4">
              La dureza se mide en la escala de Mohs (diamante = 10). Para uso diario, preferimos piedras de 8 o más.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b" style={{ borderColor: "#D9D2C4" }}>
                    <th className="py-2 px-3 text-left text-foreground">Piedra</th>
                    <th className="py-2 px-3 text-left text-foreground">Mohs</th>
                    <th className="py-2 px-3 text-left text-foreground">Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  {stones.map((s) => (
                    <tr key={s.name} className="border-b" style={{ borderColor: "#EDE6D8" }}>
                      <td className="py-2 px-3 text-foreground">{s.name}</td>
                      <td className="py-2 px-3">{s.mohs}</td>
                      <td className="py-2 px-3">{s.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Callout>
              Regla simple: para uso diario, dureza 8 o más. En las de color, lo que manda es el color intenso y parejo.
            </Callout>
          </section>

          {/* CAP 8 */}
          <section id="talla">
            <div className="flex items-center gap-3 mb-3">
              <Ruler className="w-5 h-5 text-primary" />
              <span className="text-xs tracking-[0.28em] uppercase text-primary">Capítulo 08</span>
            </div>
            <H2>La talla del dedo</H2>
            <H3>Método 1 — Medir un anillo que ya usa</H3>
            <p>Ideal si quieres mantener la sorpresa. Nos traes el aro y sacamos la medida exacta.</p>
            <H3>Método 2 — Hilo o papel</H3>
            <p>Envolver el dedo con un hilo o tira de papel, marcar el punto de cierre y medir en milímetros.</p>
            <H3>Método 3 — En joyería</H3>
            <p>Probamos con anillos de prueba en el showroom.</p>
            <Callout>
              Medir al final del día, con la mano tibia. Debe pasar el nudillo con leve resistencia. Ante la duda,
              mejor justo que suelto: ajustar es simple. Las bandas anchas aprietan más — considera media talla más.
            </Callout>
          </section>

          {/* CAP 9 */}
          <section id="cuidados">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="text-xs tracking-[0.28em] uppercase text-primary">Capítulo 09</span>
            </div>
            <H2>Cuidados</H2>
            <ul className="space-y-3 list-disc pl-5">
              <li>Sacar el anillo para hacer ejercicio, limpieza o jardín: golpes y químicos dañan.</li>
              <li>Ponerse el anillo después de cremas y perfumes.</li>
              <li>
                Limpieza en casa con agua tibia, jabón neutro y cepillo suave. Perlas y esmeraldas solo con paño húmedo.
              </li>
              <li>Revisión anual: apretar garras, pulir y renovar el rodio en el oro blanco.</li>
              <li>Guardar cada joya por separado: los diamantes rayan todo lo que tocan.</li>
            </ul>
          </section>

          {/* CIERRE */}
          <section>
            <div
              className="mt-6 p-8 md:p-10 rounded-lg text-center"
              style={{ background: "#1A1A18", color: "#F5EFE6" }}
            >
              <Heart className="w-6 h-6 mx-auto mb-4" style={{ color: "#C9A87C" }} />
              <p
                className="font-display text-2xl md:text-3xl leading-snug"
                style={{ color: "#F5EFE6" }}
              >
                “El mejor anillo no es el más caro — es el que ella no se quiere sacar.”
              </p>
              <p className="mt-5 text-sm md:text-base" style={{ color: "#EBE2D2" }}>
                Si quieres que te acompañemos a elegir, agendamos una asesoría personalizada, sin costo ni compromiso.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/agenda"
                  className="inline-block px-8 py-3 text-xs tracking-[0.2em] uppercase rounded-full"
                  style={{ background: "#C9A87C", color: "#1A1A18" }}
                >
                  Agendar asesoría
                </Link>
                <a
                  href={buildWhatsAppUrl("generico")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 text-xs tracking-[0.2em] uppercase rounded-full border"
                  style={{ borderColor: "#C9A87C", color: "#C9A87C" }}
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
          </section>
        </article>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  </>
);

export default GuiaDelAnillo;
