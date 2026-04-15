export interface BlogPost {
  slug: string;
  title: string;
  category: "Guías" | "Tendencias" | "Historias de clientes" | "Cuidado";
  date: string;
  author: string;
  excerpt: string;
  content: string;
  image?: string;
  relatedSlugs?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "oro-18k-vs-platino",
    title: "Oro 18k vs Platino: ¿cuál elegir para tu argolla?",
    category: "Guías",
    date: "2026-03-15",
    author: "Maca",
    excerpt: "Ambos metales son hermosos y duraderos, pero tienen diferencias clave que debes conocer antes de elegir.",
    content: `## ¿Oro 18k o Platino?

Es una de las preguntas más frecuentes que recibo. Y la respuesta honesta es: depende de tu estilo de vida, tu presupuesto y tus preferencias estéticas.

### Oro 18k

El oro 18k es una aleación que contiene un 75% de oro puro mezclado con otros metales que le dan resistencia y color. Viene en tres tonos: **amarillo**, **blanco** y **rosé**.

- **Durabilidad**: Excelente para uso diario
- **Precio**: Más accesible que el platino
- **Mantenimiento**: El oro blanco necesita baño de rodio cada 1-2 años
- **Peso**: Más liviano que el platino

### Platino

El platino es un metal naturalmente blanco y más denso. Es hipoalergénico y extremadamente duradero.

- **Durabilidad**: Superior al oro, no se desgasta sino que se desplaza
- **Precio**: Aproximadamente 30-40% más caro que el oro blanco
- **Mantenimiento**: No necesita baño de rodio
- **Peso**: Se siente más sustancial en el dedo

### Mi recomendación

Si buscas algo clásico y cálido, ve por **oro amarillo 18k**. Si prefieres un metal blanco que no requiera mantenimiento, el **platino** es tu mejor opción. Y si tu presupuesto es un factor importante, el **oro blanco 18k** te da un look similar al platino a menor precio.`,
    relatedSlugs: ["las-4c-del-diamante", "diamante-natural-o-laboratorio"],
  },
  {
    slug: "las-4c-del-diamante",
    title: "Las 4C del diamante explicadas fácil",
    category: "Guías",
    date: "2026-02-20",
    author: "Maca",
    excerpt: "Corte, Color, Claridad y Quilates — todo lo que necesitas saber para elegir el diamante perfecto.",
    content: `## Las 4C del Diamante

Cuando hablamos de diamantes, las 4C son el estándar universal para evaluar su calidad. Te las explico de forma simple.

### 1. Corte (Cut)

Es el factor más importante para el brillo. Un buen corte hace que la luz entre y salga creando ese destello característico. Los grados van de **Excelente** a **Pobre**.

**Mi consejo**: Nunca bajes de "Very Good" en corte. Es lo que hace brillar a un diamante.

### 2. Color

Se mide de D (incoloro) a Z (amarillento). Los grados D-F son prácticamente incoloros y los más valorados.

**Mi consejo**: Un diamante G o H se ve blanco a simple vista y es significativamente más accesible.

### 3. Claridad (Clarity)

Mide las inclusiones internas del diamante. Va de FL (sin inclusiones) a I3 (inclusiones visibles).

**Mi consejo**: Un VS2 o SI1 tiene inclusiones invisibles a simple vista. Ahí está la mejor relación calidad-precio.

### 4. Quilates (Carat)

Es simplemente el peso del diamante. 1 quilate = 0.2 gramos. A más quilates, más grande y más caro.

**Mi consejo**: Un 0.90ct se ve casi igual que un 1.00ct pero cuesta significativamente menos.

### La clave

No busques un diamante perfecto en las 4C — busca el equilibrio perfecto para **tu** presupuesto. En eso te puedo ayudar.`,
    relatedSlugs: ["oro-18k-vs-platino", "diamante-natural-o-laboratorio"],
  },
  {
    slug: "diamante-natural-o-laboratorio",
    title: "Diamante natural o de laboratorio: la guía honesta",
    category: "Guías",
    date: "2026-01-10",
    author: "Maca",
    excerpt: "Ambos son diamantes reales. Te explico las diferencias con total transparencia para que elijas bien.",
    content: `## Diamante Natural vs Laboratorio

Esta es una de las conversaciones más importantes que tengo con mis clientes. Y siempre la abordo con total honestidad.

### ¿Son reales los diamantes de laboratorio?

**Sí, son diamantes reales.** Tienen exactamente las mismas propiedades físicas, químicas y ópticas que un diamante natural. La única diferencia es su origen.

### Diamante Natural

- Formado durante millones de años bajo la tierra
- Cada uno es único e irrepetible
- Mayor valor de reventa
- Certificados por GIA o IGI
- Precio más alto

### Diamante de Laboratorio

- Creado en semanas en condiciones controladas
- Misma composición y brillo que el natural
- Hasta un 40-60% más accesible
- También certificados por IGI
- Menor valor de reventa

### ¿Cuál te conviene?

Si el **simbolismo y la tradición** son importantes para ti, el diamante natural es la elección. Si prefieres **maximizar el tamaño y brillo** dentro de tu presupuesto, el de laboratorio es una excelente opción.

### Mi posición

No tengo preferencia por uno u otro — lo que me importa es que entiendas exactamente qué estás comprando. Te muestro ambas opciones con sus certificados y tú decides.

**Ambos brillan igual. La decisión es tuya.**`,
    relatedSlugs: ["las-4c-del-diamante", "oro-18k-vs-platino"],
  },
];
