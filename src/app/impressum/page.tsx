'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-dark">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-light">Impressum</h1>
          
          <div className="prose prose-lg max-w-none prose-headings:text-light prose-p:text-gray-300">
            <h2>Angaben gemäß § 5 TMG</h2>
            
            <div className="mb-8">
              <h3>Verantwortlich für den Inhalt</h3>
              <p>
                <strong>Diego Rodriguez</strong><br />
                Rodriguez-Web<br />
                Delftstraße 8<br />
                27474 Cuxhaven<br />
                Deutschland
              </p>
            </div>
            
            <div className="mb-8">
              <h3>Kontakt</h3>
              <p>
                <strong>Telefon:</strong> +49 152 193 77 166<br />
                <strong>WhatsApp:</strong> +49 176 416 73 111<br />
                <strong>E-Mail:</strong> diego@rodriguez-web.de<br />
                <strong>Website:</strong> www.rodriguez-web.de
              </p>
            </div>
            
            <div className="mb-8">
              <h3>Berufsbezeichnung und berufsrechtliche Regelungen</h3>
              <p>
                <strong>Berufsbezeichnung:</strong> Webdesigner / Webentwickler<br />
                <strong>Zuständige Kammer:</strong> Nicht kammerpflichtig<br />
                <strong>Verliehen durch:</strong> Deutschland
              </p>
            </div>
            
            <div className="mb-8">
              <h3>EU-Streitschlichtung</h3>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>
            
            <div className="mb-8">
              <h3>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
            
            <div className="mb-8">
              <h3>Haftung für Inhalte</h3>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der 
                Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen 
                werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>
            
            <div className="mb-8">
              <h3>Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten 
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren 
                zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer 
                Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links 
                umgehend entfernen.
              </p>
            </div>
            
            <div className="mb-8">
              <h3>Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter 
                beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine 
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden 
                von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
            
            <div className="mb-8">
              <h3>Bildnachweise</h3>
              <p>
                Die auf dieser Website verwendeten Bilder stammen aus verschiedenen Quellen:
              </p>
              <ul>
                <li>Eigene Fotografien und Grafiken</li>
                <li>Lizenzfreie Bilder von Unsplash.com</li>
                <li>Stock-Fotos mit entsprechender Lizenz</li>
                <li>Kundenbereitgestellte Bilder mit Nutzungserlaubnis</li>
              </ul>
            </div>
            
            <div className="text-sm text-gray-400 mt-12">
              <p>Stand: {new Date().toLocaleDateString('de-DE')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 