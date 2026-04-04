import { motion } from "framer-motion";
import giannaImg from "@/assets/maca-gianna.jpeg";

const Historia = () => {
  return (
    <section id="historia" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image — solo foto con mamá */}
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
              Desde 2019
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground leading-tight mb-6">
              Una joyería nacida del{" "}
              <em className="text-primary not-italic">amor</em> entre madre e
              hija
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Somos Maca y Gianna — madre e hija, ambas{" "}
                <strong className="text-foreground">joyeras</strong>. Gia Solari
                nace de nuestro amor compartido por las joyas y de años
                trabajando juntas con piedras y metales. Maca además es{" "}
                <strong className="text-foreground">orfebre</strong>, y en
                nuestro taller nos apoyamos con los mejores orfebres del rubro
                para garantizar que cada proceso cuente con su especialista.
              </p>
              <p>
                Amamos los detalles. Nos especializamos en piezas a pedido con{" "}
                <strong className="text-foreground">transparencia técnica</strong>{" "}
                y atención completamente personalizada, porque creemos que tu
                joya tiene que ser{" "}
                <strong className="text-foreground">auténtica y única</strong>,
                igual que tu historia. Somos de las pocas joyerías en Chile que
                trabaja el{" "}
                <strong className="text-foreground">platino con verdadera maestría</strong>.
              </p>
              <p className="italic text-foreground font-display text-lg pt-2">
                "Tú nos cuentas tu historia, nosotras la convertimos en joya."
              </p>
              <p className="text-sm text-primary tracking-wide">
                — Maca & Gianna · Gia Solari
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Historia;
