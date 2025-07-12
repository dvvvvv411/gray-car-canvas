import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    interest: "",
    experience: "",
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
      description: "Vielen Dank für Ihre Anfrage. Wir melden uns zeitnah bei Ihnen.",
    });
    
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      interest: "",
      experience: "",
      message: "",
      consent: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name & Phone Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Name *</label>
          <Input
            placeholder="Ihr vollständiger Name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            required
            className="h-12"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Telefonnummer</label>
          <Input
            type="tel"
            placeholder="Ihre Telefonnummer"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="h-12"
          />
        </div>
      </div>

      {/* Email & Subject Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">E-Mail *</label>
          <Input
            type="email"
            placeholder="ihre.email@beispiel.de"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
            className="h-12"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Betreff</label>
          <Input
            placeholder="Betreff Ihrer Anfrage"
            value={formData.subject}
            onChange={(e) => handleInputChange("subject", e.target.value)}
            className="h-12"
          />
        </div>
      </div>

      {/* Interest Area */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Interessensbereich</label>
        <Select value={formData.interest} onValueChange={(value) => handleInputChange("interest", value)}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Wählen Sie Ihren Interessensbereich" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="driver">Fahrer (PKW/LKW)</SelectItem>
            <SelectItem value="office">Büro/Administration</SelectItem>
            <SelectItem value="dispatch">Disposition</SelectItem>
            <SelectItem value="customer-service">Kundenbetreuung</SelectItem>
            <SelectItem value="technical">Technischer Bereich</SelectItem>
            <SelectItem value="management">Management</SelectItem>
            <SelectItem value="other">Sonstiges</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Experience */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Berufserfahrung</label>
        <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Ihre Berufserfahrung in diesem Bereich" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">Berufseinsteiger</SelectItem>
            <SelectItem value="1-2">1-2 Jahre</SelectItem>
            <SelectItem value="3-5">3-5 Jahre</SelectItem>
            <SelectItem value="5-10">5-10 Jahre</SelectItem>
            <SelectItem value="10+">Über 10 Jahre</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Nachricht *</label>
        <Textarea
          placeholder="Erzählen Sie uns von sich, Ihren Qualifikationen und warum Sie bei TransferCar arbeiten möchten..."
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          className="min-h-32 resize-none"
          required
        />
      </div>

      {/* Additional Info */}
      <div className="bg-muted/50 p-4 rounded-lg space-y-3">
        <h4 className="font-medium text-foreground">Wichtige Informationen</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>• Für Fahrer-Positionen: Bitte erwähnen Sie Ihre Führerscheinklassen</p>
          <p>• Verfügbarkeit: Wann können Sie frühestens anfangen?</p>
          <p>• Arbeitszeit: Vollzeit, Teilzeit oder auf Abruf?</p>
        </div>
      </div>
      
      {/* Consent */}
      <div className="flex items-start space-x-3 bg-background border border-border rounded-lg p-4">
        <Checkbox
          id="consent"
          checked={formData.consent}
          onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
          className="mt-1"
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
        className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base"
        size="lg"
      >
        Bewerbung absenden
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Wir melden uns innerhalb von 2-3 Werktagen bei Ihnen zurück.
      </p>
    </form>
  );
};