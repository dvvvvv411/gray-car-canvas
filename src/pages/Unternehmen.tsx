import { Phone, Mail, MapPin, Car, Truck, Zap, Check, Clock, Shield, ArrowLeftRight, Users, Star, Award, Globe2, TrendingUp, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

// Import images
import heroBgNew from "@/assets/hero-background-new.webp";

const Unternehmen = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-white/20 sticky top-0 z-50 backdrop-blur-sm bg-black/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">CarDelivery</h1>
            </div>
            
            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-white hover:text-primary transition-colors font-medium">STARTSEITE</a>
              <a href="/unternehmen" className="text-primary font-medium">UNTERNEHMEN</a>
              <a href="#" className="text-white hover:text-primary transition-colors font-medium">DIENSTLEISTUNGEN</a>
              <a href="#" className="text-white hover:text-primary transition-colors font-medium">KARRIERE</a>
              <a href="#" className="text-white hover:text-primary transition-colors font-medium">GESCHÄFTSKUNDEN</a>
              <a href="#" className="text-white hover:text-primary transition-colors font-medium">AKTUELLES</a>
              <a href="#" className="text-white hover:text-primary transition-colors font-medium">KONTAKT</a>
            </nav>
            
            {/* Phone Number */}
            <div className="hidden md:flex items-center">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">
                <Phone className="w-4 h-4 inline mr-2" />
                040 5131580
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Half Size */}
      <section 
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden -mt-16 pt-16"
        style={{
          backgroundImage: `url(${heroBgNew})`
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Main overlay */}
          <div className="absolute inset-0 bg-black/80"></div>
          
          {/* Floating Orange Glow Orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-glow-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-primary/15 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
          {/* Background glow behind text */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/30 to-accent/20 rounded-3xl blur-2xl animate-glow-pulse"></div>
          
          <div className="relative z-10 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-4" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>
              <em>IHRE <span className="text-primary" style={{ textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.5)' }}>WAHL</span></em>
            </h1>
          </div>
        </div>
      </section>

      {/* Company Header Section */}
      <section className="bg-background py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            TRANSFERCAR – IHR EXPERTE FÜR FAHRZEUGÜBERFÜHRUNGEN
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
      </section>

      {/* Über uns Section */}
      <section className="bg-background py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-4">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">ÜBER UNS</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Seit 1994 <span className="text-primary">vertrauenswürdig</span>
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  TransferCar GmbH wurde 1994 gegründet und hat sich seitdem zu einem der führenden Unternehmen 
                  für Fahrzeugüberführungen in Deutschland und Europa entwickelt. Mit über 29 Jahren Erfahrung 
                  in der Branche haben wir uns einen Namen für Zuverlässigkeit, Effizienz und Kundenzufriedenheit gemacht.
                </p>
                <p>
                  Unser Unternehmen hat sich von einem kleinen lokalen Dienstleister zu einem deutschlandweit 
                  agierenden Marktführer entwickelt. Heute beschäftigen wir über 150 professionelle Fahrer 
                  und verfügen über eine moderne Fahrzeugflotte, die es uns ermöglicht, auch die anspruchsvollsten 
                  Transportaufgaben zu bewältigen.
                </p>
                <p>
                  Innovation und Tradition gehen bei uns Hand in Hand. Während wir auf bewährte Methoden 
                  und jahrzehntelange Erfahrung setzen, integrieren wir kontinuierlich neue Technologien 
                  und Prozesse, um unseren Service stetig zu verbessern.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/36ef3be7-5e0e-42e3-ba0b-e14e82faf60b.png" 
                alt="Professioneller Fahrer" 
                className="w-full h-auto rounded-2xl shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Zahlen Section */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-4">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">ZAHLEN & FAKTEN</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Unsere <span className="text-primary">Erfolgsgeschichte</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center bg-background rounded-2xl p-6 shadow-lg border border-border">
              <div className="text-4xl font-bold text-primary mb-2">29+</div>
              <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
            </div>
            <div className="text-center bg-background rounded-2xl p-6 shadow-lg border border-border">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Professionelle Fahrer</div>
            </div>
            <div className="text-center bg-background rounded-2xl p-6 shadow-lg border border-border">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Überführungen/Jahr</div>
            </div>
            <div className="text-center bg-background rounded-2xl p-6 shadow-lg border border-border">
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Kundenzufriedenheit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service-Philosophie Section */}
      <section className="bg-background py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-4">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">UNSERE PHILOSOPHIE</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Service & <span className="text-primary">Qualität</span> im Fokus
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-muted/20 rounded-2xl border border-border">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Sicherheit</h4>
              <p className="text-muted-foreground">
                Jeder Transport wird vollversichert durchgeführt. Unsere Fahrer sind speziell geschult 
                und verfügen über jahrelange Erfahrung im sicheren Transport von Fahrzeugen.
              </p>
            </div>
            
            <div className="text-center p-6 bg-muted/20 rounded-2xl border border-border">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Pünktlichkeit</h4>
              <p className="text-muted-foreground">
                Termine werden eingehalten. Durch intelligente Routenplanung und GPS-Tracking 
                können wir präzise Ankunftszeiten garantieren und Sie jederzeit informieren.
              </p>
            </div>
            
            <div className="text-center p-6 bg-muted/20 rounded-2xl border border-border">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Exzellenz</h4>
              <p className="text-muted-foreground">
                Höchste Qualitätsstandards in allen Bereichen. Von der ersten Anfrage bis zur 
                Übergabe des Fahrzeugs – wir setzen auf Perfektion in jedem Detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen Section */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-4">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">UNSERE LEISTUNGEN</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Umfassende <span className="text-primary">Transportlösungen</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-2xl shadow-lg border border-border">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">PKW-Überführung</h4>
              <p className="text-muted-foreground">
                Sichere und zuverlässige Überführung von Personenkraftwagen auf eigener Achse 
                mit GPS-Tracking und digitaler Dokumentation.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-2xl shadow-lg border border-border">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">LKW-Überführung</h4>
              <p className="text-muted-foreground">
                Professionelle Überführung von Nutzfahrzeugen und LKW durch speziell 
                geschulte Fahrer mit Schwertransport-Erfahrung.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-2xl shadow-lg border border-border">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <ArrowLeftRight className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Transport auf Fremdachse</h4>
              <p className="text-muted-foreground">
                Schonender Transport mit speziellen Transportern und Anhängern für 
                besonders wertvolle oder empfindliche Fahrzeuge.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-2xl shadow-lg border border-border">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Express-Service</h4>
              <p className="text-muted-foreground">
                Eilige Transporte mit garantierten Ankunftszeiten und prioritärer 
                Behandlung für zeitkritische Aufträge.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-2xl shadow-lg border border-border">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Globe2 className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Europaweite Transporte</h4>
              <p className="text-muted-foreground">
                Internationale Fahrzeugüberführungen in alle EU-Länder mit 
                erfahrenen Fahrern und allen notwendigen Genehmigungen.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-2xl shadow-lg border border-border">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Premium-Service</h4>
              <p className="text-muted-foreground">
                Exklusiver Service für Luxusfahrzeuge mit speziell geschulten Fahrern 
                und zusätzlichen Sicherheitsmaßnahmen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zusätzliche Services Section */}
      <section className="bg-background py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Zusätzliche <span className="text-primary">Services</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-xl border border-border">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h5 className="font-semibold text-foreground">24/7 Kundenservice</h5>
                  <p className="text-muted-foreground text-sm">Rund um die Uhr erreichbar für alle Ihre Fragen und Anliegen</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-xl border border-border">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h5 className="font-semibold text-foreground">Fahrzeugwäsche</h5>
                  <p className="text-muted-foreground text-sm">Professionelle Reinigung vor der Übergabe</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-xl border border-border">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h5 className="font-semibold text-foreground">Schadensfotos</h5>
                  <p className="text-muted-foreground text-sm">Dokumentation vor und nach dem Transport</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-xl border border-border">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h5 className="font-semibold text-foreground">Flexible Terminplanung</h5>
                  <p className="text-muted-foreground text-sm">Anpassung an Ihre individuellen Zeitpläne</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-xl border border-border">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h5 className="font-semibold text-foreground">Digitale Übergabe</h5>
                  <p className="text-muted-foreground text-sm">Elektronische Protokolle und Signaturen</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-xl border border-border">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h5 className="font-semibold text-foreground">Kurzzeitlagerung</h5>
                  <p className="text-muted-foreground text-sm">Sichere Zwischenlagerung bei Bedarf</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kunden & CTA Section */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Vertrauen Sie auf <span className="text-primary">29 Jahre Erfahrung</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Über 1.000 zufriedene Kunden vertrauen bereits auf unsere Expertise. 
              Werden auch Sie Teil unserer Erfolgsgeschichte.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CarDelivery</h3>
              <p className="text-gray-300 text-sm">
                Ihr vertrauensvoller Partner für Fahrzeugüberführungen seit 1994.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>040 5131580</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@cardelivery.de</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Hamburg, Deutschland</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>PKW-Überführung</div>
                <div>LKW-Überführung</div>
                <div>Express-Service</div>
                <div>Europa-Transport</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Unternehmen</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>Über uns</div>
                <div>Karriere</div>
                <div>Kontakt</div>
                <div>Impressum</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2024 CarDelivery GmbH. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Unternehmen;