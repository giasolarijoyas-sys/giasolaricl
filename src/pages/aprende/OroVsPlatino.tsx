import SEO from "@/components/SEO";
import ArticleSchema from "@/components/ArticleSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Link } from "react-router-dom";

const OroVsPlatino = () => (
  <>
    <SEO
      title="Oro 18k vs platino para anillos: guía completa 2026 · Gia Solari"
      description="Diferencias entre oro 18k (amarillo, blanco, rosado) y platino: precio, durabilidad, mantenimiento e hipoalergenia. Cuál elegir para tu anillo."
      path="/aprende/oro-vs-platino"
      type="article"
    />
    <ArticleSchema
      headline="Oro 18k vs platino para anillos: guía completa 2026"
      description="Diferencias entre oro 18k y platino: precio, durabilidad, mantenimiento e hipoalergenia."
      path="/aprende/oro-vs-platino"
      datePublished="2025-01-15"
      dateModified="2026-05-09"
    />
    <div className="min-h-screen">
      <Navbar />
      <article className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-[700px]">
          <motion.div animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs items={[{ label: "Aprende", path: "/aprende" }, { label: "Oro 18k vs Platino" }]} />
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-6">Oro 18k vs Platino</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">La guía definitiva para elegir el metal de tu joya.</p>

            <div className="space-y-10 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Comparación rápida</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-border"><th className="py-3 px-3 text-left text-foreground">Característica</th><th className="py-3 px-3 text-left text-foreground">Oro 18k</th><th className="py-3 px-3 text-left text-foreground">Platino</th></tr></thead>
                    <tbody>
                      <tr className="border-b border-border/50"><td className="py-2 px-3 text-foreground">Pureza</td><td className="py-2 px-3">75% oro puro</td><td className="py-2 px-3">95% platino puro</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3 text-foreground">Color</td><td className="py-2 px-3">Amarillo, blanco o rosé</td><td className="py-2 px-3">Blanco grisáceo natural</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3 text-foreground">Peso</td><td className="py-2 px-3">Más liviano</td><td className="py-2 px-3">Más pesado y denso</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3 text-foreground">Durabilidad</td><td className="py-2 px-3">Muy buena</td><td className="py-2 px-3">Excelente</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3 text-foreground">Precio aprox.</td><td className="py-2 px-3">Desde $800.000</td><td className="py-2 px-3">Desde $1.200.000</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3 text-foreground">Mantenimiento</td><td className="py-2 px-3">Rodio cada 1-2 años (blanco)</td><td className="py-2 px-3">Pulido ocasional</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3 text-foreground">Hipoalergénico</td><td className="py-2 px-3">Generalmente sí</td><td className="py-2 px-3">Siempre</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Oro 18k en detalle</h2>
                <p>El oro 18k es la aleación más usada en joyería fina. Contiene un 75% de oro puro mezclado con cobre, plata y otros metales que le dan resistencia y color.</p>
                <h3 className="font-display text-lg text-foreground mt-6 mb-2">Oro Amarillo</h3>
                <p>El clásico. Cálido, atemporal y el que menos mantenimiento requiere de los tres.</p>
                <h3 className="font-display text-lg text-foreground mt-6 mb-2">Oro Blanco</h3>
                <p>Se logra aleando oro con paladio o níquel y se recubre con rodio para un acabado brillante. Necesita re-rodiar cada 1-2 años.</p>
                <h3 className="font-display text-lg text-foreground mt-6 mb-2">Oro Rosé</h3>
                <p>La aleación incluye más cobre, dándole ese tono rosado romántico que está muy de moda.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Platino en detalle</h2>
                <p>El platino es el metal más exclusivo usado en joyería. Es naturalmente blanco, extremadamente duradero y no pierde material con el uso — simplemente se desplaza.</p>
                <p className="mt-3">Es perfecto para piedras valiosas porque sus garras son más seguras que las de oro. Y es la opción ideal para pieles sensibles por ser 100% hipoalergénico.</p>
                <p className="mt-3">En Gia Solari somos una de las pocas joyerías en Chile que trabaja el platino con verdadera maestría. Es nuestro metal favorito.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">¿Cuál elegir?</h2>
                <p>Elige <strong className="text-foreground">oro amarillo</strong> si quieres calidez clásica y menor costo.</p>
                <p className="mt-2">Elige <strong className="text-foreground">oro blanco</strong> si te gusta el look plateado a menor precio que el platino.</p>
                <p className="mt-2">Elige <strong className="text-foreground">platino</strong> si buscas lo mejor en durabilidad, pureza y cero mantenimiento.</p>
              </section>
            </div>

            <div className="mt-16 p-8 bg-card border border-border rounded-lg text-center">
              <h3 className="font-display text-xl text-foreground mb-3">¿Todavía tienes dudas?</h3>
              <p className="text-muted-foreground text-sm mb-4">Te muestro muestras de cada metal en persona.</p>
              <a href={buildWhatsAppUrl("generico")} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase">Conversemos</a>
            </div>

            <div className="mt-10 flex gap-4 text-sm">
              <Link to="/aprende/diamantes-4c" className="text-primary hover:underline">→ Las 4C del Diamante</Link>
              <Link to="/aprende/diamante-natural-vs-laboratorio" className="text-primary hover:underline">→ Natural vs Laboratorio</Link>
            </div>
          </motion.div>
        </div>
      </article>
      <Footer />
      <WhatsAppButton />
    </div>
  </>
);

export default OroVsPlatino;
