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
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Distingo Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 md:bg-black/30 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-secondary font-sans uppercase tracking-[0.2em] mb-4 text-sm md:text-base">Est. 2025 • Montreal</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
              Distingo <br />
              <span className="italic text-white/90 font-light">Resto Pub</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Where rustic charm meets culinary elegance. Experience the perfect blend of cozy bistro vibes and upscale gastronomy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/menu">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground min-w-[180px] text-lg h-14">
                  View Menu
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary min-w-[180px] text-lg h-14">
                  Book a Table
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro / About Teaser */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] md:aspect-square rounded-lg overflow-hidden shadow-xl">
              <img 
                src={dishImage} 
                alt="Signature Dish" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-8 md:pl-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                A Modern Take on <br />
                <span className="text-secondary italic">Classic Comfort</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Located in the heart of Montreal, Distingo offers a sanctuary from the bustling city streets. We believe in the power of good food and great company. Our kitchen serves up elevated pub classics alongside innovative seasonal dishes, all prepared with locally sourced ingredients.
              </p>
              <Link href="/about">
                <a className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors border-b border-primary hover:border-secondary pb-1">
                  Our Story <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Highlights */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 border border-white/10 rounded-lg hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                <UtensilsCrossed className="w-6 h-6 text-secondary group-hover:text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Gourmet Kitchen</h3>
              <p className="text-primary-foreground/70 mb-6">
                From our signature steak frites to artisanal burgers, every dish is crafted with passion and precision.
              </p>
              <Link href="/menu">
                <a className="text-secondary uppercase tracking-wider text-sm font-semibold hover:text-white transition-colors">See Menu</a>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="p-8 border border-white/10 rounded-lg hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                <Wine className="w-6 h-6 text-secondary group-hover:text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Curated Drinks</h3>
              <p className="text-primary-foreground/70 mb-6">
                Explore our extensive wine list, local craft beers, and signature cocktails designed by expert mixologists.
              </p>
              <Link href="/menu">
                <a className="text-secondary uppercase tracking-wider text-sm font-semibold hover:text-white transition-colors">Drink List</a>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="p-8 border border-white/10 rounded-lg hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                <Music className="w-6 h-6 text-secondary group-hover:text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Cozy Atmosphere</h3>
              <p className="text-primary-foreground/70 mb-6">
                Warm lighting, comfortable seating, and a curated playlist create the perfect backdrop for your evening.
              </p>
              <Link href="/gallery">
                <a className="text-secondary uppercase tracking-wider text-sm font-semibold hover:text-white transition-colors">View Gallery</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Parallax-ish */}
      <section className="relative h-[50vh] overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 z-0">
          <img 
            src={drinkImage} 
            alt="Craft Cocktail" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center">
           <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Taste the Distinction</h2>
           <Link href="/contact">
             <Button size="lg" className="bg-white text-primary hover:bg-secondary hover:text-secondary-foreground border-none h-14 px-8 text-lg">
               Reserve Your Table
             </Button>
           </Link>
        </div>
      </section>
    </Layout>
  );
}
