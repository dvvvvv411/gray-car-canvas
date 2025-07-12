
import { Phone, Mail, MapPin, Car, Truck, Zap, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";

// Import images
import heroImage from "@/assets/hero-image.png";
import pkwService from "@/assets/pkw-service.png";
import lkwService from "@/assets/lkw-service.png";
import expressService from "@/assets/express-service.png";
import serviceImage from "@/assets/service-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border/10 sticky top-0 z-50 backdrop-blur-sm bg-background/95">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">CarDelivery</h1>
            </div>
            
            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">STARTSEITE</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">UNTERNEHMEN</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">DIENSTLEISTUNGEN</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">KARRIERE</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">GESCHÄFTSKUNDEN</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">AKTUELLES</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">KONTAKT</a>
            </nav>
            
            {/* Phone Number */}
            <div className="hidden md:flex items-center">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">
                <Phone className="w-4 h-4 inline mr-2" />
                040 5131580
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-muted/20 to-background py-12 px-4 overflow-hidden">
        {/* Background Stripe Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-primary transform -skew-y-6 origin-top-left scale-150"></div>
          <div className="absolute top-20 left-0 w-full h-32 bg-primary transform -skew-y-6 origin-top-left scale-150"></div>
          <div className="absolute bottom-0 right-0 w-full h-64 bg-primary transform skew-y-6 origin-bottom-right scale-150"></div>
        </div>
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              <em>IHR <span className="text-primary">SPEZIALIST</span> FÜR FAHRZEUG-</em>
              <br />
              <em>ÜBERFÜHRUNGEN</em>
              <br />
              <span className="text-lg md:text-xl lg:text-2xl font-normal text-muted-foreground mt-2 block">
                IN DEUTSCHLAND UND EUROPA
              </span>
            </h1>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-6xl w-full">
              <img 
                src={heroImage} 
                alt="TransferCar Fahrzeugüberführungen" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="PKW-ÜBERFÜHRUNG"
              description="Wir sind DER erfahrene und professionelle Dienstleister für Fahrzeugüberführungen auf eigener Achse. Wir passen uns individuell an Kundenwünsche an!"
              image={pkwService}
              buttonText="mehr"
            />
            <ServiceCard
              title="LKW-ÜBERFÜHRUNG"
              description="Sie können oder wollen nicht selbst fahren? Kein Problem, wir bringen Ihre LKWs von A nach B. Rufen Sie uns einfach an, wir sind immer erreichbar!"
              image={lkwService}
              buttonText="mehr"
            />
            <ServiceCard
              title="EXPRESS SERVICE"
              description="Sie haben es manchmal eilig? Unser Express-Service macht so gut wie alles möglich. Sofortabholung oder auch über Nacht – wir sind für Sie da!"
              image={expressService}
              buttonText="mehr"
            />
          </div>
        </div>
      </section>

      {/* Service & Flexibility Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary-foreground text-lg mb-2">FAHRZEUGÜBERFÜHRUNGEN MIT</p>
            <h2 className="text-4xl font-bold text-accent">
              <em>SERVICE & FLEXIBILITÄT</em>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                TransferCar GmbH gehört zu den großen Dienstleistern im Bereich Fahrzeugüberführungen. 
                Bereits seit 1994 sind wir für unsere Kunden in Deutschland und Europa unterwegs, 
                24 Stunden pro Tag an 365 Tagen im Jahr. Serviceorientiert, flexibel und zuverlässig übernehmen wir für Sie:
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <Car className="w-5 h-5 text-accent" />
                  <span>PKW – Überführung auf eigener Achse</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Truck className="w-5 h-5 text-accent" />
                  <span>LKW – Überführung auf eigener Achse</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Zap className="w-5 h-5 text-accent" />
                  <span>KFZ – Überführung mit Transporter</span>
                </div>
              </div>

              <div className="pt-4">
                <p className="mb-4">Außerdem bieten wir Ihnen folgende Leistungen an:</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <Check className="w-4 h-4 text-accent" />
                    <span>Hol- und Bringservice</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Check className="w-4 h-4 text-accent" />
                    <span>Fuhrpark-Management</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Check className="w-4 h-4 text-accent" />
                    <span>Platzlogistik</span>
                  </div>
                </div>
              </div>

              <Button 
                className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground"
                size="lg"
              >
                mehr
              </Button>
            </div>

            <div className="relative">
              <img 
                src={serviceImage} 
                alt="TransferCar Service" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
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
