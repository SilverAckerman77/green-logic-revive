import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect for high-end white glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Compliance', path: '/compliance' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-zinc-200 py-3 shadow-sm' 
          : 'bg-transparent py-5 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Section - Grounded in Official Branding */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            {/* Subtle blue glow behind logo on hover */}
            <div className="absolute inset-0 bg-[#0081ff]/10 blur-lg rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
              src="/logo.png" 
              alt="Tech Logic Logo" 
              className="h-10 w-auto relative z-10"
            />
          </div>
          <div className="flex flex-col border-l border-zinc-200 pl-3">
            <span className="font-sans font-extrabold text-sm text-zinc-900 leading-tight tracking-tight">
              TECH LOGIC
            </span>
            <span className="text-[9px] font-mono text-[#0081ff] font-bold tracking-[0.2em]">
              UNIT - II
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Emerald Green Hover States */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors uppercase tracking-wider ${
                  isActive ? 'text-emerald-600' : 'text-zinc-500 hover:text-emerald-600'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA Button - Highlighted in Tech Blue */}
        <div className="hidden md:block">
          <Button 
            asChild
            className="rounded-full bg-[#0081ff] hover:bg-emerald-600 text-white px-6 py-5 shadow-lg shadow-blue-500/20 hover:shadow-emerald-500/20 transition-all duration-300 border-none"
          >
            <Link to="/contact">
              Request Pickup
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-zinc-600 hover:text-emerald-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-100 shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[450px] opacity-100 py-8' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="px-6 flex flex-col gap-5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-bold transition-colors ${
                  isActive ? 'text-emerald-600' : 'text-zinc-800 hover:text-emerald-600'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-6 border-t border-zinc-100 mt-2">
            <Button 
              asChild
              className="liquid-button rounded-full bg-[#0081ff] text-white h-14 text-base font-bold shadow-lg shadow-blue-500/20"
            >
              <Link to="/contact">
                Request Pickup
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;