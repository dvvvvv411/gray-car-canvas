import { useState, useEffect, useRef, useCallback } from 'react';

// Logo images
const logoLight = "/lovable-uploads/cbe16bd5-177a-4d01-8871-3d4c9d25f5e4.png"; // Orange "Car" logo for light backgrounds
const logoDark = "/lovable-uploads/420b0aad-1aa9-446d-8d2a-4fe76b5ccb68.png"; // CarLogix logo for dark backgrounds

const Logo = () => {
  const [logoType, setLogoType] = useState<'light' | 'dark'>('dark');
  const logoRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Debounced logo type update for performance
  const debouncedSetLogoType = useCallback((type: 'light' | 'dark') => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setLogoType(type);
    }, 50);
  }, []);

  useEffect(() => {
    // Preload images for smoother transitions
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };
    preloadImage(logoLight);
    preloadImage(logoDark);

    const logoElement = logoRef.current;
    if (!logoElement) return;

    // Find the currently intersecting section and determine logo type
    const updateLogoFromIntersection = (entries: IntersectionObserverEntry[]) => {
      // Find the section with highest intersection ratio
      let maxIntersection = 0;
      let currentSection: Element | null = null;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxIntersection) {
          maxIntersection = entry.intersectionRatio;
          currentSection = entry.target;
        }
      });

      if (currentSection) {
        const logoTypeAttr = currentSection.getAttribute('data-logo-type');
        if (logoTypeAttr === 'light' || logoTypeAttr === 'dark') {
          debouncedSetLogoType(logoTypeAttr);
        }
      }
    };

    // Primary intersection observer for sections with data-logo-type
    const observer = new IntersectionObserver(
      updateLogoFromIntersection,
      {
        root: null,
        rootMargin: '-10px 0px -10px 0px', // Small margin to ensure we're well within the section
        threshold: [0, 0.1, 0.5, 1] // Multiple thresholds for better detection
      }
    );

    // Observe all sections with data-logo-type attribute
    const sectionsWithLogoType = document.querySelectorAll('[data-logo-type]');
    sectionsWithLogoType.forEach((section) => {
      observer.observe(section);
    });

    // Fallback: scroll position based detection
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const headerHeight = 64; // Approximate header height
      const logoPosition = scrollY + headerHeight + 20; // Logo position relative to document

      // Find which section the logo is currently over
      const sections = document.querySelectorAll('[data-logo-type]');
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const sectionTop = scrollY + rect.top;
        const sectionBottom = sectionTop + rect.height;

        if (logoPosition >= sectionTop && logoPosition <= sectionBottom) {
          const logoTypeAttr = section.getAttribute('data-logo-type');
          if (logoTypeAttr === 'light' || logoTypeAttr === 'dark') {
            debouncedSetLogoType(logoTypeAttr);
            break;
          }
        }
      }
    };

    // Initial logo type determination
    handleScroll();

    // Add scroll listener as fallback
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [debouncedSetLogoType]);

  return (
    <div ref={logoRef} className="flex-shrink-0">
      <img 
        src={logoType === 'light' ? logoLight : logoDark}
        alt="CarLogix Logo"
        className="h-8 w-auto transition-all duration-300 ease-in-out"
        loading="eager"
        onError={(e) => {
          console.warn('Logo failed to load:', e.currentTarget.src);
          // Fallback to the other logo if one fails
          e.currentTarget.src = logoType === 'light' ? logoDark : logoLight;
        }}
      />
    </div>
  );
};

export default Logo;