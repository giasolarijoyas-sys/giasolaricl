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
    titulo: "Consulta",
    img: paso1,
    texto: "Conversamos sobre tu historia, tu estilo y tu presupuesto. Por WhatsApp, video o en el showroom.",
  },
  {
    n: "02",
    titulo: "Diseño",
    img: paso2,
    texto: "Te enviamos un boceto con las opciones de metal, piedra y proporciones. Iteramos hasta que sea exactamente lo que imaginas.",
  },
  {
    n: "03",
    titulo: "Aprobación",
    img: paso3,
    texto: "Confirmas el diseño final y haces el abono del 70%. Empezamos a fabricar.",
  },
  {
    n: "04",
    titulo: "Fabricación",
    img: paso4,
    texto: "Cada pieza se hace a mano en nuestro taller en Santiago. 4 a 6 semanas, una a la vez.",
  },
  {
    n: "05",
    titulo: "Entrega",
    img: paso5,
    texto: "Recibes tu pieza con su empaque, certificado de la piedra y la Garantía por Gusto activa por 30 días.",
  },
];

const Proceso = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Nuestro Proceso | Cómo diseñamos tu joya — Gia Solari"
        description="Conoce nuestro proceso paso a paso: consulta, diseño, aprobación, fabricación y entrega. Joyas hechas a mano en Santiago."
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
            <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">El Proceso</p>
            <h1 className="text-3xl md:text-5xl font-display text-charcoal mb-4">
              De la idea a la joya
            </h1>
            <p className="text-charcoal/70 leading-relaxed">
              Cinco pasos simples. Cada pieza, una conversación.
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
