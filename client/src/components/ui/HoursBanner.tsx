import { useState, useEffect } from 'react';
import { Clock, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const hours = {
  0: { open: '17:00', close: '23:00' }, // Sunday
  1: { open: '16:00', close: '23:00' }, // Monday
  2: { open: '16:00', close: '23:00' }, // Tuesday
  3: { open: '16:00', close: '23:00' }, // Wednesday
  4: { open: '16:00', close: '01:00' }, // Thursday
  5: { open: '16:00', close: '01:00' }, // Friday
  6: { open: '17:00', close: '02:00' }, // Saturday
};

function isOpen() {
  const now = new Date();
  const day = now.getDay() as keyof typeof hours;
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTime = currentHour * 60 + currentMinute;

  const todayHours = hours[day];
  const [openHour, openMin] = todayHours.open.split(':').map(Number);
  const [closeHour, closeMin] = todayHours.close.split(':').map(Number);

  const openTime = openHour * 60 + openMin;
  let closeTime = closeHour * 60 + closeMin;

  // Handle closing after midnight
  if (closeHour < openHour) {
    closeTime += 24 * 60;
  }

  return currentTime >= openTime && currentTime < closeTime;
}

function getTodayHours() {
  const now = new Date();
  const day = now.getDay() as keyof typeof hours;
  return hours[day];
}

export default function HoursBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const todayHours = getTodayHours();

  useEffect(() => {
    setOpen(isOpen());
    // Update status every minute
    const interval = setInterval(() => {
      setOpen(isOpen());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-primary border-b border-border/20 py-2 relative z-40"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-6 flex-wrap">
              {/* Status */}
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${open ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                <span className={`text-sm font-medium ${open ? 'text-green-400' : 'text-red-400'}`}>
                  {open ? 'Ouvert' : 'Fermé'}
                </span>
              </div>

              {/* Today's Hours */}
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Clock className="w-4 h-4" />
                <span className="text-sm">
                  Aujourd'hui: {todayHours.open} - {todayHours.close}
                </span>
              </div>

              {/* Phone */}
              <a
                href="tel:+15145550123"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">(514) 555-0123</span>
              </a>
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors p-1"
              aria-label="Fermer la bannière"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
