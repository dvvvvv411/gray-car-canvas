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
      src={useWhiteLogo ? "/lovable-uploads/86dfbf7e-a265-49a1-aea4-a102e38ffe81.png" : "/lovable-uploads/b6fbf84f-f315-49f7-b766-346ab714f8be.png"}
      alt="CarLogix Logo"
      className={`h-10 w-auto transition-opacity duration-300 ${className}`}
    />
  );
};

export default Logo;