'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';

const CallToAction = () => {
  // Ref for scroll animations
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect values
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  
  // Animation variants
  const titleVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Glow effect animation
  const glowVariant = {
    animate: {
      boxShadow: [
        "0 0 10px rgba(255, 107, 0, 0)",
        "0 0 20px rgba(255, 107, 0, 0.5)",
        "0 0 10px rgba(255, 107, 0, 0)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ scale }}
      id="cta"
    >
      {/* Striking background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-black to-dark/90 z-0"></div>
      
      {/* Animated particle overlay */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 107, 0, 0.07)" strokeWidth="0.5" />
            </pattern>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect width="80" height="80" fill="url(#smallGrid)" />
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255, 107, 0, 0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Parallax decorative elements */}
      <motion.div 
        className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl z-0 top-20"
        style={{ x: y, y: y, opacity }}
      ></motion.div>
      
      <motion.div 
        className="absolute w-80 h-80 rounded-full bg-primary/10 blur-3xl z-0 -bottom-10 -right-10"
        style={{ x: useTransform(scrollYProgress, [0, 1], [-50, 50]), opacity }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={titleVariant}
            >
              <span className="text-white">Bereit für Ihre </span>
              <span className="text-gradient">neue Website?</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              variants={itemVariant}
            >
              In nur 7 Tagen zu Ihrer professionellen Online-Präsenz. Kontaktieren Sie uns jetzt für ein unverbindliches Angebot.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={itemVariant}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={glowVariant.animate}
              >
                <Button href="/contact" size="lg" className="w-full sm:w-auto glow-intense">
                  Jetzt Angebot anfordern
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button href="/portfolio" variant="outline" size="lg" className="w-full sm:w-auto">
                  Portfolio ansehen
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Stats counter section */}
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {[
              { value: "50+", label: "Zufriedene Kunden" },
              { value: "100+", label: "Projekte" },
              { value: "7", label: "Tage Lieferzeit" },
              { value: "24/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="glass-card py-4 px-2 border border-primary/20"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(255, 107, 0, 0.5)',
                  boxShadow: '0 0 15px rgba(255, 107, 0, 0.3)'
                }}
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    delay: 0.2 + index * 0.1
                  }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-sm text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CallToAction;
