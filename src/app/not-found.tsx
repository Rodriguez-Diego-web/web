import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seite nicht gefunden - Rodriguez Web',
  description: 'Die gesuchte Seite wurde nicht gefunden. Entdecken Sie unsere aktuellen Projekte und Dienstleistungen.',
  robots: 'noindex, nofollow',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-4">Seite nicht gefunden</h2>
          <p className="text-gray-300 mb-8">
            Die gesuchte Seite existiert leider nicht mehr. Möglicherweise wurde sie verschoben oder entfernt.
          </p>
        </div>

        <div className="space-y-4">
          <Link 
            href="/portfolio"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Portfolio ansehen
          </Link>
          
          <Link 
            href="/services"
            className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Unsere Leistungen
          </Link>
          
          <Link 
            href="/contact"
            className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Kontakt aufnehmen
          </Link>
          
          <Link 
            href="/"
            className="block w-full border border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Zur Startseite
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-400">
          <p>Suchten Sie nach einem alten Portfolio-Projekt?</p>
          <p>Schauen Sie in unserem aktualisierten Portfolio vorbei!</p>
        </div>
      </div>
    </div>
  );
} 