import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Heart, Mail, TrendingUp } from "lucide-react";
import { Loader2 } from "lucide-react";

const StatsAdmin = () => {
  const [stats, setStats] = useState({ quotes: 0, quotesMonth: 0, wishes: 0, subs: 0, topPiece: "—" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const now = new Date();
      const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

      const [quotesRes, quotesMonthRes, wishRes, subsRes] = await Promise.all([
        supabase.from("quotes").select("id, pieza", { count: "exact" }),
        supabase.from("quotes").select("id", { count: "exact" }).gte("created_at", monthStart),
        supabase.from("wish_list").select("id", { count: "exact" }),
        supabase.from("newsletter_subscribers").select("id", { count: "exact" }),
      ]);

      // Find top piece
      const piezas = (quotesRes.data || []).map((q) => q.pieza);
      const freq: Record<string, number> = {};
      piezas.forEach((p) => { freq[p] = (freq[p] || 0) + 1; });
      const topPiece = Object.entries(freq).sort((a, b) => b[1] - a[1])[0]?.[0] || "—";

      setStats({
        quotes: quotesRes.count || 0,
        quotesMonth: quotesMonthRes.count || 0,
        wishes: wishRes.count || 0,
        subs: subsRes.count || 0,
        topPiece,
      });
      setLoading(false);
    };
    load();
  }, []);

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex justify-center py-12"><Loader2 className="animate-spin text-primary" size={24} /></div>
      </AdminLayout>
    );
  }

  const cards = [
    { label: "Cotizaciones Totales", value: stats.quotes, icon: FileText },
    { label: "Cotizaciones del Mes", value: stats.quotesMonth, icon: TrendingUp },
    { label: "Lista de Deseos", value: stats.wishes, icon: Heart },
    { label: "Suscriptores", value: stats.subs, icon: Mail },
  ];

  return (
    <AdminLayout>
      <h1 className="font-display text-2xl text-foreground mb-6">Estadisticas</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cards.map((c) => (
          <Card key={c.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{c.label}</CardTitle>
              <c.icon size={18} className="text-primary" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-display text-foreground">{c.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Pieza mas solicitada</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-display text-primary">{stats.topPiece}</p>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default StatsAdmin;
