'use client';

import React, { useEffect } from 'react';
import { initializeGA, trackPageView, updateConsentState, GA_MEASUREMENT_ID } from '@/lib/analytics';

const Analytics = () => {
  useEffect(() => {
    // Function to set default consent (denied for all) if gtag is available
    // This should be called if no prior consent decision is found.
    const setDefaultConsent = () => {
      if (typeof window.gtag === 'function') {
        console.log('Rodriguez-Web Analytics.tsx: Setting default consent to denied.');
        window.gtag('consent', 'default', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          analytics_storage: 'denied',
          wait_for_update: 500, // Optional: time in ms to wait for an update command
        });
      } else {
        // If gtag is not ready, initializeGA will load it, and it will pick up defaults or wait for update.
        console.log('Rodriguez-Web Analytics.tsx: window.gtag not defined when trying to set default consent. GA initialization will handle defaults.');
      }
    };

    const consentStatus = localStorage.getItem('cookie-consent') as 'granted' | 'denied' | null;
    console.log('Rodriguez-Web Analytics.tsx: useEffect triggered. Consent status from localStorage:', consentStatus);

    if (consentStatus === 'granted') {
      console.log('Rodriguez-Web Analytics.tsx: Consent previously granted. Updating consent state and ensuring GA is initialized.');
      // Update consent state which will also run the config with cookie_update:true and send_page_view:true
      updateConsentState('granted', 'Analytics.tsx - initial load, consent already granted');
      // Ensure GA is loaded and configured (if not already by updateConsentState's config call)
      initializeGA(); 
    } else if (consentStatus === 'denied') {
      console.log('Rodriguez-Web Analytics.tsx: Consent previously denied. Updating consent state and ensuring GA is initialized.');
      updateConsentState('denied', 'Analytics.tsx - initial load, consent previously denied');
      initializeGA(); // Initialize GA to respect the 'denied' state
    } else {
      console.log('Rodriguez-Web Analytics.tsx: No consent status in localStorage. Setting default consent and initializing GA.');
      setDefaultConsent(); // Set defaults before GA tries to send anything
      initializeGA();    // Load GA; it will adhere to the defaults or wait for updateConsentState
    }

    // Track page views on subsequent route changes (SPA behavior)
    const handleRouteChange = (url: string) => {
      if (localStorage.getItem('cookie-consent') === 'granted' && GA_MEASUREMENT_ID) {
        console.log(`Rodriguez-Web Analytics.tsx: Route changed to ${url}. Tracking pageview.`);
        trackPageView(url); // Use the pageview utility from lib/analytics
      } else {
        console.log(`Rodriguez-Web Analytics.tsx: Route changed to ${url}. Consent not granted or GA_ID missing, not tracking pageview.`);
      }
    };

    // Monkey patch pushState and popstate for SPA navigation tracking
    const originalPushState = window.history.pushState;
    window.history.pushState = function(...args) {
      originalPushState.apply(this, args);
      handleRouteChange(window.location.pathname + window.location.search + window.location.hash);
    };

    const handlePopState = () => {
      handleRouteChange(window.location.pathname + window.location.search + window.location.hash);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.history.pushState = originalPushState; // Restore original pushState on unmount
    };
  }, []); // Empty dependency array means this runs once on mount

  return null; // This component does not render anything
};

export default Analytics;
