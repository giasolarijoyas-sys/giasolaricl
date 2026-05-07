import { Instagram } from "lucide-react";

const IG_HANDLE = "giasolarijoyas";
const IG_URL = `https://instagram.com/${IG_HANDLE}`;

const InstagramFeed = () => {
  const placeholders = Array.from({ length: 9 });

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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3 max-w-4xl mx-auto">
          {placeholders.map((_, i) => (
            <a
              key={i}
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver post ${i + 1} en Instagram`}
              className="group relative aspect-square overflow-hidden bg-gradient-to-br from-accent via-secondary to-accent border border-border/40"
            >
              <div className="absolute inset-0 flex items-center justify-center text-charcoal/40 group-hover:text-charcoal/70 transition-colors">
                <Instagram size={32} strokeWidth={1.5} />
              </div>
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-cream text-xs tracking-widest uppercase">
                  Ver en Instagram
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm tracking-widest uppercase border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Instagram size={16} />
            Seguinos
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
