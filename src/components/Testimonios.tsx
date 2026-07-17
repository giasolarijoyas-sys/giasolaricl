import { Quote } from "lucide-react";
import { testimoniosClientas } from "@/data/testimoniosClientas";

/**
 * Sección de testimonios reales.
 * Si el array de testimoniosClientas está vacío, el componente NO renderiza nada.
 */
const Testimonios = () => {
  if (!testimoniosClientas || testimoniosClientas.length === 0) return null;

  return (
    <section id="testimonios-clientas" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
            Historias
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            Lo que dicen <em className="text-primary not-italic">quienes ya vivieron el proceso</em>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimoniosClientas.map((t, i) => (
            <article
              key={`${t.nombre}-${i}`}
              className="border border-border rounded-lg p-8 bg-card flex flex-col"
            >
              <Quote className="w-6 h-6 text-primary/40 mb-4" aria-hidden="true" />
              <p className="font-display italic text-foreground leading-relaxed mb-6 text-base md:text-lg">
                "{t.texto}"
              </p>
              <div className="mt-auto flex items-center gap-4">
                {t.imagen && (
                  <img
                    src={t.imagen}
                    alt={`Foto de ${t.nombre}`}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover border border-border"
                  />
                )}
                <div>
                  <p className="text-foreground font-medium">{t.nombre}</p>
                  {t.pieza && (
                    <p className="text-xs text-muted-foreground mt-0.5">{t.pieza}</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
