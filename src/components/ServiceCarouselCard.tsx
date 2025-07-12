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
    <div className="relative group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:bg-white/10 hover:shadow-primary/20 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fade-in">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 ring-1 ring-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="relative lg:w-2/5 flex-shrink-0">
          <div className="h-64 lg:h-80 overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60"></div>
          </div>
          
          {/* Icon Badge */}
          <div className="absolute top-6 left-6 w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/30 shadow-lg">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-center">
          {/* Title */}
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-white/80 leading-relaxed mb-8 text-base lg:text-lg">
            {description}
          </p>

          {/* Features List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 text-sm lg:text-base group/feature"
              >
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 group-hover/feature:scale-125 transition-transform duration-300"></div>
                <span className="text-white/70 group-hover/feature:text-white transition-colors duration-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Animation Elements */}
      <div className="absolute top-1/2 right-8 w-1 h-16 bg-gradient-to-b from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-1/2"></div>
    </div>
  );
}