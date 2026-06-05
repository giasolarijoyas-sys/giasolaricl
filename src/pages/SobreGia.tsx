import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TestimoniosDestacados from "@/components/TestimoniosDestacados";
import ElTaller from "@/components/ElTaller";
import { motion } from "framer-motion";
import { ShieldCheck, Gem, Users, Heart } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import heroImg from "@/assets/gia-retrato.jpg";

const valores = [
  { icon: Gem, title: "Certificación real", desc: "Solo piedras con certificado GIA o IGI. Sin excepciones." },
  { icon: ShieldCheck, title: "Transparencia total", desc: "Te explico cada material, cada costo y cada paso del proceso." },
  { icon: Users, title: "Atención personalizada", desc: "Te acompaño de principio a fin. No delego tu proyecto." },
  { icon: Heart, title: "Garantía por gusto", desc: "Si no te encanta, lo cambiamos. Así de simple." },
];

const SobreGia = () => (
  <>
    <SEO
      title="Sobre Gia Solari, diseñadora y showroom en Santiago"
      description="Conocé a Macarena González Solari, diseñadora detrás del showroom. Joyería hecha a mano en Vitacura con piedras certificadas y atención personalizada."
      path="/sobre-gia"
    />
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-card">
        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-lg">
            <img
              src={heroImg}
              alt="Gia Solari, joyera y diseñadora de la marca"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">ATELIER GIA SOLARI</p>
            <h1 className="text-4xl md:text-5xl font-display text-foreground mb-4">La joya como herencia.</h1>
            <p className="text-foreground/90 text-lg italic mb-6">Soy Macarena González Solari. Diseño joyas a medida en Santiago desde 2019.</p>
            <p className="text-foreground/85 leading-relaxed font-light">
              Aprendí a mirar las joyas con mi mamá. En su cómoda las guardaba, cada joya tenía una historia, un significado o un momento a recordar. Esa fue mi primera lección: cada joya es una historia, un recuerdo.
            </p>
          </div>
        </div>
      </section>

      {/* Manifiesto */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div className="space-y-5 text-foreground leading-relaxed">
            <p><strong className="text-foreground">Aprendí a mirar las joyas con mi mamá.</strong> En su cómoda guardaba las piezas que habían sido de mi abuela , cada una con un nombre, una fecha, una historia que volvía cada vez que alguien las usaba. Esa fue mi primera lección: <em>una joya no se compra, se hereda</em>.</p>
            <p>Hoy diseño junto a Gianna , mi mamá y socia,  en un taller pequeño en Santiago. Trabajamos con orfebres que nos acompañan hace años, y cada pieza pasa por mis manos antes de llegar a las tuyas.</p>
            <p>Estudié gemología en el <strong className="text-foreground">GIA</strong> (Gemological Institute of America) para entender, una a una, las piedras que elijo. Me especialicé en platino y diamantes certificados porque creo que quien invierte en una joya merece saber exactamente qué está comprando.</p>
            <p>No tengo vitrina ni stock. Tampoco hago dos piezas iguales. Cada anillo, cada argolla, cada joya nace de una conversación: <strong className="text-foreground">me cuentas tu historia, yo la traduzco en metal y piedra.</strong></p>
            <p className="italic text-foreground font-display text-lg">"Me cuentas tu historia. Yo la convierto en joya."</p>
          </motion.div>
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
                <motion.div key={v.title} transition={{ delay: i * 0.1 }}>
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
            <a href="/agenda" className="px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors">
              Agendar cita
            </a>
            <a href={buildWhatsAppUrl("generico")} target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-primary text-primary text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Testimonios destacados */}
      {/* El Taller, galería de proceso */}
      <ElTaller />

      {/* Testimonios destacados */}
      <TestimoniosDestacados />

      <Footer />
      <WhatsAppButton />
    </div>
  </>
);

export default SobreGia;
