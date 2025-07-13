import React, { createContext, useContext, ReactNode } from 'react';
import { useCookieConsent, type CookieConsentState, type CookiePreferences } from '@/hooks/useCookieConsent';

interface CookieConsentContextType {
  consentState: CookieConsentState;
  updateConsent: (preferences: CookiePreferences) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  resetConsent: () => void;
  canUseAnalytics: boolean;
  canUseMarketing: boolean;
  canUseFunctional: boolean;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

interface CookieConsentProviderProps {
  children: ReactNode;
}

export const CookieConsentProvider: React.FC<CookieConsentProviderProps> = ({ 
  children 
}) => {
  const cookieConsent = useCookieConsent();

  const value: CookieConsentContextType = {
    ...cookieConsent,
    canUseAnalytics: cookieConsent.consentState.preferences.analytics,
    canUseMarketing: cookieConsent.consentState.preferences.marketing,
    canUseFunctional: cookieConsent.consentState.preferences.functional,
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsentContext = (): CookieConsentContextType => {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsentContext must be used within a CookieConsentProvider');
  }
  return context;
};