import { motion } from "framer-motion";

const OLIVE = "#4A5536";
const OLIVE_DARK = "#3A4429";
const CREAM = "#F5EFE6";
const INK = "#1A1A18";
const CARAMEL = "#C9A87C";

const VideoSection = () => (
  <section className="relative w-full overflow-hidden py-16 md:py-24" style={{ background: CREAM }}>
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">
      {/* Texto */}
      <div className="md:w-1/2 text-center md:text-left">
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "15px",
            color: CARAMEL,
            letterSpacing: "0.04em",
            marginBottom: "10px",
          }}
        >
          El detalle que se hereda
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            fontSize: "clamp(28px, 4vw, 46px)",
            lineHeight: 1.15,
            color: INK,
            marginBottom: "16px",
          }}
        >
          Cada joya, una historia
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            color: "#6B7752",
            lineHeight: 1.6,
            maxWidth: "420px",
            marginBottom: "24px",
          }}
          className="mx-auto md:mx-0"
        >
          Hecho a mano en Santiago, pieza por pieza. Diamantes y piedras
          certificadas montadas en oro 18k y platino.
        </p>
        <a
          href="https://wa.me/56984049502?text=Hola%20Maca%2C%20quiero%20cotizar%20una%20pieza"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-all"
          style={{
            background: OLIVE,
            color: CREAM,
            padding: "15px 34px",
            borderRadius: "999px",
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = OLIVE_DARK)}
          onMouseLeave={(e) => (e.currentTarget.style.background = OLIVE)}
        >
          Cotiza tu pieza
        </a>
      </div>

      {/* Video vertical */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        <div
          className="overflow-hidden shadow-xl"
          style={{ borderRadius: "20px", maxWidth: "300px", width: "100%" }}
        >
          <video
            src="/videos/proceso-halo.mp4"
            poster="/videos/proceso-halo-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-full object-cover block"
            style={{ aspectRatio: "9 / 16" }}
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default VideoSection;
