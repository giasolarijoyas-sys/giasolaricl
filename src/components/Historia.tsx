import { motion } from "framer-motion";
import giannaImg from "@/assets/maca-gianna.jpeg";
import taller1 from "@/assets/taller-1.jpg";
import taller2 from "@/assets/taller-2.jpg";
import taller3 from "@/assets/taller-3.jpeg";
import taller4 from "@/assets/taller-4.jpg";

const tallerPhotos = [
  { src: taller1, alt: "Testeo de diamantes en el taller Gia Solari" },
  { src: taller2, alt: "Fundición de metales preciosos en el taller" },
  { src: taller3, alt: "Trabajo de precisión con herramientas de joyería" },
  { src: taller4, alt: "Soldadura con soplete en el taller de orfebrería" },
];

const Historia = () => {
  return (
    <section id="historia" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={giannaImg}
              alt="Gianna y Macarena — el legado madre e hija de Gia Solari"
              loading="lazy"
              width={600}
              height={450}
              className="w-full object-contain"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/30" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
              Nuestra Historia
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground leading-tight mb-6">
              Una joyería nacida del{" "}
              <em className="text-primary not-italic">amor</em> entre madre e
              hija
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Gia Solari nace de dos cosas que amamos profundamente:{" "}
                <strong className="text-foreground">Gianna</strong>, mi mamá y socia, quien me enseñó que una joya es una historia que se hereda — y{" "}
                <strong className="text-foreground">GIA</strong>, el Gemological Institute of America, la institución de gemología más reconocida del mundo, que respalda cada piedra que elegimos.
              </p>
              <p>
                Yo soy <strong className="text-foreground">Maca</strong>, diseñadora y gemóloga. Juntas formamos Gia Solari Joyas.
              </p>
              <p>
                Somos Gianna y Maca, madre e hija, unidas por la pasión a las joyas y el conocimiento en orfebrería. Asesoramos, diseñamos y creamos las más lindas pulseras, argollas, aros, collares y nuestra especialidad:{" "}
                <strong className="text-foreground">anillos de compromiso</strong>.
              </p>
              <p>
                Nuestra misión es dar una atención personalizada y dedicada, para que mandar a hacer una joya sea una{" "}
                <strong className="text-foreground">experiencia extraordinaria</strong> — tanto para quien la compra como para quien la recibe.
              </p>
              <p>
                Trabajamos en oro 18k, diamantes certificados, diamantes de laboratorio y{" "}
                <strong className="text-foreground">platino, trabajado con verdadera maestría</strong>. Nuestro compromiso de transparencia técnica hace que tu joya sea auténtica y única, igual que tu historia.
              </p>
              <p className="italic text-foreground font-display text-lg pt-2">
                "Tú nos cuentas tu historia, nosotras la convertimos en joya."
              </p>
              <p className="text-sm text-primary tracking-wide">
                — Maca y Gianna · Gia Solari
              </p>
            </div>
          </motion.div>
        </div>

        {/* Taller photos grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-6 text-center">
            Nuestro Taller
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {tallerPhotos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square overflow-hidden group"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Historia;
