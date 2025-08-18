'use client';

import React, { useState } from 'react';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import Button from './Button';
import Modal from './Modal';

export default function CookieSettings() {
  const [isOpen, setIsOpen] = useState(false);
  const { preferences, savePreferences, resetConsent } = useCookieConsent();
  const [localPreferences, setLocalPreferences] = useState(preferences);

  const handleOpen = () => {
    setLocalPreferences(preferences);
    setIsOpen(true);
  };

  const handleSave = () => {
    savePreferences(localPreferences);
    setIsOpen(false);
  };

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    if (type === 'essential') return; // Cannot disable essential cookies
    
    setLocalPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleResetConsent = () => {
    resetConsent();
    setIsOpen(false);
    // Reload page to show cookie banner again
    window.location.reload();
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="text-body-small text-neutral-500 hover:text-neutral-700 transition-colors underline"
      >
        Cookie Settings
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Cookie Settings"
        size="md"
      >
        <div className="space-y-6">
          <p className="text-body-regular text-neutral-600">
            Manage your cookie preferences. Changes will take effect immediately.
          </p>

          <div className="space-y-4">
            {/* Essential Cookies */}
            <div className="flex items-start justify-between p-4 border border-neutral-200 rounded-lg">
              <div className="flex-1 pr-4">
                <h4 className="font-semibold text-neutral-800 mb-1">Essential Cookies</h4>
                <p className="text-body-small text-neutral-600">
                  Required for site functionality, security, and session management. These cannot be disabled.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-11 h-6 bg-primary rounded-full">
                  <div className="w-5 h-5 bg-white rounded-full shadow transform translate-x-5"></div>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start justify-between p-4 border border-neutral-200 rounded-lg">
              <div className="flex-1 pr-4">
                <h4 className="font-semibold text-neutral-800 mb-1">Analytics Cookies</h4>
                <p className="text-body-small text-neutral-600">
                  Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
              </div>
              <div className="flex-shrink-0">
                <button
                  onClick={() => handlePreferenceChange('analytics')}
                  className="relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full"
                >
                  <div className={`w-11 h-6 rounded-full shadow-inner transition-colors ${
                    localPreferences.analytics ? 'bg-primary' : 'bg-neutral-300'
                  }`}>
                    <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                      localPreferences.analytics ? 'translate-x-5' : 'translate-x-0'
                    }`}></div>
                  </div>
                </button>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-start justify-between p-4 border border-neutral-200 rounded-lg">
              <div className="flex-1 pr-4">
                <h4 className="font-semibold text-neutral-800 mb-1">Marketing Cookies</h4>
                <p className="text-body-small text-neutral-600">
                  Used to track visitors across websites to display relevant and engaging advertisements.
                </p>
              </div>
              <div className="flex-shrink-0">
                <button
                  onClick={() => handlePreferenceChange('marketing')}
                  className="relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full"
                >
                  <div className={`w-11 h-6 rounded-full shadow-inner transition-colors ${
                    localPreferences.marketing ? 'bg-primary' : 'bg-neutral-300'
                  }`}>
                    <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                      localPreferences.marketing ? 'translate-x-5' : 'translate-x-0'
                    }`}></div>
                  </div>
                </button>
              </div>
            </div>

            {/* Functional Cookies */}
            <div className="flex items-start justify-between p-4 border border-neutral-200 rounded-lg">
              <div className="flex-1 pr-4">
                <h4 className="font-semibold text-neutral-800 mb-1">Functional Cookies</h4>
                <p className="text-body-small text-neutral-600">
                  Enable enhanced functionality like language selection and region preferences.
                </p>
              </div>
              <div className="flex-shrink-0">
                <button
                  onClick={() => handlePreferenceChange('functional')}
                  className="relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full"
                >
                  <div className={`w-11 h-6 rounded-full shadow-inner transition-colors ${
                    localPreferences.functional ? 'bg-primary' : 'bg-neutral-300'
                  }`}>
                    <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                      localPreferences.functional ? 'translate-x-5' : 'translate-x-0'
                    }`}></div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-6">
            <div className="flex flex-col sm:flex-row gap-3 justify-between">
              <Button
                onClick={handleResetConsent}
                variant="outline"
                size="sm"
                className="text-alert border-alert hover:bg-alert hover:text-white"
              >
                Reset All Consent
              </Button>
              <div className="flex gap-3">
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="outline"
                  size="sm"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSave}
                  variant="primary"
                  size="sm"
                >
                  Save Preferences
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
