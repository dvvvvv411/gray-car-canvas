import { useState, useEffect, useRef } from 'react';

// Logo images
const logoLight = "/lovable-uploads/cbe16bd5-177a-4d01-8871-3d4c9d25f5e4.png"; // Orange "Car" logo for dark backgrounds
const logoDark = "/lovable-uploads/420b0aad-1aa9-446d-8d2a-4fe76b5ccb68.png"; // CarLogix logo for light backgrounds

// Define scroll zones with clear breakpoints
const SCROLL_ZONES = {
  HERO: { start: 0, end: 800, logoType: 'dark' as const },
  SERVICES: { start: 800, end: 2000, logoType: 'light' as const },
  CONTACT: { start: 2000, end: Infinity, logoType: 'dark' as const }
};

// Hysteresis buffer to prevent rapid switching at zone boundaries
const HYSTERESIS_BUFFER = 50;

const Logo = () => {
  const [logoType, setLogoType] = useState<'light' | 'dark'>('dark');
  const currentZoneRef = useRef<string>('HERO');
  const debounceTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Preload images for smoother transitions
    const preloadImages = () => {
      const img1 = new Image();
      const img2 = new Image();
      img1.src = logoLight;
      img2.src = logoDark;
    };
    preloadImages();

    const determineZone = (scrollY: number): { zone: string; logoType: 'light' | 'dark' } => {
      // Apply hysteresis based on current zone
      const currentZone = currentZoneRef.current;
      
      for (const [zoneName, zoneConfig] of Object.entries(SCROLL_ZONES)) {
        let { start, end } = zoneConfig;
        
        // Apply hysteresis buffer
        if (currentZone === zoneName) {
          // Expand current zone boundaries to prevent rapid switching
          start = Math.max(0, start - HYSTERESIS_BUFFER);
          end = end === Infinity ? Infinity : end + HYSTERESIS_BUFFER;
        }
        
        if (scrollY >= start && scrollY < end) {
          return { zone: zoneName, logoType: zoneConfig.logoType };
        }
      }
      
      // Fallback to hero zone
      return { zone: 'HERO', logoType: 'dark' };
    };

    const handleScroll = () => {
      // Clear any pending debounced calls
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }

      // Debounce the logo update
      debounceTimeoutRef.current = setTimeout(() => {
        const scrollY = window.scrollY;
        const { zone, logoType: newLogoType } = determineZone(scrollY);
        
        // Only update if zone actually changed
        if (zone !== currentZoneRef.current) {
          currentZoneRef.current = zone;
          setLogoType(newLogoType);
        }
      }, 100); // 100ms debounce
    };

    // Initial setup
    handleScroll();

    // Throttled scroll listener for better performance
    let scrollThrottleTimeout: NodeJS.Timeout | null = null;
    const throttledScrollHandler = () => {
      if (scrollThrottleTimeout) return;
      
      scrollThrottleTimeout = setTimeout(() => {
        handleScroll();
        scrollThrottleTimeout = null;
      }, 16); // ~60fps
    };

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      if (scrollThrottleTimeout) {
        clearTimeout(scrollThrottleTimeout);
      }
    };
  }, []);

  return (
    <div className="flex-shrink-0">
      <img 
        src={logoType === 'light' ? logoDark : logoLight}
        alt="CarLogix Logo"
        className="h-12 w-auto transition-all duration-300 ease-in-out"
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