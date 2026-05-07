import { Instagram } from "lucide-react";

const InstagramButton = () => {
  return (
    <a
      href="https://instagram.com/giasolarijoyas"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-[999] flex items-center justify-center rounded-full bottom-[156px] right-5 sm:bottom-[88px] sm:right-6 w-14 h-14 hover:scale-105 transition-transform"
      style={{
        background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
      aria-label="Seguinos en Instagram"
    >
      <Instagram size={26} color="white" strokeWidth={2} />
    </a>
  );
};

export default InstagramButton;
