import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const premiumEase = [0.25, 0.4, 0.25, 1];

const testimonials = [
  {
    name: "Marie-Claude Dubois",
    role: "Cliente Régulière",
    content: "Une expérience inoubliable à chaque visite. Le steak frites est tout simplement exceptionnel, et l'ambiance chaleureuse nous fait sentir comme à la maison.",
    rating: 5
  },
  {
    name: "Thomas Bergeron",
    role: "Critique Culinaire",
    content: "Distingo réussit ce que peu de restaurants osent: fusionner l'élégance gastronomique avec le confort d'un pub. Un incontournable de Montréal.",
    rating: 5
  },
  {
    name: "Isabelle Roy",
    role: "Amatrice de Vin",
    content: "La carte des vins est impressionnante et les recommandations du sommelier sont toujours parfaites. Un vrai plaisir pour les papilles!",
    rating: 5
  },
  {
    name: "Alexandre Côté",
    role: "Organisateur d'Événements",
    content: "Nous avons organisé notre événement corporatif chez Distingo. Le service était impeccable et nos invités étaient enchantés. Hautement recommandé!",
    rating: 5
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: premiumEase
      }}
      className="bg-card/50 backdrop-blur-sm border border-border rounded-sm p-6 md:p-8 relative group hover:border-accent/30 transition-all duration-500"
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
        <Quote className="w-16 h-16 text-accent" />
      </div>

      {/* Rating */}
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Content */}
      <p className="text-foreground/90 text-lg leading-relaxed mb-6 relative z-10 elegant-italic">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
          <span className="text-accent font-serif text-xl">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-foreground font-medium">{testimonial.name}</p>
          <p className="text-muted-foreground text-sm">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
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
            Témoignages
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-foreground !text-4xl sm:!text-5xl md:!text-6xl lg:!text-6xl xl:!text-7xl"
          >
            Ce Que Nos Clients <span className="elegant-italic text-gold">Disent</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-muted-foreground text-lg mb-4">
            Rejoignez nos centaines de clients satisfaits
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-foreground font-semibold text-xl">5.0</span>
            <span className="text-muted-foreground">sur Google Reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
