import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Marquee from "@/components/Marquee";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import ProcessSteps from "@/components/ProcessSteps";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import TestimoniosHome from "@/components/TestimoniosHome";
import Historia from "@/components/Historia";
import ElTaller from "@/components/ElTaller";
import QuoteWizard from "@/components/QuoteWizard";
import FAQAccordion from "@/components/FAQAccordion";
import EnTusManos from "@/components/EnTusManos";
import GarantiaSection from "@/components/GarantiaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JewelryChat from "@/components/JewelryChat";
import SectionBanner from "@/components/SectionBanner";

import bannerNusa from "@/assets/banner-anillo-nusa.png";
import bannerHalo from "@/assets/banner-halo-oval.png";
import bannerDetail from "@/assets/banner-detail.jpg";
import bannerHands from "@/assets/banner-hands.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Gia Solari Joyas | Anillos de Compromiso y Joyería de Autor en Santiago"
        description="Diseño joyas a medida en Santiago desde 2019. Anillos de compromiso, argollas y piezas personalizadas en oro 18k, platino y diamantes certificados GIA/IGI. Agenda tu cita."
        path="/"
      />
      {/* 1. Navegación fija */}
      <Navbar />

      {/* 2. Hero con slideshow */}
      <Hero />

      {/* Trust badges */}
      <TrustBadges />

      {/* 3. Barra marquee de keywords */}
      <Marquee />

      {/* 4. Galería de trabajos */}
      <Gallery />

      <SectionBanner
        image={bannerNusa}
        alt="Anillo Nusa con zafiro azul de Gia Solari"
        text="Cada Detalle Cuenta"
        subtext="Diseño artesanal con piedras certificadas"
      />

      {/* 5. Diferenciadores / por qué elegirnos */}
      <WhyUs />

      {/* 6. Proceso paso a paso */}
      <ProcessSteps />

      {/* Video section */}
      <VideoSection />

      <SectionBanner
        image={bannerHands}
        alt="Joyas Gia Solari en detalle"
        text="Hecho a Tu Medida"
        subtext="100% personalizado, 100% único"
      />

      {/* 7. Testimonios */}
      <Testimonials />

      {/* 8. Historia de la marca */}
      <Historia />

      {/* El Taller — proceso artesanal */}
      <ElTaller />
      <SectionBanner
        image={bannerDetail}
        alt="Detalle de anillo Gia Solari"
        text="Tu Historia, Nuestra Inspiración"
      />

      {/* Garantía por Gusto - promesa de marca */}
      <GarantiaSection />

      {/* 10. Formulario de cotización (wizard) */}
      <QuoteWizard />

      <SectionBanner
        image={bannerHalo}
        alt="Anillo solitario halo oval Gia Solari"
        text="Lista de Deseos"
        subtext="Cuéntanos qué te gustaría recibir"
        ctaHref="/lista-de-deseos"
        ctaLabel="Ir a la lista"
      />

      {/* En tus manos gallery */}
      <EnTusManos />

      {/* Newsletter */}
      <Newsletter />

      {/* 11. Acordeón de términos y condiciones */}
      <FAQAccordion />

      {/* 12. Footer */}
      <Footer />

      <WhatsAppButton />
      <JewelryChat />
    </div>
  );
};

export default Index;
