import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import GoldenDivider from "@/components/significados/GoldenDivider";
import StoryBox from "@/components/significados/StoryBox";
import { SIG_TOKENS, SIG_FONTS } from "@/components/significados/tokens";
import { DISENOS, waDiseno } from "@/data/significados";
import TrustMicrocopy from "@/components/TrustMicrocopy";

type AprendeLink = { label: string; href: string };

// Enlaces internos a artículos de /aprende por slug de diseño.
const APRENDE_LINKS: Record<string, AprendeLink[]> = {
  "el-eterno": [
    { label: "Cómo elegir tu anillo de compromiso", href: "/aprende/como-elegir-anillo-compromiso" },
    { label: "Las 4C del Diamante", href: "/aprende/diamantes-4c" },
  ],
  "el-tricillo": [
    { label: "Cómo elegir tu anillo de compromiso", href: "/aprende/como-elegir-anillo-compromiso" },
  ],
  "el-alado": [
    { label: "Cómo elegir tu anillo de compromiso", href: "/aprende/como-elegir-anillo-compromiso" },
    { label: "Las 4C del Diamante", href: "/aprende/diamantes-4c" },
  ],
  "el-real": [
    { label: "Anillo de compromiso con zafiro", href: "/aprende/anillo-compromiso-zafiro" },
  ],
  "el-tiempo": [
    { label: "Las 4C del Diamante", href: "/aprende/diamantes-4c" },
  ],
  "los-cuatro-pilares": [
    { label: "Oro 18k vs Platino", href: "/aprende/oro-vs-platino" },
  ],
  "la-constelacion": [
    { label: "Las 4C del Diamante", href: "/aprende/diamantes-4c" },
  ],
};

// SEO + extra SEO copy por slug. Las tres promesas usa el slug actual "el-tricillo".
const SEO_OVERRIDES: Record<string, { title: string; description: string }> = {
  "el-eterno": {
    title: "El Eterno · Anillo de compromiso solitario | Gia Solari",
    description:
      "Anillo solitario de compromiso a medida en platino u oro 18k con diamante certificado. Una piedra, una promesa. Atelier en Las Condes, Santiago.",
  },
  "el-tricillo": {
    title: "Las Tres Promesas · Anillo de compromiso tres piedras | Gia Solari",
    description:
      "Anillo de compromiso de tres diamantes (trilogy) a medida en platino u oro 18k. Pasado, presente y futuro. Diseño de autor en Santiago.",
  },
  "el-alado": {
    title: "El Alado · Anillo de compromiso con halo de diamantes | Gia Solari",
    description:
      "Anillo de compromiso con halo de diamantes a medida, inspirado en el estilo de Lady Di. Más brillo y presencia. Atelier en Las Condes, Santiago.",
  },
  "el-real": {
    title: "El Real · Anillo de zafiro azul estilo Lady Di | Gia Solari",
    description:
      "Anillo de compromiso con zafiro azul ovalado y halo de diamantes, inspirado en el de Lady Di. A medida en platino u oro 18k. Santiago, Chile.",
  },
  "el-tiempo": {
    title: "El Tiempo · Anillo de compromiso ovalado | Gia Solari",
    description:
      "Anillo de compromiso con diamante ovalado a medida en platino u oro 18k. La forma más buscada del momento, fluida y atemporal. Santiago.",
  },
  "los-cuatro-pilares": {
    title: "Los Cuatro Pilares · Anillo de cuatro diamantes | Gia Solari",
    description:
      "Anillo de compromiso de cuatro diamantes en línea, a medida en platino u oro 18k. Equilibrio y simetría. Diseño de autor en Santiago.",
  },
  "la-constelacion": {
    title: "La Constelación · Anillo de tres piedras con halo | Gia Solari",
    description:
      "Anillo de compromiso de tres piedras con halo central, el diseño más luminoso. A medida en platino u oro 18k. Atelier en Las Condes, Santiago.",
  },
  "el-primer-amuleto": {
    title: "El Primer Amuleto · Dije con piedra de nacimiento | Gia Solari",
    description:
      "Dije a medida en oro con la piedra de nacimiento del bebé. Regalo de bautizo y bienvenida al mundo. Joyería de autor en Santiago.",
  },
};

// Cada entrada: dos párrafos. El segundo tiene el CTA con el texto entre [ ] que se renderiza como link a /cotizar.
const EXTRA_COPY: Record<string, { p1: string; p2: { before: string; cta: string; after: string } }> = {
  "el-eterno": {
    p1: "El solitario es el anillo de compromiso más clásico y atemporal: una sola piedra central elevada sobre la banda, sin nada que la distraiga. Es la elección de quienes buscan elegancia que no pasa de moda. En Gia Solari diseñamos cada Eterno a medida —elegís el diamante certificado, la forma de la piedra, el alto del engaste y el grosor de la banda en platino u oro 18k.",
    p2: {
      before:
        "Al ser un diseño tan limpio, todo el protagonismo es de la piedra: por eso te acompañamos a elegir bien proporción, brillo y presupuesto, sin presión. ¿Te imaginás tu Eterno? ",
      cta: "Cotizá tu pieza",
      after: " y conversemos.",
    },
  },
  "el-tricillo": {
    p1: "El anillo de tres piedras —o trilogy— es uno de los estilos de compromiso más queridos: una piedra central escoltada por dos laterales que la enmarcan. Simboliza el pasado, el presente y el futuro de la pareja, y por eso es el favorito de quienes ya llevan una historia juntos. Lo diseñamos a medida, ajustando el tamaño de las tres piedras para que se vean en perfecto equilibrio.",
    p2: {
      before:
        "Podés elegir diamantes en las tres posiciones o sumar color en las laterales. Todo en platino u oro 18k, con certificado incluido. ",
      cta: "Cotizá Las Tres Promesas",
      after: " y lo adaptamos a tu historia.",
    },
  },
  "el-alado": {
    p1: "El halo es un anillo de compromiso en el que la piedra central va rodeada por un círculo de diamantes pequeños que multiplican su brillo y hacen ver la piedra más grande. Es el estilo más luminoso y romántico, e ideal si buscás máxima presencia con un presupuesto inteligente. Lo diseñamos a medida en platino u oro 18k, con diamantes certificados.",
    p2: {
      before:
        "El halo de El Alado se inspira en uno de los anillos más icónicos de la historia. ¿Querés ver cómo quedaría con tu piedra? ",
      cta: "Cotizá tu pieza",
      after: " y lo proyectamos juntos.",
    },
  },
  "el-real": {
    p1: "El Real recrea el anillo de compromiso más famoso del mundo: un zafiro azul ovalado rodeado de diamantes, el mismo estilo que lució Lady Diana y hoy lleva Kate Middleton. Es la elección de quien quiere algo icónico, con color y con historia. Lo hacemos a medida, eligiendo el tamaño y tono del zafiro y el contorno de diamantes, en platino u oro 18k.",
    p2: {
      before:
        "El zafiro es además una piedra durísima y perfecta para uso diario. Si querés un anillo que destaque de verdad, ",
      cta: "Cotizá El Real",
      after: " y lo diseñamos para vos.",
    },
  },
  "el-tiempo": {
    p1: "El diamante ovalado es la forma más buscada del momento: estiliza el dedo, se ve más grande que un redondo del mismo peso y tiene una elegancia suave, sin ángulos. El Tiempo es nuestro solitario ovalado, pensado para quienes quieren algo moderno pero que no pase de moda. A medida, en platino u oro 18k, con diamante certificado.",
    p2: {
      before: "Su forma fluida evoca una gota de agua: pureza y movimiento. ¿Te imaginás tu anillo ovalado? ",
      cta: "Cotizá El Tiempo",
      after: " y elegimos juntos la proporción ideal.",
    },
  },
  "los-cuatro-pilares": {
    p1: "Los Cuatro Pilares es un anillo de cuatro diamantes alineados, un estilo de simetría perfecta que también funciona como anillo de aniversario o de eternidad. Cada piedra representa un pilar de la relación —respeto, amor, confianza y comunicación— y las cuatro estaciones de la vida en pareja. Lo diseñamos a medida en platino u oro 18k.",
    p2: {
      before: "Es un diseño cómodo para el uso diario y fácil de combinar con la argolla de matrimonio. ",
      cta: "Cotizá Los Cuatro Pilares",
      after: " y lo ajustamos a tu mano.",
    },
  },
  "la-constelacion": {
    p1: "La Constelación es nuestro diseño más completo: tres piedras principales, con la central abrazada por su propio halo de diamantes. Combina el simbolismo del trilogy con el brillo del halo, y es ideal para quien quiere un anillo de compromiso con máxima presencia y luz. A medida, en platino u oro 18k con diamantes certificados.",
    p2: {
      before:
        "Cada piedra es como una estrella necesaria dentro de una constelación, igual que cada momento de su historia. ",
      cta: "Cotizá La Constelación",
      after: " y la proyectamos a tu medida.",
    },
  },
};

const DisenoDetalle = () => {
  const { slug } = useParams();
  const d = DISENOS.find((x) => x.slug === slug);

  if (!d) return <Navigate to="/significados/disenos" replace />;

  const seo = SEO_OVERRIDES[d.slug];
  const extra = EXTRA_COPY[d.slug];
  const aprendeLinks = APRENDE_LINKS[d.slug];

  return (
    <>
      <SEO
        title={seo?.title ?? `${d.nombre} · ${d.subtitulo} | Gia Solari`}
        description={seo?.description ?? `${d.subtitulo}. ${d.descripcion.slice(0, 140)}…`}
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

            {extra && (
              <>
                <p
                  style={{
                    fontFamily: SIG_FONTS.body,
                    fontWeight: 300,
                    fontSize: 16,
                    lineHeight: 1.9,
                    marginTop: 20,
                  }}
                >
                  {extra.p1}
                </p>
                <p
                  style={{
                    fontFamily: SIG_FONTS.body,
                    fontWeight: 300,
                    fontSize: 16,
                    lineHeight: 1.9,
                    marginTop: 20,
                  }}
                >
                  {extra.p2.before}
                  <Link
                    to="/cotizar"
                    style={{
                      color: SIG_TOKENS.gold,
                      textDecoration: "underline",
                      textUnderlineOffset: 3,
                    }}
                  >
                    {extra.p2.cta}
                  </Link>
                  {extra.p2.after}
                </p>
              </>
            )}


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

        {aprendeLinks && aprendeLinks.length > 0 && (
          <>
            <GoldenDivider />
            <section className="py-10 md:py-14 px-6 md:px-12">
              <div className="max-w-3xl mx-auto text-center">
                <p
                  style={{
                    fontFamily: SIG_FONTS.body,
                    fontSize: 11,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: SIG_TOKENS.gold,
                    marginBottom: 12,
                  }}
                >
                  ¿Querés saber más?
                </p>
                <p
                  style={{
                    fontFamily: SIG_FONTS.body,
                    fontWeight: 300,
                    fontSize: 15,
                    lineHeight: 1.7,
                  }}
                >
                  {aprendeLinks.map((link, i) => (
                    <span key={link.href}>
                      <Link
                        to={link.href}
                        style={{
                          color: SIG_TOKENS.gold,
                          textDecoration: "underline",
                          textUnderlineOffset: 3,
                        }}
                      >
                        {link.label}
                      </Link>
                      {i < aprendeLinks.length - 1 && (
                        <span style={{ color: SIG_TOKENS.caramel }}>{"  ·  "}</span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </section>
          </>
        )}

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
          <TrustMicrocopy marginTop={16} color="rgba(26,22,20,0.6)" />
        </section>


        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default DisenoDetalle;
