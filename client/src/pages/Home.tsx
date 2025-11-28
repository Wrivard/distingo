import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight, UtensilsCrossed, Wine, Music } from 'lucide-react';
import { motion } from 'framer-motion';

// Import generated assets
import heroImage from '@assets/60e3fd14-123e-4568-a2fa-a1001c9d094e_1764287212509.jfif';
import dishImage from '@assets/generated_images/gourmet_steak_frites_dish.png';
import drinkImage from '@assets/generated_images/signature_craft_cocktail_in_crystal_glass.png';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Distingo Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="eyebrow text-gold mb-6">Est. 2025 • Montréal</p>
            
            <h1 className="text-cream mb-4">
              Distingo
            </h1>
            <p className="elegant-italic text-4xl sm:text-5xl md:text-6xl text-cream/80 -mt-4 mb-10">
              Resto Pub
            </p>
            
            <p className="text-xl md:text-2xl text-cream/85 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Où le charme rustique rencontre l'élégance culinaire. Découvrez le mélange parfait entre l'ambiance bistro chaleureuse et la gastronomie haut de gamme.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/menu">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground min-w-[200px] text-lg h-14 font-medium tracking-wide">
                  Voir le Menu
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-cream/80 text-cream hover:bg-cream hover:text-background min-w-[200px] text-lg h-14 font-medium tracking-wide">
                  Réserver
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-cream/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Intro / About Teaser */}
      <section className="py-24 md:py-36 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl"
            >
              <img 
                src={dishImage} 
                alt="Plat Signature" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="eyebrow">Notre Philosophie</p>
              
              <h2 className="text-foreground">
                Une Approche Moderne du{' '}
                <span className="elegant-italic text-gold">Confort Classique</span>
              </h2>
              
              <p className="text-xl md:text-2xl leading-relaxed">
                Situé au cœur de Montréal, Distingo offre un sanctuaire loin de l'agitation urbaine. Nous croyons au pouvoir de la bonne cuisine et de la bonne compagnie.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Notre cuisine propose des classiques de pub élevés ainsi que des plats saisonniers innovants, tous préparés avec des ingrédients locaux soigneusement sélectionnés.
              </p>
              
              <Link href="/about">
                <a className="inline-flex items-center text-gold font-medium hover:text-cream transition-colors group text-lg mt-4">
                  Découvrir Notre Histoire 
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features / Highlights */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="eyebrow text-gold">L'Expérience Distingo</p>
            <h2 className="text-primary-foreground">
              Ce Qui Nous <span className="elegant-italic">Distingue</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 lg:p-10 border border-white/10 rounded-sm hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-8 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <UtensilsCrossed className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-2xl lg:text-3xl text-primary-foreground mb-4">Cuisine Gastronomique</h3>
              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
                De nos frites signature à nos burgers artisanaux, chaque plat est élaboré avec passion et précision.
              </p>
              <Link href="/menu">
                <a className="text-accent uppercase tracking-[0.15em] text-sm font-semibold hover:text-cream transition-colors">
                  Voir Menu →
                </a>
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="p-8 lg:p-10 border border-white/10 rounded-sm hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-8 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Wine className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-2xl lg:text-3xl text-primary-foreground mb-4">Boissons Sélectionnées</h3>
              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
                Explorez notre vaste carte des vins, nos bières artisanales locales et nos cocktails signature.
              </p>
              <Link href="/menu">
                <a className="text-accent uppercase tracking-[0.15em] text-sm font-semibold hover:text-cream transition-colors">
                  Carte des Boissons →
                </a>
              </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 lg:p-10 border border-white/10 rounded-sm hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-8 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Music className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-2xl lg:text-3xl text-primary-foreground mb-4">Atmosphère Chaleureuse</h3>
              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
                Un éclairage chaleureux, des sièges confortables et une ambiance soignée créent le cadre idéal.
              </p>
              <Link href="/gallery">
                <a className="text-accent uppercase tracking-[0.15em] text-sm font-semibold hover:text-cream transition-colors">
                  Voir Galerie →
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image / CTA */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={drinkImage} 
            alt="Cocktail Artisanal" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow text-gold mb-6">Réservations</p>
            <h2 className="text-cream mb-10">
              Goûtez à la <span className="elegant-italic">Distinction</span>
            </h2>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground h-16 px-12 text-lg font-medium tracking-wide">
                Réservez Votre Table
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
