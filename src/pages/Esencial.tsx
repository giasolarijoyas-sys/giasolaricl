import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ColeccionEsencial from "@/components/ColeccionEsencial";

const Esencial = () => {
  return (
    <div className="min-h-screen" style={{ background: "#F5EFE6" }}>
      <SEO
        title="Colección Esencial · Solitarios a medida desde $2.250.000 | Gia Solari"
        description="Colección Esencial de Gia Solari: solitarios con diamante certificado, oro 18k o platino, hechos a medida. Desde $2.250.000."
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
