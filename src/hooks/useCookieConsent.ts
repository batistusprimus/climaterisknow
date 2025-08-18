'use client';

import { useState, useEffect, useCallback } from 'react';

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const COOKIE_CONSENT_KEY = 'sentinel-cookie-consent';
const COOKIE_PREFERENCES_KEY = 'sentinel-cookie-preferences';

const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  functional: false,
};

export function useCookieConsent() {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize consent status and preferences
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);

    setHasConsent(consent === 'true');

    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences);
        setPreferences(parsed);
      } catch (error) {
        console.error('Error parsing saved cookie preferences:', error);
        setPreferences(defaultPreferences);
      }
    }

    setIsLoading(false);
  }, []);

  // Apply preferences to external services
  const applyPreferences = useCallback((prefs: CookiePreferences) => {
    if (typeof window === 'undefined') return;

    // Google Analytics consent
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: prefs.analytics ? 'granted' : 'denied',
        ad_storage: prefs.marketing ? 'granted' : 'denied',
        ad_user_data: prefs.marketing ? 'granted' : 'denied',
        ad_personalization: prefs.marketing ? 'granted' : 'denied',
        functionality_storage: prefs.functional ? 'granted' : 'denied',
      });
    }

    // You can add other third-party service configurations here
    // For example: Facebook Pixel, LinkedIn Insight Tag, etc.
  }, []);

  // Save consent and preferences
  const saveConsent = useCallback((newPreferences: CookiePreferences) => {
    if (typeof window === 'undefined') return;

    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(newPreferences));
    
    setHasConsent(true);
    setPreferences(newPreferences);
    applyPreferences(newPreferences);
  }, [applyPreferences]);

  // Accept all cookies
  const acceptAll = useCallback(() => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    saveConsent(allAccepted);
  }, [saveConsent]);

  // Reject all non-essential cookies
  const rejectAll = useCallback(() => {
    const essentialOnly: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    saveConsent(essentialOnly);
  }, [saveConsent]);

  // Save custom preferences
  const savePreferences = useCallback((customPreferences: CookiePreferences) => {
    saveConsent(customPreferences);
  }, [saveConsent]);

  // Reset consent (for testing or user request)
  const resetConsent = useCallback(() => {
    if (typeof window === 'undefined') return;

    localStorage.removeItem(COOKIE_CONSENT_KEY);
    localStorage.removeItem(COOKIE_PREFERENCES_KEY);
    
    setHasConsent(null);
    setPreferences(defaultPreferences);
  }, []);

  // Check if specific cookie type is allowed
  const isAllowed = useCallback((type: keyof CookiePreferences): boolean => {
    return preferences[type];
  }, [preferences]);

  return {
    hasConsent,
    preferences,
    isLoading,
    acceptAll,
    rejectAll,
    savePreferences,
    resetConsent,
    isAllowed,
  };
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
