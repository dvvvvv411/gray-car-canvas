import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MessageCircle } from "lucide-react";

export const KontaktForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
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
      title: "Anfrage erfolgreich gesendet!",
      description: "Vielen Dank für Ihre Kontaktaufnahme. Wir melden uns innerhalb von 2 Stunden bei Ihnen.",
    });
    
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      phone: "",
      email: "",
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
    <div className="bg-background rounded-2xl p-8 shadow-lg border border-border">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-4">
          <MessageCircle className="w-4 h-4 text-primary" />
          <span className="text-primary font-medium text-sm">KONTAKTANFRAGE</span>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Lassen Sie uns sprechen
        </h3>
        <p className="text-muted-foreground">
          Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Persönliche Daten - 2 Spalten */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Persönliche Daten
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Vorname *</label>
                <Input
                  placeholder="Max"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                  className="h-12 border-2 focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Nachname *</label>
                <Input
                  placeholder="Mustermann"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                  className="h-12 border-2 focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Unternehmen</label>
              <Input
                placeholder="Ihr Unternehmen (optional)"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                className="h-12 border-2 focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                Telefonnummer *
              </label>
              <Input
                type="tel"
                placeholder="+49 40 1234567"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
                className="h-12 border-2 focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                E-Mail Adresse *
              </label>
              <Input
                type="email"
                placeholder="max.mustermann@beispiel.de"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="h-12 border-2 focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Anfrage Details - 2. Spalte */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Ihre Anfrage
            </h4>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Betreff *</label>
              <Input
                placeholder="Worum geht es in Ihrer Anfrage?"
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                required
                className="h-12 border-2 focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Service-Art</label>
              <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                <SelectTrigger className="h-12 border-2 focus:border-primary transition-colors">
                  <SelectValue placeholder="Welcher Service interessiert Sie?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pkw-transfer">PKW-Überführung</SelectItem>
                  <SelectItem value="lkw-transfer">LKW-Überführung</SelectItem>
                  <SelectItem value="express-service">Express-Service</SelectItem>
                  <SelectItem value="fremdachse">Überführung auf Fremdachse</SelectItem>
                  <SelectItem value="hol-bring">Hol- und Bringservice</SelectItem>
                  <SelectItem value="fuhrpark">Fuhrpark-Management</SelectItem>
                  <SelectItem value="platzlogistik">Platzlogistik</SelectItem>
                  <SelectItem value="beratung">Allgemeine Beratung</SelectItem>
                  <SelectItem value="other">Sonstiges</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Ihre Nachricht *</label>
              <Textarea
                placeholder="Beschreiben Sie uns Ihre Anfrage detailliert. Je mehr Informationen Sie uns geben, desto besser können wir Ihnen helfen..."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="min-h-32 resize-none border-2 focus:border-primary transition-colors"
                required
              />
            </div>

            {/* Zusätzliche Info Box */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <h5 className="text-sm font-semibold text-foreground mb-2">💡 Tipp für schnellere Bearbeitung</h5>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Geben Sie Start- und Zielort an</li>
                <li>• Fahrzeugtyp und -anzahl</li>
                <li>• Gewünschter Zeitraum</li>
                <li>• Besondere Anforderungen</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Datenschutz Consent */}
        <div className="bg-muted/20 border-2 border-muted rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
              className="mt-1 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <div className="space-y-2">
              <label 
                htmlFor="consent" 
                className="text-sm font-medium leading-none cursor-pointer"
              >
                Datenschutzerklärung und Nutzungsbedingungen *
              </label>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Ich stimme der Verarbeitung meiner personenbezogenen Daten gemäß der{" "}
                <a href="#" className="text-primary hover:underline">Datenschutzerklärung</a> zu. 
                Meine Daten werden ausschließlich zur Bearbeitung meiner Anfrage verwendet und nicht an Dritte weitergegeben.
              </p>
            </div>
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="text-center pt-4">
          <Button 
            type="submit" 
            className="w-full lg:w-auto min-w-[200px] h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            size="lg"
          >
            <Send className="w-5 h-5 mr-2" />
            Anfrage senden
          </Button>
          
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Antwort binnen 2h</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Kostenlose Beratung</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Unverbindlich</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};