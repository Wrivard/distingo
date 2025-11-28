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
    <header className="w-full bg-primary border-b border-white/10 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <a className="hover:opacity-80 transition-opacity">
            <img
              src={logoImage}
              alt="Distingo Resto Pub"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className={cn(
                "text-sm font-medium tracking-wide transition-colors uppercase",
                location === link.href
                  ? "text-gold"
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
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute left-0 w-full bg-background border-b border-border shadow-xl z-50">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "text-lg font-medium transition-colors",
                    location === link.href ? "text-gold" : "text-foreground hover:text-gold"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button
                className="w-full bg-gold hover:bg-gold/90 text-background h-11 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Réserver
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
