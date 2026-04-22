export type Testimonio = {
  id: string;
  cita: string;
  autor: string;
  pieza: string;
  destacado: boolean;
};

export const testimonios: Testimonio[] = [
  {
    id: "fran-compromiso",
    cita: "Maca entendió a la primera lo que buscaba. El anillo quedó incluso mejor de lo que me había imaginado. Mi polola lloró cuando lo vio.",
    autor: "Fran",
    pieza: "Anillo de compromiso · diamante natural · platino",
    destacado: true,
  },
  {
    id: "regiones-zoom",
    cita: "Soy de regiones y todo el proceso fue por WhatsApp y Zoom. Me sentí súper acompañada en cada paso, y el envío llegó perfecto.",
    autor: "Cliente de regiones",
    pieza: "Anillo de compromiso · diamante de laboratorio · oro 18k",
    destacado: true,
  },
  {
    id: "lab-diamond",
    cita: "Me explicaron la diferencia entre el natural y el de laboratorio sin presionarme. Elegí el de laboratorio y quedó hermoso, brilla igual y pude hacer una piedra más grande.",
    autor: "Javiera",
    pieza: "Anillo solitario · diamante de laboratorio 1ct · oro 18k",
    destacado: true,
  },
  {
    id: "esmeralda",
    cita: "Quería algo distinto, con color. Me ayudaron a elegir una esmeralda preciosa y diseñaron un anillo único. Es exactamente lo que soñaba.",
    autor: "Camila",
    pieza: "Anillo de compromiso · esmeralda · oro 18k",
    destacado: true,
  },
  {
    id: "diez-anos",
    cita: "Llevamos 10 años casados y le mandé a hacer un anillo de regalo. Maca cuidó cada detalle como si fuera el suyo.",
    autor: "Sebastián",
    pieza: "Anillo conmemorativo · diamantes · oro 18k",
    destacado: false,
  },
  {
    id: "refundicion",
    cita: "Tenía cadenas de mi abuela que nunca usaba. Maca las refundió y diseñamos un anillo nuevo con esa historia adentro. Vale más que cualquier joya.",
    autor: "Andrea",
    pieza: "Anillo en oro refundido de herencia",
    destacado: true,
  },
  {
    id: "tecnico",
    cita: "Soy súper técnico y le hice mil preguntas. Me respondió todo con paciencia, mostró certificados, comparativas, presupuestos detallados. Cero misterio.",
    autor: "Matías",
    pieza: "Anillo de compromiso · diamante natural certificado GIA · platino",
    destacado: false,
  },
  {
    id: "argollas-platino",
    cita: "Hicimos las argollas en platino con un grabado adentro. Maca nos guio en todo y el resultado es exactamente lo que queríamos para toda la vida.",
    autor: "Pía y Tomás",
    pieza: "Argollas de matrimonio · platino · grabado interno",
    destacado: true,
  },
];
