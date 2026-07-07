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
    nombre: "Ignacio F., Santiago",
    foto: "",
    texto:
      "Lo que más rescato es la honestidad. Le di mi presupuesto a la Maca y me mostró las alternativas que se podían hacer. Los aros quedaron increíbles.",
  },
  {
    nombre: "Valentina P., Viña del Mar",
    foto: "",
    texto:
      "Desde la primera reunión sentí que estaba en buenas manos. La Maca me explicó todo con paciencia y me ayudó a elegir la piedra perfecta dentro de mi presupuesto.",
  },
  {
    nombre: "Camila R., Concepción",
    foto: "",
    texto:
      "Hice todo por WhatsApp y Zoom porque vivo en regiones. La Maca fue súper atenta y el collar llegó tal cual como lo imaginé. Servicio impecable.",
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
            <em className="text-gold not-italic">confiaron en mí</em>
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
