import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Car, Truck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ServiceData {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
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

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, services.length]);

  const currentService = services[currentIndex];

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Main Card */}
      <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-16 w-1 h-1 bg-accent/40 rounded-full animate-ping"></div>
          <div className="absolute bottom-16 left-20 w-1.5 h-1.5 bg-primary/20 rounded-full animate-bounce"></div>
        </div>
        
        <CardContent className="p-0 relative z-10">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[400px]">
            {/* Image Side */}
            <div className="relative overflow-hidden order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
              <img 
                src={currentService.image} 
                alt={currentService.title}
                className="w-full h-full object-cover"
              />
              
              {/* Modern Icon Badge */}
              <div className="absolute top-6 left-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <currentService.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </div>
              </div>

              {/* Overlay removed to keep orange effect visible */}
            </div>
            
            {/* Content Side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2 bg-gradient-to-br from-white/50 to-white/30">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                Premium Service
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                {currentService.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-8 text-base lg:text-lg">
                {currentService.description}
              </p>
              
              {/* Modern Features List */}
              <div className="space-y-4 mb-8">
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${index * 100}ms` }}>
                    <div className="relative">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center shadow-md">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg opacity-20 blur-sm"></div>
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Modern CTA Button */}
              <div className="relative group/button">
                <Button 
                  size="lg"
                  className="relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 group-hover/button:scale-105 shadow-lg hover:shadow-xl border-0"
                  asChild
                >
                  <Link to={currentService.buttonLink}>
                    <span className="relative z-10 flex items-center gap-2">
                      {currentService.buttonText}
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover/button:translate-x-full transition-transform duration-1000"></div>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modern Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl group"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-primary transition-colors duration-300" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl group"
      >
        <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-primary transition-colors duration-300" />
      </button>

      {/* Modern Dot Indicators */}
      <div className="flex justify-center space-x-3 mt-8">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
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
};