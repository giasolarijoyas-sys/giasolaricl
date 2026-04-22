import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Gem, Ruler, Palette, Scissors, ShieldCheck, Star, HelpCircle } from "lucide-react";

// Photos for visual breaks
import bannerDetail from "@/assets/banner-detail.jpg";
import bannerHands from "@/assets/banner-hands.jpg";
import galSesion5690 from "@/assets/gal-sesion-dsc_5690.jpg";
import galSesion5770 from "@/assets/gal-sesion-dsc_5770.jpg";
import galSesion5881 from "@/assets/gal-sesion-dsc_5881.jpg";
import galSesion5835 from "@/assets/gal-sesion-dsc_5835.jpg";
import galProd2096 from "@/assets/gal-prod-img_2096.jpg";
import galProd2117 from "@/assets/gal-prod-img_2117.jpg";
import galProd2172 from "@/assets/gal-prod-img_2172.jpg";
import galProd2159 from "@/assets/gal-prod-img_2159.jpg";
import galProd2109 from "@/assets/gal-prod-img_2109.jpg";
import galProd2143 from "@/assets/gal-prod-img_2143.jpg";
import heroDsc5775 from "@/assets/hero-dsc-5775.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Section = ({ id, icon: Icon, title, children }: { id: string; icon: React.ElementType; title: string; children: React.ReactNode }) => (
  <motion.section id={id} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="scroll-mt-24">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h2 className="font-display text-2xl md:text-3xl text-foreground">{title}</h2>
    </div>
    <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground space-y-4">
      {children}
    </div>
  </motion.section>
);

const PhotoBanner = ({ image, alt, text, subtext }: { image: string; alt: string; text?: string; subtext?: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative h-[35vh] md:h-[45vh] w-screen left-1/2 -translate-x-1/2 overflow-hidden my-16 md:my-24"
  >
    <div
      className="absolute inset-0 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${image})` }}
      role="img"
      aria-label={alt}
    />
    <div className="absolute inset-0 bg-charcoal/50" />
    {(text || subtext) && (
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {text && (
          <h3 className="font-display text-2xl md:text-4xl lg:text-5xl text-cream tracking-wide">
            {text}
          </h3>
        )}
        {subtext && (
          <p className="mt-3 text-cream/80 text-sm md:text-base tracking-widest uppercase max-w-lg">
            {subtext}
          </p>
        )}
      </div>
    )}
  </motion.div>
);

const PhotoPair = ({ images }: { images: { src: string; alt: string }[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="grid grid-cols-2 gap-3 my-8"
  >
    {images.map((img, i) => (
      <div key={i} className="aspect-[4/3] overflow-hidden rounded-lg">
        <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
      </div>
    ))}
  </motion.div>
);

const PhotoSide = ({ image, alt, children, reverse = false }: { image: string; alt: string; children: React.ReactNode; reverse?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`grid md:grid-cols-2 gap-8 items-center my-8 ${reverse ? "direction-rtl" : ""}`}
  >
    <div className={`${reverse ? "md:order-2" : ""}`}>
      <div className="aspect-[4/3] overflow-hidden rounded-lg">
        <img src={image} alt={alt} loading="lazy" className="w-full h-full object-cover" />
      </div>
    </div>
    <div className={`${reverse ? "md:order-1" : ""} space-y-4`}>
      {children}
    </div>
  </motion.div>
);

const StoneCard = ({ name, hardness, desc }: { name: string; hardness: string; desc: string }) => (
  <div className="p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors">
    <h4 className="font-display text-lg text-foreground">{name}</h4>
    <p className="text-xs text-primary/70 mb-1">Dureza: {hardness}</p>
    <p className="text-sm text-muted-foreground">{desc}</p>
  </div>
);

const CutCard = ({ name, desc }: { name: string; desc: string }) => (
  <div className="p-3 rounded-lg border border-border bg-card text-center hover:border-primary/30 transition-colors">
    <h4 className="font-medium text-sm text-foreground">{name}</h4>
    <p className="text-xs text-muted-foreground mt-1">{desc}</p>
  </div>
);

const Guia = () => {
  return (
    <>
      <Helmet>
        <title>Guía de Joyas | Gia Solari — Todo sobre Anillos, Metales y Piedras</title>
        <meta name="description" content="Guía completa de joyería: tipos de metales, piedras preciosas, estilos de anillos de compromiso, argollas y más. Aprende a elegir tu joya perfecta con Gia Solari." />
        <link rel="canonical" href="https://www.giasolari.cl/guia" />
        <meta property="og:title" content="Guía de Joyas | Gia Solari" />
        <meta property="og:description" content="Guía completa de joyería: metales, piedras, estilos y preguntas frecuentes para elegir tu joya perfecta." />
        <meta property="og:url" content="https://www.giasolari.cl/guia" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* ── Hero Banner ── */}
        <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroDsc5775})` }}
            role="img"
            aria-label="Anillo tricillo — Gia Solari"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent" />
          <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 pb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gold-light tracking-[0.3em] uppercase text-xs mb-4"
            >
              Educación
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-4"
            >
              Guía de Joyas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-cream/70 max-w-xl text-sm md:text-base"
            >
              Todo lo que necesitas saber para elegir la joya perfecta.
            </motion.p>
          </div>
        </div>

        {/* ── Quick nav ── */}
        <div className="bg-background border-b border-border sticky top-16 z-20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { label: "Tallas", href: "#tallas" },
                { label: "Piedras", href: "#piedras" },
                { label: "Metales", href: "#metales" },
                { label: "Cortes", href: "#cortes" },
                { label: "Las 4C", href: "#4c" },
                { label: "Argollas", href: "#argollas" },
                { label: "Garantía", href: "#garantia" },
                { label: "FAQ", href: "#faq" },
              ].map((l) => (
                <a key={l.href} href={l.href} className="px-4 py-2 text-xs tracking-widest uppercase border border-border rounded-full hover:border-primary hover:text-primary transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-4xl pt-16 pb-16">
          <div className="space-y-8">
            {/* ═══ TALLAS ═══ */}
            <Section id="tallas" icon={Ruler} title="¿Cómo saber tu talla de anillo?">
              <p>Existen varios métodos para conocer tu talla. Aquí te dejamos los más confiables:</p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-border bg-card">
                  <h4 className="font-display text-foreground mb-2">Método del hilo o papel</h4>
                  <ol className="text-sm space-y-1 list-decimal list-inside">
                    <li>Corta una tira de papel o hilo fino</li>
                    <li>Enróllalo alrededor del dedo donde usarás el anillo</li>
                    <li>Marca donde se cruza</li>
                    <li>Mide la longitud en milímetros</li>
                    <li>Divide por 3.14 para obtener el diámetro</li>
                  </ol>
                </div>
                <div className="p-4 rounded-lg border border-border bg-card">
                  <h4 className="font-display text-foreground mb-2">Método del anillo existente</h4>
                  <ol className="text-sm space-y-1 list-decimal list-inside">
                    <li>Toma un anillo que le quede bien</li>
                    <li>Ponlo sobre una regla</li>
                    <li>Mide el diámetro interior en milímetros</li>
                    <li>Compara con la tabla de tallas</li>
                  </ol>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                  <thead className="bg-primary/5">
                    <tr>
                      <th className="px-4 py-2 text-left font-medium text-foreground">Talla Chile</th>
                      <th className="px-4 py-2 text-left font-medium text-foreground">Diámetro (mm)</th>
                      <th className="px-4 py-2 text-left font-medium text-foreground">Circunferencia (mm)</th>
                      <th className="px-4 py-2 text-left font-medium text-foreground">Talla US</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["6", "14.9", "46.8", "4"],
                      ["8", "15.3", "48.0", "4.5"],
                      ["9", "15.7", "49.3", "5"],
                      ["10", "16.1", "50.6", "5.5"],
                      ["11", "16.5", "51.8", "6"],
                      ["12", "16.9", "53.1", "6.5"],
                      ["13", "17.3", "54.4", "7"],
                      ["14", "17.7", "55.6", "7.5"],
                      ["16", "18.5", "58.1", "8.5"],
                      ["18", "19.4", "60.9", "9.5"],
                    ].map(([cl, d, c, us]) => (
                      <tr key={cl} className="border-t border-border">
                        <td className="px-4 py-2 text-foreground font-medium">{cl}</td>
                        <td className="px-4 py-2">{d}</td>
                        <td className="px-4 py-2">{c}</td>
                        <td className="px-4 py-2">{us}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm text-foreground">
                  <strong>Tip de la Maca:</strong> Mide siempre al final del día cuando los dedos están un poco más hinchados. Evita medir después de ejercicio o cuando tengas frío. Si tienes dudas, escríbenos y te ayudamos.
                </p>
              </div>
            </Section>

            {/* ── Photo break: ring in box ── */}
            <PhotoBanner
              image={galSesion5690}
              alt="Solitario en caja Gia Solari"
              text="Cada piedra tiene su historia"
              subtext="Aprende a elegir la tuya"
            />

            {/* ═══ PIEDRAS ═══ */}
            <Section id="piedras" icon={Gem} title="Tipos de piedras preciosas">
              <p>Cada piedra tiene su carácter, dureza y brillo. Aquí te explicamos las que trabajamos:</p>
            </Section>

            <PhotoSide image={galProd2117} alt="Anillo zafiro oval halo">
              <StoneCard
                name="Diamante Natural"
                hardness="10/10 (el más duro)"
                desc="La piedra eterna por excelencia. Certificación GIA. Máximo brillo y fuego. Es la opción más tradicional y con mayor valor de reventa."
              />
              <StoneCard
                name="Diamante de Laboratorio"
                hardness="10/10"
                desc="Exactamente el mismo diamante a nivel físico, químico y óptico. Creado en laboratorio, es un 30-40% más accesible. Certificación IGI. Opción ética y sustentable."
              />
            </PhotoSide>

            <PhotoSide image={galProd2096} alt="Anillo halo aguamarina en cofre" reverse>
              <StoneCard
                name="Zafiro"
                hardness="9/10"
                desc="Piedra de la realeza. Disponible en azul, rosa, amarillo y blanco. Extremadamente durable para uso diario. El zafiro azul de Ceilán es el más cotizado."
              />
              <StoneCard
                name="Esmeralda"
                hardness="7.5-8/10"
                desc="Verde profundo e hipnótico. Cada esmeralda es única por sus inclusiones naturales llamadas 'jardín'. Las colombianas son las más valoradas."
              />
            </PhotoSide>

            <PhotoPair images={[
              { src: galSesion5881, alt: "Anillo zafiro Diana sobre bandeja" },
              { src: galProd2143, alt: "Anillo Art Déco con esmeraldas" },
            ]} />

            <div className="grid md:grid-cols-2 gap-4">
              <StoneCard
                name="Rubí"
                hardness="9/10"
                desc="Piedra de la pasión. Su rojo intenso la hace una de las gemas más valiosas del mundo. El rubí 'sangre de paloma' de Birmania es el más cotizado."
              />
              <StoneCard
                name="Aguamarina"
                hardness="7.5-8/10"
                desc="De la familia del berilo. Su azul celeste evoca el mar. Es durable, luminosa y perfecta para diseños delicados y románticos. Excelente relación calidad-precio."
              />
            </div>

            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-sm text-foreground">
                <strong>¿Sabías que?</strong> La dureza se mide en la escala de Mohs del 1 al 10. Para uso diario en un anillo de compromiso, recomendamos piedras con dureza 7.5 o superior.
              </p>
            </div>

            {/* ── Photo break: metales ── */}
            <PhotoBanner
              image={bannerHands}
              alt="Manos con joyas Gia Solari"
              text="El metal perfecto existe"
              subtext="Platino · Oro Amarillo · Oro Blanco"
            />

            {/* ═══ METALES ═══ */}
            <Section id="metales" icon={Palette} title="Diferencias entre metales">
              <p>El metal del anillo influye en su durabilidad, color y mantenimiento. Estos son los que trabajamos:</p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-5 rounded-lg border border-border bg-card">
                  <h4 className="font-display text-foreground text-lg mb-2">Platino</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• El más noble y resistente</li>
                    <li>• Hipoalergénico al 100%</li>
                    <li>• No pierde color, jamás</li>
                    <li>• Más pesado que el oro</li>
                    <li>• Ideal para diamantes y piedras claras</li>
                    <li>• No requiere mantenimiento de color</li>
                  </ul>
                  <p className="text-xs text-primary mt-3">El favorito de Gia Solari</p>
                </div>
                <div className="p-5 rounded-lg border border-border bg-card">
                  <h4 className="font-display text-foreground text-lg mb-2">Oro 18k Amarillo</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Clásico atemporal</li>
                    <li>• Tono cálido y luminoso</li>
                    <li>• 75% oro puro + aleación</li>
                    <li>• No requiere mantenimiento de color</li>
                    <li>• Perfecto para esmeraldas y rubíes</li>
                    <li>• Ideal para pieles cálidas</li>
                  </ul>
                </div>
                <div className="p-5 rounded-lg border border-border bg-card">
                  <h4 className="font-display text-foreground text-lg mb-2">Oro 18k Blanco</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Elegancia plateada</li>
                    <li>• Más accesible que el platino</li>
                    <li>• Requiere baño de rodio cada 1-2 años</li>
                    <li>• Excelente con diamantes y zafiros</li>
                    <li>• Look moderno y sofisticado</li>
                    <li>• 75% oro puro + paladio/plata</li>
                  </ul>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                  <thead className="bg-primary/5">
                    <tr>
                      <th className="px-4 py-2 text-left font-medium text-foreground">Característica</th>
                      <th className="px-4 py-2 text-left font-medium text-foreground">Platino</th>
                      <th className="px-4 py-2 text-left font-medium text-foreground">Oro Amarillo</th>
                      <th className="px-4 py-2 text-left font-medium text-foreground">Oro Blanco</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Pureza", "95%", "75%", "75%"],
                      ["Durabilidad", "Excelente", "Muy buena", "Muy buena"],
                      ["Hipoalergénico", "Sí", "Depende", "Depende"],
                      ["Mantenimiento de color", "Ninguno", "Ninguno", "Baño de rodio"],
                      ["Peso", "Más pesado", "Medio", "Medio"],
                      ["Precio", "$$$", "$$", "$$"],
                    ].map(([feat, pt, ay, ab]) => (
                      <tr key={feat} className="border-t border-border">
                        <td className="px-4 py-2 text-foreground font-medium">{feat}</td>
                        <td className="px-4 py-2">{pt}</td>
                        <td className="px-4 py-2">{ay}</td>
                        <td className="px-4 py-2">{ab}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            {/* ── Photo pair break ── */}
            <PhotoPair images={[
              { src: galSesion5770, alt: "Tricillo esmeralda en marco dorado" },
              { src: galSesion5835, alt: "Solitario pavé en caja menta" },
            ]} />

            {/* ═══ CORTES ═══ */}
            <Section id="cortes" icon={Scissors} title="Formas y cortes de piedra">
              <p>Las formas más populares para anillos de compromiso:</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <CutCard name="Redonda" desc="La más brillante y clásica. 57 facetas que maximizan la luz." />
                <CutCard name="Oval" desc="Alarga el dedo. Muy elegante y moderna." />
                <CutCard name="Cushion" desc="Cuadrado con bordes suaves. Aire romántico y vintage." />
                <CutCard name="Esmeralda" desc="Rectángulo sofisticado. Efecto hall of mirrors." />
              </div>

              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm text-foreground">
                  <strong>Dato:</strong> El corte redondo brillante es el que más refleja la luz, pero el oval y el cushion hacen que la piedra se vea más grande de lo que es. ¡A veces el corte importa más que los quilates!
                </p>
              </div>
            </Section>

            {/* ── Photo banner: 4C ── */}
            <PhotoBanner
              image={galProd2109}
              alt="Anillo halo esmeralda sobre mármol"
              text="Entiende las 4C"
              subtext="Corte · Color · Claridad · Quilates"
            />

            {/* ═══ 4C ═══ */}
            <Section id="4c" icon={Star} title="Las 4C de los diamantes">
              <p>El sistema universal para evaluar un diamante. Entenderlo te ayuda a tomar la mejor decisión según tu presupuesto:</p>

              <div className="space-y-6">
                <div className="p-5 rounded-lg border border-border bg-card">
                  <h4 className="font-display text-xl text-foreground mb-2">1. Cut (Corte)</h4>
                  <p className="text-sm mb-3">
                    <strong>El factor más importante.</strong> No se refiere a la forma (redonda, oval, etc.), sino a qué tan bien se tallaron las facetas. Un buen corte hace que la luz entre, rebote internamente y salga como brillo y fuego.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Ideal / Excellent", "Very Good", "Good", "Fair", "Poor"].map((g, i) => (
                      <span key={g} className={`text-xs px-3 py-1 rounded-full border ${i === 0 ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground'}`}>
                        {g}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    En Gia Solari trabajamos solo con cortes Excellent y Very Good.
                  </p>
                </div>

                <div className="p-5 rounded-lg border border-border bg-card">
                  <h4 className="font-display text-xl text-foreground mb-2">2. Color</h4>
                  <p className="text-sm mb-3">
                    En diamantes blancos, se evalúa la <em>ausencia</em> de color. La escala va de D (totalmente incoloro) a Z (amarillento visible).
                  </p>
                  <div className="flex gap-1 flex-wrap">
                    {["D", "E", "F", "G", "H", "I", "J", "K"].map((l, i) => (
                      <span key={l} className={`w-8 h-8 flex items-center justify-center rounded text-xs font-medium border ${i < 3 ? 'border-primary bg-primary/10 text-primary' : i < 5 ? 'border-border bg-card text-foreground' : 'border-border text-muted-foreground'}`}>
                        {l}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    D-F: Incoloro (premium) · G-H: Casi incoloro (excelente relación calidad/precio) · I-J: Ligero tono, invisible en montaje.
                  </p>
                </div>

                <div className="p-5 rounded-lg border border-border bg-card">
                  <h4 className="font-display text-xl text-foreground mb-2">3. Clarity (Claridad)</h4>
                  <p className="text-sm mb-3">
                    Mide las inclusiones internas (marcas de nacimiento naturales). La mayoría son invisibles a simple vista.
                  </p>
                  <div className="flex gap-1 flex-wrap">
                    {["FL", "IF", "VVS1", "VVS2", "VS1", "VS2", "SI1", "SI2"].map((l, i) => (
                      <span key={l} className={`px-2 h-7 flex items-center justify-center rounded text-xs font-medium border ${i < 2 ? 'border-primary bg-primary/10 text-primary' : i < 6 ? 'border-border bg-card text-foreground' : 'border-border text-muted-foreground'}`}>
                        {l}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    FL-IF: Perfecto · VVS: Inclusiones mínimas · VS: Inclusiones menores (el sweet spot) · SI: Inclusiones visibles con lupa 10x.
                  </p>
                </div>

                <div className="p-5 rounded-lg border border-border bg-card">
                  <h4 className="font-display text-xl text-foreground mb-2">4. Carat (Quilates)</h4>
                  <p className="text-sm mb-3">
                    El peso del diamante. 1 quilate = 0.2 gramos. Pero ojo: un quilate no siempre se ve igual de grande — depende del corte y la forma.
                  </p>
                  <div className="flex gap-3 items-end flex-wrap">
                    {[
                      { ct: "0.5 ct", size: "w-6 h-6" },
                      { ct: "0.75 ct", size: "w-7 h-7" },
                      { ct: "1.0 ct", size: "w-8 h-8" },
                      { ct: "1.5 ct", size: "w-10 h-10" },
                      { ct: "2.0 ct", size: "w-12 h-12" },
                    ].map(({ ct, size }) => (
                      <div key={ct} className="flex flex-col items-center gap-1">
                        <div className={`${size} rounded-full border-2 border-primary/30 bg-primary/5`} />
                        <span className="text-xs text-muted-foreground">{ct}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Un diamante de 0.9 ct puede verse igual de grande que uno de 1.0 ct, pero costar significativamente menos. ¡Pregúntanos por las "magic sizes"!
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm text-foreground">
                  <strong>¿Cuál priorizar?</strong> Si tu presupuesto es limitado, prioriza el <strong>Corte</strong> (es lo que más afecta el brillo), luego el <strong>Color</strong>, después la <strong>Claridad</strong>, y finalmente los <strong>Quilates</strong>. Un diamante más chico pero con excelente corte siempre se verá más lindo.
                </p>
              </div>
            </Section>

            {/* ── Photo break: garantía ── */}
            <PhotoBanner
              image={bannerDetail}
              alt="Solitario en caja Gia Solari"
              text="Si no te encanta, la rehacemos"
              subtext="Garantía por Gusto — Solo en Gia Solari"
            />

            {/* ═══ GARANTÍA ═══ */}
            <Section id="garantia" icon={ShieldCheck} title="Garantía por Gusto">
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                <h3 className="font-display text-xl text-foreground mb-4">Si no te encanta, la rehacemos.</h3>
                <p className="text-sm mb-4">
                  En Gia Solari creemos que una joya personalizada debe ser exactamente lo que soñaste. Por eso, nuestra <strong>Garantía por Gusto</strong> es nuestro principal compromiso:
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Si al recibir tu joya no te encanta el resultado, <strong>la rehacemos sin costo adicional</strong>.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Trabajamos contigo en cada etapa del diseño para asegurarnos de que el resultado final sea perfecto.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Antes de fabricar, aprobamos juntos el diseño final para que no haya sorpresas.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Si necesitas ajustes de talla después de la entrega, los hacemos sin costo durante los primeros 6 meses.</span>
                  </li>
                </ul>
              </div>

              <h3 className="font-display text-lg text-foreground mt-8 mb-3">¿Cómo funciona el proceso y los pagos?</h3>
              <p className="text-sm">
                Somos pioneros y los únicos en Chile en ofrecer esta garantía. Es nuestro principal diferenciador y lo que nos define como joyería:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="p-4 rounded-lg border border-border bg-card text-center">
                  <div className="text-sm font-display text-primary mb-2">Paso 1</div>
                  <h4 className="font-display text-foreground mb-1">Diseño gratuito</h4>
                  <p className="text-xs text-muted-foreground">La asesoría, bocetos y diseño son sin costo. Diseñamos hasta que digas "¡es perfecto!".</p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-card text-center">
                  <div className="text-sm font-display text-primary mb-2">Paso 2</div>
                  <h4 className="font-display text-foreground mb-1">70% de adelanto</h4>
                  <p className="text-xs text-muted-foreground">Al aprobar el diseño final, se paga el 70% para comenzar la fabricación y adquirir los materiales.</p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-card text-center">
                  <div className="text-sm font-display text-primary mb-2">Paso 3</div>
                  <h4 className="font-display text-foreground mb-1">30% al entregar</h4>
                  <p className="text-xs text-muted-foreground">El saldo restante se paga al recibir tu joya terminada. Verificas que te encante antes de pagar.</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 mt-4">
                <p className="text-sm text-foreground">
                  <strong>Plazo de fabricación:</strong> Entre 3 y 6 semanas dependiendo de la complejidad del diseño. Las piezas con piedras especiales pueden tomar un poco más si necesitamos importar la piedra perfecta.
                </p>
              </div>
            </Section>

            {/* ── Photo pair: argollas ── */}
            <PhotoPair images={[
              { src: galProd2172, alt: "Par de argollas Art Déco en caja azul" },
              { src: galProd2159, alt: "Tricillo dorado sobre lino" },
            ]} />

            {/* ═══ ARGOLLAS ═══ */}
            <Section id="argollas" icon={Gem} title="Argollas de Matrimonio">
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 mb-6">
                <h3 className="font-display text-xl text-foreground mb-2">20% de descuento en la hechura</h3>
                <p className="text-sm">
                  Si hiciste tu anillo de compromiso conmigo, tienes un <strong>20% de descuento en la hechura</strong> de tus argollas de matrimonio. ¡Mi regalo para la pareja!
                </p>
              </div>

              <p>Las argollas de matrimonio en Gia Solari son exclusivamente de <strong>oro 18k amarillo</strong>, fabricadas a mano con el mismo cuidado artesanal de nuestros anillos de compromiso.</p>

              <h4 className="font-display text-lg text-foreground mt-6 mb-3">Formas más comunes</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border border-border bg-card">
                  <h5 className="font-display text-foreground mb-2">Media caña (inglés)</h5>
                  <p className="text-sm text-muted-foreground">
                    El clásico por excelencia. Perfil en forma de "D": plano por dentro y abombado por fuera. Cómodo, atemporal y elegante. <strong>El favorito de la Maca.</strong>
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-card">
                  <h5 className="font-display text-foreground mb-2">Plana</h5>
                  <p className="text-sm text-muted-foreground">
                    Perfil rectangular, moderna y minimalista. Ideal para quienes prefieren un look más contemporáneo y angular.
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-card">
                  <h5 className="font-display text-foreground mb-2">Comfort Fit</h5>
                  <p className="text-sm text-muted-foreground">
                    Abombada tanto por dentro como por fuera. Máxima comodidad al ponérsela y quitársela. Ideal para quienes no están acostumbrados a usar anillo.
                  </p>
                </div>
              </div>

              <h4 className="font-display text-lg text-foreground mt-6 mb-3">Medidas típicas</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-border bg-card">
                  <h5 className="font-display text-foreground mb-2">Para ella</h5>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• <strong>Ancho:</strong> 2mm a 3mm (lo más común: 2.5mm)</li>
                    <li>• <strong>Talla:</strong> 8 a 12 (Chile)</li>
                    <li>• Las más delgadas se ven elegantes y combinan bien con el anillo de compromiso</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-border bg-card">
                  <h5 className="font-display text-foreground mb-2">Para él</h5>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• <strong>Ancho:</strong> 3mm a 6mm (lo más común: 3mm)</li>
                    <li>• <strong>Talla:</strong> 16 a 22 (Chile)</li>
                    <li>• El ancho depende del tamaño de la mano y preferencia personal</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 mt-4">
                <p className="text-sm text-foreground">
                  <strong>Tip:</strong> Las argollas se pueden personalizar con grabado interior (nombres, fecha, frase especial) sin costo adicional. El plazo de fabricación es de 2 a 4 semanas.
                </p>
              </div>
            </Section>

            {/* ── Photo banner: FAQ ── */}
            <PhotoBanner
              image={galProd2159}
              alt="Tricillo dorado sobre lino"
            />

            {/* ═══ FAQ ═══ */}
            <Section id="faq" icon={HelpCircle} title="Preguntas frecuentes">
              <div className="space-y-4">
                {[
                  {
                    q: "¿Cuánto demora fabricar un anillo de compromiso?",
                    a: "Entre 3 y 6 semanas dependiendo de la complejidad del diseño. Si necesitamos importar una piedra especial, puede tomar un poco más."
                  },
                  {
                    q: "¿Puedo ver el diseño antes de fabricar?",
                    a: "¡Sí! Antes de fabricar, aprobamos juntos el diseño final para que no haya sorpresas. Hacemos los ajustes que sean necesarios hasta que digas '¡es perfecto!'."
                  },
                  {
                    q: "¿Qué pasa si no me gusta el resultado final?",
                    a: "Nuestra Garantía por Gusto te cubre: si no te encanta, la rehacemos. Somos los únicos en Chile en ofrecer esta garantía."
                  },
                  {
                    q: "¿Las joyas vienen con certificado?",
                    a: "Las certificaciones GIA (diamantes naturales) o IGI (diamantes de laboratorio) están disponibles a solicitud del cliente. Se pueden incluir al momento de cotizar."
                  },
                  {
                    q: "¿Cómo es la forma de pago?",
                    a: "70% de adelanto al aprobar el diseño final para iniciar fabricación y adquirir materiales. El 30% restante se paga al momento de la entrega."
                  },
                  {
                    q: "¿Tienen showroom?",
                    a: "Sí, estamos en Las Condes, Santiago. Las visitas son con cita previa para darte una atención 100% personalizada. Puedes agendar en nuestro Calendly o por WhatsApp."
                  },
                  {
                    q: "¿Cuánto dura una cita?",
                    a: "Depende del tipo de reunión: Asesoría personalizada o Joya personalizada (1 hora), Argollas o Ajustes (30 min), y Retiro de pedido (15 min). Puedes agendar la que necesites en calendly.com/giasolarijoyas."
                  },
                  {
                    q: "¿Hacen envíos a regiones o fuera de Chile?",
                    a: "Sí, coordinamos el envío con el cliente. Los costos de envío corren por cuenta del cliente, salvo acuerdo en contrario."
                  },
                  {
                    q: "¿Tienen descuento en argollas si hice el anillo de compromiso con ustedes?",
                    a: "¡Sí! Las parejas que hacen su anillo de compromiso conmigo tienen un 20% de descuento en la hechura de las argollas de matrimonio."
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="p-4 rounded-lg border border-border bg-card">
                    <h4 className="font-display text-foreground mb-2">{q}</h4>
                    <p className="text-sm text-muted-foreground">{a}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* CTA final */}
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-20">
            <h3 className="font-display text-2xl text-foreground mb-4">¿Tienes más preguntas?</h3>
            <p className="text-muted-foreground mb-6">Escríbenos por WhatsApp y te asesoramos personalmente.</p>
            <a
              href={buildWhatsAppUrl("generico")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium tracking-widest uppercase text-sm hover:bg-primary/90 transition-colors"
            >
              Hablar con nosotros
            </a>
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Guia;
