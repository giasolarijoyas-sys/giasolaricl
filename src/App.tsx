import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";

import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Guia from "./pages/Guia.tsx";
import Terminos from "./pages/Terminos.tsx";
import AdminLogin from "./pages/admin/Login.tsx";
import Dashboard from "./pages/admin/Dashboard.tsx";
import QuoteDetail from "./pages/admin/QuoteDetail.tsx";
import WishListAdmin from "./pages/admin/WishListAdmin.tsx";
import NewsletterAdmin from "./pages/admin/NewsletterAdmin.tsx";
import StatsAdmin from "./pages/admin/StatsAdmin.tsx";
import ListaDeseos from "./pages/ListaDeseos.tsx";
import SobreGia from "./pages/SobreGia.tsx";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes.tsx";
import GuiaDeTallas from "./pages/GuiaDeTallas.tsx";
import CuidadoDeLaJoya from "./pages/CuidadoDeLaJoya.tsx";
import GarantiaPorGusto from "./pages/GarantiaPorGusto.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import Aprende from "./pages/Aprende.tsx";
import AprendeDiamantes4C from "./pages/aprende/Diamantes4C.tsx";
import OroVsPlatino from "./pages/aprende/OroVsPlatino.tsx";
import NaturalVsLab from "./pages/aprende/NaturalVsLab.tsx";
import ComoElegirAnillo from "./pages/aprende/ComoElegirAnillo.tsx";
import CotizadorInterno from "./pages/CotizadorInterno.tsx";
import Joyas from "./pages/Joyas.tsx";
import JoyaDetalle from "./pages/JoyaDetalle.tsx";
import Agenda from "./pages/Agenda.tsx";
import Proceso from "./pages/Proceso.tsx";
import LaHermana from "./pages/LaHermana.tsx";
import { Navigate } from "react-router-dom";
const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/guia" element={<Guia />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/lista-de-deseos" element={<ListaDeseos />} />
            <Route path="/sobre-gia" element={<SobreGia />} />
            <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
            <Route path="/guia-de-tallas" element={<GuiaDeTallas />} />
            <Route path="/cuidado-de-la-joya" element={<CuidadoDeLaJoya />} />
            <Route path="/garantia-por-gusto" element={<GarantiaPorGusto />} />
            {/* Redirects 301 de /blog/* a /aprende/* equivalentes */}
            <Route path="/blog/oro-18k-vs-platino" element={<Navigate to="/aprende/oro-vs-platino" replace />} />
            <Route path="/blog/las-4c-del-diamante" element={<Navigate to="/aprende/diamantes-4c" replace />} />
            <Route path="/blog/diamante-natural-o-laboratorio" element={<Navigate to="/aprende/diamante-natural-vs-laboratorio" replace />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/aprende" element={<Aprende />} />
            <Route path="/aprende/diamantes-4c" element={<AprendeDiamantes4C />} />
            <Route path="/aprende/oro-vs-platino" element={<OroVsPlatino />} />
            <Route path="/aprende/diamante-natural-vs-laboratorio" element={<NaturalVsLab />} />
            <Route path="/aprende/como-elegir-anillo-compromiso" element={<ComoElegirAnillo />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/cotizacion/:id" element={<QuoteDetail />} />
            <Route path="/admin/wish-list" element={<WishListAdmin />} />
            <Route path="/admin/newsletter" element={<NewsletterAdmin />} />
            <Route path="/admin/stats" element={<StatsAdmin />} />
            <Route path="/cotizador-interno" element={<CotizadorInterno />} />
            <Route path="/joyas" element={<Joyas />} />
            <Route path="/joyas/:slug" element={<JoyaDetalle />} />
            {/* Redirects from old /catalogo URLs */}
            <Route path="/catalogo" element={<Navigate to="/joyas" replace />} />
            <Route path="/catalogo/:slug" element={<Navigate to="/joyas" replace />} />
            <Route path="/catalogo/:categoria/:pieza" element={<Navigate to="/joyas" replace />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/proceso" element={<Proceso />} />
            <Route path="/la-hermana" element={<LaHermana />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
