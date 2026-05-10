import { MessageCircle, Calendar, Mail } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const cards = [
  {
    Icon: MessageCircle,
    title: "WhatsApp",
    text: "+56 9 8404 9502",
    href: buildWhatsAppUrl("generico"),
    external: true,
  },
  {
    Icon: Calendar,
    title: "Agenda tu visita",
    text: "Atelier Las Condes, una hora privada.",
    href: "/agenda",
    external: false,
  },
  {
    Icon: Mail,
    title: "Escríbeme",
    text: "giasolarijoyas@gmail.com",
    href: "mailto:giasolarijoyas@gmail.com",
    external: false,
  },
];

const ComoTeAyudo = () => {
  return (
    <section className="py-24 md:py-28" style={{ background: "#F5EFE6" }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p
            className="mb-4"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#6B7752",
            }}
          >
            Atención personal
          </p>
          <h2
            style={{
              fontFamily: "'Bodoni Moda', serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 3.5vw, 48px)",
              lineHeight: 1.1,
              color: "#3A4429",
            }}
          >
            ¿Cómo te ayudo?
          </h2>
          <p
            className="mt-5"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              color: "#6B7752",
              lineHeight: 1.6,
            }}
          >
            Elige el canal que te quede más cómodo. Te respondo personalmente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {cards.map(({ Icon, title, text, href, external }) => (
            <a
              key={title}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="block p-10 md:p-12 transition-all duration-200 group"
              style={{
                background: "#FFFFFF",
                border: "1px solid #D9D2C4",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#4A5536";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#D9D2C4";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Icon size={28} strokeWidth={1.4} style={{ color: "#4A5536" }} />
              <h3
                className="mt-6"
                style={{
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: "24px",
                  color: "#3A4429",
                }}
              >
                {title}
              </h3>
              <p
                className="mt-2"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  color: "#6B7752",
                }}
              >
                {text}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoTeAyudo;
