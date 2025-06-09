'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCookieBite, FaCheck, FaTimes, FaCog, FaInfo } from 'react-icons/fa';
import { updateConsentState } from '@/lib/analytics';

interface CookieSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookieSettings: React.FC<CookieSettingsProps> = ({ isOpen, onClose }) => {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [necessaryCookies] = useState(true); // Always enabled
  
  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    setAnalyticsEnabled(consent === 'granted');
  }, [isOpen]);

  const handleSaveSettings = () => {
    const consentStatus = analyticsEnabled ? 'granted' : 'denied';
    console.log('CookieSettings: handleSaveSettings called with consent:', consentStatus);
    
    updateConsentState(consentStatus, 'CookieSettings.handleSaveSettings');
    localStorage.setItem('cookie-consent', consentStatus);
    
    onClose();
    
    // Reload page to apply changes
    if (analyticsEnabled && localStorage.getItem('cookie-consent') !== 'granted') {
      window.location.reload();
    }
  };

  const handleAcceptAll = () => {
    setAnalyticsEnabled(true);
    setTimeout(() => {
      handleSaveSettings();
    }, 100);
  };

  const handleRejectAll = () => {
    setAnalyticsEnabled(false);
    setTimeout(() => {
      handleSaveSettings();
    }, 100);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-dark border border-primary/30 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="p-6 border-b border-primary/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-primary">
                      <FaCog size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-light">Cookie-Einstellungen</h2>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-light transition-colors p-2"
                    aria-label="Schließen"
                  >
                    <FaTimes size={18} />
                  </button>
                </div>
                <p className="text-gray-300 mt-2">
                  Verwalten Sie Ihre Cookie-Präferenzen und Datenschutz-Einstellungen.
                </p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Necessary Cookies */}
                <div className="border border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <FaCheck className="text-green-500" size={18} />
                      <h3 className="text-lg font-semibold text-light">Notwendige Cookies</h3>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-400 mr-3">Immer aktiv</span>
                      <div className="relative">
                        <div className="bg-green-500 rounded-full w-12 h-6 flex items-center">
                          <div className="bg-white rounded-full w-5 h-5 ml-6 transition-all"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Diese Cookies sind für die grundlegende Funktionalität der Website erforderlich und können nicht deaktiviert werden. 
                    Sie speichern Ihre Cookie-Präferenzen und gewährleisten die Sicherheit der Website.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <FaInfo className="text-primary" size={18} />
                      <h3 className="text-lg font-semibold text-light">Analyse & Performance</h3>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                        className="relative focus:outline-none"
                        aria-label={analyticsEnabled ? 'Analytics deaktivieren' : 'Analytics aktivieren'}
                      >
                        <div className={`rounded-full w-12 h-6 flex items-center transition-colors ${
                          analyticsEnabled ? 'bg-primary' : 'bg-gray-600'
                        }`}>
                          <div className={`bg-white rounded-full w-5 h-5 transition-all ${
                            analyticsEnabled ? 'ml-6' : 'ml-1'
                          }`}></div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen 
                    anonym sammeln und weitergeben. Wir verwenden Google Analytics zur Analyse des Nutzerverhaltens.
                  </p>
                  <div className="text-xs text-gray-400">
                    <strong>Verwendete Dienste:</strong> Google Analytics (mit IP-Anonymisierung)
                  </div>
                </div>

                {/* Information */}
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <FaCookieBite className="text-primary mt-1" size={18} />
                    <div>
                      <h4 className="text-light font-medium mb-2">Weitere Informationen</h4>
                      <p className="text-gray-300 text-sm mb-3">
                        Detaillierte Informationen über unsere Verwendung von Cookies und den Schutz Ihrer Daten 
                        finden Sie in unserer Datenschutzerklärung.
                      </p>
                      <a 
                        href="/datenschutz" 
                        className="text-primary hover:underline text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Datenschutzerklärung lesen →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-primary/20 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleRejectAll}
                  className="flex-1 px-6 py-3 border border-gray-600 rounded-lg text-light hover:bg-gray-800 transition-colors"
                >
                  Alle ablehnen
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-6 py-3 bg-primary text-dark rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Alle akzeptieren
                </button>
                <button
                  onClick={handleSaveSettings}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-dark rounded-lg hover:from-primary/90 hover:to-primary/70 transition-colors font-medium"
                >
                  Auswahl speichern
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieSettings; 