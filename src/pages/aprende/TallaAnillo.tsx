import SEO from "@/components/SEO";
import ArticleSchema from "@/components/ArticleSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const WA_PLANTILLA = buildWhatsAppUrl("generico", {
  custom: "Hola Maca, ¿me puedes enviar la plantilla para medir mi talla de anillo?",
});
const WA_CITA = buildWhatsAppUrl("agenda");

const tabla = [
  { mm: "14,9", cl: "6", us: "4", uk: "H" },
  { mm: "15,3", cl: "7", us: "4,5", uk: "I" },
  { mm: "15,7", cl: "9", us: "5", uk: "J" },
  { mm: "16,1", cl: "10", us: "5,5", uk: "K" },
  { mm: "16,5", cl: "12", us: "6", uk: "L" },
  { mm: "16,9", cl: "13", us: "6,5", uk: "M" },
  { mm: "17,3", cl: "14", us: "7", uk: "N" },
  { mm: "17,7", cl: "15", us: "7,5", uk: "O" },
  { mm: "18,1", cl: "16", us: "8", uk: "P" },
  { mm: "18,5", cl: "17", us: "8,5", uk: "Q" },
  { mm: "18,9", cl: "18", us: "9", uk: "R" },
  { mm: "19,4", cl: "19", us: "9,5", uk: "S" },
];

const TallaAnillo = () => (
  <>
    <SEO
      title="¿Cómo saber tu talla de anillo? Guía para medir en casa, Gia Solari"
      description="Aprende a medir tu talla de anillo en casa con tres métodos simples. Tabla de equivalencias Chile, USA y UK incluida. Joyería de autor Gia Solari."
      path="/aprende/talla-anillo"
      type="article"
    />
    <ArticleSchema
      headline="¿Cómo saber tu talla de anillo?"
      description="Guía simple para medir tu talla de anillo desde casa, con tres métodos y tabla de equivalencias Chile / USA / UK."
      path="/aprende/talla-anillo"
      datePublished="2026-05-25"
      dateModified="2026-05-25"
    />
    <div className="min-h-screen">
      <Navbar />
      <article className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-[700px]">
          <motion.div animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs items={[{ label: "Aprende", path: "/aprende" }, { label: "Cómo saber tu talla de anillo" }]} />
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-6">¿Cómo saber tu talla de anillo?</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Guía simple para medir desde la casa, sin equivocarte.
            </p>

            <div className="space-y-12 text-muted-foreground leading-relaxed">
              <section className="space-y-4">
                <p>
                  Antes de elegir un anillo, lo primero es saber qué talla eres. Parece obvio, pero es el detalle
                  que más se pasa por alto, y el que más importa: una joya hecha a medida tiene que entrar
                  perfecto. Ni apretada, ni que se vaya a caer.
                </p>
                <p>
                  Lo ideal es venir a vernos y medirla en persona, en un solo encuentro lo dejamos resuelto.
                  Pero si estás cotizando desde otra ciudad, o quieres sorprender a alguien, hay tres formas
                  confiables de hacerlo en la casa.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Método 1, Con un anillo que ya tengas</h2>
                <p>
                  Es el más exacto. Busca un anillo que te quede perfecto en el dedo donde vas a usar la joya
                  nueva (no necesariamente el mismo dedo de la otra mano, pueden ser distintos).
                </p>
                <p className="mt-3">
                  Apóyalo sobre una regla con milímetros y mide el <strong className="text-foreground">diámetro interno</strong>,
                  de borde a borde. Ese número en milímetros es tu talla.
                </p>
                <p className="mt-3">
                  Por ejemplo: si el diámetro interno mide 16,5 mm, tu talla chilena es 12.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Método 2, Con un hilo o tira de papel</h2>
                <p>
                  Si no tienes ningún anillo a mano, este método también funciona.
                </p>
                <p className="mt-3">
                  Envuelve un hilo fino (o una tira de papel) alrededor de la base del dedo, sin apretar.
                  Marca con un lápiz el punto exacto donde se cruza. Estira el hilo sobre una regla y mide
                  en milímetros, ese es el contorno de tu dedo.
                </p>
                <p className="mt-3">
                  Después divídelo por 3.14 (π) y te da el diámetro. Ejemplo: si el contorno es 50.3 mm,
                  divides por 3.14 y te da 16 mm de diámetro → talla 12.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Método 3, Te paso una plantilla</h2>
                <p>
                  Si quieres algo a prueba de errores, te mando por WhatsApp una hoja para imprimir con una
                  regla de tallas. Apoyas tu anillo encima y ves directo cuál es. Sin matemática.
                </p>
                <p className="mt-4">
                  <a
                    href={WA_PLANTILLA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Escríbeme al WhatsApp →
                  </a>{" "}
                  y te la envío.
                </p>
              </section>

              <section
                className="rounded-lg p-8 border border-border"
                style={{ background: "#F5EFE6" }}
              >
                <h2 className="font-display text-2xl text-foreground mb-6">Cuatro tips para no equivocarte</h2>
                <ul className="space-y-5 list-none pl-0">
                  <li className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <p>
                      <strong className="text-foreground">Mide al final del día.</strong> Los dedos se hinchan
                      un poco con las horas y el calor, esa es tu talla real, la que vas a usar la mayor
                      parte del tiempo.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <p>
                      <strong className="text-foreground">Evita medir con frío o después de hacer ejercicio.</strong>{" "}
                      Los dedos se achican bastante y vas a quedar con una talla muy chica.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <p>
                      <strong className="text-foreground">Si estás justo entre dos tallas, quédate con la más grande.</strong>{" "}
                      Es preferible que sobre un poquito a que apriete, un anillo apretado se vuelve incómodo
                      y difícil de sacar.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <p>
                      <strong className="text-foreground">Para anillos anchos, sube media talla.</strong> Las
                      argollas de matrimonio anchas (de 5 mm para arriba) ocupan más espacio en el dedo. Si
                      tu talla normal es 12, en una argolla ancha vas a estar más cómoda en 12.5.
                    </p>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Tabla de equivalencias</h2>
                <div className="overflow-x-auto -mx-4 md:mx-0">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left font-display text-foreground font-normal py-3 px-3">Diámetro interno (mm)</th>
                        <th className="text-center font-display text-foreground font-normal py-3 px-3">Chile</th>
                        <th className="text-center font-display text-foreground font-normal py-3 px-3">USA</th>
                        <th className="text-center font-display text-foreground font-normal py-3 px-3">UK</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tabla.map((row) => (
                        <tr key={row.mm} className="border-b border-border/50">
                          <td className="py-3 px-3 text-foreground">{row.mm}</td>
                          <td className="py-3 px-3 text-center">{row.cl}</td>
                          <td className="py-3 px-3 text-center">{row.us}</td>
                          <td className="py-3 px-3 text-center">{row.uk}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">¿Quieres que lo hagamos juntas?</h2>
                <p>
                  Si la pieza es importante, un anillo de compromiso, una argolla de matrimonio, una joya
                  que vas a usar toda la vida, lo mejor es agendar una cita. Te mido la talla con un anillero
                  profesional, conversamos del diseño y armamos la joya pensada para ti.
                </p>
              </section>
            </div>

            <div className="mt-16 p-8 bg-card border border-border rounded-lg text-center">
              <h3 className="font-display text-xl text-foreground mb-3">Agenda una cita</h3>
              <p className="text-muted-foreground text-sm mb-5">
                Medimos tu talla, conversamos del diseño y armamos la joya pensada para ti.
              </p>
              <a
                href={WA_CITA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase"
              >
                Agendar por WhatsApp
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm">
              <Link to="/aprende/como-elegir-anillo-compromiso" className="text-primary hover:underline">→ Cómo elegir tu anillo de compromiso</Link>
              <Link to="/aprende/argollas-matrimonio-personalizadas" className="text-primary hover:underline">→ Argollas de matrimonio</Link>
            </div>
          </motion.div>
        </div>
      </article>
      <Footer />
      <WhatsAppButton />
    </div>
  </>
);

export default TallaAnillo;
