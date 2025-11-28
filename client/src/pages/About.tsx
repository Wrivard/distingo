import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { ChefHat, Users, Award } from 'lucide-react';

// Reuse images
import interiorImage from '@assets/generated_images/upscale_cozy_gastropub_interior_at_night.png';
import tableImage from '@assets/generated_images/cozy_bistro_table_setting_detail.png';
import dishImage from '@assets/generated_images/gourmet_steak_frites_dish.png';

const premiumEase = [0.25, 0.4, 0.25, 1];

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary py-24 md:py-32 text-center overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: premiumEase }}
          >
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="eyebrow text-gold mb-4"
            >
              Depuis 2025
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-primary-foreground mb-6"
            >
              Notre Histoire
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto font-light"
            >
              Création de souvenirs à travers une cuisine exceptionnelle et une hospitalité chaleureuse.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 overflow-hidden">
        {/* Section 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: premiumEase }}
          >
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="eyebrow"
            >
              La Vision
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-foreground mb-8"
            >
              Le <span className="elegant-italic text-gold">Concept</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl leading-relaxed mb-6"
            >
              Distingo Resto Pub est né d'un désir simple : créer un lieu où l'élégance d'un bistro rencontre le confort d'un pub local.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg leading-relaxed text-muted-foreground mb-6"
            >
              Nous voulions un espace où vous pourriez déguster un repas gastronomique en t-shirt, ou une bière artisanale en costume. Un lieu sans prétention mais avec une attention méticuleuse aux détails.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg leading-relaxed text-muted-foreground"
            >
              Situé dans le cœur vibrant de Montréal, notre établissement reflète la double nature de la ville — sophistiquée mais accessible, classique mais moderne.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: premiumEase }}
            className="relative h-[500px] lg:h-[600px] rounded-sm overflow-hidden shadow-2xl"
          >
            <img 
              src={interiorImage} 
              alt="Intérieur" 
              className="w-full h-full object-cover transition-transform duration-[1.5s] hover:scale-105" 
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </motion.div>
        </div>

        {/* Decorative divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: premiumEase }}
          style={{ originX: 0.5 }}
          className="divider-gold mb-32" 
        />

        {/* Section 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: premiumEase }}
            className="order-2 lg:order-1 relative h-[500px] lg:h-[600px] rounded-sm overflow-hidden shadow-2xl"
          >
            <img 
              src={tableImage} 
              alt="Mise en table" 
              className="w-full h-full object-cover transition-transform duration-[1.5s] hover:scale-105" 
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="order-1 lg:order-2"
          >
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="eyebrow"
            >
              L'Expérience
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-foreground mb-8"
            >
              L'<span className="elegant-italic text-gold">Atmosphère</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl leading-relaxed mb-6"
            >
              Entrez et laissez le bruit de la ville derrière vous. Notre intérieur présente du bois récupéré, des banquettes en cuir souple et un éclairage ambré chaleureux.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg leading-relaxed text-muted-foreground mb-6"
            >
              Chaque détail a été pensé pour créer une ambiance intime et confortable, où les conversations coulent aussi facilement que nos cocktails artisanaux.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg leading-relaxed text-muted-foreground"
            >
              Que vous soyez ici pour un dîner romantique, une rencontre décontractée entre amis ou un verre en solo au bar, Distingo offre le cadre idéal pour se détendre et se faire plaisir.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-primary py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="eyebrow text-gold"
            >
              Notre Équipe
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-primary-foreground !text-4xl sm:!text-5xl md:!text-6xl lg:!text-6xl xl:!text-7xl"
            >
              Les <span className="elegant-italic">Artisans</span> de Votre Expérience
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {[
              {
                icon: ChefHat,
                name: "Chef Marc Tremblay",
                role: "Chef Exécutif",
                bio: "Avec 15 ans d'expérience dans les cuisines montréalaises les plus renommées, Marc apporte sa passion pour les produits locaux et les techniques modernes.",
                image: dishImage
              },
              {
                icon: Users,
                name: "Sophie Beauregard",
                role: "Directrice Générale",
                bio: "L'architecte de l'expérience Distingo, Sophie veille à ce que chaque détail reflète notre engagement envers l'excellence et l'authenticité.",
                image: interiorImage
              },
              {
                icon: Award,
                name: "Julien Moreau",
                role: "Sommelier & Mixologue",
                bio: "Expert en accords mets-vins et créateur de cocktails signatures, Julien transforme chaque verre en une expérience mémorable.",
                image: tableImage
              }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-background/10 backdrop-blur-sm border border-white/10 rounded-sm overflow-hidden group hover:border-accent/30 transition-all duration-500"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-accent/20 backdrop-blur-sm p-3 rounded-full border border-accent/30">
                    <member.icon className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-primary-foreground mb-1">{member.name}</h3>
                  <p className="text-accent text-sm uppercase tracking-wider font-semibold mb-4">{member.role}</p>
                  <p className="text-primary-foreground/70 leading-relaxed text-base">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-card py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="eyebrow text-gold"
            >
              Nos Valeurs
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-foreground"
            >
              Ce En Quoi Nous <span className="elegant-italic">Croyons</span>
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { title: "Qualité", desc: "Des ingrédients locaux et de saison, des fournisseurs de confiance, et une préparation méticuleuse." },
              { title: "Authenticité", desc: "Une expérience sincère, sans artifice, où chaque plat raconte une histoire." },
              { title: "Hospitalité", desc: "Un accueil chaleureux où chaque client est traité comme un invité de marque." },
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <h3 className="text-2xl md:text-3xl text-gold mb-4">{value.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
