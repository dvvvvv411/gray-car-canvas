
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Car, Truck, Zap, Check, Clock, Shield, ArrowLeftRight, X, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { ContactForm } from "@/components/ContactForm";
import { PartnersCarousel } from "@/components/PartnersCarousel";
import { Header } from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "@/components/Logo";

// Import images
import heroBgNew from "@/assets/hero-background-new.webp";
import serviceImage from "@/assets/car-transfer-service.jpg";

// Direct Imgur URLs
const pkwService = "https://i.imgur.com/15xt437.png";
const lkwService = "https://i.imgur.com/6p3a1A6.png"; 
const expressService = "https://i.imgur.com/AZ91CAT.png";
const transferService = "/lovable-uploads/7b4b99bf-4817-4336-8a94-b32ba65768eb.png";

const Index = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
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
                  <span className="text-sm font-medium">Seit 1984 vertrauenswürdig</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="text-sm font-medium">24/7 Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
                  <span className="text-sm font-medium">Vollversichert</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" style={{ animationDelay: '3s' }}></div>
                  <span className="text-sm font-medium">Transfer auf Fremdachse</span>
                </div>
              </div>
              
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-glow-orange hover:shadow-glow-orange transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link to="/kontakt">Jetzt anfragen</Link>
              </Button>
              
              <p className="text-white/60 text-sm mt-4">Kostenlose Beratung • Schnelle Antwort • Faire Preise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Services Carousel Section */}
      <section className="relative py-16 px-4 bg-white overflow-hidden" data-logo-type="light">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-glow-pulse"></div>
          <div className="absolute bottom-10 right-1/3 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-glow-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-4">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">UNSERE EXPERTISE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">MODERNSTE</span>{" "}
              <span className="text-primary">FAHRZEUG-SERVICES</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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
                  buttonLink: "/dienstleistungen",
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
                  buttonLink: "/kontakt",
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
                  buttonLink: "/kontakt",
                  icon: Zap,
                  features: [
                    "Sofort-Abholung möglich",
                    "Priority-Behandlung",
                    "Zeitgarantie inklusive"
                  ]
                },
                {
                  id: 4,
                  title: "ÜBERFÜHRUNG AUF FREMDACHSE",
                  description: "Professioneller Transport mit speziellen Transportern und Anhängern. Sichere Verladung und schonender Transport für Fahrzeuge aller Art.",
                  image: transferService,
                  buttonText: "Service anfragen",
                  buttonLink: "/kontakt",
                  icon: ArrowLeftRight,
                  features: [
                    "Spezial-Transporter verfügbar",
                    "Sichere Fahrzeugverladung",
                    "Schadensfreier Transport"
                  ]
                }
              ]}
            />
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="inline-flex items-center gap-4 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-foreground">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">24/7 verfügbar</span>
              </div>
              <div className="w-px h-6 bg-border"></div>
              <div className="flex items-center gap-2 text-foreground">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Vollversichert</span>
              </div>
              <div className="w-px h-6 bg-border"></div>
              <div className="flex items-center gap-2 text-foreground">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">Express-Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Service & Flexibility Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden" data-logo-type="dark">
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
              Seit 1984 setzen wir Maßstäbe in der Fahrzeuglogistik – mit Innovation und Leidenschaft
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Content Side */}
            <div className="space-y-8 animate-fade-in-up h-full flex flex-col justify-between" style={{ animationDelay: '0.2s' }}>
              {/* Company Description */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  <strong className="text-white">CarLogix</strong> – Ihr digitaler Vorreiter in der Fahrzeuglogistik. 
                  Mit über <span className="text-primary font-semibold">41 Jahren Erfahrung</span> kombinieren wir bewährte Expertise 
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
                      <ArrowLeftRight className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Überführung auf Fremdachse</div>
                      <div className="text-sm text-white/70">Spezial-Transporter & Anhänger</div>
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

      {/* Partner Logos Section */}
      <section className="relative py-12 px-4 bg-white overflow-hidden" data-logo-type="light">
        <div className="container mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border mb-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-muted-foreground font-medium text-sm">VERTRAUENSVOLLE PARTNERSCHAFTEN</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-foreground">UNSERE</span>{" "}
              <span className="text-primary">PARTNER</span>
            </h2>
          </div>

          {/* Partners Carousel */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <PartnersCarousel />
          </div>
        </div>
      </section>

      {/* Comprehensive Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white border-t border-white/10" data-logo-type="dark">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Information */}
            <div className="space-y-6">
              <div>
                <div className="mb-4">
                  <Logo />
                </div>
                 <p className="text-white/80 leading-relaxed">
                   Ihr vertrauensvoller Partner für Fahrzeugüberführungen seit 1984. 
                   Professionell, zuverlässig und europaweit für Sie im Einsatz.
                 </p>
              </div>
              
              {/* Trust Indicators */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-white/80">Seit 41 Jahren im Geschäft</span>
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
                <li><Link to="/dienstleistungen" className="text-white/80 hover:text-primary transition-colors">PKW-Überführung</Link></li>
                <li><Link to="/dienstleistungen" className="text-white/80 hover:text-primary transition-colors">LKW-Überführung</Link></li>
                <li><Link to="/dienstleistungen" className="text-white/80 hover:text-primary transition-colors">Express-Service</Link></li>
                <li><Link to="/dienstleistungen" className="text-white/80 hover:text-primary transition-colors">Überführung auf Fremdachse</Link></li>
                <li><Link to="/dienstleistungen" className="text-white/80 hover:text-primary transition-colors">Hol- und Bringservice</Link></li>
                <li><Link to="/dienstleistungen" className="text-white/80 hover:text-primary transition-colors">Fuhrpark-Management</Link></li>
                <li><Link to="/dienstleistungen" className="text-white/80 hover:text-primary transition-colors">Platzlogistik</Link></li>
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
                    <div className="text-white">info@carlogix.de</div>
                    <div className="text-white/60 text-sm">Schnelle Antwort garantiert</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white">Beusselstr. 44 N-Q</div>
                    <div className="text-white">10553 Berlin</div>
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
                <li><Link to="/unternehmen" className="text-white/80 hover:text-primary transition-colors">Über uns</Link></li>
                <li><Link to="/karriere" className="text-white/80 hover:text-primary transition-colors">Karriere</Link></li>
                <li><Link to="/geschaeftskunden" className="text-white/80 hover:text-primary transition-colors">Geschäftskunden</Link></li>
                <li><Link to="/kontakt" className="text-white/80 hover:text-primary transition-colors">FAQ</Link></li>
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
                <span className="text-white/60">© 2025 Golze & Michel OHG</span>
                <Link to="/impressum" className="text-white/80 hover:text-primary transition-colors">Impressum</Link>
                <Link to="/datenschutz" className="text-white/80 hover:text-primary transition-colors">Datenschutzerklärung</Link>
                <Link to="/agb" className="text-white/80 hover:text-primary transition-colors">AGB</Link>
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

export default Index;
