import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight, UtensilsCrossed, Wine, Music } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MasonryGallery from '@/components/ui/MasonryGallery';
import Testimonials from '@/components/ui/Testimonials';
import SEO from '@/components/SEO';

// Import generated assets
import heroImage from '@assets/60e3fd14-123e-4568-a2fa-a1001c9d094e_1764287212509.jfif';
import dishImage from '@assets/generated_images/gourmet_steak_frites_dish.png';
import drinkImage from '@assets/generated_images/signature_craft_cocktail_in_crystal_glass.png';

// Premium easing curve
const premiumEase = [0.25, 0.4, 0.25, 1];

// Fade up animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: premiumEase }
  })
};

// Scale fade animation variant
const scaleFade = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay, ease: premiumEase }
  })
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <Layout>
      <SEO />
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <img 
            src={heroImage} 
            alt="Distingo Interior" 
            className="w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-background" />
        </motion.div>

        {/* Content */}
        <motion.div
          className="relative z-10 container mx-auto px-4 text-center max-w-5xl"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="mb-8"
          >
            <span className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-cream/90 text-sm tracking-[0.2em] uppercase font-medium">
              Montréal • Depuis 2025
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="text-cream mb-6 !text-7xl sm:!text-8xl md:!text-9xl lg:!text-[10rem] xl:!text-[12rem] !leading-[0.85]"
          >
            Distingo
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="mb-8"
          >
            <p className="elegant-italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gold/90 font-light tracking-wide">
              Resto • Pub • Expérience
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="max-w-3xl mx-auto mb-12"
          >
            <p className="text-lg md:text-xl lg:text-2xl text-cream/90 font-light leading-relaxed">
              L'art de recevoir rencontre la gastronomie raffinée dans une atmosphère chaleureuse et authentique
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.8}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <Link href="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-background min-w-[220px] text-base h-14 font-semibold tracking-wide transition-all duration-300 hover:scale-[1.05] shadow-xl">
                Réserver une Table
              </Button>
            </Link>
            <Link href="/menu">
              <Button size="lg" variant="outline" className="bg-white/5 backdrop-blur-sm border-2 border-white/40 text-cream hover:bg-white hover:text-background min-w-[220px] text-base h-14 font-semibold tracking-wide transition-all duration-300 hover:scale-[1.05]">
                Découvrir le Menu
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center pt-2"
          >
            <motion.div 
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-cream/60 rounded-full" 
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Intro / About Teaser */}
      <section className="py-24 md:py-36 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              variants={scaleFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
              className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl"
            >
              <img 
                src={dishImage} 
                alt="Plat Signature" 
                className="w-full h-full object-cover transition-transform duration-[1.5s] hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: premiumEase }}
              className="space-y-8"
            >
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="eyebrow"
              >
                Notre Philosophie
              </motion.p>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-foreground !text-3xl sm:!text-4xl md:!text-5xl lg:!text-5xl xl:!text-6xl"
              >
                Une Approche Moderne du{' '}
                <span className="elegant-italic text-gold">Confort Classique</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl leading-relaxed"
              >
                Situé au cœur de Montréal, Distingo offre un sanctuaire loin de l'agitation urbaine. Nous croyons au pouvoir de la bonne cuisine et de la bonne compagnie.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                Notre cuisine propose des classiques de pub élevés ainsi que des plats saisonniers innovants, tous préparés avec des ingrédients locaux soigneusement sélectionnés.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link href="/about">
                  <a className="inline-flex items-center text-gold font-medium hover:text-cream transition-colors duration-300 group text-lg mt-4">
                    Découvrir Notre Histoire 
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features / Highlights */}
      <section className="py-28 md:py-36 bg-primary overflow-hidden relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/20 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-5 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs tracking-[0.25em] uppercase font-semibold">
                L'Expérience Distingo
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-primary-foreground !text-4xl sm:!text-5xl md:!text-6xl lg:!text-7xl xl:!text-8xl !leading-[1.1] mb-6"
            >
              Ce Qui Nous <span className="elegant-italic text-gold">Distingue</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary-foreground/70 text-lg md:text-xl max-w-3xl mx-auto"
            >
              Trois piliers qui font de chaque visite une expérience mémorable
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: UtensilsCrossed,
                title: "Cuisine Gastronomique",
                desc: "De nos frites signature à nos burgers artisanaux, chaque plat est élaboré avec passion et précision.",
                link: "/menu",
                linkText: "Voir Menu",
                gradient: "from-gold/5 to-gold/0"
              },
              {
                icon: Wine,
                title: "Boissons Sélectionnées",
                desc: "Explorez notre vaste carte des vins, nos bières artisanales locales et nos cocktails signature.",
                link: "/menu",
                linkText: "Carte des Boissons",
                gradient: "from-gold/5 to-gold/0"
              },
              {
                icon: Music,
                title: "Atmosphère Chaleureuse",
                desc: "Un éclairage chaleureux, des sièges confortables et une ambiance soignée créent le cadre idéal.",
                link: "/gallery",
                linkText: "Voir Galerie",
                gradient: "from-gold/5 to-gold/0"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: premiumEase }}
                whileHover={{ y: -8 }}
                className={`relative p-10 lg:p-12 border border-white/10 rounded-lg bg-gradient-to-br ${item.gradient} backdrop-blur-sm hover:border-gold/30 transition-all duration-500 group overflow-hidden`}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-[100px] transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700" />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3, ease: premiumEase }}
                  className="relative w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center mb-8 group-hover:from-gold/30 group-hover:to-gold/10 transition-all duration-500"
                >
                  <item.icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl lg:text-3xl text-primary-foreground mb-5 font-serif font-semibold">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/70 text-base lg:text-lg leading-relaxed mb-8">
                  {item.desc}
                </p>

                {/* Link */}
                <Link href={item.link}>
                  <a className="inline-flex items-center gap-2 text-gold uppercase tracking-[0.15em] text-xs font-bold hover:text-cream hover:gap-3 transition-all duration-300 group/link">
                    {item.linkText}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <MasonryGallery />

      {/* Testimonials */}
      <Testimonials />

      {/* Featured Image / CTA */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: premiumEase }}
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
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="eyebrow text-gold mb-6"
            >
              Réservations
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-cream mb-10 !text-4xl sm:!text-5xl md:!text-6xl lg:!text-6xl xl:!text-7xl"
            >
              Goûtez à la <span className="elegant-italic">Distinction</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground h-16 px-12 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-[1.02]">
                  Réservez Votre Table
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
