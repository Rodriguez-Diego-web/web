'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { FaUserTie, FaRegLightbulb, FaRegClock, FaRegStar, FaArrowRight, 
         FaCheck, FaQuoteLeft, FaShieldAlt, FaGlobe, FaUsers } from 'react-icons/fa';

// Metadata is now in a separate file: metadata.ts

export default function AboutPage() {
  // Refs for scroll animations
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const whyUsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);
  
  // InView checks
  const isStoryInView = useInView(storyRef, { once: false, amount: 0.2 });
  const isValuesInView = useInView(valuesRef, { once: false, amount: 0.2 });
  const isTeamInView = useInView(teamRef, { once: false, amount: 0.2 });
  const isWhyUsInView = useInView(whyUsRef, { once: false, amount: 0.2 });
  const isTestimonialsInView = useInView(testimonialsRef, { once: false, amount: 0.1 });
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

  // Team members data
  const teamMembers = [
    {
      name: 'Diego Rodriguez',
      position: 'Gründer & Webentwickler',
      bio: 'Mit über 8 Jahren Erfahrung in der Webentwicklung leitet Diego das technische Team und sorgt für optimale Performance und Funktionalität.',
      image: '/images/about/team-member-1.jpg',
    },
    {
      name: 'Julia Wagner',
      position: 'UI/UX Designerin',
      bio: 'Julia kreiert benutzerfreundliche und ästhetisch ansprechende Designs, die die Marke unserer Kunden perfekt repräsentieren.',
      image: '/images/about/team-member-2.jpg',
    },
    {
      name: 'Markus Schmidt',
      position: 'SEO & Marketing Experte',
      bio: 'Markus sorgt dafür, dass unsere Websites in den Suchmaschinen optimal platziert werden und maximale Sichtbarkeit erreichen.',
      image: '/images/about/team-member-3.jpg',
    },
  ];

  // Values data
  const values = [
    {
      icon: <FaUserTie className="w-10 h-10 text-primary" />,
      title: 'Professionalität',
      description: 'Wir arbeiten auf höchstem Niveau und liefern stets qualitativ hochwertige Ergebnisse.',
    },
    {
      icon: <FaRegLightbulb className="w-10 h-10 text-primary" />,
      title: 'Innovation',
      description: 'Wir bleiben am Puls der Zeit und setzen moderne Technologien und Trends ein.',
    },
    {
      icon: <FaRegClock className="w-10 h-10 text-primary" />,
      title: 'Zuverlässigkeit',
      description: 'Auf uns ist Verlass – wir halten Fristen ein und stehen zu unseren Zusagen.',
    },
    {
      icon: <FaRegStar className="w-10 h-10 text-primary" />,
      title: 'Kundenzufriedenheit',
      description: 'Zufriedene Kunden sind unser oberstes Ziel. Wir gehen auf Ihre Wünsche ein.',
    },
  ];
  
  // Testimonials data
  const testimonials = [
    {
      name: 'Stefan Müller',
      company: 'Müller Handwerk GmbH',
      text: 'Rodriguez-Web hat uns eine Website erstellt, die unsere Erwartungen übertroffen hat. Die Zusammenarbeit war professionell und angenehm.',
      image: '/images/testimonials/testimonial-1.jpg',
    },
    {
      name: 'Laura Weber',
      company: 'Weber & Partner',
      text: 'Dank Rodriguez-Web haben wir jetzt eine moderne Website, die unsere Marke perfekt repräsentiert. Wir sind sehr zufrieden mit dem Ergebnis.',
      image: '/images/testimonials/testimonial-2.jpg',
    },
    {
      name: 'Michael Bauer',
      company: 'Bauer Consulting',
      text: 'Die Expertise und der Service von Rodriguez-Web sind ausgezeichnet. Unsere neue Website hat uns bereits viele neue Kunden gebracht.',
      image: '/images/testimonials/testimonial-3.jpg',
    },
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
      
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center animated-gradient-bg">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-light leading-tight">
              Über <motion.span 
                className="text-primary inline-block"
                animate={{
                  textShadow: ["0px 0px 0px rgba(255,156,40,0)", "0px 0px 10px rgba(255,156,40,0.5)", "0px 0px 0px rgba(255,156,40,0)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Rodriguez-Web
              </motion.span>
            </h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Wir sind ein spezialisiertes Team von Webexperten mit einer Leidenschaft 
              für Design und Technologie. Seit 2018 helfen wir Unternehmen, 
              ihre Online-Präsenz zu verbessern und ihre Ziele zu erreichen.
            </motion.p>
            
            <motion.div 
              className="flex justify-center space-x-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.a 
                href="#team" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md flex items-center justify-center transition-all duration-300 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 156, 40, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
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
                <span className="relative z-10 mr-2">Team kennenlernen</span>
                <FaUsers className="relative z-10" />
              </motion.a>
              
              <motion.a 
                href="#story" 
                className="border border-primary/50 hover:border-primary text-white px-8 py-3 rounded-md flex items-center group transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-2">Unsere Geschichte</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <FaArrowRight />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          style={{ y }}
          className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-dark to-transparent"
        />
      </section>
      
      {/* Story Section with Parallax and Split Layout */}
      <section id="story" ref={storyRef} className="py-24 bg-dark relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                initial={{ width: 0 }}
                animate={isStoryInView ? { width: "100px" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-primary mb-6"
              />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">
                Unsere <span className="text-primary">Geschichte</span>
              </h2>
              
              <motion.p 
                className="text-lg text-gray-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Rodriguez-Web wurde 2018 von Diego Rodriguez gegründet, mit der Vision, 
                professionelle Webdesign- und Entwicklungsdienstleistungen anzubieten, 
                die für kleine und mittelständische Unternehmen zugänglich sind.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Was als Ein-Mann-Unternehmen begann, hat sich zu einem dynamischen Team von 
                Experten entwickelt, die alle ihre eigenen Stärken und Fachkenntnisse einbringen. 
                Heute sind wir stolz darauf, über 100 erfolgreiche Projekte abgeschlossen zu haben.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Unser Fokus liegt auf der Kombination von ansprechendem Design, technischer Exzellenz 
                und Business-Strategie, um Websites zu erstellen, die nicht nur gut aussehen, 
                sondern auch messbare Ergebnisse für unsere Kunden liefern.
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
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px]"
            >
              <motion.div 
                className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden border border-gray-800"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/about/office.jpg"
                  alt="Rodriguez-Web Büro"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  style={{ objectPosition: "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
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
                  className="font-bold text-xl"
                  animate={{
                    textShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 2px rgba(0,0,0,0.3)", "0px 0px 0px rgba(0,0,0,0)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Seit 2018
                </motion.p>
                <p className="text-dark/80">Ihr Partner für Web</p>
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 -left-6 bg-dark border border-primary/30 p-5 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isStoryInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <FaGlobe className="text-3xl text-primary mb-2" />
                <p className="text-light font-medium">100+ Websites</p>
                <p className="text-xs text-gray-400">Erfolgreich umgesetzt</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section with 3D Card Effects */}
      <section id="values" ref={valuesRef} className="py-24 bg-gradient-to-b from-dark to-dark/90 relative">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={isValuesInView ? { width: "80px" } : { width: 0 }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-primary mx-auto mb-6"
            />
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">
              Unsere <span className="text-primary">Werte</span>
            </h2>
            <p className="text-lg text-gray-300">
              Diese Grundsätze leiten unser Handeln und unsere Zusammenarbeit mit Kunden.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate={isValuesInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-dark/40 border border-primary/20 p-8 rounded-xl relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 0 25px rgba(255, 156, 40, 0.15)",
                  borderColor: "rgba(255, 156, 40, 0.5)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent -z-10"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 8, repeat: Infinity, delay: index * 0.5 }}
                />
                
                {/* Animated icon - removing animations */}
                <div className="mb-6 text-primary">
                  {value.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-light">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
                
                {/* Corner accent */}
                <motion.div 
                  className="absolute bottom-0 right-0 w-16 h-16 bg-primary/10 rounded-tl-full"
                  whileHover={{ scale: 1.5, opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Team Section with Interactive Cards */}
      <section id="team" ref={teamRef} className="py-24 bg-dark/95 relative">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <motion.div 
            className="absolute -right-40 -bottom-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={isTeamInView ? { width: "80px" } : { width: 0 }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-primary mx-auto mb-6"
            />
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">
              Unser <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-gray-300">
              Lernen Sie die Experten kennen, die Ihre Website zum Leben erwecken.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate={isTeamInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-dark/40 border border-gray-800 rounded-xl overflow-hidden group"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 0 30px rgba(255, 156, 40, 0.15)",
                  borderColor: "rgba(255, 156, 40, 0.3)"
                }}
              >
                <div className="relative h-80 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80"></div>
                  
                  <motion.div 
                    className="absolute bottom-0 w-full p-4 text-center translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-gradient-to-t from-dark/80 to-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-gray-300">{member.bio}</p>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="p-6 bg-dark/80 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-1 text-light">{member.name}</h3>
                  <p className="text-primary font-medium">{member.position}</p>
                  
                  <motion.div 
                    className="absolute top-0 right-0 w-16 h-16 -mt-8 -mr-8 bg-primary rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    animate={{
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" ref={whyUsRef} className="py-24 bg-gradient-to-b from-dark/90 to-dark/95 relative">
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
                      <p className="text-gray-300">Wir arbeiten solange, bis Sie zufrieden sind</p>
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
                    href="/kontakt" 
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
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">
              Was unsere <span className="text-primary">Kunden</span> sagen
            </h2>
            <p className="text-lg text-gray-300">
              Erfahren Sie, wie wir bereits anderen Unternehmen geholfen haben.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-dark/40 border border-primary/20 p-8 rounded-xl relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 0 30px rgba(255, 156, 40, 0.1)",
                  borderColor: "rgba(255, 156, 40, 0.4)"
                }}
              >
                <FaQuoteLeft className="text-4xl text-primary/20 mb-4" />
                
                <p className="text-gray-300 mb-6 relative z-10">"{testimonial.text}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/20 mr-4 relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-light">{testimonial.name}</h4>
                    <p className="text-primary text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <motion.div 
                  className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mt-20 -mr-20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{ duration: 8, repeat: Infinity, delay: index * 2 }}
                />
              </motion.div>
            ))}
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
                className="bg-primary hover:bg-primary/90 text-dark px-10 py-4 text-lg rounded-md flex items-center justify-center transition-all duration-300 relative overflow-hidden font-bold"
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
                <motion.div 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2 relative z-10"
                >
                  <FaArrowRight />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
