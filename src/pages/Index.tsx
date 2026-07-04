import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import ProcesoHome from "@/components/ProcesoHome";
import TresPilares from "@/components/TresPilares";
import VideoSection from "@/components/VideoSection";
import Historia from "@/components/Historia";
import QuoteWizard from "@/components/QuoteWizard";
import FAQAccordion from "@/components/FAQAccordion";
import GarantiaSection from "@/components/GarantiaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import SectionBanner from "@/components/SectionBanner";
import RangoInversion from "@/components/RangoInversion";
import IncluyeAnillo from "@/components/IncluyeAnillo";
import TestimoniosDestacados from "@/components/TestimoniosDestacados";

import InstagramFeed from "@/components/InstagramFeed";
import GrabadosSimbolicosSection from "@/components/GrabadosSimbolicosSection";
import DestacadosHero from "@/components/DestacadosHero";

import bannerNusa from "@/assets/banner-anillo-nusa.png";
import bannerHalo from "@/assets/banner-halo-oval.png";
import bannerHands from "@/assets/banner-hands.jpg";

const Index = () => {
  const ratingJsonLd = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    "name": "Gia Solari Joyas",
    "url": "https://www.giasolari.cl",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": String(testimonios.length),
      "bestRating": "5",
      "worstRating": "1",
    },
    "review": testimonios.map((t) => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": t.autor },
      "reviewBody": t.cita,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1",
      },
      "itemReviewed": {
        "@type": "Product",
        "name": t.pieza,
      },
    })),
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Anillos de Compromiso a Medida en Santiago | Gia Solari Joyas"
        description="Anillos de compromiso a medida en Santiago de Chile. Oro 18k, platino y diamante certificado GIA/IGI. Showroom en Vitacura, entrega en 4 semanas. Cotiza tu pieza."
        path="/"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(ratingJsonLd)}</script>
      </Helmet>
      <Navbar />

      <Hero />

      {/* Piezas destacadas — visibles apenas entras, atacan el rebote */}
      <DestacadosHero />

      <Marquee />

      {/* Galería primero — lo que vino a ver desde Instagram */}
      <Gallery />

      <SectionBanner
        image={bannerNusa}
        alt="Anillo Nusa con zafiro azul de Gia Solari"
        text="Cada Detalle Cuenta"
        subtext="Diseño artesanal con piedras certificadas"
      />

      {/* Grabados Simbólicos — diferenciador exclusivo */}
      <GrabadosSimbolicosSection />

      {/* Promesa de marca */}
      <TresPilares />

      {/* Historia de Maca */}
      <Historia />

      {/* Diferenciadores */}
      <WhyUs />

      {/* Proceso en 3 pasos */}
      <ProcesoHome />

      {/* Video */}
      <VideoSection />

      {/* Rango de inversión */}
      <RangoInversion />

      {/* Qué incluye */}
      <IncluyeAnillo />

      {/* Testimonios */}
      <TestimoniosDestacados />

      <SectionBanner
        image={bannerHands}
        alt="Joyas Gia Solari en detalle"
        text="Hecho a Tu Medida"
        subtext="100% personalizado, 100% único"
      />

      {/* Garantía por Gusto */}
      <GarantiaSection />

      {/* Cotizador */}
      <QuoteWizard />

      <SectionBanner
        image={bannerHalo}
        alt="Anillo solitario halo oval Gia Solari"
        text="Lista de Deseos"
        subtext="Cuéntanos qué te gustaría recibir"
        ctaHref="/lista-de-deseos"
        ctaLabel="Ir a la lista"
      />

      {/* Newsletter */}
      <Newsletter />

      {/* FAQ */}
      <FAQAccordion />

      {/* Instagram feed */}
      <InstagramFeed />

      {/* Footer */}
      <Footer />

      <WhatsAppButton />

    </div>
  );
};

export default Index;
