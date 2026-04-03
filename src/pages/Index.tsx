import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Historia from "@/components/Historia";
import Gallery from "@/components/Gallery";
import QuizContainer from "@/components/quiz/QuizContainer";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JewelryChat from "@/components/JewelryChat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyUs />
      <QuizContainer />
      <Gallery />
      <Historia />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
      <JewelryChat />
    </div>
  );
};

export default Index;
