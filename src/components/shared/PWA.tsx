'use client';

import { useEffect, useState } from 'react';

const PWA = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [isInstallPromptVisible, setIsInstallPromptVisible] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // Show update notification
                  console.log('New version available! Please refresh.');
                }
              });
            }
          });
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }

    // Handle online/offline status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Handle PWA install prompt
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallPromptVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Handle PWA app installed
    const handleAppInstalled = () => {
      console.log('PWA was installed');
      setIsInstallPromptVisible(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      setDeferredPrompt(null);
      setIsInstallPromptVisible(false);
    }
  };

  return (
    <>
      {/* Offline indicator */}
      {!isOnline && (
        <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-2 z-50">
          <span>Sie sind offline. Einige Funktionen sind möglicherweise eingeschränkt.</span>
        </div>
      )}

      {/* PWA Install Prompt */}
      {isInstallPromptVisible && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-dark border border-primary/30 rounded-lg p-4 shadow-lg z-50">
          <div className="flex items-start gap-3">
            <div className="text-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-light font-semibold mb-1">
                Rodriguez-Web installieren
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Installieren Sie unsere App für schnelleren Zugriff und bessere Performance.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleInstallClick}
                  className="px-3 py-1 bg-primary text-dark rounded text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Installieren
                </button>
                <button
                  onClick={() => setIsInstallPromptVisible(false)}
                  className="px-3 py-1 border border-gray-600 text-gray-300 rounded text-sm hover:bg-gray-800 transition-colors"
                >
                  Später
                </button>
              </div>
            </div>
            <button
              onClick={() => setIsInstallPromptVisible(false)}
              className="text-gray-400 hover:text-light"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PWA; 