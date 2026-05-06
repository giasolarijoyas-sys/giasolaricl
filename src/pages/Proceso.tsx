import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import paso1 from "@/assets/proceso-1.jpg";
import paso2 from "@/assets/proceso-2.jpg";
import paso3 from "@/assets/proceso-3.jpg";
import paso4 from "@/assets/proceso-4.jpg";
import paso5 from "@/assets/proceso-5.jpg";

const pasos = [
  {
    n: "01",
    titulo: "Conversamos",
    img: paso1,
    texto: "Cuéntanos lo que tienes en mente: ella, el estilo, el presupuesto. No necesitas saber de joyas; nosotros te guiamos. Por WhatsApp, videollamada o en el atelier.",
  },
  {
    n: "02",
    titulo: "Diseñamos",
    img: paso2,
    texto: "Te enviamos un boceto con opciones claras de metal, piedra y proporciones. Iteramos las veces que haga falta hasta que sea exactamente lo que tienes en mente.",
  },
  {
    n: "03",
    titulo: "Confirmas",
    img: paso3,
    texto: "Cuando el diseño está listo, confirmas y abonas el 70%. Ahí empezamos a fabricar.",
  },
  {
    n: "04",
    titulo: "Fabricamos",
    img: paso4,
    texto: "Cada pieza se hace a mano en nuestro taller de Santiago. Una pieza a la vez. Entre 4 y 6 semanas.",
  },
  {
    n: "05",
    titulo: "Recibes",
    img: paso5,
    texto: "Te entregamos la pieza lista para el momento, con su empaque, el certificado de la piedra y la Garantía por Gusto activa por 30 días.",
  },
];

const Proceso = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="El Proceso | De la conversación a la joya"
        description="Cinco pasos sin sorpresas: desde la primera conversación hasta que recibes tu joya hecha a medida en Santiago."
        path="/proceso"
      />
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">EL PROCESO</p>
            <h1 className="text-3xl md:text-5xl font-display text-charcoal mb-4">
              De la conversación a la joya.
            </h1>
            <p className="text-charcoal/70 leading-relaxed italic">
              Cinco pasos. Sin sorpresas, sin presión.
            </p>
          </motion.div>

          <div className="space-y-16 md:space-y-24 max-w-5xl mx-auto">
            {pasos.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-cream/40 [direction:ltr]">
                  <img
                    src={p.img}
                    alt={`Paso ${p.n}: ${p.titulo}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="[direction:ltr]">
                  <p className="font-display text-5xl md:text-6xl text-gold/40 mb-2">{p.n}</p>
                  <h2 className="text-2xl md:text-3xl font-display text-charcoal mb-3">{p.titulo}</h2>
                  <p className="text-charcoal/70 leading-relaxed">{p.texto}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-20">
            <a
              href="/agenda"
              className="inline-block min-h-[48px] px-8 py-4 bg-gradient-gold text-charcoal font-semibold tracking-widest uppercase text-sm"
            >
              Agendar mi consulta
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Proceso;
