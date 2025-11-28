import { motion } from 'framer-motion';
import { useState } from 'react';

// Import images
import img1 from '@assets/generated_images/upscale_cozy_gastropub_interior_at_night.png';
import img2 from '@assets/generated_images/gourmet_steak_frites_dish.png';
import img3 from '@assets/generated_images/signature_craft_cocktail_in_crystal_glass.png';
import img4 from '@assets/generated_images/cozy_bistro_table_setting_detail.png';

const premiumEase = [0.25, 0.4, 0.25, 1];

type GalleryImage = {
  src: string;
  alt: string;
  height?: 'short' | 'medium' | 'tall'; // For varied heights
};

const galleryImages: GalleryImage[] = [
  { src: img1, alt: 'Ambiance Intérieure', height: 'medium' },
  { src: img2, alt: 'Plat Signature', height: 'tall' },
  { src: img3, alt: 'Cocktail Artisanal', height: 'short' },
  { src: img4, alt: 'Détail de Table', height: 'medium' },
  { src: img1, alt: 'Bar', height: 'tall' },
  { src: img3, alt: 'Cuisine', height: 'short' },
  { src: img2, alt: 'Détail Culinaire', height: 'medium' },
  { src: img4, alt: 'Ambiance', height: 'short' },
];

function GalleryItem({ image, index }: { image: GalleryImage; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  const heightClasses = {
    short: 'h-[200px] md:h-[240px]',
    medium: 'h-[280px] md:h-[320px]',
    tall: 'h-[360px] md:h-[420px]'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: premiumEase
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-sm group cursor-pointer mb-2 md:mb-3 break-inside-avoid ${
        heightClasses[image.height || 'medium']
      }`}
    >
      {/* Image */}
      <motion.div
        className="w-full h-full"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.7, ease: premiumEase }}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Subtle overlay on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"
      >
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-accent text-xs uppercase tracking-wider font-semibold mb-1"
          >
            Distingo
          </motion.p>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="text-cream text-lg font-serif"
          >
            {image.alt}
          </motion.p>
        </div>
      </motion.div>

      {/* Subtle ring on hover */}
      <motion.div
        className="absolute inset-0 ring-1 ring-inset"
        animate={{
          ringColor: isHovered ? 'rgba(57, 74, 43, 0.3)' : 'rgba(255, 255, 255, 0.05)'
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}

export default function MasonryGallery() {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            Découvrez l'Ambiance
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-foreground !text-5xl sm:!text-6xl md:!text-7xl lg:!text-8xl xl:!text-9xl"
          >
            Notre <span className="elegant-italic text-gold">Univers</span>
          </motion.h2>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-3">
          {galleryImages.map((image, index) => (
            <GalleryItem key={index} image={image} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="/gallery"
            className="inline-flex items-center text-accent hover:text-cream transition-colors duration-300 text-base md:text-lg font-medium group"
          >
            Voir toute la galerie
            <motion.span
              className="ml-2"
              animate={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
