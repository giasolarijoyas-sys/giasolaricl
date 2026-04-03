import { motion } from "framer-motion";
import galZafiro from "@/assets/gal-zafiro.jpeg";
import galArgolla from "@/assets/gal-argolla.jpeg";
import galTricillo from "@/assets/gal-tricillo.jpeg";
import galTricillo2 from "@/assets/gal-tricillo2.jpeg";
import galPrincesa from "@/assets/gal-princesa.jpeg";

const pieces = [
  { img: galZafiro, name: "Anillo Diana", desc: "Zafiro Azul · Halo Diamantes" },
  { img: galArgolla, name: "Argolla Eterna", desc: "Platino · Diseño Clásico" },
  { img: galTricillo, name: "Anillo Reina", desc: "Tricillo Diamantes · Platino" },
  { img: galTricillo2, name: "Anillo Legado", desc: "Tricillo · Vista Detalle" },
  { img: galPrincesa, name: "Anillo Princesa", desc: "Corte Princesa · Oro 18k" },
];

const Gallery = () => {
  return (
    <section id="galeria" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
            Colección
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
            Nuestras <em className="text-primary not-italic">joyitas</em>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Cada pieza es única y se crea exclusivamente a pedido.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {pieces.map((piece, i) => (
            <motion.div
              key={piece.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={piece.img}
                  alt={piece.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-all duration-500 flex items-end p-4">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-cream font-display text-sm md:text-base">
                    {piece.name}
                  </p>
                  <p className="text-cream/60 text-xs">{piece.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
