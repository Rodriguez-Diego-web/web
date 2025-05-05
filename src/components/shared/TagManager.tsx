'use client';

import { useEffect } from 'react';

const TagManager = () => {
  const GTM_ID = 'GTM-XXXXXXX'; // Ersetze dies mit deiner tatsächlichen GTM-ID

  useEffect(() => {
    // Überprüfe, ob der Benutzer Cookies akzeptiert hat
    const consent = localStorage.getItem('cookie-consent');
    
    if (consent === 'accepted') {
      // Google Tag Manager Skript laden
      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `;
      document.head.appendChild(scriptElement);
      
      // GTM NoScript für Nutzer ohne JavaScript
      const noscriptElement = document.createElement('noscript');
      const iframeElement = document.createElement('iframe');
      iframeElement.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
      iframeElement.height = '0';
      iframeElement.width = '0';
      iframeElement.style.display = 'none';
      iframeElement.style.visibility = 'hidden';
      
      noscriptElement.appendChild(iframeElement);
      document.body.insertBefore(noscriptElement, document.body.firstChild);
    }
  }, []);

  return null; // Diese Komponente rendert nichts
};

export default TagManager;
