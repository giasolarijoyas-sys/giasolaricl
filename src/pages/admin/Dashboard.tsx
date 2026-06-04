import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Loader2, Search } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";

type Quote = Tables<"quotes">;

const statusColors: Record<string, string> = {
  nueva: "bg-blue-100 text-blue-800",
  "en proceso": "bg-yellow-100 text-yellow-800",
  completada: "bg-green-100 text-green-800",
  cancelada: "bg-red-100 text-red-800",
};

const Dashboard = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("todas");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuotes = async () => {
      let query = supabase.from("quotes").select("*").order("created_at", { ascending: false });
      if (statusFilter !== "todas") query = query.eq("status", statusFilter);
      if (search.trim()) query = query.or(`nombre.ilike.%${search}%,email.ilike.%${search}%`);

      const { data } = await query;
      setQuotes(data || []);
      setLoading(false);
    };
    fetchQuotes();
  }, [statusFilter, search]);

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="font-display text-2xl text-foreground">Cotizaciones</h1>
        <p className="text-sm text-muted-foreground">Gestiona las solicitudes de cotizacion</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar por nombre o email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-44">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todas">Todas</SelectItem>
            <SelectItem value="nueva">Nuevas</SelectItem>
            <SelectItem value="en proceso">En proceso</SelectItem>
            <SelectItem value="completada">Completadas</SelectItem>
            <SelectItem value="cancelada">Canceladas</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="animate-spin text-primary" size={24} />
        </div>
      ) : quotes.length === 0 ? (
        <p className="text-center text-muted-foreground py-12">No hay cotizaciones.</p>
      ) : (
        <div className="border border-border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Pieza</TableHead>
                <TableHead>Metal</TableHead>
                <TableHead>Piedra</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quotes.map((q) => (
                <TableRow
                  key={q.id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => navigate(`/admin/cotizacion/${q.id}`)}
                >
                  <TableCell className="font-medium">{q.nombre}</TableCell>
                  <TableCell>{q.pieza}</TableCell>
                  <TableCell>{q.metal}</TableCell>
                  <TableCell>{q.piedra || ", "}</TableCell>
                  <TableCell>{new Date(q.created_at).toLocaleDateString("es-CL")}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={statusColors[q.status] || ""}>
                      {q.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </AdminLayout>
  );
};

export default Dashboard;
