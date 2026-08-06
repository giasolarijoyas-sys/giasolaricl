import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";

import { TooltipProvider } from "@/components/ui/tooltip";
import WhatsAppButton from "./components/WhatsAppButton";
import RouteTracker from "./components/RouteTracker";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Terminos from "./pages/Terminos.tsx";
import AdminLogin from "./pages/admin/Login.tsx";
import Dashboard from "./pages/admin/Dashboard.tsx";
import QuoteDetail from "./pages/admin/QuoteDetail.tsx";
import WishListAdmin from "./pages/admin/WishListAdmin.tsx";
import NewsletterAdmin from "./pages/admin/NewsletterAdmin.tsx";
import StatsAdmin from "./pages/admin/StatsAdmin.tsx";
import ListaDeseos from "./pages/ListaDeseos.tsx";
import Favoritas from "./pages/Favoritas.tsx";
import SobreGia from "./pages/SobreGia.tsx";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes.tsx";
import GuiaDeTallas from "./pages/GuiaDeTallas.tsx";
import CuidadoDeLaJoya from "./pages/CuidadoDeLaJoya.tsx";
import GarantiaPorGusto from "./pages/GarantiaPorGusto.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import Aprende from "./pages/Aprende.tsx";
import GuiaDelAnillo from "./pages/GuiaDelAnillo.tsx";
import ComoFunciona from "./pages/ComoFunciona.tsx";
import AprendeDiamantes4C from "./pages/aprende/Diamantes4C.tsx";
import OroVsPlatino from "./pages/aprende/OroVsPlatino.tsx";

import ComoElegirAnillo from "./pages/aprende/ComoElegirAnillo.tsx";
import CuantoCuestaAnillo from "./pages/aprende/CuantoCuestaAnillo.tsx";
import AnilloZafiro from "./pages/aprende/AnilloZafiro.tsx";
import ArgollasMatrimonio from "./pages/aprende/ArgollasMatrimonio.tsx";
import TallaAnillo from "./pages/aprende/TallaAnillo.tsx";
import DiamanteCertificadoGiaIgi from "./pages/aprende/DiamanteCertificadoGiaIgi.tsx";
import Joyas from "./pages/Joyas.tsx";
import JoyaDetalle from "./pages/JoyaDetalle.tsx";
import Agenda from "./pages/Agenda.tsx";
import Proceso from "./pages/Proceso.tsx";
import Cotizar from "./pages/Cotizar.tsx";
import NewIn from "./pages/NewIn.tsx";
import Filosofia from "./pages/Filosofia.tsx";

import Piedras from "./pages/significados/Piedras.tsx";
import PiedraDetalle from "./pages/significados/PiedraDetalle.tsx";
import Disenos from "./pages/significados/Disenos.tsx";
import DisenoDetalle from "./pages/significados/DisenoDetalle.tsx";




const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />
        <BrowserRouter>
          <RouteTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            {/* /guia consolidada en /aprende */}
            <Route path="/guia" element={<Navigate to="/aprende" replace />} />
            <Route path="/guia/*" element={<Navigate to="/aprende" replace />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/lista-de-deseos" element={<ListaDeseos />} />
            <Route path="/favoritas" element={<Favoritas />} />
            <Route path="/sobre-gia" element={<SobreGia />} />
            <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
            <Route path="/guia-de-tallas" element={<GuiaDeTallas />} />
            <Route path="/cuidado-de-la-joya" element={<CuidadoDeLaJoya />} />
            <Route path="/garantia-por-gusto" element={<GarantiaPorGusto />} />
            {/* Redirects de /blog/* duplicadas a /aprende/* (deben matchear ANTES de /blog/:slug) */}
            <Route path="/blog/oro-18k-vs-platino" element={<Navigate to="/aprende/oro-vs-platino" replace />} />
            <Route path="/blog/las-4c-del-diamante" element={<Navigate to="/aprende/diamantes-4c" replace />} />
            <Route path="/blog/diamante-natural-o-laboratorio" element={<Navigate to="/aprende" replace />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/aprende" element={<Aprende />} />
            <Route path="/guia-del-anillo" element={<GuiaDelAnillo />} />
            <Route path="/como-funciona" element={<ComoFunciona />} />
            <Route path="/aprende/diamantes-4c" element={<AprendeDiamantes4C />} />
            <Route path="/aprende/oro-vs-platino" element={<OroVsPlatino />} />
            <Route path="/aprende/diamante-natural-vs-laboratorio" element={<Navigate to="/aprende" replace />} />
            <Route path="/aprende/como-elegir-anillo-compromiso" element={<ComoElegirAnillo />} />
            <Route path="/aprende/cuanto-cuesta-anillo-compromiso-chile" element={<CuantoCuestaAnillo />} />
            <Route path="/aprende/anillo-compromiso-zafiro" element={<AnilloZafiro />} />
            <Route path="/aprende/argollas-matrimonio-personalizadas" element={<ArgollasMatrimonio />} />
            <Route path="/aprende/talla-anillo" element={<TallaAnillo />} />
            <Route path="/aprende/diamante-certificado-gia-igi" element={<DiamanteCertificadoGiaIgi />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/cotizacion/:id" element={<QuoteDetail />} />
            <Route path="/admin/wish-list" element={<WishListAdmin />} />
            <Route path="/admin/newsletter" element={<NewsletterAdmin />} />
            <Route path="/admin/stats" element={<StatsAdmin />} />
            <Route path="/joyas" element={<Joyas />} />
            <Route path="/joyas/:slug" element={<JoyaDetalle />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/proceso" element={<Proceso />} />
            <Route path="/cotizar" element={<Cotizar />} />
            <Route path="/new" element={<NewIn />} />
            <Route path="/filosofia" element={<Filosofia />} />
            
            <Route path="/significados/piedras" element={<Piedras />} />
            <Route path="/significados/piedras/:slug" element={<PiedraDetalle />} />
            <Route path="/significados/disenos" element={<Disenos />} />
            <Route path="/significados/disenos/:slug" element={<DisenoDetalle />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <WhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
