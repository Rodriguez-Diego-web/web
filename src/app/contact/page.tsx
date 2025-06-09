'use client';

import React, { useRef, useState, Fragment } from 'react';
import ContactForm from '@/components/ui/ContactForm';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, 
         FaLinkedin, FaInstagram, FaFacebook, FaArrowRight, FaClipboardList } from 'react-icons/fa';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { trackFormSubmission } from '@/lib/analytics';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

// EmailJS Konfiguration
const SERVICE_ID = 'service_scn2e0i';
const TEMPLATE_ID = 'template_kzdp3yx';
const PUBLIC_KEY = 'CmONZH4pJJtAeVn3H';

// Metadata is now in a separate file: metadata.ts

// Definition der Optionen für die Listbox
const projectTypeOptions = [
  { id: '', name: '-- Projekttyp wählen --' },
  { id: 'website', name: 'Neue Website' },
  { id: 'redesign', name: 'Redesign bestehender Website' },
  { id: 'webshop', name: 'Webshop / E-Commerce' },
  { id: 'seo', name: 'SEO-Optimierung' },
  { id: 'other', name: 'Sonstiges' },
];

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
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

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Neuer Handler für Listbox-Änderungen
  const handleProjectTypeChange = (newProjectTypeId: string) => {
    setFormData(prev => ({
      ...prev,
      projectType: newProjectTypeId
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      console.log('Sende E-Mail über EmailJS:', formData);
      
      // EmailJS Anfrage vorbereiten
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "Nicht angegeben",
        projectType: formData.projectType,
        description: formData.message,
        site: "rodriguez-web.de (Kontaktseite)",
        date: new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
      };
      
      console.log('Template-Parameter (contact/page.tsx):', templateParams);

      // EmailJS initialisieren
      emailjs.init(PUBLIC_KEY);
      
      // EmailJS API aufrufen
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID, 
        templateParams
      );
      
      console.log('E-Mail erfolgreich gesendet!', response.status, response.text);
      
      // Analytics-Event für Formular-Submission
      trackFormSubmission('contact_page');
      
      // Formular zurücksetzen und Erfolgsmeldung anzeigen
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });
      
      setIsSubmitted(true);
      
      // Erfolgsmeldung nach 5 Sekunden ausblenden
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Fehler beim Senden der E-Mail:', err);
      setError(`Ein Fehler ist aufgetreten: ${err instanceof Error ? err.message : 'Unbekannter Fehler'}`);
    } finally {
      setIsSubmitting(false);
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
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <svg
                      className="w-16 h-16 text-primary mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold mb-2 text-light">Vielen Dank!</h3>
                    <p className="text-gray-300">
                      Ihre Anfrage wurde erfolgreich übermittelt. Wir werden uns in Kürze bei Ihnen melden.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="bg-red-900/30 text-red-400 p-4 rounded-lg mb-6 border border-red-800">
                        {error}
                      </div>
                    )}
                  
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ihr Name" 
                        required
                        className="w-full px-4 py-3 rounded bg-dark/80 border border-gray-700 text-light focus:outline-none focus:border-primary"
                      />
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Ihre E-Mail-Adresse" 
                        required
                        className="w-full px-4 py-3 rounded bg-dark/80 border border-gray-700 text-light focus:outline-none focus:border-primary"
                      />
                    </div>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Ihre Telefonnummer" 
                      className="w-full px-4 py-3 rounded bg-dark/80 border border-gray-700 text-light focus:outline-none focus:border-primary"
                    />
                    <div className="relative z-0 w-full mb-5 group">
                      <FaClipboardList className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 z-[5]" />
                      <Listbox value={formData.projectType} onChange={handleProjectTypeChange}>
                        <div className="relative">
                          <Listbox.Button className="relative w-full cursor-default rounded bg-dark/80 py-3 pl-10 pr-10 text-left border border-gray-700 text-light focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
                            <span className="block truncate">
                              {projectTypeOptions.find(opt => opt.id === formData.projectType)?.name || projectTypeOptions[0].name}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                          </Listbox.Button>
                          <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-dark/95 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-[50]">
                              {projectTypeOptions.map((option, optionIdx) => (
                                <Listbox.Option
                                  key={optionIdx}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${ // Tailwind Klassen für Optionen
                                      active ? 'bg-primary/70 text-white' : 'text-gray-200'
                                    }`
                                  }
                                  value={option.id}
                                >
                                  {({ selected }) => (
                                    <>
                                      <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                                        {option.name}
                                      </span>
                                      {selected ? (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-400">
                                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </Listbox>
                    </div>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage" 
                      rows={6} 
                      required
                      className="w-full px-4 py-3 rounded bg-dark/80 border border-gray-700 text-light focus:outline-none focus:border-primary resize-none"
                    ></textarea>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-primary hover:bg-primary/90 text-dark font-medium py-3 px-6 rounded transition-colors duration-300 flex justify-center items-center"
                    >
                      {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
                    </motion.button>
                  </form>
                )}
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
                    <a href="tel:+4915219377166" className="text-primary hover:text-primary/80 transition-colors duration-300 inline-flex items-center mt-1">
                      +49 152 193 77 166
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
                    <p className="text-gray-400">Büro in Cuxhaven</p>
                    <a href="https://maps.google.com/?q=Delftstraße+8,+27474+Cuxhaven" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors duration-300 inline-flex items-center mt-1">
                      Delftstraße 8, 27474 Cuxhaven
                      <FaArrowRight className="ml-2 w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
                
                {/* Terminvereinbarung */}
                <motion.div 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaCalendarAlt className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-light">Terminanfrage</h3>
                    <p className="text-gray-400">Einfach anrufen oder E-Mail senden</p>
                    <p className="text-primary mt-1">Persönliches Beratungsgespräch</p>
                  </div>
                </motion.div>
                
                {/* Social Media Section */}
                <motion.div variants={itemVariants} className="mt-12">
                  <h3 className="font-semibold text-lg mb-4 text-light">Folgen Sie mir</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/in/kadir-diego-padin-rodriguez/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary/10 hover:bg-primary/20 p-3 rounded-full transition-colors duration-300"
                    >
                      <FaLinkedin className="text-primary w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.instagram.com/diego_rodriguez_web/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary/10 hover:bg-primary/20 p-3 rounded-full transition-colors duration-300"
                    >
                      <FaInstagram className="text-primary w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Google Maps Section */}
      <motion.section 
        ref={mapRef}
        initial={{ opacity: 0 }}
        animate={isMapInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-dark/50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-light">
            Besuchen Sie <span className="text-primary">mich</span>
          </h2>
          <div className="rounded-xl overflow-hidden shadow-lg h-[450px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2366.096532620622!2d8.686876576934142!3d53.8603180725675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b40f3ed85c9e71%3A0x1d6df4dd97bdb8e!2sDelftstra%C3%9Fe%208%2C%2027474%20Cuxhaven!5e0!3m2!1sde!2sde!4v1699990594755!5m2!1sde!2sde" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Standort"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-4 border-primary/20 rounded-xl"></div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
