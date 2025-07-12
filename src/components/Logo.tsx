import { useState, useEffect, useRef } from 'react';

// Imported logo images
const logoLight = "/lovable-uploads/cbe16bd5-177a-4d01-8871-3d4c9d25f5e4.png"; // Orange "Car" logo for light backgrounds
const logoDark = "/lovable-uploads/420b0aad-1aa9-446d-8d2a-4fe76b5ccb68.png"; // CarLogix logo for dark backgrounds

const Logo = () => {
  const [isInLightSection, setIsInLightSection] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logoElement = logoRef.current;
    if (!logoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const computedStyle = window.getComputedStyle(element);
            const backgroundColor = computedStyle.backgroundColor;
            
            // Check if the background is light (white or light colors)
            // This checks for white, light gray, and other light backgrounds
            const isLight = backgroundColor === 'rgb(255, 255, 255)' || // white
                           backgroundColor === 'rgba(255, 255, 255, 1)' || // white with alpha
                           element.classList.contains('bg-white') ||
                           element.classList.contains('bg-gray-50') ||
                           element.classList.contains('bg-gray-100');
            
            setIsInLightSection(isLight);
          }
        });
      },
      {
        root: null,
        rootMargin: '-50px 0px -50px 0px', // Only trigger when logo is well inside the section
        threshold: 0.1
      }
    );

    // Observe all sections that could affect the logo
    const sections = document.querySelectorAll('section, header');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={logoRef} className="flex-shrink-0">
      <img 
        src={isInLightSection ? logoLight : logoDark}
        alt="CarLogix Logo"
        className="h-8 w-auto transition-all duration-300 ease-in-out"
        style={{
          filter: isInLightSection ? 'none' : 'none'
        }}
      />
    </div>
  );
};

export default Logo;