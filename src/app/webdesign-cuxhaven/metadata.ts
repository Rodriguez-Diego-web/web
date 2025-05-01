import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Webdesign Cuxhaven | Professionelle Webseiten von Diego Rodriguez',
  description: 'Webdesign in Cuxhaven von Diego Rodriguez - Ihr lokaler Webdesigner für moderne Websites, SEO & Webentwicklung. ✓ 7 Tage Lieferzeit ✓ Festpreise ✓ Made in Cuxhaven',
  keywords: 'Webdesign Cuxhaven, Webdesigner Cuxhaven, Diego Rodriguez Webdesign, Webseiten Cuxhaven, Website erstellen Cuxhaven, Responsive Webdesign Nordseeküste, Lokaler Webdesigner Cuxhaven, SEO Optimierung Cuxhaven, WordPress Cuxhaven',
  alternates: {
    canonical: 'https://www.rodriguez-web.de/webdesign-cuxhaven',
  },
  openGraph: {
    title: 'Webdesign Cuxhaven | Lokaler Webdesigner Diego Rodriguez',
    description: 'Professionelle Webseiten für Unternehmen aus Cuxhaven. Als lokaler Webdesigner biete ich maßgeschneiderte Websites mit SEO-Optimierung für Cuxhaven und die Nordseeküste.',
    url: 'https://www.rodriguez-web.de/webdesign-cuxhaven',
    type: 'website',
    images: [
      {
        url: 'https://www.rodriguez-web.de/images/webdesign-cuxhaven-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Webdesign Cuxhaven - Diego Rodriguez',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webdesign Cuxhaven | Diego Rodriguez',
    description: 'Professionelle Webseiten für Unternehmen aus Cuxhaven und der Nordseeküste. Responsive Design, SEO-Optimierung und persönlicher Service.',
    images: ['https://www.rodriguez-web.de/images/webdesign-cuxhaven-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
