import { useEffect, useState } from "react";

const WhatsAppButton = () => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href="https://wa.me/56984049502?text=Hola%20Gia%2C%20te%20escribo%20desde%20la%20web%2C%20me%20gustar%C3%ADa%20cotizar..."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-[999] flex items-center justify-center rounded-full bottom-6 right-6 md:bottom-6 md:right-6 w-14 h-14"
      style={{
        backgroundColor: "#25D366",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        transform: pulse ? "scale(1.05)" : "scale(1)",
        transition: "transform 300ms ease-in-out",
        bottom: "24px",
        right: "24px",
      }}
      aria-label="Contactar por WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.924 15.924 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.312 22.594c-.39 1.1-2.294 2.136-3.174 2.214-.798.07-1.794.1-2.898-.364a26.692 26.692 0 01-2.624-1.196c-4.612-2.446-7.624-7.13-7.856-7.462-.232-.332-1.894-2.536-1.894-4.836s1.198-3.432 1.624-3.902c.426-.47.928-.588 1.236-.588.308 0 .618.004.888.016.286.014.668-.108.1044.8.39.94 1.326 3.246 1.442 3.48.118.234.196.508.04.816-.158.308-.236.5-.468.772-.232.274-.49.612-.698.82-.232.232-.474.484-.204.95.27.466 1.2 1.98 2.574 3.21 1.766 1.58 3.254 2.07 3.718 2.304.466.234.736.196 1.006-.118.27-.314 1.158-1.352 1.466-1.818.308-.466.618-.39 1.044-.234.426.158 2.708 1.278 3.174 1.512.466.234.776.352.892.546.118.196.118 1.12-.272 2.198z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
