import React, { useState } from 'react';
import { X, Settings, Shield, BarChart3, Target, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { useCookieConsent, type CookiePreferences } from '@/hooks/useCookieConsent';

interface CookieConsentProps {
  onClose?: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ onClose }) => {
  const { consentState, updateConsent, acceptAll, rejectAll } = useCookieConsent();
  const [showSettings, setShowSettings] = useState(false);
  const [tempPreferences, setTempPreferences] = useState<CookiePreferences>(
    consentState.preferences
  );

  if (consentState.hasConsented) {
    return null;
  }

  const handleAcceptAll = () => {
    acceptAll();
    onClose?.();
  };

  const handleRejectAll = () => {
    rejectAll();
    onClose?.();
  };

  const handleSaveSettings = () => {
    updateConsent(tempPreferences);
    onClose?.();
  };

  const handleTogglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Cannot disable necessary cookies
    
    setTempPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const cookieCategories = [
    {
      key: 'necessary' as const,
      icon: Shield,
      title: 'Notwendige Cookies',
      description: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.',
      required: true,
    },
    {
      key: 'functional' as const,
      icon: Wrench,
      title: 'Funktionale Cookies',
      description: 'Diese Cookies ermöglichen erweiterte Funktionalitäten und Personalisierung.',
      required: false,
    },
    {
      key: 'analytics' as const,
      icon: BarChart3,
      title: 'Analyse Cookies',
      description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.',
      required: false,
    },
    {
      key: 'marketing' as const,
      icon: Target,
      title: 'Marketing Cookies',
      description: 'Diese Cookies werden verwendet, um Werbung anzuzeigen, die für Sie relevant ist.',
      required: false,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-2 border-orange-200">
        <CardHeader className="relative pb-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                🍪 Cookie-Einstellungen
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-2">
                Wir verwenden Cookies und ähnliche Technologien, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="shrink-0 ml-4"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {!showSettings ? (
            // Main consent screen
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground leading-relaxed">
                <p className="mb-3">
                  Diese Website verwendet Cookies, um Ihnen die bestmögliche Benutzererfahrung zu bieten. 
                  Durch die weitere Nutzung der Website stimmen Sie der Verwendung von Cookies zu.
                </p>
                <p className="mb-3">
                  Sie können Ihre Einstellungen jederzeit ändern oder weitere Informationen in unserer{' '}
                  <a href="/datenschutz" className="text-primary hover:underline font-medium">
                    Datenschutzerklärung
                  </a>{' '}
                  finden.
                </p>
              </div>

              <Separator />

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-orange-600 hover:bg-orange-700 text-white"
                  size="lg"
                >
                  Alle akzeptieren
                </Button>
                <Button
                  onClick={() => setShowSettings(true)}
                  variant="outline"
                  className="flex-1 border-orange-200 hover:bg-orange-50"
                  size="lg"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Einstellungen
                </Button>
                <Button
                  onClick={handleRejectAll}
                  variant="outline"
                  className="flex-1"
                  size="lg"
                >
                  Alle ablehnen
                </Button>
              </div>
            </div>
          ) : (
            // Detailed settings screen
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Cookie-Kategorien</h3>
                <Button
                  variant="ghost"
                  onClick={() => setShowSettings(false)}
                  className="text-sm"
                >
                  ← Zurück
                </Button>
              </div>

              <div className="space-y-4">
                {cookieCategories.map(({ key, icon: Icon, title, description, required }) => (
                  <Card key={key} className="border border-border">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2">
                            <Icon className="h-4 w-4 text-orange-600" />
                            <h4 className="font-medium text-foreground">{title}</h4>
                            {required && (
                              <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                                Erforderlich
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{description}</p>
                        </div>
                        <Switch
                          checked={tempPreferences[key]}
                          onCheckedChange={() => handleTogglePreference(key)}
                          disabled={required}
                          className="ml-4 shrink-0"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Separator />

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleSaveSettings}
                  className="flex-1 bg-orange-600 hover:bg-orange-700 text-white"
                  size="lg"
                >
                  Einstellungen speichern
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  variant="outline"
                  className="flex-1 border-orange-200 hover:bg-orange-50"
                  size="lg"
                >
                  Alle akzeptieren
                </Button>
              </div>
            </div>
          )}

          <div className="text-xs text-muted-foreground text-center pt-4 border-t">
            Gemäß DSGVO • Weitere Informationen in unserer{' '}
            <a href="/datenschutz" className="text-primary hover:underline">
              Datenschutzerklärung
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};