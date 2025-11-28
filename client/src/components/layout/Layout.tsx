import Header from './Header';
import Footer from './Footer';
import HoursBanner from '@/components/ui/HoursBanner';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      <div className="fixed top-0 left-0 right-0 z-[60]">
        <HoursBanner />
        <Header />
      </div>
      <main className="flex-grow pt-[122px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
