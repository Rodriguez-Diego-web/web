'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { portfolioItems } from '@/data/portfolio';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function PortfolioPage() {
  const [category, setCategory] = useState('all');
  
  // Refs for scroll animations
  const heroRef = useRef(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });
  
  // Hero section parallax effects
  const heroY = useTransform(heroScrollProgress, [0, 1], [0, -150]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5, 1], [1, 1, 0]);
  const heroScale = useTransform(heroScrollProgress, [0, 0.5, 1], [1, 1.05, 1.1]);
  
  // Group portfolio items by category
  const categories = {
    all: portfolioItems,
    website: portfolioItems.filter(item => item.category === 'website'),
    'e-commerce': portfolioItems.filter(item => item.category === 'e-commerce'),
    'landing-page': portfolioItems.filter(item => item.category === 'landing-page'),
    blog: portfolioItems.filter(item => item.category === 'blog'),
  };
  
  const filteredProjects = categories[category as keyof typeof categories];
  
  // Animation variants
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8, 
        ease: "easeOut"
      }
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };
  
  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25,
        delay: 0.3
      }
    }
  };
  
  const filterButtonVariants = {
    inactive: { 
      backgroundColor: 'rgba(18, 18, 18, 0.1)',
      color: '#f7f7f7',
      scale: 1,
      boxShadow: '0 0 0 rgba(255, 107, 0, 0)'
    },
    active: { 
      backgroundColor: '#FF6B00',
      color: '#ffffff',
      scale: 1.05,
      boxShadow: '0 0 10px rgba(255, 107, 0, 0.5)'
    }
  };

  return (
    <>
      <motion.section 
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center overflow-hidden bg-dark"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          ></motion.div>
          
          <motion.div 
            className="absolute top-20 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            style={{ y: heroY }}
          ></motion.div>
          
          <motion.div 
            className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            style={{ y: heroY }}
          ></motion.div>
        </div>
        
        {/* Background grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-gradient">Unser</span> Portfolio
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Entdecken Sie unsere neuesten Projekte und Erfolgsgeschichten. Jedes Projekt wurde individuell gestaltet, um die Ziele unserer Kunden zu erreichen.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="flex justify-center space-x-2">
                <motion.div 
                  className="w-3 h-3 rounded-full bg-primary"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                ></motion.div>
                <motion.div 
                  className="w-3 h-3 rounded-full bg-primary"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                ></motion.div>
                <motion.div 
                  className="w-3 h-3 rounded-full bg-primary"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M7 13L12 18L17 13" 
              stroke="#FF6B00" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M7 7L12 12L17 7" 
              stroke="#FF6B00" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              strokeOpacity="0.5"
            />
          </svg>
        </motion.div>
      </motion.section>

      <section className="py-20 bg-dark relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-wrap gap-4 mb-16 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { id: 'all', label: 'Alle Projekte' },
              { id: 'website', label: 'Websites' },
              { id: 'e-commerce', label: 'E-Commerce' },
              { id: 'landing-page', label: 'Landing Pages' },
              { id: 'blog', label: 'Blogs' }
            ].map((cat) => (
              <motion.button 
                key={cat.id}
                className="px-6 py-3 rounded-full border-[1px] border-primary/30 text-white transition-all duration-300"
                onClick={() => setCategory(cat.id)}
                variants={filterButtonVariants}
                animate={category === cat.id ? 'active' : 'inactive'}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 15px rgba(255, 107, 0, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.label}
              </motion.button>
            ))}
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((item, index) => (
                <motion.div 
                  key={item.id}
                  variants={itemVariants}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  <Link href={`/portfolio/${item.id}`} className="block h-full">
                    <motion.div 
                      className="glass-card overflow-hidden border border-gray-800 h-full rounded-xl hover:border-primary/50 transition-colors duration-300"
                      whileHover={{ 
                        y: -10,
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <motion.div
                          className="w-full h-full"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                        >
                          {/* Ersetze Next.js Image mit normalen img-Tag für Kompatibilität mit Netlify */}
                          <img
                            src={item.imageSrc}
                            alt={item.title}
                            style={{
                              position: 'absolute',
                              height: '100%',
                              width: '100%',
                              objectFit: 'cover',
                              top: 0,
                              left: 0,
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                        </motion.div>
                        <motion.div 
                          className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end"
                          variants={tagVariants}
                        >
                          {item.tags.slice(0, 2).map((tag, i) => (
                            <span 
                              key={i} 
                              className="px-2 py-1 text-xs rounded-full bg-primary/90 text-white backdrop-blur-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </motion.div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                        <p className="text-gray-300 mb-4 h-12 overflow-hidden">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-primary text-sm">Projekt ansehen</span>
                          <motion.div 
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 12H19" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 5L19 12L12 19" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <motion.section 
        className="relative py-24 bg-gradient-to-b from-dark to-black overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        ></motion.div>
        
        <motion.div 
          className="absolute top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Bereit für Ihr</span> eigenes Projekt?
            </h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Lassen Sie uns gemeinsam Ihre Vision in eine beeindruckende Online-Präsenz verwandeln.
            </motion.p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <Button href="/contact" size="lg" className="glow-intense">
                Kontakt aufnehmen
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
