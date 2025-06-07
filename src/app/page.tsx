import React from 'react';
import Hero from '@/components/sections/Hero';
import Portfolio from '@/components/sections/Portfolio';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Partners from '@/components/sections/Partners';
import GoogleReviews from '@/components/GoogleReviews';
import ContactForm from '@/components/ui/ContactForm';
import { portfolioItems } from '@/data/portfolio';

export default function Home() {
  // Get featured portfolio items (limit to 3)
  const featuredPortfolio = portfolioItems.slice(0, 3);
  
  return (
    <>
      <Hero />
      
      <Portfolio items={featuredPortfolio} showViewAll={true} />
      
      <Services />
      
      <Partners />
      
      <About />
      
      <section className="py-20 bg-dark relative" id="testimonials">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">
              Das sagen <span className="text-primary">unsere Kunden</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Erfolgsgeschichten und Erfahrungen unserer zufriedenen Kunden.
            </p>
          </div>
          
          <GoogleReviews limit={3} />
        </div>
      </section>
      
      <section className="py-20 bg-dark relative" id="contact">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">
              Kontaktiere <span className="text-primary">mich</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Bereit für Ihre neue Website? Nehmen Sie jetzt Kontakt mit uns auf und lassen Sie uns gemeinsam Ihr Projekt besprechen.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
