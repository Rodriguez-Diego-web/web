'use client';

import React, { useEffect } from 'react';
import { trackPageView } from '@/lib/analytics';

const Analytics = () => {
  useEffect(() => {
    // Track page view when the component mounts
    trackPageView();

    // Track page views on route changes
    const handleRouteChange = (url: string) => {
      trackPageView(url);
    };

    // Add event listener for route changes
    window.addEventListener('popstate', () => handleRouteChange(window.location.pathname));

    return () => {
      // Clean up event listener
      window.removeEventListener('popstate', () => handleRouteChange(window.location.pathname));
    };
  }, []);

  return null; // This component doesn't render anything
};

export default Analytics;
