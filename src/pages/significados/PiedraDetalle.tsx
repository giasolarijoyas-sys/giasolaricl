import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import GoldenDivider from "@/components/significados/GoldenDivider";
import StoryBox from "@/components/significados/StoryBox";
import { SIG_TOKENS, SIG_FONTS } from "@/components/significados/tokens";
import { PIEDRAS, waPiedra } from "@/data/significados";

const PiedraDetalle = () => {
  const { slug } = useParams();
  const piedra = PIEDRAS.find((p) => p.slug === slug);

  if (!piedra) return <Navigate to="/significados/piedras" replace />;

  return (
    <>
      <SEO
        title={`${piedra.nombre} · ${piedra.subtitulo} | Gia Solari`}
        description={`${piedra.subtitulo}. ${piedra.historia.slice(0, 140)}…`}
        path={`/significados/piedras/${piedra.slug}`}
        type="article"
      />
      <div style={{ background: SIG_TOKENS.bg, color: SIG_TOKENS.text }}>
        <Navbar />

        {/* HERO */}
        <section className="pt-36 pb-16 md:pt-44 md:pb-24 px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              to="/significados/piedras"
              style={{
                fontFamily: SIG_FONTS.body,
                fontSize: 11,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: SIG_TOKENS.gold,
                marginBottom: 28,
                display: "inline-block",
              }}
            >
              ← Las Piedras
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
              {piedra.nombre}
            </h1>
            <p
              style={{
                fontFamily: SIG_FONTS.italic,
                fontStyle: "italic",
                fontSize: "clamp(20px, 2.5vw, 28px)",
                color: SIG_TOKENS.caramel,
              }}
            >
              {piedra.subtitulo}
            </p>
          </div>

          {/* Visual de la piedra */}
          <div
            className="mt-14 mx-auto max-w-md aspect-square"
            style={{
              background: `radial-gradient(circle at 35% 35%, ${piedra.color}ee, ${piedra.color}99 55%, ${piedra.color}55)`,
              borderRadius: "50%",
            }}
            aria-hidden="true"
          />
        </section>

        <GoldenDivider />

        {/* DATOS */}
        <section className="py-12 md:py-16 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <p
              style={{
                fontFamily: SIG_FONTS.body,
                fontSize: 11,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: SIG_TOKENS.gold,
                marginBottom: 20,
              }}
            >
              Datos
            </p>
            <dl className="divide-y" style={{ borderColor: SIG_TOKENS.border }}>
              {piedra.datos.map((d) => (
                <div
                  key={d.label}
                  className="grid grid-cols-[140px_1fr] md:grid-cols-[200px_1fr] gap-6 py-4"
                  style={{ borderTop: `1px solid ${SIG_TOKENS.border}` }}
                >
                  <dt
                    style={{
                      fontFamily: SIG_FONTS.body,
                      fontSize: 11,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: SIG_TOKENS.caramel,
                      paddingTop: 2,
                    }}
                  >
                    {d.label}
                  </dt>
                  <dd
                    style={{
                      fontFamily: SIG_FONTS.body,
                      fontWeight: 300,
                      fontSize: 15,
                      lineHeight: 1.6,
                    }}
                  >
                    {d.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <GoldenDivider />

        {/* HISTORIA */}
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
              Su historia
            </p>
            <h2
              style={{
                fontFamily: SIG_FONTS.display,
                fontWeight: 400,
                fontSize: "clamp(28px, 4vw, 40px)",
                marginBottom: 28,
                lineHeight: 1.2,
              }}
            >
              De dónde viene
            </h2>
            <p
              style={{
                fontFamily: SIG_FONTS.body,
                fontWeight: 300,
                fontSize: 16,
                lineHeight: 1.9,
              }}
            >
              {piedra.historia}
            </p>

            <StoryBox>
              {piedra.frases.map((f, i) => (
                <p key={i} className={i > 0 ? "mt-6" : ""}>
                  «{f}»
                </p>
              ))}
            </StoryBox>
          </div>
        </section>

        <GoldenDivider />

        {/* PROPIEDADES */}
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
              Propiedades energéticas
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-5 mt-6">
              {piedra.propiedades.map((p) => (
                <li
                  key={p}
                  className="flex gap-3"
                  style={{
                    fontFamily: SIG_FONTS.body,
                    fontWeight: 300,
                    fontSize: 15,
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: SIG_TOKENS.gold }}>✦</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <GoldenDivider />

        {/* PARA QUÉ CLIENTA */}
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
              ¿Para qué clienta?
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
              {piedra.paraQuienta}
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 px-6 md:px-12 text-center" style={{ background: SIG_TOKENS.cream }}>
          <h2
            style={{
              fontFamily: SIG_FONTS.display,
              fontWeight: 400,
              fontSize: "clamp(26px, 4vw, 36px)",
              marginBottom: 18,
            }}
          >
            ¿Quieres un anillo con {piedra.nombre.toLowerCase()}?
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
            Conversemos. Te cuento opciones, posibilidades de diseño y rangos de inversión.
          </p>
          <a
            href={waPiedra(piedra.nombre)}
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
            Cotizar un anillo con esta piedra
          </a>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default PiedraDetalle;
