import { motion } from "framer-motion";
import galGrabadoMontana from "@/assets/gal-solitario-oval-grabado-montana.png";
import galGrabadoCoordenadas from "@/assets/gal-tresillo-platino-grabado-coordenadas.png";
import galGrabadoLatido from "@/assets/gal-solitario-redondo-grabado-latido.png";
import galGrabadoHuella from "@/assets/gal-marquise-grabado-huella.png";

const grabados = [
  {
    img: galGrabadoMontana,
    simbolo: "Montaña",
    desc: "El cerro que los une, grabado para siempre en el interior de tu anillo.",
  },
  {
    img: galGrabadoCoordenadas,
    simbolo: "Coordenadas",
    desc: "El lugar exacto donde todo comenzó, fijado en metal.",
  },
  {
    img: galGrabadoLatido,
    simbolo: "Latido",
    desc: "El corazón de quien lo dio, grabado en la cara interna de la banda.",
  },
  {
    img: galGrabadoHuella,
    simbolo: "Huella dactilar",
    desc: "Única por definición. Literalmente llevas a esa persona contigo.",
  },
];

const GrabadosSimbolicosSection = () => (
  <section className="py-10 md:py-28 bg-background">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-2xl mx-auto"
      >
        <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
          Solo en Gia Solari
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
          El secreto que solo ustedes dos conocen
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          Ninguna joyería en Chile ofrece esto como concepto central de marca.
          En Gia Solari grabamos un símbolo en el interior de tu anillo —
          invisible para el mundo, infinito para ustedes.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
        {grabados.map((g, i) => (
          <motion.div
            key={g.simbolo}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex flex-col"
          >
            <div className="aspect-square overflow-hidden rounded-lg mb-3">
              <img
                src={g.img}
                alt={`Grabado ${g.simbolo} — Gia Solari Joyas`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="font-display text-sm md:text-base text-foreground mb-1">
              {g.simbolo}
            </p>
            <p className="text-muted-foreground text-xs leading-relaxed">
              {g.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center space-y-3"
      >
        <p className="text-muted-foreground text-sm italic">
          También grabamos constelaciones, olas, coordenadas, latidos y lo que imagines. <strong className="text-foreground not-italic">Incluido sin costo adicional.</strong>
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <a
            href="/cotizar"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors rounded-sm"
          >
            Diseña tu anillo
          </a>
          <a
            href="/joyas"
            className="inline-block px-8 py-3 border border-primary text-primary text-sm tracking-widest uppercase hover:bg-primary/5 transition-colors rounded-sm"
          >
            Ver más estilos →
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default GrabadosSimbolicosSection;
