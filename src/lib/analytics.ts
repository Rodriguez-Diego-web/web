// This file contains utility functions for handling analytics
// Replace with actual implementation for Google Analytics or Matomo

export const trackPageView = (url?: string) => {
  // Check if Google Analytics is loaded
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: url || window.location.pathname,
    });
  }
};

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submission events
export const trackFormSubmission = (formName: string) => {
  trackEvent('submit', 'form', formName);
};

// Declare gtag as a property of the window object
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}
