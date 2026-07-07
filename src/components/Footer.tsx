import { buildWhatsAppUrl } from "@/lib/whatsapp";

// Brand SVG icons (filled, recognizable)
const InstagramBrandIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.141 0-3.504.012-4.74.068-.95.043-1.46.2-1.802.333-.453.176-.776.387-1.115.726-.339.339-.55.662-.726 1.115-.133.342-.29.852-.333 1.802C3.012 8.496 3 8.859 3 12s.012 3.504.068 4.74c.043.95.2 1.46.333 1.802.176.453.387.776.726 1.115.339.339.662.55 1.115.726.342.133.852.29 1.802.333 1.236.056 1.599.068 4.74.068s3.504-.012 4.74-.068c.95-.043 1.46-.2 1.802-.333.453-.176.776-.387 1.115-.726.339-.339.55-.662.726-1.115.133-.342.29-.852.333-1.802.056-1.236.068-1.599.068-4.74s-.012-3.504-.068-4.74c-.043-.95-.2-1.46-.333-1.802-.176-.453-.387-.776-.726-1.115-.339-.339-.662-.55-1.115-.726-.342-.133-.852-.29-1.802-.333C15.504 4.013 15.141 4.001 12 4.001zM12 7.838a4.162 4.162 0 1 1 0 8.324 4.162 4.162 0 0 1 0-8.324zm0 6.862a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4zm5.406-7.158a.972.972 0 1 1-1.944 0 .972.972 0 0 1 1.944 0z" />
  </svg>
);

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.93a8.16 8.16 0 0 0 4.77 1.52V7a4.85 4.85 0 0 1-1.84-.31z" />
  </svg>
);

const ThreadsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717-1.34 1.665-2.03 4.072-2.058 7.155.028 3.083.718 5.49 2.058 7.156 1.43 1.78 3.63 2.694 6.54 2.716 2.625-.02 4.358-.654 5.795-2.121 1.642-1.678 1.612-3.738 1.088-4.973-.31-.728-.873-1.333-1.625-1.756-.184 1.318-.611 2.385-1.279 3.182-.892 1.066-2.155 1.649-3.752 1.731-1.209.062-2.371-.235-3.27-.832-1.069-.71-1.696-1.795-1.766-3.05-.069-1.241.46-2.371 1.49-3.18 1.018-.799 2.452-1.227 4.122-1.227.65 0 1.295.044 1.916.131-.078-.473-.243-.851-.493-1.121-.342-.366-.872-.554-1.574-.554-.011 0-.022 0-.034 0-.563.008-1.328.165-1.815.879l-1.703-1.143c.747-1.094 1.95-1.71 3.51-1.732 1.435-.018 2.585.495 3.323 1.49.524.706.832 1.696.916 2.965 1.39.585 2.428 1.572 3.025 2.937.708 1.62.764 3.764-1.123 5.69-1.792 1.832-3.992 2.703-6.916 2.725Zm.847-12.166c-.418 0-.823.04-1.205.115-1.13.222-1.945.948-1.903 1.69.05.886.97 1.398 2.193 1.34.989-.046 2.226-.385 2.487-2.708-.51-.105-1.043-.158-1.572-.158v.001Z" />
  </svg>
);

const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
    <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.4.04-3.43.22-.93 1.4-5.94 1.4-5.94s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.03 0 1.52.77 1.52 1.7 0 1.03-.66 2.58-1 4.01-.28 1.2.6 2.18 1.78 2.18 2.14 0 3.78-2.26 3.78-5.51 0-2.88-2.07-4.9-5.03-4.9-3.43 0-5.44 2.57-5.44 5.23 0 1.04.4 2.15.9 2.75.1.12.11.22.08.34l-.33 1.34c-.05.22-.17.27-.4.16-1.5-.7-2.43-2.88-2.43-4.64 0-3.78 2.74-7.25 7.9-7.25 4.15 0 7.37 2.96 7.37 6.9 0 4.12-2.6 7.43-6.2 7.43-1.22 0-2.36-.63-2.75-1.38l-.75 2.85c-.27 1.04-1 2.35-1.5 3.15A12 12 0 1 0 12 0Z" />
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
            <div className="flex items-center mt-5" style={{ color: "#FFFFFF", gap: "16px" }}>
              <a href="https://www.instagram.com/giasolarijoyas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
                <InstagramBrandIcon width={24} height={24} />
              </a>
              <a href="https://www.tiktok.com/@giasolarijoyas" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:opacity-70 transition-opacity">
                <TikTokIcon width={24} height={24} />
              </a>
              <a href="https://www.threads.com/@giasolarijoyas" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="hover:opacity-70 transition-opacity">
                <ThreadsIcon width={24} height={24} />
              </a>
            </div>
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
              <a href="/joyas?tipo=bodas" className="hover:text-[#C9A87C] transition-colors">Anillos de compromiso y argollas</a>
              <a href="/joyas?tipo=vintage" className="hover:text-[#C9A87C] transition-colors">Vintage</a>
              <a href="/joyas?tipo=aros" className="hover:text-[#C9A87C] transition-colors">Aros</a>
              <a href="/joyas?tipo=collares" className="hover:text-[#C9A87C] transition-colors">Collares</a>
              <a href="/joyas?tipo=pulseras" className="hover:text-[#C9A87C] transition-colors">Pulseras</a>
              <a href="/joyas" className="hover:text-[#C9A87C] transition-colors">Ver todo</a>
            </div>
          </div>

          {/* COL 3 - Showroom */}
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
              Showroom
            </p>
            <div className="flex flex-col gap-2 mb-5">
              <p>Vitacura, Santiago de Chile</p>
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
            © {new Date().getFullYear()} Gia Solari Joyas, GIA SOLARI SpA
          </p>

          <div className="flex items-center gap-5" style={{ color: "#C9A87C" }}>
            <a href="https://www.instagram.com/giasolarijoyas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
              <InstagramBrandIcon width={16} height={16} />
            </a>
            <a href="https://cl.pinterest.com/giasolarijoyas/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="hover:opacity-70 transition-opacity">
              <PinterestIcon width={16} height={16} />
            </a>
            <a href="https://www.tiktok.com/@giasolarijoyas" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:opacity-70 transition-opacity">
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
