import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WishListForm from "@/components/WishListForm";
import WhatsAppButton from "@/components/WhatsAppButton";

const ListaDeseos = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <WishListForm />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ListaDeseos;
