import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

// Plazos editables: ajusta acá y se actualiza toda la página.
const PLAZOS = {
  respuesta: "24 horas hábiles",
  boceto: "3 a 5 días hábiles",
  fabricacion: "4 a 6 semanas",
  ajusteTalla: "6 meses",
  abono: "70%",
  saldo: "30%",
};

const pasos = [
  {
    num: "01",
    titulo: "Escribes y te respondemos",
    texto: `Nos escribes por WhatsApp o por el cotizador del sitio. Respondemos en ${PLAZOS.respuesta}. La primera conversación es para entender qué buscas, para cuándo lo necesitas y con cuánto cuentas. Sin compromiso.`,
  },
  {
    num: "02",
    titulo: "Conversamos el diseño",
    texto: "En el showroom o por videollamada. Te muestras referencias, te pruebas anillos ya hechos y definimos forma de piedra, metal y estilo. Acá también medimos la talla.",
  },
  {
    num: "03",
    titulo: "Ves el boceto y el precio",
    texto: `En ${PLAZOS.boceto} te enviamos el boceto de tu pieza y el precio final por escrito, con el detalle de metal, piedra y hechura. Puedes pedir cambios antes de aprobar.`,
  },
  {
    num: "04",
    titulo: "Apruebas y fabricamos",
    texto: `Con tu aprobación entra a taller. La fabricación toma ${PLAZOS.fabricacion}. Te vamos mostrando avances con fotos reales, no tienes que preguntar.`,
  },
  {
    num: "05",
    titulo: "Cómo se paga",
    texto: `${PLAZOS.abono} al aprobar el diseño y ${PLAZOS.saldo} contra entrega. Transferencia o tarjeta. No pedimos pago total por adelantado.`,
  },
  {
    num: "06",
    titulo: "Si al recibirlo no le gusta",
    texto: `Lo arreglamos. Ajustamos la talla sin costo durante ${PLAZOS.ajusteTalla}, y si el diseño no la convence conversamos las modificaciones o el cambio de la pieza. Preferimos rehacer algo antes de que quede guardado en un cajón.`,
  },
];

const componentes = [
  {
    titulo: "El metal",
    texto: "Oro 18k o platino. Se cobra por gramo, según el peso real de tu pieza. Un anillo más ancho o más macizo pesa más y cuesta más. El platino es más denso que el oro, por eso una misma pieza en platino sale más cara.",
  },
  {
    titulo: "La piedra principal",
    texto: "Se cobra por quilate y es la parte que más varía. Dos piedras del mismo tamaño pueden tener precios muy distintos según color, pureza y calidad de talla. Te mostramos opciones en distintos rangos para que compares con la piedra en la mano.",
  },
  {
    titulo: "Las piedras secundarias",
    texto: "Los diamantes del halo, del pavé o de los costados. Se cobran por peso total y por cantidad, porque cada una se engasta a mano.",
  },
  {
    titulo: "La hechura a mano",
    texto: "El trabajo del taller: armar la estructura, dar la forma, pulir y terminar. Depende de la complejidad del diseño, no del valor de la piedra.",
  },
  {
    titulo: "El engaste de cada piedra",
    texto: "Montar cada piedra en su lugar es un trabajo aparte y se cobra por piedra. Un pavé de treinta diamantes toma mucho más tiempo que un solitario.",
  },
];

const incluye = [
  "Certificado de la piedra principal (GIA o IGI).",
  "Garantía de la pieza.",
  "Ajuste de talla sin costo adicional.",
  "Plazo de entrega comprometido por escrito.",
];

const ComoFunciona = () => {
  const waUrl = buildWhatsAppUrl("generico", {
    custom: "Hola Maca, leí cómo funciona el proceso y quiero conversar mi anillo",
  });

  return (
    <div className="min-h-screen" style={{ background: "#FFFFFF" }}>
      <SEO
        title="Cómo funciona: proceso y precio | Gia Solari Joyas"
        description="Cómo hacemos tu anillo de compromiso: plazos concretos, forma de pago y cómo se forma el precio, sin letra chica."
        path="/como-funciona"
      />
      <Navbar />

      <main className="pt-28 md:pt-36 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <Breadcrumbs items={[{ label: "Cómo funciona" }]} />

          <header className="mt-6 mb-10 md:mb-14">
            <h1
              className="font-display leading-tight"
              style={{ fontSize: "clamp(28px, 7vw, 48px)", color: "#1A1A18" }}
            >
              Cómo funciona
            </h1>
            <p
              className="mt-4 leading-relaxed text-[15px] md:text-lg"
              style={{ fontFamily: "Inter, sans-serif", color: "#3A3A34" }}
            >
              El proceso completo y cómo se forma el precio. Sin letra chica y sin
              tecnicismos: así sabes qué esperar antes de escribirnos.
            </p>
          </header>

          {/* PARTE A */}
          <section className="mb-14 md:mb-20">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "Inter, sans-serif", color: "#6B7752" }}
            >
              Parte A
            </p>
            <h2 className="font-display text-2xl md:text-3xl mb-8" style={{ color: "#1A1A18" }}>
              El proceso, paso a paso
            </h2>

            <ol className="space-y-7">
              {pasos.map((p) => (
                <li key={p.num} className="flex gap-4 md:gap-6">
                  <span
                    className="font-display shrink-0"
                    style={{ color: "#C9A87C", fontSize: "20px", lineHeight: 1.4 }}
                  >
                    {p.num}
                  </span>
                  <div>
                    <h3 className="font-display text-lg md:text-xl mb-1.5" style={{ color: "#1A1A18" }}>
                      {p.titulo}
                    </h3>
                    <p
                      className="leading-relaxed text-[15px]"
                      style={{ fontFamily: "Inter, sans-serif", color: "#3A3A34" }}
                    >
                      {p.texto}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* PARTE B */}
          <section className="mb-14 md:mb-20">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "Inter, sans-serif", color: "#6B7752" }}
            >
              Parte B
            </p>
            <h2 className="font-display text-2xl md:text-3xl mb-4" style={{ color: "#1A1A18" }}>
              Cómo se forma el precio
            </h2>
            <p
              className="leading-relaxed text-[15px] md:text-base mb-8"
              style={{ fontFamily: "Inter, sans-serif", color: "#3A3A34" }}
            >
              El precio de una joya a medida no es un número redondo que sale de la nada.
              Se arma sumando cinco cosas:
            </p>

            <div className="space-y-6">
              {componentes.map((c) => (
                <div
                  key={c.titulo}
                  className="p-5 md:p-6 rounded-md"
                  style={{ background: "#F5EFE6" }}
                >
                  <h3 className="font-display text-lg md:text-xl mb-2" style={{ color: "#1A1A18" }}>
                    {c.titulo}
                  </h3>
                  <p
                    className="leading-relaxed text-[15px]"
                    style={{ fontFamily: "Inter, sans-serif", color: "#3A3A34" }}
                  >
                    {c.texto}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="font-display text-xl md:text-2xl mt-12 mb-3" style={{ color: "#1A1A18" }}>
              Por qué dos anillos parecidos cuestan distinto
            </h3>
            <p
              className="leading-relaxed text-[15px] md:text-base"
              style={{ fontFamily: "Inter, sans-serif", color: "#3A3A34" }}
            >
              Puedes ver dos anillos casi idénticos en la foto y que uno valga el doble.
              La diferencia casi siempre está en la piedra central, no en el diseño. Medio
              quilate más, un color más blanco o una talla mejor cambian el precio de forma
              importante, aunque a simple vista el anillo se vea igual. Por eso, cuando
              compares presupuestos, mira siempre el certificado de la piedra.
            </p>

            <h3 className="font-display text-xl md:text-2xl mt-12 mb-4" style={{ color: "#1A1A18" }}>
              Qué incluye siempre el precio
            </h3>
            <ul className="space-y-3">
              {incluye.map((i) => (
                <li
                  key={i}
                  className="flex gap-3 leading-relaxed text-[15px]"
                  style={{ fontFamily: "Inter, sans-serif", color: "#3A3A34" }}
                >
                  <span style={{ color: "#C9A87C" }}>•</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Cierre */}
          <section
            className="p-6 md:p-10 rounded-md text-center"
            style={{ background: "#EBE2D2" }}
          >
            <p
              className="font-display italic text-lg md:text-2xl leading-relaxed"
              style={{ color: "#1A1A18" }}
            >
              Acá nadie te va a empujar a gastar más de lo que quieres. Si con tu
              presupuesto conviene una piedra más chica y un diseño mejor hecho, te lo
              decimos.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/cotizar"
                className="rounded-full text-center"
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
                Cotizar mi pieza
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full text-center"
                style={{
                  border: "1px solid #4A5536",
                  color: "#4A5536",
                  padding: "13px 28px",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Escribir por WhatsApp
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ComoFunciona;
