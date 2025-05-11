'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  FaHeart, FaUsers, FaShieldAlt, FaCheck, FaRegClock, 
  FaRegLightbulb, FaArrowRight, FaUserTie, FaRegStar, FaArrowDown,
  FaQuoteLeft, FaGlobe
} from 'react-icons/fa';
import GoogleReviews from '@/components/GoogleReviews';

// Metadata is now in a separate file: metadata.ts

export default function AboutPage() {
  // Refs for scroll animations
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const whyUsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);
  
  // InView checks
  const isStoryInView = useInView(storyRef, { once: true, amount: 0.2 });
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.2 });
  const isWhyUsInView = useInView(whyUsRef, { once: true, amount: 0.2 });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.1 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 });
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0.8, 0.5]);
  
  // Stagger animation variants
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

  // Core values data
  const values = [
    {
      icon: <FaHeart />,
      title: 'Leidenschaft',
      description: 'Jedes Projekt wird mit Hingabe und Begeisterung umgesetzt, um optimale Ergebnisse zu erzielen.'
    },
    {
      icon: <FaUsers />,
      title: 'Kundenorientierung',
      description: 'Der Kunde steht im Mittelpunkt. Ich höre genau zu und setze Ihre Wünsche präzise um.'
    },
    {
      icon: <FaRegLightbulb />,
      title: 'Innovation',
      description: 'Stets auf dem neuesten Stand der Technologie, um zeitgemäße Lösungen anzubieten.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-dark overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-primary/20 rounded-full blur-xl animate-pulse-slow" />
        
        {/* Animated particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
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
      
      {/* Hero Section */}
      <section className="pt-36 pb-20 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-light">
              Über <span className="text-primary block text-3xl sm:text-5xl md:text-6xl">Rodriguez-Web</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Professionelle Webentwicklung für Unternehmen in <span className="text-primary font-semibold">Cuxhaven</span> und Umgebung.
              Als spezialisierter Webentwickler mit Leidenschaft für Design helfe ich Unternehmen, ihre Online-Präsenz zu verbessern.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a 
                href="#story" 
                className="px-8 py-4 bg-primary text-dark font-bold rounded-lg hover:bg-primary/90 transition-colors hover:glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Meine Geschichte
              </motion.a>
              <motion.a 
                href="#testimonials" 
                className="px-8 py-4 bg-transparent border border-primary text-light hover:bg-primary/10 transition-colors rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Kundenbewertungen
              </motion.a>
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
                    <FaRegStar className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-light mb-2">Lokale Expertise</h3>
                  <p className="text-gray-300">Spezialisiert auf Unternehmen in Cuxhaven und an der Nordseeküste</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <FaRegLightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-light mb-2">Individuelle Lösungen</h3>
                  <p className="text-gray-300">Maßgeschneiderte Webseiten für Ihren speziellen Bedarf</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <FaRegClock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-light mb-2">Schnelle Umsetzung</h3>
                  <p className="text-gray-300">Ihre Website in nur 7-14 Tagen fertig</p>
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
      
      {/* Story Section with Parallax and Split Layout */}
      <section id="story" ref={storyRef} className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{ 
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
               }}
          ></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-16 text-center">
            <motion.div 
              initial={{ width: 0 }}
              animate={isStoryInView ? { width: "80px" } : { width: 0 }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-primary mx-auto mb-6"
            />
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-light">
              Meine <span className="text-primary">Geschichte</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Ein Weg geprägt von Leidenschaft für Design und moderner Technologie in Cuxhaven.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-dark/60 backdrop-blur-sm border border-white/5 p-8 rounded-2xl shadow-lg">
                <motion.p 
                  className="text-lg text-gray-300 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Rodriguez-Web wurde 2018 von mir, Diego Rodriguez, in <span className="text-primary font-semibold">Cuxhaven</span> gegründet, mit der Vision, 
                  professionelle Webdesign- und Entwicklungsdienstleistungen anzubieten, 
                  die für kleine und mittelständische Unternehmen zugänglich sind.
                </motion.p>
                
                <motion.p 
                  className="text-lg text-gray-300 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Als Einzelunternehmer habe ich mich auf die Schaffung maßgeschneiderter Weblösungen spezialisiert. 
                  In den letzten Jahren durfte ich über 100 erfolgreiche Projekte abschließen und wertvolle 
                  Erfahrungen in verschiedenen Branchen sammeln.
                </motion.p>
                
                <motion.p 
                  className="text-lg text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Mein Fokus liegt auf der Kombination von ansprechendem Design, technischer Exzellenz 
                  und Business-Strategie, um Websites zu erstellen, die nicht nur gut aussehen, 
                  sondern auch messbare Ergebnisse für meine Kunden in <span className="text-primary font-semibold">Cuxhaven</span> und der Region liefern.
                </motion.p>
                
                {/* Achievement Stats */}
                <motion.div 
                  className="grid grid-cols-3 gap-4 mt-10"
                  initial="hidden"
                  animate={isStoryInView ? "visible" : "hidden"}
                  variants={containerVariants}
                >
                  <motion.div 
                    className="bg-dark/50 border border-primary/20 p-4 rounded-lg text-center"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      borderColor: "rgba(255,156,40,0.5)",
                      boxShadow: "0 0 15px rgba(255,156,40,0.3)"
                    }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <h3 className="text-3xl font-bold text-primary">100+</h3>
                    </motion.div>
                    <p className="text-gray-300">Projekte</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-dark/50 border border-primary/20 p-4 rounded-lg text-center"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      borderColor: "rgba(255,156,40,0.5)",
                      boxShadow: "0 0 15px rgba(255,156,40,0.3)"
                    }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    >
                      <h3 className="text-3xl font-bold text-primary">5+</h3>
                    </motion.div>
                    <p className="text-gray-300">Jahre Erfahrung</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-dark/50 border border-primary/20 p-4 rounded-lg text-center"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      borderColor: "rgba(255,156,40,0.5)",
                      boxShadow: "0 0 15px rgba(255,156,40,0.3)"
                    }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    >
                      <h3 className="text-3xl font-bold text-primary">98%</h3>
                    </motion.div>
                    <p className="text-gray-300">Zufriedene Kunden</p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px]"
            >
              <motion.div 
                className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center bg-dark/40 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
              >
                <img
                  src="/images/logo-new.png"
                  alt="Rodriguez-Web Logo"
                  className="w-4/5 max-w-md object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-30"></div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-primary text-dark p-5 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isStoryInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255,156,40,0.5)"
                }}
              >
                <motion.p 
                  className="text-lg font-bold"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Ihr Partner in Cuxhaven seit 2018
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section with 3D Card Effects */}
      <section id="values" ref={valuesRef} className="py-24 bg-dark/60 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute right-0 bottom-0 w-full h-full" 
               style={{ 
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
               }}
          ></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ width: 0 }}
              animate={isValuesInView ? { width: "80px" } : { width: 0 }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-primary mb-6 mx-auto"
            />
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">
              Unsere <span className="text-primary">Werte</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-xl mx-auto">
              Diese Grundsätze leiten mich bei jedem Projekt und stellen sicher, dass ich stets die besten Ergebnisse für meine Kunden erziele.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isValuesInView ? "visible" : "hidden"}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-dark/40 border border-primary/20 p-8 rounded-xl relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 10px 30px -15px rgba(255,156,40,0.2)",
                  borderColor: "rgba(255,156,40,0.3)",
                }}
              >
                <motion.div 
                  className="text-primary text-4xl mb-6 relative z-10"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: index
                  }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-4 text-light">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
                
                <motion.div 
                  className="absolute -bottom-16 -right-16 w-32 h-32 bg-primary/5 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "mirror"
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section id="why-us" ref={whyUsRef} className="py-24 bg-dark/90 relative">
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full" 
               style={{ 
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
               }}
          ></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isWhyUsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                initial={{ width: 0 }}
                animate={isWhyUsInView ? { width: "100px" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-primary mb-6"
              />
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">
                Warum <span className="text-primary">uns wählen?</span>
              </h2>
              
              <motion.div
                className="space-y-6"
                initial="hidden"
                animate={isWhyUsInView ? "visible" : "hidden"}
                variants={containerVariants}
              >
                {[
                  { title: "Schnelle Umsetzung", description: "Ihre Website in nur 7 Tagen" },
                  { title: "Transparente Preise", description: "Keine versteckten Kosten" },
                  { title: "Persönliche Betreuung", description: "Direkter Ansprechpartner für Sie" },
                  { title: "Modernes Design", description: "Responsive und benutzerfreundlich" },
                  { title: "Technische Expertise", description: "Aktuelle Technologien und Best Practices" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <div className="mr-4 mt-1 bg-primary/20 rounded-full p-1 flex-shrink-0">
                      <FaCheck className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-light">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isWhyUsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                className="bg-dark/60 border border-primary/20 p-8 rounded-2xl shadow-lg relative overflow-hidden"
                whileHover={{ boxShadow: "0 0 30px rgba(255,156,40,0.2)" }}
              >
                <motion.div 
                  className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                
                <h3 className="text-2xl font-bold mb-6 text-light">
                  Unsere <span className="text-primary">Garantie</span>
                </h3>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <FaShieldAlt className="text-xl text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-light">100% Zufriedenheitsgarantie</h4>
                      <p className="text-gray-300">Ich arbeite solange, bis Sie zufrieden sind</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <FaRegClock className="text-xl text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-light">7-14 Tage Lieferzeit</h4>
                      <p className="text-gray-300">Schnelle Umsetzung Ihres Projekts</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <FaRegLightbulb className="text-xl text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-light">Kostenlose Beratung</h4>
                      <p className="text-gray-300">Unverbindliches Erstgespräch</p>
                    </div>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="mt-8 flex justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a 
                    href="/contact" 
                    className="bg-primary text-dark font-medium py-3 px-6 rounded-lg inline-flex items-center relative overflow-hidden"
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0 skew-x-12"
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
                    <span className="relative z-10 mr-2">Kontakt aufnehmen</span>
                    <FaArrowRight className="relative z-10" />
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" ref={testimonialsRef} className="py-24 bg-dark relative">
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={isTestimonialsInView ? { width: "80px" } : { width: 0 }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-primary mx-auto mb-6"
            />
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-light">
              Was unsere <span className="text-primary">Kunden</span> sagen
            </h2>
            <p className="text-lg text-gray-300">
              Authentische Google-Bewertungen von Kunden aus <span className="text-primary font-semibold">Cuxhaven</span> und Umgebung.
            </p>
          </motion.div>
          
          <div className="bg-dark/30 backdrop-blur-lg border border-white/10 p-8 rounded-2xl max-w-5xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center mb-8">
              <img src="/images/icons/google.svg" alt="Google" className="h-8 mr-3" />
              <div>
                <div className="text-light font-bold text-xl">Google Bewertungen</div>
                <div className="text-gray-300 text-sm">Rodriguez-Web in Cuxhaven</div>
              </div>
            </div>
            
            {/* Google Reviews Integration */}
            <GoogleReviews className="max-w-full mx-auto" />
          </div>
          
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a 
              href="https://g.page/r/CQ1EJTWFQu8aEAI/review" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <span className="mr-2">Bewerten Sie uns auf Google</span>
              <FaArrowRight className="text-sm" />
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 bg-dark relative overflow-hidden">
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
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="bg-dark/30 backdrop-blur-lg border border-white/10 p-12 rounded-2xl max-w-4xl mx-auto shadow-2xl"
          >
            <motion.h2 
              className="text-4xl font-bold mb-6 text-light text-center"
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
              >Webprojekt</motion.span> in Cuxhaven zu starten?
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-10 text-gray-300 text-center"
              initial={{ opacity: 0 }}
              animate={isCtaInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Lassen Sie uns gemeinsam Ihre digitale Vision verwirklichen. Kontaktieren Sie mich für ein unverbindliches Beratungsgespräch.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a 
                href="/contact" 
                className="bg-primary hover:bg-primary/90 text-dark px-10 py-4 text-lg rounded-md flex items-center justify-center transition-all duration-300 relative overflow-hidden font-bold"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 156, 40, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 skew-x-12"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="relative z-10 mr-2">Kontakt aufnehmen</span>
                <FaArrowRight className="relative z-10" />
              </motion.a>
              
              <motion.a 
                href="tel:+4915219377166" 
                className="border border-primary/40 hover:border-primary text-light px-10 py-4 text-lg rounded-md flex items-center justify-center transition-all duration-300 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 156, 40, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">+49 152 193 77 166</span>
                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
