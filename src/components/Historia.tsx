import { motion } from "framer-motion";
import giannaImg from "@/assets/maca-gianna.jpeg";

const Historia = () => {
  return (
    <section id="historia" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={giannaImg}
              alt="Gianna y Macarena, el legado madre e hija de Gia Solari"
              loading="lazy"
              width={600}
              height={450}
              className="w-full object-contain"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/30" />
          </motion.div>

          {/* Text */}
          <motion.div
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
                Soy Macarena González Solari. Diseño joyas hechas a mano en Santiago desde 2019. Cada pieza es única, conversada con quien la va a usar.
              </p>
              <p>
                Asesoro, diseño y creo pulseras, argollas, aros, collares y mi especialidad:{" "}
                <strong className="text-foreground">anillos de compromiso</strong>.
              </p>
              <p>
                Mi misión es dar una atención personalizada y dedicada, para que mandar a hacer una joya sea una{" "}
                <strong className="text-foreground">experiencia extraordinaria</strong>, tanto para quien la compra como para quien la recibe.
              </p>
              <p className="italic text-foreground font-display text-lg pt-2">
                "Tú me cuentas tu historia, yo la convierto en joya."
              </p>
              <p className="text-sm text-primary tracking-wide">
               , Maca, Gia Solari
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Historia;
