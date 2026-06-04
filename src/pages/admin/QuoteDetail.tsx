import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileDown, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { Tables } from "@/integrations/supabase/types";
import { generateQuotePDF } from "@/lib/generateQuotePDF";

type Quote = Tables<"quotes">;

const QuoteDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from("quotes").select("*").eq("id", id!).single();
      setQuote(data);
      setLoading(false);
    };
    fetch();
  }, [id]);

  const updateStatus = async (status: string) => {
    await supabase.from("quotes").update({ status }).eq("id", id!);
    setQuote((prev) => prev ? { ...prev, status } : prev);
    toast({ title: "Estado actualizado" });
  };

  const handlePDF = () => {
    if (!quote) return;
    generateQuotePDF(quote);
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex justify-center py-12"><Loader2 className="animate-spin text-primary" size={24} /></div>
      </AdminLayout>
    );
  }

  if (!quote) {
    return (
      <AdminLayout>
        <p className="text-muted-foreground">Cotizacion no encontrada.</p>
      </AdminLayout>
    );
  }

  const rec = quote.recommendation as Record<string, unknown> | null;

  return (
    <AdminLayout>
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="icon" onClick={() => navigate("/admin")}>
          <ArrowLeft size={20} />
        </Button>
        <div className="flex-1">
          <h1 className="font-display text-2xl text-foreground">{quote.nombre}</h1>
          <p className="text-sm text-muted-foreground">{quote.email}, {quote.whatsapp}</p>
        </div>
        <Select value={quote.status} onValueChange={updateStatus}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="nueva">Nueva</SelectItem>
            <SelectItem value="en proceso">En proceso</SelectItem>
            <SelectItem value="completada">Completada</SelectItem>
            <SelectItem value="cancelada">Cancelada</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handlePDF}>
          <FileDown size={16} className="mr-2" /> Generar PDF
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="text-lg">Especificaciones</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-sm">
            <Row label="Pieza" value={quote.pieza} />
            <Row label="Metal" value={quote.metal} />
            <Row label="Piedra" value={quote.piedra} />
            <Row label="Forma" value={quote.forma} />
            <Row label="Quilates" value={quote.quilates} />
            <Row label="Estilo" value={quote.estilo} />
            <Row label="Engaste" value={quote.engaste} />
            <Row label="Grabado" value={quote.grabado} />
            <Row label="Presupuesto" value={quote.presupuesto} />
            <Row label="Fecha limite" value={quote.fecha_limite} />
            <Row label="Referencias" value={quote.referencias} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-lg">Informacion Adicional</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-sm">
            <Row label="Nombre pareja" value={quote.nombre_pareja} />
            <Row label="Cumple pareja" value={quote.fecha_cumple_pareja} />
            <Row label="Aniversario" value={quote.fecha_aniversario} />
            <Row label="Notas pareja" value={quote.notas_pareja} />
            <Row label="Como nos conocio" value={quote.como_nos_conociste} />
            {quote.quoted_price && <Row label="Precio estimado" value={`$${quote.quoted_price.toLocaleString("es-CL")} CLP`} />}
            {quote.confidence_score != null && <Row label="Confianza" value={`${(Number(quote.confidence_score) * 100).toFixed(0)}%`} />}
          </CardContent>
        </Card>

        {rec && (
          <Card className="md:col-span-2">
            <CardHeader><CardTitle className="text-lg">Recomendacion del Sistema</CardTitle></CardHeader>
            <CardContent>
              <pre className="text-xs bg-muted p-4 rounded-md overflow-auto whitespace-pre-wrap">
                {JSON.stringify(rec, null, 2)}
              </pre>
            </CardContent>
          </Card>
        )}

        {quote.image_urls && quote.image_urls.length > 0 && (
          <Card className="md:col-span-2">
            <CardHeader><CardTitle className="text-lg">Imagenes de Referencia</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quote.image_urls.map((url, i) => (
                  <a key={i} href={url} target="_blank" rel="noopener noreferrer">
                    <img src={url} alt={`Ref ${i + 1}`} className="rounded-md w-full h-32 object-cover border border-border" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </AdminLayout>
  );
};

const Row = ({ label, value }: { label: string; value: string | null | undefined }) => {
  if (!value) return null;
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-foreground font-medium text-right max-w-[60%]">{value}</span>
    </div>
  );
};

export default QuoteDetail;
