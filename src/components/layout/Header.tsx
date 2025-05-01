'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Verhindere das Scrollen, wenn das mobile Menü geöffnet ist
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark/90 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="relative z-10 flex items-center">
            <motion.div 
              className={`relative ${isScrolled ? 'h-16 w-32' : 'h-20 w-40'}`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Reguläres img-Tag statt Next.js Image-Komponente */}
              <img
                src="/images/Rodriguez_web_logo.png"
                alt="Rodriguez-Web Logo"
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  objectFit: 'contain',
                  top: 0,
                  left: 0
                }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <Navigation className="hidden md:flex" />

          {/* Moderner Burger-Button mit Animation */}
          <motion.button 
            className="md:hidden relative z-50 w-12 h-12 rounded-full bg-dark-700/80 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-6 h-5 flex flex-col justify-between overflow-hidden">
              <motion.span 
                className="h-0.5 w-6 bg-orange-500 transform-origin-center block"
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 9 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span 
                className="h-0.5 w-6 bg-orange-500 block"
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1,
                  x: mobileMenuOpen ? 20 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span 
                className="h-0.5 w-6 bg-orange-500 transform-origin-center block"
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -9 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </div>
          </motion.button>
        </div>
      </motion.header>
    
      {/* Mobile Menü außerhalb des Headers, um es komplett zu fixieren */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300 
            }}
            className="fixed inset-0 z-[100] overflow-hidden"
            style={{ position: 'fixed' }}
          >
            <motion.div 
              className="absolute inset-0 bg-dark/90 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <motion.div 
              className="absolute right-0 top-0 h-full w-full sm:w-80 bg-gradient-to-bl from-dark-700 to-dark-900 shadow-xl overflow-auto"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex flex-col min-h-full">
                <div className="flex justify-end p-4">
                  <div className="h-16 w-32"></div> {/* Spacer to match logo height */}
                </div>
                
                <div className="flex-grow flex flex-col justify-center items-center p-8">
                  <motion.div 
                    className="w-20 h-1 bg-orange-500 rounded-full mb-10"
                    initial={{ width: 0 }}
                    animate={{ width: 80 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  />
                  
                  <Navigation
                    className="flex flex-col items-center space-y-8 text-xl w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  />
                  
                  <motion.div 
                    className="mt-12 w-20 h-1 bg-orange-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: 80 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  />
                </div>
                
                <div className="p-6 text-center text-sm text-gray-400">
                  <p>&copy; 2025 Rodriguez-Web</p>
                  <p>Webdesign aus Cuxhaven</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
