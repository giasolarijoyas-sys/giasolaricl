import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import StoneCard from "@/components/significados/StoneCard";
import GoldenDivider from "@/components/significados/GoldenDivider";
import { SIG_TOKENS, SIG_FONTS } from "@/components/significados/tokens";
import { DISENOS } from "@/data/significados";

const accents = [
  "#E8E4DC", "#D9CFBE", "#C7B89E", "#1E3A6B",
  "#B7C7BF", "#D8B8A4", "#7FB8C4", "#A8C3CE",
];

const Disenos = () => (
  <>
    <SEO
      title="Los Diseños · Cada anillo con su nombre | Gia Solari"
      description="El Eterno, El Alado, Las Tres Promesas, El Real. Conoce los diseños de Gia Solari, cada uno con nombre y narrativa propia."
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
          {DISENOS.map((d, i) => (
            <StoneCard
              key={d.slug}
              to={`/significados/disenos/${d.slug}`}
              nombre={d.nombre}
              subtitulo={d.subtitulo}
              accent={accents[i % accents.length]}
              kicker="Diseño"
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
