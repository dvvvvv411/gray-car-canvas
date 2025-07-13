import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, X, Menu } from "lucide-react";
import Logo from "@/components/Logo";
import LanguageSelector from "@/components/LanguageSelector";

// Import images
import heroBgNew from "@/assets/hero-background-new.webp";

const AGB = () => {
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
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSelector />
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">
                <Phone className="w-4 h-4 inline mr-2" />
                030 75420223
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
      <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden -mt-24 pt-24" style={{ backgroundImage: `url(${heroBgNew})` }}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/80"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-glow-pulse"></div>
        </div>
        <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/30 to-accent/20 rounded-3xl blur-2xl animate-glow-pulse"></div>
          <div className="relative z-10 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-4" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>
              <em>ALLGEMEINE GESCHÄFTSBEDINGUNGEN</em>
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-gray max-w-none space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">§ 1 Geltungsbereich</h2>
            <p className="text-muted-foreground mb-4">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über Fahrzeugüberführungen, Transport- und Speditionsleistungen zwischen der Golze & Michel OHG, Internationale Spediteure (nachfolgend "Auftragnehmer" genannt) und ihren Auftraggebern (nachfolgend "Auftraggeber" genannt).
            </p>
            <p className="text-muted-foreground">
              Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Auftraggebers werden nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">§ 2 Vertragsschluss</h2>
            <p className="text-muted-foreground mb-4">
              Angebote des Auftragnehmers sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch schriftliche Auftragsbestätigung oder durch Beginn der Ausführung des Auftrags durch den Auftragnehmer zustande.
            </p>
            <p className="text-muted-foreground">
              Mündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung durch den Auftragnehmer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">§ 3 Leistungsumfang</h2>
            <p className="text-muted-foreground mb-4">
              Der Auftragnehmer übernimmt die Überführung von Fahrzeugen nach den ADSp (Allgemeine Deutsche Spediteurbedingungen) in der jeweils gültigen Fassung, soweit nachstehend nichts anderes bestimmt ist.
            </p>
            <p className="text-muted-foreground mb-4">
              Zusätzliche Leistungen wie Reinigung, Wartung oder Reparaturen sind gesondert zu vereinbaren und zu vergüten.
            </p>
            <p className="text-muted-foreground">
              Der Auftraggeber hat das Fahrzeug betriebsbereit, verkehrssicher und mit ausreichender Betriebsstoffmenge zu übergeben.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">§ 4 Preise und Zahlungsbedingungen</h2>
            <p className="text-muted-foreground mb-4">
              Die Preise verstehen sich netto zuzüglich der gesetzlichen Mehrwertsteuer in der jeweils gültigen Höhe.
            </p>
            <p className="text-muted-foreground mb-4">
              Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig. Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz berechnet.
            </p>
            <p className="text-muted-foreground">
              Aufrechnung ist nur mit unbestrittenen oder rechtskräftig festgestellten Forderungen zulässig.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">§ 5 Haftung</h2>
            <p className="text-muted-foreground mb-4">
              Die Haftung des Auftragnehmers richtet sich nach den gesetzlichen Bestimmungen, insbesondere nach den §§ 407 ff. HGB sowie den ADSp.
            </p>
            <p className="text-muted-foreground mb-4">
              Die Haftung für Schäden ist begrenzt auf den Betrag von 8,33 Rechnungseinheiten je Kilogramm des Rohgewichts der Sendung, höchstens jedoch 1.250.000 Rechnungseinheiten je Schadensereignis.
            </p>
            <p className="text-muted-foreground">
              Für die Dauer des Transports besteht keine Haftung für Schäden durch normale Abnutzung, versteckte Mängel oder Diebstahl von nicht fest mit dem Fahrzeug verbundenen Gegenständen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">§ 6 Versicherung</h2>
            <p className="text-muted-foreground mb-4">
              Der Auftragnehmer unterhält eine Transportversicherung entsprechend den gesetzlichen Bestimmungen.
            </p>
            <p className="text-muted-foreground">
              Eine über die gesetzlichen Bestimmungen hinausgehende Versicherung erfolgt nur auf ausdrücklichen Wunsch und auf Kosten des Auftraggebers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">§ 7 Verjährung</h2>
            <p className="text-muted-foreground">
              Alle Ansprüche gegen den Auftragnehmer verjähren in einem Jahr. Die Verjährung beginnt mit dem Tag, an dem die Sendung abgeliefert wurde oder hätte abgeliefert werden sollen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">§ 8 Erfüllungsort und Gerichtsstand</h2>
            <p className="text-muted-foreground mb-4">
              Erfüllungsort für alle Verpflichtungen aus dem Vertragsverhältnis ist Berlin.
            </p>
            <p className="text-muted-foreground">
              Ausschließlicher Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis ist Berlin, sofern der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">§ 9 Salvatorische Klausel</h2>
            <p className="text-muted-foreground">
              Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder werden, so berührt dies die Wirksamkeit der übrigen Bestimmungen nicht. An die Stelle der unwirksamen oder undurchführbaren Bestimmung tritt eine wirksame und durchführbare Bestimmung, die dem wirtschaftlichen Zweck der unwirksamen am nächsten kommt.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">§ 10 Anwendbares Recht</h2>
            <p className="text-muted-foreground">
              Es gilt ausschließlich deutsches Recht unter Ausschluss des UN-Kaufrechts.
            </p>
          </div>

          <p className="text-muted-foreground mt-8">
            <strong>Golze & Michel OHG</strong><br />
            Internationale Spediteure<br />
            Beusselstr. 44 N-Q<br />
            10553 Berlin<br />
            Deutschland<br />
            <br />
            Telefon: 030 75420223<br />
            E-Mail: info@carlogix.de<br />
            <br />
            
          </p>
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

export default AGB;