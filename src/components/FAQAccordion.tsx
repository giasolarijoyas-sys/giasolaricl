import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Por cuánto tiempo es válida la cotización?",
    answer:
      "La cotización es válida por 15 días. Los precios del oro y las piedras fluctúan, así que si pasa ese tiempo te mando una cotización actualizada. Generalmente la diferencia es mínima.",
  },
  {
    question: "¿Puedo cambiar la talla después?",
    answer:
      "Sí, el ajuste de talla está incluido dentro de la Garantía por Gusto durante los primeros 30 días. Después del primer año también lo hacemos, con un costo de gestión según el trabajo que requiera.",
  },
  {
    question: "¿Qué pasa si no me gusta cómo quedó?",
    answer:
      "La rediseñamos. Eso es exactamente la Garantía por Gusto. Si dentro de los 30 días siguientes a la entrega no te fascina, la rehago usando tu mismo metal y tus mismas piedras, sin costo. En promedio el rediseño demora entre 2 y 4 semanas, igual que la pieza original.",
  },
  {
    question: "¿Hacen envíos?",
    answer:
      "Sí. Enviamos a todo Chile con despacho asegurado y seguimiento. También podemos coordinar envíos internacionales. Escríbeme por WhatsApp y lo vemos caso a caso.",
  },
  {
    question: "¿Cómo puedo pagar?",
    answer:
      "Transferencia bancaria, tarjeta de crédito o débito, y cuotas sin interés con tarjetas seleccionadas. También trabajo con anticipo del 50% al confirmar el encargo y el saldo al momento de la entrega.",
  },
];

const FAQAccordion = () => {
  return (
    <section id="faq-terminos" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <motion.div
          className="text-center mb-12"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
            Preguntas frecuentes
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
            Lo que debes saber{" "}
            <em className="text-primary not-italic">antes de cotizar</em>
          </h2>
        </motion.div>

        <motion.div
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-foreground font-medium text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQAccordion;
