/**
 * Testimonios bajo el hero. TESTIMONIOS REALES:
 * las frases y nombres son textuales de clientas, no editarlos.
 * No mostrar fotos de piezas hasta tener la imagen real correspondiente a
 * cada testimonio: una imagen referencial puede sugerir una relación falsa.
 */
type TestimonioHero = {
  nombre: string;
  frase: string;
  pieza?: string;
};

const testimoniosHero: TestimonioHero[] = [
  {
    nombre: "Nico F.",
    frase: "Apañe, confianza, la buena onda y obvio, el anillo",
  },
  {
    nombre: "Pablo F.",
    frase: "Quedó bellísimo, gracias querida",
  },
  {
    nombre: "Titi Barros",
    frase: "Quedó feliz, y le quedó perfecto",
  },
];

const TestimoniosHero = () => {
  if (testimoniosHero.length === 0) return null;

  return (
    <section id="clientas" className="py-12 md:py-20" style={{ background: "#F5EFE6" }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-display text-2xl md:text-4xl" style={{ color: "#1A1A18" }}>
            Historias de quienes ya dijeron que sí
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimoniosHero.map((t, i) => (
            <figure key={i} className="flex flex-col">
              <figcaption
                className="h-full rounded-lg p-6 md:p-8 flex flex-col justify-center"
                style={{ background: "#EBE2D2" }}
              >
                <p
                  className="font-display italic leading-relaxed text-base md:text-lg"
                  style={{ color: "#1A1A18" }}
                >
                  "{t.frase}"
                </p>
                <p
                  className="mt-3 text-sm"
                  style={{ fontFamily: "Inter, sans-serif", color: "#4A5536", fontWeight: 500 }}
                >
                  {t.nombre}
                </p>
                {t.pieza && (
                  <p className="text-xs mt-0.5" style={{ fontFamily: "Inter, sans-serif", color: "#6B7752" }}>
                    {t.pieza}
                  </p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-10">
          <a
            href="https://www.instagram.com/giasolarijoyas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.15em] uppercase hover:opacity-70 transition-opacity"
            style={{ fontFamily: "Inter, sans-serif", color: "#6B7752" }}
          >
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimoniosHero;
