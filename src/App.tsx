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

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/guia" element={<Guia />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/cotizacion/:id" element={<QuoteDetail />} />
            <Route path="/admin/wish-list" element={<WishListAdmin />} />
            <Route path="/admin/newsletter" element={<NewsletterAdmin />} />
            <Route path="/admin/stats" element={<StatsAdmin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
