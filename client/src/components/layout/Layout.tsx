import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'wouter';
import bgImage from '@assets/generated_images/upscale_cozy_gastropub_interior_at_night.png';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const isHomePage = location === '/';

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans relative">
      {/* Background Image for non-home pages */}
      {!isHomePage && (
        <div className="fixed inset-0 z-0">
          <img
            src={bgImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/95" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/98 via-primary/95 to-primary/98" />
        </div>
      )}

      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
