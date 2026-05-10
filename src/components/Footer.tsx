import { Instagram } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M11 7c2.5-.5 5 1 5 3.5S14 15 12 14.5c-.7-.2-1-.8-.8-1.5l1.3-5.5" />
    <path d="M11 14l-1.5 6" />
  </svg>
);

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607z" />
  </svg>
);

const Footer = () => {
  return (
    <footer style={{ background: "#1A1A18", color: "#F5EFE6" }} className="pt-20 pb-10 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-14" style={{ fontFamily: "Inter, sans-serif", fontSize: "13px" }}>
          {/* COL 1 - Marca */}
          <div>
            <img src="/wordmark-champan.svg" alt="Gia Solari Joyas" style={{ width: "200px" }} />
            <p className="mt-6 leading-relaxed" style={{ color: "#EBE2D2" }}>
              Joyería de autor en Santiago de Chile.
            </p>
            <p className="mt-2 leading-relaxed" style={{ color: "#EBE2D2", opacity: 0.7 }}>
              Fundado en 2019 por Macarena González Solari.
            </p>
          </div>

          {/* COL 2 - Catálogo */}
          <div>
            <p
              className="mb-4"
              style={{
                fontSize: "11px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#C9A87C",
              }}
            >
              Catálogo
            </p>
            <div className="flex flex-col gap-2">
              <a href="/joyas?categoria=Anillo+de+compromiso" className="hover:text-[#C9A87C] transition-colors">Anillos de compromiso</a>
              <a href="/joyas?categoria=Argolla" className="hover:text-[#C9A87C] transition-colors">Argollas</a>
              <a href="/joyas?categoria=Vintage" className="hover:text-[#C9A87C] transition-colors">Vintage</a>
              <a href="/joyas?categoria=Aros" className="hover:text-[#C9A87C] transition-colors">Aros</a>
              <a href="/joyas?categoria=Collar" className="hover:text-[#C9A87C] transition-colors">Collares</a>
              <a href="/joyas" className="hover:text-[#C9A87C] transition-colors">Pulseras</a>
              <a href="/joyas" className="hover:text-[#C9A87C] transition-colors">Ver todo</a>
            </div>
          </div>

          {/* COL 3 - Atelier */}
          <div>
            <p
              className="mb-4"
              style={{
                fontSize: "11px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#C9A87C",
              }}
            >
              Atelier
            </p>
            <div className="flex flex-col gap-2 mb-5">
              <p>Las Condes, Santiago de Chile</p>
              <p>Solo con cita previa</p>
              <a href="tel:+56984049502" className="hover:text-[#C9A87C] transition-colors">+56 9 8404 9502</a>
              <a href="mailto:giasolarijoyas@gmail.com" className="hover:text-[#C9A87C] transition-colors">giasolarijoyas@gmail.com</a>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="/agenda"
                className="inline-block text-center transition-colors"
                style={{
                  border: "1px solid #C9A87C",
                  color: "#C9A87C",
                  padding: "10px 22px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Agendar cita
              </a>
              <a
                href={buildWhatsAppUrl("generico")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center transition-colors"
                style={{
                  background: "#C9A87C",
                  color: "#1A1A18",
                  padding: "10px 22px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* COL 4 - Recursos */}
          <div>
            <p
              className="mb-4"
              style={{
                fontSize: "11px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#C9A87C",
              }}
            >
              Recursos
            </p>
            <div className="flex flex-col gap-2">
              <a href="/sobre-gia" className="hover:text-[#C9A87C] transition-colors">Sobre Gia</a>
              <a href="/proceso" className="hover:text-[#C9A87C] transition-colors">Proceso</a>
              <a href="/diario" className="hover:text-[#C9A87C] transition-colors">Diario de Atelier</a>
              <a href="/lookbook" className="hover:text-[#C9A87C] transition-colors">Lookbook</a>
              <a href="/aprende" className="hover:text-[#C9A87C] transition-colors">Aprende</a>
              <a href="/guia-de-tallas" className="hover:text-[#C9A87C] transition-colors">Guía de tallas</a>
              <a href="/cuidado-de-la-joya" className="hover:text-[#C9A87C] transition-colors">Cuidado de la joya</a>
              <a href="/garantia-por-gusto" className="hover:text-[#C9A87C] transition-colors">Garantía por Gusto</a>
              <a href="/preguntas-frecuentes" className="hover:text-[#C9A87C] transition-colors">Preguntas frecuentes</a>
            </div>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col md:flex-row justify-between items-center gap-5"
          style={{ borderTop: "1px solid rgba(201,168,124,0.3)" }}
        >
          <p style={{ fontSize: "11px", color: "rgba(245,239,230,0.6)" }}>
            © {new Date().getFullYear()} Gia Solari Joyas · GIA SOLARI SpA
          </p>

          <div className="flex items-center gap-5" style={{ color: "#C9A87C" }}>
            <a href="https://www.instagram.com/giasolari.cl/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a href="https://cl.pinterest.com/giasolarijoyas/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="hover:opacity-70 transition-opacity">
              <PinterestIcon width={16} height={16} />
            </a>
            <a href="https://www.tiktok.com/@giasolari.cl" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:opacity-70 transition-opacity">
              <TikTokIcon width={16} height={16} />
            </a>
            <a href={buildWhatsAppUrl("generico")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:opacity-70 transition-opacity">
              <WhatsAppIcon width={16} height={16} />
            </a>
          </div>

          <div className="flex gap-5" style={{ fontSize: "11px", color: "rgba(245,239,230,0.6)" }}>
            <a href="/terminos" className="hover:text-[#C9A87C] transition-colors">Términos</a>
            <a href="/admin" className="hover:text-[#C9A87C] transition-colors" style={{ opacity: 0.4 }}>Admin</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
