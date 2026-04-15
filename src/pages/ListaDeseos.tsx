import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WishListForm from "@/components/WishListForm";
import WhatsAppButton from "@/components/WhatsAppButton";

const ListaDeseos = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Lista de Deseos | Gia Solari Joyas"
        description="Cuéntanos qué joyas te hacen soñar y nosotras nos encargamos de que tu pareja te sorprenda con el regalo perfecto."
        path="/lista-de-deseos"
      />
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
