import { Helmet } from "react-helmet-async";
import ArticleSchema from "@/components/ArticleSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Link } from "react-router-dom";

const AprendeDiamantes4C = () => (
  <>
    <Helmet>
      <title>Las 4C del Diamante — Guía Completa | Gia Solari</title>
      <meta name="description" content="Aprende sobre Corte, Color, Claridad y Quilates. Guía completa para elegir el diamante perfecto." />
    </Helmet>
    <ArticleSchema
      headline="Las 4C del Diamante — Guía Completa"
      description="Aprende sobre Corte, Color, Claridad y Quilates. Guía completa para elegir el diamante perfecto."
      path="/aprende/diamantes-4c"
      datePublished="2025-01-15"
    />
    <div className="min-h-screen">
      <Navbar />
      <article className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-[700px]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs items={[{ label: "Aprende", path: "/aprende" }, { label: "Las 4C del Diamante" }]} />
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-6">Las 4C del Diamante</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">Todo lo que necesitas saber para elegir el diamante perfecto, explicado de forma simple y honesta.</p>

            <div className="space-y-12 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">¿Qué son las 4C?</h2>
                <p>Las 4C son el estándar internacional creado por el GIA (Gemological Institute of America) para evaluar la calidad de un diamante. Son: <strong className="text-foreground">Corte</strong> (Cut), <strong className="text-foreground">Color</strong>, <strong className="text-foreground">Claridad</strong> (Clarity) y <strong className="text-foreground">Quilates</strong> (Carat).</p>
                <p className="mt-3">Cada una influye en la belleza y el precio del diamante. Entenderlas te permite tomar una decisión informada sin depender solo del vendedor.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">1. Corte (Cut)</h2>
                <p>El corte es, sin duda, el factor más importante. Determina cómo la luz interactúa con el diamante y, por tanto, cuánto brilla.</p>
                <p className="mt-3">Un diamante con un corte excelente refleja la luz de manera óptima, creando ese destello y fuego característico que hace que un diamante sea especial.</p>

                <div className="overflow-x-auto mt-6">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-border"><th className="py-2 px-3 text-left text-foreground">Grado</th><th className="py-2 px-3 text-left text-foreground">Descripción</th><th className="py-2 px-3 text-left text-foreground">Recomendación</th></tr></thead>
                    <tbody>
                      <tr className="border-b border-border/50"><td className="py-2 px-3">Excellent</td><td className="py-2 px-3">Máximo brillo y fuego</td><td className="py-2 px-3 text-primary">⭐ Ideal</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3">Very Good</td><td className="py-2 px-3">Muy buen brillo</td><td className="py-2 px-3 text-primary">✓ Excelente opción</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3">Good</td><td className="py-2 px-3">Buen brillo</td><td className="py-2 px-3">Aceptable</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3">Fair/Poor</td><td className="py-2 px-3">Brillo reducido</td><td className="py-2 px-3">No recomendado</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm italic">Mi consejo: Nunca bajes de "Very Good". El corte es lo que hace brillar a un diamante.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">2. Color</h2>
                <p>El color se mide en una escala de D (totalmente incoloro) a Z (tono amarillento visible). Los diamantes incoloros son los más valorados.</p>
                <div className="overflow-x-auto mt-6">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-border"><th className="py-2 px-3 text-left text-foreground">Grado</th><th className="py-2 px-3 text-left text-foreground">Descripción</th><th className="py-2 px-3 text-left text-foreground">Visible a simple vista</th></tr></thead>
                    <tbody>
                      <tr className="border-b border-border/50"><td className="py-2 px-3">D-F</td><td className="py-2 px-3">Incoloro</td><td className="py-2 px-3">No</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3">G-H</td><td className="py-2 px-3">Casi incoloro</td><td className="py-2 px-3">No</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3">I-J</td><td className="py-2 px-3">Tono leve</td><td className="py-2 px-3">Apenas</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3">K+</td><td className="py-2 px-3">Tono visible</td><td className="py-2 px-3">Sí</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm italic">Mi consejo: Un diamante G o H se ve blanco a simple vista y es significativamente más accesible que D-F.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">3. Claridad (Clarity)</h2>
                <p>La claridad mide las inclusiones naturales del diamante. Casi todos los diamantes tienen alguna inclusión — la pregunta es si son visibles.</p>
                <div className="overflow-x-auto mt-6">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-border"><th className="py-2 px-3 text-left text-foreground">Grado</th><th className="py-2 px-3 text-left text-foreground">Significado</th><th className="py-2 px-3 text-left text-foreground">Visible sin lupa</th></tr></thead>
                    <tbody>
                      <tr className="border-b border-border/50"><td className="py-2 px-3">FL-IF</td><td className="py-2 px-3">Sin inclusiones</td><td className="py-2 px-3">No</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3">VVS1-VVS2</td><td className="py-2 px-3">Muy muy pequeñas</td><td className="py-2 px-3">No</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3">VS1-VS2</td><td className="py-2 px-3">Muy pequeñas</td><td className="py-2 px-3">No</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3">SI1-SI2</td><td className="py-2 px-3">Pequeñas</td><td className="py-2 px-3">Generalmente no</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm italic">Mi consejo: VS2 o SI1 ofrecen la mejor relación calidad-precio. Las inclusiones no se ven a simple vista.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">4. Quilates (Carat)</h2>
                <p>Los quilates miden el peso del diamante, no su tamaño. 1 quilate equivale a 0.2 gramos. A mayor peso, mayor precio — pero la relación no es lineal.</p>
                <p className="mt-3">Un diamante de 2 quilates no cuesta el doble que uno de 1 quilate, sino mucho más, porque los diamantes grandes son proporcionalmente más raros.</p>
                <p className="mt-4 text-sm italic">Mi consejo: Un 0.90ct se ve casi igual que un 1.00ct pero cuesta significativamente menos. Lo mismo con 1.90 vs 2.00.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">La clave: el equilibrio</h2>
                <p>No busques un diamante perfecto en las 4C — busca el <strong className="text-foreground">equilibrio perfecto para tu presupuesto</strong>. Un buen corte con color G, claridad VS2 y el tamaño que se ajuste a tu bolsillo es, en mi experiencia, la combinación ganadora.</p>
                <p className="mt-3">Y recuerda: cada diamante es único. Lo mejor es verlos en persona, comparar y sentir cuál es el tuyo.</p>
              </section>
            </div>

            <div className="mt-16 p-8 bg-card border border-border rounded-lg text-center">
              <h3 className="font-display text-xl text-foreground mb-3">¿Quieres ver diamantes en persona?</h3>
              <p className="text-muted-foreground text-sm mb-4">Agenda una cita y te muestro opciones según tu presupuesto.</p>
              <a href={buildWhatsAppUrl("generico")} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase">Conversemos</a>
            </div>

            <div className="mt-10 flex gap-4 text-sm">
              <Link to="/aprende/oro-vs-platino" className="text-primary hover:underline">→ Oro 18k vs Platino</Link>
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

export default AprendeDiamantes4C;
