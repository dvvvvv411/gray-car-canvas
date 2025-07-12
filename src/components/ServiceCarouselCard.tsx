import { LucideIcon } from "lucide-react";

interface ServiceCarouselCardProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  features: string[];
}

export default function ServiceCarouselCard({
  title,
  description,
  image,
  icon: Icon,
  features
}: ServiceCarouselCardProps) {
  return (
    <div className="relative group bg-card/40 backdrop-blur-sm border border-border/30 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fade-in">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 ring-1 ring-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row min-h-[400px]">
        {/* Image Section */}
        <div className="relative lg:w-2/5 flex-shrink-0">
          <div className="aspect-[4/3] lg:h-full lg:min-h-[400px] overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-contain bg-muted/30 transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-60"></div>
          </div>
          
          {/* Icon Badge */}
          <div className="absolute top-6 left-6 bg-card/90 backdrop-blur-sm p-3 rounded-full border border-border/30 shadow-lg">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col">
          {/* Title */}
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-8 text-base lg:text-lg">
            {description}
          </p>

          {/* Features List */}
          <div className="space-y-4 mt-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 text-sm lg:text-base group/feature"
              >
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 group-hover/feature:scale-125 transition-transform duration-300"></div>
                <span className="text-muted-foreground group-hover/feature:text-foreground transition-colors duration-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Animation Elements */}
      <div className="absolute top-1/2 right-8 w-1 h-16 bg-gradient-to-b from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-1/2"></div>
    </div>
  );
}