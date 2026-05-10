import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import WhatsAppButton from "@/components/WhatsAppButton";
import { DIARIO_ENTRIES } from "./Diario";

const DiarioDetalle = () => {
  const { slug } = useParams();
  const entry = DIARIO_ENTRIES.find((e) => e.slug === slug);
  if (!entry) return <Navigate to="/diario" replace />;

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: `${entry.novia} y su ${entry.pieza}`,
    description: entry.frase,
    image: entry.img,
    author: { "@type": "Organization", name: "Gia Solari Joyas" },
    publisher: {
      "@type": "Organization",
      name: "Gia Solari Joyas",
      logo: { "@type": "ImageObject", url: "https://www.giasolari.cl/wordmark-oliva.svg" },
    },
    mainEntityOfPage: `https://www.giasolari.cl/diario/${entry.slug}`,
  };

  return (
    <div className="min-h-screen" style={{ background: "#F5EFE6" }}>
      <SEO
        title={`${entry.novia} y su ${entry.pieza} | Diario de Atelier · Gia Solari`}
        description={entry.frase}
        path={`/diario/${entry.slug}`}
        image={entry.img}
        type="article"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(blogJsonLd)}</script>
      </Helmet>
      <Navbar />

      <main className="pt-32 pb-20">
        <article className="container mx-auto px-4 md:px-8 max-w-3xl">
          <nav className="mb-8">
            <Link
              to="/diario"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#6B7752",
              }}
            >
              ← Diario de Atelier
            </Link>
          </nav>

          <p
            className="mb-3"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#C9A87C",
            }}
          >
            {entry.novia} · {entry.pieza}
          </p>
          <h1
            className="mb-8"
            style={{
              fontFamily: "'Bodoni Moda', serif",
              fontWeight: 400,
              fontSize: "clamp(36px, 4.5vw, 56px)",
              lineHeight: 1.05,
              color: "#3A4429",
            }}
          >
            «{entry.frase}»
          </h1>

          <div className="overflow-hidden mb-10" style={{ aspectRatio: "16/10" }}>
            <img src={entry.img} alt={entry.pieza} className="w-full h-full object-cover" />
          </div>

          <div
            style={{
              fontFamily: "'Bodoni Moda', serif",
              fontStyle: "italic",
              fontSize: "20px",
              lineHeight: 1.6,
              color: "#3A4429",
              marginBottom: "32px",
            }}
          >
            {entry.novia} llegó al atelier con una idea más bien borrosa, pero con algo
            muy claro: quería que la pieza significara algo concreto.
          </div>

          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#3A3A36",
            }}
          >
            <p className="mb-5">
              Conversamos un buen rato. De su pareja, de cómo se conocieron, del estilo
              de mano que tiene. Salimos con un boceto a lápiz y la promesa de mandarle
              dos opciones para fin de semana.
            </p>
            <p className="mb-5">
              El proceso tomó cinco semanas. Selección de la piedra central con
              certificado, fundición del oro 18k en el taller, engaste artesanal y
              pulido final. Le mandamos avances con foto en cada hito.
            </p>
            <p className="mb-5">
              El día de la entrega vino al atelier con su pareja. Le pasé la caja de
              terciopelo verde, abrió y se quedó callada un rato largo. Ese silencio es
              la parte que más me gusta del oficio.
            </p>
          </div>

          <div
            className="mt-14 p-8 text-center"
            style={{ background: "#EBE2D2", border: "1px solid #D9D2C4" }}
          >
            <p
              className="mb-5"
              style={{
                fontFamily: "'Bodoni Moda', serif",
                fontStyle: "italic",
                fontSize: "22px",
                color: "#3A4429",
              }}
            >
              ¿Quieres tu propia historia?
            </p>
            <Link
              to="/cotizar"
              className="inline-block transition-all"
              style={{
                background: "#4A5536",
                color: "#F5EFE6",
                padding: "14px 32px",
                borderRadius: "999px",
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Cotizar mi pieza
            </Link>
          </div>
        </article>
      </main>

      <Newsletter />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default DiarioDetalle;
