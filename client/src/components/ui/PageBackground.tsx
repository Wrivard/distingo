import { ReactNode } from 'react';
import bgImage from '@assets/generated_images/upscale_cozy_gastropub_interior_at_night.png';

interface PageBackgroundProps {
  children: ReactNode;
  className?: string;
}

export default function PageBackground({ children, className = '' }: PageBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/95" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/98 via-primary/95 to-primary/98" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
