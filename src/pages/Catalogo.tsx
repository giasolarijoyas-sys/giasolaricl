import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";

import galZafiro from "@/assets/gal-zafiro.jpeg";
import galArgolla from "@/assets/gal-argolla.jpeg";
import galPrincesa from "@/assets/gal-princesa.jpeg";
import galBrazaleteOro from "@/assets/gal-brazalete-oro.png";
import galTricillo from "@/assets/gal-tricillo.jpeg";

const categorias = [
  {
    slug: "anillos-de-compromiso",
    nombre: "Anillos de Compromiso",
    descripcion: "Diseños únicos en oro 18k y platino con diamantes y piedras de color.",
    image: galZafiro,
  },
  {
    slug: "argollas-de-matrimonio",
    nombre: "Argollas de Matrimonio",
    descripcion: "Argollas clásicas y modernas, hechas a medida.",
    image: galArgolla,
  },
  {
    slug: "aros",
    nombre: "Aros",
    descripcion: "Aros para uso diario o piezas de fiesta con piedras certificadas.",
    image: galPrincesa,
  },
  {
    slug: "collares-y-pulseras",
    nombre: "Collares y Pulseras",
    descripcion: "Piezas delicadas en oro y platino, con o sin piedras.",
    image: galBrazaleteOro,
  },
  {
    slug: "joyas-personalizadas",
    nombre: "Joyas Personalizadas",
    descripcion: "Diseñamos cualquier pieza desde cero, según tu historia.",
    image: galTricillo,
  },
];

const Catalogo = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Catálogo | Anillos de Compromiso, Argollas y Joyas a Medida — Gia Solari"
        description="Explora nuestras categorías: anillos de compromiso, argollas de matrimonio, aros, collares, pulseras y joyas personalizadas en oro 18k y platino. Cotiza por WhatsApp."
        path="/catalogo"
      />
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Nuestra Colección</p>
            <h1 className="text-3xl md:text-5xl font-display text-charcoal mb-4">Catálogo</h1>
            <p className="text-charcoal/70 leading-relaxed">
              Cada pieza se diseña y fabrica a mano en Santiago. Explora las categorías y
              cotiza tu joya por WhatsApp.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categorias.map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/catalogo/${cat.slug}`}
                  className="group block bg-cream/40 border border-gold/20 hover:border-gold transition-colors"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.nombre}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-2xl text-charcoal mb-2">{cat.nombre}</h2>
                    <p className="text-sm text-charcoal/70 mb-4">{cat.descripcion}</p>
                    <span className="text-xs tracking-widest uppercase text-gold group-hover:underline">
                      Ver categoría →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Catalogo;
