import { useState, useEffect, useRef, useCallback } from 'react';

// Logo images
const logoLight = "/lovable-uploads/cbe16bd5-177a-4d01-8871-3d4c9d25f5e4.png"; // Orange "Car" logo for dark backgrounds
const logoDark = "/lovable-uploads/420b0aad-1aa9-446d-8d2a-4fe76b5ccb68.png"; // CarLogix logo for light backgrounds

const Logo = () => {
  const [logoType, setLogoType] = useState<'light' | 'dark'>('dark');
  const logoRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const lastLogoType = useRef<'light' | 'dark'>('dark');

  // More stable debounced logo type update
  const debouncedSetLogoType = useCallback((type: 'light' | 'dark') => {
    // Only update if the type actually changed
    if (lastLogoType.current === type) return;
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      lastLogoType.current = type;
      setLogoType(type);
    }, 150); // Increased debounce time for more stability
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

    // Find the section that the logo is most clearly within
    const updateLogoFromIntersection = (entries: IntersectionObserverEntry[]) => {
      // Filter for actually intersecting entries with meaningful intersection
      const intersectingEntries = entries.filter(entry => 
        entry.isIntersecting && entry.intersectionRatio > 0.3
      );

      if (intersectingEntries.length === 0) return;

      // Sort by intersection ratio and get the most intersecting section
      const mostIntersecting = intersectingEntries.reduce((prev, current) =>
        current.intersectionRatio > prev.intersectionRatio ? current : prev
      );

      const logoTypeAttr = mostIntersecting.target.getAttribute('data-logo-type');
      if (logoTypeAttr === 'light' || logoTypeAttr === 'dark') {
        debouncedSetLogoType(logoTypeAttr);
      }
    };

    // More stable intersection observer
    const observer = new IntersectionObserver(
      updateLogoFromIntersection,
      {
        root: null,
        rootMargin: '-20px 0px -20px 0px', // Larger margin to avoid edge cases
        threshold: [0.3, 0.7] // Only trigger when significantly inside section
      }
    );

    // Observe all sections with data-logo-type attribute
    const sectionsWithLogoType = document.querySelectorAll('[data-logo-type]');
    sectionsWithLogoType.forEach((section) => {
      observer.observe(section);
    });

    // Simplified scroll-based fallback (less aggressive)
    const handleScroll = () => {
      // Only run if intersection observer might have missed something
      const scrollY = window.scrollY;
      
      // Simple zone-based detection
      if (scrollY < window.innerHeight * 0.8) {
        // Still in hero area
        debouncedSetLogoType('dark');
      } else {
        // Let intersection observer handle the rest
        // Don't override with scroll logic beyond hero
      }
    };

    // Initial logo type - start in hero (dark)
    debouncedSetLogoType('dark');

    // Less frequent scroll listener
    let scrollTimeout: NodeJS.Timeout;
    const throttledScroll = () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        handleScroll();
        scrollTimeout = null as any;
      }, 200);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [debouncedSetLogoType]);

  return (
    <div ref={logoRef} className="flex-shrink-0">
      <img 
        src={logoType === 'light' ? logoDark : logoLight}
        alt="CarLogix Logo"
        className="h-8 w-auto transition-all duration-300 ease-in-out"
        loading="eager"
        onError={(e) => {
          console.warn('Logo failed to load:', e.currentTarget.src);
          // Fallback to the other logo if one fails
          e.currentTarget.src = logoType === 'light' ? logoLight : logoDark;
        }}
      />
    </div>
  );
};

export default Logo;