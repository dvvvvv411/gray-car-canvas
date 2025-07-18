import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Building2, BarChart3, Clock, Shield, CheckCircle, Users, Zap, Target, TrendingUp, FileText, Bell, Award, Globe2, Headphones, Settings, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

// Import images
import heroBgNew from "@/assets/hero-background-new.webp";

const Geschaeftskunden = () => {
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
      <header className="border-b border-white/20 sticky top-0 z-50 backdrop-blur-sm bg-black/10">
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
                  className={item.href === "/geschaeftskunden" ? "text-primary font-medium" : "text-white hover:text-primary transition-colors font-medium"}
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
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-3 px-4 rounded-lg text-lg font-medium transition-colors ${
                          item.href === "/geschaeftskunden" 
                            ? "text-primary bg-primary/10" 
                            : "text-white hover:text-primary hover:bg-white/5"
                        }`}
                      >
                        {item.label}
                      </a>
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
              <em>{t('business.hero.title')} <span className="text-primary" style={{ textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.5)' }}>{t('business.hero.highlight')}</span></em>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Intro Section */}
      <section className="bg-background py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-8">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">{t('business.main.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            {t('business.main.title')} <span className="text-primary">{t('business.main.highlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('business.main.text')}
          </p>
        </div>
      </section>

      {/* Hauptvorteile Sektion 1 */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-4">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">{t('business.advantages.badge')}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('business.advantages.title')} <span className="text-primary">{t('business.advantages.highlight')}</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Automatische Status Updates - Featured Card */}
            <div className="relative bg-gradient-to-br from-primary to-primary/80 p-8 rounded-2xl shadow-xl border border-primary/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 lg:col-span-2">
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-white text-xs font-semibold">{t('business.liveUpdates.badge')}</span>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{t('business.liveUpdates.title')}</h4>
              <p className="text-white/90 leading-relaxed mb-6">
                {t('business.liveUpdates.text')}
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
              <h4 className="text-xl font-semibold text-white mb-4 text-center">{t('business.reports.title')}</h4>
              <p className="text-gray-300 text-center leading-relaxed mb-4">
                {t('business.reports.text')}
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
              <h4 className="text-xl font-semibold text-foreground mb-4 text-center">{t('business.manager.title')}</h4>
              <p className="text-muted-foreground text-center leading-relaxed mb-4">
                {t('business.manager.text')}
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
              <h4 className="text-xl font-semibold text-foreground mb-4 text-center">{t('business.integration.title')}</h4>
              <p className="text-muted-foreground text-center leading-relaxed mb-4">
                {t('business.integration.text')}
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
              <h4 className="text-xl font-semibold text-foreground mb-4 text-center">{t('business.conditions.title')}</h4>
              <p className="text-muted-foreground text-center leading-relaxed mb-4">
                {t('business.conditions.text')}
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
              <span className="text-primary font-medium text-sm">{t('business.excellence.badge')}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('business.excellence.title')} <span className="text-primary">{t('business.excellence.highlight')}</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-muted/20 rounded-2xl border border-border">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">{t('business.express.title')}</h4>
              <p className="text-muted-foreground text-sm">
                {t('business.express.text')}
              </p>
            </div>
            
            <div className="text-center p-6 bg-muted/20 rounded-2xl border border-border">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe2 className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">{t('business.network.title')}</h4>
              <p className="text-muted-foreground text-sm">
                {t('business.network.text')}
              </p>
            </div>
            
            <div className="text-center p-6 bg-muted/20 rounded-2xl border border-border">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">{t('business.quality.title')}</h4>
              <p className="text-muted-foreground text-sm">
                {t('business.quality.text')}
              </p>
            </div>
            
            <div className="text-center p-6 bg-muted/20 rounded-2xl border border-border">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">{t('business.capacity.title')}</h4>
              <p className="text-muted-foreground text-sm">
                {t('business.capacity.text')}
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
            <span className="text-primary font-medium text-sm">{t('business.cta.badge')}</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('business.cta.title')} <span className="text-primary">{t('business.cta.highlight')}</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            {t('business.cta.text')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              <Phone className="w-5 h-5 mr-2" />
              {t('business.cta.button')}
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Mail className="w-5 h-5 mr-2" />
              {t('business.contact.title')}
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
                    <div className="text-white font-medium">030 75420223</div>
                    <div className="text-white/60 text-sm">Hotline 8:00 - 18:00</div>
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
                <li><Link to="/kontakt" className="text-white/80 hover:text-primary transition-colors">Kontakt</Link></li>
                <li><Link to="/kontakt" className="text-white/80 hover:text-primary transition-colors">FAQ</Link></li>
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
                © 2025 Golze & Michel OHG. Alle Rechte vorbehalten.
              </div>
              <div className="flex gap-6 text-sm">
                <Link to="/datenschutz" className="text-white/60 hover:text-primary transition-colors">Datenschutz</Link>
                <Link to="/impressum" className="text-white/60 hover:text-primary transition-colors">Impressum</Link>
                <Link to="/agb" className="text-white/60 hover:text-primary transition-colors">AGB</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Geschaeftskunden;