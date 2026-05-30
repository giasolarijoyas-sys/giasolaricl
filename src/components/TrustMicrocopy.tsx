/**
 * Microcopy de confianza para colocar justo debajo de un CTA principal.
 * Mantener el tono suave: pequeño, muted, sin competir con el botón.
 */
const TrustMicrocopy = ({
  align = "center",
  marginTop = 12,
  color = "rgba(26,26,24,0.55)",
}: {
  align?: "left" | "center";
  marginTop?: number;
  color?: string;
}) => (
  <p
    style={{
      fontFamily: "'Inter', sans-serif",
      fontSize: "12px",
      lineHeight: 1.5,
      letterSpacing: "0.02em",
      color,
      textAlign: align,
      marginTop,
    }}
  >
    Te respondo personalmente en menos de 24h · Sin compromiso
  </p>
);

export default TrustMicrocopy;
