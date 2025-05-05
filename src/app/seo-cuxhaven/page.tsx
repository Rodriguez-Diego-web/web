'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaSearch, FaMapMarkerAlt, FaChartLine, FaMobileAlt, FaTools, FaRegFileAlt } from 'react-icons/fa';

const SEOCuxhaven = () => {
  const servicesRef = useRef(null);
  const faqRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });
  
  return (
    <main className="bg-dark text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/images/cuxhaven-skyline.jpg" 
            alt="SEO Optimierung Cuxhaven" 
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
              SEO Optimierung Cuxhaven
            </h1>
            <h2 className="text-xl md:text-2xl text-orange-500 mb-8">
              Lokale Suchmaschinenoptimierung für mehr Kunden aus der Region
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl">
              Als <strong>SEO-Experte aus Cuxhaven</strong> helfe ich lokalen Unternehmen in 
              <strong> Cuxhaven, Otterndorf, Dorum</strong> und der gesamten Nordseeküste, 
              besser gefunden zu werden. Mit maßgeschneiderten SEO-Strategien steigern wir Ihre 
              Sichtbarkeit in den lokalen Suchergebnissen und bringen mehr regionale Kunden auf Ihre Website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                SEO-Analyse anfordern
              </Link>
              <Link href="#services" className="btn-secondary">
                SEO-Leistungen entdecken
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Warum lokale SEO Section */}
      <section className="py-20 bg-black/20 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Warum lokale SEO für Ihr Unternehmen in Cuxhaven?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              46% aller Google-Suchen haben einen lokalen Bezug. Mit lokaler SEO sorgen Sie dafür, dass Kunden aus Ihrer Region Sie finden:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaMapMarkerAlt className="w-12 h-12 text-primary" />,
                title: "In Google Maps sichtbar sein",
                description: "Erscheinen Sie in der lokalen 3er-Pack Box von Google, wenn potenzielle Kunden nach Ihren Dienstleistungen in Cuxhaven suchen."
              },
              {
                icon: <FaSearch className="w-12 h-12 text-primary" />,
                title: "Lokale Suchanfragen gewinnen",
                description: "Seien Sie präsent, wenn jemand nach 'Dienstleistung + Cuxhaven' oder 'Dienstleistung in meiner Nähe' sucht."
              },
              {
                icon: <FaChartLine className="w-12 h-12 text-primary" />,
                title: "Mehr regionale Kunden",
                description: "Steigern Sie Ihren Umsatz durch gezielte Ansprache von Kunden aus dem Landkreis Cuxhaven und der Nordseeküste."
              },
              {
                icon: <FaMobileAlt className="w-12 h-12 text-primary" />,
                title: "Mobile Suchoptimierung",
                description: "Lokale Suchanfragen erfolgen meist mobil - optimiert für Touristen und Einwohner in Cuxhaven."
              },
              {
                icon: <FaTools className="w-12 h-12 text-primary" />,
                title: "Wettbewerbsvorteil",
                description: "Setzen Sie sich von der lokalen Konkurrenz in Cuxhaven ab durch bessere Rankings in den Suchergebnissen."
              },
              {
                icon: <FaRegFileAlt className="w-12 h-12 text-primary" />,
                title: "Messbarer Erfolg",
                description: "Konkrete Ergebnisse durch detaillierte Reports und nachvollziehbare Verbesserung der Rankings."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 border border-gray-800 rounded-lg hover:border-primary/50 transition-all duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Dienstleistungen */}
      <section id="services" className="py-20" ref={servicesRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isServicesInView ? { opacity: 1 } : { opacity: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">SEO-Leistungen für Cuxhaven</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Maßgeschneiderte SEO-Strategien für Unternehmen an der Nordseeküste:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Lokale SEO-Optimierung",
                description: "Umfassende Optimierung für lokale Suchen in Cuxhaven und Umgebung. Steigern Sie Ihre Sichtbarkeit in Google Maps und lokalen Suchergebnissen.",
                price: "Ab 499€",
                features: [
                  "Google My Business Optimierung",
                  "Lokale Keyword-Recherche",
                  "Optimierung für 'Nähe von'-Suchen",
                  "Lokale Backlinks aufbauen",
                  "NAP-Konsistenz (Name, Adresse, Telefon)",
                  "Lokale Branchenverzeichnisse"
                ]
              },
              {
                title: "SEO-Komplettpaket für Websites",
                description: "Ganzheitliche SEO-Strategie für Ihre Website mit Fokus auf den Raum Cuxhaven und die Nordseeregion.",
                price: "Ab 999€",
                features: [
                  "Technisches SEO & Website-Analyse",
                  "Onpage-Optimierung",
                  "Content-Optimierung",
                  "UX & Ladezeit-Verbesserung",
                  "Mobil-Optimierung",
                  "Monatliche Performance-Reports"
                ]
              },
              {
                title: "Kontinuierliche SEO-Betreuung",
                description: "Laufende SEO-Betreuung für nachhaltige Ergebnisse und stetige Verbesserung Ihrer Rankings in Cuxhaven.",
                price: "Ab 299€/Monat",
                features: [
                  "Regelmäßige Keyword-Überwachung",
                  "Wettbewerbsanalyse",
                  "Content-Updates",
                  "Backlink-Monitoring",
                  "SEO-Reporting",
                  "Google-Updates im Blick"
                ]
              },
              {
                title: "SEO-Erstberatung & Audit",
                description: "Umfassende Analyse Ihrer Website und Ihrer aktuellen SEO-Situation mit konkreten Handlungsempfehlungen.",
                price: "299€",
                features: [
                  "SEO-Audit Ihrer Website",
                  "Konkurrenzanalyse in Cuxhaven",
                  "Keyword-Potentialanalyse",
                  "Technische Schwachstellen erkennen",
                  "Content-Empfehlungen",
                  "Maßnahmenplan zur Optimierung"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isServicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card p-8 border border-gray-800 rounded-xl hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <p className="text-primary text-2xl font-bold mb-6">{service.price}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-6 h-6 mr-2 text-primary">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-8 w-full inline-block text-center bg-primary hover:bg-primary/90 text-dark font-medium py-3 px-6 rounded transition-colors duration-300">
                  Angebot anfordern
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black/20" ref={faqRef}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isFaqInView ? { opacity: 1 } : { opacity: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Häufige Fragen zu lokaler SEO</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Antworten auf die häufigsten Fragen zur SEO-Optimierung für Unternehmen in Cuxhaven:
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Wie lange dauert es, bis SEO-Maßnahmen wirken?",
                answer: "Die ersten Verbesserungen sind oft nach 4-8 Wochen sichtbar. Für signifikante Ergebnisse in den lokalen Suchergebnissen für Cuxhaven sollten Sie mit 3-6 Monaten rechnen. SEO ist eine langfristige Strategie, die sich nachhaltig auszahlt."
              },
              {
                question: "Was kostet SEO für ein Unternehmen in Cuxhaven?",
                answer: "Die Kosten hängen von der Größe Ihrer Website, Ihren Zielen und der Wettbewerbssituation in Ihrer Branche ab. Für lokale Unternehmen in Cuxhaven beginnen unsere SEO-Pakete bei 499€ für eine Basisoptimierung. Ein individuelles Angebot erstelle ich gerne nach einer Analyse Ihrer Website."
              },
              {
                question: "Warum ist lokale SEO für Unternehmen in Cuxhaven wichtig?",
                answer: "Die meisten Kunden suchen online nach lokalen Dienstleistungen und Produkten. Durch lokale SEO erscheinen Sie in den Suchergebnissen, wenn potenzielle Kunden aus Cuxhaven, Otterndorf oder der Umgebung nach Ihren Angeboten suchen. Dies führt zu qualifizierten Besuchern, die mit hoher Wahrscheinlichkeit zu Kunden werden."
              },
              {
                question: "Welche Maßnahmen umfasst die lokale SEO für Cuxhaven?",
                answer: "Die lokale SEO für Cuxhaven umfasst die Optimierung Ihres Google My Business Profils, die Integration lokaler Keywords in Ihre Website, den Aufbau von Einträgen in lokalen Verzeichnissen, die Generierung von Kundenbewertungen und die technische Optimierung Ihrer Website für mobile Endgeräte und Sprachsuche."
              },
              {
                question: "Wie messe ich den Erfolg meiner SEO-Maßnahmen?",
                answer: "Als Teil meiner SEO-Dienstleistungen erhalten Sie regelmäßige Reports mit den wichtigsten Kennzahlen: Entwicklung Ihrer Rankings für relevante Suchbegriffe, Sichtbarkeit in lokalen Suchergebnissen, organischer Traffic, Conversion-Rate und Verweildauer. So können Sie den ROI Ihrer SEO-Investition klar nachvollziehen."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isFaqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6 glass-card p-6 border border-gray-800 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="glass-card max-w-4xl mx-auto p-10 border border-primary/20 rounded-xl text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Bereit, in den lokalen Suchergebnissen ganz oben zu stehen?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Lassen Sie uns gemeinsam Ihre Sichtbarkeit in Cuxhaven und an der gesamten Nordseeküste steigern. 
              Kontaktieren Sie mich für eine kostenlose SEO-Erstberatung.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/contact" className="btn-primary-lg">
                Kostenlose SEO-Beratung vereinbaren
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SEOCuxhaven;
