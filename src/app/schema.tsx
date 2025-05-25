'use client';

import Script from 'next/script';

export default function SchemaMarkup() {
  return (
    <>
      {/* Website Schema */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://www.rodriguez-web.de",
            "name": "Rodriguez-Web | Webdesign & Entwicklung Cuxhaven",
            "description": "Professionelles Webdesign und Webentwicklung in Cuxhaven. Spezialisiert auf lokale Unternehmen an der Nordseeküste.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.rodriguez-web.de/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      {/* Professional Service Schema */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Rodriguez-Web | Webdesign & Entwicklung Cuxhaven",
            "description": "Professionelle Webentwicklung und Webdesign in Cuxhaven. Spezialisiert auf lokale Unternehmen an der Nordseeküste.",
            "url": "https://www.rodriguez-web.de",
            "telephone": "+49 176 57606956",
            "email": "diego@rodriguez-web.de",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Delftstraße 8",
              "addressLocality": "Cuxhaven",
              "addressRegion": "Niedersachsen",
              "postalCode": "27474",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 53.85046614,
              "longitude": 8.743138377
            },
            "priceRange": "€€",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Monday",
                "opens": "09:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Tuesday",
                "opens": "09:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Wednesday",
                "opens": "09:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Thursday",
                "opens": "09:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Friday",
                "opens": "09:00",
                "closes": "18:00"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "2"
            },
            "review": [
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Maren Schmidt"
                },
                "reviewBody": "Diego hat unsere Geschäftswebsite komplett neu gestaltet. Das Design ist modern, benutzerfreundlich und sieht auf allen Geräten fantastisch aus!"
              },
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Thomas Weber"
                },
                "reviewBody": "Unsere neue Website von Rodriguez-Web hat unsere Kundenanfragen verdoppelt! Die lokale SEO-Optimierung für Cuxhaven war genau das, was wir brauchten."
              }
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 53.85046614,
                "longitude": 8.743138377
              },
              "geoRadius": "50000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Webdesign Dienstleistungen",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Responsive Website Erstellung",
                    "description": "Moderne, mobiloptimierte Webseiten für Unternehmen in Cuxhaven"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "WordPress Entwicklung",
                    "description": "Professionelle WordPress-Websites mit individuellen Themes für Cuxhavener Geschäfte"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Lokale SEO Optimierung",
                    "description": "Suchmaschinenoptimierung speziell für Unternehmen an der Nordseeküste"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* Person Schema for Diego Rodriguez */}
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Diego Rodriguez",
            "jobTitle": "Webdesigner & Entwickler",
            "worksFor": {
              "@type": "Organization",
              "name": "Rodriguez-Web"
            },
            "knowsAbout": ["Webdesign", "SEO", "WordPress", "React", "Next.js", "TailwindCSS"],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Cuxhaven",
              "addressRegion": "Niedersachsen",
              "addressCountry": "DE"
            },
            "sameAs": [
              "https://www.linkedin.com/in/diego-rodriguez-padinro",
              "https://www.instagram.com/diego_rodriguez_webdesign/",
              "https://www.facebook.com/profile.php?id=61556959635307"
            ]
          })
        }}
      />
    </>
  );
}
