const keywords = [
  "Anillos de Compromiso",
  "Oro 18k",
  "Platino",
  "Diamantes Certificados",
  "Zafiros",
  "Esmeraldas",
  "Argollas de Matrimonio",
  "Joyas a Pedido",
  "Diseño Personalizado",
];

const Marquee = () => {
  return (
    <div className="bg-primary/5 border-y border-border overflow-hidden py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...keywords, ...keywords].map((kw, i) => (
          <span
            key={i}
            className="mx-6 text-xs tracking-[0.2em] uppercase text-primary/70 font-medium"
          >
            {kw}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
