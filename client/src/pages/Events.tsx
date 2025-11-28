import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeUp, SlideIn } from '@/components/ui/animations';

// Types
type Event = {
  id: string;
  title: string;
  date: Date;
  time: string;
  description: string;
  location: string;
  capacity?: number;
  image?: string;
  category: 'music' | 'wine' | 'special' | 'private';
};

// Sample events data
const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Soirée Jazz Live',
    date: new Date(2014, 11, 15), // December 15, 2014
    time: '20h00',
    description: 'Profitez d\'une soirée intimiste avec notre trio de jazz résident. Musique live, cocktails signature et ambiance feutrée.',
    location: 'Salle principale',
    capacity: 50,
    category: 'music'
  },
  {
    id: '2',
    title: 'Dégustation de Vins',
    date: new Date(2014, 11, 22), // December 22, 2014
    time: '19h00',
    description: 'Découvrez notre sélection de vins du terroir québécois accompagnés de fromages artisanaux et charcuteries fines.',
    location: 'Bar à vin',
    capacity: 30,
    category: 'wine'
  },
  {
    id: '3',
    title: 'Réveillon du Nouvel An',
    date: new Date(2014, 11, 31), // December 31, 2014
    time: '21h00',
    description: 'Célébrez la nouvelle année avec un menu 5 services, champagne à minuit et DJ jusqu\'à 2h du matin.',
    location: 'Restaurant complet',
    capacity: 80,
    category: 'special'
  },
  {
    id: '4',
    title: 'Souper Privé - Corporatif',
    date: new Date(2026, 0, 18), // January 18, 2026
    time: '18h30',
    description: 'Événement corporatif privé. Contactez-nous pour réserver votre événement privé.',
    location: 'Salle privée',
    category: 'private'
  }
];

const categoryColors = {
  music: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
  wine: 'from-red-500/20 to-orange-500/20 border-red-500/30',
  special: 'from-accent/20 to-yellow-500/20 border-accent/50',
  private: 'from-green-500/20 to-teal-500/20 border-green-500/30'
};

function EventCard({ event, index }: { event: Event; index: number }) {
  const formattedDate = event.date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <FadeUp delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className={`bg-gradient-to-br ${categoryColors[event.category]} backdrop-blur-sm border rounded-lg p-6 cursor-pointer group relative overflow-hidden`}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]" />
        </div>

        <div className="relative z-10">
          {/* Date badge */}
          <div className="flex items-start justify-between mb-4">
            <div className="bg-accent/10 px-4 py-2 rounded-md border border-accent/30">
              <div className="text-sm text-accent font-medium">{formattedDate}</div>
              <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {event.time}
              </div>
            </div>
            {event.capacity && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>{event.capacity} places</span>
              </div>
            )}
          </div>

          {/* Event info */}
          <h3 className="text-2xl font-serif text-foreground mb-3 group-hover:text-cream transition-colors">
            {event.title}
          </h3>

          <p className="text-muted-foreground mb-4 leading-relaxed">
            {event.description}
          </p>

          <div className="flex items-center text-sm text-foreground">
            <MapPin className="w-4 h-4 mr-2" />
            {event.location}
          </div>
        </div>
      </motion.div>
    </FadeUp>
  );
}

function MiniCalendar({ events }: { events: Event[] }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

  const hasEvent = (day: number) => {
    return events.some(event => {
      return event.date.getDate() === day &&
        event.date.getMonth() === currentMonth.getMonth() &&
        event.date.getFullYear() === currentMonth.getFullYear();
    });
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const monthName = currentMonth.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });

  return (
    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
      {/* Calendar header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          className="p-2 hover:bg-accent/10 rounded-md transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <h3 className="text-xl font-serif text-foreground capitalize">{monthName}</h3>
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-accent/10 rounded-md transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Days of week */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((day, i) => (
          <div key={i} className="text-center text-xs text-muted-foreground font-medium">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-2">
        {/* Empty cells for days before month starts */}
        {Array.from({ length: startingDayOfWeek }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {/* Days of the month */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const isEventDay = hasEvent(day);

          return (
            <motion.div
              key={day}
              whileHover={{ scale: isEventDay ? 1.1 : 1 }}
              className={`
                aspect-square flex items-center justify-center rounded-md text-sm
                ${isEventDay
                  ? 'bg-accent text-accent-foreground font-semibold ring-2 ring-accent/50'
                  : 'text-muted-foreground hover:bg-muted/30'
                }
                transition-all cursor-pointer
              `}
            >
              {day}
            </motion.div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-6 pt-4 border-t border-border/50">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="w-3 h-3 rounded-sm bg-accent" />
          <span>Événements prévus</span>
        </div>
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <Layout>
      <div className="bg-background min-h-screen pb-24">
        {/* Hero Header */}
        <section className="bg-primary py-24 md:py-32 text-center overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="eyebrow text-accent mb-4 flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
                Événements
              </div>
              <h1 className="text-primary-foreground mb-6">
                Nos Événements
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto font-light">
                Découvrez nos soirées thématiques, dégustations et événements spéciaux tout au long de l'année.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 max-w-7xl -mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar sidebar */}
            <div className="lg:col-span-1">
              <SlideIn direction="left">
                <MiniCalendar events={upcomingEvents} />
              </SlideIn>
            </div>

            {/* Events list */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <FadeUp>
                  <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">
                    Événements à venir
                  </h2>
                </FadeUp>

                <div className="space-y-6">
                  {upcomingEvents.map((event, index) => (
                    <EventCard key={event.id} event={event} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <FadeUp delay={0.6}>
            <div className="mt-16 bg-gradient-to-r from-primary/50 to-accent/10 border border-accent/30 rounded-lg p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
                Envie d'organiser votre événement privé?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Notre équipe peut organiser des événements sur mesure pour vos célébrations, réunions d'affaires ou occasions spéciales.
              </p>
              <a
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-md font-medium transition-all hover:scale-105"
              >
                Nous contacter
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </Layout>
  );
}
