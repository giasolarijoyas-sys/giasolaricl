import { motion } from "framer-motion";
import { CalendarDays, Check, Clock, CreditCard } from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const PAYMENT_URL = "https://api.funnelup.io/payment-link/6aa74ac632f95ae35594a69f";

const Agenda = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Agenda tu Cita: Anillos de Compromiso en Vitacura | Gia Solari"
      description="Reserva tu asesoría personalizada de joyería en nuestro showroom de Vitacura. Citas de 45 minutos para diseñar una pieza única."
      path="/agenda"
    />
    <Navbar />
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto">
          <p className="text-gold tracking-[0.3em] uppercase text-xs text-center mb-4">Cita previa</p>
          <h1 className="text-3xl md:text-5xl font-display text-charcoal text-center mb-4">Tu asesoría personalizada</h1>
          <p className="text-center text-charcoal/70 mb-10 leading-relaxed max-w-xl mx-auto">
            Un espacio privado en nuestro showroom de Vitacura para conversar sobre tu historia, conocer piedras y comenzar a diseñar una joya única.
          </p>
          <div className="bg-cream/40 border border-gold/20 p-6 md:p-9">
            <div className="grid sm:grid-cols-3 gap-5 mb-8 text-center">
              <div><Clock className="w-6 h-6 text-gold mx-auto mb-2" /><p className="font-medium text-charcoal">45 minutos</p><p className="text-xs text-charcoal/60">Atención dedicada</p></div>
              <div><CreditCard className="w-6 h-6 text-gold mx-auto mb-2" /><p className="font-medium text-charcoal">$20.000</p><p className="text-xs text-charcoal/60">Abono descontable</p></div>
              <div><CalendarDays className="w-6 h-6 text-gold mx-auto mb-2" /><p className="font-medium text-charcoal">Tú eliges</p><p className="text-xs text-charcoal/60">Día y hora disponible</p></div>
            </div>
            <div className="space-y-3 text-sm text-charcoal/70 mb-8">
              <p className="flex gap-3"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />El abono se descuenta íntegramente si confirmas tu encargo dentro de 30 días.</p>
              <p className="flex gap-3"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />Puedes reagendar una vez avisando con al menos 24 horas.</p>
              <p className="flex gap-3"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />Una vez confirmado el anillo, tienes una segunda cita sin costo para revisar piedras, diseño o tomar la decisión final.</p>
            </div>
            <a href={PAYMENT_URL} className="block w-full min-h-[48px] px-6 py-3 bg-gradient-gold text-charcoal font-semibold tracking-widest uppercase text-sm text-center hover:opacity-90 transition-opacity">
              Reservar y pagar $20.000
            </a>
            <p className="text-xs text-charcoal/60 text-center mt-4 leading-relaxed">
              Después del pago podrás escoger tu día y hora. Al continuar aceptas nuestra{" "}<a href="/terminos#reserva-citas" className="underline hover:text-gold">política de reserva</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Agenda;
