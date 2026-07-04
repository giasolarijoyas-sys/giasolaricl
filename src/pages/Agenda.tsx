import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { supabase } from "@/integrations/supabase/client";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const Agenda = () => {
  const [form, setForm] = useState({
    nombre: "",
    whatsapp: "",
    email: "",
    fecha: "",
    hora: "",
    motivo: "Asesoría personalizada",
    notas: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.whatsapp || !form.fecha || !form.hora) {
      toast.error("Completa nombre, WhatsApp, fecha y hora.");
      return;
    }
    setLoading(true);
    try {
      const message = `Hola Maca, quiero agendar una visita.\n\nNombre: ${form.nombre}\nWhatsApp: ${form.whatsapp}\nEmail: ${form.email}\nFecha: ${form.fecha}\nHora: ${form.hora}\nMotivo: ${form.motivo}\nNotas: ${form.notas}`;

      // Envía email a giasolarijoyas@gmail.com (y confirmación al cliente si dio email)
      try {
        await supabase.functions.invoke("send-agenda-email", {
          body: {
            nombre: form.nombre,
            whatsapp: form.whatsapp,
            email: form.email,
            fecha: form.fecha,
            hora: form.hora,
            motivo: form.motivo,
            notas: form.notas,
          },
        });
      } catch (err) {
        console.warn("No se pudo enviar el email:", err);
      }

      toast.success("¡Solicitud enviada! Te confirmamos por WhatsApp.");
      window.open(buildWhatsAppUrl("agenda", { custom: message }), "_blank");
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Agendar visita al showroom | Cotizar tu joya, Gia Solari"
        description="Reserva tu cita en nuestro showroom de Vitacura, Santiago. Asesoría personalizada para anillos de compromiso, argollas y joyería a medida."
        path="/agenda"
      />
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto"
          >
            <p className="text-gold tracking-[0.3em] uppercase text-xs text-center mb-4">
              Cita Previa
            </p>
            <h1 className="text-3xl md:text-5xl font-display text-charcoal text-center mb-4">
              Agendar Visita
            </h1>
            <p className="text-center text-charcoal/70 mb-3 leading-relaxed">
              Atiendo con cita previa en Vitacura, Santiago.
            </p>
            <p className="text-center text-charcoal/70 mb-10 leading-relaxed">
              Confírmanos fecha y hora y coordinamos contigo por WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 bg-cream/40 border border-gold/20 p-6 md:p-8">
              <div>
                <label className="block text-xs tracking-widest uppercase text-charcoal/70 mb-1">Nombre *</label>
                <input
                  name="nombre"
                  type="text"
                  value={form.nombre}
                  onChange={handleChange}
                  className="w-full min-h-[44px] px-4 border border-gold/30 bg-background"
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-charcoal/70 mb-1">WhatsApp *</label>
                  <input
                    name="whatsapp"
                    type="tel"
                    inputMode="tel"
                    value={form.whatsapp}
                    onChange={handleChange}
                    placeholder="+56 9 ..."
                    className="w-full min-h-[44px] px-4 border border-gold/30 bg-background"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-charcoal/70 mb-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full min-h-[44px] px-4 border border-gold/30 bg-background"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-charcoal/70 mb-1">Fecha *</label>
                  <input
                    name="fecha"
                    type="date"
                    min={today}
                    value={form.fecha}
                    onChange={handleChange}
                    className="w-full min-h-[44px] px-4 border border-gold/30 bg-background"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-charcoal/70 mb-1">Hora *</label>
                  <input
                    name="hora"
                    type="time"
                    value={form.hora}
                    onChange={handleChange}
                    className="w-full min-h-[44px] px-4 border border-gold/30 bg-background"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-charcoal/70 mb-1">Motivo</label>
                <select
                  name="motivo"
                  value={form.motivo}
                  onChange={handleChange}
                  className="w-full min-h-[44px] px-4 border border-gold/30 bg-background"
                >
                  <option>Asesoría personalizada (1h)</option>
                  <option>Argollas de matrimonio (30min)</option>
                  <option>Ajuste o retiro (15min)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-charcoal/70 mb-1">Notas</label>
                <textarea
                  name="notas"
                  value={form.notas}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gold/30 bg-background"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full min-h-[48px] px-6 py-3 bg-gradient-gold text-charcoal font-semibold tracking-widest uppercase text-sm disabled:opacity-50"
              >
                {loading ? "Enviando..." : "Solicitar cita"}
              </button>
              <p className="text-xs text-charcoal/60 text-center">
                Te confirmaremos disponibilidad por WhatsApp en menos de 24h.
              </p>
            </form>
          </motion.div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Agenda;
