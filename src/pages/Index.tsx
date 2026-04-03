import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Historia from "@/components/Historia";
import Gallery from "@/components/Gallery";
import QuoteForm from "@/components/QuoteForm";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Historia />
      <Gallery />
      <QuoteForm />
      <Testimonials />
      <WhyUs />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
