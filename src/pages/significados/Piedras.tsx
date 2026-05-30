import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import StoneCard from "@/components/significados/StoneCard";
import GoldenDivider from "@/components/significados/GoldenDivider";
import { SIG_TOKENS, SIG_FONTS } from "@/components/significados/tokens";
import { PIEDRAS } from "@/data/significados";

import imgDiamante from "@/assets/gal-solitario-caja.jpg";
import imgZafiro from "@/assets/gal-halo-zafiro.jpeg";
import imgAguamarina from "@/assets/gal-aguamarina-halo.png";
import imgEsmeralda from "@/assets/gal-esmeralda-halo.png";
import imgRubi from "@/assets/gal-rubi-halo.png";

const FOTOS: Record<string, string> = {
  diamante: imgDiamante,
  zafiro: imgZafiro,
  aguamarina: imgAguamarina,
  esmeralda: imgEsmeralda,
  rubi: imgRubi,
};

const Piedras = () => (
  <>
    <SEO
      title="Las Piedras · Cada gema con su historia | Gia Solari"
      description="Diamante, zafiro, esmeralda, rubí, aguamarina, amatista, morganita y perla. Conoce el simbolismo y la historia milenaria detrás de cada piedra."
      path="/significados/piedras"
    />
    <div style={{ background: SIG_TOKENS.bg, color: SIG_TOKENS.text }}>
      <Navbar />

      <section className="pt-36 pb-16 md:pt-44 md:pb-20 px-6 md:px-12 text-center">
        <p
          style={{
            fontFamily: SIG_FONTS.body,
            fontSize: 11,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: SIG_TOKENS.gold,
            marginBottom: 24,
          }}
        >
          Significados
        </p>
        <h1
          style={{
            fontFamily: SIG_FONTS.display,
            fontWeight: 400,
            fontSize: "clamp(36px, 6vw, 64px)",
            lineHeight: 1.1,
            marginBottom: 18,
          }}
        >
          Las Piedras
        </h1>
        <p
          style={{
            fontFamily: SIG_FONTS.italic,
            fontStyle: "italic",
            fontSize: "clamp(18px, 2.2vw, 22px)",
            color: SIG_TOKENS.caramel,
            maxWidth: 560,
            margin: "0 auto",
          }}
        >
          Cada piedra lleva milenios de historia. Conoce la tuya.
        </p>
      </section>

      <GoldenDivider />

      <section className="pb-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-12">
          {PIEDRAS.map((p) => (
            <StoneCard
              key={p.slug}
              to={`/significados/piedras/${p.slug}`}
              nombre={p.nombre}
              subtitulo={p.subtitulo}
              accent={p.color}
              kicker="Piedra"
              img={FOTOS[p.slug]}
            />
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  </>
);

export default Piedras;
