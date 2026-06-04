import SEO from "@/components/SEO";
import ArticleSchema from "@/components/ArticleSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CuantoCuestaAnillo = () => (
  <>
    <SEO
      title="¿Cuánto cuesta un anillo de compromiso en Chile? Guía 2026"
      description="Rangos reales de precios de anillos de compromiso en Chile, desde $1.500.000. Qué afecta el precio: metal, diamante, diseño. Por Gia Solari."
      path="/aprende/cuanto-cuesta-anillo-compromiso-chile"
      type="article"
    />
    <ArticleSchema
      headline="¿Cuánto cuesta un anillo de compromiso en Chile? Guía 2026"
      description="Rangos reales de precios de anillos de compromiso en Chile y qué influye en el precio."
      path="/aprende/cuanto-cuesta-anillo-compromiso-chile"
      datePublished="2026-05-09"
      dateModified="2026-05-09"
    />
    <div className="min-h-screen">
      <Navbar />
      <article className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-[700px]">
          <motion.div animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs items={[{ label: "Aprende", path: "/aprende" }, { label: "Cuánto cuesta un anillo" }]} />
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-6">¿Cuánto cuesta un anillo de compromiso en Chile?</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">Rangos honestos, sin letra chica. Esto es lo que tienes que saber antes de cotizar.</p>

            <div className="space-y-10 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">La respuesta corta</h2>
                <p>En Chile, un anillo de compromiso bien hecho parte en torno a <strong className="text-foreground">$1.500.000 CLP</strong> y puede llegar a varios millones según el diamante, el metal y la complejidad del diseño.</p>
                <p className="mt-3">En Gia Solari trabajamos con un presupuesto mínimo de $1.800.000 CLP porque por debajo de ese monto no podemos garantizar la calidad de materiales ni la mano de obra que nos representa.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Qué influye en el precio</h2>
                <p>El precio final depende de cuatro factores principales:</p>
                <h3 className="font-display text-lg text-foreground mt-6 mb-2">1. El diamante (o piedra central)</h3>
                <p>Es lo que más mueve la aguja. Tamaño, color, claridad y corte (las 4C) definen el rango de precio del diamante certificado.</p>
                <h3 className="font-display text-lg text-foreground mt-6 mb-2">2. El metal</h3>
                <p>Platino cuesta entre 30% y 50% más que oro 18k por gramo. Y dentro del oro, los anillos más anchos o pesados suben el precio proporcionalmente.</p>
                <h3 className="font-display text-lg text-foreground mt-6 mb-2">3. El diseño</h3>
                <p>Un solitario clásico tiene menos mano de obra que un halo con pavé o un diseño art decó con engaste tipo bezel. La complejidad técnica se nota.</p>
                <h3 className="font-display text-lg text-foreground mt-6 mb-2">4. La mano de obra</h3>
                <p>Una pieza hecha a mano por un maestro joyero local no cuesta lo mismo que una pieza de catálogo importada. Por eso somos transparentes con cada partida del presupuesto.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Rangos reales por presupuesto</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-border"><th className="py-3 px-3 text-left text-foreground">Presupuesto</th><th className="py-3 px-3 text-left text-foreground">Qué esperar</th></tr></thead>
                    <tbody>
                      <tr className="border-b border-border/50"><td className="py-2 px-3 text-foreground align-top">$1.800.000, $2.500.000</td><td className="py-2 px-3">Solitario en oro 18k con diamante certificado 0,25–0,35ct, calidad muy buena. Diseño limpio.</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3 text-foreground align-top">$2.500.000, $4.000.000</td><td className="py-2 px-3">Diamante natural 0,4–0,6ct en oro 18k, o lab 1ct en platino. Posibilidad de halo o detalles.</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3 text-foreground align-top">$4.000.000, $7.000.000</td><td className="py-2 px-3">Natural 0,7–1ct en platino, halo, pavé o diseño personalizado complejo.</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3 text-foreground align-top">$8.000.000+</td><td className="py-2 px-3">Diamantes naturales sobre 1ct, certificación GIA, platino, diseños premium.</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Cómo armar tu presupuesto</h2>
                <p>Mi recomendación es partir al revés: define cuánto te sientes cómodo invirtiendo y construimos la mejor pieza posible dentro de eso.</p>
                <p className="mt-3">No existe la regla de los "tres sueldos". Existe la regla de no endeudarte para empezar tu matrimonio.</p>
                <p className="mt-3">Una vez que tienes el monto, las palancas son: tipo de diamante (natural o lab), tamaño, metal y complejidad del diseño. Mover una sola de esas palancas puede cambiar el precio en 30% o más.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Cuidado con precios sospechosamente bajos</h2>
                <p>Si ves un anillo "de compromiso con diamante" bajo $500.000, casi seguro es uno de estos casos:</p>
                <p className="mt-2">• Es plata o oro de baja ley (no 18k).</p>
                <p>• La piedra es circón, moissanita o diamante de muy baja calidad.</p>
                <p>• La mano de obra es industrial, sin garantía ni servicio postventa.</p>
                <p className="mt-3">No hay magia: en joyería fina los materiales tienen un piso de costo y la mano de obra de calidad también. Lo barato sale caro cuando se rompe a los dos años.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Lo que incluye nuestro precio</h2>
                <p>En Gia Solari, cada presupuesto incluye:</p>
                <p className="mt-2">• Diseño personalizado conversado contigo.</p>
                <p>• Boceto antes de avanzar.</p>
                <p>• Materiales certificados (oro, platino, diamantes).</p>
                <p>• Ajuste de talla incluido.</p>
                <p>• Garantía por gusto: si no te enamora, lo arreglamos.</p>
              </section>
            </div>

            <div className="mt-16 p-8 bg-card border border-border rounded-lg text-center">
              <h3 className="font-display text-xl text-foreground mb-3">¿Quieres tu cotización personalizada?</h3>
              <p className="text-muted-foreground text-sm mb-4">En 3 pasos te damos un rango realista para tu pieza.</p>
              <Link to="/cotizar" className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase">Cotizar ahora</Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm">
              <Link to="/aprende/como-elegir-anillo-compromiso" className="text-primary hover:underline">→ Cómo elegir tu anillo</Link>
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

export default CuantoCuestaAnillo;
