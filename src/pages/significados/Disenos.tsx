import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import StoneCard from "@/components/significados/StoneCard";
import GoldenDivider from "@/components/significados/GoldenDivider";
import { SIG_TOKENS, SIG_FONTS } from "@/components/significados/tokens";
import { DISENOS } from "@/data/significados";

import imgEterno from "@/assets/joyas/solitario-oval-platino-01.jpg";
import imgTricillo from "@/assets/gal-tricillo.jpeg";
import imgAlado from "@/assets/diseno-el-alado.png";
import imgReal from "@/assets/diseno-el-real.png";
import imgTiempo from "@/assets/diseno-el-tiempo.png";
import imgPilares from "@/assets/diseno-los-cuatro-pilares.png";
import imgConstelacion from "@/assets/diseno-la-constelacion.png";

const FOTOS: Partial<Record<string, string>> = {
  "el-eterno": imgEterno,
  "el-tricillo": imgTricillo,
  "el-alado": imgAlado,
  "el-real": imgReal,
  "el-tiempo": imgTiempo,
  "los-cuatro-pilares": imgPilares,
  "la-constelacion": imgConstelacion,
};

const ALT_TEXT: Record<string, string> = {
  "el-eterno": "El Eterno, anillo media alianza con diamantes redondos en oro blanco",
  "el-tricillo": "El Tricillo, anillo de tres diamantes redondos en oro blanco",
  "el-alado": "El Alado, anillo de halo redondo en oro blanco",
  "el-real": "El Real, anillo con zafiro azul ovalado y cluster de diamantes",
  "el-tiempo": "El Tiempo, solitario ovalado sobre piedra clara",
  "los-cuatro-pilares": "Los Cuatro Pilares, anillo con cuatro diamantes redondos en fila",
  "la-constelacion": "La Constelación, anillo de tres piedras con halo central",
};

const Disenos = () => (
  <>
    <SEO
      title="Anillos de Compromiso a Medida en Chile: Solitario, Halo y Tres Piedras"
      description="Diseños de anillo de compromiso a medida en Chile: solitario, halo, tres piedras y estilo Lady Di con zafiro. Oro 18k, platino y diamantes certificados GIA."
      path="/significados/disenos"
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
          Los Diseños
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
          Cada anillo tiene un nombre. Y cada nombre, una historia.
        </p>
      </section>

      <GoldenDivider />

      <section className="pb-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-12">
          {DISENOS.map((d) => (
            <StoneCard
              key={d.slug}
              to={`/significados/disenos/${d.slug}`}
              nombre={d.nombre}
              subtitulo={d.subtitulo}
              accent={SIG_TOKENS.cream}
              kicker="Diseño"
              img={FOTOS[d.slug]}
              alt={ALT_TEXT[d.slug]}
            />
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  </>
);

export default Disenos;
