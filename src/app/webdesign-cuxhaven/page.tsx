'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { trackCuxhavenContent, trackLocationSearch } from '@/lib/analytics';
import LocalSeoEnhancer from '@/components/shared/LocalSeoEnhancer';

// SEO-optimierte Seite für Webdesign in Cuxhaven
const WebdesignCuxhaven = () => {
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true });
  
  // Tracke den Besuch der Cuxhaven-Seite für Analytics
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      trackCuxhavenContent();
    }
  }, []);

  return (
    <main className="bg-dark text-white overflow-hidden">
      <LocalSeoEnhancer 
        city="Cuxhaven" 
        services={["Webdesign", "Webentwicklung", "Responsive Design", "SEO Optimierung"]} 
        keywords={["Webdesign", "Website erstellen", "Homepage", "Webseite"]} 
        nearbyLocations={["Otterndorf", "Dorum", "Nordholz", "Wremen", "Duhnen", "Döse", "Altenbruch"]} 
      />
      {/* Hero Section mit lokalem Bezug zu Cuxhaven */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/images/cuxhaven-skyline.jpg" 
            alt="Cuxhaven Skyline" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Webdesign in Cuxhaven
            </h1>
            <h2 className="text-xl md:text-2xl text-orange-500 mb-8">
              Professionelle Webseiten für lokale Unternehmen aus Cuxhaven und Umgebung
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl">
              Als <strong>erfahrener Webdesigner aus Cuxhaven</strong> biete ich maßgeschneiderte Webseiten, 
              die perfekt auf die Bedürfnisse lokaler Unternehmen zugeschnitten sind. 
              Mit lokalem Know-how und technischer Expertise verhilft <strong>Diego Rodriguez</strong> 
              Ihrem Unternehmen zu einer starken Online-Präsenz in <strong>Cuxhaven, Otterndorf, Dorum</strong> und der gesamten norddeutschen Region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Kostenloses Beratungsgespräch
              </Link>
              <Link href="#services" className="btn-secondary">
                Leistungen entdecken
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lokale Expertise */}
      <section id="local-expertise" className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              Ihre Vorteile mit einem <span className="text-orange-500">lokalen Webdesigner aus Cuxhaven</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-dark-700 p-6 rounded-lg">
                <div className="text-orange-500 text-4xl mb-4">01</div>
                <h3 className="text-xl font-semibold mb-4">Lokale Marktkenntnis</h3>
                <p>
                  Als Webdesigner aus Cuxhaven kenne ich den lokalen Markt und die spezifischen Bedürfnisse 
                  von Unternehmen in der Region. Ich weiß, wie Sie sich von Ihrer lokalen Konkurrenz abheben können.
                </p>
              </div>
              
              <div className="bg-dark-700 p-6 rounded-lg">
                <div className="text-orange-500 text-4xl mb-4">02</div>
                <h3 className="text-xl font-semibold mb-4">Persönlicher Service</h3>
                <p>
                  Direkter Kontakt ohne Umwege: Als Ihr Ansprechpartner in Cuxhaven bin ich jederzeit 
                  für Sie erreichbar – für persönliche Treffen und schnelle Unterstützung.
                </p>
              </div>
              
              <div className="bg-dark-700 p-6 rounded-lg">
                <div className="text-orange-500 text-4xl mb-4">03</div>
                <h3 className="text-xl font-semibold mb-4">Regionale SEO-Expertise</h3>
                <p>
                  Ich optimiere Ihre Website speziell für lokale Suchanfragen in Cuxhaven und Umgebung,
                  damit Ihre Kunden Sie genau dann finden, wenn sie nach Ihren Dienstleistungen suchen.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dienstleistungen für Cuxhaven */}
      <section id="services" className="py-20" ref={servicesRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-center">
              Webdesign-Leistungen in <span className="text-orange-500">Cuxhaven</span>
            </h2>
            <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
              Maßgeschneiderte Webdesign-Lösungen für Unternehmen jeder Größe aus Cuxhaven und der Nordseeküste
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div className="bg-gradient-to-br from-dark-700 to-dark-800 p-8 rounded-xl shadow-xl">
                <h3 className="text-2xl font-semibold mb-4 text-orange-500">Responsive Webdesign für Cuxhaven</h3>
                <p className="mb-6">
                  Moderne, mobilfreundliche Websites, die auf allen Geräten perfekt aussehen und funktionieren. 
                  Ideal für lokale Unternehmen aus Cuxhaven, die Kunden sowohl online als auch von Touristen gefunden werden möchten.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    Optimiert für Smartphones, Tablets und Desktop
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    Schnelle Ladezeiten für bessere Nutzererfahrung
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    Modernes Dark-Theme mit ansprechenden Akzenten
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    Benutzerzentriertes Design für hohe Conversion-Raten
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-dark-700 to-dark-800 p-8 rounded-xl shadow-xl">
                <h3 className="text-2xl font-semibold mb-4 text-orange-500">Lokale SEO für Cuxhaven</h3>
                <p className="mb-6">
                  Suchmaschinenoptimierung speziell für den Cuxhavener Markt. Damit Ihre Webseite von 
                  lokalen Kunden und Besuchern in der Region gefunden wird.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    Google Maps & Google Business Optimierung
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    Lokale Keywords für Cuxhaven und Umgebung
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    Strukturierte Daten für bessere Sichtbarkeit
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    Optimierung für "Nahe mir"-Suchanfragen
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-dark-700 to-dark-800 p-8 rounded-xl shadow-xl">
                <h3 className="text-2xl font-semibold mb-4 text-orange-500">WordPress für Cuxhavener Unternehmen</h3>
                <p className="mb-6">
                  Professionelle WordPress-Websites mit individuellen Funktionen, die genau auf Ihr 
                  Cuxhavener Unternehmen und Ihre Zielgruppe zugeschnitten sind.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    Individuelle Themes im Einklang mit Ihrer Marke
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    Benutzerfreundliches CMS zum einfachen Aktualisieren
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    Plugin-Integration für erweiterte Funktionalitäten
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    Regelmäßige Updates und Wartung
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-dark-700 to-dark-800 p-8 rounded-xl shadow-xl">
                <h3 className="text-2xl font-semibold mb-4 text-orange-500">E-Commerce für Cuxhaven</h3>
                <p className="mb-6">
                  Online-Shops, die lokale Produkte aus Cuxhaven und der Nordseeregion optimal präsentieren 
                  und für ein nahtloses Einkaufserlebnis sorgen.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    WooCommerce & Shopify Implementierung
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    Sichere Zahlungsabwicklung
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    Produktpräsentation mit hochwertigen Bildern
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    Click & Collect für lokale Kunden in Cuxhaven
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cuxhaven und Webdesign */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">
              Webdesign und <span className="text-orange-500">Cuxhaven</span> - eine perfekte Verbindung
            </h2>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p>
                Als Küstenstadt an der Nordsee bietet Cuxhaven einzigartige Chancen für Unternehmen, sich online zu präsentieren. 
                Die Verbindung von traditionellem Charme mit moderner Webpräsenz schafft ein authentisches digitales Erlebnis für Ihre Kunden.
              </p>
              
              <p>
                Die Wirtschaft in Cuxhaven ist geprägt von Tourismus, Fischerei, maritimen Dienstleistungen und mittelständischen 
                Unternehmen. Jede Branche hat spezifische Anforderungen an eine erfolgreiche Webpräsenz, die ich als lokaler 
                Webdesigner aus Cuxhaven bestens verstehe.
              </p>
              
              <p>
                <strong>Für Tourismusbetriebe in Cuxhaven</strong> entwickle ich Websites mit benutzerfreundlichen Buchungssystemen, 
                virtuellen Rundgängen und ansprechenden Bildergalerien, die die Schönheit der Nordseeküste perfekt einfangen.
              </p>
              
              <p>
                <strong>Handwerksbetriebe aus Cuxhaven</strong> profitieren von einer klaren Darstellung ihrer Leistungen, 
                überzeugenden Vorher-Nachher-Galerien und lokalisierten Kontaktinformationen, um Kunden in Cuxhaven und Umgebung zu erreichen.
              </p>
              
              <p>
                <strong>Restaurants und Cafés in Cuxhaven</strong> benötigen responsive Websites mit aktuellen Speisekarten, 
                Reservierungsmöglichkeiten und Google Maps-Integration, damit Einheimische und Touristen sie leicht finden können.
              </p>
              
              <p>
                Als Ihr Webdesigner aus Cuxhaven verstehe ich diese spezifischen Anforderungen und setze sie in maßgeschneiderte 
                Webseiten um, die genau auf Ihre Zielgruppe und Ihren Standort in Cuxhaven zugeschnitten sind.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Referenzen aus Cuxhaven */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Erfolgreiche <span className="text-orange-500">Webprojekte</span> in Cuxhaven
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Entdecken Sie meine Arbeit für lokale Unternehmen aus Cuxhaven und der Region
          </p>
          
          {/* Hier würden normalerweise Referenzprojekte dargestellt */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark-700 rounded-lg overflow-hidden">
              <div className="aspect-video relative bg-gray-800">
                {/* Hier würde ein Bild einer lokalen Kundenwebsite eingefügt */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Ferienwohnungen Cuxhaven</h3>
                <p className="text-gray-300 mb-4">Responsive Website mit Buchungssystem für Ferienwohnungen an der Nordseeküste</p>
                <Link href="/portfolio" className="text-orange-500 hover:text-orange-400">
                  Projekt ansehen
                </Link>
              </div>
            </div>
            
            <div className="bg-dark-700 rounded-lg overflow-hidden">
              <div className="aspect-video relative bg-gray-800">
                {/* Hier würde ein Bild einer lokalen Kundenwebsite eingefügt */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Restaurant Hafenblick</h3>
                <p className="text-gray-300 mb-4">Website mit Online-Reservierung und aktueller Speisekarte für ein Restaurant in Cuxhaven</p>
                <Link href="/portfolio" className="text-orange-500 hover:text-orange-400">
                  Projekt ansehen
                </Link>
              </div>
            </div>
            
            <div className="bg-dark-700 rounded-lg overflow-hidden">
              <div className="aspect-video relative bg-gray-800">
                {/* Hier würde ein Bild einer lokalen Kundenwebsite eingefügt */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sanitärbetrieb Cuxhaven</h3>
                <p className="text-gray-300 mb-4">SEO-optimierte Website für einen Handwerksbetrieb mit Kundenanfrage-Formular</p>
                <Link href="/portfolio" className="text-orange-500 hover:text-orange-400">
                  Projekt ansehen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ-Bereich mit lokalen Keywords */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Häufige Fragen zum <span className="text-orange-500">Webdesign in Cuxhaven</span>
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Antworten auf typische Fragen von Kunden aus Cuxhaven und Umgebung
          </p>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-dark-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Was kostet eine Website in Cuxhaven?</h3>
              <p>
                Die Kosten für eine professionelle Website in Cuxhaven variieren je nach Umfang und Funktionalität. 
                Als lokaler Webdesigner biete ich transparente Festpreise ohne versteckte Kosten. 
                Einfache Webseiten sind bereits ab 899€ erhältlich, während umfangreichere Projekte mit 
                speziellen Funktionen entsprechend höher kalkuliert werden. Kontaktieren Sie mich für ein 
                individuelles Angebot speziell für Ihr Cuxhavener Unternehmen.
              </p>
            </div>
            
            <div className="bg-dark-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Wie lange dauert die Erstellung einer Website für mein Unternehmen in Cuxhaven?</h3>
              <p>
                Als effizienter Webdesigner aus Cuxhaven kann ich Ihre Website innerhalb von nur 7 Tagen erstellen und live schalten. 
                Dieser schnelle Service ist besonders vorteilhaft für Cuxhavener Unternehmen, die rasch online präsent sein möchten. 
                Der genaue Zeitrahmen hängt vom Umfang des Projekts ab, aber durch meine lokale Präsenz in Cuxhaven 
                garantiere ich kurze Kommunikationswege und einen reibungslosen Ablauf.
              </p>
            </div>
            
            <div className="bg-dark-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Warum sollte ich einen lokalen Webdesigner aus Cuxhaven beauftragen?</h3>
              <p>
                Ein lokaler Webdesigner aus Cuxhaven bringt entscheidende Vorteile: Ich kenne den lokalen Markt und die 
                spezifischen Anforderungen von Unternehmen in der Region. Persönliche Treffen sind jederzeit möglich, 
                was die Kommunikation verbessert und Missverständnisse reduziert. Zudem kann ich Ihre Website gezielt 
                für lokale Suchanfragen in Cuxhaven optimieren, was Ihnen hilft, genau die Kunden anzusprechen, 
                die nach Ihren Dienstleistungen in der Region suchen.
              </p>
            </div>
            
            <div className="bg-dark-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Welche Branchen in Cuxhaven betreuen Sie hauptsächlich?</h3>
              <p>
                Als Webdesigner in Cuxhaven betreue ich Unternehmen aller Branchen. Besondere Erfahrung habe ich mit 
                Tourismusbetrieben, Ferienwohnungsanbietern, Gastronomie, Handwerksbetrieben und lokalen Dienstleistern. 
                Meine Webdesign-Lösungen werden jeweils individuell auf die spezifischen Anforderungen und Zielgruppen 
                der Branche in Cuxhaven und an der Nordseeküste angepasst.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA mit lokalem Bezug */}
      <section className="py-20 bg-gradient-to-r from-orange-600/20 to-orange-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Bereit für Ihre neue Website in <span className="text-orange-500">Cuxhaven</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Lassen Sie uns gemeinsam Ihre digitale Präsenz in Cuxhaven auf das nächste Level heben. 
            Kontaktieren Sie mich für ein unverbindliches Beratungsgespräch.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Jetzt Kontakt aufnehmen
            </Link>
            <div className="text-lg">
              Oder rufen Sie direkt an: <a href="tel:+4915219377166" className="font-semibold text-orange-400 hover:text-orange-300">+49 152 193 77 166</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WebdesignCuxhaven;
