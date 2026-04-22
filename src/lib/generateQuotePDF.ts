import jsPDF from "jspdf";
import type { Tables } from "@/integrations/supabase/types";

type Quote = Tables<"quotes">;

export function generateQuotePDF(quote: Quote) {
  const doc = new jsPDF();
  const w = doc.internal.pageSize.getWidth();
  let y = 20;

  // Header
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("GIA SOLARI", w / 2, y, { align: "center" });
  y += 8;
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(120);
  doc.text("Joyeria de Autor · Santiago, Chile", w / 2, y, { align: "center" });
  y += 4;
  doc.text("www.giasolari.cl · +56 9 8404 9502", w / 2, y, { align: "center" });
  y += 10;

  // Line
  doc.setDrawColor(200, 180, 120);
  doc.setLineWidth(0.5);
  doc.line(20, y, w - 20, y);
  y += 10;

  // Title
  doc.setTextColor(40);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("Propuesta de Cotizacion", 20, y);
  y += 8;
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100);
  doc.text(`Fecha: ${new Date().toLocaleDateString("es-CL")}  |  Ref: ${quote.id.slice(0, 8).toUpperCase()}`, 20, y);
  y += 12;

  // Client info
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(40);
  doc.text("Datos del Cliente", 20, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  const clientInfo = [
    ["Nombre", quote.nombre],
    ["Email", quote.email],
    ["WhatsApp", quote.whatsapp],
  ];
  if (quote.nombre_pareja) clientInfo.push(["Pareja", quote.nombre_pareja]);

  clientInfo.forEach(([label, val]) => {
    doc.setTextColor(100);
    doc.text(`${label}:`, 20, y);
    doc.setTextColor(40);
    doc.text(val, 65, y);
    y += 6;
  });
  y += 6;

  // Specs
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(40);
  doc.text("Especificaciones de la Joya", 20, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);

  const specs: [string, string | null | undefined][] = [
    ["Pieza", quote.pieza],
    ["Metal", quote.metal],
    ["Piedra", quote.piedra],
    ["Forma", quote.forma],
    ["Quilates", quote.quilates],
    ["Estilo", quote.estilo],
    ["Engaste", quote.engaste],
    ["Grabado", quote.grabado],
  ];

  specs.forEach(([label, val]) => {
    if (!val) return;
    doc.setTextColor(100);
    doc.text(`${label}:`, 20, y);
    doc.setTextColor(40);
    doc.text(val, 65, y);
    y += 6;
  });
  y += 6;

  // Price
  if (quote.quoted_price) {
    doc.setFillColor(250, 245, 235);
    doc.roundedRect(20, y, w - 40, 20, 3, 3, "F");
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(40);
    doc.text("Precio Estimado:", 28, y + 13);
    doc.setTextColor(180, 140, 50);
    doc.text(`$${quote.quoted_price.toLocaleString("es-CL")} CLP`, w - 28, y + 13, { align: "right" });
    y += 28;
  }

  // Budget
  if (quote.presupuesto) {
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100);
    doc.text(`Presupuesto indicado por el cliente: ${quote.presupuesto}`, 20, y);
    y += 10;
  }

  // Terms
  y += 5;
  doc.setDrawColor(200, 180, 120);
  doc.line(20, y, w - 20, y);
  y += 8;
  doc.setFontSize(8);
  doc.setTextColor(130);
  const terms = [
    "Este presupuesto es referencial y puede variar segun las especificaciones finales del diseno.",
    "El plazo de confeccion es de 4 a 6 semanas habiles desde la aprobacion del diseno y pago del anticipo.",
    "Se requiere un anticipo del 70% para comenzar el proceso de fabricación.",
    "Los precios de las piedras preciosas pueden variar segun disponibilidad del mercado.",
    "GARANTIA POR GUSTO: 30 dias desde la entrega para redisenar la pieza si no se siente tuya. La hechura va por nuestra cuenta; tu solo cubres la merma del metal (~10%) y las piedras adicionales que requiera el nuevo diseno. Ver detalles en giasolari.cl/garantia-por-gusto.",
  ];
  terms.forEach((t) => {
    doc.text(`· ${t}`, 20, y, { maxWidth: w - 40 });
    y += 5;
  });

  // Footer
  y = doc.internal.pageSize.getHeight() - 15;
  doc.setFontSize(7);
  doc.setTextColor(160);
  doc.text("GIA SOLARI SpA · Santiago, Las Condes · giasolari.cl", w / 2, y, { align: "center" });

  doc.save(`Propuesta_GiaSolari_${quote.nombre.replace(/\s+/g, "_")}_${quote.id.slice(0, 8)}.pdf`);
}
