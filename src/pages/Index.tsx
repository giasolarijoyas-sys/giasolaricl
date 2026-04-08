import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";
import Historia from "@/components/Historia";
import QuoteWizard from "@/components/QuoteWizard";
import FAQAccordion from "@/components/FAQAccordion";
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
      {/* 1. Navegación fija */}
      <Navbar />

      {/* 2. Hero con slideshow */}
      <Hero />

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

      <SectionBanner
        image={bannerDetail}
        alt="Detalle de anillo Gia Solari"
        text="Tu Historia, Nuestra Inspiración"
      />

      {/* 9. Guía — enlace en nav */}

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
