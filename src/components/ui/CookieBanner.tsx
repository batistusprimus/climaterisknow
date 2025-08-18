'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from './Button';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const COOKIE_CONSENT_KEY = 'sentinel-cookie-consent';
const COOKIE_PREFERENCES_KEY = 'sentinel-cookie-preferences';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);
    
    if (!hasConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else if (savedPreferences) {
      // Load saved preferences
      try {
        const parsed = JSON.parse(savedPreferences);
        setPreferences(parsed);
        // Apply preferences (would trigger analytics/marketing scripts)
        applyPreferences(parsed);
      } catch (error) {
        console.error('Error parsing cookie preferences:', error);
      }
    }
  }, []);

  const applyPreferences = (prefs: CookiePreferences) => {
    // Apply Google Analytics based on preferences
    if (prefs.analytics && typeof window !== 'undefined') {
      // Enable Google Analytics
      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted'
        });
      }
    } else if (typeof window !== 'undefined' && window.gtag) {
      // Disable Google Analytics
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }

    // Apply marketing cookies based on preferences
    if (prefs.marketing && typeof window !== 'undefined') {
      if (window.gtag) {
        window.gtag('consent', 'update', {
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted'
        });
      }
    } else if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    applyPreferences(allAccepted);
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences));
    applyPreferences(preferences);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(essentialOnly));
    setPreferences(essentialOnly);
    applyPreferences(essentialOnly);
    setIsVisible(false);
  };

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === 'essential') return; // Cannot disable essential cookies
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 left-4 sm:left-auto z-50 max-w-sm bg-white rounded-lg shadow-xl border border-neutral-200 animate-slide-up backdrop-blur-sm bg-white/95">
      <div className="p-4">
        {!showPreferences ? (
          // Main banner - compact version
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-body-regular font-semibold text-neutral-800">
                  Cookie Notice
                </h3>
              </div>
              <button
                onClick={handleRejectAll}
                className="text-neutral-400 hover:text-neutral-600 p-1 -mr-1"
                aria-label="Reject all cookies"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <p className="text-body-small text-neutral-600 leading-relaxed">
              We use cookies to improve your experience. See our{' '}
              <Link href="/legal/cookies" className="text-primary hover:text-primary-700 underline font-medium">
                Cookie Policy
              </Link>
              .
            </p>
            
            <div className="flex gap-2">
              <Button
                onClick={() => setShowPreferences(true)}
                variant="outline"
                size="xs"
                className="flex-1 text-xs"
              >
                Settings
              </Button>
              <Button
                onClick={handleAcceptAll}
                variant="primary"
                size="xs"
                className="flex-1 text-xs"
              >
                Accept All
              </Button>
            </div>
          </div>
        ) : (
          // Preferences panel - compact version
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-body-regular font-semibold text-neutral-800">
                Cookie Settings
              </h3>
              <button
                onClick={() => setShowPreferences(false)}
                className="text-neutral-400 hover:text-neutral-600 p-1"
                aria-label="Close preferences"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-3">
              {/* Essential Cookies */}
              <div className="flex items-center justify-between py-2">
                <div className="flex-1">
                  <div className="font-medium text-neutral-800 text-sm">Essential</div>
                  <div className="text-xs text-neutral-500">Required functionality</div>
                </div>
                <div className="w-8 h-4 bg-primary rounded-full flex-shrink-0">
                  <div className="w-3 h-3 bg-white rounded-full shadow transform translate-x-4 mt-0.5"></div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between py-2">
                <div className="flex-1">
                  <div className="font-medium text-neutral-800 text-sm">Analytics</div>
                  <div className="text-xs text-neutral-500">Usage tracking</div>
                </div>
                <button
                  onClick={() => handlePreferenceChange('analytics')}
                  className="relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full flex-shrink-0"
                >
                  <div className={`w-8 h-4 rounded-full transition-colors ${
                    preferences.analytics ? 'bg-primary' : 'bg-neutral-300'
                  }`}>
                    <div className={`w-3 h-3 bg-white rounded-full shadow transform transition-transform mt-0.5 ${
                      preferences.analytics ? 'translate-x-4' : 'translate-x-0'
                    }`}></div>
                  </div>
                </button>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-center justify-between py-2">
                <div className="flex-1">
                  <div className="font-medium text-neutral-800 text-sm">Marketing</div>
                  <div className="text-xs text-neutral-500">Targeted ads</div>
                </div>
                <button
                  onClick={() => handlePreferenceChange('marketing')}
                  className="relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full flex-shrink-0"
                >
                  <div className={`w-8 h-4 rounded-full transition-colors ${
                    preferences.marketing ? 'bg-primary' : 'bg-neutral-300'
                  }`}>
                    <div className={`w-3 h-3 bg-white rounded-full shadow transform transition-transform mt-0.5 ${
                      preferences.marketing ? 'translate-x-4' : 'translate-x-0'
                    }`}></div>
                  </div>
                </button>
              </div>

              {/* Functional Cookies */}
              <div className="flex items-center justify-between py-2">
                <div className="flex-1">
                  <div className="font-medium text-neutral-800 text-sm">Functional</div>
                  <div className="text-xs text-neutral-500">Preferences</div>
                </div>
                <button
                  onClick={() => handlePreferenceChange('functional')}
                  className="relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full flex-shrink-0"
                >
                  <div className={`w-8 h-4 rounded-full transition-colors ${
                    preferences.functional ? 'bg-primary' : 'bg-neutral-300'
                  }`}>
                    <div className={`w-3 h-3 bg-white rounded-full shadow transform transition-transform mt-0.5 ${
                      preferences.functional ? 'translate-x-4' : 'translate-x-0'
                    }`}></div>
                  </div>
                </button>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                onClick={handleRejectAll}
                variant="outline"
                size="xs"
                className="flex-1 text-xs"
              >
                Reject All
              </Button>
              <Button
                onClick={handleAcceptSelected}
                variant="primary"
                size="xs"
                className="flex-1 text-xs"
              >
                Save
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
