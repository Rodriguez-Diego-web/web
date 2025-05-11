// This file contains utility functions for Google Analytics 4
// Production implementation for proper tracking

// Google Analytics Measurement ID - Replace with your actual GA4 ID when in production
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Log GA_MEASUREMENT_ID at the module level to see its value when the module is loaded
console.log('Rodriguez-Web lib/analytics: GA_MEASUREMENT_ID (module level):', GA_MEASUREMENT_ID);

// Initialize Google Analytics
export const initializeGA = () => {
  // Log the ID at the beginning of the function call
  console.log('Rodriguez-Web lib/analytics: initializeGA called. GA_MEASUREMENT_ID:', GA_MEASUREMENT_ID);

  if (!GA_MEASUREMENT_ID) {
    console.error('Rodriguez-Web lib/analytics: GA_MEASUREMENT_ID is not set. Analytics will not be initialized.');
    return;
  }

  if (typeof window !== 'undefined') {
    console.log('Rodriguez-Web lib/analytics: window is defined');
    if (!window.gtag) {
      console.log('Rodriguez-Web lib/analytics: window.gtag is NOT defined, creating gtag function and loading script...');

      // Define dataLayer and gtag function first
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        // @ts-ignore
        window.dataLayer.push(arguments);
      };
      console.log('Rodriguez-Web lib/analytics: gtag function defined and dataLayer initialized.');

      // Send initial 'js' event.
      // Default consent should be set by Analytics.tsx before this or by gtag itself if not set.
      window.gtag('js', new Date().toISOString());
      console.log('Rodriguez-Web lib/analytics: Initial gtag(\'js\', new Date()) sent.');

      // Then load the gtag.js script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.onload = () => {
        console.log(`Rodriguez-Web lib/analytics: gtag.js script loaded for ${GA_MEASUREMENT_ID}`);
        // The config command with cookie_update and send_page_view will be called
        // by updateConsentState when consent is 'granted'.
      };
      script.onerror = () => {
        console.error(`Rodriguez-Web lib/analytics: Failed to load gtag.js script for ${GA_MEASUREMENT_ID}`);
      };
      document.head.appendChild(script);
      
      console.log(`Rodriguez-Web lib/analytics: gtag.js script appended to head.`);

    } else {
      console.log('Rodriguez-Web lib/analytics: gtag is ALREADY DEFINED. Relying on updateConsentState for re-config if necessary.');
      // If gtag is already defined, we assume it's loaded and primary configuration
      // post-consent will be handled by updateConsentState.
      // A config call here might be redundant or even problematic if not timed well with consent updates.
    }
  } else {
    console.log('Rodriguez-Web lib/analytics: window is undefined (not in browser).');
  }
};

// Track page views
export const trackPageView = (url?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url || window.location.pathname,
      page_location: window.location.href,
      page_title: document.title
    });
  }
};

// Track events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Update Consent State
export const updateConsentState = (consent: 'granted' | 'denied', source: string) => {
  if (!GA_MEASUREMENT_ID) {
    console.warn('Rodriguez-Web lib/analytics: GA_MEASUREMENT_ID is not defined. Consent not updated.');
    return;
  }
  console.log(`Rodriguez-Web lib/analytics: updateConsentState called from "${source}". Consent: ${consent}`);
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      ad_storage: consent === 'granted' ? 'granted' : 'denied',
      ad_user_data: consent === 'granted' ? 'granted' : 'denied',
      ad_personalization: consent === 'granted' ? 'granted' : 'denied',
      analytics_storage: consent === 'granted' ? 'granted' : 'denied',
    });
    console.log(`Rodriguez-Web lib/analytics: gtag consent updated to ${consent} for ${GA_MEASUREMENT_ID}.`);

    // Wenn der Consent auf 'granted' gesetzt wird, müssen wir die GA-Konfiguration erneut ausführen
    // damit Cookies gesetzt werden können und Pageviews (falls gewünscht) gesendet werden.
    if (consent === 'granted') {
      console.log(`Rodriguez-Web lib/analytics: Consent granted, re-running config for ${GA_MEASUREMENT_ID} with cookie_update and send_page_view.`);
      window.gtag('config', GA_MEASUREMENT_ID, {
        cookie_update: true,
        send_page_view: true, // Hier jetzt true, da consent erteilt
      });
      // Optional: Sende ein explizites page_view Event, falls die obige Konfiguration es nicht automatisch macht
      // oder wenn du einen spezifischen Pfad senden möchtest.
      // pageview(window.location.pathname);
    }
  } else {
    console.warn('Rodriguez-Web lib/analytics: gtag is not a function. Consent update failed. Source:', source);
  }
};

// Track specific events for better analytics
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submission', 'engagement', formName);
};

export const trackContactClick = (method: string) => {
  trackEvent('contact_click', 'engagement', method);
};

export const trackCTAClick = (ctaText: string, ctaLocation: string) => {
  trackEvent('cta_click', 'conversion', `${ctaText}_${ctaLocation}`);
};

export const trackLocationSearch = (location: string) => {
  trackEvent('location_search', 'search', location);
};

// Track when users view Cuxhaven-related content
export const trackCuxhavenContent = () => {
  trackEvent('view_cuxhaven_content', 'location', 'Cuxhaven');
};

// Declare gtag as a property of the window object
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: any[];
  }
}
