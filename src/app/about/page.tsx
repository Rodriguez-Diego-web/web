import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { FaCheck, FaUserTie, FaRegLightbulb, FaRegClock, FaRegStar } from 'react-icons/fa';

export const metadata = {
  title: 'Über Uns | Rodriguez-Web',
  description: 'Lernen Sie das Team hinter Rodriguez-Web kennen. Professionelle Webentwicklung und Webdesign für Unternehmen.',
};

export default function AboutPage() {
  // Team members data
  const teamMembers = [
    {
      name: 'Diego Rodriguez',
      position: 'Gründer & Webentwickler',
      bio: 'Mit über 8 Jahren Erfahrung in der Webentwicklung leitet Diego das technische Team und sorgt für optimale Performance und Funktionalität.',
      image: '/images/about/team-member-1.jpg',
    },
    {
      name: 'Julia Wagner',
      position: 'UI/UX Designerin',
      bio: 'Julia kreiert benutzerfreundliche und ästhetisch ansprechende Designs, die die Marke unserer Kunden perfekt repräsentieren.',
      image: '/images/about/team-member-2.jpg',
    },
    {
      name: 'Markus Schmidt',
      position: 'SEO & Marketing Experte',
      bio: 'Markus sorgt dafür, dass unsere Websites in den Suchmaschinen optimal platziert werden und maximale Sichtbarkeit erreichen.',
      image: '/images/about/team-member-3.jpg',
    },
  ];

  // Values data
  const values = [
    {
      icon: <FaUserTie className="w-8 h-8 text-primary" />,
      title: 'Professionalität',
      description: 'Wir arbeiten auf höchstem Niveau und liefern stets qualitativ hochwertige Ergebnisse.',
    },
    {
      icon: <FaRegLightbulb className="w-8 h-8 text-primary" />,
      title: 'Innovation',
      description: 'Wir bleiben am Puls der Zeit und setzen moderne Technologien und Trends ein.',
    },
    {
      icon: <FaRegClock className="w-8 h-8 text-primary" />,
      title: 'Zuverlässigkeit',
      description: 'Auf uns ist Verlass – wir halten Fristen ein und stehen zu unseren Zusagen.',
    },
    {
      icon: <FaRegStar className="w-8 h-8 text-primary" />,
      title: 'Kundenzufriedenheit',
      description: 'Zufriedene Kunden sind unser oberstes Ziel. Wir gehen auf Ihre Wünsche ein.',
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Über Rodriguez-Web</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Wir sind ein spezialisiertes Team von Webexperten mit einer Leidenschaft für Design und Technologie.
            Seit 2018 helfen wir Unternehmen dabei, ihre Online-Präsenz zu verbessern und ihre Ziele zu erreichen.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Unsere Geschichte</h2>
              <p className="text-lg text-gray-700 mb-6">
                Rodriguez-Web wurde 2018 von Diego Rodriguez gegründet, mit der Vision, 
                professionelle Webdesign- und Entwicklungsdienstleistungen anzubieten, 
                die für kleine und mittelständische Unternehmen zugänglich sind.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Was als Ein-Mann-Unternehmen begann, hat sich zu einem dynamischen Team von 
                Experten entwickelt, die alle ihre eigenen Stärken und Fachkenntnisse einbringen. 
                Heute sind wir stolz darauf, über 100 erfolgreiche Projekte abgeschlossen zu haben.
              </p>
              <p className="text-lg text-gray-700">
                Unser Fokus liegt auf der Kombination von ansprechendem Design, technischer Exzellenz 
                und Business-Strategie, um Websites zu erstellen, die nicht nur gut aussehen, 
                sondern auch messbare Ergebnisse für unsere Kunden liefern.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/office.jpg"
                  alt="Rodriguez-Web Büro"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-primary text-lg">Seit 2018</p>
                <p className="text-gray-700">Ihr Partner für Web</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Unsere Werte</h2>
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Diese Grundsätze leiten unser Handeln und unsere Zusammenarbeit mit Kunden.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Unser Team</h2>
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Lernen Sie die Experten kennen, die Ihre Website zum Leben erwecken.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Warum uns wählen?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <p className="text-lg">
                    <span className="font-bold">Schnelle Umsetzung</span> – Ihre Website in nur 7 Tagen
                  </p>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <p className="text-lg">
                    <span className="font-bold">Transparente Preise</span> – Keine versteckten Kosten
                  </p>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <p className="text-lg">
                    <span className="font-bold">Persönliche Betreuung</span> – Direkter Ansprechpartner für Sie
                  </p>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <p className="text-lg">
                    <span className="font-bold">Modernes Design</span> – Responsive und benutzerfreundlich
                  </p>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <p className="text-lg">
                    <span className="font-bold">Technische Expertise</span> – Aktuelle Technologien und Best Practices
                  </p>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2" />
                  <p className="text-lg">
                    <span className="font-bold">Nachhaltige Lösungen</span> – Wartungsfreundlich und zukunftssicher
                  </p>
                </li>
              </ul>
              
              <div className="mt-8">
                <Button href="/contact">Kontaktieren Sie uns</Button>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Unsere Zertifizierungen & Partnerschaften</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex justify-center items-center">
                  <Image
                    src="/images/badges/google-partner.png"
                    alt="Google Partner"
                    width={120}
                    height={60}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src="/images/badges/wordpress-expert.png"
                    alt="WordPress Expert"
                    width={120}
                    height={60}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src="/images/badges/shopify-partner.png"
                    alt="Shopify Partner"
                    width={120}
                    height={60}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src="/images/badges/woocommerce-expert.png"
                    alt="WooCommerce Expert"
                    width={120}
                    height={60}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src="/images/badges/seo-certified.png"
                    alt="SEO Certified"
                    width={120}
                    height={60}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src="/images/badges/responsive-design.png"
                    alt="Responsive Design"
                    width={120}
                    height={60}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit, Ihr Projekt mit uns zu starten?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Vision in eine beeindruckende Online-Präsenz verwandeln.
          </p>
          <Button href="/contact" size="lg">
            Jetzt Anfrage stellen
          </Button>
        </div>
      </section>
    </>
  );
}
