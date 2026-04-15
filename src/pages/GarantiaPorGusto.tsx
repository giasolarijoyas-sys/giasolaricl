import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { ShieldCheck, RefreshCw, Ruler, MessageCircle } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "¿Qué cubre?", desc: "Si no te encanta el resultado final de tu joya, la rehacemos. Esto aplica a joyas diseñadas y fabricadas por Gia Solari." },
  { icon: RefreshCw, title: "Plazo", desc: "Tienes 15 días desde la entrega para comunicarnos cualquier inconformidad. Nos ponemos en contacto contigo para evaluar la mejor solución." },
  { icon: Ruler, title: "Cambio de talla gratis", desc: "Incluimos un ajuste de talla sin costo (hasta 2 tallas arriba o abajo). Cambios mayores pueden tener un costo adicional." },
  { icon: MessageCircle, title: "Ajuste de diseño", desc: "Si algún detalle del diseño no te convence, lo conversamos y buscamos la mejor solución juntas. Tu satisfacción es nuestra prioridad." },
];

const GarantiaPorGusto = () => (
  <>
    <SEO
      title="Garantía por Gusto | Solo en Gia Solari Joyas"
      description="La única joyería en Chile que ofrece garantía por gusto. Si tu joya no te enamora al recibirla, la rehacemos. Así de seguros estamos de nuestro proceso."
      path="/garantia-por-gusto"
    />
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Compromiso</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">Garantía por Gusto</h1>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">Si no te encanta, lo cambiamos. Así de simple.</p>
          </motion.div>
          <div className="space-y-6">
            {items.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4 p-6 bg-card border border-border rounded-lg">
                <item.icon className="w-7 h-7 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
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

export default GarantiaPorGusto;
