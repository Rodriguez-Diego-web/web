'use client';

import React, { useRef } from 'react';
import { serviceCategories, servicePackages, additionalServices } from '@/data/services';
import Button from '@/components/ui/Button';
import { motion, useScroll, useTransform, useInView, stagger } from 'framer-motion';
import { FaArrowRight, FaCheck, FaRegClock, FaShieldAlt, FaPercentage } from 'react-icons/fa';

// Metadata should be moved to a separate file or layout.tsx for this route
export default function ServicesPage() {
  // Refs for scroll animations
  const heroRef = useRef(null);
  const servicesCategoryRef = useRef(null);
  const packagesRef = useRef(null);
  const additionalRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Check if elements are in view
  const isServicesInView = useInView(servicesCategoryRef, { once: false, amount: 0.2 });
  const isPackagesInView = useInView(packagesRef, { once: false, amount: 0.1 });
  const isAdditionalInView = useInView(additionalRef, { once: false, amount: 0.2 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 });
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0.8, 0.5]);
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };
  
  const packageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.15, 
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -15,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.4 }
    }
  };
  
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };
  
  // Calculate today + 7 days for the limited time offer
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);
  const formattedDate = nextWeek.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
  
  return (
    <>
      {/* Background floating elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            initial={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%` 
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
        <motion.div 
          className="absolute top-1/4 right-[5%] w-64 h-64 rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-[5%] w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500/5 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      {/* Hero Section with Parallax */}
      <motion.section 
        ref={heroRef}
        className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute inset-0 bg-grid-pattern opacity-10"
          style={{ y }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Unsere Leistungen
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Von der Design-Konzeption bis zum fertigen Webauftritt - wir bieten alles aus einer Hand. 
            Mit unseren transparenten Paketen wissen Sie genau, was Sie bekommen und was es kostet.
          </motion.p>
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute top-10 right-40 w-20 h-20 border-4 border-primary/20 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, repeatType: "reverse" }
            }}
          />
          
          <motion.div 
            className="absolute bottom-10 left-1/3 w-16 h-16 border-2 border-dashed border-primary/30 rounded-lg"
            animate={{
              rotate: -360,
              x: [0, 50, 0],
            }}
            transition={{
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              x: { duration: 15, repeat: Infinity, repeatType: "reverse" }
            }}
          />
        </div>
      </motion.section>

      {/* Services Categories with Staggered Animation */}
      <section ref={servicesCategoryRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            variants={fadeIn}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
          >
            Was wir <span className="text-primary">anbieten</span>
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
          >
            {serviceCategories.map((service) => (
              <motion.div 
                key={service.id} 
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-gray-100"
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Background pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                
                {/* Card content */}
                <motion.div 
                  className="mb-5 text-primary relative z-10"
                  whileHover={{ 
                    rotate: [0, 5, 0],
                    scale: 1.1,
                    transition: { duration: 0.5 }
                  }}
                >
                  <service.icon className="w-12 h-12" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-3 relative z-10">{service.title}</h3>
                <p className="text-gray-600 mb-4 relative z-10">{service.description}</p>
                
                <motion.div 
                  className="text-primary flex items-center font-medium relative z-10"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ 
                    x: 5,
                    opacity: 1,
                    transition: { duration: 0.2 }
                  }}
                >
                  Mehr erfahren <FaArrowRight className="ml-2" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Limited time offer banner */}
      <motion.div 
        className="container mx-auto px-4 mb-16"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.div 
          className="bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-lg p-6 border border-primary/30"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  transition: { duration: 1, repeat: Infinity }
                }}
                className="mr-3 text-primary"
              >
                <FaRegClock className="w-7 h-7" />
              </motion.div>
              <div>
                <h4 className="font-bold text-lg">Zeitlich begrenztes Angebot</h4>
                <p className="text-sm">Gültig bis zum {formattedDate} - Sichern Sie sich 15% Rabatt auf alle Pakete</p>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button href="/contact" className="px-6">
                Angebot sichern
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Packages Section with Interactive Cards */}
      <section ref={packagesRef} className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background elements */}
        <motion.div 
          className="absolute inset-0 bg-dot-pattern opacity-5"
          style={{ y }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
            variants={fadeIn}
            initial="hidden"
            animate={isPackagesInView ? "visible" : "hidden"}
          >
            Unsere <span className="text-primary">Pakete</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12"
            variants={fadeIn}
            initial="hidden"
            animate={isPackagesInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            Wir bieten transparente Pakete mit Festpreisen, damit Sie genau wissen, was Sie bekommen und was es kostet.
          </motion.p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <motion.div 
                key={pkg.id}
                className={`bg-white rounded-xl overflow-hidden shadow-lg relative ${pkg.isPopular ? 'ring-2 ring-primary' : ''}`}
                custom={index}
                variants={packageVariants}
                initial="hidden"
                animate={isPackagesInView ? "visible" : "hidden"}
                whileHover="hover"
              >
                {pkg.isPopular && (
                  <motion.div 
                    className="bg-primary text-white py-2 px-4 text-center text-sm font-medium"
                    animate={{ 
                      backgroundColor: ["#FF6B00", "#FF8F40", "#FF6B00"],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Beliebteste Wahl
                  </motion.div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  {/* Price with strikethrough for social engineering */}
                  <div className="mb-6">
                    {pkg.isPopular && (
                      <div className="text-gray-400 line-through text-xl">
                        {pkg.price.replace('€', '€') /* Replace with slightly higher price */}99
                      </div>
                    )}
                    <div className="text-4xl font-bold text-primary flex items-center">
                      {pkg.price}
                      {pkg.isPopular && (
                        <motion.div 
                          className="ml-3 text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full"
                          animate={{ 
                            scale: [1, 1.05, 1],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Spar-Angebot
                        </motion.div>
                      )}
                    </div>
                  </div>
                  
                  <motion.ul 
                    className="mb-8 space-y-3"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                  >
                    {pkg.features.map((feature, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start"
                        variants={listItemVariants}
                        custom={index}
                      >
                        <motion.span 
                          className="text-green-500 mr-2 flex-shrink-0 mt-1"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                        >
                          <FaCheck />
                        </motion.span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  
                  {/* Package benefits with icons */}
                  <div className="flex justify-between mb-8 text-sm text-gray-500">
                    <div className="flex items-center">
                      <FaRegClock className="mr-1" />
                      <span>7-14 Tage</span>
                    </div>
                    <div className="flex items-center">
                      <FaShieldAlt className="mr-1" />
                      <span>100% Zufriedenheit</span>
                    </div>
                    <div className="flex items-center">
                      <FaPercentage className="mr-1" />
                      <span>MwSt. inkl.</span>
                    </div>
                  </div>
                  
                  <Button 
                    href="/contact" 
                    variant={pkg.isPopular ? "primary" : "outline"} 
                    fullWidth
                    className={pkg.isPopular ? "glow" : ""}
                  >
                    Jetzt anfragen
                  </Button>
                </div>
                
                {/* Decorative corner */}
                {pkg.isPopular && (
                  <motion.div 
                    className="absolute top-0 right-0 w-20 h-20 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="absolute top-0 right-0 w-full h-full bg-primary rotate-45 origin-bottom-left transform translate-y-[-50%] translate-x-[50%]">
                      <div className="absolute bottom-5 left-1 text-white text-xs font-bold rotate-[-45deg]">
                        EMPFEHLUNG
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Money back guarantee */}
          <motion.div 
            className="text-center mt-8 text-gray-500 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <FaShieldAlt className="mr-2" />
            <span>14 Tage Geld-zurück-Garantie • Keine versteckten Kosten • Persönliche Betreuung</span>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section ref={additionalRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
            variants={fadeIn}
            initial="hidden"
            animate={isAdditionalInView ? "visible" : "hidden"}
          >
            Zusätzliche <span className="text-primary">Leistungen</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12"
            variants={fadeIn}
            initial="hidden"
            animate={isAdditionalInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            Ergänzen Sie Ihre Website mit diesen zusätzlichen Leistungen, um das Maximum aus Ihrer Online-Präsenz herauszuholen.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate={isAdditionalInView ? "visible" : "hidden"}
          >
            {additionalServices.map((service, index) => (
              <motion.div 
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative overflow-hidden"
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-80"></div>
                
                <h3 className="text-xl font-bold mb-2 relative z-10">{service.name}</h3>
                <p className="text-primary font-bold mb-4 relative z-10">{service.price}</p>
                <p className="text-gray-600 relative z-10">{service.description}</p>
                
                <motion.div 
                  className="absolute bottom-0 right-0 w-16 h-16 bg-primary/5 rounded-tl-full"
                  whileHover={{
                    width: 80,
                    height: 80,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="absolute bottom-3 right-3 text-primary"
                    whileHover={{ x: -2, y: -2 }}
                  >
                    <FaArrowRight />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        ref={ctaRef}
        className="py-20 bg-primary/10 relative overflow-hidden"
        style={{ opacity }}
      >
        {/* Animated background */}
        <motion.div 
          className="absolute inset-0 bg-wave-pattern opacity-5"
          animate={{
            y: [0, -20, 0],
            transition: { duration: 20, repeat: Infinity }
          }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
          >
            Haben Sie Fragen zu unseren Leistungen?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Wir beraten Sie gerne persönlich und erstellen ein individuelles Angebot für Ihr Projekt.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button href="/contact" size="lg" className="px-8 py-4">
                Kontakt aufnehmen
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button href="tel:+491234567890" variant="outline" size="lg" className="px-8 py-4">
                +49 123 456 7890
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Trust badges */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={isCtaInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-2">
                <FaShieldAlt className="text-2xl text-primary" />
              </div>
              <p className="text-sm font-medium">Sichere Zahlung</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-2">
                <FaRegClock className="text-2xl text-primary" />
              </div>
              <p className="text-sm font-medium">Schnelle Umsetzung</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-2">
                <FaCheck className="text-2xl text-primary" />
              </div>
              <p className="text-sm font-medium">Kundenzufriedenheit</p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
