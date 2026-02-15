
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Domains', path: '/domains' },
    { name: 'Members', path: '/members' },
    { name: 'Contact', path: '/contact' },
    { name: 'Creators', path: '/creators' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto rounded-full px-4 py-2 backdrop-blur-md bg-black/30 border border-white/10">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary/30 flex items-center justify-center border border-primary/50">
              <span className="text-primary font-serif text-2xl animate-glow">C</span>
            </div>
            <span className="font-serif text-xl font-medium tracking-wider hidden sm:block">
              <span className="text-primary">Creativity</span>{" "}
              <span className="text-accent">Club</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`transition-all duration-300 ${
                  isActive(link.path)
                    ? "text-accent"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/10"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full mt-2 p-4 backdrop-blur-md bg-black/80 border-t border-white/10 border-b">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`transition-all duration-300 p-2 ${
                  isActive(link.path)
                    ? "text-accent bg-white/10 rounded-md"
                    : "text-white/80 hover:text-white hover:bg-white/5 rounded-md"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
