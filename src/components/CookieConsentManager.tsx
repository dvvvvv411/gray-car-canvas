import React, { useEffect, useState } from 'react';
import { CookieConsent } from './CookieConsent';
import { useCookieConsentContext } from '@/contexts/CookieConsentContext';

export const CookieConsentManager: React.FC = () => {
  const { consentState } = useCookieConsentContext();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Show banner after a short delay if consent hasn't been given
    const timer = setTimeout(() => {
      if (!consentState.hasConsented) {
        setShowBanner(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [consentState.hasConsented]);

  const handleClose = () => {
    setShowBanner(false);
  };

  if (!showBanner || consentState.hasConsented) {
    return null;
  }

  return <CookieConsent onClose={handleClose} />;
};