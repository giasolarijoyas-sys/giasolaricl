import SEO from "@/components/SEO";
import ArticleSchema from "@/components/ArticleSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ArgollasMatrimonio = () => (
  <>
    <SEO
      title="Argollas de matrimonio personalizadas en Chile, Gia Solari"
      description="Argollas de matrimonio hechas a mano en Santiago: oro 18k, platino, con o sin diamantes. Diseño a medida, garantía Gia Solari."
      path="/aprende/argollas-matrimonio-personalizadas"
      type="article"
    />
    <ArticleSchema
      headline="Argollas de matrimonio personalizadas en Chile"
      description="Guía completa de argollas a medida: metales, anchos, perfiles, detalles y proceso."
      path="/aprende/argollas-matrimonio-personalizadas"
      datePublished="2026-05-09"
      dateModified="2026-05-09"
    />
    <div className="min-h-screen">
      <Navbar />
      <article className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-[700px]">
          <motion.div animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs items={[{ label: "Aprende", path: "/aprende" }, { label: "Argollas de matrimonio" }]} />
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-6">Argollas de matrimonio personalizadas</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">Las van a usar todos los días, el resto de su vida. Tiene sentido que sean exactamente como las soñaron.</p>

            <div className="space-y-10 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">A medida vs catálogo</h2>
                <p>Una argolla de marca está pensada para gustarle a muchas personas. Una a medida está pensada para ustedes dos.</p>
                <p className="mt-3">La diferencia se nota en el calce, en el peso, en los detalles que solo ustedes entienden y, sobre todo, en la posibilidad de tener algo que nadie más tiene exactamente igual.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Opciones de metal</h2>
                <h3 className="font-display text-lg text-foreground mt-6 mb-2">Oro 18k</h3>
                <p>Disponible en amarillo, blanco y rosado. Cálido, resistente y con buena variedad de tonos. El blanco lleva baño de rodio que se renueva cada 1–2 años.</p>
                <h3 className="font-display text-lg text-foreground mt-6 mb-2">Platino</h3>
                <p>Naturalmente blanco, hipoalergénico, más denso y duradero. No pierde material con el uso, solo se pule. Es nuestra recomendación cuando queremos algo que dure varias generaciones.</p>
                <h3 className="font-display text-lg text-foreground mt-6 mb-2">Combinaciones</h3>
                <p>También se pueden hacer argollas en dos tonos (amarillo + blanco, oro + platino), con bordes contrastantes o detalles internos. Las posibilidades son enormes.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Ancho, perfil y textura</h2>
                <p>Tres decisiones que cambian completamente cómo se ve y se siente una argolla:</p>
                <h3 className="font-display text-lg text-foreground mt-6 mb-2">Ancho</h3>
                <p>De 2 mm (delicado, femenino) a 6 mm o más (robusto, masculino). No tienen que ser iguales: muchas parejas eligen anchos distintos.</p>
                <h3 className="font-display text-lg text-foreground mt-6 mb-2">Perfil</h3>
                <p>Plano (moderno), media caña (clásico, cómodo), confort (curvo por dentro, ideal para dedos sensibles), cuadrado (arquitectónico).</p>
                <h3 className="font-display text-lg text-foreground mt-6 mb-2">Textura</h3>
                <p>Brillo espejo, mate satinado, martillado, cepillado. La textura cambia toda la personalidad de la pieza.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Detalles que marcan la diferencia</h2>
                <p>Estos son los agregados más pedidos:</p>
                <p className="mt-2"><strong className="text-foreground">Cinco diamantes:</strong> cinco diamantes pequeños alineados en la cara superior. Sutil y especial.</p>
                <p className="mt-2"><strong className="text-foreground">Eternity:</strong> diamantes recorriendo toda la circunferencia. Para una de las dos o las dos.</p>
                <p className="mt-2"><strong className="text-foreground">Milgrain:</strong> borde con punteado fino. Acabado vintage, muy elegante.</p>
                <p className="mt-2"><strong className="text-foreground">Doble tono:</strong> exterior en un metal, interior en otro. Detalle escondido, solo para ustedes.</p>
                <p className="mt-2"><strong className="text-foreground">Mate con borde brillante:</strong> contraste moderno entre cuerpo mate y filos pulidos.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Grabados internos</h2>
                <p>Casi todas las parejas eligen grabar algo en el interior: la fecha, los nombres, una palabra, una frase corta, coordenadas, una letra a mano.</p>
                <p className="mt-3">El grabado es gratis y se conversa al momento del diseño. Lo hacemos a máquina (preciso) o a mano (con carácter, más personal).</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Proceso de pedido</h2>
                <p>Así trabajamos las argollas:</p>
                <p className="mt-2"><strong className="text-foreground">1. Cita inicial</strong> (30 min): conversamos preferencias, vemos ejemplos, tomamos tallas.</p>
                <p className="mt-2"><strong className="text-foreground">2. Boceto y cotización:</strong> les enviamos un boceto y el detalle del precio.</p>
                <p className="mt-2"><strong className="text-foreground">3. Confirmación:</strong> con el 70% de abono empezamos a fabricar.</p>
                <p className="mt-2"><strong className="text-foreground">4. Fabricación:</strong> 3 a 5 semanas, hechas a mano en Santiago.</p>
                <p className="mt-2"><strong className="text-foreground">5. Entrega:</strong> pago del 30% restante, ajuste de talla incluido y garantía Gia Solari.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Plazos y precios</h2>
                <p>El plazo estándar es <strong className="text-foreground">4 semanas</strong> desde la confirmación. En temporada alta (octubre a febrero) puede subir a 6 semanas, así que conviene empezar con tiempo.</p>
                <p className="mt-3">El rango de precios va desde $1.200.000 CLP el par en oro 18k liso, hasta varios millones cuando incluimos diamantes o platino. Cada cotización es personalizada.</p>
              </section>
            </div>

            <div className="mt-16 p-8 bg-card border border-border rounded-lg text-center">
              <h3 className="font-display text-xl text-foreground mb-3">¿Listos para diseñar las suyas?</h3>
              <p className="text-muted-foreground text-sm mb-4">Cotiza tus argollas en 3 pasos simples.</p>
              <Link to="/cotizar" className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase">Cotizar argollas</Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm">
              <Link to="/aprende/oro-vs-platino" className="text-primary hover:underline">→ Oro 18k vs Platino</Link>
              <Link to="/aprende/cuanto-cuesta-anillo-compromiso-chile" className="text-primary hover:underline">→ Cuánto cuesta un anillo</Link>
            </div>
          </motion.div>
        </div>
      </article>
      <Footer />
      <WhatsAppButton />
    </div>
  </>
);

export default ArgollasMatrimonio;
