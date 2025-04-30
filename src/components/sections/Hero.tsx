'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        delay: 0.3 
      } 
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden animated-gradient-bg py-20 md:py-32">
      {/* Parallax Layers */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ 
          background: 'radial-gradient(circle at 20% 80%, rgba(255, 107, 0, 0.4) 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(255, 107, 0, 0.4) 0%, transparent 40%)'
        }}
      ></div>
      
      <div 
        className="absolute w-full h-full"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          transform: `translateY(${scrollY * 0.2}px)`
        }}
      ></div>
      
      {/* Logo floating in background */}
      <div className="absolute -top-20 right-10 opacity-30 animate-float hidden lg:block"
           style={{ transform: `translateY(${scrollY * -0.1}px)` }}>
        <Image
          src="/images/Rodriguez_web_logo.png"
          alt="Rodriguez Web Background Logo"
          width={400}
          height={400}
          className="opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center lg:items-start lg:w-2/3">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            <h1 className="text-center lg:text-left mb-6">
              <span className="block font-bold">Professionelle Websites</span>
              <span className="block text-gradient">für kleine Unternehmen in 7 Tagen</span>
            </h1>
            
            <p className="text-xl text-center lg:text-left text-gray-300 mb-8 max-w-2xl">
              Steigere deine Online-Sichtbarkeit ohne Technik-Stress. Wir entwickeln maßgeschneiderte Websites, 
              die Kunden überzeugen und zum Handeln motivieren.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <Button href="/contact" size="lg" className="glow">
              Jetzt Angebot anfordern
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              Portfolio ansehen
            </Button>
          </motion.div>
        </div>
        
        {/* Logo in small screens */}
        <div className="mt-16 flex justify-center lg:hidden">
          <Image
            src="/images/Rodriguez_web_logo.png"
            alt="Rodriguez Web Logo"
            width={200}
            height={200}
            className="opacity-80 animate-pulse-slow"
          />
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <svg className="w-6 h-10 text-primary" fill="none" strokeLinecap="round" 
             strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
