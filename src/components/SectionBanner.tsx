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

const SectionBanner = ({ image, alt, text, subtext, ctaHref, ctaLabel, height = "h-[30vh] md:h-[45vh]" }: SectionBannerProps) => {
  return (
    <section className={`relative ${height} w-full overflow-hidden`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={alt}
      />
      <div className="absolute inset-0 bg-charcoal/60" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5 md:px-4">
        {text && (
          <motion.h3
            className="font-display text-[clamp(1.75rem,7vw,3rem)] md:text-5xl text-cream tracking-wide leading-tight"
            style={{ textShadow: "0 2px 18px rgba(0,0,0,0.45)" }}
          >
            {text}
          </motion.h3>
        )}
        {subtext && (
          <motion.p
            transition={{ delay: 0.15 }}
            className="mt-3 md:mt-4 text-cream/90 text-xs md:text-base tracking-[0.18em] md:tracking-widest uppercase max-w-lg font-medium"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.4)" }}
          >
            {subtext}
          </motion.p>
        )}
        {ctaHref && ctaLabel && (
          <motion.a
            href={ctaHref}
            transition={{ delay: 0.25 }}
            className="mt-6 px-8 py-3 border border-cream/70 text-cream text-sm tracking-widest uppercase hover:bg-cream hover:text-charcoal transition-all"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}
          >
            {ctaLabel}
          </motion.a>
        )}
      </div>
    </section>
  );
};

export default SectionBanner;
