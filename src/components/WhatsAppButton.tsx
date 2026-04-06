import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/56984049502?text=Hola%20Maca%2C%20quiero%20cotizar%20una%20joya%20%F0%9F%92%9B"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} className="text-cream" />
    </a>
  );
};

export default WhatsAppButton;
