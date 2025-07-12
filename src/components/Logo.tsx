import { useState, useEffect } from 'react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  const [isLightBackground, setIsLightBackground] = useState(false);

  useEffect(() => {
    // Funktion zur Bestimmung der Hintergrundfarbe der aktuellen Sektion
    const detectBackgroundColor = () => {
      const scrollY = window.scrollY;
      const headerHeight = 80; // Header-Höhe berücksichtigen
      const currentScrollPosition = scrollY + headerHeight + 100; // Etwas unter dem Header

      // Alle Sektionen mit ihren Hintergründen definieren
      const sections = [
        { start: 0, end: 800, isLight: false }, // Hero section - dunkler Hintergrund
        { start: 800, end: 1600, isLight: true }, // Services section - heller Hintergrund (bg-white)
        { start: 1600, end: 2400, isLight: false }, // Service & Flexibility section - dunkler Hintergrund
        { start: 2400, end: 3000, isLight: true }, // Partners section - heller Hintergrund (bg-white)
        { start: 3000, end: Infinity, isLight: false }, // Footer - dunkler Hintergrund
      ];

      // Aktuelle Sektion basierend auf Scroll-Position finden
      const currentSection = sections.find(section => 
        currentScrollPosition >= section.start && currentScrollPosition < section.end
      );

      if (currentSection) {
        setIsLightBackground(currentSection.isLight);
      }
    };

    // Initial detection
    detectBackgroundColor();

    // Scroll-Event mit Throttling für bessere Performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          detectBackgroundColor();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <img 
        src="/lovable-uploads/86dfbf7e-a265-49a1-aea4-a102e38ffe81.png"
        alt="CarLogix Logo"
        className={`h-10 w-auto transition-opacity duration-500 ease-in-out ${
          isLightBackground ? 'opacity-0' : 'opacity-100'
        } ${className}`}
      />
      <img 
        src="/lovable-uploads/b6fbf84f-f315-49f7-b766-346ab714f8be.png"
        alt="Car Logo"
        className={`h-10 w-auto absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${
          isLightBackground ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      />
    </div>
  );
};

export default Logo;