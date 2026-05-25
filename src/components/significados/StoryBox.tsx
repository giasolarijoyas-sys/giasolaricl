import { ReactNode } from "react";
import { SIG_TOKENS, SIG_FONTS } from "./tokens";

const StoryBox = ({ children }: { children: ReactNode }) => (
  <div
    className="px-8 py-10 md:px-12 md:py-14 my-10 md:my-14"
    style={{
      background: SIG_TOKENS.cream,
      border: `1px solid ${SIG_TOKENS.gold}40`,
      borderLeft: `2px solid ${SIG_TOKENS.gold}`,
    }}
  >
    <div
      style={{
        fontFamily: SIG_FONTS.italic,
        fontStyle: "italic",
        fontSize: "clamp(20px, 2.4vw, 26px)",
        lineHeight: 1.5,
        color: SIG_TOKENS.caramel,
      }}
    >
      {children}
    </div>
  </div>
);

export default StoryBox;
