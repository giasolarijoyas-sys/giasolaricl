import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ComoElegirAnillo = () => (
  <>
    <Helmet>
      <title>Cómo Elegir tu Anillo de Compromiso — Guía Paso a Paso | Gia Solari</title>
      <meta name="description" content="Guía completa para elegir el anillo de compromiso perfecto: presupuesto, estilo, talla y la gran pregunta." />
    </Helmet>
    <div className="min-h-screen">
      <Navbar />
      <article className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-[700px]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/aprende" className="text-primary text-sm tracking-widest uppercase mb-6 inline-block hover:underline">← Aprende</Link>
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-6">Cómo Elegir tu Anillo de Compromiso</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">La guía paso a paso para que tu propuesta sea perfecta.</p>

            <div className="space-y-10 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Paso 1: Define tu presupuesto</h2>
                <p>Olvida la regla de los "3 sueldos". Tu presupuesto debe ser lo que te haga sentir cómodo, sin endeudarte ni estresarte.</p>
                <p className="mt-3">En Gia Solari trabajamos con rangos desde $800.000 CLP (con diamante de laboratorio) hasta piezas premium de varios millones. Sea cual sea tu presupuesto, vamos a encontrar algo hermoso.</p>
                <div className="mt-4 p-4 bg-card border border-border rounded-lg text-sm">
                  <p className="text-foreground font-medium mb-2">Rangos aproximados:</p>
                  <p>• Diamante lab 0.5ct en oro 18k: desde $800.000</p>
                  <p>• Diamante natural 0.5ct en oro 18k: desde $1.500.000</p>
                  <p>• Diamante natural 1ct en platino: desde $3.500.000</p>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Paso 2: Conoce su estilo</h2>
                <p>Observa qué joyas usa tu pareja en el día a día. ¿Prefiere cosas delicadas o más llamativas? ¿Dorado o plateado? ¿Clásica o moderna?</p>
                <h3 className="font-display text-lg text-foreground mt-6 mb-2">Estilos más populares</h3>
                <p><strong className="text-foreground">Solitario:</strong> Un solo diamante. Clásico, elegante, atemporal. El más pedido.</p>
                <p className="mt-2"><strong className="text-foreground">Halo:</strong> Diamante central rodeado de diamantes pequeños. Se ve más grande y brilla más.</p>
                <p className="mt-2"><strong className="text-foreground">Tres piedras:</strong> Simboliza pasado, presente y futuro. Muy significativo.</p>
                <p className="mt-2"><strong className="text-foreground">Pavé:</strong> Banda cubierta de diamantes pequeños. Máximo brillo.</p>
                <p className="mt-2"><strong className="text-foreground">Vintage:</strong> Inspirado en épocas pasadas. Filigrana, milgrain, detalles artesanales.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Paso 3: Elige la forma del diamante</h2>
                <p>La forma del diamante es cuestión de gusto personal:</p>
                <p className="mt-2"><strong className="text-foreground">Redondo:</strong> El más brillante. El clásico entre los clásicos.</p>
                <p className="mt-2"><strong className="text-foreground">Oval:</strong> Alarga el dedo. Muy elegante y moderno.</p>
                <p className="mt-2"><strong className="text-foreground">Princesa (cuadrado):</strong> Moderno y geométrico.</p>
                <p className="mt-2"><strong className="text-foreground">Esmeralda:</strong> Sofisticado, con efecto "espejo".</p>
                <p className="mt-2"><strong className="text-foreground">Pera:</strong> Romántico y único.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Paso 4: Averigua la talla</h2>
                <p>Si es sorpresa, puedes:</p>
                <p className="mt-2">• Pedir prestado un anillo que use en el dedo anular</p>
                <p>• Preguntar a su mejor amiga o mamá</p>
                <p>• Marcar la circunferencia interna de un anillo en jabón</p>
                <p className="mt-3">No te preocupes demasiado: incluimos un ajuste de talla gratis si no queda perfecta.</p>
                <p className="mt-2"><Link to="/guia-de-tallas" className="text-primary hover:underline">→ Ver guía de tallas completa</Link></p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Paso 5: ¿Sorpresa o consultada?</h2>
                <p>Ambas opciones son válidas. Cada vez más parejas eligen el anillo juntas, y eso está perfecto.</p>
                <p className="mt-3">Si quieres que sea sorpresa total, agenda una cita conmigo y te ayudo a elegir basándonos en el estilo de tu pareja. Tu pareja no se va a enterar.</p>
                <p className="mt-3">Si prefieren elegirlo juntos, también pueden venir los dos. Muchas parejas lo disfrutan como parte de la experiencia.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">El paso más importante</h2>
                <p className="text-foreground font-medium text-lg">Conversemos.</p>
                <p className="mt-2">El anillo de compromiso perfecto no sale de una guía — sale de una conversación. Cuéntame tu historia, tu presupuesto y el estilo de tu pareja, y juntas creamos algo único.</p>
              </section>
            </div>

            <div className="mt-16 p-8 bg-card border border-border rounded-lg text-center">
              <h3 className="font-display text-xl text-foreground mb-3">¿Listo para dar el paso?</h3>
              <p className="text-muted-foreground text-sm mb-4">Agenda una cita sin compromiso y empezamos a diseñar.</p>
              <a href="https://wa.me/56984049502?text=Hola%20Maca%2C%20quiero%20cotizar%20una%20joya%20%F0%9F%92%9B" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase">Conversemos</a>
            </div>

            <div className="mt-10 flex gap-4 text-sm">
              <Link to="/aprende/diamantes-4c" className="text-primary hover:underline">→ Las 4C del Diamante</Link>
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
