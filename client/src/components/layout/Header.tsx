import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logoImage from '@assets/Generated Image November 27, 2025 - 6_52PM_1764287600268.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À Propos' },
    { href: '/menu', label: 'Menu' },
    { href: '/gallery', label: 'Galerie' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm py-2 border-border/50" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <a className="hover:opacity-80 transition-opacity block py-2">
            <img 
              src={logoImage} 
              alt="Distingo Resto Pub" 
              className="h-12 md:h-16 w-auto object-contain" 
            />
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-secondary uppercase",
                location === link.href ? "text-secondary" : "text-foreground/80"
              )}>
                {link.label}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
              Réserver
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border animate-in slide-in-from-top-5 shadow-xl">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a 
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-secondary",
                    location === link.href ? "text-secondary" : "text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Réserver
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
