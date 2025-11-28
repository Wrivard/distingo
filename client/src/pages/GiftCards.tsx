import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Gift, CreditCard, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const premiumEase = [0.25, 0.4, 0.25, 1];
const giftCardAmounts = [50, 75, 100, 150, 200];

export default function GiftCards() {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);

  return (
    <Layout>
      <div className="bg-primary/0 py-24 md:py-32 text-center">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="bg-accent/20 p-6 rounded-full border-2 border-accent/30 inline-block mb-6">
              <Gift className="w-12 h-12 text-foreground" />
            </div>
            <h1 className="text-primary-foreground mb-6">Cartes-Cadeaux</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Offrez l'expérience Distingo à vos proches
            </p>
          </motion.div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            <h2 className="text-foreground mb-6 !text-4xl sm:!text-5xl">
              Le Cadeau <span className="elegant-italic text-gold">Parfait</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Une carte-cadeau Distingo est toujours appréciée.
            </p>
            <div className="space-y-6">
              {[
                { title: "Livraison Instantanée", desc: "Par courriel en minutes" },
                { title: "Aucune Expiration", desc: "Utilisable à tout moment" },
                { title: "Flexible", desc: "Menu complet et boissons" }
              ].map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3" />
                  <div>
                    <h3 className="text-xl font-serif text-foreground">{f.title}</h3>
                    <p className="text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card border border-border rounded-sm p-8">
            <h3 className="text-3xl font-serif text-foreground mb-6">Acheter</h3>
            <div className="mb-8">
              <label className="block text-foreground mb-4">Montant</label>
              <div className="grid grid-cols-3 gap-3">
                {giftCardAmounts.map(amt => (
                  <button key={amt} onClick={() => { setSelectedAmount(amt); setIsCustom(false); }}
                    className={`py-4 rounded-sm border-2 ${selectedAmount === amt && !isCustom ? 'border-accent bg-accent/10 text-accent' : 'border-border'}`}>
                    ${amt}
                  </button>
                ))}
                <button onClick={() => setIsCustom(true)}
                  className={`py-4 rounded-sm border-2 ${isCustom ? 'border-accent bg-accent/10 text-accent' : 'border-border'}`}>
                  Autre
                </button>
              </div>
              {isCustom && <input type="number" value={customAmount} onChange={e => setCustomAmount(e.target.value)}
                className="w-full px-4 py-3 mt-4 rounded-sm bg-background border border-border" placeholder="Montant ($)" />}
            </div>
            <div className="space-y-4 mb-8">
              <input type="text" placeholder="Nom destinataire" className="w-full px-4 py-3 rounded-sm bg-background border border-border" />
              <input type="email" placeholder="Courriel" className="w-full px-4 py-3 rounded-sm bg-background border border-border" />
              <textarea rows={3} placeholder="Message (optionnel)" className="w-full px-4 py-3 rounded-sm bg-background border border-border resize-none" />
            </div>
            <Button className="w-full bg-accent hover:bg-accent/90 h-14 text-lg">
              <CreditCard className="w-5 h-5 mr-2" />
              Acheter ${isCustom && customAmount ? customAmount : selectedAmount}
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
