import { Instagram } from "lucide-react";
import { useEffect } from "react";

const IG_URL = "https://www.instagram.com/giasolarijoyas";
const TIKTOK_URL = "https://www.tiktok.com/@giasolarijoyas";
const THREADS_URL = "https://www.threads.com/@giasolarijoyas";
const BEHOLD_SCRIPT_ID = "behold-widget-script";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "behold-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { "feed-id"?: string },
        HTMLElement
      >;
    }
  }
}

const chipStyle = {
  border: "1px solid #4A5536",
  color: "#4A5536",
  padding: "8px 18px",
  borderRadius: "999px",
  fontFamily: "'Inter', sans-serif",
  fontSize: "13px",
  letterSpacing: "0.04em",
  transition: "background 0.2s, color 0.2s",
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
} as React.CSSProperties;

const InstagramFeed = () => {
  useEffect(() => {
    if (document.getElementById(BEHOLD_SCRIPT_ID)) return;
    const s = document.createElement("script");
    s.id = BEHOLD_SCRIPT_ID;
    s.type = "module";
    s.src = "https://w.behold.so/widget.js";
    document.head.append(s);
  }, []);

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-2">
            Seguime en redes
          </h2>
          <p className="text-sm text-muted-foreground tracking-widest uppercase">
            Mostramos el proceso, las piezas y el detrás de escena.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-[#4A5536] hover:text-white transition-all"
            style={chipStyle}
          >
            <Instagram size={14} strokeWidth={1.5} />
            Instagram @giasolarijoyas
          </a>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-[#4A5536] hover:text-white transition-all"
            style={chipStyle}
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            TikTok @giasolarijoyas
          </a>
          <a
            href={THREADS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-[#4A5536] hover:text-white transition-all"
            style={chipStyle}
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 10.5c0-1.1.9-2 2-2h.5c1.7 0 3 1.3 3 3v.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5v-3c0-2.5 2-4.5 4.5-4.5h.5" /><path d="M12 17.5v-4" /></svg>
            Threads @giasolarijoyas
          </a>
        </div>

        <div className="max-w-4xl mx-auto">
          <behold-widget feed-id="HF1Fu8gFoZwm7As61tWV"></behold-widget>
        </div>

        <div className="text-center mt-10">
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm tracking-widest uppercase border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Instagram size={16} />
            Síguenos
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
