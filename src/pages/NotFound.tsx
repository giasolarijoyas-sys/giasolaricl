import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: ruta no encontrada:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <SEO
        title="Página no encontrada | Gia Solari Joyas"
        description="La página que buscas no existe o fue movida. Vuelve al inicio o revisa nuestro catálogo de joyas."
        path={location.pathname}
        noindex
      />
      <div className="text-center max-w-md">
        <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Error 404</p>
        <h1 className="mb-4 font-display text-4xl md:text-5xl text-foreground">Página no encontrada</h1>
        <p className="mb-8 text-muted-foreground">
          La página que buscas no existe o fue movida. Te invitamos a volver al inicio o a explorar el catálogo.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-block rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            Volver al inicio
          </Link>
          <Link
            to="/joyas"
            className="inline-block rounded-full border border-primary text-primary px-6 py-3 text-sm tracking-widest uppercase hover:bg-primary/10 transition-colors"
          >
            Ver el catálogo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
