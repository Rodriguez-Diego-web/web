// This file contains utility functions for Google Analytics 4
// Production implementation for proper tracking

// Google Analytics Measurement ID - Replace with your actual GA4 ID when in production
const GA_MEASUREMENT_ID = 'G-TWSR75HSRT'; // Rodriguez Web Analytics ID

// Initialize Google Analytics
export const initializeGA = () => {
  if (typeof window !== 'undefined' && !window.gtag) {
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_path: window.location.pathname,
        send_page_view: true,
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure'
      });
    `;
    
    document.head.appendChild(script1);
    document.head.appendChild(script2);
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
