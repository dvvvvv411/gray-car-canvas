import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare, Clock, HeadphonesIcon, Globe2, CheckCircle, X, Menu } from "lucide-react";
import { KontaktForm } from "@/components/KontaktForm";
import Logo from "@/components/Logo";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

// Import images
import heroBgNew from "@/assets/hero-background-new.webp";

const Kontakt = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navigationItems = [
    { href: "/", label: t('nav.home') },
    { href: "/unternehmen", label: t('nav.company') },
    { href: "/dienstleistungen", label: t('nav.services') },
    { href: "/karriere", label: t('nav.career') },
    { href: "/geschaeftskunden", label: t('nav.business') },
    { href: "/kontakt", label: t('nav.contact') }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-white/20 sticky top-0 z-50 backdrop-blur-sm bg-black/10" data-logo-type="dark">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Desktop Logo - Left */}
            <div className="hidden lg:block">
              <Logo />
            </div>
            
            {/* Mobile Logo - Center */}
            <div className="lg:hidden flex-1 flex justify-center">
              <Logo />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link 
                  key={item.href}
                  to={item.href} 
                  className={item.href === "/kontakt" ? "text-primary font-medium" : "text-white hover:text-primary transition-colors font-medium"}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            {/* Desktop Language Selector & Phone Number */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSelector />
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">
                <Phone className="w-4 h-4 inline mr-2" />
                030 75420223
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white z-50 relative"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10 z-40"
              >
                <div className="container mx-auto px-4 py-6">
                  <nav className="space-y-4 mb-6">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-3 px-4 rounded-lg text-lg font-medium transition-colors ${
                          item.href === "/kontakt" 
                            ? "text-primary bg-primary/10" 
                            : "text-white hover:text-primary hover:bg-white/5"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                  
                  <div className="pt-4 border-t border-white/10">
                    <a 
                      href="tel:+49405131580"
                      className="flex items-center justify-center bg-primary text-primary-foreground px-6 py-4 rounded-lg font-semibold text-lg"
                    >
                      <Phone className="w-5 h-5 mr-3" />
                      030 75420223
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Hero Section - Half Size */}
      <section 
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden -mt-24 pt-24"
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
              <em>{t('contact.hero.title')} <span className="text-primary" style={{ textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.5)' }}>{t('contact.hero.highlight')}</span></em>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto" style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Header Section */}
      <section className="bg-background py-16 px-4" data-logo-type="light">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            {t('contact.header.title')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contact.header.text')}
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
              <h3 className="text-xl font-semibold text-foreground mb-4">{t('contact.phone.title')}</h3>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-primary">030 75420223</p>
                <p className="text-muted-foreground">{t('contact.phone.subtitle')}</p>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">{t('contact.phone.feature')}</span>
                </div>
              </div>
            </div>

            {/* E-Mail */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-border text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{t('contact.email.title')}</h3>
              <div className="space-y-2">
                <p className="text-lg font-medium text-primary">info@carlogix.de</p>
                <p className="text-muted-foreground">{t('contact.email.subtitle')}</p>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">{t('contact.email.feature')}</span>
                </div>
              </div>
            </div>

            {/* Adresse */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-border text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{t('contact.location.title')}</h3>
              <div className="space-y-2">
                <p className="font-medium text-foreground">Beusselstr. 44 N-Q</p>
                <p className="font-medium text-foreground">10553 Berlin</p>
                <p className="text-muted-foreground">{t('contact.location.country')}</p>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">{t('contact.location.feature')}</span>
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
              <span className="text-primary font-medium text-sm">{t('contact.form.badge')}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('contact.form.title')} <span className="text-primary">{t('contact.form.highlight')}</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('contact.form.text')}
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
                <h3 className="text-2xl font-bold text-foreground">{t('contact.hours.title')}</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">{t('contact.hours.monFri')}</span>
                  <span className="font-semibold text-foreground">{t('contact.hours.monFriTime')}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">{t('contact.hours.sat')}</span>
                  <span className="font-semibold text-foreground">{t('contact.hours.satTime')}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">{t('contact.hours.sun')}</span>
                  <span className="font-semibold text-muted-foreground">{t('contact.hours.sunTime')}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">{t('contact.hours.emergency')}</span>
                  <span className="font-semibold text-primary">{t('contact.hours.emergencyTime')}</span>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-6">
                <HeadphonesIcon className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">{t('contact.service.title')}</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">{t('contact.service.consultation')}</p>
                    <p className="text-sm text-muted-foreground">{t('contact.service.consultationText')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">{t('contact.service.quotes')}</p>
                    <p className="text-sm text-muted-foreground">{t('contact.service.quotesText')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">{t('contact.service.booking')}</p>
                    <p className="text-sm text-muted-foreground">{t('contact.service.bookingText')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">{t('contact.service.multilingual')}</p>
                    <p className="text-sm text-muted-foreground">{t('contact.service.multilingualText')}</p>
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
              <div className="mb-6">
                <Logo />
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Seit 1984 Ihr zuverlässiger Partner für professionelle Fahrzeugüberführungen 
                in Deutschland und ganz Europa.
              </p>
              
              {/* Trust Indicators */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-white/80">Über 41 Jahre Erfahrung</span>
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
                    <div className="text-white font-medium">030 75420223</div>
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
                © 2025 Golze & Michel OHG. Alle Rechte vorbehalten.
              </div>
              <div className="flex gap-6 text-sm">
                <Link to="/impressum" className="text-white/60 hover:text-primary transition-colors">Impressum</Link>
                <Link to="/datenschutz" className="text-white/60 hover:text-primary transition-colors">Datenschutz</Link>
                <Link to="/agb" className="text-white/60 hover:text-primary transition-colors">AGB</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Kontakt;