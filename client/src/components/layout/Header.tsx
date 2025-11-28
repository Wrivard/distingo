import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logoImage from '@assets/5d0e99f4-6e57-4f5e-9918-c71c7cae7098.jfif_1764287790360.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À Propos' },
    { href: '/menu', label: 'Menu' },
    { href: '/events', label: 'Événements' },
    { href: '/gallery', label: 'Galerie' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className="w-full bg-primary border-b border-white/10 py-4"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <a className="hover:opacity-80 transition-opacity block py-2">
            <img 
              src={logoImage} 
              alt="Distingo Resto Pub" 
              className="h-12 md:h-14 w-auto object-contain" 
            />
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className={cn(
                "text-sm font-medium tracking-[0.1em] transition-colors uppercase",
                location === link.href
                  ? "text-gold hover:text-gold/80"
                  : "text-white/90 hover:text-gold"
              )}>
                {link.label}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <Button
              size="sm"
              className="font-medium tracking-wide ml-2 px-6 bg-gold hover:bg-gold/90 text-background"
            >
              Réserver
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border animate-in slide-in-from-top-5 shadow-xl">
          <nav className="flex flex-col p-8 gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "text-xl font-serif transition-colors hover:text-accent",
                    location === link.href ? "text-accent" : "text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 text-lg font-medium">
                Réserver
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
