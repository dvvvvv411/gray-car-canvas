import { Phone, Mail, MapPin, MessageSquare, Clock, HeadphonesIcon, Globe2, CheckCircle } from "lucide-react";
import { KontaktForm } from "@/components/KontaktForm";
import Logo from "@/components/Logo";

// Import images
import heroBgNew from "@/assets/hero-background-new.webp";

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-white/20 sticky top-0 z-50 backdrop-blur-sm bg-black/10" data-logo-type="dark">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Logo />
            
            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-white hover:text-primary transition-colors font-medium">STARTSEITE</a>
              <a href="/unternehmen" className="text-white hover:text-primary transition-colors font-medium">UNTERNEHMEN</a>
              <a href="/dienstleistungen" className="text-white hover:text-primary transition-colors font-medium">DIENSTLEISTUNGEN</a>
              <a href="/karriere" className="text-white hover:text-primary transition-colors font-medium">KARRIERE</a>
              <a href="/geschaeftskunden" className="text-white hover:text-primary transition-colors font-medium">GESCHÄFTSKUNDEN</a>
              <a href="#" className="text-white hover:text-primary transition-colors font-medium">AKTUELLES</a>
              <a href="/kontakt" className="text-primary font-medium">KONTAKT</a>
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
        data-logo-type="dark"
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
              <em>KONTAKT & <span className="text-primary" style={{ textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.5)' }}>BERATUNG</span></em>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto" style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>
              Wir sind für Sie da - 24/7 erreichbar für alle Ihre Fragen rund um Fahrzeugüberführungen
            </p>
          </div>
        </div>
      </section>

      {/* Contact Header Section */}
      <section className="bg-background py-16 px-4" data-logo-type="light">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            WIR SIND FÜR SIE DA
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Haben Sie Fragen zu unseren Dienstleistungen oder benötigen Sie ein individuelles Angebot? 
            Unser erfahrenes Team steht Ihnen gerne zur Verfügung.
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="bg-muted/30 py-16 px-4" data-logo-type="light">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Telefon */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-border text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Telefon</h3>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-primary">040 5131580</p>
                <p className="text-muted-foreground">24/7 Hotline</p>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">Sofortige Beratung</span>
                </div>
              </div>
            </div>

            {/* E-Mail */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-border text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">E-Mail</h3>
              <div className="space-y-2">
                <p className="text-lg font-medium text-primary">info@transfercar.de</p>
                <p className="text-muted-foreground">Schnelle Antwort garantiert</p>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">Antwort binnen 2h</span>
                </div>
              </div>
            </div>

            {/* Adresse */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-border text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Standort</h3>
              <div className="space-y-2">
                <p className="font-medium text-foreground">Oststr. 42 – 46</p>
                <p className="font-medium text-foreground">22844 Norderstedt</p>
                <p className="text-muted-foreground">Deutschland</p>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">Persönliche Beratung</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-background py-16 px-4" data-logo-type="light">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-4">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">KONTAKTFORMULAR</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Schreiben Sie <span className="text-primary">uns</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nutzen Sie unser Kontaktformular für detaillierte Anfragen. Wir melden uns schnellstmöglich bei Ihnen zurück.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-muted/20 rounded-2xl p-8 border border-border">
            <KontaktForm />
          </div>
        </div>
      </section>

      {/* Business Hours & Additional Info */}
      <section className="bg-muted/30 py-16 px-4" data-logo-type="light">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Opening Hours */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Öffnungszeiten</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Montag - Freitag:</span>
                  <span className="font-semibold text-foreground">8:00 - 18:00 Uhr</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Samstag:</span>
                  <span className="font-semibold text-foreground">9:00 - 16:00 Uhr</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Sonntag:</span>
                  <span className="font-semibold text-muted-foreground">Geschlossen</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Notfall-Hotline:</span>
                  <span className="font-semibold text-primary">24/7 verfügbar</span>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-6">
                <HeadphonesIcon className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Service-Hotline</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Kostenlose Beratung</p>
                    <p className="text-sm text-muted-foreground">Unverbindliche Erstberatung zu allen Dienstleistungen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Sofort-Angebote</p>
                    <p className="text-sm text-muted-foreground">Direkte Kostenvoranschläge am Telefon</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Express-Buchung</p>
                    <p className="text-sm text-muted-foreground">Kurzfristige Terminvereinbarung möglich</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Mehrsprachiger Support</p>
                    <p className="text-sm text-muted-foreground">Deutsch, Englisch, Polnisch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-16 px-4 overflow-hidden" data-logo-type="dark">
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
                <li><a href="#" className="text-white/80 hover:text-primary transition-colors">PKW-Überführung</a></li>
                <li><a href="#" className="text-white/80 hover:text-primary transition-colors">LKW-Überführung</a></li>
                <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Express-Service</a></li>
                <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Überführung auf Fremdachse</a></li>
                <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Hol- und Bringservice</a></li>
                <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Fuhrpark-Management</a></li>
                <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Platzlogistik</a></li>
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
                <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Aktuelles</a></li>
                <li><a href="#" className="text-white/80 hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-white/60 text-sm">
                © 2024 TransferCar GmbH. Alle Rechte vorbehalten.
              </div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-white/60 hover:text-primary transition-colors">Impressum</a>
                <a href="#" className="text-white/60 hover:text-primary transition-colors">Datenschutz</a>
                <a href="#" className="text-white/60 hover:text-primary transition-colors">AGB</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Kontakt;