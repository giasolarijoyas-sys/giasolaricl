import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import galZafiro from "@/assets/gal-zafiro.jpeg";
import galArgolla from "@/assets/gal-argolla.jpeg";
import galTricillo from "@/assets/gal-tricillo.jpeg";
import galTricillo2 from "@/assets/gal-tricillo2.jpeg";
import galPrincesa from "@/assets/gal-princesa.jpeg";
import galHaloZafiro from "@/assets/gal-halo-zafiro.jpeg";
import galEsmeraldaHalo from "@/assets/gal-esmeralda-halo.png";
import galZafirosBanda from "@/assets/gal-zafiros-banda.png";
import galArtDeco from "@/assets/gal-art-deco.png";
import galVintageFiligrana from "@/assets/gal-vintage-filigrana.jpg";
import galOvalPave from "@/assets/gal-oval-pave.jpg";
import galSolitarioChevron from "@/assets/gal-solitario-chevron.jpg";
import galCincoPiedras from "@/assets/gal-cinco-piedras.jpeg";
import galBrazaleteOro from "@/assets/gal-brazalete-oro.png";

type Category =
  | "todas"
  | "compromiso"
  | "petit"
  | "collares"
  | "aros"
  | "pulseras"
  | "religiosas";

interface Piece {
  img: string;
  name: string;
  desc: string;
  category: Category;
}

const categories: { key: Category; label: string }[] = [
  { key: "todas", label: "Todas" },
  { key: "compromiso", label: "Anillos de Compromiso" },
  { key: "petit", label: "Anillos Petit" },
  { key: "collares", label: "Collares" },
  { key: "aros", label: "Aros" },
  { key: "pulseras", label: "Pulseras & Esclavas" },
  { key: "religiosas", label: "Bautizo & Religiosas" },
];

const pieces: Piece[] = [
  // Anillos de compromiso
  { img: galZafiro, name: "Anillo Diana", desc: "Zafiro Azul · Halo Diamantes", category: "compromiso" },
  { img: galEsmeraldaHalo, name: "Anillo Celeste", desc: "Corte Esmeralda · Halo Pavé", category: "compromiso" },
  { img: galOvalPave, name: "Anillo Paraíba", desc: "Turmalina Oval · Pavé Diamantes", category: "compromiso" },
  { img: galHaloZafiro, name: "Anillo Royal", desc: "Zafiro Oval · Halo Clásico", category: "compromiso" },
  { img: galTricillo, name: "Anillo Reina", desc: "Tricillo Diamantes · Platino", category: "compromiso" },
  { img: galArtDeco, name: "Anillo Gatsby", desc: "Corte Princesa · Art Déco", category: "compromiso" },
  { img: galSolitarioChevron, name: "Anillo Etéreo", desc: "{ img: galSolitarioChevron, name: "Anillo Etéreo", desc: "Solitario Chevrón · Oro Blanco", category: "compromiso" },", category: "compromiso" },
  { img: galTricillo2, name: "Anillo Legado", desc: "Tricillo · Vista Detalle", category: "compromiso" },
  { img: galCincoPiedras, name: "Anillo Constelación", desc: "Cinco Piedras · Platino", category: "compromiso" },
  { img: galPrincesa, name: "Anillo Princesa", desc: "Corte Princesa · Oro 18k", category: "compromiso" },

  // Anillos petit
  { img: galZafirosBanda, name: "Anillo Corona", desc: "Zafiros · Banda Diamantes", category: "petit" },
  { img: galVintageFiligrana, name: "Anillo Heritage", desc: "Aguamarina · Filigrana Vintage", category: "petit" },
  { img: galArgolla, name: "Argolla Eterna", desc: "Platino · Diseño Clásico", category: "petit" },

  // Pulseras
  { img: galBrazaleteOro, name: "Brazalete Clásico", desc: "Oro 18k · Diseño Atemporal", category: "pulseras" },
];

const Gallery = () => {
  const [active, setActive] = useState<Category>("todas");

  const filtered = active === "todas" ? pieces : pieces.filter((p) => p.category === active);

  // Count items per category for the badge
  const countFor = (cat: Category) =>
    cat === "todas" ? pieces.length : pieces.filter((p) => p.category === cat).length;

  return (
    <section id="galeria" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
            Colección
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
            Un poco de <em className="text-primary not-italic">lo que hacemos</em>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Cada pieza es única y se crea exclusivamente a pedido.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const count = countFor(cat.key);
            if (count === 0 && cat.key !== "todas") return null;
            return (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`px-4 py-2 rounded-full text-sm transition-all border ${
                  active === cat.key
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {cat.label}
                {cat.key !== "todas" && (
                  <span className="ml-1.5 text-xs opacity-60">({count})</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Empty state for categories without items */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground text-lg mb-2">Próximamente</p>
            <p className="text-muted-foreground text-sm">
              Estamos preparando piezas increíbles para esta categoría. ¡Vuelve pronto!
            </p>
          </motion.div>
        )}

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {filtered.map((piece, i) => (
              <motion.div
                key={piece.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
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
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
