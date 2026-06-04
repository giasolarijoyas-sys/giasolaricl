export type Piedra = {
  slug: string;
  nombre: string;
  subtitulo: string;
  datos: { label: string; value: string }[];
  historia: string;
  frases: string[];
  propiedades: string[];
  paraQuienta: string;
  color: string; // accent for hero
};

export type Diseno = {
  slug: string;
  nombre: string;
  subtitulo: string;
  descripcion: string;
  frase: string;
  idealPara: string;
};

export const PIEDRAS: Piedra[] = [
  {
    slug: "diamante",
    nombre: "Diamante",
    subtitulo: "La Piedra de lo Indomable",
    color: "#E8E4DC",
    datos: [
      { label: "Etimología", value: 'Del griego "adamas" (invencible)' },
      { label: "Origen", value: "Carbono cristalizado a 3.000°C" },
      { label: "Dureza", value: "10 / 10" },
      { label: "Chakra", value: "Corona" },
      { label: "Simbolismo", value: "Pureza, eternidad, amor incondicional" },
    ],
    historia:
      "En la antigua India, los diamantes eran llamados Vajra (rayo). Los griegos lo llamaron adamas porque creían que era invencible. Los romanos lo usaban como amuleto de guerra. En 1477, el Archiduque Maximiliano de Austria regaló a María de Borgoña el primer anillo de compromiso con diamante de la historia. Desde entonces, se convirtió en el símbolo universal del amor eterno.",
    frases: [
      "Un diamante tardó 3.000 millones de años en formarse. Y ahora está aquí, esperando llevar tu promesa.",
      "Los antiguos lo llamaban adamas: lo invencible. Tú lo llamas: para siempre.",
    ],
    propiedades: [
      "Amplifica la energía positiva",
      "Aporta claridad mental",
      "Simboliza compromiso y lealtad",
      "Trae fuerza y valentía",
    ],
    paraQuienta:
      "Para las que creen en lo eterno. Para las clásicas, las que valoran lo atemporal.",
  },
  {
    slug: "zafiro",
    nombre: "Zafiro",
    subtitulo: "La Piedra de la Lealtad Eterna",
    color: "#1E3A6B",
    datos: [
      { label: "Etimología", value: 'Del griego "sappheiros" (azul cielo)' },
      { label: "Familia", value: "Corindón" },
      { label: "Dureza", value: "9 / 10" },
      { label: "Chakra", value: "Tercer Ojo" },
      { label: "Simbolismo", value: "Fidelidad, sabiduría, nobleza" },
    ],
    historia:
      "Los antiguos persas creían que la Tierra descansaba sobre un zafiro gigante y que el cielo era su reflejo. En la Edad Media, los reyes lo preferían sobre el diamante porque creían que revelaba la deslealtad: perdía su color si una persona infiel lo tocaba. El anillo de compromiso más famoso del mundo es un zafiro: el de Lady Di, que hoy lleva Kate Middleton. El príncipe William lo eligió diciendo 'quería que mamá estuviera con nosotros'.",
    frases: [
      "El zafiro fue la piedra de los reyes que querían probar la lealtad. Hoy es la piedra de las parejas que no necesitan pruebas, solo promesas.",
      "El azul del zafiro es el color del cielo y del océano. Un amor sin horizonte.",
    ],
    propiedades: [
      "Sabiduría para decidir con claridad",
      "Estabilidad emocional",
      "Protege contra energías negativas",
      "Fomenta la fidelidad",
    ],
    paraQuienta: "Para las leales, las profundas, las elegantes.",
  },
  {
    slug: "aguamarina",
    nombre: "Aguamarina",
    subtitulo: "La Piedra del Mar y los Amantes",
    color: "#7FB8C4",
    datos: [
      { label: "Etimología", value: 'Del latín "aqua marina" (agua del mar)' },
      { label: "Familia", value: "Berilo" },
      { label: "Dureza", value: "7.5 – 8 / 10" },
      { label: "Chakra", value: "Garganta" },
      { label: "Simbolismo", value: "Calma, amor perdurable, comunicación honesta" },
    ],
    historia:
      "Los marineros griegos y romanos la llamaban 'el tesoro de las sirenas'. Neptuno la encontró en la orilla después de que cayera del cofre de una sirena. Los soldados la llevaban a la guerra para volver a casa. En el Renacimiento, el novio regalaba aguamarina a la novia el día de la boda como símbolo de un amor sin límites, como el mar.",
    frases: [
      "La aguamarina lleva 2.000 años protegiendo a quienes se aman. Los marineros la llevaban para volver a casa.",
      "Se dice que la aguamarina calma hasta las tormentas más bravas.",
    ],
    propiedades: [
      "Calma emocional",
      "Potencia la comunicación auténtica",
      "Fortalece vínculos afectivos",
      "Protección en los viajes",
    ],
    paraQuienta:
      "Para las soñadoras conectadas al mar. Para regalos a guaguas (primer amuleto) y parejas que valoran la comunicación.",
  },
  {
    slug: "esmeralda",
    nombre: "Esmeralda",
    subtitulo: "La Piedra del Amor Verdadero",
    color: "#1F5B45",
    datos: [
      { label: "Etimología", value: 'Del griego "smaragdos" (piedra verde)' },
      { label: "Familia", value: "Berilo" },
      { label: "Dureza", value: "7.5 – 8 / 10" },
      { label: "Chakra", value: "Corazón" },
      { label: "Simbolismo", value: "Amor verdadero, fertilidad, renovación" },
    ],
    historia:
      "La esmeralda era la piedra favorita de Cleopatra, que tenía las minas más famosas del mundo antiguo y las hacía grabar con su nombre. Los incas la veneraban como sagrada. La esmeralda tarda millones de años más que el diamante en formarse. Cada esmeralda tiene inclusiones internas llamadas 'jardin', su huella única.",
    frases: [
      "La esmeralda tarda más en formarse que el diamante. Como el amor verdadero.",
      "Cada esmeralda tiene un jardín en su interior. Ninguna es igual a otra. Como tu relación.",
      "Era la piedra favorita de Cleopatra. Hoy puede ser la tuya.",
    ],
    propiedades: [
      "Abre el corazón al amor incondicional",
      "Símbolo de fertilidad y renovación",
      "Atrae prosperidad",
      "Calma emocional",
    ],
    paraQuienta:
      "Para las románticas, las que valoran lo único antes que lo perfecto. Aniversarios largos.",
  },
  {
    slug: "rubi",
    nombre: "Rubí",
    subtitulo: "La Piedra de la Pasión Eterna",
    color: "#7A1F2B",
    datos: [
      { label: "Etimología", value: 'Del latín "ruber" (rojo). En sánscrito "ratnaraj" (rey de las piedras)' },
      { label: "Familia", value: "Corindón" },
      { label: "Dureza", value: "9 / 10" },
      { label: "Simbolismo", value: "Pasión, amor ardiente, coraje" },
    ],
    historia:
      "En la antigua India, el rubí era el 'rey de las piedras'. En Birmania, los guerreros se incrustaban rubíes bajo la piel antes de la batalla para ser invencibles. En la Edad Media se creía que cambiaba de color cuando había peligro y se oscurecía si el portador era infiel a su amor.",
    frases: [
      "El rubí es el rey de las piedras. Los hindúes lo regalaban a quien querían bendecir.",
      "Los guerreros lo llevaban para ser invencibles. Tú lo llevas para amar sin miedo.",
    ],
    propiedades: [
      "Pasión y amor ardiente",
      "Coraje y autoconfianza",
      "Energía vital",
      "Protección contra envidias",
    ],
    paraQuienta: "Para las apasionadas, las intensas, las que aman fuerte.",
  },
];

export const DISENOS: Diseno[] = [
  {
    slug: "el-eterno",
    nombre: "El Eterno",
    subtitulo: "Una piedra, una promesa",
    descripcion:
      "Una sola piedra central. Sin distracciones. Sin adornos. Solo la promesa. El solitario es el anillo más honesto del mundo: no necesita más que una piedra para decir todo. Su simbolismo es la claridad total del amor.",
    frase: "Una piedra. Una persona. Una promesa. Sin nada más que eso.",
    idealPara:
      "Parejas que creen en lo esencial. Que no necesitan adornos: se eligen a sí mismos.",
  },
  {
    slug: "el-tricillo",
    nombre: "El Tricillo",
    subtitulo: "Pasado, presente, futuro",
    descripcion:
      "Tres piedras en fila. La central más grande, las laterales la escoltan y la enmarcan. Tres piedras, tres promesas: quién eras, quién eres y quién serás, y yo elijo las tres. También representa los tres pilares del amor: respeto, confianza y pasión.",
    frase: "Tres piedras. Tres promesas. Un solo anillo para toda la historia.",
    idealPara:
      "Parejas con historia. Que llevan tiempo juntos y quieren celebrar lo que construyeron.",
  },
  {
    slug: "el-alado",
    nombre: "El Alado",
    subtitulo: "La que ilumina",
    descripcion:
      "Una piedra central rodeada de un halo de diamantes pequeños que la iluminan. El halo no es decoración: es la luz que ella genera en todo lo que toca. Inspirado en el diseño icónico de Lady Di.",
    frase: "El halo no es decoración. Es la luz que ella genera en todo lo que toca.",
    idealPara: "La persona que llena de luz la vida de quien la elige. La más romántica.",
  },
  {
    slug: "el-real",
    nombre: "El Real",
    subtitulo: "El anillo de Lady Di",
    descripcion:
      "Un zafiro azul central rodeado de diamantes. El diseño más icónico de la historia. El anillo original de Lady Diana Spencer, regalado en 1981. Hoy lo lleva Kate Middleton, quien lo recibió de William con las palabras: 'quería que mamá estuviera con nosotros'.",
    frase: "El anillo más famoso del amor real. Ahora, el tuyo.",
    idealPara: "La mujer que lleva la elegancia con naturalidad. La que merece lo más icónico.",
  },
  {
    slug: "el-tiempo",
    nombre: "El Tiempo",
    subtitulo: "Sin ángulos, solo fluidez",
    descripcion:
      "Piedra central en corte ovalado. Sin ángulos, sin quiebres, como un amor que fluye. También evoca una gota de agua: pureza, vida, renovación. El ovalado es la tendencia más fuerte del momento.",
    frase: "Sin ángulos. Sin quiebres. Como un amor que solo sabe fluir.",
    idealPara: "Las modernas que quieren algo diferente pero atemporal.",
  },
  {
    slug: "los-cuatro-pilares",
    nombre: "Los Cuatro Pilares",
    subtitulo: "La base sólida",
    descripcion:
      "Cuatro piedras en línea. Equilibrio perfecto, simetría absoluta. Los cuatro pilares de una relación: respeto, amor, confianza y comunicación. También las cuatro estaciones: la promesa de estar en primavera, verano, otoño e invierno.",
    frase: "Cuatro piedras. Cuatro promesas. Para todas las estaciones de la vida.",
    idealPara: "La persona equilibrada. La que construye desde la base.",
  },
  {
    slug: "la-constelacion",
    nombre: "La Constelación",
    subtitulo: "El universo de ustedes",
    descripcion:
      "Tres piedras principales, la central con halo. El diseño más completo y luminoso. Una historia de amor tan grande que ilumina como una constelación.",
    frase: "Cada estrella en una constelación es necesaria. Como cada momento en tu historia.",
    idealPara: "Las más románticas. Parejas con historia y ambición de futuro.",
  },
];

export const PHONE = "56984049502";

export function waPiedra(nombre: string) {
  const msg = `Hola Maca ✦ Vi ${nombre} en tu web y me encantaría conocer opciones de anillos con esta piedra.`;
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}

export function waDiseno(nombre: string) {
  const msg = `Hola Maca ✦ Vi ${nombre} en tu web y me gustaría cotizarlo.`;
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}

export const WA_GENERAL = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hola Maca ✦ Me gustaría agendar una conversación para diseñar mi anillo."
)}`;
