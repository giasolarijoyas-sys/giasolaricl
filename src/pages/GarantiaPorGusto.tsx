import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { ShieldCheck, RefreshCw, Ruler, MessageCircle, Quote } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  { icon: ShieldCheck, title: "¿Qué cubre?", desc: "Si no te encanta el resultado final de tu joya, la rehacemos. Esto aplica a joyas diseñadas y fabricadas por Gia Solari." },
  { icon: RefreshCw, title: "Plazo", desc: "Tienes 30 días desde la entrega para comunicarnos cualquier inconformidad. Nos ponemos en contacto contigo para evaluar la mejor solución." },
  { icon: Ruler, title: "Cambio de talla gratis", desc: "Incluimos un ajuste de talla sin costo (hasta 2 tallas arriba o abajo) durante los primeros 3 meses." },
  { icon: MessageCircle, title: "Ajuste de diseño", desc: "Si algún detalle del diseño no te convence, lo conversamos y buscamos la mejor solución juntas. Tu satisfacción es nuestra prioridad." },
];

const faqs = [
  {
    q: "¿Qué cubre exactamente la Garantía por Gusto?",
    a: "Cubre el rediseño completo de tu pieza si al recibirla no se siente tuya: el estilo, la proporción, un detalle del engaste o la silueta general. Reutilizamos las piedras originales siempre que sean compatibles y la mano de obra del nuevo diseño va por nuestra cuenta. Solo cubrís la merma del metal al refundir (aproximadamente 10% del valor del metal original) y, si el nuevo diseño requiere piedras adicionales, se cotizan aparte.",
  },
  {
    q: "¿Cuánto tiempo tengo para decidir si no me gusta?",
    a: "Tenés 30 días corridos desde el día que recibís la pieza. Sabemos que una joya se conoce de verdad usándola: viéndola con distintas luces, combinándola con tu ropa, mostrándola a la gente que querés. Por eso te damos un mes entero, sin apuro, para confirmar que es exactamente la pieza que imaginaste.",
  },
  {
    q: "¿Cómo funciona el proceso de cambio o devolución?",
    a: "Nos escribís por WhatsApp o email contando qué no te convence. Coordinamos una reunión (presencial o por videollamada) para conversar el rediseño y mostrarte opciones. Una vez que aprobás el nuevo boceto, comenzamos la fabricación. El plazo de ejecución del remake es de 4 a 6 semanas desde que se confirma el nuevo diseño.",
  },
  {
    q: "¿Aplica también a piezas hechas a medida?",
    a: "Sí, justamente para esas. La Garantía por Gusto fue pensada para nuestras piezas custom, anillos de compromiso y joyería de autor diseñada y fabricada por nosotras. Es nuestra forma de decirte: confiá en el proceso, porque si algo no resulta como lo soñaste, lo arreglamos juntas.",
  },
  {
    q: "¿Qué pasa si quiero modificar la pieza en vez de devolverla?",
    a: "Es lo más común y lo que más nos gusta hacer. Si querés cambiar el tipo de engaste, ajustar la proporción, sumar un detalle o cambiar la silueta, lo conversamos y rediseñamos sobre la pieza original. La idea es que termines con una joya que de verdad te enamore, no que te quedes con algo que no usás.",
  },
];

const GarantiaPorGusto = () => (
  <>
    <SEO
      title="Garantía por Gusto | Gia Solari"
      description="Si no te encanta, te ayudamos a modificarla o devolverla. Nuestra garantía por gusto te da tranquilidad al invertir en tu joya."
      path="/garantia-por-gusto"
    />
    <div className="min-h-screen">
      <Navbar />

      {/* Hero + Intro */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Compromiso</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">Garantía por Gusto</h1>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto italic font-display text-lg">Si no te encanta, lo cambiamos. Así de simple.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-[17px] mb-12"
          >
            <p>
              La Garantía por Gusto nace de algo simple: creemos que una joya que vas a usar toda la vida tiene que empezar por gustarte de verdad. No la mitad. No "está bonita". Tiene que enamorarte. Y como diseñar una pieza de autor es un proceso íntimo, donde a veces lo que imaginás y lo que terminás recibiendo necesitan un último ajuste, te damos espacio real para confirmarlo.
            </p>
            <p>
              No somos una joyería industrial que produce en masa y se desentiende. Cada pieza que sale del taller es una conversación que tuvimos con vos, y queremos que esa conversación termine bien. Por eso, si al recibirla algo no se siente tuyo, la rehacemos. No es un favor ni una excepción: es parte de cómo trabajamos. Tu tranquilidad es la base de nuestra relación.
            </p>
          </motion.div>

          {/* Cards de qué incluye */}
          <div className="space-y-6">
            {items.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4 p-6 bg-card border border-border rounded-lg">
                <item.icon className="w-7 h-7 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Preguntas frecuentes</p>
            <h2 className="text-3xl md:text-4xl font-display text-foreground">Lo que solés preguntarnos</h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-foreground font-medium text-left hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Quote className="w-10 h-10 text-primary mx-auto mb-6" strokeWidth={1.2} />
            <blockquote className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed mb-6">
              "Pedí un cambio y me lo resolvieron en días. Nunca me sentí presionada."
            </blockquote>
            <p className="text-muted-foreground tracking-[0.2em] uppercase text-xs">
              Camila R. · Las Condes
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">
              ¿Tenés dudas sobre tu pieza?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Escribinos por WhatsApp y conversamos. Sin compromiso, sin apuro.
            </p>
            <a
              href="https://wa.me/56984049502?text=Hola%20Gia%2C%20quiero%20conversar%20sobre%20mi%20pieza%20y%20la%20Garant%C3%ADa%20por%20Gusto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-sm uppercase tracking-[0.2em] bg-primary text-primary-foreground hover:opacity-90 transition-opacity rounded-md"
            >
              Conversemos sobre tu pieza
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  </>
);

export default GarantiaPorGusto;
