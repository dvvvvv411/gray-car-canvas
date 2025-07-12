import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceCarouselItem {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  icon: React.ComponentType<any>;
  features: string[];
}

interface ServiceCarouselProps {
  services: ServiceCarouselItem[];
}

export const ServiceCarousel = ({ services }: ServiceCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextService = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevService = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const currentService = services[currentIndex];
  const Icon = currentService.icon;

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mb-8">
        <Button
          variant="outline"
          size="icon"
          onClick={prevService}
          className="bg-black/80 border-white/20 text-white hover:bg-black/60 hover:border-primary/50 transition-all duration-300"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        {/* Service Indicators */}
        <div className="flex space-x-3">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white shadow-md'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextService}
          className="bg-black/80 border-white/20 text-white hover:bg-black/60 hover:border-primary/50 transition-all duration-300"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Service Card */}
      <Card className="relative overflow-hidden bg-black/90 border-white/10 backdrop-blur-sm">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50"></div>
        
        {/* Floating Icon */}
        <div className="absolute top-6 right-6 z-10">
          <div className="w-16 h-16 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/30">
            <Icon className="w-8 h-8 text-primary" />
          </div>
        </div>
        
        {/* Image Section */}
        <div className="relative w-full h-72 md:h-80 overflow-hidden">
          <img 
            src={currentService.image} 
            alt={currentService.title}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          
          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-24">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-wide">
              {currentService.title}
            </h3>
            <div className="w-16 h-1.5 bg-primary rounded-full"></div>
          </div>
        </div>
        
        <CardContent className="relative p-8 space-y-6 bg-black/95">
          {/* Description */}
          <p className="text-white/90 leading-relaxed text-lg">
            {currentService.description}
          </p>
          
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-4">
            {currentService.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-sm bg-white/5 rounded-lg p-3 border border-white/10">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-white/80">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              size="lg"
            >
              {currentService.buttonText}
            </Button>
          </div>
        </CardContent>
        
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-lg border border-primary/20 pointer-events-none"></div>
      </Card>
    </div>
  );
};