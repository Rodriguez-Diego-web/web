import React from 'react';
import { serviceCategories, servicePackages, additionalServices } from '@/data/services';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Leistungen & Preise | Rodriguez-Web',
  description: 'Unsere Webdesign- und Entwicklungsleistungen für kleine und mittelständische Unternehmen. Transparente Pakete mit Festpreisen.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Unsere Leistungen</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Von der Design-Konzeption bis zum fertigen Webauftritt - wir bieten alles aus einer Hand. 
            Mit unseren transparenten Paketen wissen Sie genau, was Sie bekommen und was es kostet.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Was wir anbieten</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service) => (
              <div 
                key={service.id} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Unsere Pakete</h2>
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Wir bieten transparente Pakete mit Festpreisen, damit Sie genau wissen, was Sie bekommen und was es kostet.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {servicePackages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`bg-white rounded-xl overflow-hidden shadow-lg ${pkg.isPopular ? 'ring-2 ring-primary' : ''}`}
              >
                {pkg.isPopular && (
                  <div className="bg-primary text-white py-2 px-4 text-center text-sm font-medium">
                    Beliebteste Wahl
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <div className="text-4xl font-bold text-primary mb-6">
                    {pkg.price}
                  </div>
                  
                  <ul className="mb-8 space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    href="/contact" 
                    variant={pkg.isPopular ? "primary" : "outline"} 
                    fullWidth
                  >
                    Jetzt anfragen
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Zusätzliche Leistungen</h2>
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Ergänzen Sie Ihre Website mit diesen zusätzlichen Leistungen, um das Maximum aus Ihrer Online-Präsenz herauszuholen.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <div 
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-primary font-bold mb-4">{service.price}</p>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Haben Sie Fragen zu unseren Leistungen?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Wir beraten Sie gerne persönlich und erstellen ein individuelles Angebot für Ihr Projekt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Kontakt aufnehmen
            </Button>
            <Button href="tel:+491234567890" variant="outline" size="lg">
              +49 123 456 7890
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
