import { Link } from "react-router-dom";
import { SIG_TOKENS, SIG_FONTS } from "./tokens";

type Props = {
  to: string;
  nombre: string;
  subtitulo: string;
  frase?: string;
  accent?: string; // fallback color del bloque visual
  kicker?: string; // ej "Piedra" o "Diseño"
  img?: string; // foto real de Gia Solari
};

const StoneCard = ({ to, nombre, subtitulo, frase, accent = "#EDE6DA", kicker = "Piedra", img }: Props) => (
  <Link
    to={to}
    className="group block"
    style={{ color: SIG_TOKENS.text }}
  >
    <div
      className="aspect-[4/5] w-full mb-5 overflow-hidden flex items-center justify-center relative"
      style={{
        background: img ? "#f5efe6" : `linear-gradient(135deg, ${accent} 0%, ${accent}cc 100%)`,
        border: `1px solid ${SIG_TOKENS.border}`,
      }}
    >
      {img ? (
        <img
          src={img}
          alt={nombre}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <span
          style={{
            fontFamily: SIG_FONTS.italic,
            fontStyle: "italic",
            fontSize: "44px",
            color: "#ffffff",
            mixBlendMode: "soft-light",
            opacity: 0.9,
            letterSpacing: "0.02em",
          }}
        >
          {nombre}
        </span>
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
