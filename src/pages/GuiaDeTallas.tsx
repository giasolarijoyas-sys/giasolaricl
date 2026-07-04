import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";

const tallas = [
  { mm: "14,9 mm", cl: "6", us: "4" },
  { mm: "15,3 mm", cl: "7", us: "4.5" },
  { mm: "15,7 mm", cl: "9", us: "5" },
  { mm: "16,1 mm", cl: "10", us: "5.5" },
  { mm: "16,5 mm", cl: "12", us: "6" },
  { mm: "16,9 mm", cl: "13", us: "6.5" },
  { mm: "17,3 mm", cl: "14", us: "7" },
  { mm: "17,7 mm", cl: "15", us: "7.5" },
  { mm: "18,1 mm", cl: "16", us: "8" },
  { mm: "18,5 mm", cl: "17", us: "8.5" },
  { mm: "18,9 mm", cl: "18", us: "9" },
  { mm: "19,4 mm", cl: "19", us: "9.5" },
];

const GuiaDeTallas = () => (
  <>
    <SEO
      title="Guía de Tallas de Anillos: Cómo Medir en Casa | Gia Solari"
      description="Cómo saber tu talla de anillo en casa con tabla de conversión Chile, USA, UK y diámetro en mm. Guía práctica para elegir un anillo de compromiso a medida."
      path="/guia-de-tallas"
    />
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Herramientas</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">Guía de Tallas</h1>
          </motion.div>

          {/* Método más fácil */}
          <div className="bg-primary/5 border border-primary/30 rounded-lg p-6 md:p-8 mb-6">
            <p className="text-primary tracking-[0.2em] uppercase text-[11px] mb-2">El método más fácil</p>
            <h2 className="font-display text-xl text-foreground mb-3">¿No sabes su talla?</h2>
            <p className="text-foreground/85 text-sm leading-relaxed mb-4">
              Mándame una foto de su mano y la calculo con muy alta precisión, sin que se entere. Es el método que más uso para sorpresas.
            </p>
            <a
              href="https://wa.me/56984049502?text=Hola%20Maca%2C%20quiero%20calcular%20la%20talla%20a%20partir%20de%20una%20foto%20de%20su%20mano"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-xs tracking-[0.2em] uppercase bg-primary text-primary-foreground hover:opacity-90 transition-opacity rounded-md"
            >
              Enviar foto por WhatsApp
            </a>
          </div>

          {/* Instructions */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 mb-10">
            <h2 className="font-display text-xl text-foreground mb-4">Cómo medir tu talla en casa</h2>
            <ol className="space-y-3 text-muted-foreground text-sm leading-relaxed list-decimal list-inside">
              <li>Toma un hilo o una tira de papel delgada.</li>
              <li>Envuélvelo alrededor de tu dedo, justo donde usarías el anillo.</li>
              <li>Marca donde se cruza con un lápiz.</li>
              <li>Mide la distancia con una regla, esa es tu circunferencia.</li>
              <li>Busca tu medida en la tabla de abajo.</li>
            </ol>
            <p className="text-muted-foreground text-xs mt-4 italic">Tip: Mide al final del día cuando tus dedos están más anchos. Si dudas entre dos tallas, elige la mayor.</p>
          </div>


          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 text-left font-display text-foreground">Diámetro interno</th>
                  <th className="py-3 px-4 text-left font-display text-foreground">Talla Chile</th>
                  <th className="py-3 px-4 text-left font-display text-foreground">Talla USA</th>
                </tr>
              </thead>
              <tbody>
                {tallas.map((t) => (
                  <tr key={t.cl} className="border-b border-border/50 hover:bg-card/50">
                    <td className="py-3 px-4 text-foreground font-medium">{t.mm}</td>
                    <td className="py-3 px-4 text-muted-foreground">{t.cl}</td>
                    <td className="py-3 px-4 text-muted-foreground">{t.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  </>
);

export default GuiaDeTallas;
