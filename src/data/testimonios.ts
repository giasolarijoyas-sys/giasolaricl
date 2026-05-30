export type Testimonio = {
  id: string;
  cita: string;
  autor: string;
  pieza: string;
  destacado: boolean;
};

export const testimonios: Testimonio[] = [
  {
    id: "fran",
    cita: "Maca entendió a la primera lo que buscaba. Quedó incluso mejor de lo que me imaginaba. Mi polola lloró cuando lo vio.",
    autor: "Fran",
    pieza: "Anillo de compromiso · diamante · platino",
    destacado: true,
  },
  {
    id: "matias",
    cita: "Llegué sin saber nada de diamantes y me explicaron todo sin apuro. Pude hacer la piedra más grande de lo que pensaba y quedó increíble.",
    autor: "Matías",
    pieza: "Anillo solitario · diamante 1ct · platino",
    destacado: true,
  },
  {
    id: "cristobal",
    cita: "Soy de regiones e hicimos todo por WhatsApp y videollamada. Me mantuvieron al tanto en cada paso y el envío llegó impecable.",
    autor: "Cristóbal",
    pieza: "Anillo de compromiso · diamante · platino",
    destacado: true,
  },
  {
    id: "antonia",
    cita: "Le pedí matrimonio a mi novia con un anillo diseñado por Maca. Entendió justo cómo es ella sin siquiera conocerla. Lloramos las dos.",
    autor: "Antonia",
    pieza: "Anillo de compromiso · diamante · oro 18k",
    destacado: true,
  },
  {
    id: "rodrigo",
    cita: "Tenía una idea medio vaga y Maca la transformó en algo mejor de lo que podía explicar. El grabado por dentro fue el detalle que la remató.",
    autor: "Rodrigo",
    pieza: "Anillo de compromiso · diamante · platino",
    destacado: true,
  },
];
