import { Phone, Mail, MapPin, Car, Truck, Zap, Check, Clock, Shield, ArrowLeftRight, Users, Star, Award, Globe2, TrendingUp, Target, Heart, Coffee, UserPlus, Briefcase, GraduationCap, TrendingUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

// Import images
import heroBgNew from "@/assets/hero-background-new.webp";

const Karriere = () => {
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
              <a href="/unternehmen" className="text-white hover:text-primary transition-colors font-medium">UNTERNEHMEN</a>
              <a href="/dienstleistungen" className="text-white hover:text-primary transition-colors font-medium">DIENSTLEISTUNGEN</a>
              <a href="/karriere" className="text-primary font-medium">KARRIERE</a>
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
              <em>KARRIERE BEI <span className="text-primary" style={{ textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.5)' }}>TRANSFERCAR</span></em>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Intro Section */}
      <section className="bg-background py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-8">
            <UserPlus className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">VERSTÄRKUNG GESUCHT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            WERDE TEIL UNSERES <span className="text-primary">TEAMS</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Bei TransferCar suchen wir kontinuierlich motivierte Menschen, die unser Team verstärken möchten. 
            Ob als Fahrer auf der Straße oder im Büro – bei uns findest du spannende Karrieremöglichkeiten 
            in einem dynamischen und wachsenden Unternehmen.
          </p>
        </div>
      </section>

      {/* Bereiche Section */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-4">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">KARRIERECHANCEN</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Vielfältige <span className="text-primary">Möglichkeiten</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fahrer */}
            <div className="bg-background p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4 text-center">Fahrerteam</h4>
              <p className="text-muted-foreground text-center leading-relaxed">
                Professionelle Fahrer für PKW- und LKW-Überführungen. Mit verschiedenen Führerscheinklassen 
                und flexiblen Arbeitszeiten europaweit unterwegs.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Führerschein CE</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Flexibel</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Europaweit</span>
              </div>
            </div>

            {/* Büro */}
            <div className="bg-background p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4 text-center">Administration</h4>
              <p className="text-muted-foreground text-center leading-relaxed">
                Disposition, Kundenbetreuung, Buchhaltung und Management. Organisiere Touren, 
                betreue Kunden und sorge für reibungslose Abläufe.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Disposition</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Kundenservice</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Organisation</span>
              </div>
            </div>

            {/* Werkstatt/Technik */}
            <div className="bg-background p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4 text-center">Technischer Bereich</h4>
              <p className="text-muted-foreground text-center leading-relaxed">
                Fahrzeugkontrolle, Wartung und technische Prüfungen. Stelle sicher, 
                dass alle Fahrzeuge sicher und ordnungsgemäß überführt werden.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Kontrolle</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Wartung</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Qualität</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-background py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-4">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">DEINE VORTEILE</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Warum <span className="text-primary">TransferCar?</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-muted/20 rounded-2xl border border-border">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Wachstum</h4>
              <p className="text-muted-foreground text-sm">
                Seit 1994 kontinuierliches Wachstum und stabile Arbeitsplätze in einem zukunftssicheren Markt.
              </p>
            </div>
            
            <div className="text-center p-6 bg-muted/20 rounded-2xl border border-border">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Teamgeist</h4>
              <p className="text-muted-foreground text-sm">
                Familiäres Arbeitsklima mit über 250 Fahrern und einem engagierten Team im Büro.
              </p>
            </div>
            
            <div className="text-center p-6 bg-muted/20 rounded-2xl border border-border">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Weiterbildung</h4>
              <p className="text-muted-foreground text-sm">
                Regelmäßige Schulungen und Fortbildungen für alle Bereiche und Führerscheinklassen.
              </p>
            </div>
            
            <div className="text-center p-6 bg-muted/20 rounded-2xl border border-border">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Flexibilität</h4>
              <p className="text-muted-foreground text-sm">
                Flexible Arbeitszeiten und die Möglichkeit, europaweit interessante Orte kennenzulernen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-4">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">BEWERBUNG</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Starte deine <span className="text-primary">Karriere</span> bei uns
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Du möchtest Teil unseres erfolgreichen Teams werden? Dann freuen wir uns auf deine Bewerbung! 
                  Egal ob als erfahrener Profi oder Quereinsteiger – wir bieten dir die Chance, 
                  in einem dynamischen Umfeld zu wachsen.
                </p>
                <p>
                  Sende uns einfach eine kurze Nachricht über das Kontaktformular und erzähle uns, 
                  für welchen Bereich du dich interessierst. Wir melden uns zeitnah bei dir zurück 
                  und besprechen die weiteren Schritte.
                </p>
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-3">Was wir bieten:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Sichere Arbeitsplätze in einem wachsenden Unternehmen</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Faire Bezahlung und attraktive Sozialleistungen</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Moderne Arbeitsplätze und professionelle Ausstattung</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Kollegiales Arbeitsklima und flache Hierarchien</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-background p-8 rounded-2xl shadow-xl border border-border">
              <h4 className="text-2xl font-bold text-foreground mb-6 text-center">Kontakt aufnehmen</h4>
              <ContactForm />
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

export default Karriere;