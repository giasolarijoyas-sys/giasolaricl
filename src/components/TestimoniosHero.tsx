import galHaloOvalZafiro from "@/assets/gal-halo-oval-zafiro.png";
import galHaloPeraDiamante from "@/assets/gal-halo-pera-diamante.png";
import galOvalPave from "@/assets/gal-oval-pave.jpg";

/**
 * Testimonios bajo el hero. TESTIMONIOS REALES:
 * las frases y nombres son textuales de clientas, no editarlos.
 *
 * IMPORTANTE: las imágenes actuales provienen de la galería general y NO
 * corresponden al anillo de cada persona. Son referenciales: reemplaza cada
 * una por la foto real del anillo de la persona correspondiente antes de
 * considerar esta sección terminada.
 */
type TestimonioHero = {
  imagen: string;
  alt: string;
  nombre: string;
  frase: string;
  pieza?: string;
};

const testimoniosHero: TestimonioHero[] = [
  {
    imagen: galHaloOvalZafiro,
    alt: "Anillo de compromiso halo oval con zafiro azul en oro blanco",
    nombre: "Nico F.",
    frase: "Apañe, confianza, la buena onda y obvio, el anillo",
  },
  {
    imagen: galHaloPeraDiamante,
    alt: "Anillo de compromiso halo pera con diamante",
    nombre: "Pablo F.",
    frase: "Quedó bellísimo, gracias querida",
  },
  {
    imagen: galOvalPave,
    alt: "Anillo de compromiso oval con pavé de diamantes",
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
            Clientas que ya dijeron que sí
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimoniosHero.map((t, i) => (
            <figure key={i} className="flex flex-col">
              <div className="overflow-hidden rounded-lg" style={{ background: "#EBE2D2" }}>
                <img
                  src={t.imagen}
                  alt={t.alt}
                  loading="lazy"
                  className="w-full aspect-square object-cover"
                />
              </div>
              <figcaption className="mt-4">
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
