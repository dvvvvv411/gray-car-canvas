import { Phone, Mail, MapPin, Car, Truck, Zap, Check, Clock, Shield, ArrowLeftRight, Users, Star, Award, Globe2, TrendingUp, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import Logo from "@/components/Logo";

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
            <Logo />
            
            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-white hover:text-primary transition-colors font-medium">STARTSEITE</a>
              <a href="/unternehmen" className="text-primary font-medium">UNTERNEHMEN</a>
              <a href="/dienstleistungen" className="text-white hover:text-primary transition-colors font-medium">DIENSTLEISTUNGEN</a>
              <a href="/karriere" className="text-white hover:text-primary transition-colors font-medium">KARRIERE</a>
              <a href="/geschaeftskunden" className="text-white hover:text-primary transition-colors font-medium">GESCHÄFTSKUNDEN</a>
              <a href="/kontakt" className="text-white hover:text-primary transition-colors font-medium">KONTAKT</a>
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
              <em>ÜBER UNSER <span className="text-primary" style={{ textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.5)' }}>UNTERNEHMEN</span></em>
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
                src="/lovable-uploads/eb283bb3-4863-4839-acbf-940dd5ac8213.png" 
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
              <div className="text-4xl font-bold text-primary mb-2">3K+</div>
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



      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-16 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-glow-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-accent/8 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-primary/8 rounded-full blur-2xl animate-glow-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">TransferCar</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Seit 1994 Ihr zuverlässiger Partner für professionelle Fahrzeugüberführungen 
                in Deutschland und ganz Europa.
              </p>
              
              {/* Trust Indicators */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-white/80">Über 29 Jahre Erfahrung</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-white/80">3.000+ Überführungen/Jahr</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-white/80">Vollversichert & lizenziert</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-white/80">ISO 9001 zertifiziert</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-6">Unsere Services</h4>
              <ul className="space-y-3">
                <li><a href="/dienstleistungen" className="text-white/80 hover:text-primary transition-colors">PKW-Überführung</a></li>
                <li><a href="/dienstleistungen" className="text-white/80 hover:text-primary transition-colors">LKW-Überführung</a></li>
                <li><a href="/dienstleistungen" className="text-white/80 hover:text-primary transition-colors">Express-Service</a></li>
                <li><a href="/dienstleistungen" className="text-white/80 hover:text-primary transition-colors">Überführung auf Fremdachse</a></li>
                <li><a href="/dienstleistungen" className="text-white/80 hover:text-primary transition-colors">Hol- und Bringservice</a></li>
                <li><a href="/dienstleistungen" className="text-white/80 hover:text-primary transition-colors">Fuhrpark-Management</a></li>
                <li><a href="/dienstleistungen" className="text-white/80 hover:text-primary transition-colors">Platzlogistik</a></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-semibold text-white mb-6">Kontakt</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">040 5131580</div>
                    <div className="text-white/60 text-sm">24/7 Hotline</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white">info@transfercar.de</div>
                    <div className="text-white/60 text-sm">Schnelle Antwort garantiert</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white">Oststr. 42 – 46</div>
                    <div className="text-white">22844 Norderstedt</div>
                    <div className="text-white/60 text-sm">Deutschland</div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <h5 className="text-white font-medium mb-3">Öffnungszeiten</h5>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/80">Mo - Fr:</span>
                    <span className="text-white">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Sa:</span>
                    <span className="text-white">9:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Notfall:</span>
                    <span className="text-primary">24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links & Newsletter */}
            <div>
              <h4 className="font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3 mb-8">
                <li><a href="/unternehmen" className="text-white/80 hover:text-primary transition-colors">Über uns</a></li>
                <li><a href="/karriere" className="text-white/80 hover:text-primary transition-colors">Karriere</a></li>
                <li><a href="/geschaeftskunden" className="text-white/80 hover:text-primary transition-colors">Geschäftskunden</a></li>
                <li><a href="#" className="text-white/80 hover:text-primary transition-colors">FAQ</a></li>
              </ul>

              {/* Newsletter Signup */}
              <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
                <h5 className="text-white font-medium mb-3">Newsletter</h5>
                <p className="text-white/80 text-sm mb-4">
                  Bleiben Sie über unsere neuesten Services informiert.
                </p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Ihre E-Mail" 
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/60 text-sm focus:outline-none focus:border-primary"
                  />
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              
              {/* Legal Links */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
                <span className="text-white/60">© 2024 TransferCar GmbH</span>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">Impressum</a>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">Datenschutzerklärung</a>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">AGB</a>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">Haftungsausschluss</a>
              </div>

              {/* Social Media & Certifications */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-white/60 text-sm">Folgen Sie uns:</span>
                  <div className="flex gap-2">
                    <a href="#" className="w-8 h-8 bg-white/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 bg-white/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 bg-white/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Reference */}
            <div className="mt-6 text-center">
              <p className="text-white/60 text-sm">
                Standort Hamburg-Norderstedt • Bundesweit und europaweit im Einsatz
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Unternehmen;