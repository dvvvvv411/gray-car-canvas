import { useState, useEffect } from 'react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  const [useWhiteLogo, setUseWhiteLogo] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            // Use black logo for light sections, white logo for dark sections
            const lightSections = ['services-section', 'contact-section'];
            setUseWhiteLogo(!lightSections.includes(sectionId));
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
        rootMargin: '-80px 0px' // Account for header height
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <img 
      src={useWhiteLogo ? "/lovable-uploads/a1638340-f7b5-4e2b-8800-e9928561dd9a.png" : "/lovable-uploads/bd9a4a58-5afa-479b-ac59-cf309a375c59.png"}
      alt="CarDelivery Logo"
      className={`h-10 w-auto transition-opacity duration-300 ${className}`}
    />
  );
};

export default Logo;