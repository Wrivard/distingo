import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'wouter';
import logoImage from '@assets/5d0e99f4-6e57-4f5e-9918-c71c7cae7098.jfif_1764287790360.png';

export default function Footer() {
  return (
    <footer className="bg-primary pt-12 pb-6 border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand & Contact */}
          <div>
            <div className="mb-4">
              <img
                src={logoImage}
                alt="Distingo Resto Pub"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-primary-foreground/60 text-sm mb-6">
              Restaurant bistro élégant au cœur de Sorel-Tracy.
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span>1234 Rue Saint-Denis, Sorel-Tracy, QC</span>
              </p>
              <p className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:+15145550123" className="text-primary-foreground/70 hover:text-gold transition-colors">(514) 555-0123</a>
              </p>
              <p className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:info@distingo.com" className="text-primary-foreground/70 hover:text-gold transition-colors">info@distingo.com</a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-serif text-primary-foreground mb-4">Heures d'Ouverture</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between text-primary-foreground/70">
                <span>Lun – Mer</span>
                <span>16h – 23h</span>
              </li>
              <li className="flex justify-between text-primary-foreground/70">
                <span>Jeu – Ven</span>
                <span>16h – 01h</span>
              </li>
              <li className="flex justify-between text-gold font-medium">
                <span>Samedi</span>
                <span>17h – 02h</span>
              </li>
              <li className="flex justify-between text-primary-foreground/70">
                <span>Dimanche</span>
                <span>17h – 23h</span>
              </li>
            </ul>
          </div>

          {/* Links & Social */}
          <div>
            <h4 className="text-lg font-serif text-primary-foreground mb-4">Liens Rapides</h4>
            <div className="grid grid-cols-2 gap-2 mb-6">
              <Link href="/menu"><a className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">Menu</a></Link>
              <Link href="/events"><a className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">Événements</a></Link>
              <Link href="/gallery"><a className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">Galerie</a></Link>
              <Link href="/contact"><a className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">Contact</a></Link>
              <Link href="/gift-cards"><a className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">Cartes-cadeaux</a></Link>
              <Link href="/private-events"><a className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">Événements Privés</a></Link>
            </div>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-full hover:bg-gold hover:text-background transition-all text-primary-foreground/70"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-full hover:bg-gold hover:text-background transition-all text-primary-foreground/70"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-primary-foreground/50 text-xs">
            &copy; {new Date().getFullYear()} Distingo Resto Pub. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs">
            <Link href="/privacy"><a className="text-primary-foreground/50 hover:text-gold transition-colors">Confidentialité</a></Link>
            <Link href="/terms"><a className="text-primary-foreground/50 hover:text-gold transition-colors">Conditions</a></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
