import { Phone, Mail, MapPin, Building2, BarChart3, Clock, Shield, CheckCircle, Users, Zap, Target, TrendingUp, FileText, Bell, Award, Globe2, Headphones, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

// Import images
import heroBgNew from "@/assets/hero-background-new.webp";

const Geschaeftskunden = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-white/20 sticky top-0 z-50 backdrop-blur-sm bg-black/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>
            
            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-white hover:text-primary transition-colors font-medium">STARTSEITE</a>
              <a href="/unternehmen" className="text-white hover:text-primary transition-colors font-medium">UNTERNEHMEN</a>
              <a href="/dienstleistungen" className="text-white hover:text-primary transition-colors font-medium">DIENSTLEISTUNGEN</a>
              <a href="/karriere" className="text-white hover:text-primary transition-colors font-medium">KARRIERE</a>
              <a href="/geschaeftskunden" className="text-primary font-medium">GESCHÄFTSKUNDEN</a>
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
              <em>BUSINESS <span className="text-primary" style={{ textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.5)' }}>LÖSUNGEN</span></em>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Intro Section */}
      <section className="bg-background py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-8">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">FÜR UNTERNEHMEN</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            PROFESSIONELLE <span className="text-primary">GESCHÄFTSLÖSUNGEN</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Als B2B-Partner bieten wir Ihnen maßgeschneiderte Lösungen für alle Ihre Fahrzeugüberführungen. 
            Von Einzelaufträgen bis hin zu umfassenden Fuhrpark-Services – wir optimieren Ihre Logistikprozesse 
            und sorgen für höchste Effizienz in Ihrem Unternehmen.
          </p>
        </div>
      </section>

      {/* Hauptvorteile Sektion 1 */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-4">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">IHRE VORTEILE</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Modernste <span className="text-primary">Business-Features</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Automatische Status Updates - Featured Card */}
            <div className="relative bg-gradient-to-br from-primary to-primary/80 p-8 rounded-2xl shadow-xl border border-primary/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 lg:col-span-2">
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-white text-xs font-semibold">PREMIUM</span>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Live Status-Updates</h4>
              <p className="text-white/90 leading-relaxed mb-6">
                Erhalten Sie automatische Benachrichtigungen über den aktuellen Status Ihrer Überführungen 
                in Echtzeit via E-Mail, SMS oder über unser Business-Portal. Mit GPS-Tracking und 
                voraussichtlichen Ankunftszeiten.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm">Real-time</span>
                <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm">GPS-Tracking</span>
                <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm">Multi-Channel</span>
              </div>
            </div>

            {/* Business Intelligence - Dark Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-lg border border-gray-800 hover:shadow-xl transition-all duration-300 hover:border-primary/50">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4 text-center">Detaillierte Berichte</h4>
              <p className="text-gray-300 text-center leading-relaxed mb-4">
                Umfassende Analysen und Reports über Ihre Transportkosten, Zeiten und Effizienz. 
                Exportierbar in verschiedene Formate für Ihre Buchhaltung.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Analytics</span>
                <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Export</span>
              </div>
            </div>

            {/* Dedicated Account Manager - Light Card with Border */}
            <div className="bg-background p-8 rounded-2xl shadow-lg border-2 border-primary/30 hover:shadow-xl transition-all duration-300 hover:border-primary">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4 text-center">Persönlicher Ansprechpartner</h4>
              <p className="text-muted-foreground text-center leading-relaxed mb-4">
                Ihr dedizierter Account Manager kennt Ihre Anforderungen und steht Ihnen jederzeit 
                mit Rat und Tat zur Seite – persönlich und kompetent.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Persönlich</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">24/7</span>
              </div>
            </div>

            {/* API Integration - Gradient Card */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 p-8 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4 text-center">System-Integration</h4>
              <p className="text-muted-foreground text-center leading-relaxed mb-4">
                Nahtlose Integration in Ihre bestehenden ERP- und CRM-Systeme über moderne 
                REST-APIs für vollautomatisierte Prozesse.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm rounded-full">API</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm rounded-full">Automatisiert</span>
              </div>
            </div>

            {/* Flexible Abrechnung - Muted Card */}
            <div className="bg-muted/50 p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:bg-muted/70">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4 text-center">Flexible Konditionen</h4>
              <p className="text-muted-foreground text-center leading-relaxed mb-4">
                Individuelle Preismodelle nach Volumen, Rahmenverträge und Sonderkonditionen 
                für regelmäßige Aufträge. Transparent und planbar.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Individuell</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Transparent</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Excellence Sektion 2 */}
      <section className="bg-background py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-4">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">SERVICE EXCELLENCE</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Professioneller <span className="text-primary">Enterprise Service</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-muted/20 rounded-2xl border border-border">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Express-Service</h4>
              <p className="text-muted-foreground text-sm">
                Eilaufträge werden priorisiert behandelt und binnen 24 Stunden abgewickelt. 
                Für zeitkritische Geschäftsprozesse.
              </p>
            </div>
            
            <div className="text-center p-6 bg-muted/20 rounded-2xl border border-border">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe2 className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Europaweites Netzwerk</h4>
              <p className="text-muted-foreground text-sm">
                Grenzüberschreitende Logistik mit lokalen Partnern in allen EU-Ländern. 
                Alle Zollformalitäten inklusive.
              </p>
            </div>
            
            <div className="text-center p-6 bg-muted/20 rounded-2xl border border-border">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Qualitätssicherung</h4>
              <p className="text-muted-foreground text-sm">
                ISO 9001 zertifizierte Prozesse, regelmäßige Audits und kontinuierliche 
                Qualitätsverbesserung nach Six Sigma.
              </p>
            </div>
            
            <div className="text-center p-6 bg-muted/20 rounded-2xl border border-border">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Skalierbare Kapazitäten</h4>
              <p className="text-muted-foreground text-sm">
                Flexible Ressourcen für Spitzenzeiten, Großprojekte und saisonale 
                Schwankungen. Immer ausreichend Kapazität.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-8">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">JETZT STARTEN</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Bereit für die <span className="text-primary">nächste Stufe?</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Optimieren Sie Ihre Fahrzeuglogistik mit unserem professionellen Business-Service. 
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch und maßgeschneidertes Angebot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              <Phone className="w-5 h-5 mr-2" />
              Jetzt anrufen: 040 5131580
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Mail className="w-5 h-5 mr-2" />
              E-Mail senden
            </Button>
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
                <p className="text-white/60 text-sm mb-4">Updates & Angebote direkt in Ihr Postfach</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Ihre E-Mail" 
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-primary"
                  />
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-white/60 text-sm">
                © 2024 TransferCar GmbH. Alle Rechte vorbehalten.
              </div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-white/60 hover:text-primary transition-colors">Datenschutz</a>
                <a href="#" className="text-white/60 hover:text-primary transition-colors">Impressum</a>
                <a href="#" className="text-white/60 hover:text-primary transition-colors">AGB</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Geschaeftskunden;