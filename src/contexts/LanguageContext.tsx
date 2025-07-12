import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'de' | 'en' | 'fr' | 'es' | 'it' | 'nl';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const languages = {
  de: { name: 'Deutsch', flag: '🇩🇪' },
  en: { name: 'English', flag: '🇬🇧' },
  fr: { name: 'Français', flag: '🇫🇷' },
  es: { name: 'Español', flag: '🇪🇸' },
  it: { name: 'Italiano', flag: '🇮🇹' },
  nl: { name: 'Nederlands', flag: '🇳🇱' }
};

const translations = {
  de: {
    // Navigation
    'nav.home': 'STARTSEITE',
    'nav.company': 'UNTERNEHMEN',
    'nav.services': 'DIENSTLEISTUNGEN',
    'nav.career': 'KARRIERE',
    'nav.business': 'GESCHÄFTSKUNDEN',
    'nav.contact': 'KONTAKT',
    
    // Hero Section
    'hero.title1': 'IHRE',
    'hero.title2': 'WAHL',
    'hero.title3': 'FÜR',
    'hero.title4': 'FAHRZEUG-ÜBERFÜHRUNGEN',
    'hero.subtitle': 'IN DEUTSCHLAND UND EUROPA',
    'hero.trust1': 'Seit 1984 vertrauenswürdig',
    'hero.trust2': '24/7 Service',
    'hero.trust3': 'Vollversichert',
    'hero.trust4': 'Transfer auf Fremdachse',
    'hero.cta': 'Jetzt anfragen',
    'hero.benefits': 'Kostenlose Beratung • Schnelle Antwort • Faire Preise',
    
    // Services Section
    'services.badge': 'UNSERE EXPERTISE',
    'services.title1': 'MODERNSTE',
    'services.title2': 'FAHRZEUG-SERVICES',
    'services.subtitle': 'Digitale Prozesse, echte Expertise – Ihre Fahrzeuge in den besten Händen',
    
    // Service Cards
    'service.pkw.title': 'PKW-ÜBERFÜHRUNG',
    'service.pkw.description': 'Intelligente Routenplanung und GPS-Tracking für maximale Effizienz. Jeder Transport wird digital dokumentiert und Sie bleiben jederzeit informiert.',
    'service.pkw.feature1': 'Live GPS-Tracking',
    'service.pkw.feature2': 'Digitale Übergabe-Protokolle',
    'service.pkw.feature3': 'Flexible Terminplanung',
    'service.pkw.button': 'Mehr erfahren',
    
    'service.lkw.title': 'LKW-ÜBERFÜHRUNG',
    'service.lkw.description': 'Professionelle Überführung schwerer Fahrzeuge mit modernster Technik. Speziell geschulte Fahrer und adaptive Logistiklösungen für jeden Bedarf.',
    'service.lkw.feature1': 'Spezialisierte LKW-Fahrer',
    'service.lkw.feature2': 'Schwertransport-Expertise',
    'service.lkw.feature3': 'Europaweites Netzwerk',
    'service.lkw.button': 'Jetzt anfragen',
    
    'service.express.title': 'EXPRESS-LIEFERUNG',
    'service.express.description': 'Wenn es wirklich eilig ist – unser Highspeed-Service macht\'s möglich. Sofortiger Start, direkter Transport, garantierte Ankunftszeiten.',
    'service.express.feature1': 'Sofort-Abholung möglich',
    'service.express.feature2': 'Priority-Behandlung',
    'service.express.feature3': 'Zeitgarantie inklusive',
    'service.express.button': 'Express buchen',
    
    'service.transfer.title': 'ÜBERFÜHRUNG AUF FREMDACHSE',
    'service.transfer.description': 'Professioneller Transport mit speziellen Transportern und Anhängern. Sichere Verladung und schonender Transport für Fahrzeuge aller Art.',
    'service.transfer.feature1': 'Spezial-Transporter verfügbar',
    'service.transfer.feature2': 'Sichere Fahrzeugverladung',
    'service.transfer.feature3': 'Schadensfreier Transport',
    'service.transfer.button': 'Service anfragen',
    
    // Service Features
    'features.available': '24/7 verfügbar',
    'features.insured': 'Vollversichert',
    'features.express': 'Express-Service',
    
    // Company Section
    'company.badge': 'FAHRZEUGÜBERFÜHRUNGEN MIT',
    'company.title1': 'SERVICE &',
    'company.title2': 'FLEXIBILITÄT',
    'company.subtitle': 'Seit 1984 setzen wir Maßstäbe in der Fahrzeuglogistik – mit Innovation und Leidenschaft',
    'company.description': 'Ihr digitaler Vorreiter in der Fahrzeuglogistik. Mit über 41 Jahren Erfahrung kombinieren wir bewährte Expertise mit modernsten Technologien für maximale Effizienz.',
    'company.stats.service': 'Service',
    'company.stats.days': 'Tage/Jahr',
    'company.stats.eu': 'Weit',
    
    // Contact Form
    'contact.title': 'KONTAKT AUFNEHMEN',
    'contact.subtitle': 'Kostenlose Beratung für Ihre Fahrzeugüberführung',
    'contact.name': 'Name',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.message': 'Nachricht',
    'contact.send': 'Nachricht senden',
    'contact.privacy': 'Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.',
    
    // Footer
    'footer.company': 'Unternehmen',
    'footer.services': 'Services',
    'footer.contact': 'Kontakt',
    'footer.legal': 'Rechtliches',
    'footer.rights': 'Alle Rechte vorbehalten.'
  },
  
  en: {
    // Navigation
    'nav.home': 'HOME',
    'nav.company': 'COMPANY',
    'nav.services': 'SERVICES',
    'nav.career': 'CAREER',
    'nav.business': 'BUSINESS CUSTOMERS',
    'nav.contact': 'CONTACT',
    
    // Hero Section
    'hero.title1': 'YOUR',
    'hero.title2': 'CHOICE',
    'hero.title3': 'FOR',
    'hero.title4': 'VEHICLE TRANSFERS',
    'hero.subtitle': 'IN GERMANY AND EUROPE',
    'hero.trust1': 'Trusted since 1984',
    'hero.trust2': '24/7 Service',
    'hero.trust3': 'Fully insured',
    'hero.trust4': 'Third-party transport',
    'hero.cta': 'Request now',
    'hero.benefits': 'Free consultation • Quick response • Fair prices',
    
    // Services Section
    'services.badge': 'OUR EXPERTISE',
    'services.title1': 'MODERN',
    'services.title2': 'VEHICLE SERVICES',
    'services.subtitle': 'Digital processes, real expertise – your vehicles in the best hands',
    
    // Service Cards
    'service.pkw.title': 'CAR TRANSFER',
    'service.pkw.description': 'Intelligent route planning and GPS tracking for maximum efficiency. Every transport is digitally documented and you stay informed at all times.',
    'service.pkw.feature1': 'Live GPS tracking',
    'service.pkw.feature2': 'Digital handover protocols',
    'service.pkw.feature3': 'Flexible scheduling',
    'service.pkw.button': 'Learn more',
    
    'service.lkw.title': 'TRUCK TRANSFER',
    'service.lkw.description': 'Professional transfer of heavy vehicles with state-of-the-art technology. Specially trained drivers and adaptive logistics solutions for every need.',
    'service.lkw.feature1': 'Specialized truck drivers',
    'service.lkw.feature2': 'Heavy transport expertise',
    'service.lkw.feature3': 'Europe-wide network',
    'service.lkw.button': 'Request now',
    
    'service.express.title': 'EXPRESS DELIVERY',
    'service.express.description': 'When it\'s really urgent – our high-speed service makes it possible. Immediate start, direct transport, guaranteed arrival times.',
    'service.express.feature1': 'Immediate pickup possible',
    'service.express.feature2': 'Priority treatment',
    'service.express.feature3': 'Time guarantee included',
    'service.express.button': 'Book express',
    
    'service.transfer.title': 'THIRD-PARTY TRANSPORT',
    'service.transfer.description': 'Professional transport with special carriers and trailers. Safe loading and gentle transport for vehicles of all kinds.',
    'service.transfer.feature1': 'Special carriers available',
    'service.transfer.feature2': 'Safe vehicle loading',
    'service.transfer.feature3': 'Damage-free transport',
    'service.transfer.button': 'Request service',
    
    // Service Features
    'features.available': '24/7 available',
    'features.insured': 'Fully insured',
    'features.express': 'Express service',
    
    // Company Section
    'company.badge': 'VEHICLE TRANSFERS WITH',
    'company.title1': 'SERVICE &',
    'company.title2': 'FLEXIBILITY',
    'company.subtitle': 'Since 1984, we have been setting standards in vehicle logistics – with innovation and passion',
    'company.description': 'Your digital pioneer in vehicle logistics. With over 41 years of experience, we combine proven expertise with the latest technologies for maximum efficiency.',
    'company.stats.service': 'Service',
    'company.stats.days': 'Days/Year',
    'company.stats.eu': 'Wide',
    
    // Contact Form
    'contact.title': 'GET IN TOUCH',
    'contact.subtitle': 'Free consultation for your vehicle transfer',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.send': 'Send message',
    'contact.privacy': 'By submitting, you agree to our privacy policy.',
    
    // Footer
    'footer.company': 'Company',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.legal': 'Legal',
    'footer.rights': 'All rights reserved.'
  },
  
  fr: {
    // Navigation
    'nav.home': 'ACCUEIL',
    'nav.company': 'ENTREPRISE',
    'nav.services': 'SERVICES',
    'nav.career': 'CARRIÈRE',
    'nav.business': 'CLIENTS PROFESSIONNELS',
    'nav.contact': 'CONTACT',
    
    // Hero Section
    'hero.title1': 'VOTRE',
    'hero.title2': 'CHOIX',
    'hero.title3': 'POUR',
    'hero.title4': 'TRANSFERTS DE VÉHICULES',
    'hero.subtitle': 'EN ALLEMAGNE ET EN EUROPE',
    'hero.trust1': 'Fiable depuis 1984',
    'hero.trust2': 'Service 24/7',
    'hero.trust3': 'Entièrement assuré',
    'hero.trust4': 'Transport par tiers',
    'hero.cta': 'Demander maintenant',
    'hero.benefits': 'Consultation gratuite • Réponse rapide • Prix équitables',
    
    // Services Section
    'services.badge': 'NOTRE EXPERTISE',
    'services.title1': 'SERVICES DE',
    'services.title2': 'VÉHICULES MODERNES',
    'services.subtitle': 'Processus numériques, expertise réelle – vos véhicules entre les meilleures mains',
    
    // Service Cards
    'service.pkw.title': 'TRANSFERT DE VOITURE',
    'service.pkw.description': 'Planification d\'itinéraires intelligente et suivi GPS pour une efficacité maximale. Chaque transport est documenté numériquement et vous restez informé en permanence.',
    'service.pkw.feature1': 'Suivi GPS en direct',
    'service.pkw.feature2': 'Protocoles de remise numériques',
    'service.pkw.feature3': 'Planification flexible',
    'service.pkw.button': 'En savoir plus',
    
    'service.lkw.title': 'TRANSFERT DE CAMION',
    'service.lkw.description': 'Transfert professionnel de véhicules lourds avec une technologie de pointe. Conducteurs spécialement formés et solutions logistiques adaptatives pour tous les besoins.',
    'service.lkw.feature1': 'Conducteurs de camions spécialisés',
    'service.lkw.feature2': 'Expertise transport lourd',
    'service.lkw.feature3': 'Réseau européen',
    'service.lkw.button': 'Demander maintenant',
    
    'service.express.title': 'LIVRAISON EXPRESS',
    'service.express.description': 'Quand c\'est vraiment urgent – notre service haute vitesse le rend possible. Démarrage immédiat, transport direct, temps d\'arrivée garantis.',
    'service.express.feature1': 'Enlèvement immédiat possible',
    'service.express.feature2': 'Traitement prioritaire',
    'service.express.feature3': 'Garantie de temps incluse',
    'service.express.button': 'Réserver express',
    
    'service.transfer.title': 'TRANSPORT PAR TIERS',
    'service.transfer.description': 'Transport professionnel avec des transporteurs et remorques spéciaux. Chargement sûr et transport délicat pour véhicules de toutes sortes.',
    'service.transfer.feature1': 'Transporteurs spéciaux disponibles',
    'service.transfer.feature2': 'Chargement sûr des véhicules',
    'service.transfer.feature3': 'Transport sans dommages',
    'service.transfer.button': 'Demander le service',
    
    // Service Features
    'features.available': 'Disponible 24/7',
    'features.insured': 'Entièrement assuré',
    'features.express': 'Service express',
    
    // Company Section
    'company.badge': 'TRANSFERTS DE VÉHICULES AVEC',
    'company.title1': 'SERVICE ET',
    'company.title2': 'FLEXIBILITÉ',
    'company.subtitle': 'Depuis 1984, nous établissons des standards dans la logistique automobile – avec innovation et passion',
    'company.description': 'Votre pionnier numérique en logistique automobile. Avec plus de 41 ans d\'expérience, nous combinons une expertise éprouvée avec les dernières technologies pour une efficacité maximale.',
    'company.stats.service': 'Service',
    'company.stats.days': 'Jours/An',
    'company.stats.eu': 'Large',
    
    // Contact Form
    'contact.title': 'NOUS CONTACTER',
    'contact.subtitle': 'Consultation gratuite pour votre transfert de véhicule',
    'contact.name': 'Nom',
    'contact.email': 'E-mail',
    'contact.phone': 'Téléphone',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le message',
    'contact.privacy': 'En soumettant, vous acceptez notre politique de confidentialité.',
    
    // Footer
    'footer.company': 'Entreprise',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.legal': 'Juridique',
    'footer.rights': 'Tous droits réservés.'
  },
  
  es: {
    // Navigation
    'nav.home': 'INICIO',
    'nav.company': 'EMPRESA',
    'nav.services': 'SERVICIOS',
    'nav.career': 'CARRERA',
    'nav.business': 'CLIENTES EMPRESARIALES',
    'nav.contact': 'CONTACTO',
    
    // Hero Section
    'hero.title1': 'SU',
    'hero.title2': 'ELECCIÓN',
    'hero.title3': 'PARA',
    'hero.title4': 'TRANSFERENCIAS DE VEHÍCULOS',
    'hero.subtitle': 'EN ALEMANIA Y EUROPA',
    'hero.trust1': 'Confiable desde 1984',
    'hero.trust2': 'Servicio 24/7',
    'hero.trust3': 'Completamente asegurado',
    'hero.trust4': 'Transporte por terceros',
    'hero.cta': 'Solicitar ahora',
    'hero.benefits': 'Consulta gratuita • Respuesta rápida • Precios justos',
    
    // Services Section
    'services.badge': 'NUESTRA EXPERIENCIA',
    'services.title1': 'SERVICIOS DE',
    'services.title2': 'VEHÍCULOS MODERNOS',
    'services.subtitle': 'Procesos digitales, experiencia real – sus vehículos en las mejores manos',
    
    // Service Cards
    'service.pkw.title': 'TRANSFERENCIA DE COCHE',
    'service.pkw.description': 'Planificación inteligente de rutas y seguimiento GPS para máxima eficiencia. Cada transporte se documenta digitalmente y usted se mantiene informado en todo momento.',
    'service.pkw.feature1': 'Seguimiento GPS en vivo',
    'service.pkw.feature2': 'Protocolos de entrega digitales',
    'service.pkw.feature3': 'Programación flexible',
    'service.pkw.button': 'Saber más',
    
    'service.lkw.title': 'TRANSFERENCIA DE CAMIÓN',
    'service.lkw.description': 'Transferencia profesional de vehículos pesados con tecnología de vanguardia. Conductores especialmente entrenados y soluciones logísticas adaptativas para cada necesidad.',
    'service.lkw.feature1': 'Conductores especializados en camiones',
    'service.lkw.feature2': 'Experiencia en transporte pesado',
    'service.lkw.feature3': 'Red europea',
    'service.lkw.button': 'Solicitar ahora',
    
    'service.express.title': 'ENTREGA EXPRESS',
    'service.express.description': 'Cuando realmente es urgente – nuestro servicio de alta velocidad lo hace posible. Inicio inmediato, transporte directo, tiempos de llegada garantizados.',
    'service.express.feature1': 'Recogida inmediata posible',
    'service.express.feature2': 'Tratamiento prioritario',
    'service.express.feature3': 'Garantía de tiempo incluida',
    'service.express.button': 'Reservar express',
    
    'service.transfer.title': 'TRANSPORTE POR TERCEROS',
    'service.transfer.description': 'Transporte profesional con transportistas y remolques especiales. Carga segura y transporte suave para vehículos de todo tipo.',
    'service.transfer.feature1': 'Transportistas especiales disponibles',
    'service.transfer.feature2': 'Carga segura de vehículos',
    'service.transfer.feature3': 'Transporte sin daños',
    'service.transfer.button': 'Solicitar servicio',
    
    // Service Features
    'features.available': 'Disponible 24/7',
    'features.insured': 'Completamente asegurado',
    'features.express': 'Servicio express',
    
    // Company Section
    'company.badge': 'TRANSFERENCIAS DE VEHÍCULOS CON',
    'company.title1': 'SERVICIO Y',
    'company.title2': 'FLEXIBILIDAD',
    'company.subtitle': 'Desde 1984, establecemos estándares en logística de vehículos – con innovación y pasión',
    'company.description': 'Su pionero digital en logística de vehículos. Con más de 41 años de experiencia, combinamos experiencia probada con las últimas tecnologías para máxima eficiencia.',
    'company.stats.service': 'Servicio',
    'company.stats.days': 'Días/Año',
    'company.stats.eu': 'Amplio',
    
    // Contact Form
    'contact.title': 'PONERSE EN CONTACTO',
    'contact.subtitle': 'Consulta gratuita para su transferencia de vehículo',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.phone': 'Teléfono',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar mensaje',
    'contact.privacy': 'Al enviar, acepta nuestra política de privacidad.',
    
    // Footer
    'footer.company': 'Empresa',
    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.legal': 'Legal',
    'footer.rights': 'Todos los derechos reservados.'
  },
  
  it: {
    // Navigation
    'nav.home': 'HOME',
    'nav.company': 'AZIENDA',
    'nav.services': 'SERVIZI',
    'nav.career': 'CARRIERA',
    'nav.business': 'CLIENTI AZIENDALI',
    'nav.contact': 'CONTATTO',
    
    // Hero Section
    'hero.title1': 'LA VOSTRA',
    'hero.title2': 'SCELTA',
    'hero.title3': 'PER',
    'hero.title4': 'TRASFERIMENTI VEICOLI',
    'hero.subtitle': 'IN GERMANIA E EUROPA',
    'hero.trust1': 'Affidabile dal 1984',
    'hero.trust2': 'Servizio 24/7',
    'hero.trust3': 'Completamente assicurato',
    'hero.trust4': 'Trasporto tramite terzi',
    'hero.cta': 'Richiedi ora',
    'hero.benefits': 'Consulenza gratuita • Risposta rapida • Prezzi equi',
    
    // Services Section
    'services.badge': 'LA NOSTRA COMPETENZA',
    'services.title1': 'SERVIZI VEICOLI',
    'services.title2': 'MODERNI',
    'services.subtitle': 'Processi digitali, vera competenza – i vostri veicoli nelle migliori mani',
    
    // Service Cards
    'service.pkw.title': 'TRASFERIMENTO AUTO',
    'service.pkw.description': 'Pianificazione intelligente del percorso e tracciamento GPS per la massima efficienza. Ogni trasporto è documentato digitalmente e rimanete sempre informati.',
    'service.pkw.feature1': 'Tracciamento GPS dal vivo',
    'service.pkw.feature2': 'Protocolli di consegna digitali',
    'service.pkw.feature3': 'Programmazione flessibile',
    'service.pkw.button': 'Scopri di più',
    
    'service.lkw.title': 'TRASFERIMENTO CAMION',
    'service.lkw.description': 'Trasferimento professionale di veicoli pesanti con tecnologia all\'avanguardia. Autisti appositamente addestrati e soluzioni logistiche adattive per ogni esigenza.',
    'service.lkw.feature1': 'Autisti specializzati in camion',
    'service.lkw.feature2': 'Competenza trasporti pesanti',
    'service.lkw.feature3': 'Rete europea',
    'service.lkw.button': 'Richiedi ora',
    
    'service.express.title': 'CONSEGNA EXPRESS',
    'service.express.description': 'Quando è davvero urgente – il nostro servizio ad alta velocità lo rende possibile. Partenza immediata, trasporto diretto, tempi di arrivo garantiti.',
    'service.express.feature1': 'Ritiro immediato possibile',
    'service.express.feature2': 'Trattamento prioritario',
    'service.express.feature3': 'Garanzia di tempo inclusa',
    'service.express.button': 'Prenota express',
    
    'service.transfer.title': 'TRASPORTO TRAMITE TERZI',
    'service.transfer.description': 'Trasporto professionale con trasportatori e rimorchi speciali. Carico sicuro e trasporto delicato per veicoli di ogni tipo.',
    'service.transfer.feature1': 'Trasportatori speciali disponibili',
    'service.transfer.feature2': 'Carico sicuro dei veicoli',
    'service.transfer.feature3': 'Trasporto senza danni',
    'service.transfer.button': 'Richiedi servizio',
    
    // Service Features
    'features.available': 'Disponibile 24/7',
    'features.insured': 'Completamente assicurato',
    'features.express': 'Servizio express',
    
    // Company Section
    'company.badge': 'TRASFERIMENTI VEICOLI CON',
    'company.title1': 'SERVIZIO E',
    'company.title2': 'FLESSIBILITÀ',
    'company.subtitle': 'Dal 1984, stabiliamo standard nella logistica dei veicoli – con innovazione e passione',
    'company.description': 'Il vostro pioniere digitale nella logistica dei veicoli. Con oltre 41 anni di esperienza, combiniamo competenza comprovata con le ultime tecnologie per la massima efficienza.',
    'company.stats.service': 'Servizio',
    'company.stats.days': 'Giorni/Anno',
    'company.stats.eu': 'Ampio',
    
    // Contact Form
    'contact.title': 'METTERSI IN CONTATTO',
    'contact.subtitle': 'Consulenza gratuita per il vostro trasferimento veicolo',
    'contact.name': 'Nome',
    'contact.email': 'Email',
    'contact.phone': 'Telefono',
    'contact.message': 'Messaggio',
    'contact.send': 'Invia messaggio',
    'contact.privacy': 'Inviando, accettate la nostra politica sulla privacy.',
    
    // Footer
    'footer.company': 'Azienda',
    'footer.services': 'Servizi',
    'footer.contact': 'Contatto',
    'footer.legal': 'Legale',
    'footer.rights': 'Tutti i diritti riservati.'
  },
  
  nl: {
    // Navigation
    'nav.home': 'HOME',
    'nav.company': 'BEDRIJF',
    'nav.services': 'DIENSTEN',
    'nav.career': 'CARRIÈRE',
    'nav.business': 'ZAKELIJKE KLANTEN',
    'nav.contact': 'CONTACT',
    
    // Hero Section
    'hero.title1': 'UW',
    'hero.title2': 'KEUZE',
    'hero.title3': 'VOOR',
    'hero.title4': 'VOERTUIG-OVERBRENGINGEN',
    'hero.subtitle': 'IN DUITSLAND EN EUROPA',
    'hero.trust1': 'Betrouwbaar sinds 1984',
    'hero.trust2': '24/7 Service',
    'hero.trust3': 'Volledig verzekerd',
    'hero.trust4': 'Transport door derden',
    'hero.cta': 'Nu aanvragen',
    'hero.benefits': 'Gratis advies • Snelle reactie • Eerlijke prijzen',
    
    // Services Section
    'services.badge': 'ONZE EXPERTISE',
    'services.title1': 'MODERNE',
    'services.title2': 'VOERTUIG DIENSTEN',
    'services.subtitle': 'Digitale processen, echte expertise – uw voertuigen in de beste handen',
    
    // Service Cards
    'service.pkw.title': 'AUTO OVERBRENGING',
    'service.pkw.description': 'Intelligente routeplanning en GPS-tracking voor maximale efficiëntie. Elk transport wordt digitaal gedocumenteerd en u blijft altijd geïnformeerd.',
    'service.pkw.feature1': 'Live GPS-tracking',
    'service.pkw.feature2': 'Digitale overdracht protocollen',
    'service.pkw.feature3': 'Flexibele planning',
    'service.pkw.button': 'Meer weten',
    
    'service.lkw.title': 'VRACHTWAGEN OVERBRENGING',
    'service.lkw.description': 'Professionele overbrenging van zware voertuigen met de nieuwste technologie. Speciaal getrainde chauffeurs en adaptieve logistieke oplossingen voor elke behoefte.',
    'service.lkw.feature1': 'Gespecialiseerde vrachtwagenchauffeurs',
    'service.lkw.feature2': 'Zwaar transport expertise',
    'service.lkw.feature3': 'Europa-breed netwerk',
    'service.lkw.button': 'Nu aanvragen',
    
    'service.express.title': 'EXPRESS LEVERING',
    'service.express.description': 'Als het echt urgent is – onze high-speed service maakt het mogelijk. Directe start, direct transport, gegarandeerde aankomsttijden.',
    'service.express.feature1': 'Directe ophaling mogelijk',
    'service.express.feature2': 'Prioriteitsbehandeling',
    'service.express.feature3': 'Tijdgarantie inbegrepen',
    'service.express.button': 'Express boeken',
    
    'service.transfer.title': 'TRANSPORT DOOR DERDEN',
    'service.transfer.description': 'Professioneel transport met speciale transporteurs en aanhangwagens. Veilige lading en voorzichtig transport voor voertuigen van alle soorten.',
    'service.transfer.feature1': 'Speciale transporteurs beschikbaar',
    'service.transfer.feature2': 'Veilige voertuig belading',
    'service.transfer.feature3': 'Schadevrij transport',
    'service.transfer.button': 'Service aanvragen',
    
    // Service Features
    'features.available': '24/7 beschikbaar',
    'features.insured': 'Volledig verzekerd',
    'features.express': 'Express service',
    
    // Company Section
    'company.badge': 'VOERTUIG OVERBRENGINGEN MET',
    'company.title1': 'SERVICE &',
    'company.title2': 'FLEXIBILITEIT',
    'company.subtitle': 'Sinds 1984 zetten we standaarden in voertuiglogistiek – met innovatie en passie',
    'company.description': 'Uw digitale pionier in voertuiglogistiek. Met meer dan 41 jaar ervaring combineren we bewezen expertise met de nieuwste technologieën voor maximale efficiëntie.',
    'company.stats.service': 'Service',
    'company.stats.days': 'Dagen/Jaar',
    'company.stats.eu': 'Breed',
    
    // Contact Form
    'contact.title': 'CONTACT OPNEMEN',
    'contact.subtitle': 'Gratis advies voor uw voertuig overbrenging',
    'contact.name': 'Naam',
    'contact.email': 'Email',
    'contact.phone': 'Telefoon',
    'contact.message': 'Bericht',
    'contact.send': 'Bericht verzenden',
    'contact.privacy': 'Door te verzenden, gaat u akkoord met ons privacybeleid.',
    
    // Footer
    'footer.company': 'Bedrijf',
    'footer.services': 'Diensten',
    'footer.contact': 'Contact',
    'footer.legal': 'Juridisch',
    'footer.rights': 'Alle rechten voorbehouden.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('de');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && languages[savedLanguage]) {
      setLanguageState(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};