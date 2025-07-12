import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Unternehmen from "./pages/Unternehmen";
import Dienstleistungen from "./pages/Dienstleistungen";
import Karriere from "./pages/Karriere";
import Geschaeftskunden from "./pages/Geschaeftskunden";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import AGB from "./pages/AGB";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/unternehmen" element={<Unternehmen />} />
            <Route path="/dienstleistungen" element={<Dienstleistungen />} />
            <Route path="/karriere" element={<Karriere />} />
            <Route path="/geschaeftskunden" element={<Geschaeftskunden />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/agb" element={<AGB />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
