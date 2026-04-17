import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";

import galZafiro from "@/assets/gal-zafiro.jpeg";
import galArgolla from "@/assets/gal-argolla.jpeg";
import galTricillo from "@/assets/gal-tricillo.jpeg";
import galTricillo2 from "@/assets/gal-tricillo2.jpeg";
import galPrincesa from "@/assets/gal-princesa.jpeg";
import galHaloZafiro from "@/assets/gal-halo-zafiro.jpeg";
import galEsmeraldaHalo from "@/assets/gal-esmeralda-halo.png";
import galZafirosBanda from "@/assets/gal-zafiros-banda.png";
import galArtDeco from "@/assets/gal-art-deco.png";
import galOvalPave from "@/assets/gal-oval-pave.jpg";
import galSolitarioChevron from "@/assets/gal-solitario-chevron.jpg";
import galCincoPiedras from "@/assets/gal-cinco-piedras.jpeg";
import galBrazaleteOro from "@/assets/gal-brazalete-oro.png";
import galHaloOvalCaja from "@/assets/gal-halo-oval-caja.jpg";

type Pieza = {
  slug: string;
  nombre: string;
  material: string;
  descripcion: string;
  imagenes: string[];
};

const CATEGORIAS: Record<
  string,
  {
    nombre: string;
    descripcion: string;
    piezas: Pieza[];
  }
> = {
  "anillos-de-compromiso": {
    nombre: "Anillos de Compromiso",
    descripcion: "Diseños únicos en oro 18k y platino con diamantes y piedras de color certificadas.",
    piezas: [
      {
        slug: "halo-zafiro-azul",
        nombre: "Anillo Halo Zafiro Azul",
        material: "Oro 18k blanco · Zafiro azul · Diamantes",
        descripcion: "Halo de diamantes pequeños rodeando un zafiro azul central.",
        imagenes: [galHaloZafiro, galZafiro, galZafirosBanda],
      },
      {
        slug: "solitario-oval-pave",
        nombre: "Solitario Oval Pavé",
        material: "Platino · Diamante natural certificado",
        descripcion: "Diamante oval con banda en pavé de diamantes.",
        imagenes: [galOvalPave, galHaloOvalCaja, galSolitarioChevron],
      },
      {
        slug: "esmeralda-halo",
        nombre: "Esmeralda con Halo",
        material: "Oro 18k amarillo · Esmeralda · Diamantes",
        descripcion: "Esmeralda esmeralda-cut rodeada de halo de diamantes.",
        imagenes: [galEsmeraldaHalo, galArtDeco, galCincoPiedras],
      },
      {
        slug: "tricillo",
        nombre: "Tricillo",
        material: "Oro 18k · Diamantes",
        descripcion: "Tres cintillos entrelazados con detalles de diamantes.",
        imagenes: [galTricillo, galTricillo2, galPrincesa],
      },
    ],
  },
  "argollas-de-matrimonio": {
    nombre: "Argollas de Matrimonio",
    descripcion: "Argollas clásicas y modernas en oro 18k amarillo y platino, hechas a medida.",
    piezas: [
      {
        slug: "argolla-clasica",
        nombre: "Argolla Clásica",
        material: "Oro 18k amarillo",
        descripcion: "Argolla pulida tradicional, ancho personalizable.",
        imagenes: [galArgolla, galArgolla, galArgolla],
      },
    ],
  },
  aros: {
    nombre: "Aros",
    descripcion: "Aros para uso diario o piezas de fiesta con piedras certificadas.",
    piezas: [
      {
        slug: "aros-zafiro",
        nombre: "Aros con Zafiro",
        material: "Oro 18k blanco · Zafiros",
        descripcion: "Aros pequeños con zafiros azules.",
        imagenes: [galZafiro, galHaloZafiro, galZafirosBanda],
      },
    ],
  },
  "collares-y-pulseras": {
    nombre: "Collares y Pulseras",
    descripcion: "Piezas delicadas en oro y platino, con o sin piedras.",
    piezas: [
      {
        slug: "brazalete-oro",
        nombre: "Brazalete Oro",
        material: "Oro 18k amarillo",
        descripcion: "Brazalete tipo esclava en oro pulido.",
        imagenes: [galBrazaleteOro, galBrazaleteOro, galBrazaleteOro],
      },
    ],
  },
  "joyas-personalizadas": {
    nombre: "Joyas Personalizadas",
    descripcion: "Diseñamos cualquier pieza desde cero, según tu historia.",
    piezas: [],
  },
};

const CategoriaCatalogo = () => {
  const { slug } = useParams<{ slug: string }>();
  const cat = slug ? CATEGORIAS[slug] : undefined;

  if (!cat) return <Navigate to="/catalogo" replace />;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${cat.nombre} | Gia Solari Joyas — Santiago`}
        description={cat.descripcion}
        path={`/catalogo/${slug}`}
      />
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <Link to="/catalogo" className="text-xs tracking-widest uppercase text-gold hover:underline">
            ← Catálogo
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mt-4 mb-12"
          >
            <h1 className="text-3xl md:text-5xl font-display text-charcoal mb-4">{cat.nombre}</h1>
            <p className="text-charcoal/70 leading-relaxed">{cat.descripcion}</p>
          </motion.div>

          {cat.piezas.length === 0 ? (
            <div className="text-center py-16 border border-gold/20 bg-cream/40">
              <p className="text-charcoal/70 mb-6 max-w-md mx-auto">
                Diseñamos cada pieza desde cero según tu historia. Conversemos por WhatsApp.
              </p>
              <a
                href="https://wa.me/56984049502?text=Hola%20Gia%2C%20me%20gustar%C3%ADa%20cotizar%20una%20joya%20personalizada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-gold text-charcoal font-semibold tracking-widest uppercase text-sm"
              >
                Conversar con Gia
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cat.piezas.map((p, i) => (
                <motion.article
                  key={p.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-cream/40 border border-gold/20"
                >
                  <Link to={`/catalogo/${slug}/${p.slug}`} className="block">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={p.imagenes[0]}
                        alt={p.nombre}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <h2 className="font-display text-xl text-charcoal mb-1">{p.nombre}</h2>
                    <p className="text-xs uppercase tracking-wider text-gold mb-2">{p.material}</p>
                    <p className="text-sm text-charcoal/70 mb-4">{p.descripcion}</p>
                    <a
                      href={`https://wa.me/56984049502?text=${encodeURIComponent(
                        `Hola Gia, te escribo desde la web, me gustaría cotizar la pieza "${p.nombre}"...`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block min-h-[44px] w-full text-center px-4 py-3 bg-charcoal text-cream text-xs tracking-widest uppercase hover:bg-gold hover:text-charcoal transition-colors"
                    >
                      Cotizar esta pieza
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export { CATEGORIAS };
export default CategoriaCatalogo;
