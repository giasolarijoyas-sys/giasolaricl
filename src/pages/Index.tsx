import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Marquee from "@/components/Marquee";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import ProcesoHome from "@/components/ProcesoHome";
import TresPilares from "@/components/TresPilares";
import VideoSection from "@/components/VideoSection";
import Historia from "@/components/Historia";
import QuoteWizard from "@/components/QuoteWizard";
import FAQAccordion from "@/components/FAQAccordion";
import EnTusManos from "@/components/EnTusManos";
import GarantiaSection from "@/components/GarantiaSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JewelryChat from "@/components/JewelryChat";
import SectionBanner from "@/components/SectionBanner";
import RangoInversion from "@/components/RangoInversion";
import IncluyeAnillo from "@/components/IncluyeAnillo";
import TestimoniosDestacados from "@/components/TestimoniosDestacados";

import SoloEnGiaSolariCompact from "@/components/SoloEnGiaSolariCompact";
import InstagramFeed from "@/components/InstagramFeed";
import ComoTeAyudo from "@/components/ComoTeAyudo";
import VitrinaCategorias from "@/components/VitrinaCategorias";
import NewIn from "@/components/NewIn";
import SignificadosTeaser from "@/components/SignificadosTeaser";

import bannerNusa from "@/assets/banner-anillo-nusa.png";
import bannerHalo from "@/assets/banner-halo-oval.png";
import bannerDetail from "@/assets/banner-detail.jpg";
import bannerHands from "@/assets/banner-hands.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Gia Solari Joyas | Anillos de compromiso a medida en Santiago de Chile"
        description="Atelier de joyería de autor en Las Condes, Santiago. Anillos de compromiso, argollas y joyas en oro 18k, platino y diamantes certificados. Garantía por Gusto."
        path="/"
      />
      {/* 1. Navegación fija */}
      <Navbar />

      {/* 2. Hero con slideshow */}
      <Hero />

      {/* Trust badges */}
      <TrustBadges />

      {/* 3 Pilares — promesa de marca, post-hero */}
      <TresPilares />

      {/* Compact diferenciadores con CTA a Garantía por Gusto */}
      <SoloEnGiaSolariCompact />

      {/* Historia de Maca — conexión real, antes de la galería */}
      <Historia />

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

      {/* ¿Cómo te ayudo? — atención personal */}
      <ComoTeAyudo />

      {/* Vitrina de categorías */}
      <VitrinaCategorias />

      {/* New In — recién salido del taller */}
      <NewIn />

      {/* 6. Proceso en 3 pasos */}
      <ProcesoHome />

      {/* Video section */}
      <VideoSection />

      {/* Rango de inversión — antes de testimonios */}
      <RangoInversion />

      {/* Qué incluye tu anillo de compromiso */}
      <IncluyeAnillo />

      {/* Testimonios destacados */}
      <TestimoniosDestacados />

      <SectionBanner
        image={bannerHands}
        alt="Joyas Gia Solari en detalle"
        text="Hecho a Tu Medida"
        subtext="100% personalizado, 100% único"
      />
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



      {/* Significados — cada joya tiene una historia */}
      <SignificadosTeaser />

      {/* 11. Acordeón de términos y condiciones */}
      <FAQAccordion />

      {/* Instagram feed antes del footer */}
      <InstagramFeed />

      {/* 12. Footer */}
      <Footer />

      <WhatsAppButton />
      <JewelryChat />
    </div>
  );
};

export default Index;
