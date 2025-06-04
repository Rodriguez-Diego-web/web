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

    initializeGA();

    const consentStatus = localStorage.getItem('cookie-consent') as 'granted' | 'denied' | null;
    console.log('Rodriguez-Web Analytics.tsx: useEffect triggered. Consent status from localStorage:', consentStatus);

    if (consentStatus) {
      updateConsentState(consentStatus, `Analytics.tsx - initial load, consent from localStorage: ${consentStatus}`);
    } else {
      console.log('Rodriguez-Web Analytics.tsx: No consent in localStorage. Default denied state is active.');
    }

    const handleRouteChange = (url: string) => {
      const currentConsent = localStorage.getItem('cookie-consent') as 'granted' | 'denied' | null;
      if (currentConsent === 'granted') {
        console.log(`Rodriguez-Web Analytics.tsx: Route change to ${url}, consent granted, tracking pageview.`);
        trackPageView(url);
      } else {
        console.log(`Rodriguez-Web Analytics.tsx: Route change to ${url}, consent not granted, not tracking pageview.`);
      }
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return null;
};

export default Analytics;
