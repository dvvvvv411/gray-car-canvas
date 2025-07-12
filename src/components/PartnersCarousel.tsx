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
    logo: "/lovable-uploads/a1638340-f7b5-4e2b-8800-e9928561dd9a.png"
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
    logo: "/lovable-uploads/2c6f2c62-48df-40fb-a8be-90dfbd35f607.png"
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
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 h-24 flex items-center justify-center hover:shadow-md transition-shadow">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {maxIndex > 0 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg border-gray-200 hover:bg-gray-50"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg border-gray-200 hover:bg-gray-50"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}