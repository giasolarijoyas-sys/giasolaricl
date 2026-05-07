import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoHorizontal from "@/assets/logo-horizontal.png";
import logoIcon from "@/assets/logo-icon.png";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const WHATSAPP_HREF = buildWhatsAppUrl("home_hero");

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Joyas", href: "/joyas" },
  { label: "Sobre Gia", href: "/sobre-gia" },
  { label: "Proceso", href: "/proceso" },
  { label: "Garantía", href: "/garantia-por-gusto" },
  { label: "Aprende", href: "/aprende" },
  { label: "Agenda", href: "/agenda" },
  { label: "Cotizar", href: "/#cotizador" },
];

const mobileGroups = [
  {
    title: "Catálogo",
    links: [
      { label: "Joyas", href: "/joyas" },
      { label: "Cotizar", href: "/#cotizador" },
      { label: "Agenda", href: "/agenda" },
    ],
  },
  {
    title: "Marca",
    links: [
      { label: "Sobre Gia", href: "/sobre-gia" },
      { label: "Proceso", href: "/proceso" },
      { label: "Garantía", href: "/garantia-por-gusto" },
      { label: "Aprende", href: "/aprende" },
    ],
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        <a href="/" className="flex items-center">
          <img src={logoIcon} alt="Gia Solari" className="h-9 w-9 md:hidden" />
          <img src={logoHorizontal} alt="Gia Solari - Joyas que trascienden generaciones" className="hidden md:block h-12" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm tracking-widest uppercase border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Contactar
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {mobileGroups.map((group) => (
                <div key={group.title} className="flex flex-col gap-3">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70">
                    {group.title}
                  </p>
                  <div className="flex flex-col gap-3 pl-1">
                    {group.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="text-base font-display text-charcoal hover:text-gold transition-colors"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 w-full text-center px-5 py-3 text-sm tracking-widest uppercase bg-gradient-gold text-charcoal font-semibold"
              >
                Contactar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
