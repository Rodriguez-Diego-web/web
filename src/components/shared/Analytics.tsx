'use client';

import React, { useEffect } from 'react';
import { Router } from 'next/router'; 
import { initializeGA, updateConsentState, trackPageView } from '@/lib/analytics';

const Analytics: React.FC = () => {
  useEffect(() => {
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
    if (!GA_ID) {
      console.warn('Rodriguez-Web Analytics.tsx: NEXT_PUBLIC_GA_ID not found, Analytics not initialized.');
      return;
    }

    // Initialize GA; this will set default consent if gtag isn't already loaded.
    initializeGA();

    // Check localStorage for previously given consent
    const consentStatus = localStorage.getItem('cookie-consent') as 'granted' | 'denied' | null;
    console.log('Rodriguez-Web Analytics.tsx: useEffect triggered. Consent status from localStorage:', consentStatus);

    if (consentStatus) {
      // If consent was previously set (e.g., on page reload after banner interaction),
      // update the consent state with gtag. This will also run the config with
      // cookie_update:true and send_page_view:true if 'granted'.
      updateConsentState(consentStatus, `Analytics.tsx - initial load, consent from localStorage: ${consentStatus}`);
    } else {
      // No consent information in localStorage implies default 'denied' state is active
      // (set by initializeGA or by gtag's own default if our default command hasn't run yet).
      // The CookieConsent component will handle user interaction and subsequent page reload,
      // leading to the 'if (consentStatus)' block above on the next load.
      console.log('Rodriguez-Web Analytics.tsx: No consent in localStorage. Default denied state is active.');
    }

    // Handle page views on subsequent route changes
    const handleRouteChange = (url: string) => {
      // Only track pageview if consent is granted
      const currentConsent = localStorage.getItem('cookie-consent') as 'granted' | 'denied' | null;
      if (currentConsent === 'granted') {
        console.log(`Rodriguez-Web Analytics.tsx: Route change to ${url}, consent granted, tracking pageview.`);
        trackPageView(url);
      } else {
        console.log(`Rodriguez-Web Analytics.tsx: Route change to ${url}, consent not granted, not tracking pageview.`);
      }
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    // Initial page view for the first load is handled by the 'config' command
    // in 'updateConsentState' if consent is 'granted' from localStorage, or by the initial
    // 'config' in 'initializeGA' if default consent allowed it (which it doesn't by our setup).

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return null; // This component does not render anything
};

export default Analytics;
