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
      "Las cotizaciones tienen validez de 10 días corridos desde que la recibes. El precio del oro y las piedras varía constantemente, por eso no podemos mantenerla por más tiempo. Si ya pasaron los 10 días, escríbenos y la actualizamos sin problema.",
  },
  {
    question: "¿Puedo cambiar la talla después?",
    answer:
      "Sí. Hacemos un ajuste de talla sin costo, siempre que el cambio sea de hasta 2 tallas hacia arriba o hacia abajo. Cambios mayores requieren rehacer la pieza, lo que tiene un costo adicional que evaluamos según el diseño.",
  },
  {
    question: "¿Qué pasa si no me gusta cómo quedó?",
    answer:
      "Trabajamos con renders y muestras antes de producir, para que sepas exactamente cómo va a quedar tu joya antes de hacerla. Si al recibirla algo no te convence, lo conversamos y buscamos la mejor solución juntas.",
  },
  {
    question: "¿Hacen envíos?",
    answer:
      "Las piezas a pedido — anillos de compromiso y joyas custom — se entregan en persona en Santiago. Para productos de stock disponibles, coordinamos el envío a todo Chile por WhatsApp.",
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
