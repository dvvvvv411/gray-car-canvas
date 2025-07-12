
import { Phone, Mail, MapPin, Car, Truck, Zap, Check, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { ContactForm } from "@/components/ContactForm";

// Import images
import heroBgNew from "@/assets/hero-background-new.webp";
import serviceImage from "@/assets/car-transfer-service.jpg";

// Direct Imgur URLs
const pkwService = "https://i.imgur.com/15xt437.png";
const lkwService = "https://i.imgur.com/6p3a1A6.png"; 
const expressService = "https://i.imgur.com/AtkiSrV.png";

const Index = () => {
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
              <a href="#" className="text-white hover:text-primary transition-colors font-medium">STARTSEITE</a>
              <a href="#" className="text-white hover:text-primary transition-colors font-medium">UNTERNEHMEN</a>
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
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden -mt-16 pt-16"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>
              <em>IHRE <span className="text-primary" style={{ textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.5)' }}>WAHL</span> FÜR</em>
              <br />
              <em>FAHRZEUG-ÜBERFÜHRUNGEN</em>
              <br />
              <span className="text-lg md:text-xl lg:text-2xl font-normal text-white/90 mt-4 block" style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>
                IN DEUTSCHLAND UND EUROPA
              </span>
            </h1>
            <div className="mt-8 animate-scale-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-6 text-white/80">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
                  <span className="text-sm font-medium">Seit 1994 vertrauenswürdig</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="text-sm font-medium">24/7 Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
                  <span className="text-sm font-medium">Vollversichert</span>
                </div>
              </div>
              
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-glow-orange hover:shadow-glow-orange transition-all duration-300 transform hover:scale-105"
              >
                Jetzt anfragen
              </Button>
              
              <p className="text-white/60 text-sm mt-4">Kostenlose Beratung • Schnelle Antwort • Faire Preise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Services Carousel Section */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-glow-pulse"></div>
          <div className="absolute bottom-10 right-1/3 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-glow-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-4">
              <Zap className="w-4 h-4 text-white" />
              <span className="text-white font-medium text-sm">UNSERE EXPERTISE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">MODERNSTE</span>{" "}
              <span className="text-white/90">FAHRZEUG-SERVICES</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Digitale Prozesse, echte Expertise – Ihre Fahrzeuge in den besten Händen
            </p>
          </div>
          
          {/* Services Carousel */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <ServicesCarousel 
              services={[
                {
                  id: 1,
                  title: "PKW-ÜBERFÜHRUNG",
                  description: "Intelligente Routenplanung und GPS-Tracking für maximale Effizienz. Jeder Transport wird digital dokumentiert und Sie bleiben jederzeit informiert.",
                  image: pkwService,
                  buttonText: "Mehr erfahren",
                  icon: Car,
                  features: [
                    "Live GPS-Tracking",
                    "Digitale Übergabe-Protokolle", 
                    "Flexible Terminplanung"
                  ]
                },
                {
                  id: 2,
                  title: "LKW-ÜBERFÜHRUNG",
                  description: "Professionelle Überführung schwerer Fahrzeuge mit modernster Technik. Speziell geschulte Fahrer und adaptive Logistiklösungen für jeden Bedarf.",
                  image: lkwService,
                  buttonText: "Jetzt anfragen",
                  icon: Truck,
                  features: [
                    "Spezialisierte LKW-Fahrer",
                    "Schwertransport-Expertise",
                    "Europaweites Netzwerk"
                  ]
                },
                {
                  id: 3,
                  title: "EXPRESS-LIEFERUNG",
                  description: "Wenn es wirklich eilig ist – unser Highspeed-Service macht's möglich. Sofortiger Start, direkter Transport, garantierte Ankunftszeiten.",
                  image: expressService,
                  buttonText: "Express buchen",
                  icon: Zap,
                  features: [
                    "Sofort-Abholung möglich",
                    "Priority-Behandlung",
                    "Zeitgarantie inklusive"
                  ]
                }
              ]}
            />
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">24/7 verfügbar</span>
              </div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className="flex items-center gap-2 text-white">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Vollversichert</span>
              </div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className="flex items-center gap-2 text-white">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">Express-Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Service & Flexibility Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-glow-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-accent/8 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-primary/8 rounded-full blur-2xl animate-glow-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-4">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">FAHRZEUGÜBERFÜHRUNGEN MIT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">SERVICE &</span>{" "}
              <span className="text-primary">FLEXIBILITÄT</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Seit 1994 setzen wir Maßstäbe in der Fahrzeuglogistik – mit Innovation und Leidenschaft
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Content Side */}
            <div className="space-y-8 animate-fade-in-up h-full flex flex-col justify-between" style={{ animationDelay: '0.2s' }}>
              {/* Company Description */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  <strong className="text-white">TransferCar GmbH</strong> – Ihr digitaler Vorreiter in der Fahrzeuglogistik. 
                  Mit über <span className="text-primary font-semibold">29 Jahren Erfahrung</span> kombinieren wir bewährte Expertise 
                  mit modernsten Technologien für maximale Effizienz.
                </p>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                    <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-xs text-white/70">Service</div>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                    <div className="text-2xl font-bold text-primary mb-1">365</div>
                    <div className="text-xs text-white/70">Tage/Jahr</div>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                    <div className="text-2xl font-bold text-primary mb-1">EU</div>
                    <div className="text-xs text-white/70">Weit</div>
                  </div>
                </div>
              </div>

              {/* Services List */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-6">Unsere Kernkompetenzen:</h3>
                <div className="grid gap-4">
                  <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                      <Car className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">PKW-Überführung auf eigener Achse</div>
                      <div className="text-sm text-white/70">Intelligente Routenoptimierung</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                      <Truck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">LKW-Überführung auf eigener Achse</div>
                      <div className="text-sm text-white/70">Schwertransport-Expertise</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">KFZ-Überführung mit Transporter</div>
                      <div className="text-sm text-white/70">Express & Standard-Optionen</div>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            {/* Image Side */}
            <div className="relative animate-fade-in-up space-y-8 h-full flex flex-col" style={{ animationDelay: '0.4s' }}>
              <div className="relative w-full flex-1">
                <img 
                  src={serviceImage} 
                  alt="Car Transfer Service" 
                  className="w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10"
                />
              </div>

              {/* Premium Services Card - moved from left column */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
                <h4 className="font-semibold text-white mb-4">Premium-Services:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-white/90 text-sm">Hol- und Bringservice</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-white/90 text-sm">Fuhrpark-Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-white/90 text-sm">Platzlogistik</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-muted-foreground text-lg mb-2">WIR FREUEN UNS ÜBER IHRE</p>
            <h2 className="text-4xl font-bold text-primary">ANFRAGE</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Bei Interesse an unseren Dienstleistungen und falls noch offene Fragen bestehen sollten, 
                  sind wir gerne telefonisch oder per E-Mail sowie über unser Kontaktformular erreichbar.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-lg">040 5131580</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-lg">info@transfercar.de</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div>Oststr. 42 – 46</div>
                      <div>22844 Norderstedt</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span>2019 © Transfercar GmbH</span>
            <a href="#" className="hover:text-accent transition-colors">Impressum</a>
            <a href="#" className="hover:text-accent transition-colors">Datenschutzerklärung</a>
            <a href="#" className="hover:text-accent transition-colors">Haftungsausschluss</a>
            <a href="#" className="hover:text-accent transition-colors">AGBs</a>
            <a href="#" className="hover:text-accent transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
