import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Historia from "@/components/Historia";
import Gallery from "@/components/Gallery";
import QuizContainer from "@/components/quiz/QuizContainer";
import Testimonials from "@/components/Testimonials";
import WishListForm from "@/components/WishListForm";
import WhyUs from "@/components/WhyUs";
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
      <Navbar />
      <Hero />
      <WhyUs />

      <SectionBanner
        image={bannerNusa}
        alt="Anillo Nusa con zafiro azul de Gia Solari"
        text="Cada Detalle Cuenta"
        subtext="Diseño artesanal con piedras certificadas"
      />

      <QuizContainer />

      <SectionBanner
        image={bannerHands}
        alt="Joyas Gia Solari en detalle"
        text="Hecho a Tu Medida"
        subtext="100% personalizado, 100% único"
      />

      <Gallery />
      <Historia />

      <SectionBanner
        image={bannerDetail}
        alt="Detalle de anillo Gia Solari"
        text="Tu Historia, Nuestra Inspiración"
      />

      <Testimonials />

      <SectionBanner
        image={bannerHalo}
        alt="Anillo solitario halo oval Gia Solari"
        text="Cotiza tu Joya"
        subtext="Sin compromiso, con todo el cariño"
        ctaHref="#cotizador"
        ctaLabel="Comenzar Cotización"
      />

      <WishListForm />
      <Newsletter />
      <Footer />
      <WhatsAppButton />
      <JewelryChat />
    </div>
  );
};

export default Index;
