'use client';

import React, { useEffect } from 'react';
import { initializeGA, trackPageView } from '@/lib/analytics';

const Analytics = () => {
  useEffect(() => {
    // Check if user has consented to cookies
    const consent = localStorage.getItem('cookie-consent');
    
    // Only initialize analytics if user has accepted cookies
    if (consent === 'accepted') {
      // Initialize Google Analytics
      initializeGA();
      
      // Track initial page view
      trackPageView();

      // Track page views on route changes
      const handleRouteChange = (url: string) => {
        trackPageView(url);
      };

      // Add event listener for route changes
      window.addEventListener('popstate', () => handleRouteChange(window.location.pathname));

      // Add listener for Next.js route changes (through history)
      const originalPushState = window.history.pushState;
      window.history.pushState = function() {
        // Call the original function first
        // @ts-ignore - TypeScript doesn't know about the arguments object
        originalPushState.apply(this, arguments);
        
        // Then handle our custom logic
        handleRouteChange(window.location.pathname);
      };

      return () => {
        // Clean up event listeners
        window.removeEventListener('popstate', () => handleRouteChange(window.location.pathname));
        window.history.pushState = originalPushState;
      };
    }
  }, []);

  return null; // This component doesn't render anything
};

export default Analytics;
