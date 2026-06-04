import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2 } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";

type Subscriber = Tables<"newsletter_subscribers">;

const NewsletterAdmin = () => {
  const [subs, setSubs] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from("newsletter_subscribers").select("*").order("created_at", { ascending: false }).then(({ data }) => {
      setSubs(data || []);
      setLoading(false);
    });
  }, []);

  return (
    <AdminLayout>
      <h1 className="font-display text-2xl text-foreground mb-2">Suscriptores Newsletter</h1>
      <p className="text-sm text-muted-foreground mb-6">{subs.length} suscriptores totales</p>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="animate-spin text-primary" size={24} /></div>
      ) : (
        <div className="border border-border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Activo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subs.map((s) => (
                <TableRow key={s.id}>
                  <TableCell className="font-medium">{s.email}</TableCell>
                  <TableCell>{s.nombre || ", "}</TableCell>
                  <TableCell>{new Date(s.created_at).toLocaleDateString("es-CL")}</TableCell>
                  <TableCell>{s.subscribed ? "Si" : "No"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </AdminLayout>
  );
};

export default NewsletterAdmin;
