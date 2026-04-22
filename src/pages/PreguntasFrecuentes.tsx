import { Helmet } from "react-helmet-async";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "¿Cuánto demora hacer un anillo a medida?", a: "Entre 4 y 6 semanas, dependiendo de la complejidad del diseño, el tipo de piedra y los detalles que elijas. Si tienes una fecha especial, avísame con tiempo y hago lo posible por cumplir." },
  { q: "¿Puedo ver los diamantes antes de elegir?", a: "Sí. En la cita presencial te muestro las piedras disponibles, sus certificados y te explico cada detalle para que elijas con total confianza." },
  { q: "¿Qué diferencia hay entre diamante natural y de laboratorio?", a: "Ambos son diamantes reales con las mismas propiedades físicas, químicas y ópticas. La diferencia es su origen: uno viene de la tierra y el otro se crea en laboratorio. El de laboratorio es más accesible en precio, con la misma belleza y brillo." },
  { q: "¿Trabajas con oro que me traigo de herencia?", a: "Sí, hago refundición de oro. Evalúo el metal que traes, te explico el proceso y lo integro en tu nueva pieza. Es una forma hermosa de darle nueva vida a joyas con historia." },
  { q: "¿Entregan a regiones?", a: "Sí, coordino envíos asegurados a todo Chile por WhatsApp. Las piezas a pedido (anillos de compromiso y joyas custom) se entregan preferentemente en persona en Santiago." },
  { q: "¿Cómo es la Garantía por Gusto?", a: "Si no te encanta cómo quedó tu joya, la rehago. Trabajo con bocetos y muestras antes de producir para minimizar sorpresas, pero si algo no te convence, buscamos la solución juntos. Tienes 30 días desde la entrega para activar la garantía." },
  { q: "¿Cuánto cuesta un anillo de compromiso?", a: "Los anillos de compromiso parten desde $800.000 CLP aproximadamente para diseños con diamante de laboratorio, y desde $1.500.000 CLP con diamante natural certificado. El precio final depende del tamaño de la piedra, el metal y el diseño." },
  { q: "¿Cómo es el sistema de pagos?", a: "Se requiere un anticipo del 70% para comenzar el proceso de fabricación, y el 30% restante se paga contra entrega de la pieza terminada." },
  { q: "¿Qué métodos de pago aceptan?", a: "Acepto transferencia bancaria, tarjeta de crédito y débito. También trabajo con pagos en cuotas según el monto." },
  { q: "¿Puedo pagar en cuotas?", a: "Sí, ofrezco facilidades de pago. Conversemos tu caso particular y encontramos la mejor opción para ti." },
  { q: "¿Hacen entregas urgentes?", a: "En algunos casos puedo acelerar el proceso, pero depende del diseño y la disponibilidad de materiales. Escríbeme y evaluamos juntos si es posible." },
  { q: "¿Tienen descuento en argollas si hice mi anillo de compromiso con ustedes?", a: "¡Sí! Las parejas que hacen su anillo de compromiso conmigo tienen un 20% de descuento en la hechura de las argollas de matrimonio." },
  { q: "¿Qué es La Hermana?", a: "La Hermana es una réplica de tu anillo de compromiso, hecha en plata y moissanita, pensada para los días cotidianos. Viene incluida sin costo adicional con todo anillo de compromiso. Así podés usar el original para ocasiones y La Hermana para viajar, ir al gimnasio, cocinar, o simplemente para los días en que no querés llevarte el bueno. No es 100% idéntica al original — es lo más parecida posible con otros materiales — pero conserva el mismo estilo y diseño. No lleva grabado: el grabado es íntimo y va solo en el anillo original." },
  { q: "¿Tiene costo el grabado personalizado?", a: "No. Todo anillo de compromiso Gia Solari incluye un grabado personalizado gratis en el interior — nombres, fecha, una frase especial, una pequeña coordenada. El grabado va solo en el anillo original, no en La Hermana, porque creemos que esa dedicatoria es íntima y se cuida con el original." },
];

const PreguntasFrecuentes = () => (
  <>
    <SEO
      title="Preguntas Frecuentes | Gia Solari Joyas"
      description="Resolvemos las dudas más comunes sobre anillos de compromiso, diamantes, oro 18k, platino, plazos de entrega y proceso de diseño personalizado."
      path="/preguntas-frecuentes"
    />
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a,
            },
          })),
        })}
      </script>
    </Helmet>
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">FAQ</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">Preguntas Frecuentes</h1>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-foreground font-medium text-left hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  </>
);

export default PreguntasFrecuentes;
