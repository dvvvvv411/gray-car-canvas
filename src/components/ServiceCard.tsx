import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export const ServiceCard = ({ title, description, image, buttonText, onButtonClick }: ServiceCardProps) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="w-full h-48 overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl mb-3 text-primary">{title}</CardTitle>
        <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </CardDescription>
        <Button 
          onClick={onButtonClick}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};