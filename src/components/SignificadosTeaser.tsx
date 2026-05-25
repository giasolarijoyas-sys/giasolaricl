import StoneCard from "@/components/significados/StoneCard";
import GoldenDivider from "@/components/significados/GoldenDivider";
import { SIG_TOKENS, SIG_FONTS } from "@/components/significados/tokens";
import { PIEDRAS, DISENOS } from "@/data/significados";

// Sección home: "Cada joya tiene una historia"
const SignificadosTeaser = () => {
  const piedrasHome = PIEDRAS.filter((p) => ["diamante", "zafiro", "aguamarina"].includes(p.slug));
  const disenosHome = DISENOS.filter((d) => ["el-eterno", "las-tres-promesas", "el-alado"].includes(d.slug));
  const accents = ["#E8E4DC", "#D9CFBE", "#C7B89E"];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12" style={{ background: SIG_TOKENS.bg }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p
            style={{
              fontFamily: SIG_FONTS.body,
              fontSize: 11,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: SIG_TOKENS.gold,
              marginBottom: 18,
            }}
          >
            Significados
          </p>
          <h2
            style={{
              fontFamily: SIG_FONTS.display,
              fontWeight: 400,
              fontSize: "clamp(32px, 5vw, 50px)",
              lineHeight: 1.15,
              color: SIG_TOKENS.text,
            }}
          >
            Cada joya tiene una historia
          </h2>
        </div>

        {/* Piedras */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 mb-20">
          {piedrasHome.map((p, i) => (
            <StoneCard
              key={p.slug}
              to={`/significados/piedras/${p.slug}`}
              nombre={p.nombre}
              subtitulo={p.subtitulo}
              frase={p.frases[0]}
              accent={p.color}
              kicker="Piedra"
            />
          ))}
        </div>

        {/* Diseños */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {disenosHome.map((d, i) => (
            <StoneCard
              key={d.slug}
              to={`/significados/disenos/${d.slug}`}
              nombre={d.nombre}
              subtitulo={d.subtitulo}
              frase={d.frase}
              accent={accents[i]}
              kicker="Diseño"
            />
          ))}
        </div>

        <GoldenDivider />

        <div className="text-center max-w-3xl mx-auto">
          <p
            style={{
              fontFamily: SIG_FONTS.italic,
              fontStyle: "italic",
              fontSize: "clamp(24px, 3.4vw, 36px)",
              color: SIG_TOKENS.gold,
              lineHeight: 1.3,
              marginBottom: 32,
            }}
          >
            «Una joya sin historia es solo un objeto. Con historia, es un amuleto.»
          </p>
          <a
            href="/significados/piedras"
            style={{
              fontFamily: SIG_FONTS.body,
              fontSize: 12,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              padding: "16px 36px",
              background: SIG_TOKENS.text,
              color: SIG_TOKENS.bg,
              borderRadius: 999,
              display: "inline-block",
            }}
          >
            Conoce todos los significados
          </a>
        </div>
      </div>
    </section>
  );
};

export default SignificadosTeaser;
