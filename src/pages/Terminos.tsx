import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Terminos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary text-sm tracking-widest uppercase mb-3 text-center">Legal</p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4 text-center">Términos y Condiciones</h1>
            <p className="text-muted-foreground text-center mb-12">
              Última actualización: Abril 2026
            </p>
          </motion.div>

          <div className="prose prose-sm max-w-none text-muted-foreground space-y-8">
            {/* 1 */}
            <section>
              <h2 className="font-display text-xl text-foreground">1. Información general</h2>
              <p>
                Gia Solari Joyas es una marca de joyería de autor operada por <strong>GIA SOLARI SpA</strong>, con domicilio en Santiago, Las Condes, Chile. Nos especializamos en joyería personalizada fabricada a pedido en oro 18k, platino y piedras preciosas certificadas.
              </p>
              <p>
                Al solicitar una cotización, realizar un pedido o utilizar nuestros servicios, aceptas los presentes términos y condiciones.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="font-display text-xl text-foreground">2. Naturaleza del servicio</h2>
              <p>
                Todas nuestras joyas son <strong>piezas únicas fabricadas a pedido</strong>. Esto significa que cada pieza se diseña y manufactura específicamente para cada cliente según sus preferencias, medidas y requerimientos.
              </p>
              <p>
                El proceso incluye: asesoría personalizada, diseño, aprobación de boceto/render 3D, selección de materiales, fabricación artesanal y entrega.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="font-display text-xl text-foreground">3. Proceso de compra y pagos</h2>
              <ul className="space-y-2">
                <li>
                  <strong>Asesoría y diseño:</strong> La asesoría inicial, bocetos y diseño 3D son <strong>sin costo</strong>. No se cobra hasta que el cliente apruebe el diseño final.
                </li>
                <li>
                  <strong>Adelanto (70%):</strong> Una vez aprobado el diseño final, se requiere un adelanto del 70% del precio total para iniciar la fabricación y adquisición de materiales (piedras, metales). Este adelanto <strong>no es reembolsable</strong> dado que los materiales se adquieren específicamente para tu pieza.
                </li>
                <li>
                  <strong>Saldo (30%):</strong> El 30% restante se paga al momento de la entrega de la joya terminada.
                </li>
                <li>
                  <strong>Medios de pago:</strong> Transferencia bancaria, tarjeta de crédito/débito. Consultar por opciones de pago en cuotas.
                </li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="font-display text-xl text-foreground">4. Plazos de fabricación</h2>
              <p>
                Los plazos estimados de fabricación son:
              </p>
              <ul className="space-y-1">
                <li>• <strong>Anillos de compromiso:</strong> 3 a 6 semanas</li>
                <li>• <strong>Argollas de matrimonio:</strong> 2 a 4 semanas</li>
                <li>• <strong>Joyas con piedras especiales:</strong> 4 a 8 semanas (puede requerir importación de piedra)</li>
                <li>• <strong>Otras joyas:</strong> 2 a 4 semanas</li>
              </ul>
              <p>
                Los plazos son estimados y pueden variar según la complejidad del diseño y disponibilidad de materiales. Gia Solari se compromete a informar cualquier cambio en los tiempos.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="font-display text-xl text-foreground">5. Garantía por Gusto</h2>
              <p>
                Nuestra <strong>Garantía por Gusto</strong> es nuestro principal diferenciador:
              </p>
              <ul className="space-y-2">
                <li>
                  Si al recibir tu joya personalizada <strong>no te encanta el resultado</strong>, la rehacemos para asegurar tu satisfacción total.
                </li>
                <li>
                  Esta garantía aplica siempre que la pieza se haya fabricado según el diseño aprobado por el cliente. Si el cliente solicita cambios al diseño original, se evaluará caso a caso.
                </li>
                <li>
                  La garantía cubre defectos de fabricación, diferencias significativas con el render aprobado, y problemas de terminación.
                </li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="font-display text-xl text-foreground">6. Garantía de calidad y servicio post-venta</h2>
              <ul className="space-y-2">
                <li>
                  <strong>Ajuste de talla:</strong> Sin costo durante los primeros 6 meses desde la entrega.
                </li>
                <li>
                  <strong>Limpieza y mantenimiento:</strong> Ofrecemos limpieza profesional gratuita de por vida para todas nuestras piezas.
                </li>
                <li>
                  <strong>Reparaciones:</strong> Si tu joya sufre algún daño, nos encargamos de repararla. Las reparaciones por uso normal tienen un costo preferencial.
                </li>
                <li>
                  <strong>Baño de rodio</strong> (oro blanco): Todas las joyas de oro blanco incluyen un rodinado antes de la entrega. El siguiente baño de rodio es sin costo dentro del primer año.
                </li>
                <li>
                  <strong>Garantía por caída de piedras:</strong> Garantía de 1 año por caída de piedras, siempre que la joya no presente evidencia de mal uso o golpes.
                </li>
                <li>
                   <strong>Certificaciones:</strong> Las certificaciones GIA (diamantes naturales) o IGI (diamantes de laboratorio) están disponibles a solicitud del cliente. Se pueden incluir en el pedido al momento de cotizar.
                </li>
              </ul>
            </section>

            {/* 7 */}
            <section>
              <h2 className="font-display text-xl text-foreground">7. Política de devoluciones</h2>
              <p>
                Al ser piezas fabricadas a medida y a pedido, <strong>no se aceptan devoluciones</strong> por cambio de opinión o preferencia personal, salvo lo cubierto por la Garantía por Gusto (cláusula 5).
              </p>
              <p>
                En caso de defectos de fabricación comprobables, el cliente tiene derecho a la reparación o refabricación de la pieza sin costo adicional.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="font-display text-xl text-foreground">8. Cancelación de pedidos</h2>
              <ul className="space-y-2">
                <li>
                  <strong>Antes de iniciar fabricación:</strong> Se puede cancelar con devolución completa del adelanto, descontando únicamente costos de materiales ya adquiridos (si los hubiere).
                </li>
                <li>
                  <strong>Durante fabricación:</strong> El adelanto del 50% no es reembolsable, ya que los materiales han sido adquiridos y la mano de obra ha comenzado.
                </li>
              </ul>
            </section>

            {/* 9 */}
            <section>
              <h2 className="font-display text-xl text-foreground">9. Propiedad intelectual</h2>
              <p>
                Los diseños creados por Gia Solari son propiedad intelectual de la marca. El cliente adquiere el derecho sobre la pieza física fabricada, pero no sobre la reproducción del diseño. Las fotos de las piezas pueden ser utilizadas por Gia Solari en sus redes sociales y sitio web, salvo que el cliente solicite lo contrario por escrito.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="font-display text-xl text-foreground">10. Privacidad y datos personales</h2>
              <p>
                Los datos personales recopilados a través de nuestros formularios (cotizador, lista de deseos, quiz) se utilizan exclusivamente para la gestión de tu pedido y comunicación relacionada con nuestros servicios.
              </p>
              <p>
                No compartimos ni vendemos datos personales a terceros. Puedes solicitar la eliminación de tus datos en cualquier momento escribiéndonos por WhatsApp o correo electrónico.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="font-display text-xl text-foreground">11. Envíos</h2>
              <p>
                La entrega se realiza de forma <strong>presencial</strong> en nuestro showroom en Las Condes, Santiago. Para envíos a regiones o fuera de Chile, se coordinará con el cliente el mejor medio de despacho. Los costos de envío corren por cuenta del cliente, salvo acuerdo en contrario.
              </p>
              <p>
                Todas las joyas se entregan en su packaging exclusivo con certificación cuando corresponda.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="font-display text-xl text-foreground">12. Resolución de conflictos</h2>
              <p>
                Cualquier diferencia derivada de estos términos se resolverá de manera amistosa. En caso de no llegar a acuerdo, las partes se someten a la jurisdicción de los tribunales ordinarios de Santiago, Chile.
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2 className="font-display text-xl text-foreground">13. Contacto</h2>
              <p>
                Para cualquier consulta sobre estos términos:
              </p>
              <ul className="space-y-1">
                <li>• <strong>WhatsApp:</strong> +56 9 8404 9502</li>
                <li>• <strong>Instagram:</strong> @giasolari.cl</li>
                <li>• <strong>Showroom:</strong> Santiago, Las Condes · Cita previa</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terminos;
