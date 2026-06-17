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

import bannerNusa from "@/assets/banner-anillo-nusa.png";
import bannerHalo from "@/assets/banner-halo-oval.png";
import bannerHands from "@/assets/banner-hands.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Anillos de Compromiso a Medida en Santiago | Gia Solari"
        description="Showroom de joyería de autor en Vitacura, Santiago. Anillos de compromiso, argollas y joyas en oro 18k, platino y diamantes certificados. Garantía por Gusto."
        path="/"
      />
      <Navbar />

      <Hero />

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
