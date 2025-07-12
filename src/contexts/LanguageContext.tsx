import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'de' | 'en' | 'fr' | 'es' | 'it' | 'nl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const getStoredLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('carlogix-language');
    if (stored && ['de', 'en', 'fr', 'es', 'it', 'nl'].includes(stored)) {
      return stored as Language;
    }
  }
  return 'de'; // Default to German
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getStoredLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('carlogix-language', lang);
    
    // Update document html lang attribute
    document.documentElement.lang = lang;
    
    // Update meta tags
    const title = translations[lang]?.meta?.title || 'CarLogix - Professionelle Fahrzeugüberführungen deutschlandweit';
    const description = translations[lang]?.meta?.description || 'CarLogix - Ihr Experte für professionelle Fahrzeugüberführungen. PKW, LKW, Express-Service und mehr. Über 41 Jahre Erfahrung in der Fahrzeuglogistik.';
    
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  useEffect(() => {
    // Set initial document language
    document.documentElement.lang = language;
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translation data
const translations = {
  de: {
    meta: {
      title: 'CarLogix - Professionelle Fahrzeugüberführungen deutschlandweit',
      description: 'CarLogix - Ihr Experte für professionelle Fahrzeugüberführungen. PKW, LKW, Express-Service und mehr. Über 41 Jahre Erfahrung in der Fahrzeuglogistik.'
    },
    nav: {
      home: 'Startseite',
      company: 'Unternehmen',
      services: 'Dienstleistungen',
      career: 'Karriere',
      business: 'Geschäftskunden',
      contact: 'Kontakt'
    },
    common: {
      phone: 'Telefon',
      email: 'E-Mail',
      address: 'Adresse',
      hours: 'Öffnungszeiten',
      more: 'Mehr erfahren',
      contact: 'Kontakt aufnehmen',
      call: 'Anrufen',
      send: 'Senden'
    }
  },
  en: {
    meta: {
      title: 'CarLogix - Professional Vehicle Transportation Nationwide',
      description: 'CarLogix - Your expert for professional vehicle transportation. Cars, trucks, express service and more. Over 41 years of experience in vehicle logistics.'
    },
    nav: {
      home: 'Home',
      company: 'Company',
      services: 'Services',
      career: 'Career',
      business: 'Business Customers',
      contact: 'Contact'
    },
    common: {
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      hours: 'Opening Hours',
      more: 'Learn more',
      contact: 'Get in touch',
      call: 'Call',
      send: 'Send'
    }
  },
  fr: {
    meta: {
      title: 'CarLogix - Transport Professionnel de Véhicules à l\'échelle Nationale',
      description: 'CarLogix - Votre expert pour le transport professionnel de véhicules. Voitures, camions, service express et plus. Plus de 41 ans d\'expérience en logistique automobile.'
    },
    nav: {
      home: 'Accueil',
      company: 'Entreprise',
      services: 'Services',
      career: 'Carrière',
      business: 'Clients Professionnels',
      contact: 'Contact'
    },
    common: {
      phone: 'Téléphone',
      email: 'E-mail',
      address: 'Adresse',
      hours: 'Heures d\'ouverture',
      more: 'En savoir plus',
      contact: 'Nous contacter',
      call: 'Appeler',
      send: 'Envoyer'
    }
  },
  es: {
    meta: {
      title: 'CarLogix - Transporte Profesional de Vehículos a Nivel Nacional',
      description: 'CarLogix - Su experto en transporte profesional de vehículos. Coches, camiones, servicio express y más. Más de 41 años de experiencia en logística de vehículos.'
    },
    nav: {
      home: 'Inicio',
      company: 'Empresa',
      services: 'Servicios',
      career: 'Carrera',
      business: 'Clientes Empresariales',
      contact: 'Contacto'
    },
    common: {
      phone: 'Teléfono',
      email: 'Correo electrónico',
      address: 'Dirección',
      hours: 'Horario de apertura',
      more: 'Saber más',
      contact: 'Póngase en contacto',
      call: 'Llamar',
      send: 'Enviar'
    }
  },
  it: {
    meta: {
      title: 'CarLogix - Trasporto Professionale di Veicoli a Livello Nazionale',
      description: 'CarLogix - Il vostro esperto per il trasporto professionale di veicoli. Auto, camion, servizio express e altro. Oltre 41 anni di esperienza nella logistica dei veicoli.'
    },
    nav: {
      home: 'Home',
      company: 'Azienda',
      services: 'Servizi',
      career: 'Carriera',
      business: 'Clienti Aziendali',
      contact: 'Contatto'
    },
    common: {
      phone: 'Telefono',
      email: 'Email',
      address: 'Indirizzo',
      hours: 'Orari di apertura',
      more: 'Scopri di più',
      contact: 'Mettiti in contatto',
      call: 'Chiama',
      send: 'Invia'
    }
  },
  nl: {
    meta: {
      title: 'CarLogix - Professioneel Voertuigtransport Landelijk',
      description: 'CarLogix - Uw expert voor professioneel voertuigtransport. Auto\'s, vrachtwagens, express service en meer. Meer dan 41 jaar ervaring in voertuiglogistiek.'
    },
    nav: {
      home: 'Home',
      company: 'Bedrijf',
      services: 'Diensten',
      career: 'Carrière',
      business: 'Zakelijke Klanten',
      contact: 'Contact'
    },
    common: {
      phone: 'Telefoon',
      email: 'E-mail',
      address: 'Adres',
      hours: 'Openingstijden',
      more: 'Meer weten',
      contact: 'Contact opnemen',
      call: 'Bellen',
      send: 'Verzenden'
    }
  }
};