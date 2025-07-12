import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const partners = [
  {
    name: "Sixt",
    logo: "/lovable-uploads/3839b6d8-bd29-404a-a66a-8e308fa284bf.png"
  },
  {
    name: "Hertz",
    logo: "/lovable-uploads/162d8566-b2c7-4579-86ff-dd802534037d.png"
  },
  {
    name: "Athletic Sport Sponsoring",
    logo: "/lovable-uploads/3614986f-2159-41bf-8601-71e8b75703c6.png"
  },
  {
    name: "ADAC",
    logo: "/lovable-uploads/22f19a9e-67fe-46bb-bd25-c3309dfb8905.png"
  },
  {
    name: "Dinnebier Gruppe",
    logo: "/lovable-uploads/2417a4f1-9f1e-4647-a54b-ccb7afe025aa.png"
  },
  {
    name: "Toyota Material Handling",
    logo: "/lovable-uploads/36ef3be7-5e0e-42e3-ba0b-e14e82faf60b.png"
  },
  {
    name: "Deutsche Leasing",
    logo: "/lovable-uploads/bd9a4a58-5afa-479b-ac59-cf309a375c59.png"
  },
  {
    name: "LeasePlan",
    logo: "/lovable-uploads/551462fd-be4d-49a0-a2f8-a6a69a85cbf0.png"
  },
  {
    name: "Riller & Schnauck",
    logo: "/lovable-uploads/0cd51e06-af95-4802-ba1e-e2abcba0c6af.png"
  },
  {
    name: "Scout24",
    logo: "/lovable-uploads/0c5699e6-2528-4e98-a618-cb610b523c8f.png"
  }
];

export function PartnersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, partners.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 px-4"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="h-24 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`object-contain ${
                    partner.name === "ADAC" ? "max-h-20 max-w-full" : "max-h-16 max-w-full"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Navigation Arrows */}
      {maxIndex > 0 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl group"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 group-hover:text-primary transition-colors duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl group"
          >
            <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-primary transition-colors duration-300" />
          </button>
        </>
      )}

      {/* Modern Dot Indicators */}
      <div className="flex justify-center space-x-3 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 h-3 bg-gradient-to-r from-primary to-accent rounded-full'
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full hover:scale-125'
            }`}
          />
        ))}
      </div>
    </div>
  );
}