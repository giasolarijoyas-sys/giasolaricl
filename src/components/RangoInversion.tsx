import { motion } from "framer-motion";

const tarjetas = [
  {
    precio: "Desde $1.500.000 CLP",
    titulo: "Anillo con diamante natural 0.5ct + oro 18k",
    subtitulo: "La opción clásica, con certificación GIA.",
  },
  {
    precio: "Desde $3.500.000 CLP",
    titulo: "Anillo con diamante natural 1ct + platino",
    subtitulo: "La pieza premium, pensada para generaciones.",
  },
];

const RangoInversion = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center mb-12">
        <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Inversión</p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground">Rango de inversión</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {tarjetas.map((t, i) => (
          <motion.div
            key={t.precio}
            transition={{ delay: i * 0.1 }}
            className="border border-border rounded-lg p-8 bg-card flex flex-col"
          >
            <p className="font-display text-2xl md:text-3xl text-foreground mb-4">{t.precio}</p>
            <p className="text-foreground text-sm mb-3 leading-relaxed">{t.titulo}</p>
            <p className="text-muted-foreground text-sm italic mt-auto">{t.subtitulo}</p>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto">
        Estos son precios de referencia. Cada joya se cotiza a medida según materiales,
        piedra y diseño.
      </p>

      <div className="text-center mt-8">
        <a
          href="/agenda"
          className="inline-block px-8 py-3 border border-primary text-primary text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Agendemos una conversación
        </a>
      </div>
    </div>
  </section>
);

export default RangoInversion;
