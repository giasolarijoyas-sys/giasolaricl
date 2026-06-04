import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ColeccionEsencial from "@/components/ColeccionEsencial";

const Esencial = () => {
  return (
    <div className="min-h-screen" style={{ background: "#F5EFE6" }}>
      <SEO
        title="Colección Esencial, Solitarios a medida | Gia Solari"
        description="Colección Esencial de Gia Solari: solitarios con diamante certificado, oro 18k o platino, hechos a medida. Cotiza el tuyo por WhatsApp."
        path="/esencial"
      />
      <Navbar />
      <div style={{ paddingTop: "112px" }}>
        <ColeccionEsencial />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Esencial;
