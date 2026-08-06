import bannerHands from "@/assets/banner-hands.jpg";

const ShowroomSection = () => {
  return (
    <section id="showroom" className="py-12 md:py-20" style={{ background: "#FFFFFF" }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <img
              src={bannerHands}
              alt="Clienta probándose anillos de compromiso en el showroom de Gia Solari"
              loading="lazy"
              className="w-full aspect-[4/3] md:aspect-[4/5] object-cover"
            />
          </div>

          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "Inter, sans-serif", color: "#6B7752" }}
            >
              Showroom en Vitacura
            </p>
            <h2 className="font-display text-2xl md:text-4xl mb-5" style={{ color: "#1A1A18" }}>
              Ven a probártelos
            </h2>

            <div
              className="space-y-4 leading-relaxed text-[15px] md:text-base"
              style={{ fontFamily: "Inter, sans-serif", color: "#3A3A34" }}
            >
              <p>
                Acá te pruebas anillos ya hechos antes de decidir. Ves cómo se ve cada forma
                de piedra en tu mano, comparas oro y platino, y sales con una idea clara de
                lo que quieres.
              </p>
              <p>
                La talla la resolvemos ahí mismo, con medidor profesional. No hay que
                adivinar ni pedir prestado un anillo.
              </p>
              <p style={{ color: "#6B7752" }}>
                Venir a mirar no compromete a nada. Si te vas sin decidir, está perfecto.
              </p>
            </div>

            <a
              href="/agenda"
              className="inline-flex items-center justify-center mt-7 w-full sm:w-auto rounded-full"
              style={{
                background: "#4A5536",
                color: "#F5EFE6",
                padding: "14px 28px",
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Agendar visita al showroom
            </a>

            <p className="mt-4">
              <a
                href="/como-funciona"
                className="text-xs tracking-[0.15em] uppercase hover:opacity-70 transition-opacity"
                style={{ fontFamily: "Inter, sans-serif", color: "#6B7752" }}
              >
                Cómo funciona el proceso y el precio
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowroomSection;
