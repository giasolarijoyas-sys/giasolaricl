/**
 * Sección de testimonios simple para la home.
 * 3 tarjetas placeholder, mobile 1 col / desktop 3 col.
 * Editable desde el array `testimonios` (reemplazar foto, nombre y texto).
 */

type Testimonio = {
  nombre: string;
  foto?: string; // URL o import. Si vacío, muestra inicial.
  texto: string;
};

const testimonios: Testimonio[] = [
  {
    nombre: "Cliente 1",
    foto: "",
    texto:
      "Encargué un anillo a medida en oro 18k. Me explicaron cada paso y el resultado fue exactamente lo que pedí.",
  },
  {
    nombre: "Cliente 2",
    foto: "",
    texto:
      "Las argollas las hicieron a mano con grabado interior. Cumplieron el plazo y la atención fue directa y clara.",
  },
  {
    nombre: "Cliente 3",
    foto: "",
    texto:
      "Compré un anillo de compromiso con diamante certificado. Vi el boceto antes de fabricar y quedó tal cual.",
  },
];

const TestimoniosHome = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">
            Testimonios
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display text-charcoal">
            Lo que dicen quienes{" "}
            <em className="text-gold not-italic">confiaron en nosotras</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonios.map((t, i) => (
            <article
              key={i}
              className="bg-cream/40 border border-gold/15 p-6 md:p-7 rounded-[4px] flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-cream overflow-hidden mb-4 flex items-center justify-center border border-gold/20">
                {t.foto ? (
                  <img
                    src={t.foto}
                    alt={t.nombre}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-display text-gold text-2xl">
                    {t.nombre[0]}
                  </span>
                )}
              </div>
              <p className="text-charcoal/80 text-sm leading-relaxed italic mb-4">
                "{t.texto}"
              </p>
              <p className="text-charcoal font-medium text-sm">{t.nombre}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniosHome;
