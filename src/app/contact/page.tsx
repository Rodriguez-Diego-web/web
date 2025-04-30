import React from 'react';
import ContactForm from '@/components/ui/ContactForm';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Kontakt | Rodriguez-Web',
  description: 'Kontaktieren Sie uns für Ihre Webprojekte. Wir freuen uns auf Ihre Anfrage und beraten Sie gerne persönlich.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontakt aufnehmen</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Haben Sie Fragen oder möchten Sie ein Projekt mit uns starten? 
            Kontaktieren Sie uns! Wir freuen uns auf Ihre Anfrage.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Schreiben Sie uns</h2>
              <ContactForm />
            </div>
            
            <div className="lg:pl-12">
              <h2 className="text-3xl font-bold mb-8">Kontaktinformationen</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">E-Mail</h3>
                    <p className="text-gray-700">info@rodriguez-web.de</p>
                    <a href="mailto:info@rodriguez-web.de" className="text-primary hover:underline">
                      info@rodriguez-web.de
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaPhone className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Telefon</h3>
                    <p className="text-gray-700">Mo-Fr: 9:00 - 17:00 Uhr</p>
                    <a href="tel:+491234567890" className="text-primary hover:underline">
                      +49 123 456 7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Adresse</h3>
                    <p className="text-gray-700">
                      Musterstraße 123<br />
                      12345 Musterstadt<br />
                      Deutschland
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaCalendarAlt className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Beratungstermin</h3>
                    <p className="text-gray-700 mb-4">
                      Buchen Sie einen kostenlosen 30-minütigen Beratungstermin mit unseren Experten.
                    </p>
                    <Button
                      href="https://calendly.com/rodriguez-web/beratung"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Termin vereinbaren
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-bold text-lg mb-4">Folgen Sie uns</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 p-3 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 p-3 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 p-3 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-[16/9] w-full relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.6024962795814!2d13.372469076940414!3d52.50793287196406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburger%20Tor!5e0!3m2!1sde!2sde!4v1682163423017!5m2!1sde!2sde"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Häufig gestellte Fragen</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">Wie lange dauert es, bis meine Website fertig ist?</h3>
                <p className="text-gray-700">
                  Unsere Standard-Lieferzeit beträgt 7 Tage für einfache Websites. Je nach Komplexität und Umfang 
                  kann die Entwicklung einer umfangreicheren Website oder eines E-Commerce-Shops auch 2-3 Wochen in Anspruch nehmen.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">Was kostet eine professionelle Website?</h3>
                <p className="text-gray-700">
                  Unsere Preise beginnen bei €999 für eine Standard-Website. Der genaue Preis hängt von Ihren 
                  spezifischen Anforderungen ab. In einem persönlichen Gespräch erstellen wir gerne ein 
                  individuelles Angebot für Sie.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">Kümmern Sie sich auch um das Hosting?</h3>
                <p className="text-gray-700">
                  Ja, wir bieten zuverlässige Hosting-Lösungen für alle von uns erstellten Websites an. 
                  In unseren Paketen ist das Hosting für das erste Jahr bereits inklusive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
