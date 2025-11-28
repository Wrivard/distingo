import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Users, Utensils, Music, Wine, Calendar, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import interiorImage from '@assets/generated_images/upscale_cozy_gastropub_interior_at_night.png';

const premiumEase = [0.25, 0.4, 0.25, 1];

export default function PrivateEvents() {
  return (
    <Layout>
      <div className="bg-primary/0 py-24 md:py-32 text-center">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="eyebrow text-gold mb-4">Événements Privés</p>
            <h1 className="text-primary-foreground mb-6">Votre Événement Parfait</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Célébrez vos moments spéciaux dans notre espace élégant et accueillant
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-foreground mb-6 !text-4xl sm:!text-5xl">
              Un Lieu <span className="elegant-italic text-gold">Exceptionnel</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              De 20 à 80 personnes, Distingo offre l'espace parfait pour vos événements corporatifs, célébrations familiales, et occasions spéciales.
            </p>
            <div className="space-y-4">
              {[
                { icon: Users, text: "Capacité de 20 à 80 invités" },
                { icon: Utensils, text: "Menus personnalisés par notre chef" },
                { icon: Wine, text: "Bar complet et sélection de vins" },
                { icon: Music, text: "Système audio disponible" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-accent/20 p-3 rounded-full">
                    <item.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <p className="text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-96 rounded-sm overflow-hidden">
            <img src={interiorImage} alt="Espace événement" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="bg-card border border-border rounded-sm p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-3xl font-serif text-foreground mb-6 text-center">Demande d'Information</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Nom" className="px-4 py-3 rounded-sm bg-background border border-border" />
              <input type="email" placeholder="Courriel" className="px-4 py-3 rounded-sm bg-background border border-border" />
            </div>
            <input type="tel" placeholder="Téléphone" className="w-full px-4 py-3 rounded-sm bg-background border border-border" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <input type="date" className="px-4 py-3 rounded-sm bg-background border border-border" />
              <input type="number" placeholder="Nombre d'invités" className="px-4 py-3 rounded-sm bg-background border border-border" />
              <select className="px-4 py-3 rounded-sm bg-background border border-border">
                <option>Type d'événement</option>
                <option>Corporatif</option>
                <option>Anniversaire</option>
                <option>Mariage</option>
                <option>Autre</option>
              </select>
            </div>
            <textarea rows={4} placeholder="Détails de votre événement..." className="w-full px-4 py-3 rounded-sm bg-background border border-border resize-none" />
            <Button className="w-full bg-accent hover:bg-accent/90 h-14 text-lg">
              <Mail className="w-5 h-5 mr-2" />
              Envoyer la Demande
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
