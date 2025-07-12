import { useState } from "react";
import { ChevronLeft, ChevronRight, Car, Truck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceData {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  icon: React.ComponentType<any>;
  features: string[];
}

interface ServicesCarouselProps {
  services: ServiceData[];
}

export const ServicesCarousel = ({ services }: ServicesCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentService = services[currentIndex];

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Main Card */}
      <Card className="relative overflow-hidden bg-black/75 backdrop-blur-md border border-white/20 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-white/8"></div>
        
        <CardContent className="p-0">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[300px]">
            {/* Image Side */}
            <div className="relative overflow-hidden">
              <img 
                src={currentService.image} 
                alt={currentService.title}
                className="w-full h-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent lg:hidden"></div>
              
              {/* Icon Badge */}
              <div className="absolute top-4 left-4">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                  <currentService.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
            </div>
            
            {/* Content Side */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 tracking-tight">
                {currentService.title}
              </h3>
              
              <p className="text-white/80 leading-relaxed mb-6 text-lg">
                {currentService.description}
              </p>
              
              {/* Features */}
              <div className="space-y-3 mb-8">
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-white/70 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <Button 
                size="lg"
                className="w-full lg:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:scale-105"
              >
                {currentService.buttonText}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center space-x-3 mt-8">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};