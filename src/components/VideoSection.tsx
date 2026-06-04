import { motion } from "framer-motion";

const VideoSection = () => (
  <section className="relative w-full overflow-hidden">
    {/* Placeholder, replace with real video */}
    <div className="aspect-video md:aspect-[16/7] bg-charcoal relative flex items-center justify-center">
      <div className="absolute inset-0 bg-charcoal/50 z-10" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full bg-gradient-dark" />
      </div>
      <motion.div
        className="relative z-20 text-center px-4"
      >
        <h2 className="font-display text-3xl md:text-5xl text-cream mb-6">
          Cada joya, una historia
        </h2>
        <a
          href="#galeria"
          className="inline-block px-8 py-3 border border-cream/50 text-cream text-sm tracking-widest uppercase hover:bg-cream/10 transition-colors"
        >
          Ver mi trabajo
        </a>
      </motion.div>
    </div>
  </section>
);

export default VideoSection;
