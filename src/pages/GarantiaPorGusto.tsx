import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { ShieldCheck, RefreshCw, Ruler, MessageCircle, Quote, Gift, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  { icon: ShieldCheck, title: "¿Qué cubre?", desc: "Si no te fascina el resultado final, la rehago sin costo usando tu mismo metal y tus mismas piedras. Si quieres sumar piedras o subir de material, se puede pagando solo esa diferencia. Incluye ajuste de talla." },
  { icon: RefreshCw, title: "Plazo", desc: "Tienes 30 días desde la entrega para comunicarnos cualquier inconformidad. Nos ponemos en contacto contigo para evaluar la mejor solución." },
  { icon: Ruler, title: "Cambio de talla gratis", desc: "Incluimos un ajuste de talla sin costo (hasta 2 tallas arriba o abajo) durante los primeros 3 meses." },
  { icon: MessageCircle, title: "Ajuste de diseño", desc: "Si algún detalle del diseño no te convence, lo conversamos y buscamos la mejor solución juntas. Tu satisfacción es nuestra prioridad." },
];


const faqs = [
  {
    q: "¿Qué cubre exactamente la Garantía por Gusto?",
    a: "Cubre el rediseño completo de tu pieza si al recibirla no se siente tuya: el estilo, la proporción, un detalle del engaste o la silueta general. Reutilizamos las piedras originales siempre que sean compatibles y la mano de obra del nuevo diseño va por nuestra cuenta. Solo cubres la merma del metal al refundir (aproximadamente 10% del valor del metal original) y, si el nuevo diseño requiere piedras adicionales, se cotizan aparte.",
  },
  {
    q: "¿Cuánto tiempo tengo para decidir si no me gusta?",
    a: "Tienes 30 días corridos desde el día que recibes la pieza. Sabemos que una joya se conoce de verdad usándola: viéndola con distintas luces, combinándola con tu ropa, mostrándola a la gente que quieres. Por eso te damos un mes entero, sin apuro, para confirmar que es exactamente la pieza que imaginaste.",
  },
  {
    q: "¿Cómo funciona el proceso de cambio o devolución?",
    a: "Nos escribes por WhatsApp o email contando qué no te convence. Coordinamos una reunión (presencial o por videollamada) para conversar el rediseño y mostrarte opciones. Una vez que apruebas el nuevo boceto, comenzamos la fabricación. El plazo de ejecución del remake es de 4 a 6 semanas desde que se confirma el nuevo diseño.",
  },
  {
    q: "¿Aplica también a piezas hechas a medida?",
    a: "Sí, justamente para esas. La Garantía por Gusto fue pensada para mis piezas custom, anillos de compromiso y joyería de autor diseñada y fabricada por mí. Es mi forma de decirte: confía en el proceso, porque si algo no resulta como lo soñaste, lo arreglamos juntas.",
  },
  {
    q: "¿Qué pasa si quiero modificar la pieza en vez de devolverla?",
    a: "Es lo más común y lo que más nos gusta hacer. Si quieres cambiar el tipo de engaste, ajustar la proporción, sumar un detalle o cambiar la silueta, lo conversamos y rediseñamos sobre la pieza original. La idea es que termines con una joya que de verdad te fascine, no que te quedes con algo que no usas.",
  },
];

const GarantiaPorGusto = () => (
  <>
    <SEO
      title="Garantía por Gusto y certificación | Gia Solari"
      description="Si no te fascina tu joya, la rehacemos. Garantía por Gusto, certificación Gia Solari y diamantes con certificado GIA opcional. Tranquilidad para invertir."
      path="/garantia-por-gusto"
    />
    <div className="min-h-screen">
      <Navbar />

      {/* Hero + Intro */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Compromiso</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">Garantía por Gusto</h1>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto italic font-display text-lg">Si no te fascina, lo cambiamos. Así de simple.</p>
          </motion.div>

          <motion.div
            className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-[17px] mb-12"
          >
            <p>
              La Garantía por Gusto nace de algo simple: creemos que una joya que vas a usar toda la vida tiene que empezar por fascinarte de verdad. No la mitad. No "está bonita". Tiene que fascinarte. Y como diseñar una pieza de autor es un proceso íntimo, donde a veces lo que imaginas y lo que terminas recibiendo necesitan un último ajuste, te damos espacio real para confirmarlo.
            </p>
            <p>
              No somos una joyería industrial que produce en masa y se desentiende. Cada pieza que sale del taller es una conversación que tuvimos contigo, y queremos que esa conversación termine bien. Por eso, si al recibirla algo no se siente tuyo, la rehacemos. No es un favor ni una excepción: es parte de cómo trabajamos. Tu tranquilidad es la base de nuestra relación.
            </p>
          </motion.div>

          {/* Cards de qué incluye */}
          <div className="space-y-6">
            {items.map((item, i) => (
              <motion.div key={item.title} transition={{ delay: i * 0.1 }} className="flex gap-4 p-6 bg-card border border-border rounded-lg">
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

      {/* Origen — historia real de Maca */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#F5F0E8" }}>
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <p
              className="text-xs uppercase mb-4"
              style={{ color: "#B8995A", letterSpacing: "0.3em" }}
            >
              Origen
            </p>
            <h2
              className="font-display text-3xl md:text-4xl"
              style={{ color: "#1A1614" }}
            >
              Por qué existe esta garantía
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative px-8 py-10 md:px-14 md:py-14"
            style={{
              backgroundColor: "#FDFAF6",
              border: "1px solid #D4C5A9",
              borderLeft: "3px solid #B8995A",
            }}
          >
            <Heart
              className="w-5 h-5 mb-6"
              style={{ color: "#B8995A" }}
              strokeWidth={1.5}
            />
            <blockquote
              className="font-display italic text-lg md:text-xl leading-relaxed mb-8"
              style={{ color: "#1A1614" }}
            >
              La Garantía por Gusto nació de algo que viví. A mí me encantan los detalles y lo vintage, soy exigente. Cuando mi marido diseñó mi anillo de compromiso, preguntó en las joyerías de aquí y ninguna le daba solución si algo hecho a medida no me gustaba. Para asegurarse, lo mandó a hacer a Estados Unidos. Nadie debería tener que hacer eso para quedarse tranquilo. Por eso, en Gia Solari, si no te fascina, lo rediseñamos. Aquí, conmigo.
            </blockquote>
            <p
              className="text-xs uppercase tracking-[0.25em]"
              style={{ color: "#B8995A" }}
            >
              Maca, Gia Solari
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div className="text-center mb-10">
            <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Preguntas frecuentes</p>
            <h2 className="text-3xl md:text-4xl font-display text-foreground">Lo que sueles preguntarnos</h2>
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
            className="text-center"
          >
            <Quote className="w-10 h-10 text-primary mx-auto mb-6" strokeWidth={1.2} />
            <blockquote className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed mb-6">
              "Pedí un cambio y me lo resolvieron en días. Nunca me sentí presionada."
            </blockquote>
            <p className="text-muted-foreground tracking-[0.2em] uppercase text-xs">
              Camila R., Vitacura
            </p>
          </motion.div>
        </div>
      </section>

      {/* Además incluye */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="text-center mb-8">
            <p className="text-primary tracking-[0.3em] uppercase text-xs mb-3">Además</p>
            <h2 className="font-display text-2xl md:text-3xl text-foreground">
              Todo anillo de compromiso incluye
            </h2>
          </div>
          <div className="grid md:grid-cols-1 gap-4">
            <div className="flex gap-4 p-6 bg-card border border-border rounded-lg">
              <Gift className="w-6 h-6 text-primary shrink-0 mt-1" strokeWidth={1.4} />
              <div>
                <h3 className="font-display text-lg text-foreground mb-1">Grabado personalizado</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Gratis, en el interior del anillo. Nombres, fecha o frase especial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl text-center">
          <motion.div>
            <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">
              ¿Tienes dudas sobre tu pieza?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Escríbenos por WhatsApp y conversamos. Sin compromiso, sin apuro.
            </p>
            <a
              href={buildWhatsAppUrl("garantia")}
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
