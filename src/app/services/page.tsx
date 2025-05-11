'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { serviceCategories, servicePackages, additionalServices } from '@/data/services';
import { FaArrowRight, FaCheck, FaArrowDown, FaStar, FaTrophy, FaLightbulb } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

export default function ServicesPage() {
  // Next.js Router für Navigation
  const router = useRouter();
  
  // State für aktiven Tab
  const [activeCategory, setActiveCategory] = useState('all');

  // Add isMounted state for client-side only rendering of particles
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Refs für Scroll-basierte Animationen
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const packagesRef = useRef(null);
  const processRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Scroll-Funktion für Hash-Links
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset für den Header
        behavior: 'smooth'
      });
    }
  };
  
  // InView checks
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const isPackagesInView = useInView(packagesRef, { once: true, amount: 0.2 });
  const isProcessInView = useInView(processRef, { once: true, amount: 0.2 });
  const isFaqInView = useInView(faqRef, { once: true, amount: 0.2 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 });
  
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
  
  // Projektphasen
  const projectPhases = [
    { 
      title: "Beratung & Konzeption", 
      description: "Persönliches Gespräch, Analyse Ihrer Bedürfnisse und Entwicklung eines maßgeschneiderten Konzepts.",
      icon: <FaLightbulb className="w-8 h-8 text-primary" />
    },
    { 
      title: "Design & Entwicklung", 
      description: "Kreation eines individuellen Designs und professionelle Umsetzung mit modernen Technologien.",
      icon: <FaStar className="w-8 h-8 text-primary" />
    },
    { 
      title: "Launch & Support", 
      description: "Veröffentlichung Ihrer Website und kontinuierliche Betreuung nach dem Start.",
      icon: <FaTrophy className="w-8 h-8 text-primary" />
    }
  ];
  
  // FAQs
  const faqs = [
    {
      question: "Wie lange dauert die Erstellung einer Website?",
      answer: "Die Entwicklungszeit hängt vom Umfang und der Komplexität ab. Einfache Websites können innerhalb von 2-3 Wochen erstellt werden, während umfangreichere Projekte 4-8 Wochen in Anspruch nehmen können."
    },
    {
      question: "Welche Technologien nutzen Sie für die Entwicklung?",
      answer: "Ich arbeite mit modernen Frameworks wie Next.js, React und TailwindCSS, die eine optimale Performance und Benutzerfreundlichkeit gewährleisten."
    },
    {
      question: "Bieten Sie auch Content-Erstellung an?",
      answer: "Ja, auf Wunsch unterstütze ich Sie bei der Erstellung von Texten, Bildern und anderen Inhalten für Ihre Website. Dies kann als zusätzliche Dienstleistung gebucht werden."
    },
    {
      question: "Kann ich meine Website später selbst bearbeiten?",
      answer: "Absolut. Je nach gewähltem System erhalten Sie Zugang zu einem benutzerfreundlichen Content-Management-System (CMS), mit dem Sie Inhalte selbstständig aktualisieren können."
    }
  ];
  
  return (
    <div className="relative min-h-screen bg-dark overflow-hidden">
      {/* Hintergrund-Elemente */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-60">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-primary/20 rounded-full blur-xl animate-pulse-slow" />
        
        {/* Animated particles - Render only on client-side */}
        {isMounted && Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`particle-services-${i}`}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      {/* Hero-Sektion mit glassmorphism */}
      <section className="pt-36 pb-20 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-light">
              Meine <span className="text-primary block text-3xl sm:text-5xl md:text-6xl">Dienstleistungen</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Professionelle Webentwicklung für Unternehmen in <span className="text-primary font-semibold">Cuxhaven</span> und Umgebung.
              Entdecken Sie maßgeschneiderte Lösungen für Ihren Online-Erfolg.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={() => scrollToSection('services')} 
                className="px-8 py-4"
              >
                Leistungen entdecken
              </Button>
              <Button 
                onClick={() => scrollToSection('packages')} 
                className="px-8 py-4 bg-transparent border border-primary text-light hover:bg-primary/10"
              >
                Pakete & Preise
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20"
          >
            <div className="glass-card bg-dark/30 backdrop-blur-lg border border-white/10 p-8 rounded-2xl max-w-4xl mx-auto shadow-2xl">
              <h2 className="text-2xl font-bold text-light mb-6">Warum Rodriguez-Web wählen?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <FaStar className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-light mb-2">Modernes Design</h3>
                  <p className="text-gray-300">Zeitgemäße Webauftritte, die begeistern und überzeugen</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <FaLightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-light mb-2">Lokale Expertise</h3>
                  <p className="text-gray-300">Spezialisiert auf Unternehmen in Cuxhaven und an der Nordseeküste</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <FaTrophy className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-light mb-2">Persönlicher Service</h3>
                  <p className="text-gray-300">Direkter Ansprechpartner ohne Umwege und versteckte Kosten</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full flex justify-center">
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-400"
          >
            <FaArrowDown className="w-6 h-6" />
          </motion.div>
        </div>
      </section>
      
      {/* Leistungen Sektion */}
      <section id="services" ref={servicesRef} className="py-20 bg-dark/60 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isServicesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="h-1 bg-primary w-16 mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold mb-6 text-light">
              Meine <span className="text-primary">Leistungen</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Von der Konzeption bis zur Umsetzung biete ich Ihnen alles, was Sie für einen erfolgreichen Webauftritt benötigen.
            </p>
          </motion.div>
          
          {/* Kategorie-Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2 rounded-full transition-colors ${activeCategory === 'all' ? 'bg-primary text-dark' : 'bg-dark/50 text-light border border-gray-700 hover:border-primary/50'}`}
            >
              Alle Leistungen
            </button>
            <button 
              onClick={() => setActiveCategory('web-design')}
              className={`px-5 py-2 rounded-full transition-colors ${activeCategory === 'web-design' ? 'bg-primary text-dark' : 'bg-dark/50 text-light border border-gray-700 hover:border-primary/50'}`}
            >
              Webdesign
            </button>
            <button 
              onClick={() => setActiveCategory('web-development')}
              className={`px-5 py-2 rounded-full transition-colors ${activeCategory === 'web-development' ? 'bg-primary text-dark' : 'bg-dark/50 text-light border border-gray-700 hover:border-primary/50'}`}
            >
              Webentwicklung
            </button>
            <button 
              onClick={() => setActiveCategory('seo')}
              className={`px-5 py-2 rounded-full transition-colors ${activeCategory === 'seo' ? 'bg-primary text-dark' : 'bg-dark/50 text-light border border-gray-700 hover:border-primary/50'}`}
            >
              SEO & Marketing
            </button>
          </motion.div>
          
          {/* Dienstleistungs-Karten */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {serviceCategories
              .filter(service => activeCategory === 'all' || service.id === activeCategory || 
                 (activeCategory === 'seo' && ['seo', 'analytics'].includes(service.id)))
              .map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-dark/50 backdrop-blur-sm border border-gray-800 hover:border-primary/30 rounded-xl overflow-hidden p-6 shadow-lg transition-all duration-300"
                >
                  <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-light mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-5">{service.description}</p>
                  <button className="text-primary hover:text-primary-light flex items-center gap-2 group">
                    Mehr erfahren
                    <FaArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>
      
      {/* Pakete Sektion */}
      <section id="packages" ref={packagesRef} className="py-20 bg-gradient-to-b from-dark/60 to-dark/90 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isPackagesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="h-1 bg-primary w-16 mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold mb-6 text-light">
              Meine <span className="text-primary">Pakete</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Transparente Preise für maßgeschneiderte Lösungen. Alle Pakete können individuell an Ihre Bedürfnisse angepasst werden.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {servicePackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isPackagesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative overflow-hidden rounded-2xl shadow-xl p-8 
                  ${pkg.isPopular ? 'bg-gradient-to-b from-primary/20 to-dark/50 border-2 border-primary/60 transform scale-105 z-10' : 'bg-dark/30 backdrop-blur-md border border-gray-800'}`}
              >
                {pkg.isPopular && (
                  <div className="absolute -right-10 top-8 bg-primary text-dark px-10 py-1 rotate-45 font-semibold">
                    Beliebt
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-light mb-2">{pkg.name}</h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-gray-400 mb-1">einmalig</span>
                </div>
                <p className="text-gray-300 mb-6 h-12">{pkg.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isPackagesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: 0.6 + (i * 0.1) }}
                      className="flex items-start gap-3"
                    >
                      <FaCheck className="text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2
                    ${pkg.isPopular ? 'bg-primary text-dark hover:bg-primary/90' : 'border border-primary/60 text-primary hover:bg-primary/10'}`}
                >
                  <span>Jetzt anfragen</span>
                  <FaArrowRight />
                </motion.button>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPackagesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-4">Benötigen Sie ein individuelles Angebot?</p>
            <Button onClick={() => router.push('/contact')} className="mx-auto">
              Individuelles Angebot anfragen
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Projektablauf-Sektion */}
      <section id="process" ref={processRef} className="py-20 bg-dark/40 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isProcessInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="h-1 bg-primary w-16 mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold mb-6 text-light">
              Mein <span className="text-primary">Projektablauf</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Ein klarer, strukturierter Prozess für eine reibungslose Zusammenarbeit vom ersten Gespräch bis zum fertigen Projekt.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {projectPhases.map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isProcessInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start gap-6 mb-12 relative"
              >
                {/* Verbindungslinie zwischen den Phasen */}
                {index < projectPhases.length - 1 && (
                  <div className="absolute top-16 left-8 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-primary/10"></div>
                )}
                
                <div className="bg-primary/10 p-4 rounded-full border border-primary/30 flex-shrink-0 z-10">
                  <div className="bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                </div>
                
                <div className="bg-dark/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex-grow">
                  <div className="flex items-center gap-4 mb-3">
                    {phase.icon}
                    <h3 className="text-xl font-bold text-light">{phase.title}</h3>
                  </div>
                  <p className="text-gray-300">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ-Sektion */}
      <section id="faq" ref={faqRef} className="py-20 bg-dark/60 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isFaqInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="h-1 bg-primary w-16 mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold mb-6 text-light">
              Häufige <span className="text-primary">Fragen</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Antworten auf die am häufigsten gestellten Fragen zu meinen Dienstleistungen.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isFaqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6"
              >
                <div className="bg-dark/30 backdrop-blur-sm border border-gray-800 hover:border-primary/20 rounded-xl p-6 transition-all duration-300">
                  <h3 className="text-xl font-bold text-light mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA-Sektion */}
      <section id="cta" ref={ctaRef} className="py-24 bg-gradient-to-t from-dark to-dark/60 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isCtaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-light">
              Bereit für Ihren <span className="text-primary">neuen Webauftritt</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Lassen Sie uns gemeinsam Ihr Projekt besprechen und eine maßgeschneiderte Lösung entwickeln.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                onClick={() => router.push('/contact')} 
                className="px-8 py-4 text-lg bg-primary text-dark hover:bg-primary/90"
              >
                Kostenlose Beratung anfragen
              </Button>
              <Button 
                onClick={() => router.push('/portfolio')} 
                className="px-8 py-4 text-lg bg-transparent border border-primary text-light hover:bg-primary/10"
              >
                Meine Arbeiten ansehen
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Hintergrund-Deko */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-dark to-transparent"></div>
      </section>
    </div>
  );
}
