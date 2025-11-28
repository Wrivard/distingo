import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'wouter';
import logoImage from '@assets/5d0e99f4-6e57-4f5e-9918-c71c7cae7098.jfif_1764287790360.png';

export default function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand & Contact */}
          <div>
            <div className="mb-8">
              <img 
                src={logoImage} 
                alt="Distingo Resto Pub" 
                className="h-14 w-auto object-contain" 
              />
            </div>
            <div className="space-y-5">
              <p className="flex items-start gap-4 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <MapPin className="w-5 h-5 mt-1 text-gold flex-shrink-0" />
                <span className="text-lg">1234 Rue Saint-Denis,<br />Montréal, QC H2X 3K4</span>
              </p>
              <p className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+15145550123" className="text-lg text-primary-foreground/70 hover:text-gold transition-colors">(514) 555-0123</a>
              </p>
              <p className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:info@distingo.com" className="text-lg text-primary-foreground/70 hover:text-gold transition-colors">info@distingo.com</a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xl font-serif text-primary-foreground mb-6">Heures d'Ouverture</h4>
            <ul className="space-y-3 text-lg">
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

          {/* Social & Links */}
          <div>
            <h4 className="text-xl font-serif text-primary-foreground mb-6">Suivez-nous</h4>
            <p className="text-primary-foreground/70 text-lg mb-6 leading-relaxed">
              Rejoignez notre communauté pour les mises à jour sur les nouveaux menus et événements spéciaux.
            </p>
            <div className="flex gap-4 mb-8">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-4 rounded-full hover:bg-gold hover:text-background transition-all duration-300 text-primary-foreground/70"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-4 rounded-full hover:bg-gold hover:text-background transition-all duration-300 text-primary-foreground/70"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
            </div>
            <div className="space-y-2">
              <Link href="/menu"><a className="block text-primary-foreground/70 hover:text-gold transition-colors text-base">Menu</a></Link>
              <Link href="/events"><a className="block text-primary-foreground/70 hover:text-gold transition-colors text-base">Événements</a></Link>
              <Link href="/gallery"><a className="block text-primary-foreground/70 hover:text-gold transition-colors text-base">Galerie</a></Link>
              <Link href="/contact"><a className="block text-primary-foreground/70 hover:text-gold transition-colors text-base">Contact</a></Link>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-16 p-8 bg-white/5 rounded-sm border border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-serif text-primary-foreground mb-3">Restez Informé</h4>
            <p className="text-primary-foreground/70 text-base mb-6">
              Inscrivez-vous à notre infolettre pour recevoir nos offres exclusives et actualités
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre adresse courriel"
                className="flex-1 px-4 py-3 rounded-sm bg-background/10 border border-border/30 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gold hover:bg-gold/90 text-background font-semibold rounded-sm transition-all duration-300 hover:scale-[1.02]"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            &copy; {new Date().getFullYear()} Distingo Resto Pub. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy"><a className="text-primary-foreground/50 hover:text-gold transition-colors">Politique de Confidentialité</a></Link>
            <Link href="/terms"><a className="text-primary-foreground/50 hover:text-gold transition-colors">Conditions d'Utilisation</a></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
