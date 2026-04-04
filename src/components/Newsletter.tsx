import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitting(true);
    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({ email });

      if (error) {
        if (error.code === "23505") {
          toast({ title: "Ya estás suscrito/a", description: "Este email ya está en nuestra lista. ¡Gracias!" });
        } else {
          throw error;
        }
      } else {
        setSubscribed(true);
        toast({ title: "¡Suscripción exitosa!", description: "Te avisaremos de novedades y lanzamientos." });
      }
      setEmail("");
    } catch {
      toast({ title: "Error", description: "No pudimos registrar tu email. Inténtalo de nuevo." });
    } finally {
      setSubmitting(false);
    }
  };

  if (subscribed) {
    return (
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary text-lg font-display">✓ ¡Gracias por suscribirte!</p>
          <p className="text-muted-foreground text-sm mt-2">Te mantendremos al tanto de novedades y lanzamientos.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
          Recibe novedades
        </h3>
        <p className="text-muted-foreground text-sm mb-6">
          Suscríbete para enterarte de nuevos diseños, lanzamientos y tips de joyería.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="flex-1 p-3 border border-border rounded-lg bg-background text-foreground text-sm"
          />
          <button
            type="submit"
            disabled={submitting || !email}
            className="px-6 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {submitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            Suscribir
          </button>
        </form>
        <p className="text-xs text-muted-foreground mt-3">
          Sin spam. Solo cosas lindas. ✨
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
