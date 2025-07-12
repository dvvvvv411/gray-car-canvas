import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  icon?: React.ComponentType<any>;
  features?: string[];
  onButtonClick?: () => void;
}

export const ServiceCard = ({ 
  title, 
  description, 
  image, 
  buttonText, 
  icon: Icon,
  features = [],
  onButtonClick 
}: ServiceCardProps) => {
  return (
    <Card className="group relative h-full overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 border-2 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating Icon */}
      <div className="absolute top-4 right-4 z-10">
        <div className="w-12 h-12 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
          {Icon && <Icon className="w-6 h-6 text-primary" />}
        </div>
      </div>
      
      {/* Image with Overlay */}
      <div className="relative w-full h-52 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4 right-16">
          <h3 className="text-xl font-bold text-white mb-1 tracking-wide">
            {title}
          </h3>
          <div className="w-12 h-1 bg-primary rounded-full group-hover:w-20 transition-all duration-300"></div>
        </div>
      </div>
      
      <CardContent className="relative p-6 space-y-4">
        {/* Description */}
        <p className="text-muted-foreground leading-relaxed text-sm">
          {description}
        </p>
        
        {/* Features */}
        {features.length > 0 && (
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        )}
        
        {/* CTA Button */}
        <Button 
          onClick={onButtonClick}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-110 transition-transform duration-200 mt-6"
          size="lg"
        >
          {buttonText}
        </Button>
      </CardContent>
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-lg border-2 border-primary/20 animate-glow-pulse"></div>
      </div>
    </Card>
  );
};