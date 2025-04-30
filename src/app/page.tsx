import React from 'react';
import Hero from '@/components/sections/Hero';
import Portfolio from '@/components/sections/Portfolio';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import ContactForm from '@/components/ui/ContactForm';
import { portfolioItems } from '@/data/portfolio';
import { testimonials } from '@/data/testimonials';

export default function Home() {
  // Get featured portfolio items (limit to 3)
  const featuredPortfolio = portfolioItems.slice(0, 3);
  
  // Get featured testimonials (limit to 3)
  const featuredTestimonials = testimonials.slice(0, 3);
  
  return (
    <>
      <Hero />
      
      <Portfolio items={featuredPortfolio} showViewAll={true} />
      
      <Services />
      
      <About />
      
      <Testimonials testimonials={featuredTestimonials} />
      
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kontaktieren Sie uns</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
