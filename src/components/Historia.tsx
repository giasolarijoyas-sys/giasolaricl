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
                Soy Maca. Gia Solari nace de mi amor por las joyas y de lo que
                aprendí viendo a mi mamá —{" "}
                <strong className="text-foreground">Gianna</strong> — trabajar
                con piedras y metales desde que tengo memoria. Ella me enseñó
                que una joya no es un objeto, es una historia que se lleva puesta.
              </p>
              <p>
                Juntas nos especializamos en piezas a pedido con{" "}
                <strong className="text-foreground">transparencia técnica</strong>,
                atención completamente personalizada y asesoría real. Somos de
                las pocas joyerías en Chile que trabaja el{" "}
                <strong className="text-foreground">platino con verdadera maestría</strong>.
              </p>
              <p className="italic text-foreground font-display text-lg pt-2">
                "Tú me cuentas tu historia, yo la convierto en joya."
              </p>
              <p className="text-sm text-primary tracking-wide">
                — Maca González Solari · Fundadora
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Historia;
