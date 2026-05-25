import { SIG_TOKENS } from "./tokens";

const GoldenDivider = ({ className = "" }: { className?: string }) => (
  <div
    className={`flex items-center justify-center my-12 md:my-16 ${className}`}
    aria-hidden="true"
  >
    <span
      style={{
        height: 1,
        width: 60,
        background: SIG_TOKENS.gold,
        opacity: 0.4,
      }}
    />
    <span
      className="mx-4"
      style={{
        color: SIG_TOKENS.gold,
        fontSize: 14,
        letterSpacing: "0.2em",
      }}
    >
      ✦
    </span>
    <span
      style={{
        height: 1,
        width: 60,
        background: SIG_TOKENS.gold,
        opacity: 0.4,
      }}
    />
  </div>
);

export default GoldenDivider;
