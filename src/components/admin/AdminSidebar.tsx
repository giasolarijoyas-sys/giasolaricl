import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { FileText, Heart, Mail, BarChart3, LogOut, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Cotizaciones", href: "/admin", icon: FileText },
  { label: "Lista de Deseos", href: "/admin/wish-list", icon: Heart },
  { label: "Newsletter", href: "/admin/newsletter", icon: Mail },
  { label: "Estadisticas", href: "/admin/stats", icon: BarChart3 },
];

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  return (
    <aside className="w-60 border-r border-border bg-card min-h-screen flex flex-col">
      <div className="p-6 border-b border-border">
        <h2 className="font-display text-lg text-foreground">Gia Solari</h2>
        <p className="text-xs text-muted-foreground">Panel de Administracion</p>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {links.map((l) => (
          <button
            key={l.href}
            onClick={() => navigate(l.href)}
            className={cn(
              "flex items-center gap-3 w-full px-3 py-2.5 text-sm rounded-md transition-colors",
              location.pathname === l.href
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <l.icon size={18} />
            {l.label}
          </button>
        ))}
      </nav>

      <div className="p-3 border-t border-border space-y-1">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground rounded-md transition-colors"
        >
          <Home size={18} />
          Ir al sitio
        </button>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-destructive hover:bg-destructive/10 rounded-md transition-colors"
        >
          <LogOut size={18} />
          Cerrar sesion
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
