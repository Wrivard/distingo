import { Link } from 'wouter';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import logoImage from '@assets/Generated Image November 27, 2025 - 6_48PM 1_1764287491381.png';

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
                className="h-12 w-auto object-contain invert brightness-0" 
                style={{ filter: 'brightness(0) saturate(100%) invert(96%) sepia(6%) saturate(288%) hue-rotate(346deg) brightness(98%) contrast(90%)' }}
                // Attempting to color match F8F5E9 (off-white) via css filter, or just use brightness-0 invert for pure white
              />
            </div>
            <div className="space-y-4 text-primary-foreground/80">
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-secondary" />
                <span>1234 Saint-Denis St,<br />Montreal, QC H2X 3K4</span>
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
            <h4 className="text-lg font-bold mb-6 border-b border-secondary/30 pb-2 inline-block">Opening Hours</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="flex justify-between">
                <span>Mon - Wed</span>
                <span>4:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Thu - Fri</span>
                <span>4:00 PM - 1:00 AM</span>
              </li>
              <li className="flex justify-between text-secondary font-medium">
                <span>Saturday</span>
                <span>5:00 PM - 2:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>5:00 PM - 11:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-secondary/30 pb-2 inline-block">Follow Us</h4>
            <p className="text-primary-foreground/80 mb-6">
              Join our community for updates on new menu items and special events.
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
          <p>&copy; {new Date().getFullYear()} Distingo Resto Pub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
