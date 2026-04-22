import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Gem, Plane, Heart, Sparkles } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const diferencias = [
  {
    titulo: "Material",
    detalle: "Plata 925 (vs. oro 18k o platino del original).",
  },
  {
    titulo: "Piedra",
    detalle: "Moissanita (vs. diamante natural o de laboratorio del original).",
  },
  {
    titulo: "Grabado",
    detalle: "La Hermana queda lisa por dentro. El grabado es íntimo y va solo en el original.",
  },
];

const LaHermana = () => (
  <>
    <SEO
      title="La Hermana — Réplica para uso diario | Gia Solari Joyas"
      description="Todo anillo de compromiso Gia Solari incluye La Hermana: una réplica en plata y moissanita para los días cotidianos. Incluida sin costo adicional."
      path="/la-hermana"
    />
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Incluida</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4">
              La Hermana. Para que uses tu anillo sin miedo.
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Una réplica en plata y moissanita, incluida sin costo con todo anillo de compromiso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Qué es */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-background border border-border rounded-lg"
            >
              <Sparkles className="w-7 h-7 text-primary mb-4" strokeWidth={1.4} />
              <h2 className="font-display text-2xl text-foreground mb-3">Qué es</h2>
              <p className="text-muted-foreground leading-relaxed">
                La Hermana es una réplica en plata 925 con moissanita, lo más parecida posible a tu anillo original. La moissanita brilla casi idéntico a un diamante. No es 100% igual al original — es del mismo estilo, con materiales pensados para el uso diario.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-background border border-border rounded-lg"
            >
              <Plane className="w-7 h-7 text-primary mb-4" strokeWidth={1.4} />
              <h2 className="font-display text-2xl text-foreground mb-3">Para qué sirve</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para los viajes, el gimnasio, la cocina, la piscina, los días cotidianos. Para esa tranquilidad de dejar tu anillo original guardado para las ocasiones importantes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferencias */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3">
              Diferencias con el original
            </h2>
            <p className="text-muted-foreground text-sm">
              Misma estética, otros materiales — pensados para el uso diario.
            </p>
          </div>
          <div className="space-y-4">
            {diferencias.map((d, i) => (
              <motion.div
                key={d.titulo}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 p-6 bg-card border border-border rounded-lg"
              >
                <Gem className="w-5 h-5 text-primary shrink-0 mt-1" strokeWidth={1.4} />
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">{d.titulo}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{d.detalle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Está incluida */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Heart className="w-10 h-10 text-primary mx-auto mb-6" strokeWidth={1.2} />
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              Está incluida
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              La Hermana viene <strong className="text-foreground">sin costo adicional</strong> con cualquier anillo de compromiso Gia Solari. No es un extra. Es parte de cómo trabajo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-display text-foreground mb-6">
              ¿Hablamos de tu anillo?
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/agenda"
                className="inline-block px-8 py-4 text-sm uppercase tracking-[0.2em] bg-primary text-primary-foreground hover:opacity-90 transition-opacity rounded-md"
              >
                Agendemos una conversación
              </a>
              <a
                href={buildWhatsAppUrl("la_hermana")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-sm uppercase tracking-[0.2em] border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-md"
              >
                Preguntar por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  </>
);

export default LaHermana;
