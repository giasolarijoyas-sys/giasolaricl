import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoHorizontal from "@/assets/logo-horizontal.png";
import logoIcon from "@/assets/logo-icon.png";

const navLinks = [
  { label: "La Marca", href: "/#historia" },
  { label: "Joyas", href: "/#galeria" },
  { label: "Guía", href: "/guia" },
  { label: "Blog", href: "/blog" },
  { label: "Aprende", href: "/aprende" },
  { label: "Lista de Deseos", href: "/lista-de-deseos" },
  { label: "Cotizar", href: "/#cotizador" },
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
            href="https://wa.me/56984049502?text=Hola%20Maca%2C%20quiero%20cotizar%20una%20joya%20%F0%9F%92%9B"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://wa.me/56984049502?text=Hola%20Maca%2C%20quiero%20cotizar%20una%20joya%20%F0%9F%92%9B"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-sm tracking-widest uppercase border border-primary text-primary"
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
