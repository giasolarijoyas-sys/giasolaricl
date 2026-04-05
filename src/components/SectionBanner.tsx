import { motion } from "framer-motion";

interface SectionBannerProps {
  image: string;
  alt: string;
  text?: string;
  subtext?: string;
  ctaHref?: string;
  ctaLabel?: string;
  height?: string;
}

const SectionBanner = ({ image, alt, text, subtext, ctaHref, ctaLabel, height = "h-[45vh]" }: SectionBannerProps) => {
  return (
    <section className={`relative ${height} w-full overflow-hidden`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={alt}
      />
      <div className="absolute inset-0 bg-charcoal/50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {text && (
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl text-cream tracking-wide"
          >
            {text}
          </motion.h3>
        )}
        {subtext && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-cream/80 text-sm md:text-base tracking-widest uppercase max-w-lg"
          >
            {subtext}
          </motion.p>
        )}
        {ctaHref && ctaLabel && (
          <motion.a
            href={ctaHref}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-6 px-8 py-3 border border-cream/60 text-cream text-sm tracking-widest uppercase hover:bg-cream hover:text-charcoal transition-all"
          >
            {ctaLabel}
          </motion.a>
        )}
      </div>
    </section>
  );
};

export default SectionBanner;
