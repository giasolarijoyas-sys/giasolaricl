import { motion } from "framer-motion";
import { Ruler, Sparkles, RefreshCw, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const cards = [
  {
    icon: Ruler,
    title: "Ajustes incluidos",
    badge: "Sin costo, Siempre",
    items: [
      "Cambio de talla (±2 medidas) durante los primeros 3 meses",
      "Pulido profesional la primera vez",
      "Ajuste de engaste si una piedra se mueve",
    ],
  },
  {
    icon: RefreshCw,
    title: "Remake por gusto",
    badge: "30 días desde la entrega",
    intro: "Si la pieza no se siente tuya, la rehacemos con un nuevo diseño.",
    items: [
      "La hechura completa va por nuestra cuenta.",
      "Tú solo cubres la merma del metal al refundir (aprox. 10% del valor del metal original).",
      "Si el nuevo diseño requiere piedras adicionales, se cotizan aparte.",
      "Las piedras de la pieza original se reutilizan siempre que sean compatibles.",
    ],
  },
  {
    icon: Sparkles,
    title: "Cambios mayores pasado el plazo",
    badge: "Después de 30 días",
    intro:
      "Cotización nueva personalizada. Se descuenta el valor del metal a refundir (menos merma) y el valor de recuperación de las piedras originales. Nuestra mano de obra se reduce en un 30% como cortesía por ser cliente recurrente.",
    items: [],
  },
];

const GarantiaSection = () => {
  return (
    <section
      id="garantia"
      className="py-20 md:py-28"
      style={{ backgroundColor: "#FDFAF6" }}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Header */}
        <motion.div
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p
            className="text-xs uppercase mb-5"
            style={{ color: "#B8995A", letterSpacing: "0.35em" }}
          >
            Nuestra Promesa
          </p>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl mb-5"
            style={{ color: "#1A1614" }}
          >
            Garantía por Gusto
          </h2>
          <p
            className="font-display text-xl md:text-2xl italic max-w-2xl mx-auto"
            style={{ color: "#1A1614" }}
          >
            Queremos que ames tu joya de verdad.
          </p>
          <p
            className="mt-8 font-body text-base md:text-[15px] leading-relaxed mx-auto"
            style={{ color: "#6B6560", maxWidth: "680px" }}
          >
            Si al recibir tu pieza sientes que no es exactamente lo que imaginabas, te la ajustamos o reemplazamos sin costo adicional. Somos la única joyería en Chile que ofrece esta garantía.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mt-14">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-7 md:p-8 flex flex-col"
              style={{
                backgroundColor: "#F5F0E8",
                border: "1px solid #D4C5A9",
              }}
            >
              <card.icon
                className="w-6 h-6 mb-5"
                style={{ color: "#B8995A" }}
                strokeWidth={1.5}
              />
              <p
                className="text-[10px] uppercase mb-3"
                style={{ color: "#B8995A", letterSpacing: "0.25em" }}
              >
                {card.badge}
              </p>
              <h3
                className="font-display text-2xl mb-4"
                style={{ color: "#1A1614" }}
              >
                {card.title}
              </h3>
              {card.intro && (
                <p
                  className="font-body text-sm leading-relaxed mb-4"
                  style={{ color: "#1A1614" }}
                >
                  {card.intro}
                </p>
              )}
              {card.items.length > 0 && (
                <ul className="space-y-2.5 mt-1">
                  {card.items.map((it) => (
                    <li
                      key={it}
                      className="font-body text-sm leading-relaxed flex gap-2"
                      style={{ color: "#6B6560" }}
                    >
                      <span style={{ color: "#B8995A" }}>,</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Acordeón letra chica */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem
              value="detalles"
              className="border-t border-b"
              style={{ borderColor: "#D4C5A9" }}
            >
              <AccordionTrigger
                className="font-body text-sm uppercase hover:no-underline"
                style={{ color: "#1A1614", letterSpacing: "0.15em" }}
              >
                ¿Qué incluye y qué no incluye la Garantía por Gusto?
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 gap-8 pt-4 pb-2">
                  <div>
                    <p
                      className="text-[10px] uppercase mb-3"
                      style={{ color: "#B8995A", letterSpacing: "0.25em" }}
                    >
                      Incluye
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Rediseño completo de la pieza, incluyendo cambio de tipo de engaste, estilo y proporción",
                        "Reutilización de piedras originales cuando sean compatibles con el nuevo diseño",
                        "Mano de obra del nuevo diseño sin cargo adicional",
                        "Empaque nuevo sin costo",
                      ].map((it) => (
                        <li
                          key={it}
                          className="text-sm leading-relaxed flex gap-2"
                          style={{ color: "#6B6560" }}
                        >
                          <span style={{ color: "#B8995A" }}>,</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p
                      className="text-[10px] uppercase mb-3"
                      style={{ color: "#B8995A", letterSpacing: "0.25em" }}
                    >
                      No incluye
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Pérdida o daño por maltrato, golpes, químicos o pérdida de piedras por uso indebido",
                        "Piedras adicionales que el nuevo diseño requiera (se cotizan aparte)",
                        "La merma del metal al refundir (~10%), pérdida física inevitable del proceso",
                        "Cambios solicitados después del plazo de 30 días (van por Cambios Mayores)",
                      ].map((it) => (
                        <li
                          key={it}
                          className="text-sm leading-relaxed flex gap-2"
                          style={{ color: "#6B6560" }}
                        >
                          <span style={{ color: "#B8995A" }}>,</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p
                  className="text-sm pt-6 italic"
                  style={{ color: "#6B6560" }}
                >
                  Plazo de ejecución del remake: 4 a 6 semanas desde que se confirma el nuevo diseño.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="/#cotizador"
            className="inline-block px-8 py-4 text-sm uppercase transition-all hover:opacity-90"
            style={{
              backgroundColor: "#B8995A",
              color: "#FDFAF6",
              letterSpacing: "0.2em",
            }}
          >
            Cotizar mi pieza con Garantía por Gusto
          </a>
          <p
            className="mt-5 text-xs"
            style={{ color: "#6B6560", letterSpacing: "0.05em" }}
          >
            Fundada en 2019 en Santiago. Cada pieza, una conversación.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GarantiaSection;
