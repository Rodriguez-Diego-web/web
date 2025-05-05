'use client';

import React, { useRef } from 'react';
import ContactForm from '@/components/ui/ContactForm';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, 
         FaLinkedin, FaInstagram, FaFacebook, FaArrowRight } from 'react-icons/fa';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

// Metadata is now in a separate file: metadata.ts

export default function ContactPage() {
  // Refs for scroll animations
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const mapRef = useRef(null);
  
  // InView checks
  const isFormInView = useInView(formRef, { once: false, amount: 0.2 });
  const isInfoInView = useInView(infoRef, { once: false, amount: 0.2 });
  const isMapInView = useInView(mapRef, { once: false, amount: 0.2 });
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative min-h-screen bg-dark overflow-hidden">
      {/* Subtle background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-60">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-primary/20 rounded-full blur-xl animate-pulse-slow" />
      </div>
      
      {/* Title Section - Positioned like in the screenshot */}
      <section className="pt-36 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-light">
            Kontakt <span className="text-primary">aufnehmen</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-16">
            Haben Sie Fragen oder möchten Sie ein Projekt mit mir starten? 
            Kontaktieren Sie mich! Ich freue mich auf Ihre Anfrage.
          </p>
        </div>
      </section>
      
      {/* Main Content Section - Two Column Layout as in Image 3 */}
      <section className="py-12 bg-dark relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form Section - "Schreiben Sie uns" */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -50 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Orange line accent above heading as in screenshot */}
              <div className="h-1 bg-primary w-16 mb-6"></div>
              <h2 className="text-3xl font-bold mb-8 text-light">
                Schreiben Sie <span className="text-primary">mir</span>
              </h2>
              
              {/* Contact Form - Matching the simple white input style in Image 1 & 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-8 rounded-lg relative overflow-hidden shadow-lg"
              >
                {/* Form implementation - basic styles to match screenshot */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Ihr Name" 
                      className="w-full px-4 py-3 rounded bg-dark/80 border border-gray-700 text-light focus:outline-none focus:border-primary"
                    />
                    <input 
                      type="email" 
                      placeholder="Ihre E-Mail-Adresse" 
                      className="w-full px-4 py-3 rounded bg-dark/80 border border-gray-700 text-light focus:outline-none focus:border-primary"
                    />
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Ihre Telefonnummer" 
                    className="w-full px-4 py-3 rounded bg-dark/80 border border-gray-700 text-light focus:outline-none focus:border-primary"
                  />
                  <input 
                    type="text" 
                    placeholder="Betreff" 
                    className="w-full px-4 py-3 rounded bg-dark/80 border border-gray-700 text-light focus:outline-none focus:border-primary"
                  />
                  <textarea 
                    placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage" 
                    rows={6} 
                    className="w-full px-4 py-3 rounded bg-dark/80 border border-gray-700 text-light focus:outline-none focus:border-primary resize-none"
                  ></textarea>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary hover:bg-primary/90 text-dark font-medium py-3 px-6 rounded transition-colors duration-300 flex justify-center items-center"
                  >
                    Anfrage senden
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Contact Information - "Kontaktinformationen" */}
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: 50 }}
              animate={isInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="lg:pl-12"
            >
              {/* Orange line accent above heading as in screenshot */}
              <div className="h-1 bg-primary w-16 mb-6"></div>
              <h2 className="text-3xl font-bold mb-8 text-light">
                Kontakt<span className="text-primary">informationen</span>
              </h2>
              
              {/* Contact Information Cards - Similar to Image 1 */}
              <motion.div
                className="space-y-8"
                initial="hidden"
                animate={isInfoInView ? "visible" : "hidden"}
                variants={containerVariants}
              >
                {/* E-Mail */}
                <motion.div 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-light">E-Mail</h3>
                    <p className="text-gray-400">Antwort innerhalb von 24 Stunden</p>
                    <a href="mailto:diego@rodriguez-web.de" className="text-primary hover:text-primary/80 transition-colors duration-300 inline-flex items-center mt-1">
                      diego@rodriguez-web.de
                      <FaArrowRight className="ml-2 w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
                
                {/* Telefon */}
                <motion.div 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaPhone className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-light">Telefon</h3>
                    <p className="text-gray-400">Mo-Fr: 9:00 - 18:00 Uhr</p>
                    <a href="tel:+4917657606956" className="text-primary hover:text-primary/80 transition-colors duration-300 inline-flex items-center mt-1">
                      +49 176 57606956
                      <FaArrowRight className="ml-2 w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
                
                {/* Adresse */}
                <motion.div 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-light">Adresse</h3>
                    <p className="text-gray-300">
                      Delftstraße 8<br />
                      27474 Cuxhaven<br />
                      Deutschland
                    </p>
                  </div>
                </motion.div>
                
                {/* Beratungstermin */}
                <motion.div 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaCalendarAlt className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-light">Beratungstermin</h3>
                    <p className="text-gray-300 mb-4">
                      Buchen Sie einen kostenlosen 30-minütigen Beratungstermin für Ihr Webprojekt.
                    </p>
                    <a 
                      href="https://calendly.com/rodriguez-web/beratung" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary hover:bg-primary/90 text-dark font-medium py-2 px-4 rounded inline-flex items-center transition-colors duration-300"
                    >
                      <span className="mr-2">Termin vereinbaren</span>
                      <FaArrowRight />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Social Media - Similar spacing to Image 1 */}
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={isInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h3 className="font-bold text-lg mb-4 text-light">Folgen Sie mir</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: FaLinkedin, link: "https://www.linkedin.com/in/diego-rodriguez-padinro" },
                    { icon: FaInstagram, link: "https://www.instagram.com/diego_rodriguez_webdesign/" },
                    { icon: FaFacebook, link: "https://www.facebook.com/profile.php?id=61556959635307" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-dark/80 border border-primary/30 w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-dark transition-all duration-300"
                      aria-label={`Visit my ${social.icon.name} page`}
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </motion.div>
              
              {/* Profile Image */}
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={isInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-primary/30 shadow-lg">
                  <img
                    src="/images/diego/396578739_818558143300968_920426191022673660_n-2.jpg"
                    alt="Diego Rodriguez - Web Design & Development"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section - Styling closer to Image 2 */}
      <section 
        ref={mapRef}
        className="py-16 bg-dark relative"
      >
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden border border-primary/20 shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2384.873240505842!2d8.743138377154638!3d53.850466141977624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b40eb232dd4e25%3A0x8d0b254b24222d66!2sWesterwischweg%2022A%2C%2027476%20Cuxhaven!5e0!3m2!1sde!2sde!4v1714926646203!5m2!1sde!2sde" 
              className="w-full h-[400px]" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="My office location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* Simple CTA Section */}
      <section className="py-16 bg-dark relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl text-gray-300 mb-6">
              Ich bin jederzeit für Sie da. Kontaktieren Sie mich für eine unverbindliche Beratung.
            </p>
            <a 
              href="mailto:info@rodriguez-web.de" 
              className="bg-primary hover:bg-primary/90 text-dark font-medium py-3 px-8 rounded inline-flex items-center transition-colors duration-300 text-lg"
            >
              Jetzt anfragen
              <FaArrowRight className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
