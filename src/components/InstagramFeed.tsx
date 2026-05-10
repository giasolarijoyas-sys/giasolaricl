import { Instagram } from "lucide-react";
import { useEffect } from "react";

const IG_HANDLE = "giasolari.cl";
const IG_URL = `https://instagram.com/${IG_HANDLE}`;
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
            @{IG_HANDLE} en Instagram
          </h2>
          <p className="text-sm text-muted-foreground tracking-widest uppercase">
            Inspiración diaria
          </p>
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
