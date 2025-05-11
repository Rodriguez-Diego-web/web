// This file contains utility functions for Google Analytics 4
// Production implementation for proper tracking

// Google Analytics Measurement ID - Replace with your actual GA4 ID when in production
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

// Define the Consent Mode V2 parameters
const consentParametersV2 = {
  'ad_storage': 'denied',
  'analytics_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied'
};

// Log GA_MEASUREMENT_ID at the module level to see its value when the module is loaded
console.log('Rodriguez-Web lib/analytics: GA_MEASUREMENT_ID (module level):', GA_MEASUREMENT_ID);

// Initialize Google Analytics
export const initializeGA = () => {
  console.log('Rodriguez-Web lib/analytics: initializeGA called. GA_MEASUREMENT_ID:', GA_MEASUREMENT_ID);

  if (!GA_MEASUREMENT_ID) {
    console.error('Rodriguez-Web lib/analytics: GA_MEASUREMENT_ID is not set. Analytics will not be initialized.');
    return;
  }

  if (typeof window !== 'undefined') {
    if (!window.gtag) {
      console.log('Rodriguez-Web lib/analytics: window.gtag NOT defined. Initializing...');

      // 1. Define dataLayer and gtag function stub
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        // @ts-ignore
        window.dataLayer.push(arguments);
      };
      console.log('Rodriguez-Web lib/analytics: gtag function stub defined.');

      // 2. Set default consent state VERY EARLY (using the stub)
      window.gtag('consent', 'default', { ...consentParametersV2 });
      console.log('Rodriguez-Web lib/analytics: gtag consent default set:', consentParametersV2);

      // 3. Send initial 'js' event (using the stub)
      window.gtag('js', new Date().toISOString());
      console.log('Rodriguez-Web lib/analytics: gtag js event sent.');

      // 4. Load the actual gtag.js script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      
      script.onload = () => {
        console.log('Rodriguez-Web lib/analytics: Gtag script loaded.');
        // Initial config is now handled by updateConsentState after consent is known
      };
      script.onerror = () => {
        console.error(`Rodriguez-Web lib/analytics: Failed to load gtag.js script for ${GA_MEASUREMENT_ID}`);
      };
      document.head.appendChild(script);
      console.log(`Rodriguez-Web lib/analytics: gtag.js script appended to head.`);

    } else {
      console.log('Rodriguez-Web lib/analytics: window.gtag IS ALREADY DEFINED.');
      // If gtag is already defined, its initial load (including default consent and initial config)
      // has already happened. Subsequent updates are handled by updateConsentState.
    }
  } else {
    console.log('Rodriguez-Web lib/analytics: window is undefined (not in browser).');
  }
};

// Update consent state
export const updateConsentState = (consent: 'granted' | 'denied', source: string) => {
  console.log(`Rodriguez-Web lib/analytics: updateConsentState called from "${source}". Consent: ${consent}`);
  if (!GA_MEASUREMENT_ID) {
    console.warn('Rodriguez-Web lib/analytics: GA_MEASUREMENT_ID not available for updateConsentState.');
    return;
  }
  if (typeof window !== 'undefined' && window.gtag) {
    const newConsentState = {
      'ad_storage': consent,
      'analytics_storage': consent,
      'ad_user_data': consent,
      'ad_personalization': consent
    };
    window.gtag('consent', 'update', newConsentState);
    console.log(`Rodriguez-Web lib/analytics: Consent updated to: ${consent} from source: ${source}`);

    // Configure GA or send page view based on the new consent state
    // This will be the first 'config' call if initializeGA didn't make one, or an update if it did.
    if (consent === 'granted') {
      window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: true });
      console.log('Rodriguez-Web lib/analytics: GA configured with send_page_view: true due to granted consent.');
    } else {
      // If consent is denied, still configure GA to respect the denial.
      // This ensures the tag is known but inactive regarding data collection disallowed by consent.
      window.gtag('config', GA_MEASUREMENT_ID);
      console.log('Rodriguez-Web lib/analytics: GA configured (respecting denied consent).');
    }
  } else {
    console.warn('Rodriguez-Web lib/analytics: window.gtag not found for updateConsentState.');
  }
};

// Track page views for subsequent navigations in SPA
export const trackPageView = (url: string) => {
  if (!GA_MEASUREMENT_ID) {
    console.warn('Rodriguez-Web lib/analytics: GA_MEASUREMENT_ID not available for trackPageView.');
    return;
  }
  
  const consentStatus = typeof window !== 'undefined' ? localStorage.getItem('cookie-consent') : null;
  console.log(`Rodriguez-Web lib/analytics: trackPageView called for URL: ${url}. Consent status from localStorage: ${consentStatus}`);

  if (consentStatus === 'accepted') {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: url,
        send_to: GA_MEASUREMENT_ID
      });
      console.log(`Rodriguez-Web lib/analytics: Page view event sent for ${url}`);
    } else {
      console.warn('Rodriguez-Web lib/analytics: window.gtag not found for trackPageView.');
    }
  } else {
    console.log(`Rodriguez-Web lib/analytics: Page view not sent for ${url} due to consent status: ${consentStatus}`);
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
