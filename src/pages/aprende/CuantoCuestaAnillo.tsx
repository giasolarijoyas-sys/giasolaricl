import SEO from "@/components/SEO";
import ArticleSchema from "@/components/ArticleSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Link } from "react-router-dom";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué define el precio de un anillo de compromiso en Chile?",
      acceptedAnswer: { "@type": "Answer", text: "El tipo y tamaño del diamante o piedra central, el metal (oro 18k o platino), la complejidad del diseño y la mano de obra. Cada pieza se cotiza según el proyecto." },
    },
    {
      "@type": "Question",
      name: "¿Conviene hacer un anillo a medida en Santiago?",
      acceptedAnswer: { "@type": "Answer", text: "Sí. Un anillo a medida se ajusta a la persona, al presupuesto y a la historia detrás. No pagas por una marca, pagas por una pieza pensada para ella." },
    },
    {
      "@type": "Question",
      name: "¿Es mejor oro 18k o platino?",
      acceptedAnswer: { "@type": "Answer", text: "Depende del estilo y del uso. El oro 18k es cálido y más liviano; el platino es más denso, blanco puro y resistente. Conversemos cuál te acomoda." },
    },
  ],
};

const CuantoCuestaAnillo = () => (
  <>
    <SEO
      title="¿Cuánto cuesta un anillo de compromiso en Chile? | Gia Solari Santiago"
      description="Te cuento qué factores definen el precio de un anillo de compromiso en Santiago, Chile: diamante, quilataje, metal y diseño. Cada pieza se cotiza a medida."
      path="/aprende/cuanto-cuesta-anillo-compromiso-chile"
      type="article"
    />
    <ArticleSchema
      headline="¿Cuánto cuesta un anillo de compromiso en Chile?"
      description="Qué define el precio de un anillo de compromiso en Chile y por qué un anillo a medida vale la pena."
      path="/aprende/cuanto-cuesta-anillo-compromiso-chile"
      datePublished="2026-05-09"
      dateModified="2026-06-09"
    />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
    </Helmet>
    <div className="min-h-screen">
      <Navbar />
      <article className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-[700px]">
          <motion.div animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs items={[{ label: "Aprende", path: "/aprende" }, { label: "Cuánto cuesta un anillo" }]} />
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-6">¿Cuánto cuesta un anillo de compromiso en Chile?</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">Una pregunta que me hacen todos los días. Te la respondo honesta, sin cifras al aire, porque cada anillo se cotiza según el proyecto.</p>

            <div className="space-y-10 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Por qué no doy un número en internet</h2>
                <p>Porque no sería honesto. Dos anillos que se ven parecidos pueden valer muy distinto. El precio depende de la piedra que elijas, del metal, del diseño y de cuánta mano de obra lleva. Por eso prefiero conversarlo contigo y armar una cotización real para tu pieza.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Lo que sí influye en el precio</h2>

                <h3 className="font-display text-lg text-foreground mt-6 mb-2">1. El diamante o piedra central</h3>
                <p>Es lo que más mueve la aguja. No solo importa el tamaño en quilates: el corte (cómo brilla), el color y la claridad cambian el valor de la piedra. Un diamante certificado natural no es lo mismo que uno de laboratorio, y los dos son hermosos por razones distintas.</p>

                <h3 className="font-display text-lg text-foreground mt-6 mb-2">2. El metal: oro 18k o platino</h3>
                <p>El oro 18k es cálido, versátil y más liviano. El platino es más denso, blanco puro y muy resistente, ideal si quieres una pieza para toda la vida sin retoques de color. El platino suele ser más caro por gramo, y también más noble.</p>

                <h3 className="font-display text-lg text-foreground mt-6 mb-2">3. El diseño</h3>
                <p>Un solitario limpio lleva menos horas de taller que un halo con pavé, un engaste tipo bezel o un diseño art decó con detalles tallados. Mientras más artesanía, más tiempo y, por lo tanto, más inversión.</p>

                <h3 className="font-display text-lg text-foreground mt-6 mb-2">4. La mano de obra</h3>
                <p>En Gia Solari trabajamos con maestros joyeros aquí en Santiago. Cada pieza se hace a mano, pensada para una persona en particular. No es lo mismo que un anillo de catálogo importado, y eso se nota cuando lo tienes en la mano.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Por qué un anillo a medida vale la pena</h2>
                <p>Un anillo de compromiso lo vas a usar todos los días, por mucho tiempo. Cuando lo haces a medida pasan tres cosas que no pasan con una pieza estándar:</p>
                <p className="mt-3">• <strong className="text-foreground">Se ajusta a tu presupuesto real.</strong> No tienes que estirarte para pagar algo prediseñado: conversamos qué priorizar (tamaño de la piedra, metal, diseño) según lo que te acomode.</p>
                <p>• <strong className="text-foreground">Es una pieza única.</strong> Nadie más va a tener el mismo anillo. Lleva tu historia, no la de una marca.</p>
                <p>• <strong className="text-foreground">Lo conoces por dentro.</strong> Vemos juntas la piedra, el metal, el certificado. Sabes exactamente qué llevas en el dedo.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Cómo armar tu presupuesto</h2>
                <p>Mi consejo: parte al revés. Decide cuánto te sientes cómodo invirtiendo, sin endeudarte para empezar tu matrimonio. Con ese monto, construimos juntos la mejor pieza posible. Mover una palanca (cambiar el tipo de diamante, el metal o el diseño) puede cambiar el valor final bastante. Por eso vale la pena conversarlo.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Lo que incluye nuestra cotización</h2>
                <p>Cuando te paso un presupuesto en Gia Solari, ahí va todo:</p>
                <p className="mt-2">• Diseño personalizado conversado contigo.</p>
                <p>• Boceto antes de avanzar (no rendering 3D, dibujo de verdad).</p>
                <p>• Materiales certificados (oro, platino, diamantes).</p>
                <p>• Ajuste de talla incluido.</p>
                <p>• Garantía por gusto: si no te fascina cuando lo ves, lo arreglamos.</p>
              </section>
            </div>

            <div className="mt-16 p-8 bg-card border border-border rounded-lg text-center">
              <h3 className="font-display text-xl text-foreground mb-3">¿Quieres cotizar tu anillo?</h3>
              <p className="text-muted-foreground text-sm mb-4">Cuéntame por WhatsApp qué tienes en mente y armamos una propuesta para ti.</p>
              <a href={buildWhatsAppUrl("generico")} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase">Cotizar por WhatsApp</a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm">
              <Link to="/aprende/como-elegir-anillo-compromiso" className="text-primary hover:underline">→ Cómo elegir tu anillo</Link>
              <Link to="/aprende/diamante-certificado-gia-igi" className="text-primary hover:underline">→ Diamante certificado GIA o IGI</Link>
              <Link to="/aprende/oro-vs-platino" className="text-primary hover:underline">→ Oro 18k vs Platino</Link>
            </div>
          </motion.div>
        </div>
      </article>
      <Footer />
      <WhatsAppButton />
    </div>
  </>
);

export default CuantoCuestaAnillo;
