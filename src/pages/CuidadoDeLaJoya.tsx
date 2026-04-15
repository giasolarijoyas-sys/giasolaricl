import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Droplets, SprayCan, Sparkles, Ban, Sun, Heart } from "lucide-react";

const tips = [
  { icon: Droplets, title: "Evita el agua de piscina y mar", desc: "El cloro y la sal pueden dañar el brillo de metales y piedras. Quítate la joya antes de nadar." },
  { icon: SprayCan, title: "Lejos de perfumes y cremas", desc: "Aplica perfume y cremas antes de ponerte la joya. Los químicos pueden opacar el metal." },
  { icon: Sparkles, title: "Limpia con paño suave", desc: "Usa un paño de microfibra o gamuza. Para una limpieza más profunda, agua tibia con jabón neutro." },
  { icon: Ban, title: "No uses productos químicos", desc: "Evita limpiadores abrasivos, cloro o alcohol directamente sobre la joya." },
  { icon: Sun, title: "Guárdala protegida de la luz", desc: "Guarda tus joyas en su estuche o en un lugar oscuro y seco. La luz directa puede afectar algunas piedras." },
  { icon: Heart, title: "Ponla al final, quítala primero", desc: "La joya es lo último que te pones y lo primero que te quitas. Así la proteges de golpes y roces." },
];

const CuidadoDeLaJoya = () => (
  <>
    <Helmet>
      <title>Cuidado de tu Joya | Gia Solari</title>
      <meta name="description" content="Tips para mantener tu joya como nueva. Guía de cuidado para oro 18k, platino y piedras preciosas." />
    </Helmet>
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Cuidado</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">Cuidado de tu Joya</h1>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">Sigue estos consejos para que tu joya luzca como nueva por generaciones.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((t, i) => (
              <motion.div key={t.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-4 p-5 bg-card border border-border rounded-lg">
                <t.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-foreground mb-1">{t.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
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

export default CuidadoDeLaJoya;
