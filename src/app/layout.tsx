import './globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Analytics from '@/components/shared/Analytics';
import Script from 'next/script';
import CookieConsent from '@/components/ui/CookieConsent'; // Fixed import path
import SchemaMarkup from './schema';

// Configure the fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Rodriguez-Web | Professionelles Webdesign & Entwicklung in Cuxhaven',
  description: 'Diego Rodriguez aus Cuxhaven bietet professionelle Webseiten für kleine Unternehmen in nur 7 Tagen. Steigern Sie Ihre Online-Sichtbarkeit an der Nordseeküste mit maßgeschneiderten Lösungen und lokaler SEO-Expertise.',
  keywords: 'Diego Rodriguez, Webdesigner Cuxhaven, Webentwicklung Cuxhaven, Webseiten Nordseeküste, SEO Optimierung Cuxhaven, WordPress Cuxhaven, Responsive Design, Web Agentur Norddeutschland, Landkreis Cuxhaven',
  authors: [{ name: 'Diego Rodriguez', url: 'https://rodriguez-web.de' }],
  creator: 'Diego Rodriguez',
  publisher: 'Rodriguez-Web',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.rodriguez-web.de'),
  alternates: {
    canonical: '/',
    languages: {
      'de-DE': '/',
    },
  },
  openGraph: {
    title: 'Rodriguez-Web | Professionelle Webseiten von Diego Rodriguez aus Cuxhaven',
    description: 'Diego Rodriguez aus Cuxhaven bietet professionelle Webseiten für kleine Unternehmen in nur 7 Tagen. Steigern Sie Ihre Online-Sichtbarkeit mit maßgeschneiderten Lösungen aus Norddeutschland.',
    url: 'https://www.rodriguez-web.de',
    siteName: 'Rodriguez-Web',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/images/rodriguez-web-og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Diego Rodriguez - Webdesign & Entwicklung aus Cuxhaven',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rodriguez-Web | Professionelle Webseiten von Diego Rodriguez',
    description: 'Professionelle Webseiten für kleine Unternehmen in Cuxhaven und Umgebung',
    images: ['/images/rodriguez-web-og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'Q9xkuTbdDFXKoujFfjVmB9l7gpKWuioxasFalzS3vfw', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <Script
          id="google-consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Local Business Structured Data for SEO */}
        {/* Local Business Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Rodriguez-Web | Webdesign & Entwicklung Cuxhaven",
              "image": "https://www.rodriguez-web.de/images/logo.png",
              "url": "https://www.rodriguez-web.de",
              "telephone": "+49 176 57606956",
              "email": "diego@rodriguez-web.de",
              "description": "Professionelles Webdesign und Webentwicklung in Cuxhaven und Umgebung. Maßgeschneiderte responsive Websites für lokale Unternehmen an der Nordseeküste mit SEO-Optimierung und WordPress-Expertise.",
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
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61556959635307",
                "https://www.instagram.com/diego_rodriguez_webdesign/",
                "https://www.linkedin.com/in/diego-rodriguez-padinro"
              ],
              "priceRange": "€€",
              "areaServed": ["Cuxhaven", "Otterndorf", "Dorum", "Nordholz", "Landkreis Cuxhaven", "Nordseeküste"],
              "knowsAbout": ["Webdesign", "Responsive Design", "WordPress", "SEO Optimierung", "Webentwicklung", "Lokale Suchmaschinenoptimierung"],
              "makesOffer": [
                {
                  "@type": "Offer",
                  "name": "Responsive Website Erstellung",
                  "description": "Moderne, mobiloptimierte Webseiten für Unternehmen in Cuxhaven"
                },
                {
                  "@type": "Offer",
                  "name": "WordPress Entwicklung",
                  "description": "Professionelle WordPress-Websites mit individuellen Themes für Cuxhavener Geschäfte"
                },
                {
                  "@type": "Offer",
                  "name": "Lokale SEO Optimierung",
                  "description": "Suchmaschinenoptimierung speziell für Unternehmen an der Nordseeküste"
                }
              ],
              "founder": "Diego Rodriguez"
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-dark text-light flex flex-col min-h-screen`}>
        <Analytics />
        <SchemaMarkup />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
