export type TestimonioClienta = {
  nombre: string;
  texto: string;
  pieza?: string;
  imagen?: string;
};

// Testimonios reales de clientas. DEJAR VACÍO hasta contar con reseñas reales.
// Cuando el array esté vacío, la sección se auto-oculta en el home.
export const testimoniosClientas: TestimonioClienta[] = [];

// Ejemplo (descomenta y edita cuando tengas testimonios reales):
// export const testimoniosClientas: TestimonioClienta[] = [
//   {
//     nombre: "Nombre Apellido",
//     texto: "Lo que dijo la clienta sobre su experiencia con Gia Solari...",
//     pieza: "Anillo de compromiso, oro 18k",
//     imagen: "/ruta/opcional-a-foto.jpg",
//   },
// ];
