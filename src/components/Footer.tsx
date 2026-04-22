import logoCrema from "@/assets/logo-icon-cream.png";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream/70 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <img src={logoCrema} alt="Gia Solari" className="h-14 mb-4" />
            <p className="text-sm leading-relaxed">
              Joyería de autor en Santiago, Chile. Anillos de compromiso, argollas
              de matrimonio y joyas personalizadas en oro 18k, platino y piedras
              preciosas certificadas.
            </p>
          </div>

          <div>
            <p className="text-cream font-medium text-sm tracking-widest uppercase mb-4">
              Navegación
            </p>
            <div className="flex flex-col gap-2">
              <a href="/#historia" className="text-sm hover:text-gold transition-colors">La Marca</a>
              <a href="/joyas" className="text-sm hover:text-gold transition-colors">Joyas</a>
              <a href="/proceso" className="text-sm hover:text-gold transition-colors">Nuestro Proceso</a>
              <a href="/agenda" className="text-sm hover:text-gold transition-colors">Agendar Visita</a>
              <a href="/guia" className="text-sm hover:text-gold transition-colors">Guía de Joyas</a>
              <a href="/blog" className="text-sm hover:text-gold transition-colors">Blog</a>
              <a href="/lista-de-deseos" className="text-sm hover:text-gold transition-colors">Lista de Deseos</a>
            </div>
          </div>

          <div>
            <p className="text-cream font-medium text-sm tracking-widest uppercase mb-4">
              Información
            </p>
            <div className="flex flex-col gap-2">
              <a href="/sobre-gia" className="text-sm hover:text-gold transition-colors">Sobre Gia</a>
              <a href="/preguntas-frecuentes" className="text-sm hover:text-gold transition-colors">Preguntas frecuentes</a>
              <a href="/guia-de-tallas" className="text-sm hover:text-gold transition-colors">Guía de tallas</a>
              <a href="/cuidado-de-la-joya" className="text-sm hover:text-gold transition-colors">Cuidado de tu joya</a>
              <a href="/garantia-por-gusto" className="text-sm hover:text-gold transition-colors">Garantía por gusto</a>
              <a href="/terminos" className="text-sm hover:text-gold transition-colors">Políticas y términos</a>
              <a href="/admin" className="text-sm hover:text-gold transition-colors text-cream/40">Administración</a>
            </div>
          </div>

          <div>
            <p className="text-cream font-medium text-sm tracking-widest uppercase mb-4">
              Contacto
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={buildWhatsAppUrl("generico")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                WhatsApp: +56 9 8404 9502
              </a>
              <a
                href="https://www.instagram.com/giasolari.cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                Instagram: @giasolari.cl
              </a>
              <a
                href="https://www.tiktok.com/@giasolari.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                TikTok: @giasolari.cl
              </a>
              <a
                href="https://cl.pinterest.com/giasolarijoyas/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                Pinterest: giasolarijoyas
              </a>
              <a
                href="mailto:giasolarijoyas@gmail.com"
                className="hover:text-gold transition-colors"
              >
                Email: giasolarijoyas@gmail.com
              </a>
              <p>Santiago, Las Condes · Cita previa</p>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} Gia Solari Joyas · GIA SOLARI SpA
          </p>
          <p className="text-xs text-cream/40">
            Oro 18k · Platino · Diamantes Certificados · Santiago, Chile
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
