import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

import imgDiamante from "@/assets/gal-diamante-halo.png";
import imgZafiro from "@/assets/gal-zafiro-halo.png";
import imgAguamarina from "@/assets/gal-aguamarina-halo.png";
import imgEsmeralda from "@/assets/gal-esmeralda-halo.png";
import imgRubi from "@/assets/gal-rubi-halo.png";

const BG = "#FAF8F4";
const TEXT = "#1A1614";
const GOLD = "#B8995A";
const CARAMEL = "#5C4A2A";
const BORDER = "#EDE6DA";

const DISPLAY = "'Playfair Display', serif";
const ITALIC = "'Cormorant Garamond', serif";
const BODY = "'Montserrat', 'Inter', sans-serif";

type PiedraPremium = {
  slug: string;
  nombre: string;
  simbolo: string;
  descripcion: string;
  img: string;
};

const PIEDRAS_PREMIUM: PiedraPremium[] = [
  {
    slug: "diamante",
    nombre: "Diamante",
    simbolo: "Símbolo de amor eterno, fortaleza y compromiso.",
    descripcion:
      "Los diamantes más valiosos son aquellos con menor presencia de color, permitiendo que la luz se refleje con máxima pureza. Su brillo excepcional y fuego natural los convierten en la gema más icónica para celebrar los momentos más importantes de la vida.",
    img: imgDiamante,
  },
  {
    slug: "zafiro",
    nombre: "Zafiro",
    simbolo: "Símbolo de sabiduría, lealtad y nobleza.",
    descripcion:
      "Los zafiros más apreciados poseen un azul intenso y profundo, conocido por su elegancia atemporal. Durante siglos han sido elegidos por la realeza y continúan siendo una de las gemas más sofisticadas de la alta joyería.",
    img: imgZafiro,
  },
  {
    slug: "rubi",
    nombre: "Rubí",
    simbolo: "Símbolo de pasión, fuerza y amor profundo.",
    descripcion:
      "Reconocido por su extraordinario color rojo intenso, el rubí es una de las gemas más raras y valiosas del mundo. Su energía vibrante y belleza cautivadora lo convierten en una piedra única para quienes buscan una joya con carácter.",
    img: imgRubi,
  },
  {
    slug: "esmeralda",
    nombre: "Esmeralda",
    simbolo: "Símbolo de renovación, esperanza y amor verdadero.",
    descripcion:
      "Las esmeraldas más exclusivas destacan por su intenso color verde y su incomparable vitalidad. Admiradas durante siglos, representan la conexión con la naturaleza, el crecimiento y los nuevos comienzos.",
    img: imgEsmeralda,
  },
  {
    slug: "aguamarina",
    nombre: "Aguamarina",
    simbolo: "Símbolo de calma, claridad y serenidad.",
    descripcion:
      "Inspirada en los tonos del océano, la aguamarina cautiva por su delicado color azul. Las piedras más valoradas presentan tonalidades profundas y luminosas, evocando la tranquilidad y belleza del mar.",
    img: imgAguamarina,
  },
];

const PremiumStoneCard = ({ p }: { p: PiedraPremium }) => (
  <Link
    to={`/significados/piedras/${p.slug}`}
    className="group block bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-25px_rgba(26,22,20,0.18)]"
    style={{
      border: `1px solid ${BORDER}`,
      borderRadius: 6,
      color: TEXT,
      overflow: "hidden",
    }}
  >
    <div
      className="w-full overflow-hidden flex items-center justify-center"
      style={{
        aspectRatio: "1 / 1",
        background: "#F5EFE6",
      }}
    >
      <img
        src={p.img}
        alt={p.nombre}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
    </div>

    <div className="px-8 py-10 md:px-10 md:py-12 text-center">
      <h3
        style={{
          fontFamily: DISPLAY,
          fontWeight: 400,
          fontSize: "clamp(26px, 2.4vw, 32px)",
          letterSpacing: "0.04em",
          marginBottom: 14,
          lineHeight: 1.15,
        }}
      >
        {p.nombre}
      </h3>

      <div
        aria-hidden
        style={{
          width: 32,
          height: 1,
          background: GOLD,
          margin: "0 auto 22px",
          opacity: 0.7,
        }}
      />

      <p
        style={{
          fontFamily: ITALIC,
          fontStyle: "italic",
          fontSize: "clamp(16px, 1.5vw, 18px)",
          color: CARAMEL,
          lineHeight: 1.5,
          marginBottom: 20,
        }}
      >
        {p.simbolo}
      </p>

      <p
        style={{
          fontFamily: BODY,
          fontSize: 14,
          fontWeight: 300,
          lineHeight: 1.75,
          color: TEXT,
          opacity: 0.78,
        }}
      >
        {p.descripcion}
      </p>

      <span
        className="inline-block mt-8 transition-all duration-300 group-hover:tracking-[0.32em]"
        style={{
          fontFamily: BODY,
          fontSize: 10.5,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: GOLD,
          fontWeight: 500,
        }}
      >
        Descubrir
      </span>
    </div>
  </Link>
);

const Piedras = () => (
  <>
    <SEO
      title="Las Piedras, Alta joyería | Gia Solari"
      description="Diamante, zafiro, rubí, esmeralda y aguamarina. Conoce el significado y la belleza natural detrás de cada gema en la alta joyería de Gia Solari."
      path="/significados/piedras"
    />
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <Navbar />

      <section className="pt-40 pb-16 md:pt-48 md:pb-24 px-6 md:px-12 text-center">
        <p
          style={{
            fontFamily: BODY,
            fontSize: 11,
            letterSpacing: "0.36em",
            textTransform: "uppercase",
            color: GOLD,
            marginBottom: 28,
            fontWeight: 500,
          }}
        >
          Alta Joyería, Gia Solari
        </p>
        <h1
          style={{
            fontFamily: DISPLAY,
            fontWeight: 400,
            fontSize: "clamp(40px, 6.5vw, 72px)",
            lineHeight: 1.05,
            letterSpacing: "0.01em",
            marginBottom: 26,
          }}
        >
          Las Piedras
        </h1>
        <div
          aria-hidden
          style={{
            width: 44,
            height: 1,
            background: GOLD,
            margin: "0 auto 26px",
          }}
        />
        <p
          style={{
            fontFamily: ITALIC,
            fontStyle: "italic",
            fontSize: "clamp(18px, 2vw, 22px)",
            color: CARAMEL,
            maxWidth: 580,
            margin: "0 auto",
            lineHeight: 1.5,
          }}
        >
          Cada gema guarda siglos de historia, belleza y significado. Conoce la tuya.
        </p>
      </section>

      <section className="pb-28 md:pb-40 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {PIEDRAS_PREMIUM.map((p) => (
            <PremiumStoneCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  </>
);

export default Piedras;
