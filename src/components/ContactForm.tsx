import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Loader2 } from "lucide-react";

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

  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Datenschutz",
        description: "Bitte akzeptieren Sie die Datenschutzbestimmungen.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    setLoadingProgress(0);
    
    // Simulate loading with progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);
    
    // Wait for 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    setIsLoading(false);
    setShowSuccessDialog(true);
    
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

  // Auto-close dialog after 3 seconds
  useEffect(() => {
    if (showSuccessDialog) {
      const timer = setTimeout(() => {
        setShowSuccessDialog(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessDialog]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name & Phone Row */}
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
          <label className="text-sm font-medium text-foreground">Telefonnummer</label>
          <Input
            type="tel"
            placeholder="Ihre Telefonnummer"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="h-10"
          />
        </div>
      </div>

      {/* Email & Subject Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
        <div className="space-y-1">
          <label className="text-sm font-medium text-foreground">Betreff</label>
          <Input
            placeholder="Betreff Ihrer Anfrage"
            value={formData.subject}
            onChange={(e) => handleInputChange("subject", e.target.value)}
            className="h-10"
          />
        </div>
      </div>

      {/* Interest Area */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Interessensbereich</label>
        <Select value={formData.interest} onValueChange={(value) => handleInputChange("interest", value)}>
          <SelectTrigger className="h-10">
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

      {/* Message */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Nachricht *</label>
        <Textarea
          placeholder="Erzählen Sie uns von sich, Ihren Qualifikationen und warum Sie bei TransferCar arbeiten möchten..."
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
      
      {/* Loading Progress */}
      {isLoading && (
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            Bewerbung wird versendet...
          </div>
          <Progress value={loadingProgress} className="h-2" />
        </div>
      )}

      {/* Submit Button */}
      <Button 
        type="submit" 
        disabled={isLoading}
        className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold disabled:opacity-50"
        size="lg"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Wird gesendet...
          </>
        ) : (
          "Bewerbung absenden"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Wir melden uns innerhalb von 2-3 Werktagen bei Ihnen zurück.
      </p>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <DialogTitle className="text-xl font-semibold">Bewerbung erfolgreich versendet!</DialogTitle>
            <DialogDescription className="text-center text-muted-foreground">
              Vielen Dank für Ihre Bewerbung. Wir haben Ihre Unterlagen erhalten und melden uns innerhalb von 2-3 Werktagen bei Ihnen zurück.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </form>
  );
};