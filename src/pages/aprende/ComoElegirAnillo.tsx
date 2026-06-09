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
      name: "¿Cómo saber la talla del anillo sin que se entere?",
      acceptedAnswer: { "@type": "Answer", text: "Puedes pedir prestado un anillo que use en el dedo anular, preguntar a su mejor amiga o mamá, o marcar la circunferencia interna en jabón. Si la talla no queda perfecta, incluimos un ajuste gratis." },
    },
    {
      "@type": "Question",
      name: "¿Qué estilo de anillo de compromiso es el más elegido?",
      acceptedAnswer: { "@type": "Answer", text: "El solitario sigue siendo el más pedido por su elegancia atemporal, seguido del halo (que hace ver la piedra más grande), tres piedras (pasado, presente y futuro) y pavé (máximo brillo)." },
    },
    {
      "@type": "Question",
      name: "¿Es mejor que el anillo sea sorpresa o elegirlo juntos?",
      acceptedAnswer: { "@type": "Answer", text: "Las dos opciones son válidas. Cada vez más parejas eligen juntos. Si quieres sorpresa total, podemos diseñarlo a partir del estilo de tu pareja sin que se entere." },
    },
  ],
};

const ComoElegirAnillo = () => (
  <>
    <SEO
      title="Cómo elegir el anillo de compromiso perfecto | Gia Solari, Santiago, Chile"
      description="Te guío paso a paso para elegir el anillo de compromiso ideal en Santiago, Chile: estilo, forma de la piedra, talla y cómo conversarlo en la primera reunión."
      path="/aprende/como-elegir-anillo-compromiso"
      type="article"
    />
    <ArticleSchema
      headline="Cómo elegir el anillo de compromiso perfecto"
      description="Guía paso a paso para elegir el anillo de compromiso ideal en Santiago, Chile."
      path="/aprende/como-elegir-anillo-compromiso"
      datePublished="2025-01-15"
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
            <Breadcrumbs items={[{ label: "Aprende", path: "/aprende" }, { label: "Cómo elegir tu anillo" }]} />
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-6">Cómo elegir el anillo de compromiso perfecto</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">Te lo cuento como te lo contaría tomándonos un café. Sin tecnicismos, paso a paso, para que la propuesta sea inolvidable.</p>

            <div className="space-y-10 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Empieza por su estilo, no por el catálogo</h2>
                <p>Antes de mirar fotos, observa qué usa ella todos los días. ¿Sus joyas son delicadas o llamativas? ¿Dorado o plateado? ¿Clásica o moderna? ¿Le gusta lo discreto o ama llamar la atención?</p>
                <p className="mt-3">El anillo correcto se parece a quien lo va a usar. Si ella nunca usa cosas grandes, un cóctel con halo enorme la va a incomodar. Si le encantan los detalles, un solitario muy minimalista puede saberle a poco.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Los estilos clásicos (y qué dice cada uno)</h2>

                <h3 className="font-display text-lg text-foreground mt-6 mb-2">Solitario</h3>
                <p>Una piedra, un mensaje. Es el más pedido por algo: nunca pasa de moda y combina con todo. Perfecto si ella es de gustos clásicos o quiere algo que pueda usar todos los días sin pensarlo.</p>

                <h3 className="font-display text-lg text-foreground mt-6 mb-2">Halo</h3>
                <p>Una piedra central rodeada de diamantes pequeños. Brilla más, hace ver la piedra más grande y queda romántico. Lo recomiendo cuando se busca presencia sin gastar todo en una piedra grande.</p>

                <h3 className="font-display text-lg text-foreground mt-6 mb-2">Tres piedras</h3>
                <p>Pasado, presente y futuro. Muy significativo. Quedan hermosos con un diamante central y dos laterales más pequeños, o con piedras de color.</p>

                <h3 className="font-display text-lg text-foreground mt-6 mb-2">Pavé</h3>
                <p>La banda llena de diamantes diminutos engastados. Máximo brillo, mucho lujo. Ideal si ella ama que el anillo se note desde lejos.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Cómo saber la talla sin que se entere</h2>
                <p>La pregunta del millón. Estas son las formas que más me funcionan en el día a día:</p>
                <p className="mt-3">• <strong className="text-foreground">Pídele prestado un anillo</strong> que use en el anular de la mano izquierda. Tráemelo y lo medimos.</p>
                <p>• <strong className="text-foreground">Pregúntale a su mejor amiga, hermana o mamá.</strong> Casi siempre saben.</p>
                <p>• <strong className="text-foreground">Marca la circunferencia interna</strong> en una barra de jabón apretando un anillo que ella use.</p>
                <p className="mt-3">Si igual la talla no queda perfecta, no te preocupes: el ajuste va incluido. Es parte del servicio, no un extra.</p>
                <p className="mt-2"><Link to="/guia-de-tallas" className="text-primary hover:underline">→ Ver guía de tallas completa</Link></p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Qué conversar en nuestra primera reunión</h2>
                <p>Cuando nos juntamos (en persona o por videollamada), me gusta saber tres cosas para empezar:</p>
                <p className="mt-3">• <strong className="text-foreground">Quién es ella.</strong> Cómo se viste, qué la enamora, qué la incomoda. Cuanto más me cuentes, mejor diseño.</p>
                <p>• <strong className="text-foreground">Cómo se imaginan el momento.</strong> ¿Sorpresa total? ¿Eligen juntos? ¿Necesitan el anillo para una fecha específica?</p>
                <p>• <strong className="text-foreground">Con qué presupuesto te sientes cómodo.</strong> No es para gastarlo todo, es para diseñar dentro de lo que tú quieras. Trabajamos con un mínimo de $1.800.000 CLP para asegurar calidad real.</p>
                <p className="mt-3">Con eso ya te puedo proponer caminos. Hacemos un boceto, conversamos materiales y avanzamos cuando estés segura.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">¿Sorpresa o elegirlo juntos?</h2>
                <p>Las dos opciones son hermosas. Cada vez más parejas eligen juntas el anillo: lo disfrutan como parte del compromiso.</p>
                <p className="mt-3">Si quieres que sea sorpresa total, agendamos una cita conmigo. Tú me cuentas todo y yo diseño basándome en su estilo. Ella no se va a enterar de nada.</p>
              </section>
            </div>

            <div className="mt-16 p-8 bg-card border border-border rounded-lg text-center">
              <h3 className="font-display text-xl text-foreground mb-3">¿Empezamos a diseñar el suyo?</h3>
              <p className="text-muted-foreground text-sm mb-4">Escríbeme por WhatsApp y conversamos sin compromiso.</p>
              <a href={buildWhatsAppUrl("generico")} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase">Cotizar por WhatsApp</a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm">
              <Link to="/aprende/cuanto-cuesta-anillo-compromiso-chile" className="text-primary hover:underline">→ ¿Cuánto cuesta un anillo en Chile?</Link>
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

export default ComoElegirAnillo;
