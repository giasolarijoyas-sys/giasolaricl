import { Instagram } from "lucide-react";

const IG_URL = "https://www.instagram.com/giasolarijoyas";
const TIKTOK_URL = "https://www.tiktok.com/@giasolarijoyas";
const THREADS_URL = "https://www.threads.com/@giasolarijoyas";

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
  return (
    <section className="py-10 md:py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-2">
            Seguime en redes
          </h2>
          <p className="text-sm text-muted-foreground tracking-widest uppercase">
            El proceso, las piezas y el detrás de escena.
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

        <div className="max-w-2xl mx-auto text-center border border-primary/30 rounded-lg bg-background/60 px-6 py-10 md:py-14">
          <Instagram size={32} strokeWidth={1.2} className="mx-auto mb-5 text-primary" />
          <p className="font-display text-xl md:text-2xl text-charcoal mb-3 italic">
            Mostramos cada pieza en Instagram antes que en cualquier otro lugar.
          </p>
          <p className="text-sm text-muted-foreground mb-7 max-w-md mx-auto leading-relaxed">
            Bocetos, piedras nuevas, el taller y clientas felices. Si te interesa el detrás de escena, ese es el lugar.
          </p>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 text-sm tracking-widest uppercase border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Instagram size={16} />
            Síguenos en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
