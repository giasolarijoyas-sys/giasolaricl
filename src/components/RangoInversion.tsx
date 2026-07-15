import { buildWhatsAppUrl } from "@/lib/whatsapp";

const RangoInversion = () => (
  <section className="py-10 md:py-24 bg-background">
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center mb-10">
        <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Inversión</p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground">Cada pieza, su propio valor</h2>
      </div>

      <div className="max-w-2xl mx-auto border border-border rounded-lg p-10 bg-card text-center">
        <p className="text-muted-foreground text-sm leading-relaxed">
          Cada pieza se cotiza según el diseño, el metal y la piedra que elijas.
          Conversemos por WhatsApp y armamos juntas el valor de la tuya.
        </p>
        <p className="text-muted-foreground/80 text-xs leading-relaxed mt-5 pt-5 border-t border-border">
          <span aria-hidden="true">💳</span> Transferencia bancaria · Tarjeta de crédito · Cuotas sin interés disponibles · Consulta condiciones
        </p>
      </div>

      <div className="text-center mt-8">
        <a
          href={buildWhatsAppUrl("home_hero")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 border border-primary text-primary text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Cotizar por WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default RangoInversion;
