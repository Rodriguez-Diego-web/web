'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCookieBite, FaCheck, FaTimes } from 'react-icons/fa';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'accepted' || consent === 'rejected') {
      setHasConsented(true);
      // Only initialize analytics if consent was accepted
      if (consent === 'accepted') {
        // We could initialize analytics here if needed
      }
    } else {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowConsent(false);
    setHasConsented(true);
    // Reload page to initialize analytics after acceptance
    window.location.reload();
  };

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setShowConsent(false);
    setHasConsented(true);
  };

  if (hasConsented) {
    return null;
  }

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-dark border-t border-primary/30 shadow-lg"
        >
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="text-primary mt-1">
                  <FaCookieBite size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-light">Cookie-Einstellungen</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Diese Website verwendet Cookies und ähnliche Technologien, um Ihr Benutzererlebnis zu verbessern 
                    und Zugriffe auf unsere Website zu analysieren. Mit Ihrer Einwilligung verwenden wir Google Analytics, 
                    um zu verstehen, wie Sie mit unserer Website interagieren.
                  </p>
                  <a 
                    href="/datenschutz" 
                    className="text-primary hover:underline text-sm mt-2 inline-block"
                  >
                    Mehr erfahren in unserer Datenschutzerklärung
                  </a>
                </div>
              </div>
              <div className="flex gap-3 ml-auto">
                <button
                  onClick={rejectCookies}
                  className="px-4 py-2 border border-primary/30 rounded text-light hover:bg-primary/10 transition-colors flex items-center gap-2"
                >
                  <FaTimes size={14} />
                  <span>Ablehnen</span>
                </button>
                <button
                  onClick={acceptCookies}
                  className="px-4 py-2 bg-primary text-dark rounded hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  <FaCheck size={14} />
                  <span>Akzeptieren</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
