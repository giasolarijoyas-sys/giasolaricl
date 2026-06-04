import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2 } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";

type WishItem = Tables<"wish_list">;

const WishListAdmin = () => {
  const [items, setItems] = useState<WishItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from("wish_list").select("*").order("created_at", { ascending: false }).then(({ data }) => {
      setItems(data || []);
      setLoading(false);
    });
  }, []);

  return (
    <AdminLayout>
      <h1 className="font-display text-2xl text-foreground mb-2">Lista de Deseos</h1>
      <p className="text-sm text-muted-foreground mb-6">Registros de parejas con sus preferencias</p>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="animate-spin text-primary" size={24} /></div>
      ) : items.length === 0 ? (
        <p className="text-center text-muted-foreground py-12">No hay registros.</p>
      ) : (
        <div className="border border-border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Pareja</TableHead>
                <TableHead>Tipo Joya</TableHead>
                <TableHead>Metal</TableHead>
                <TableHead>Piedra</TableHead>
                <TableHead>Presupuesto</TableHead>
                <TableHead>Fecha</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((w) => (
                <TableRow key={w.id}>
                  <TableCell className="font-medium">{w.nombre}</TableCell>
                  <TableCell>{w.nombre_pareja}</TableCell>
                  <TableCell>{w.tipo_joya || ", "}</TableCell>
                  <TableCell>{w.metal_preferido || ", "}</TableCell>
                  <TableCell>{w.piedra_preferida || ", "}</TableCell>
                  <TableCell>{w.presupuesto_aproximado || ", "}</TableCell>
                  <TableCell>{new Date(w.created_at).toLocaleDateString("es-CL")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </AdminLayout>
  );
};

export default WishListAdmin;
