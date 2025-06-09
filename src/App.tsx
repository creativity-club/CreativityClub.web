/*
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MagicParticles from "./components/MagicParticles";
import FluidCursor from "./components/FluidCursor";
import Index from "./pages/Index";
import About from "./pages/About";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Members from "./pages/Members";
import Contact from "./pages/Contact";
import Creators from "./pages/Creators";
import Domains from "./pages/Domains";
import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery";
import Game2048 from "./pages/Game2048";
import DinoGame from "./pages/DinoGame";
import SnakeGame from "./pages/SnakeGame";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <MagicParticles />
      <FluidCursor />
      <BrowserRouter>
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:eventId" element={<EventDetail />} />
            <Route path="/members" element={<Members />} />
            <Route path="/domains" element={<Domains />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/creators" element={<Creators />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/games/2048" element={<Game2048 />} />
            <Route path="/games/dino" element={<DinoGame />} />
            <Route path="/games/snake" element={<SnakeGame />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
*/


//new code 

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MagicParticles from "./components/MagicParticles";
import FluidCursor from "./components/FluidCursor";
import ScrollToTop from "./ScrollToTop"; // ✅ import this
import Index from "./pages/Index";
import About from "./pages/About";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Members from "./pages/Members";
import Contact from "./pages/Contact";
import Creators from "./pages/Creators";
import Domains from "./pages/Domains";
import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery";
import Game2048 from "./pages/Game2048";
import DinoGame from "./pages/DinoGame";
import SnakeGame from "./pages/SnakeGame";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <MagicParticles />
      <FluidCursor />
      <BrowserRouter>
        <ScrollToTop /> {/* ✅ Add this line */}
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:eventId" element={<EventDetail />} />
            <Route path="/members" element={<Members />} />
            <Route path="/domains" element={<Domains />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/creators" element={<Creators />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/games/2048" element={<Game2048 />} />
            <Route path="/games/dino" element={<DinoGame />} />
            <Route path="/games/snake" element={<SnakeGame />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
