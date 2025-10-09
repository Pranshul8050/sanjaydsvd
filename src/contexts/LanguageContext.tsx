import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.emi': 'EMI Calculator',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.badge': 'Trusted Since 1992',
    'hero.title': 'Sanjay Finance',
    'hero.subtitle': '— Your Partner in Financial Progress.',
    'hero.description': 'Fast approvals, flexible plans, and expert guidance for Motor Finance & Insurance solutions tailored for farmers, truckers, and families.',
    'hero.cta.calculate': 'Calculate EMI',
    'hero.cta.apply': 'Apply Now',
    'hero.trust.approval': 'Quick Approval',
    'hero.trust.approval.desc': 'Within 24 Hours',
    'hero.trust.flexible': 'Flexible Plans',
    'hero.trust.flexible.desc': 'Tailored for You',
    'hero.trust.local': 'Local Experts',
    'hero.trust.local.desc': 'Rohtas Based',
    
    // Stats
    'stats.customers': 'Happy Customers',
    'stats.disbursed': 'Crores Disbursed',
    'stats.experience': 'Years Experience',
    'stats.approval': 'Approval Rate',
    
    // Services
    'services.title': 'Our Financial Solutions',
    'services.subtitle': 'Comprehensive finance and insurance services designed for the unique needs of Rohtas district',
    'services.learnMore': 'Learn More',
    'services.calculateEMI': 'Calculate Your EMI',
    
    // Footer
    'footer.tagline': 'Your trusted financial partner in Rohtas district',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Our Services',
    'footer.contact': 'Contact Us',
    'footer.rights': 'All rights reserved.',
    
    // Common
    'common.applyNow': 'Apply Now',
    'common.contactUs': 'Contact Us',
    'common.getQuote': 'Get Quote',
  },
  hi: {
    // Navbar
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.services': 'सेवाएं',
    'nav.emi': 'ईएमआई कैलकुलेटर',
    'nav.contact': 'संपर्क करें',
    
    // Hero
    'hero.badge': '1992 से विश्वसनीय',
    'hero.title': 'संजय फाइनेंस',
    'hero.subtitle': '— आपकी वित्तीय प्रगति में साथी।',
    'hero.description': 'किसानों, ट्रक मालिकों और परिवारों के लिए तेज स्वीकृति, लचीली योजनाएं और मोटर फाइनेंस और बीमा समाधानों के लिए विशेषज्ञ मार्गदर्शन।',
    'hero.cta.calculate': 'ईएमआई कैलकुलेट करें',
    'hero.cta.apply': 'अभी आवेदन करें',
    'hero.trust.approval': 'त्वरित स्वीकृति',
    'hero.trust.approval.desc': '24 घंटे के भीतर',
    'hero.trust.flexible': 'लचीली योजनाएं',
    'hero.trust.flexible.desc': 'आपके लिए अनुकूलित',
    'hero.trust.local': 'स्थानीय विशेषज्ञ',
    'hero.trust.local.desc': 'रोहतास आधारित',
    
    // Stats
    'stats.customers': 'खुश ग्राहक',
    'stats.disbursed': 'करोड़ वितरित',
    'stats.experience': 'वर्ष का अनुभव',
    'stats.approval': 'स्वीकृति दर',
    
    // Services
    'services.title': 'हमारे वित्तीय समाधान',
    'services.subtitle': 'रोहतास जिले की अनूठी जरूरतों के लिए डिज़ाइन किए गए व्यापक वित्त और बीमा सेवाएं',
    'services.learnMore': 'और जानें',
    'services.calculateEMI': 'अपनी ईएमआई गणना करें',
    
    // Footer
    'footer.tagline': 'रोहतास जिले में आपका विश्वसनीय वित्तीय साथी',
    'footer.quickLinks': 'त्वरित लिंक',
    'footer.services': 'हमारी सेवाएं',
    'footer.contact': 'संपर्क करें',
    'footer.rights': 'सर्वाधिकार सुरक्षित।',
    
    // Common
    'common.applyNow': 'अभी आवेदन करें',
    'common.contactUs': 'संपर्क करें',
    'common.getQuote': 'उद्धरण प्राप्त करें',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
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
