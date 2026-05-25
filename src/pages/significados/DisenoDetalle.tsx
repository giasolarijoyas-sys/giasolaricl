import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import GoldenDivider from "@/components/significados/GoldenDivider";
import StoryBox from "@/components/significados/StoryBox";
import { SIG_TOKENS, SIG_FONTS } from "@/components/significados/tokens";
import { DISENOS, waDiseno } from "@/data/significados";

const DisenoDetalle = () => {
  const { slug } = useParams();
  const d = DISENOS.find((x) => x.slug === slug);

  if (!d) return <Navigate to="/significados/disenos" replace />;

  return (
    <>
      <SEO
        title={`${d.nombre} · ${d.subtitulo} | Gia Solari`}
        description={`${d.subtitulo}. ${d.descripcion.slice(0, 140)}…`}
        path={`/significados/disenos/${d.slug}`}
        type="article"
      />
      <div style={{ background: SIG_TOKENS.bg, color: SIG_TOKENS.text }}>
        <Navbar />

        <section className="pt-36 pb-16 md:pt-44 md:pb-24 px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              to="/significados/disenos"
              style={{
                fontFamily: SIG_FONTS.body,
                fontSize: 11,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: SIG_TOKENS.gold,
                display: "inline-block",
              }}
            >
              ← Los Diseños
            </Link>
            <h1
              style={{
                fontFamily: SIG_FONTS.display,
                fontWeight: 400,
                fontSize: "clamp(40px, 7vw, 72px)",
                lineHeight: 1.05,
                marginTop: 16,
                marginBottom: 18,
              }}
            >
              {d.nombre}
            </h1>
            <p
              style={{
                fontFamily: SIG_FONTS.italic,
                fontStyle: "italic",
                fontSize: "clamp(20px, 2.5vw, 28px)",
                color: SIG_TOKENS.caramel,
              }}
            >
              {d.subtitulo}
            </p>
          </div>
        </section>

        <GoldenDivider />

        <section className="py-12 md:py-20 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <p
              style={{
                fontFamily: SIG_FONTS.body,
                fontSize: 11,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: SIG_TOKENS.gold,
                marginBottom: 16,
              }}
            >
              Descripción
            </p>
            <p
              style={{
                fontFamily: SIG_FONTS.body,
                fontWeight: 300,
                fontSize: 16,
                lineHeight: 1.9,
              }}
            >
              {d.descripcion}
            </p>

            <StoryBox>«{d.frase}»</StoryBox>
          </div>
        </section>

        <GoldenDivider />

        <section className="py-12 md:py-20 px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p
              style={{
                fontFamily: SIG_FONTS.body,
                fontSize: 11,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: SIG_TOKENS.gold,
                marginBottom: 16,
              }}
            >
              Ideal para
            </p>
            <p
              style={{
                fontFamily: SIG_FONTS.italic,
                fontStyle: "italic",
                fontSize: "clamp(20px, 2.6vw, 26px)",
                color: SIG_TOKENS.caramel,
                lineHeight: 1.5,
              }}
            >
              {d.idealPara}
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28 px-6 md:px-12 text-center" style={{ background: SIG_TOKENS.cream }}>
          <h2
            style={{
              fontFamily: SIG_FONTS.display,
              fontWeight: 400,
              fontSize: "clamp(26px, 4vw, 36px)",
              marginBottom: 18,
            }}
          >
            ¿Te imaginas {d.nombre}?
          </h2>
          <p
            style={{
              fontFamily: SIG_FONTS.body,
              fontWeight: 300,
              fontSize: 15,
              maxWidth: 460,
              margin: "0 auto 32px",
              lineHeight: 1.7,
            }}
          >
            Conversemos. Adaptamos el diseño a tu piedra, tu mano y tu historia.
          </p>
          <a
            href={waDiseno(d.nombre)}
            target="_blank"
            rel="noopener noreferrer"
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
            Cotizar este diseño
          </a>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default DisenoDetalle;
