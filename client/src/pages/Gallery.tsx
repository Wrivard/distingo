import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

// Reuse generated images
import img1 from '@assets/generated_images/upscale_cozy_gastropub_interior_at_night.png';
import img2 from '@assets/generated_images/gourmet_steak_frites_dish.png';
import img3 from '@assets/generated_images/signature_craft_cocktail_in_crystal_glass.png';
import img4 from '@assets/generated_images/cozy_bistro_table_setting_detail.png';

const premiumEase = [0.25, 0.4, 0.25, 1];

const galleryImages = [
  { src: img1, alt: 'Ambiance Intérieure', span: 'md:col-span-2 md:row-span-2' },
  { src: img2, alt: 'Steak Frites', span: 'col-span-1 row-span-1' },
  { src: img3, alt: 'Cocktail Signature', span: 'col-span-1 row-span-1' },
  { src: img4, alt: 'Détail de Table', span: 'col-span-1 row-span-1' },
  { src: img3, alt: 'Ambiance Bar', span: 'col-span-1 row-span-1' },
  { src: img2, alt: 'Détail Culinaire', span: 'col-span-1 row-span-1' },
];

export default function Gallery() {
  return (
    <Layout>
      <div className="bg-background min-h-screen pb-24">
        {/* Header */}
        <div className="bg-primary/0 py-24 md:py-32 text-center overflow-hidden">
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
                L'Atmosphère
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-primary-foreground mb-6"
              >
                Galerie
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto font-light"
              >
                Un aperçu de l'expérience Distingo — où chaque détail compte.
              </motion.p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[280px]">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: premiumEase 
                }}
                className={`relative overflow-hidden rounded-sm group cursor-pointer ${img.span}`}
              >
                <motion.img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: premiumEase }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <motion.p 
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      className="text-gold text-sm uppercase tracking-wider font-medium mb-1"
                    >
                      Distingo
                    </motion.p>
                    <p className="text-cream text-xl font-serif transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {img.alt}
                    </p>
                  </div>
                </div>
                {/* Subtle border overlay */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 group-hover:ring-accent/20 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
          
          {/* Bottom Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="text-center mt-16"
          >
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: premiumEase }}
              style={{ originX: 0.5 }}
              className="divider-gold" 
            />
            <p className="text-muted-foreground text-lg mt-8 max-w-xl mx-auto">
              Chaque visite est une nouvelle expérience. Venez créer vos propres souvenirs chez Distingo.
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
