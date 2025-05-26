'use client';

import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import dynamic from 'next/dynamic';

interface LocalSeoEnhancerProps {
  city?: string;
  region?: string;
  keywords?: string[];
  services?: string[];
  nearbyLocations?: string[];
}

/**
 * Komponente zur Verbesserung der lokalen SEO mit zusätzlichen strukturierten Daten
 * Kann auf lokalen Landingpages wie webdesign-cuxhaven oder seo-cuxhaven verwendet werden
 */
const LocalSeoEnhancer: React.FC<LocalSeoEnhancerProps> = ({
  city = 'Cuxhaven',
  region = 'Niedersachsen',
  keywords = ['Webdesign', 'Webentwicklung', 'SEO'],
  services = ['Webdesign', 'Webentwicklung', 'SEO Optimierung'],
  nearbyLocations = ['Otterndorf', 'Dorum', 'Nordholz', 'Wremen', 'Duhnen', 'Döse', 'Altenbruch', 'Cuxhaven', 'Wurster Nordseeküste', 'Bremen', 'Hamburg','Stade', 'Bremerhaven'],
}) => {
  // Vermeide Hydration-Fehler, indem wir erst nach dem ersten Render rendern
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return null;
  }
  // Kombiniere Keywords mit lokalen Begriffen
  const localKeywords = keywords.flatMap(keyword => 
    [`${keyword} ${city}`, `${keyword} in ${city}`, `${keyword} ${region}`]
  );
  
  // Erstelle lokale Service-Beschreibungen
  const localServiceDescriptions = services.map(service => 
    `${service} in ${city} und Umgebung - Rodriguez Web bietet professionelle ${service}-Dienstleistungen für Unternehmen in ${city} und der gesamten Region ${region}.`
  );
  
  return (
    <>
      {/* LocalBusiness + Service Schema mit lokalem Fokus */}
      <Script
        id="local-business-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Rodriguez-Web | Webdesign & Entwicklung ${city}`,
            "description": `Professionelles Webdesign und Webentwicklung in ${city}. Maßgeschneiderte Websites mit lokalem Fokus für Unternehmen in ${city} und Umgebung.`,
            "url": "https://www.rodriguez-web.de",
            "telephone": "+49 176 57606956",
            "email": "diego@rodriguez-web.de",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Delftstraße 8",
              "addressLocality": city,
              "addressRegion": region,
              "postalCode": "27474",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 53.85046614,
              "longitude": 8.743138377
            },
            "areaServed": [
              city,
              ...nearbyLocations,
              `${region}`,
              "Nordseeküste"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": `Webdesign Dienstleistungen in ${city}`,
              "itemListElement": services.map((service, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": `${service} ${city}`,
                  "description": localServiceDescriptions[index]
                }
              }))
            }
          })
        }}
      />
      
      {/* FAQ Schema mit lokalen Fragen - gut für Featured Snippets */}
      <Script
        id="local-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": `Wie finde ich einen guten Webdesigner in ${city}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Bei der Suche nach einem Webdesigner in ${city} sollten Sie auf Lokalität, Portfolio, Referenzen und Expertise achten. Ein lokaler Anbieter wie Rodriguez-Web kennt die Besonderheiten der Region und kann Ihre Website speziell für Ihre Zielgruppe in ${city} und Umgebung optimieren.`
                }
              },
              {
                "@type": "Question",
                "name": `Was kostet eine Website in ${city}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Die Kosten für eine Website in ${city} variieren je nach Umfang und Anforderungen. Bei Rodriguez-Web beginnen die Preise für eine professionelle Website bei 1.099€. Kontaktiere mich für ein individuelles Angebot speziell für Ihr Unternehmen in ${city}.`
                }
              },
              {
                "@type": "Question",
                "name": `Warum ist lokales SEO für Unternehmen in ${city} wichtig?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Lokales SEO ist für Unternehmen in ${city} besonders wichtig, um in lokalen Suchergebnissen gefunden zu werden. Durch gezielte Optimierung für lokale Suchbegriffe wie "${city} + Ihre Dienstleistung" erhöhen Sie Ihre Sichtbarkeit bei potenziellen Kunden in ${city} und Umgebung, die gezielt nach lokalen Anbietern suchen.`
                }
              }
            ]
          })
        }}
      />
    </>
  );
};

export default LocalSeoEnhancer;
