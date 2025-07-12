import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export const KontaktForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    serviceType: "",
    message: "",
    consent: false
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Datenschutz",
        description: "Bitte akzeptieren Sie die Datenschutzbestimmungen.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Nachricht gesendet",
      description: "Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      serviceType: "",
      message: "",
      consent: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name & Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-sm font-medium text-foreground">Name *</label>
          <Input
            placeholder="Ihr vollständiger Name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            required
            className="h-10"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-foreground">E-Mail *</label>
          <Input
            type="email"
            placeholder="ihre.email@beispiel.de"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
            className="h-10"
          />
        </div>
      </div>

      {/* Phone & Company Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-sm font-medium text-foreground">Telefonnummer</label>
          <Input
            type="tel"
            placeholder="Ihre Telefonnummer"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="h-10"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-foreground">Unternehmen</label>
          <Input
            placeholder="Ihr Unternehmen (optional)"
            value={formData.company}
            onChange={(e) => handleInputChange("company", e.target.value)}
            className="h-10"
          />
        </div>
      </div>

      {/* Subject & Service Type Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-sm font-medium text-foreground">Betreff *</label>
          <Input
            placeholder="Betreff Ihrer Anfrage"
            value={formData.subject}
            onChange={(e) => handleInputChange("subject", e.target.value)}
            required
            className="h-10"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-foreground">Service-Bereich</label>
          <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
            <SelectTrigger className="h-10">
              <SelectValue placeholder="Wählen Sie einen Service-Bereich" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pkw-transport">PKW Transport</SelectItem>
              <SelectItem value="lkw-transport">LKW Transport</SelectItem>
              <SelectItem value="express-service">Express Service</SelectItem>
              <SelectItem value="general-inquiry">Allgemeine Anfrage</SelectItem>
              <SelectItem value="partnership">Partnerschaft</SelectItem>
              <SelectItem value="other">Sonstiges</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Nachricht *</label>
        <Textarea
          placeholder="Beschreiben Sie Ihre Anfrage oder teilen Sie uns mit, wie wir Ihnen helfen können..."
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          className="min-h-24 resize-none"
          required
        />
      </div>
      
      {/* Consent */}
      <div className="flex items-start space-x-2 bg-background border border-border rounded-lg p-3">
        <Checkbox
          id="consent"
          checked={formData.consent}
          onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
          className="mt-0.5"
        />
        <div className="space-y-1">
          <label 
            htmlFor="consent" 
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Datenschutzerklärung akzeptieren *
          </label>
          <p className="text-xs text-muted-foreground">
            Ich stimme der Verarbeitung meiner personenbezogenen Daten gemäß der Datenschutzerklärung zu.
          </p>
        </div>
      </div>
      
      {/* Submit Button */}
      <Button 
        type="submit" 
        className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        size="lg"
      >
        Nachricht senden
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
      </p>
    </form>
  );
};