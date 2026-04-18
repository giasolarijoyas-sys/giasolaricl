import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { ShieldCheck, Gem, Users, Heart } from "lucide-react";

const valores = [
  { icon: Gem, title: "Certificación real", desc: "Solo piedras con certificado GIA o IGI. Sin excepciones." },
  { icon: ShieldCheck, title: "Transparencia total", desc: "Te explico cada material, cada costo y cada paso del proceso." },
  { icon: Users, title: "Atención personalizada", desc: "Te acompaño de principio a fin. No delegamos tu proyecto." },
  { icon: Heart, title: "Garantía por gusto", desc: "Si no te encanta, lo cambiamos. Así de simple." },
];

const SobreGia = () => (
  <>
    <SEO
      title="Sobre Gia Solari | Joyería artesanal en Santiago"
      description="Conocé a Macarena, diseñadora detrás de Gia Solari Joyas. Joyería hecha a mano en Las Condes, con piedras reales y certificación."
      path="/sobre-gia"
    />
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-card">
        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] bg-muted rounded-lg" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Sobre nosotras</p>
            <h1 className="text-4xl md:text-5xl font-display text-foreground mb-4">Sobre Gia Solari: joyería artesanal en Santiago</h1>
            <p className="text-muted-foreground text-lg">Diseño joyas a medida en Santiago desde 2019</p>
          </motion.div>
        </div>
      </section>

      {/* Manifiesto */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5 text-muted-foreground leading-relaxed">
            <p>Todo empezó con mi mamá, Gianna. Ella me enseñó que una joya no es solo un objeto bonito — es una historia que se hereda, un momento que se guarda para siempre. Crecí viendo cómo las joyas de mi abuela pasaban de mano en mano, cada una con su propia historia.</p>
            <p>Estudié gemología en el GIA (Gemological Institute of America) porque quería entender cada piedra, cada metal, cada detalle técnico. Me especialicé en platino y diamantes certificados porque creo que quien invierte en una joya merece saber exactamente qué está comprando.</p>
            <p>Gia Solari nació en 2019 con una misión simple: que mandar a hacer una joya sea una experiencia extraordinaria. Trabajo desde mi taller en Santiago con orfebres especialistas, y cada pieza pasa por mis manos antes de llegar a las tuyas.</p>
            <p>No tengo vitrina ni stock. Cada joya la diseño contigo, para ti. Porque creo que algo tan importante como un anillo de compromiso o una argolla de matrimonio merece ser pensado, conversado y creado con cariño.</p>
            <p className="italic text-foreground font-display text-lg">"Tú me cuentas tu historia, yo la convierto en joya."</p>
          </motion.div>
        </div>
      </section>

      {/* Galería del taller */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-8 text-center">El Taller</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square bg-muted rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-display text-foreground text-center mb-12">
            Lo que no negocio
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((v, i) => {
              const isGarantia = v.title === "Garantía por gusto";
              const content = (
                <>
                  <v.icon className="w-7 h-7 text-primary mx-auto mb-3" />
                  <h3 className="font-display text-foreground mb-2">{v.title}{isGarantia && " →"}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </>
              );
              return (
                <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  {isGarantia ? (
                    <a href="/garantia-por-gusto" className="block text-center p-6 border border-border rounded-lg h-full hover:border-primary transition-colors">{content}</a>
                  ) : (
                    <div className="text-center p-6 border border-border rounded-lg h-full">{content}</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-card text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">Agendemos una conversación</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/giasolarijoyas" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors">
              Agendar cita
            </a>
            <a href="https://wa.me/56984049502?text=Hola%20Maca%2C%20quiero%20cotizar%20una%20joya%20%F0%9F%92%9B" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-primary text-primary text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  </>
);

export default SobreGia;
