import { Link } from "react-router-dom";
import { SIG_TOKENS, SIG_FONTS } from "./tokens";

type Props = {
  to: string;
  nombre: string;
  subtitulo: string;
  frase?: string;
  accent?: string;
  kicker?: string;
  img?: string;
  alt?: string;
};

const StoneCard = ({
  to,
  nombre,
  subtitulo,
  frase,
  accent = SIG_TOKENS.cream,
  kicker = "Piedra",
  img,
  alt,
}: Props) => (
  <Link
    to={to}
    className="group block"
    style={{ color: SIG_TOKENS.text }}
  >
    <div
      className="aspect-[4/5] w-full mb-5 overflow-hidden flex items-center justify-center relative"
      style={{
        background: img
          ? SIG_TOKENS.cream
          : `linear-gradient(180deg, ${SIG_TOKENS.cream} 0%, ${accent} 100%)`,
        border: `1px solid ${SIG_TOKENS.border}`,
        borderRadius: 6,
        boxShadow: "0 14px 30px -24px rgba(26, 22, 20, 0.18)",
      }}
    >
      {img ? (
        <img
          src={img}
          alt={alt || nombre}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <>
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at top, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 38%), linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(184,153,90,0.08) 100%)",
            }}
          />
          <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
            <span
              aria-hidden
              style={{
                fontFamily: SIG_FONTS.italic,
                fontStyle: "italic",
                fontSize: "clamp(34px, 6vw, 48px)",
                color: SIG_TOKENS.gold,
                lineHeight: 1,
                marginBottom: 14,
              }}
            >
              ✦
            </span>
            <span
              style={{
                fontFamily: SIG_FONTS.body,
                fontSize: 10.5,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: SIG_TOKENS.caramel,
                opacity: 0.82,
              }}
            >
              Próximamente
            </span>
          </div>
        </>
      )}
    </div>
    <p
      style={{
        fontFamily: SIG_FONTS.body,
        fontSize: 10.5,
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        color: SIG_TOKENS.gold,
        marginBottom: 8,
      }}
    >
      {kicker}
    </p>
    <h3
      style={{
        fontFamily: SIG_FONTS.display,
        fontSize: 22,
        fontWeight: 400,
        marginBottom: 4,
        lineHeight: 1.2,
      }}
    >
      {nombre}
    </h3>
    <p
      style={{
        fontFamily: SIG_FONTS.italic,
        fontStyle: "italic",
        fontSize: 15,
        color: SIG_TOKENS.caramel,
        marginBottom: frase ? 10 : 0,
      }}
    >
      {subtitulo}
    </p>
    {frase && (
      <p
        style={{
          fontFamily: SIG_FONTS.body,
          fontSize: 13,
          lineHeight: 1.6,
          fontWeight: 300,
          color: SIG_TOKENS.text,
          opacity: 0.75,
        }}
      >
        {frase}
      </p>
    )}
    <span
      className="inline-block mt-4 transition-all group-hover:translate-x-1"
      style={{
        fontFamily: SIG_FONTS.body,
        fontSize: 11,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: SIG_TOKENS.gold,
      }}
    >
      Conocer su historia →
    </span>
  </Link>
);

export default StoneCard;
