import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <Layout>
      <div className="bg-primary py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-primary-foreground">Politique de Confidentialité</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}</p>
          <section className="mb-8">
            <h2 className="text-2xl font-serif text-foreground mb-4">1. Collecte d'Informations</h2>
            <p className="text-muted-foreground leading-relaxed">
              Distingo Resto Pub collecte des informations personnelles lorsque vous effectuez une réservation, vous inscrivez à notre infolettre, ou achetez une carte-cadeau. Ces informations peuvent inclure votre nom, adresse courriel, numéro de téléphone, et informations de paiement.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-serif text-foreground mb-4">2. Utilisation des Informations</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous utilisons vos informations pour traiter vos réservations, vous envoyer des confirmations, gérer nos services, et vous tenir informé de nos offres et événements si vous avez opté pour notre infolettre.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-serif text-foreground mb-4">3. Protection des Données</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous prenons la sécurité de vos données très au sérieux. Toutes les transactions sont cryptées et nous ne partageons jamais vos informations personnelles avec des tiers sans votre consentement.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-serif text-foreground mb-4">4. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-serif text-foreground mb-4">5. Vos Droits</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vous avez le droit d'accéder, de modifier ou de supprimer vos informations personnelles à tout moment. Contactez-nous à info@distingo.com pour toute demande.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-serif text-foreground mb-4">6. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              Pour toute question concernant cette politique de confidentialité, veuillez nous contacter à info@distingo.com ou par téléphone au (514) 555-0123.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
