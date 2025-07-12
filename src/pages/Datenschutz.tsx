import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, X, Menu } from "lucide-react";
import Logo from "@/components/Logo";

// Import images
import heroBgNew from "@/assets/hero-background-new.webp";

const Datenschutz = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { href: "/", label: "STARTSEITE" },
    { href: "/unternehmen", label: "UNTERNEHMEN" },
    { href: "/dienstleistungen", label: "DIENSTLEISTUNGEN" },
    { href: "/karriere", label: "KARRIERE" },
    { href: "/geschaeftskunden", label: "GESCHÄFTSKUNDEN" },
    { href: "/kontakt", label: "KONTAKT" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-white/20 sticky top-0 z-50 backdrop-blur-sm bg-black/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            <div className="hidden lg:block">
              <Logo />
            </div>
            <div className="lg:hidden flex-1 flex justify-center">
              <Logo />
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link 
                  key={item.href}
                  to={item.href} 
                  className="text-white hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="hidden lg:flex items-center">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">
                <Phone className="w-4 h-4 inline mr-2" />
                040 5131580
              </div>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white z-50 relative"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10 z-40"
              >
                <div className="container mx-auto px-4 py-6">
                  <nav className="space-y-4 mb-6">
                    {navigationItems.map((item) => (
                      <Link key={item.href} to={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-3 px-4 rounded-lg text-lg font-medium transition-colors text-white hover:text-primary hover:bg-white/5">
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="pt-4 border-t border-white/10">
                    <a href="tel:+49405131580" className="flex items-center justify-center bg-primary text-primary-foreground px-6 py-4 rounded-lg font-semibold text-lg">
                      <Phone className="w-5 h-5 mr-3" />
                      040 5131580
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden -mt-24 pt-24" style={{ backgroundImage: `url(${heroBgNew})` }}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/80"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-glow-pulse"></div>
        </div>
        <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/30 to-accent/20 rounded-3xl blur-2xl animate-glow-pulse"></div>
          <div className="relative z-10 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-4" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>
              <em>DATENSCHUTZERKLÄRUNG</em>
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-gray max-w-none space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Verantwortlicher</h2>
            <p className="text-muted-foreground">
              Verantwortlicher für die Datenverarbeitung auf dieser Website ist:<br /><br />
              Golze & Michel OHG<br />
              Internationale Spediteure<br />
              Beusselstr. 44 N-Q<br />
              10553 Berlin<br />
              Deutschland<br /><br />
              Geschäftsführer: Eugeniusz Rachuta<br />
              E-Mail: info@carlogix.de
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Allgemeine Hinweise zur Datenverarbeitung</h2>
            <p className="text-muted-foreground mb-4">
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
            </p>
            <p className="text-muted-foreground">
              In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Kontakt mit uns</h2>
            <p className="text-muted-foreground mb-4">
              Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung Ihrer Anfrage)
            </p>
            <p className="text-muted-foreground">
              <strong>Speicherdauer:</strong> Diese Daten geben wir nicht ohne Ihre Einwilligung weiter und löschen sie nach vollständiger Bearbeitung Ihrer Anfrage, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Website-Nutzung</h2>
            <h3 className="text-lg font-semibold text-foreground mb-2">Logfiles</h3>
            <p className="text-muted-foreground mb-4">
              Bei jedem Zugriff auf unsere Website werden Nutzungsdaten durch den jeweiligen Internetbrowser übermittelt und in Protokolldateien (sogenannten Server-Logfiles) gespeichert. Dabei werden folgende Daten gespeichert:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
              <li>IP-Adresse des zugreifenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem</li>
            </ul>
            <p className="text-muted-foreground">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der ordnungsgemäßen Funktionsfähigkeit der Website)
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Bewerbungsverfahren</h2>
            <p className="text-muted-foreground mb-4">
              Wenn Sie sich über unser Online-Formular bewerben, verarbeiten wir Ihre übermittelten Daten zur Abwicklung des Bewerbungsverfahrens.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen) und § 26 BDSG (Beschäftigtendatenschutz)
            </p>
            <p className="text-muted-foreground">
              <strong>Speicherdauer:</strong> Bewerbungsunterlagen werden nach Abschluss des Bewerbungsverfahrens gelöscht, spätestens nach 6 Monaten, es sei denn, Sie haben einer längeren Speicherung zugestimmt.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Ihre Rechte</h2>
            <p className="text-muted-foreground mb-4">
              Ihnen stehen bezüglich Ihrer bei uns gespeicherten personenbezogenen Daten grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu.
            </p>
            <p className="text-muted-foreground mb-4">
              Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.
            </p>
            <p className="text-muted-foreground">
              <strong>Zuständige Aufsichtsbehörde:</strong><br />
              Berliner Beauftragte für Datenschutz und Informationsfreiheit<br />
              Friedrichstr. 219<br />
              10969 Berlin
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Datensicherheit</h2>
            <p className="text-muted-foreground">
              Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird.
            </p>
          </div>

          
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-16 px-4 mt-16">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-8">
            <div className="lg:col-span-1">
              <Logo />
              <p className="text-white/80 mt-6 leading-relaxed">
                Seit 1984 Ihr zuverlässiger Partner für professionelle Fahrzeugüberführungen in Deutschland und Europa.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                <li><Link to="/dienstleistungen" className="text-white/80 hover:text-primary transition-colors">PKW-Überführung</Link></li>
                <li><Link to="/dienstleistungen" className="text-white/80 hover:text-primary transition-colors">LKW-Überführung</Link></li>
                <li><Link to="/dienstleistungen" className="text-white/80 hover:text-primary transition-colors">Express-Service</Link></li>
              </ul>
            </div>
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
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/unternehmen" className="text-white/80 hover:text-primary transition-colors">Über uns</Link></li>
                <li><Link to="/karriere" className="text-white/80 hover:text-primary transition-colors">Karriere</Link></li>
                <li><Link to="/kontakt" className="text-white/80 hover:text-primary transition-colors">Kontakt</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
                <span className="text-white/60">© 2025 Golze & Michel OHG</span>
                <Link to="/impressum" className="text-white/80 hover:text-primary transition-colors">Impressum</Link>
                <Link to="/datenschutz" className="text-white/80 hover:text-primary transition-colors">Datenschutzerklärung</Link>
                <Link to="/agb" className="text-white/80 hover:text-primary transition-colors">AGB</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Datenschutz;