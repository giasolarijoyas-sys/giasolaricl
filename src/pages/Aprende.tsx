import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Gem, CircleDot, FlaskConical, Heart } from "lucide-react";

const articles = [
  {
    icon: Gem,
    tag: "Diamantes",
    title: "Las 4C del Diamante",
    desc: "Guía completa de Corte, Color, Claridad y Quilates con tabla comparativa.",
    href: "/aprende/diamantes-4c",
  },
  {
    icon: CircleDot,
    tag: "Metales",
    title: "Oro 18k vs Platino",
    desc: "Comparación detallada de materiales: precios, durabilidad, color y mantenimiento.",
    href: "/aprende/oro-vs-platino",
  },
  {
    icon: FlaskConical,
    tag: "Piedras Preciosas",
    title: "Diamantes naturales vs de laboratorio",
    desc: "Explicación honesta con pros, contras y diferencias de precio.",
    href: "/aprende/diamante-natural-vs-laboratorio",
  },
  {
    icon: Heart,
    tag: "Guía",
    title: "Guía de Anillos de Compromiso",
    desc: "Paso a paso: presupuesto, estilo, talla y la gran pregunta.",
    href: "/aprende/como-elegir-anillo-compromiso",
  },
];

const Aprende = () => (
  <>
    <SEO
      title="Aprende | Guías sobre diamantes, oro y joyería fina"
      description="Guías completas para elegir tu joya: Las 4C del diamante, oro 18k vs platino, diamantes naturales vs de laboratorio y más."
      path="/aprende"
    />
    
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Educación</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">Guías sobre diamantes, oro y joyería fina</h1>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">Antes de elegir, vale la pena entender. Guías honestas sobre diamantes, metales y la pregunta correcta.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {articles.map((a, i) => (
              <motion.div key={a.href} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Link to={a.href} className="group block p-8 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors h-full">
                  <a.icon className="w-8 h-8 text-primary mb-4" />
                  <p className="text-primary tracking-[0.2em] uppercase text-[10px] mb-2">{a.tag}</p>
                  <h2 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">{a.title}</h2>
                  <p className="text-muted-foreground text-sm mb-4">{a.desc}</p>
                  <span className="text-primary text-sm group-hover:underline">Leer artículo →</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  </>
);

export default Aprende;
