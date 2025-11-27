import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import logoImage from '@assets/Generated Image November 27, 2025 - 6_52PM_1764287600268.png';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Contact */}
          <div>
            <div className="mb-6">
              <img 
                src={logoImage} 
                alt="Distingo Resto Pub" 
                className="h-12 w-auto object-contain" 
              />
            </div>
            <div className="space-y-4 text-primary-foreground/80">
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-secondary" />
                <span>1234 Rue Saint-Denis,<br />Montréal, QC H2X 3K4</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <a href="tel:+15145550123" className="hover:text-white transition-colors">(514) 555-0123</a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <a href="mailto:info@distingo.com" className="hover:text-white transition-colors">info@distingo.com</a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-secondary/30 pb-2 inline-block">Heures d'Ouverture</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="flex justify-between">
                <span>Lun - Mer</span>
                <span>16h00 - 23h00</span>
              </li>
              <li className="flex justify-between">
                <span>Jeu - Ven</span>
                <span>16h00 - 01h00</span>
              </li>
              <li className="flex justify-between text-secondary font-medium">
                <span>Samedi</span>
                <span>17h00 - 02h00</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche</span>
                <span>17h00 - 23h00</span>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-secondary/30 pb-2 inline-block">Suivez-nous</h4>
            <p className="text-primary-foreground/80 mb-6">
              Rejoignez notre communauté pour les mises à jour sur les nouveaux menus et événements spéciaux.
            </p>
            <div className="flex gap-4 mb-8">
              <a href="#" className="bg-secondary/20 p-3 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-secondary/20 p-3 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Distingo Resto Pub. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
