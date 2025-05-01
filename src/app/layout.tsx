import './globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Analytics from '@/components/shared/Analytics';
import Script from 'next/script';
import CookieConsent from '@/components/ui/CookieConsent'; // Fixed import path

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
  title: 'Rodriguez-Web | Professionelle Webseiten von Diego Rodriguez aus Cuxhaven',
  description: 'Diego Rodriguez aus Cuxhaven bietet professionelle Webseiten für kleine Unternehmen in nur 7 Tagen. Steigern Sie Ihre Online-Sichtbarkeit ohne Technik-Stress mit maßgeschneiderten Lösungen aus Norddeutschland.',
  keywords: 'Diego Rodriguez, Webdesigner Cuxhaven, Webentwicklung Cuxhaven, Webseiten Norddeutschland, SEO Optimierung, Rodriguez-Web, responsive Webdesign, Cuxhaven, Webdesigner Norddeutschland',
  authors: [{ name: 'Diego Rodriguez', url: 'https://rodriguez-web.de' }],
  creator: 'Diego Rodriguez',
  publisher: 'Rodriguez-Web',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rodriguez-web.de'),
  alternates: {
    canonical: '/',
    languages: {
      'de-DE': '/',
    },
  },
  openGraph: {
    title: 'Rodriguez-Web | Professionelle Webseiten von Diego Rodriguez aus Cuxhaven',
    description: 'Diego Rodriguez aus Cuxhaven bietet professionelle Webseiten für kleine Unternehmen in nur 7 Tagen. Steigern Sie Ihre Online-Sichtbarkeit mit maßgeschneiderten Lösungen aus Norddeutschland.',
    url: 'https://rodriguez-web.de',
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
    google: 'google-site-verification-code', 
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Local Business Structured Data for SEO */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Rodriguez-Web",
              "image": "https://rodriguez-web.de/images/logo.png",
              "url": "https://rodriguez-web.de",
              "telephone": "+49 123 456789",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Musterstraße 123",
                "addressLocality": "Cuxhaven",
                "postalCode": "27472",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 53.8667,
                "longitude": 8.7000
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
                "closes": "17:00"
              },
              "sameAs": [
                "https://www.facebook.com/rodriguezcuxhaven",
                "https://www.instagram.com/diegorodriguez_web/",
                "https://www.linkedin.com/in/diego-rodriguez-web/"
              ],
              "priceRange": "€€",
              "servesCuisine": "Webdesign, Webentwicklung, SEO",
              "founder": "Diego Rodriguez"
            })
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  );
}
