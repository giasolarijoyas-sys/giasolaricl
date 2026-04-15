import { motion } from "framer-motion";

// Workshop / process photos moved from Gallery
import tallerImg1 from "@/assets/gal-sesion-dsc_5890.jpg";
import tallerImg2 from "@/assets/gal-sesion-dsc_5898.jpg";
import tallerImg3 from "@/assets/gal-sesion-dsc_5902.jpg";
import tallerImg4 from "@/assets/gal-sesion-dsc_5948.jpg";
import tallerImg5 from "@/assets/gal-sesion-dsc_5984.jpg";

const photos = [
  { src: tallerImg1, alt: "Proceso artesanal — detalle de engaste" },
  { src: tallerImg2, alt: "Manos trabajando una pieza" },
  { src: tallerImg3, alt: "Soldando con precisión" },
  { src: tallerImg4, alt: "Inspección con lupa" },
  { src: tallerImg5, alt: "Pulido final de la joya" },
];

const ElTaller = () => (
  <section id="taller" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
          El Taller
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
          Donde nacen las <em className="text-primary not-italic">historias</em>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
          Cada pieza se diseña y fabrica a mano en Santiago, una a la vez.
        </p>
      </motion.div>

      {/* Editorial grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`overflow-hidden rounded-lg ${
              i === 0 ? "col-span-2 md:col-span-2 row-span-2" : ""
            }`}
          >
            <div className={`${i === 0 ? "aspect-[4/3]" : "aspect-square"} overflow-hidden`}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ElTaller;
