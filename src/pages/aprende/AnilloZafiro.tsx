import SEO from "@/components/SEO";
import ArticleSchema from "@/components/ArticleSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AnilloZafiro = () => (
  <>
    <SEO
      title="Anillo de compromiso con zafiro: guía completa, Gia Solari"
      description="Por qué elegir zafiro en tu anillo de compromiso: durabilidad, color, simbolismo y precio. Inspirado en Lady Di. Hecho a mano en Santiago."
      path="/aprende/anillo-compromiso-zafiro"
      type="article"
    />
    <ArticleSchema
      headline="Anillo de compromiso con zafiro: guía completa"
      description="Por qué elegir zafiro: durabilidad, color, simbolismo y precio. Hecho a mano en Santiago."
      path="/aprende/anillo-compromiso-zafiro"
      datePublished="2026-05-09"
      dateModified="2026-05-09"
    />
    <div className="min-h-screen">
      <Navbar />
      <article className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-[700px]">
          <motion.div animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs items={[{ label: "Aprende", path: "/aprende" }, { label: "Anillo con zafiro" }]} />
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-6">Anillo de compromiso con zafiro</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">Una alternativa elegante al diamante, con su propia historia. Esto es lo que tienes que saber.</p>

            <div className="space-y-10 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Por qué elegir zafiro</h2>
                <p>El zafiro es la segunda piedra más dura después del diamante: <strong className="text-foreground">9 en la escala de Mohs</strong>. Eso significa que aguanta el uso diario sin rayarse, igual que un diamante.</p>
                <p className="mt-3">Su color azul profundo es único, no hay otra piedra preciosa con esa intensidad. Y simboliza fidelidad, sabiduría y nobleza desde la antigüedad.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">El efecto Lady Di</h2>
                <p>El anillo de zafiro y diamantes de Lady Di, hoy en el dedo de Kate Middleton, es probablemente el anillo de compromiso más famoso del mundo. Un zafiro azul oval rodeado de 14 diamantes, en oro blanco.</p>
                <p className="mt-3">Desde entonces, el zafiro dejó de ser una "alternativa" para convertirse en una elección con identidad propia. Cada vez más parejas lo eligen.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Tipos de zafiro</h2>
                <p>El origen importa. Estos son los más conocidos:</p>
                <h3 className="font-display text-lg text-foreground mt-6 mb-2">Ceylán (Sri Lanka)</h3>
                <p>Azul vivo, brillante, con buena saturación. El más popular y disponible. Excelente relación calidad-precio.</p>
                <h3 className="font-display text-lg text-foreground mt-6 mb-2">Cachemira</h3>
                <p>El más raro y codiciado. Azul aterciopelado, casi imposible de conseguir hoy. Precios de coleccionista.</p>
                <h3 className="font-display text-lg text-foreground mt-6 mb-2">Madagascar</h3>
                <p>Buena calidad y oferta estable. Tonos que van del azul claro al profundo.</p>
                <h3 className="font-display text-lg text-foreground mt-6 mb-2">Australia</h3>
                <p>Tonos más oscuros, a veces con matices verdosos. Precio más accesible.</p>
                <p className="mt-4 text-sm italic">Mi recomendación: para anillo de compromiso, un Ceylán de buena saturación es la mejor decisión en relación calidad-precio.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Zafiro vs diamante</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-border"><th className="py-3 px-3 text-left text-foreground">Aspecto</th><th className="py-3 px-3 text-left text-foreground">Zafiro</th><th className="py-3 px-3 text-left text-foreground">Diamante</th></tr></thead>
                    <tbody>
                      <tr className="border-b border-border/50"><td className="py-2 px-3 text-foreground">Dureza</td><td className="py-2 px-3">9 Mohs</td><td className="py-2 px-3">10 Mohs</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3 text-foreground">Brillo</td><td className="py-2 px-3">Suave, con color</td><td className="py-2 px-3">Máximo destello</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3 text-foreground">Color</td><td className="py-2 px-3">Azul profundo (y otros)</td><td className="py-2 px-3">Incoloro</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3 text-foreground">Precio (1ct)</td><td className="py-2 px-3">30–50% menos</td><td className="py-2 px-3">Referencia</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-3 text-foreground">Simbolismo</td><td className="py-2 px-3">Fidelidad, nobleza</td><td className="py-2 px-3">Eternidad</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Engastes ideales</h2>
                <p>El zafiro luce especialmente bien en estos formatos:</p>
                <p className="mt-2"><strong className="text-foreground">Halo:</strong> el clásico Lady Di. Diamantes pequeños rodean el zafiro y multiplican el brillo.</p>
                <p className="mt-2"><strong className="text-foreground">Solitario:</strong> el zafiro como protagonista absoluto, sobre todo en oro blanco o platino.</p>
                <p className="mt-2"><strong className="text-foreground">Bezel:</strong> el zafiro se monta dentro de un aro de metal. Moderno, seguro y limpio.</p>
                <p className="mt-2"><strong className="text-foreground">Tres piedras:</strong> zafiro central con dos diamantes laterales. Equilibrio perfecto entre color y brillo.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Cuidados</h2>
                <p>El zafiro es muy resistente, pero igual conviene cuidarlo:</p>
                <p className="mt-2">• Sácatelo para entrenar, hacer aseo o cocinar.</p>
                <p>• Límpialo con agua tibia, jabón neutro y cepillo suave.</p>
                <p>• Revisa los engastes una vez al año con tu joyera de confianza.</p>
              </section>
            </div>

            <div className="mt-16 p-8 bg-card border border-border rounded-lg text-center">
              <h3 className="font-display text-xl text-foreground mb-3">¿Quieres tu propio zafiro?</h3>
              <p className="text-muted-foreground text-sm mb-4">Conversemos tu diseño y te cotizamos sin compromiso.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/joyas?piedra=zafiro" className="inline-block px-6 py-3 border border-primary text-primary text-sm tracking-widest uppercase">Ver piezas con zafiro</Link>
                <Link to="/cotizar" className="inline-block px-6 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase">Cotizar mi anillo</Link>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm">
              <Link to="/aprende/como-elegir-anillo-compromiso" className="text-primary hover:underline">→ Cómo elegir tu anillo</Link>
              <Link to="/aprende/cuanto-cuesta-anillo-compromiso-chile" className="text-primary hover:underline">→ Cuánto cuesta un anillo</Link>
            </div>
          </motion.div>
        </div>
      </article>
      <Footer />
      <WhatsAppButton />
    </div>
  </>
);

export default AnilloZafiro;
