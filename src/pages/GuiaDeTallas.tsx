import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";

const tallas = [
  { talla: 4, circunferencia: "46.8 mm", diametro: "14.9 mm" },
  { talla: 5, circunferencia: "49.3 mm", diametro: "15.7 mm" },
  { talla: 6, circunferencia: "51.9 mm", diametro: "16.5 mm" },
  { talla: 7, circunferencia: "54.4 mm", diametro: "17.3 mm" },
  { talla: 8, circunferencia: "57.0 mm", diametro: "18.1 mm" },
  { talla: 9, circunferencia: "59.5 mm", diametro: "18.9 mm" },
  { talla: 10, circunferencia: "62.1 mm", diametro: "19.8 mm" },
  { talla: 11, circunferencia: "64.6 mm", diametro: "20.6 mm" },
  { talla: 12, circunferencia: "67.2 mm", diametro: "21.4 mm" },
  { talla: 13, circunferencia: "69.7 mm", diametro: "22.2 mm" },
];

const GuiaDeTallas = () => (
  <>
    <SEO
      title="Guía de Tallas de Anillos | Mide tu Talla en Casa, Gia Solari"
      description="Guía completa para medir la talla de tu anillo en casa, con tabla de circunferencia y diámetro. Perfecta para sorprender con un anillo de compromiso."
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
                  <th className="py-3 px-4 text-left font-display text-foreground">Talla</th>
                  <th className="py-3 px-4 text-left font-display text-foreground">Circunferencia</th>
                  <th className="py-3 px-4 text-left font-display text-foreground">Diámetro</th>
                </tr>
              </thead>
              <tbody>
                {tallas.map((t) => (
                  <tr key={t.talla} className="border-b border-border/50 hover:bg-card/50">
                    <td className="py-3 px-4 text-foreground font-medium">{t.talla}</td>
                    <td className="py-3 px-4 text-muted-foreground">{t.circunferencia}</td>
                    <td className="py-3 px-4 text-muted-foreground">{t.diametro}</td>
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
