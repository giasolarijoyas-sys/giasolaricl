export type Testimonio = {
  id: string;
  cita: string;
  autor: string;
  pieza: string;
  destacado: boolean;
};

// Agrega aquí testimonios reales de clientas. Mientras el array esté vacío,
// las secciones de testimonios NO se renderizan en el sitio.
export const testimonios: Testimonio[] = [];

// Ejemplo de estructura (descomenta y edita cuando tengas testimonios reales):
// export const testimonios: Testimonio[] = [
//   {
//     id: "ejemplo",
//     cita: "Texto del testimonio real...",
//     autor: "Nombre de la clienta",
//     pieza: "Pieza asociada",
//     destacado: true,
//   },
// ];
