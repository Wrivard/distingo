import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

// Reuse images
import interiorImage from '@assets/generated_images/upscale_cozy_gastropub_interior_at_night.png';
import tableImage from '@assets/generated_images/cozy_bistro_table_setting_detail.png';

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary py-24 md:py-32 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow text-gold mb-4">Depuis 2025</p>
            <h1 className="text-primary-foreground mb-6">Notre Histoire</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto font-light">
              Création de souvenirs à travers une cuisine exceptionnelle et une hospitalité chaleureuse.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 md:py-32">
        {/* Section 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">La Vision</p>
            <h2 className="text-foreground mb-8">
              Le <span className="elegant-italic text-gold">Concept</span>
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-6">
              Distingo Resto Pub est né d'un désir simple : créer un lieu où l'élégance d'un bistro rencontre le confort d'un pub local.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Nous voulions un espace où vous pourriez déguster un repas gastronomique en t-shirt, ou une bière artisanale en costume. Un lieu sans prétention mais avec une attention méticuleuse aux détails.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Situé dans le cœur vibrant de Montréal, notre établissement reflète la double nature de la ville — sophistiquée mais accessible, classique mais moderne.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px] rounded-sm overflow-hidden shadow-2xl"
          >
            <img src={interiorImage} alt="Intérieur" className="w-full h-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </motion.div>
        </div>

        {/* Decorative divider */}
        <div className="divider-gold mb-32" />

        {/* Section 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative h-[500px] lg:h-[600px] rounded-sm overflow-hidden shadow-2xl"
          >
            <img src={tableImage} alt="Mise en table" className="w-full h-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <p className="eyebrow">L'Expérience</p>
            <h2 className="text-foreground mb-8">
              L'<span className="elegant-italic text-gold">Atmosphère</span>
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-6">
              Entrez et laissez le bruit de la ville derrière vous. Notre intérieur présente du bois récupéré, des banquettes en cuir souple et un éclairage ambré chaleureux.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Chaque détail a été pensé pour créer une ambiance intime et confortable, où les conversations coulent aussi facilement que nos cocktails artisanaux.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Que vous soyez ici pour un dîner romantique, une rencontre décontractée entre amis ou un verre en solo au bar, Distingo offre le cadre idéal pour se détendre et se faire plaisir.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Values Section */}
      <div className="bg-card py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="eyebrow text-gold">Nos Valeurs</p>
            <h2 className="text-foreground">
              Ce En Quoi Nous <span className="elegant-italic">Croyons</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-2xl md:text-3xl text-gold mb-4">Qualité</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Des ingrédients locaux et de saison, des fournisseurs de confiance, et une préparation méticuleuse.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <h3 className="text-2xl md:text-3xl text-gold mb-4">Authenticité</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Une expérience sincère, sans artifice, où chaque plat raconte une histoire.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-2xl md:text-3xl text-gold mb-4">Hospitalité</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Un accueil chaleureux où chaque client est traité comme un invité de marque.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
