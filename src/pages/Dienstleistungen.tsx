import { Phone, Mail, MapPin, Car, Truck, Zap, Check, Clock, Shield, ArrowLeftRight, Users, Star, Award, Globe2, TrendingUp, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import Logo from "@/components/Logo";

// Import images
import heroBgNew from "@/assets/hero-background-new.webp";

const Dienstleistungen = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-white/20 sticky top-0 z-50 backdrop-blur-sm bg-black/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Logo />
            
            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-white hover:text-primary transition-colors font-medium">STARTSEITE</a>
              <a href="/unternehmen" className="text-white hover:text-primary transition-colors font-medium">UNTERNEHMEN</a>
              <a href="/dienstleistungen" className="text-primary font-medium">DIENSTLEISTUNGEN</a>
              <a href="/karriere" className="text-white hover:text-primary transition-colors font-medium">KARRIERE</a>
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
              <em>UNSERE <span className="text-primary" style={{ textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.5)' }}>DIENSTLEISTUNGEN</span></em>
            </h1>
          </div>
        </div>
      </section>

      {/* Section 1 - UNSERE DIENSTLEISTUNGEN (Text only) */}
      <section className="bg-background py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-8">
              <Car className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">UNSER SERVICE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              UNSERE DIENSTLEISTUNGEN
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                Der Motor unserer Dienstleistungen sind unsere Fahrer. Ihnen vertrauen wir Ihre Fahrzeuge an – und Ihre wertvollen Kundenbeziehungen. Unser Ziel ist es, Ihren Kunden die Fahrzeuge vor Ort so zuvorkommend und gut instruiert zu übergeben, als täten Sie es selbst.
              </p>
              <p>
                Dabei stützen wir uns auf einen sorgfältig ausgewählten Fahrerpool von rund 250 Fahrern. Technisches Know-how, Verlässlichkeit und Verantwortungsgefühl, angenehmes Auftreten und Freude am Kundenkontakt – das sind die Eigenschaften, die wir von unseren Fahrern erwarten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - PKW-ÜBERFÜHRUNG */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-4">
                <Car className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">PKW SERVICE</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                PKW-ÜBERFÜHRUNG
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Als professioneller Anbieter für Fahrzeugüberführungen per Achse bieten wir Ihnen an, Ihre Fahraufträge schnell, kompetent und zuverlässig zu übernehmen. Logistische Herausforderungen spornen uns an, eine individuelle Anpassung an unsere Kunden und hohe Flexibilität zeichnen uns aus!
                </p>
                <p>
                  Wir sind immer für Sie erreichbar! Ihr persönlicher Kundenbetreuer ist werktags von 08:00 bis 17:00 Uhr für Sie da. Außerhalb dieser Zeiten erreichen Sie über seine Durchwahl unseren Notdienst, der sich ebenso lösungsorientiert für Sie einsetzt. Natürlich erreichen Sie uns auch per Email oder über das Kontaktformular.
                </p>
                <p>
                  Unsere Leistungen umfassen die Auslieferung von Fahrzeugen an Geschäftskunden, die Überführung an einen anderen Firmenstandort, einen Fahrzeugtausch bei Leasingfahrzeugen, Ihr Fuhrpark-Management sowie die Platzlogistik.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/9fcae8d2-4eac-4283-96e1-87657043ea04.png" 
                alt="PKW-Überführung" 
                className="w-full h-auto rounded-2xl shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - LKW-ÜBERFÜHRUNG */}
      <section className="bg-background py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="/lovable-uploads/1ae8ace8-3395-48d9-a91c-5764290dbb19.png" 
                alt="LKW-Überführung" 
                className="w-full h-auto rounded-2xl shadow-2xl border border-border"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-4">
                <Truck className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">LKW SERVICE</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                LKW-ÜBERFÜHRUNG
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Alle Fahrer sind im Besitz der Fahrerlaubnis C1E (LKW mit Anhänger und Gesamtgewicht von bis zu 12t). Ein Großteil der Fahrer darf LKWs ohne Begrenzung des Gesamtgewichtes (Fahrerlaubnis CE) fahren. Darüber hinaus verfügen die meisten unserer Fahrer über Fahrerkarten für die digitalen EG-Kontrollgeräte.
                </p>
                <p>
                  Unsere Leistungen umfassen zuverlässige europaweite LKW-Überführung auf eigener Achse, die Auslieferung von LKWs ab Werk, die Überführung an einen anderen Firmenstandort und die Überführung von LKWs mit Überführungskennzeichen.
                </p>
                <p>
                  Wir sind immer für Sie erreichbar! Ihr persönlicher Kundenbetreuer ist werktags von 08:00 bis 17:00 Uhr für Sie da. Außerhalb dieser Zeiten erreichen Sie über seine Durchwahl unseren Notdienst, der sich ebenso lösungsorientiert für Sie einsetzt. Natürlich erreichen Sie uns auch per Email oder über das Kontaktformular.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - EXPRESS-SERVICE & EXTRAS */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-4">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">EXPRESS SERVICE</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                EXPRESS-SERVICE & EXTRAS
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Die Auftragserfüllung erfolgt nach Zeitvorgabe unserer Kunden. Expressaufträge werden, je nach Kapazität, umgehend ausgeführt. Auf Wunsch fahren wir sofort oder auch über Nacht.
                </p>
                <p>
                  Ob Einzelauftrag oder regelmäßiges Auftragsvolumen, wir richten uns individuell auf Ihre Wünsche ein.
                </p>
                <p>
                  Außerdem bieten wir einen Hol- und Bringservice von Fahrzeugen und andere Extras wie bspw. Fahrzeugreinigung und Betankung an.
                </p>
                <p>
                  Ist Ihr Auftrag erfasst, sorgen unsere innovativen Mobilitätslösungen für die termingerechte, professionelle Umsetzung. Hierfür haben wir eine eigene Software entwickelt.
                </p>
                <p>
                  Durch die Zusammenarbeit mit unserem Partnerunternehmen sind wir auch zu Spitzenzeiten in der Lage, Ihre Anfrage problemlos abwickeln zu können.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/f3745d9f-aeed-4a82-8811-d5f42933c9eb.png" 
                alt="Express-Service" 
                className="w-full h-auto rounded-2xl shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Fahrzeugüberführung auf Fremdachse */}
      <section className="bg-background py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="/lovable-uploads/d4d3dd38-eb97-4f00-bf98-f0c770b5db74.png" 
                alt="Fahrzeugüberführung auf Fremdachse" 
                className="w-full h-auto rounded-2xl shadow-2xl border border-border"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-4">
                <ArrowLeftRight className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">FREMDACHSE</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Fahrzeugüberführung auf Fremdachse
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Für spezielle Transportanforderungen bieten wir auch die Überführung von Fahrzeugen auf Fremdachse an. Diese besondere Dienstleistung ermöglicht es uns, auch Fahrzeuge zu transportieren, die nicht eigenständig gefahren werden können oder sollen.
                </p>
                <p>
                  Unsere erfahrenen Fahrer sind speziell für diese Art des Transports geschult und verfügen über die erforderlichen Lizenzen und Qualifikationen. Mit modernster Ausrüstung und höchsten Sicherheitsstandards gewährleisten wir einen schonenden und zuverlässigen Transport.
                </p>
                <p>
                  Ob Luxusfahrzeuge, Oldtimer, Unfallfahrzeuge oder Fahrzeuge ohne gültige Zulassung – wir finden die passende Lösung für Ihren Transportbedarf.
                </p>
              </div>
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
                <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Über uns</a></li>
                <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Karriere</a></li>
                <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Geschäftskunden</a></li>
                <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Aktuelles</a></li>
                <li><a href="#" className="text-white/80 hover:text-primary transition-colors">FAQ</a></li>
              </ul>

              {/* Newsletter Signup */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <h5 className="text-white font-medium mb-3">Newsletter</h5>
                <p className="text-white/70 text-sm mb-4">
                  Bleiben Sie auf dem Laufenden über unsere neuesten Services und Angebote.
                </p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Ihre E-Mail"
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/60 text-sm focus:outline-none focus:border-primary"
                  />
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    OK
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/20 pt-8">
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

export default Dienstleistungen;