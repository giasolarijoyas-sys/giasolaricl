import SEO from "@/components/SEO";
import ArticleSchema from "@/components/ArticleSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Link } from "react-router-dom";

const NaturalVsLab = () => (
  <>
    <SEO
      title="Diamante natural vs laboratorio: cuál elegir en 2026 · Gia Solari"
      description="Comparación honesta entre diamante natural y de laboratorio: precio, brillo, durabilidad e impacto ambiental. Cuál conviene según tu caso."
      path="/aprende/diamante-natural-vs-laboratorio"
      type="article"
    />
    <ArticleSchema
      headline="Diamante natural vs laboratorio: cuál elegir en 2026"
      description="Comparación honesta entre diamante natural y de laboratorio: precio, brillo, durabilidad e impacto ambiental."
      path="/aprende/diamante-natural-vs-laboratorio"
      datePublished="2025-01-15"
      dateModified="2026-05-09"
    />
    <div className="min-h-screen">
      <Navbar />
      <article className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-[700px]">
          <motion.div animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs items={[{ label: "Aprende", path: "/aprende" }, { label: "Natural vs Laboratorio" }]} />
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-6">Diamante Natural vs Laboratorio</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">La guía honesta que necesitas para tomar una buena decisión.</p>

            <div className="space-y-10 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Primero lo primero: ambos son diamantes reales</h2>
                <p>Un diamante de laboratorio tiene exactamente las mismas propiedades físicas, químicas y ópticas que uno natural. No es un "falso" ni un "imitación". Es un diamante.</p>
                <p className="mt-3">La diferencia está en el origen: uno se formó en las profundidades de la tierra durante millones de años, y el otro se creó en un laboratorio en cuestión de semanas.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Comparación detallada</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-border"><th className="py-3 px-3 text-left text-foreground">Aspecto</th><th className="py-3 px-3 text-left text-foreground">Natural</th><th className="py-3 px-3 text-left text-foreground">Laboratorio</th></tr></thead>
                    <tbody>
                      <tr className="border-b border-border/50"><td className="py-2 px-3 text-foreground">Composición</td><td className="py-2 px-3">Carbono cristalizado</td><td className="py-2 px-3">Carbono cristalizado</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3 text-foreground">Brillo</td><td className="py-2 px-3">Idéntico</td><td className="py-2 px-3">Idéntico</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3 text-foreground">Dureza</td><td className="py-2 px-3">10 (máxima)</td><td className="py-2 px-3">10 (máxima)</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3 text-foreground">Precio (1ct)</td><td className="py-2 px-3">Desde $3.000.000</td><td className="py-2 px-3">Desde $1.200.000</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3 text-foreground">Certificación</td><td className="py-2 px-3">GIA / IGI</td><td className="py-2 px-3">IGI</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3 text-foreground">Reventa</td><td className="py-2 px-3">Mayor valor</td><td className="py-2 px-3">Menor valor</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3 text-foreground">Impacto ambiental</td><td className="py-2 px-3">Mayor</td><td className="py-2 px-3">Menor</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Pros y contras</h2>
                <h3 className="font-display text-lg text-foreground mt-6 mb-2">Diamante Natural</h3>
                <p>✓ Único e irrepetible — cada uno tiene su propia historia geológica</p>
                <p>✓ Mayor valor de reventa a largo plazo</p>
                <p>✓ Tradición y simbolismo</p>
                <p className="mt-2">✗ Precio significativamente mayor</p>
                <p>✗ Mayor impacto ambiental en la extracción</p>

                <h3 className="font-display text-lg text-foreground mt-6 mb-2">Diamante de Laboratorio</h3>
                <p>✓ Hasta 60% más accesible — más quilates por tu presupuesto</p>
                <p>✓ Mismo brillo, misma dureza, misma belleza</p>
                <p>✓ Menor impacto ambiental</p>
                <p className="mt-2">✗ Menor valor de reventa</p>
                <p>✗ Menos "exclusivo" para algunos compradores</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Mi posición como gemóloga</h2>
                <p>No tengo preferencia por uno u otro. Lo que me importa es que entiendas exactamente qué estás comprando y por qué.</p>
                <p className="mt-3">Si el simbolismo y la tradición son importantes para ti, el natural es la elección. Si prefieres maximizar tamaño y brillo dentro de tu presupuesto, el de laboratorio es excelente.</p>
                <p className="mt-3 text-foreground font-medium">Ambos brillan igual. La decisión es tuya.</p>
              </section>
            </div>

            <div className="mt-16 p-8 bg-card border border-border rounded-lg text-center">
              <h3 className="font-display text-xl text-foreground mb-3">¿Quieres comparar en persona?</h3>
              <p className="text-muted-foreground text-sm mb-4">Te muestro ambas opciones con sus certificados.</p>
              <a href={buildWhatsAppUrl("generico")} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase">Conversemos</a>
            </div>

            <div className="mt-10 flex gap-4 text-sm">
              <Link to="/aprende/diamantes-4c" className="text-primary hover:underline">→ Las 4C del Diamante</Link>
              <Link to="/aprende/como-elegir-anillo-compromiso" className="text-primary hover:underline">→ Cómo elegir tu anillo</Link>
            </div>
          </motion.div>
        </div>
      </article>
      <Footer />
      <WhatsAppButton />
    </div>
  </>
);

export default NaturalVsLab;
