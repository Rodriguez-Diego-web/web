'use client';

import React, { useRef, useState, useEffect } from 'react';
import { FaPalette, FaCode, FaServer, FaSearch, FaChartLine, FaShieldAlt, FaArrowRight, FaClock, FaCheck } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [showLimitedOffer, setShowLimitedOffer] = useState(true);
  const [isClient, setIsClient] = useState(false);
  
  // This ensures hydration mismatch is avoided
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const services: Service[] = [
    {
      icon: <FaPalette className="w-10 h-10 text-primary" />,
      title: "Webdesign",
      description: "Maßgeschneiderte Designs, die Ihre Marke optimal repräsentieren und Besucher begeistern."
    },
    {
      icon: <FaCode className="w-10 h-10 text-primary" />,
      title: "Webentwicklung",
      description: "Moderne, responsive Websites mit optimaler Performance auf allen Geräten."
    },
    {
      icon: <FaServer className="w-10 h-10 text-primary" />,
      title: "Hosting & Wartung",
      description: "Zuverlässiges Hosting mit regelmäßigen Updates und technischem Support."
    },
    {
      icon: <FaSearch className="w-10 h-10 text-primary" />,
      title: "SEO-Grundlagen",
      description: "Optimierung für Suchmaschinen, damit Ihre Website besser gefunden wird."
    },
    {
      icon: <FaChartLine className="w-10 h-10 text-primary" />,
      title: "Analytics",
      description: "Einrichtung von Tracking-Tools zur Analyse des Besucherverhaltens."
    },
    {
      icon: <FaShieldAlt className="w-10 h-10 text-primary" />,
      title: "Sicherheit",
      description: "SSL-Zertifikat und Grundschutz für Ihre Website und Besucherdaten."
    }
  ];

  // Ref for scroll animations
  const sectionRef = useRef(null);
  const pricingRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const { scrollYProgress: pricingScrollProgress } = useScroll({
    target: pricingRef,
    offset: ["start end", "end start"]
  });
  
  // Animation values based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  
  // Pricing animations
  const pricingScale = useTransform(pricingScrollProgress, [0, 0.3, 1], [0.95, 1.05, 1]);
  const pricingRotate = useTransform(pricingScrollProgress, [0, 0.5, 1], [-1, 0, 1]);

  // Card animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const boxShadowPulse = {
    animate: {
      boxShadow: [
        "0 0 0 rgba(255, 107, 0, 0.4)",
        "0 0 20px rgba(255, 107, 0, 0.7)",
        "0 0 0 rgba(255, 107, 0, 0.4)",
      ],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "loop" as const
      }
    }
  };
  
  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut"
      }
    }
  };

  const timerVariants = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1,
        repeat: Infinity
      }
    }
  };

  // Use fixed values to prevent hydration errors
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  // Fixed values instead of random to avoid hydration errors
  const hours = 8; 
  const minutes = 30;
  
  return (
    <motion.section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-dark to-black relative overflow-hidden"
      style={{ opacity: isClient ? opacity : 1 }}
      id="services"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <motion.div 
        className="absolute top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        isClient && (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-3 h-3 bg-primary rounded-full opacity-70"
            style={{
              top: '13.388648113100455%',
              left: '6.804216459357004%',
            }}
            animate={{
              y: [-10, 10, -5, 15, -10],
              x: [10, -5, 15, -10, 10],
              transition: {
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          ></motion.div>
        )
      ))}
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          style={{ y }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="text-gradient"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              Unsere
            </motion.span> Leistungen
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Wir bieten alles, was Sie für Ihre professionelle Online-Präsenz benötigen.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="glass-card hover-lift p-6 hover:border-primary/50 border border-gray-800 relative overflow-hidden"
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Background gradient that appears on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="mb-4 relative z-10"
                whileHover={{ 
                  rotate: 5,
                  scale: 1.1, 
                  transition: { duration: 0.3 }
                }}
                animate={hoveredCard === index ? { 
                  rotate: [0, 5, 0],
                  transition: { duration: 1.5, repeat: Infinity }
                } : {}}
              >
                {service.icon}
              </motion.div>
              
              <motion.h3 
                className="text-xl font-bold mb-3 text-gradient relative z-10"
                animate={hoveredCard === index ? { 
                  scale: [1, 1.05, 1],
                  transition: { duration: 1.5, repeat: Infinity }
                } : {}}
              >
                {service.title}
              </motion.h3>
              
              <motion.p 
                className="text-gray-300 relative z-10"
                initial={{ opacity: 0.9 }}
                animate={{ opacity: hoveredCard === index ? 1 : 0.9 }}
              >
                {service.description}
              </motion.p>
              
              <motion.div
                className="absolute bottom-3 right-3 text-primary opacity-0"
                initial={{ opacity: 0, x: 10 }}
                animate={{ 
                  opacity: hoveredCard === index ? 1 : 0,
                  x: hoveredCard === index ? 0 : 10
                }}
                transition={{ duration: 0.3 }}
              >
                <FaArrowRight />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Limited time offer banner */}
        <AnimatePresence>
          {showLimitedOffer && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg p-4 border border-primary/30 relative overflow-hidden"
            >
              <button 
                onClick={() => setShowLimitedOffer(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-white"
                aria-label="Close offer"
              >
                ×
              </button>
              
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <motion.div
                    variants={timerVariants}
                    initial="initial"
                    animate="pulse"
                    className="mr-3 text-primary"
                  >
                    <FaClock className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-white">Zeitlich begrenztes Angebot</h4>
                    <p className="text-sm text-gray-300">
                      {isClient ? (
                        <>
                          <FaClock className="inline mr-1" />
                          Angebot gültig bis: {tomorrow.toLocaleDateString('de-DE')} - Nur noch {hours}h {minutes}m!
                        </>
                      ) : (
                        // Render a placeholder or nothing on the server and during initial client render
                        // This ensures no mismatch occurs for the date/time string.
                        // An empty span or a non-breaking space can be used if layout needs to be preserved.
                        <span>&nbsp;</span> 
                      )}
                    </p>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button href="/contact" size="sm" className="glow">
                    Jetzt 15% Rabatt sichern
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Enhanced pricing section */}
        <motion.div 
          ref={pricingRef}
          className="bg-dark-card border border-gray-800 rounded-xl p-8 relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          animate={boxShadowPulse.animate}
          style={{ 
            scale: isClient ? pricingScale : 1,
            rotate: isClient ? pricingRotate : 0
          }}
        >
          {/* Decorative element */}
          {isClient && (
            <motion.div 
              className="absolute -top-40 -right-40 w-80 h-80 bg-primary opacity-5 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            ></motion.div>
          )}
          
          {/* Most popular badge */}
          <motion.div 
            className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold py-1 px-3 rounded-bl-lg"
            {...floatingAnimation}
          >
            BELIEBTESTE WAHL
          </motion.div>
          
          <motion.h3 
            className="text-2xl font-bold mb-2 relative z-10"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-gradient">Starter-Paket</span>
          </motion.h3>
          <p className="text-lg mb-2 text-gray-300">Komplettlösung für kleine Unternehmen</p>
          
          {/* Price with original price strikethrough */}
          <div className="my-6 relative z-10">
            <motion.span 
              className="text-gray-400 line-through text-xl mr-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              €1299
            </motion.span>
            <motion.div 
              className="text-4xl font-bold text-primary inline-block"
              initial={{ scale: 1 }}
              whileInView={{ 
                scale: [1, 1.1, 1],
                transition: { 
                  duration: 0.6,
                  delay: 1
                }
              }}
              viewport={{ once: true }}
            >
              €1.099
            </motion.div>
          </div>
          
          {/* Social proof */}
          <motion.div 
            className="mb-6 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-yellow-500">★★★★★</span> Über 50 zufriedene Kunden in den letzten 3 Monaten
          </motion.div>
          
          <ul className="text-left max-w-md mx-auto mb-8 relative z-10">
            {[
              "Responsive Website mit bis zu 5 Seiten",
              "Individuelles Design",
              "Kontaktformular & Google Maps",
              "Basis-SEO-Optimierung",
              "Hosting für 1 Jahr inklusive",
              "Kostenlose Domain für 1 Jahr"
            ].map((feature, index) => (
              <motion.li 
                key={index} 
                className="mb-3 flex items-start"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <motion.span 
                  className="text-primary mr-2 flex-shrink-0 mt-1"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <FaCheck />
                </motion.span>
                <span className="text-gray-300">{feature}</span>
              </motion.li>
            ))}
          </ul>
          
          {/* Call to action with guarantee */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button href="/services" size="lg" className="relative z-10 glow">
                Jetzt unverbindlich anfragen
              </Button>
            </motion.div>
            
            <motion.p 
              className="text-sm text-gray-400 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              viewport={{ once: true }}
            >
              100% Zufriedenheitsgarantie • Keine versteckten Kosten • Nur 50% Anzahlung
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
