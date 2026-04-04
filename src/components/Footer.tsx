const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream/70 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <p className="font-display text-xl text-cream tracking-widest mb-4">
              GIA SOLARI
            </p>
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
              <a href="#historia" className="text-sm hover:text-gold transition-colors">La Marca</a>
              <a href="#galeria" className="text-sm hover:text-gold transition-colors">Joyas</a>
              <a href="/guia" className="text-sm hover:text-gold transition-colors">Guía de Joyas</a>
              <a href="#cotizador" className="text-sm hover:text-gold transition-colors">Cotizar</a>
              <a href="#testimonios" className="text-sm hover:text-gold transition-colors">Testimonios</a>
            </div>
          </div>

          <div>
            <p className="text-cream font-medium text-sm tracking-widest uppercase mb-4">
              Información
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://calendly.com/integrations"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gold transition-colors"
              >
                Agenda tu Visita
              </a>
              <a href="/terminos" className="text-sm hover:text-gold transition-colors">Políticas de cambios y garantías</a>
              <a href="/guia#garantia" className="text-sm hover:text-gold transition-colors">Confianza y certificación</a>
              <a href="/guia#faq" className="text-sm hover:text-gold transition-colors">Preguntas frecuentes</a>
            </div>
          </div>

          <div>
            <p className="text-cream font-medium text-sm tracking-widest uppercase mb-4">
              Contacto
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="https://wa.me/56984049502"
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
