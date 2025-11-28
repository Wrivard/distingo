import { useState } from 'react';
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const premiumEase = [0.25, 0.4, 0.25, 1];

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const guestOptions = Array.from({ length: 12 }, (_, i) => i + 1);
  const timeSlots = [
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
    '20:00', '20:30', '21:00', '21:30', '22:00', '22:30'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: premiumEase }}
      className="bg-card/50 backdrop-blur-sm border border-border rounded-sm p-6 md:p-8"
    >
      <div className="mb-8">
        <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-3">Réserver une Table</h3>
        <p className="text-muted-foreground text-base">
          Remplissez le formulaire ci-dessous et nous vous contacterons pour confirmer votre réservation.
        </p>
      </div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="text-2xl font-serif text-foreground mb-2">Demande Envoyée!</h4>
          <p className="text-muted-foreground">
            Nous vous contacterons sous peu pour confirmer votre réservation.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                <User className="w-4 h-4 inline mr-2 text-accent" />
                Nom Complet *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-sm bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Jean Dupont"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                <Mail className="w-4 h-4 inline mr-2 text-accent" />
                Courriel *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-sm bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="jean@example.com"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              <Phone className="w-4 h-4 inline mr-2 text-accent" />
              Téléphone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-sm bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="(514) 123-4567"
            />
          </div>

          {/* Date, Time, Guests */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                <Calendar className="w-4 h-4 inline mr-2 text-accent" />
                Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 rounded-sm bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-foreground mb-2">
                <Clock className="w-4 h-4 inline mr-2 text-accent" />
                Heure *
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-sm bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Sélectionner</option>
                {timeSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-foreground mb-2">
                <Users className="w-4 h-4 inline mr-2 text-accent" />
                Personnes *
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-sm bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {guestOptions.map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'personne' : 'personnes'}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              <MessageSquare className="w-4 h-4 inline mr-2 text-accent" />
              Demandes Spéciales (optionnel)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-sm bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              placeholder="Allergies, occasion spéciale, préférences de siège, etc."
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 text-lg font-semibold transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Envoi en cours...
              </span>
            ) : (
              'Confirmer la Réservation'
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center mt-4">
            * En soumettant ce formulaire, vous acceptez d'être contacté concernant votre réservation.
          </p>
        </form>
      )}
    </motion.div>
  );
}
