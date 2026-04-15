import { motion } from "framer-motion";

const placeholders = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  name: `Clienta ${i + 1}`,
  piece: "Pieza personalizada",
  tall: i % 3 === 0,
}));

const EnTusManos = () => (
  <section className="py-24 md:py-32 bg-card">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
          Galería
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
          En tus manos
        </h2>
        <p className="text-muted-foreground mt-4 max-w-md mx-auto italic">
          Las joyas viven cuando las llevan quienes amo
        </p>
      </motion.div>

      {/* Masonry grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
        {placeholders.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`mb-3 md:mb-4 break-inside-avoid group relative overflow-hidden rounded-lg ${
              p.tall ? "aspect-[3/4]" : "aspect-square"
            } bg-muted`}
          >
            <div className="w-full h-full bg-gradient-to-b from-muted to-muted/80" />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-all duration-300 flex items-end p-3">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-cream text-sm font-display">{p.name}</p>
                <p className="text-cream/60 text-xs">{p.piece}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-muted-foreground text-sm mb-3">
          ¿Ya tienes tu pieza? Etiquétame en Instagram
        </p>
        <a
          href="https://www.instagram.com/giasolari.cl/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2.5 border border-primary text-primary text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all"
        >
          @giasolari.cl
        </a>
      </motion.div>
    </div>
  </section>
);

export default EnTusManos;
