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
    <div className="relative min-h-screen bg-dark overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-primary/20 rounded-full blur-xl animate-pulse-slow" />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-5 h-5 bg-primary rounded-full"
          animate={{ 
            y: [0, 100, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-primary/60 rounded-full"
          animate={{ 
            y: [0, -80, 0],
            x: [0, 40, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
        {/* Add floating particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
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
      
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center animated-gradient-bg">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-light">
              Unsere <span className="text-primary">Leistungen</span> & Preise
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Maßgeschneiderte Webdesign- und Entwicklungslösungen für kleine und mittelständische Unternehmen mit transparenten Festpreisen.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button href="#packages" className="bg-primary hover:bg-primary/90 text-light px-8 py-3 text-lg">
                Pakete ansehen
                <FaArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          style={{ y }}
          className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-dark to-transparent"
        />
      </section>
      
      {/* Service Categories */}
      <section 
        ref={servicesCategoryRef} 
        className="py-20 bg-gradient-to-b from-dark to-dark/95 relative"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-light"
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
                className="bg-dark/90 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-gray-100"
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
                
                <h3 className="text-2xl font-bold mb-3 relative z-10 text-light">{service.title}</h3>
                <p className="text-gray-300 mb-4 relative z-10">{service.description}</p>
                
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
          className="bg-gradient-to-r from-primary/90 to-primary/70 rounded-lg p-6 border border-primary/30"
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
                <h4 className="font-bold text-lg text-light">Zeitlich begrenztes Angebot</h4>
                <p className="text-sm text-gray-300">Gültig bis zum {formattedDate} - Sichern Sie sich 15% Rabatt auf alle Pakete</p>
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

      {/* Packages Section */}
      <section id="packages" ref={packagesRef} className="py-20 bg-gradient-to-b from-dark/95 to-dark/90 relative">
        {/* Background elements */}
        <motion.div 
          className="absolute inset-0 bg-dot-pattern opacity-5"
          style={{ y }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isPackagesInView ? 1 : 0, y: isPackagesInView ? 0 : 20 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-light">Unsere <span className="text-primary">Pakete</span></h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transparente Preise ohne versteckte Kosten. Wählen Sie das Paket, das am besten zu Ihren Anforderungen passt.
            </p>
          </motion.div>
          
          {/* Limited Time Offer Banner */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative mb-12 bg-gradient-to-r from-primary/90 to-primary/70 rounded-lg p-4 shadow-lg overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <FaRegClock className="text-2xl mr-3 text-yellow-300 animate-pulse-slow" />
                <div>
                  <h3 className="text-xl font-bold text-white">Zeitlich begrenztes Angebot</h3>
                  <p className="text-light/90">
                    <span className="font-medium">
                      {new Date(new Date().setDate(new Date().getDate() + 7)).toLocaleDateString('de-DE')}
                    </span> oder solange Verfügbarkeit reicht
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-bold">Bis zu <span className="text-yellow-300">20% Rabatt</span> auf alle Pakete</p>
                <p className="text-sm text-light/90">* Angebot nicht mit anderen Aktionen kombinierbar</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <motion.div 
                key={pkg.id}
                className={`bg-dark/90 rounded-xl overflow-hidden shadow-lg relative ${pkg.isPopular ? 'ring-2 ring-primary' : ''}`}
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
                  <h3 className="text-2xl font-bold mb-2 text-light">{pkg.name}</h3>
                  <p className="text-gray-300 mb-6">{pkg.description}</p>
                  
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
                  <div className="flex justify-between mb-8 text-sm text-gray-300">
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
            className="text-center mt-8 text-gray-300 flex items-center justify-center"
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
      <section ref={additionalRef} className="py-20 bg-gradient-to-b from-dark/90 to-dark/95 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-center text-light"
            variants={fadeIn}
            initial="hidden"
            animate={isAdditionalInView ? "visible" : "hidden"}
          >
            Zusätzliche <span className="text-primary">Leistungen</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-12"
            variants={fadeIn}
            initial="hidden"
            animate={isAdditionalInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            Ergänzen Sie Ihre Website mit diesen zusätzlichen Leistungen, um das Maximum aus Ihrer Online-Präsenz herauszuholen.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div 
                key={service.id}
                className="bg-dark/80 border border-primary/20 p-6 rounded-lg shadow-lg relative overflow-hidden group"
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                
                {/* Orange accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50"></div>
                
                <h3 className="text-xl font-bold mb-2 relative z-10 text-light">{service.name}</h3>
                <p className="text-primary font-bold mb-4 relative z-10 flex items-center">
                  <span className="text-sm mr-1">ab</span> {service.price}
                  {/* Add a subtle glow effect to the price */}
                  <span className="absolute -inset-1 bg-primary/10 rounded-full blur-sm -z-10"></span>
                </p>
                <p className="text-gray-300 relative z-10 mb-4">{service.description}</p>
                
                {/* Animated arrow for better UX */}
                <motion.div 
                  className="flex items-center text-primary font-medium relative z-10 mt-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="mr-2">Mehr erfahren</span>
                  <FaArrowRight className="text-sm" />
                </motion.div>
                
                {/* Decorative corner accent */}
                <motion.div 
                  className="absolute bottom-0 right-0 w-24 h-24 bg-primary/10 rounded-tl-full"
                  whileHover={{ scale: 1.2, opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Add a decorative element */}
          <motion.div
            className="w-full flex justify-center mt-16"
            initial={{ opacity: 0 }}
            animate={isAdditionalInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary/70 to-transparent rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 bg-dark relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          <motion.div 
            className="absolute top-10 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-10 left-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />
          
          {/* Floating particles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`cta-particle-${i}`}
              className="absolute w-1.5 h-1.5 bg-primary/40 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2 
              className="text-4xl font-bold mb-6 text-light"
              animate={{ scale: [1, 1.01, 1] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            >
              Bereit, Ihr <motion.span 
                className="text-primary"
                animate={{ 
                  color: ["#ff9c28", "#ff8a00", "#ff9c28"],
                  textShadow: ["0 0 0px rgba(255,156,40,0)", "0 0 10px rgba(255,156,40,0.5)", "0 0 0px rgba(255,156,40,0)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >Projekt</motion.span> zu starten?
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-10 text-gray-300"
              initial={{ opacity: 0 }}
              animate={isCtaInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Lassen Sie uns gemeinsam Ihre Vision verwirklichen. Kontaktieren Sie uns noch heute für ein unverbindliches Beratungsgespräch.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-16 inline-block"
            >
              <motion.a 
                href="/kontakt" 
                className="bg-primary hover:bg-primary/90 text-white px-10 py-4 text-lg rounded-md flex items-center justify-center transition-all duration-300 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 156, 40, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated background effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 skew-x-12"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                />
                
                {/* Button content */}
                <span className="relative z-10">Kontakt aufnehmen</span>
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 relative z-10" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </motion.svg>
              </motion.a>
            </motion.div>

            {/* Trust badges with staggered animation */}
            <motion.div 
              className="grid grid-cols-4 gap-6 mt-10"
              initial="hidden"
              animate={isCtaInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
            >
              {[
                { icon: FaShieldAlt, label: "Sichere Zahlung" },
                { icon: FaRegClock, label: "Schnelle Umsetzung" },
                { icon: FaCheck, label: "Kundenzufriedenheit" },
                { icon: FaPercentage, label: "MwSt. inkl." }
              ].map((badge, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-full border border-primary/30 bg-dark flex items-center justify-center mb-3"
                    whileHover={{ 
                      scale: 1.1, 
                      borderColor: "rgba(255, 156, 40, 0.8)",
                      boxShadow: "0 0 15px rgba(255, 156, 40, 0.3)" 
                    }}
                    animate={{ borderColor: ["rgba(255, 156, 40, 0.3)", "rgba(255, 156, 40, 0.6)", "rgba(255, 156, 40, 0.3)"] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        color: ["#ff9c28", "#ff8a00", "#ff9c28"] 
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <badge.icon className="text-xl text-primary" />
                    </motion.div>
                  </motion.div>
                  <motion.p 
                    className="text-sm font-medium text-gray-300"
                    whileHover={{ color: "#ff9c28" }}
                  >
                    {badge.label}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
