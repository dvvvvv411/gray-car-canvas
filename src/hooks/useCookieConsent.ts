import { useState, useEffect } from 'react';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export interface CookieConsentState {
  hasConsented: boolean;
  preferences: CookiePreferences;
  consentDate?: string;
}

const STORAGE_KEY = 'cookie-consent';

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always required
  analytics: false,
  marketing: false,
  functional: false,
};

export const useCookieConsent = () => {
  const [consentState, setConsentState] = useState<CookieConsentState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Error reading cookie consent from localStorage:', error);
    }
    
    return {
      hasConsented: false,
      preferences: defaultPreferences,
    };
  });

  const updateConsent = (preferences: CookiePreferences) => {
    const newState: CookieConsentState = {
      hasConsented: true,
      preferences,
      consentDate: new Date().toISOString(),
    };
    
    setConsentState(newState);
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    } catch (error) {
      console.error('Error saving cookie consent to localStorage:', error);
    }
  };

  const acceptAll = () => {
    updateConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    });
  };

  const rejectAll = () => {
    updateConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    });
  };

  const resetConsent = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Error removing cookie consent from localStorage:', error);
    }
    
    setConsentState({
      hasConsented: false,
      preferences: defaultPreferences,
    });
  };

  return {
    consentState,
    updateConsent,
    acceptAll,
    rejectAll,
    resetConsent,
  };
};