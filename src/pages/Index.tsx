
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Car, Truck, Zap, Check, Clock, Shield, ArrowLeftRight, X, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { ContactForm } from "@/components/ContactForm";
import { PartnersCarousel } from "@/components/PartnersCarousel";
import Logo from "@/components/Logo";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

// Import images
import heroBgNew from "@/assets/hero-background-new.webp";
import serviceImage from "@/assets/car-transfer-service.jpg";

// Direct Imgur URLs
const pkwService = "https://i.imgur.com/15xt437.png";
const lkwService = "https://i.imgur.com/6p3a1A6.png"; 
const expressService = "https://i.imgur.com/AZ91CAT.png";
const transferService = "/lovable-uploads/7b4b99bf-4817-4336-8a94-b32ba65768eb.png";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
                  className={item.href === "/" ? "text-primary font-medium" : "text-white hover:text-primary transition-colors font-medium"}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            {/* Desktop Phone Number & Language Selector */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSelector />
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">
                <Phone className="w-4 h-4 inline mr-2" />
                030 75420223
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
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
                  {/* Navigation Links */}
                  <nav className="space-y-4 mb-6">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-3 px-4 rounded-lg text-lg font-medium transition-colors ${
                          item.href === "/" 
                            ? "text-primary bg-primary/10" 
                            : "text-white hover:text-primary hover:bg-white/5"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                  
                  {/* Language Selector & Phone Number */}
                  <div className="pt-4 border-t border-white/10 space-y-4">
                    <div className="flex justify-center">
                      <LanguageSelector />
                    </div>
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
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden -mt-24 pt-24"
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
              <em>{t('hero.title1')} <span className="text-primary" style={{ textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.5)' }}>{t('hero.title2')}</span> {t('hero.title3')}</em>
              <br />
              <em>{t('hero.title4')}</em>
              <br />
              <span className="text-lg md:text-xl lg:text-2xl font-normal text-white/90 mt-4 block" style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>
                {t('hero.subtitle')}
              </span>
            </h1>
            <div className="mt-8 animate-scale-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-6 text-white/80">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
                  <span className="text-sm font-medium">{t('hero.trust1')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="text-sm font-medium">{t('hero.trust2')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
                  <span className="text-sm font-medium">{t('hero.trust3')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" style={{ animationDelay: '3s' }}></div>
                  <span className="text-sm font-medium">{t('hero.trust4')}</span>
                </div>
              </div>
              
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-glow-orange hover:shadow-glow-orange transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link to="/kontakt">{t('hero.cta')}</Link>
              </Button>
              
              <p className="text-white/60 text-sm mt-4">{t('hero.benefits')}</p>
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
              <span className="text-primary font-medium text-sm">{t('services.badge')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">{t('services.title1')}</span>{" "}
              <span className="text-primary">{t('services.title2')}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('services.subtitle')}
            </p>
          </div>
          
          {/* Services Carousel */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <ServicesCarousel 
              services={[
                {
                  id: 1,
                  title: t('service.pkw.title'),
                  description: t('service.pkw.description'),
                  image: pkwService,
                  buttonText: t('service.pkw.button'),
                  buttonLink: "/dienstleistungen",
                  icon: Car,
                  features: [
                    t('service.pkw.feature1'),
                    t('service.pkw.feature2'), 
                    t('service.pkw.feature3')
                  ]
                },
                {
                  id: 2,
                  title: t('service.lkw.title'),
                  description: t('service.lkw.description'),
                  image: lkwService,
                  buttonText: t('service.lkw.button'),
                  buttonLink: "/kontakt",
                  icon: Truck,
                  features: [
                    t('service.lkw.feature1'),
                    t('service.lkw.feature2'),
                    t('service.lkw.feature3')
                  ]
                },
                {
                  id: 3,
                  title: t('service.express.title'),
                  description: t('service.express.description'),
                  image: expressService,
                  buttonText: t('service.express.button'),
                  buttonLink: "/kontakt",
                  icon: Zap,
                  features: [
                    t('service.express.feature1'),
                    t('service.express.feature2'),
                    t('service.express.feature3')
                  ]
                },
                {
                  id: 4,
                  title: t('service.transfer.title'),
                  description: t('service.transfer.description'),
                  image: transferService,
                  buttonText: t('service.transfer.button'),
                  buttonLink: "/kontakt",
                  icon: ArrowLeftRight,
                  features: [
                    t('service.transfer.feature1'),
                    t('service.transfer.feature2'),
                    t('service.transfer.feature3')
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
                <span className="font-semibold">{t('features.available')}</span>
              </div>
              <div className="w-px h-6 bg-border"></div>
              <div className="flex items-center gap-2 text-foreground">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">{t('features.insured')}</span>
              </div>
              <div className="w-px h-6 bg-border"></div>
              <div className="flex items-center gap-2 text-foreground">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">{t('features.express')}</span>
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
              <span className="text-primary font-medium text-sm">{t('company.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">{t('company.title1')}</span>{" "}
              <span className="text-primary">{t('company.title2')}</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t('company.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Content Side */}
            <div className="space-y-8 animate-fade-in-up h-full flex flex-col justify-between" style={{ animationDelay: '0.2s' }}>
              {/* Company Description */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  <strong className="text-white">CarLogix</strong> – {t('company.description')}
                </p>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                    <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-xs text-white/70">{t('company.stats.service')}</div>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                    <div className="text-2xl font-bold text-primary mb-1">365</div>
                    <div className="text-xs text-white/70">{t('company.stats.days')}</div>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                    <div className="text-2xl font-bold text-primary mb-1">EU</div>
                    <div className="text-xs text-white/70">{t('company.stats.eu')}</div>
                  </div>
                </div>
              </div>

              {/* Services List */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-6">{t('company.competence.title')}</h3>
                <div className="grid gap-4">
                  <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                      <Car className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{t('company.competence.network')}</div>
                      <div className="text-sm text-white/70">{t('company.competence.network.desc')}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                      <Truck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{t('company.competence.technology')}</div>
                      <div className="text-sm text-white/70">{t('company.competence.technology.desc')}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                      <ArrowLeftRight className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{t('company.competence.experience')}</div>
                      <div className="text-sm text-white/70">{t('company.competence.experience.desc')}</div>
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
                <h4 className="font-semibold text-white mb-4">{t('premium.title')}</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-white/90 text-sm">{t('premium.pickup')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-white/90 text-sm">{t('premium.fleet')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-white/90 text-sm">{t('premium.logistics')}</span>
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
              <span className="text-muted-foreground font-medium text-sm">{t('partners.badge')}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-foreground">{t('partners.title1')}</span>{" "}
              <span className="text-primary">{t('partners.title2')}</span>
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
                   {t('company.info.description')}
                 </p>
              </div>
              
              {/* Trust Indicators */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-white/80">{t('company.info.years')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-white/80">{t('company.info.insured')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-white/80">{t('company.info.certified')}</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-6">{t('footer.services.title')}</h4>
              <ul className="space-y-3">
                <li><Link to="/dienstleistungen" className="text-white/80 hover:text-primary transition-colors">{t('footer.services.pkw')}</Link></li>
                <li><Link to="/dienstleistungen" className="text-white/80 hover:text-primary transition-colors">{t('footer.services.lkw')}</Link></li>
                <li><Link to="/dienstleistungen" className="text-white/80 hover:text-primary transition-colors">{t('footer.services.express')}</Link></li>
                <li><Link to="/dienstleistungen" className="text-white/80 hover:text-primary transition-colors">{t('footer.services.transfer')}</Link></li>
                <li><Link to="/dienstleistungen" className="text-white/80 hover:text-primary transition-colors">{t('footer.services.pickup')}</Link></li>
                <li><Link to="/dienstleistungen" className="text-white/80 hover:text-primary transition-colors">{t('footer.services.fleet')}</Link></li>
                <li><Link to="/dienstleistungen" className="text-white/80 hover:text-primary transition-colors">{t('footer.services.logistics')}</Link></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-semibold text-white mb-6">{t('footer.contact.title')}</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">030 75420223</div>
                    <div className="text-white/60 text-sm">{t('footer.contact.hotline')}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white">info@carlogix.de</div>
                    <div className="text-white/60 text-sm">{t('footer.contact.email.response')}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white">Beusselstr. 44 N-Q</div>
                    <div className="text-white">10553 Berlin</div>
                    <div className="text-white/60 text-sm">{t('footer.contact.address')}</div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <h5 className="text-white font-medium mb-3">{t('footer.hours.title')}</h5>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/80">{t('footer.hours.weekdays')}</span>
                    <span className="text-white">{t('footer.hours.weekdays.time')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">{t('footer.hours.saturday')}</span>
                    <span className="text-white">{t('footer.hours.saturday.time')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">{t('footer.hours.emergency')}</span>
                    <span className="text-primary">{t('footer.hours.emergency.time')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links & Newsletter */}
            <div>
              <h4 className="font-semibold text-white mb-6">{t('footer.quicklinks.title')}</h4>
              <ul className="space-y-3 mb-8">
                <li><Link to="/unternehmen" className="text-white/80 hover:text-primary transition-colors">{t('footer.quicklinks.about')}</Link></li>
                <li><Link to="/karriere" className="text-white/80 hover:text-primary transition-colors">{t('footer.quicklinks.career')}</Link></li>
                <li><Link to="/geschaeftskunden" className="text-white/80 hover:text-primary transition-colors">{t('footer.quicklinks.business')}</Link></li>
                <li><Link to="/kontakt" className="text-white/80 hover:text-primary transition-colors">{t('footer.quicklinks.faq')}</Link></li>
              </ul>

              {/* Newsletter Signup */}
              <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
                <h5 className="text-white font-medium mb-3">{t('footer.newsletter.title')}</h5>
                <p className="text-white/80 text-sm mb-4">
                  {t('footer.newsletter.description')}
                </p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder={t('footer.newsletter.placeholder')} 
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
                <span className="text-white/60">{t('footer.legal.company')}</span>
                <Link to="/impressum" className="text-white/80 hover:text-primary transition-colors">{t('footer.legal.imprint')}</Link>
                <Link to="/datenschutz" className="text-white/80 hover:text-primary transition-colors">{t('footer.legal.privacy')}</Link>
                <Link to="/agb" className="text-white/80 hover:text-primary transition-colors">{t('footer.legal.terms')}</Link>
              </div>

            </div>

            {/* Location Reference */}
            <div className="mt-6 text-center">
              <p className="text-white/60 text-sm">
                {t('footer.location')}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
