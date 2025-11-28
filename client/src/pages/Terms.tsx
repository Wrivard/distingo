import Layout from '@/components/layout/Layout';

export default function Terms() {
  return (
    <Layout>
      <div className="bg-primary/0 py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-primary-foreground">Conditions d'Utilisation</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}</p>
          <section className="mb-8">
            <h2 className="text-2xl font-serif text-foreground mb-4">1. Réservations</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les réservations sont confirmées sous réserve de disponibilité. Nous vous recommandons de réserver à l'avance, particulièrement pour les fins de semaine et occasions spéciales. Une confirmation vous sera envoyée par courriel.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-serif text-foreground mb-4">2. Annulations</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les annulations doivent être effectuées au moins 24 heures à l'avance. Pour les groupes de 8 personnes ou plus, un préavis de 48 heures est requis. Les annulations tardives peuvent entraîner des frais.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-serif text-foreground mb-4">3. Cartes-Cadeaux</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les cartes-cadeaux n'ont pas de date d'expiration et sont transférables. Elles ne peuvent être échangées contre de l'argent. En cas de perte ou de vol, nous ne pouvons pas remplacer les cartes-cadeaux.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-serif text-foreground mb-4">4. Événements Privés</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les événements privés nécessitent un dépôt non remboursable. Les détails spécifiques seront convenus dans un contrat séparé. Les modifications doivent être communiquées au moins 7 jours à l'avance.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-serif text-foreground mb-4">5. Conduite</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous nous réservons le droit de refuser le service à toute personne et de demander à quiconque de quitter les lieux si leur comportement est jugé inapproprié ou perturbateur.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-serif text-foreground mb-4">6. Modifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications entreront en vigueur dès leur publication sur ce site. Pour toute question, contactez-nous à info@distingo.com.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
