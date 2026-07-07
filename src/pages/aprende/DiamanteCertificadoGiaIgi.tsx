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
      name: "¿Qué significa que un diamante esté certificado GIA o IGI?",
      acceptedAnswer: { "@type": "Answer", text: "Significa que un laboratorio gemológico independiente (GIA o IGI) evaluó el diamante bajo las 4C, lo identificó con un número único y emitió un informe que respalda su calidad. Es la garantía objetiva de que estás comprando lo que te dicen." },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre GIA e IGI?",
      acceptedAnswer: { "@type": "Answer", text: "Son dos laboratorios reconocidos a nivel mundial. GIA (Estados Unidos) es el más exigente y suele usarse para diamantes naturales de mayor valor. IGI (Bélgica) es muy usado para diamantes de laboratorio y certificaciones de joyería terminada. Los dos son confiables." },
    },
    {
      "@type": "Question",
      name: "¿Vale la pena comprar un diamante sin certificación?",
      acceptedAnswer: { "@type": "Answer", text: "Para piedras pequeñas (bajo 0,2ct aproximadamente) no se justifica el costo del certificado. Para un diamante central, siempre recomendamos certificación GIA o IGI: te protege de pagar de más y asegura la inversión." },
    },
    {
      "@type": "Question",
      name: "¿Qué son las 4C del diamante?",
      acceptedAnswer: { "@type": "Answer", text: "Son los cuatro criterios que definen la calidad y el valor de un diamante: corte (cut), color, claridad (clarity) y quilates (carat). El corte es el que más influye en cuánto brilla." },
    },
  ],
};

const DiamanteCertificadoGiaIgi = () => (
  <>
    <SEO
      title="Diamante certificado GIA o IGI | Gia Solari"
      description="Te explico qué es un certificado GIA o IGI, las 4C del diamante y por qué comprar con certificación es clave en Santiago, Chile. Guía honesta de Gia Solari."
      path="/aprende/diamante-certificado-gia-igi"
      type="article"
    />
    <ArticleSchema
      headline="Diamante certificado GIA o IGI: qué significa y por qué importa"
      description="Qué es un certificado GIA o IGI, las 4C explicadas simple, y por qué comprar un diamante certificado en Chile."
      path="/aprende/diamante-certificado-gia-igi"
      datePublished="2026-06-09"
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
            <Breadcrumbs items={[{ label: "Aprende", path: "/aprende" }, { label: "Diamante certificado GIA o IGI" }]} />
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-6">Diamante certificado GIA o IGI: qué significa y por qué importa</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">Si estás pensando en comprar un anillo de compromiso, esta es una de las decisiones más importantes que vas a tomar. Te la explico simple.</p>

            <div className="space-y-10 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Qué es un diamante certificado</h2>
                <p>Un diamante certificado es uno que pasó por un laboratorio gemológico independiente. Ese laboratorio lo midió, lo evaluó bajo las 4C, lo identificó con un número único (a veces grabado en la piedra) y emitió un informe oficial.</p>
                <p className="mt-3">Es básicamente el carnet de identidad de tu diamante. Te dice exactamente qué estás llevando y respalda lo que el joyero te promete.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">GIA e IGI: las dos certificaciones que importan</h2>
                <p>De todos los laboratorios que existen, dos son los más reconocidos a nivel mundial:</p>

                <h3 className="font-display text-lg text-foreground mt-6 mb-2">GIA, Gemological Institute of America</h3>
                <p>Fundado en 1931 en Estados Unidos. Es el más antiguo y, en general, el más exigente. Es el estándar de oro para diamantes naturales, sobre todo en piedras de mayor tamaño o inversión.</p>

                <h3 className="font-display text-lg text-foreground mt-6 mb-2">IGI, International Gemological Institute</h3>
                <p>Con sede en Amberes, Bélgica (la capital mundial del diamante). Es ampliamente usado para diamantes de laboratorio y para certificar joyería terminada. Confiable y reconocido en todo el mundo.</p>

                <p className="mt-4">Los dos son válidos. Si te ofrecen un diamante con certificado de otro laboratorio menos conocido, prefiero que me lo muestres antes de avanzar: hay laboratorios que son más "blandos" calificando y eso puede inflar el valor en papel.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Las 4C, explicadas simple</h2>
                <p>El certificado evalúa el diamante en cuatro dimensiones. Te las cuento como se las cuento a mis clientes en el showroom:</p>

                <h3 className="font-display text-lg text-foreground mt-6 mb-2">1. Corte (Cut)</h3>
                <p>Es cuánto brilla. Para mí, el más importante. Un diamante con corte excelente devuelve la luz como un espejo; uno mal cortado se ve apagado aunque sea grande y limpio. Mi recomendación: nunca bajes de "Very Good".</p>

                <h3 className="font-display text-lg text-foreground mt-6 mb-2">2. Color</h3>
                <p>Va de la letra D (totalmente incoloro) a Z (con tono amarillento visible). En montaje, un G o H se ve blanco a simple vista y cuesta bastante menos que un D-F. Buen punto de equilibrio.</p>

                <h3 className="font-display text-lg text-foreground mt-6 mb-2">3. Claridad (Clarity)</h3>
                <p>Mide cuántas inclusiones naturales tiene la piedra. Casi todos los diamantes tienen alguna; lo importante es si se ven o no a simple vista. Un VS2 o SI1 es invisible al ojo y rinde muy bien el presupuesto.</p>

                <h3 className="font-display text-lg text-foreground mt-6 mb-2">4. Quilates (Carat)</h3>
                <p>Es el peso del diamante. A más peso, más raro y más valioso, pero la relación no es lineal: un 0,90ct se ve casi idéntico a un 1,00ct y cuesta bastante menos.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Comprar con certificado vs sin certificado</h2>
                <p>Te resumo lo que veo todos los días:</p>
                <p className="mt-3">• <strong className="text-foreground">Con certificado GIA o IGI:</strong> sabes exactamente qué tienes, puedes comparar manzanas con manzanas, y tu pieza mantiene valor en el tiempo. Si algún día quisieras venderla o asegurarla, el certificado es lo primero que te van a pedir.</p>
                <p className="mt-2">• <strong className="text-foreground">Sin certificado:</strong> dependes 100% de lo que te diga el vendedor. Para un diamante central de un anillo de compromiso, no lo recomiendo. Es mucho dinero para confiar a ciegas.</p>
                <p className="mt-3">Para piedras muy pequeñas (las laterales de un pavé, por ejemplo), el costo del certificado no se justifica y trabajamos con piedras seleccionadas en taller. Eso es estándar en joyería y está bien.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Qué hacemos en Gia Solari</h2>
                <p>Cuando me dices que quieres un diamante para tu anillo, te muestro el certificado antes de avanzar. Lo revisamos juntos, te explico cada dato y te ayudo a elegir el equilibrio correcto entre las 4C según tu presupuesto y el diseño que tienes en mente.</p>
                <p className="mt-3">No tienes que ser experta. Para eso estoy yo.</p>
              </section>
            </div>

            <div className="mt-16 p-8 bg-card border border-border rounded-lg text-center">
              <h3 className="font-display text-xl text-foreground mb-3">¿Quieres ver diamantes certificados?</h3>
              <p className="text-muted-foreground text-sm mb-4">Escríbeme por WhatsApp y te muestro opciones reales según tu proyecto.</p>
              <a href={buildWhatsAppUrl("generico")} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase">Cotizar por WhatsApp</a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm">
              <Link to="/aprende/como-elegir-anillo-compromiso" className="text-primary hover:underline">→ Cómo elegir tu anillo</Link>
              <Link to="/aprende/cuanto-cuesta-anillo-compromiso-chile" className="text-primary hover:underline">→ ¿Cuánto cuesta un anillo en Chile?</Link>
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

export default DiamanteCertificadoGiaIgi;
