import { Instagram } from "lucide-react";

const InstagramButton = () => {
  return (
    <a
      href="https://instagram.com/giasolarijoyas"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center rounded-full w-[50px] h-[50px] sm:w-14 sm:h-14 hover:scale-105 transition-transform"
      style={{
        background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
      aria-label="Síguenos en Instagram"
    >
      <Instagram size={24} color="white" strokeWidth={2} />
    </a>
  );
};

export default InstagramButton;
