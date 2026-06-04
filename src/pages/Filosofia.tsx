import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import GoldenDivider from "@/components/significados/GoldenDivider";
import { SIG_TOKENS, SIG_FONTS } from "@/components/significados/tokens";


const Filosofia = () => (
  <>
    <SEO
      title="Filosofía, Joyas con alma que trascienden generaciones | Gia Solari"
      description="Nuestro manifiesto: cada piedra con su historia, cada diseño con su nombre, cada pieza un amuleto. Joyería de autor en Santiago de Chile."
      path="/filosofia"
    />
    <div style={{ background: SIG_TOKENS.bg, color: SIG_TOKENS.text }}>
      <Navbar />

      {/* HERO */}
      <section className="pt-36 pb-24 md:pt-44 md:pb-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p
            style={{
              fontFamily: SIG_FONTS.body,
              fontSize: 11,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: SIG_TOKENS.gold,
              marginBottom: 28,
            }}
          >
            Filosofía
          </p>
          <h1
            style={{
              fontFamily: SIG_FONTS.italic,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(28px, 5vw, 52px)",
              lineHeight: 1.25,
              color: SIG_TOKENS.gold,
            }}
          >
            «Una joya sin historia es solo un objeto.
            <br />
            Con historia, es un amuleto.»
          </h1>
        </div>
      </section>

      <GoldenDivider />

      {/* MANIFIESTO */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <p
            style={{
              fontFamily: SIG_FONTS.body,
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: SIG_TOKENS.gold,
              marginBottom: 16,
            }}
          >
            Manifiesto
          </p>
          <h2
            style={{
              fontFamily: SIG_FONTS.display,
              fontWeight: 400,
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1.2,
              marginBottom: 36,
            }}
          >
            Nuestro Manifiesto
          </h2>

          <div
            className="space-y-6"
            style={{
              fontFamily: SIG_FONTS.body,
              fontWeight: 300,
              fontSize: 16,
              lineHeight: 1.85,
            }}
          >
            <p>
              Hay muchas joyerías que venden anillos. Pocas que venden historias. Una sola
              en Chile que vende significado.
            </p>
            <p>
              Gia Solari es la joyería chilena donde cada piedra tiene historia, cada diseño
              tiene nombre, y cada pieza es un amuleto.
            </p>
            <p>
              No diseñamos joyas para verse bonitas. Diseñamos amuletos para llevar puestos
              toda la vida. Que cuando alguien reciba una joya nuestra, no reciba solo
              metal y piedra: reciba la historia milenaria de su gema, el nombre de su
              diseño, el significado de su forma. Reciba un universo de narrativa que
              convierte su pieza en algo único e irrepetible.
            </p>
          </div>
        </div>
      </section>

      <GoldenDivider />

      {/* CIERRE */}
      <section className="py-24 md:py-32 px-6 md:px-12 text-center">
        <p
          style={{
            fontFamily: SIG_FONTS.italic,
            fontStyle: "italic",
            fontSize: "clamp(24px, 3.5vw, 38px)",
            color: SIG_TOKENS.gold,
            lineHeight: 1.3,
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          «Joyas con alma que trascienden generaciones.»
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="/significados/piedras"
            style={{
              fontFamily: SIG_FONTS.body,
              fontSize: 12,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              padding: "14px 32px",
              background: SIG_TOKENS.text,
              color: SIG_TOKENS.bg,
              borderRadius: 999,
            }}
          >
            Conocer las piedras
          </a>
          <a
            href="/significados/disenos"
            style={{
              fontFamily: SIG_FONTS.body,
              fontSize: 12,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              padding: "14px 32px",
              border: `1px solid ${SIG_TOKENS.text}`,
              color: SIG_TOKENS.text,
              borderRadius: 999,
            }}
          >
            Conocer los diseños
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  </>
);

export default Filosofia;
