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

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Function to close mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed w-full z-40 transition-all duration-300 ${
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

          {/* Burger-Button - IMMER SICHTBAR */}
          <div className="md:hidden z-50 relative">
            <button 
              onClick={toggleMobileMenu}
              className="w-12 h-12 rounded-full bg-dark-700/80 flex items-center justify-center"
              aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              <div className="w-6 h-5 flex flex-col justify-between overflow-hidden">
                <span 
                  className={`h-0.5 w-6 bg-orange-600 transform-origin-center block transition-all duration-300 ${
                    mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span 
                  className={`h-0.5 w-6 bg-orange-600 block transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`h-0.5 w-6 bg-orange-600 transform-origin-center block transition-all duration-300 ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>
    
      {/* Mobile Menü Modal */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden"
          onClick={closeMobileMenu}
        >
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />
          
          <div 
            className="fixed right-0 top-0 h-full w-[300px] bg-gradient-to-b from-dark-800 to-dark-900 shadow-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full pt-12">
              {/* Schließen-Button innerhalb des Menüs */}
              <button
                className="absolute top-4 right-4 p-2 text-orange-500 hover:text-orange-400"
                onClick={closeMobileMenu}
                aria-label="Menü schließen"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <div className="flex-grow flex flex-col items-center justify-center py-8">
                <div className="w-16 h-0.5 bg-orange-600 mb-8" />
                
                <Navigation
                  className="flex flex-col items-center space-y-8 text-xl"
                  onClick={closeMobileMenu}
                />
                
                <div className="w-16 h-0.5 bg-orange-600 mt-8" />
                
                <Link 
                  href="/contact"
                  className="mt-10 px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-md font-medium hover:from-orange-500 hover:to-orange-400 transition-all"
                  onClick={closeMobileMenu}
                >
                  Jetzt anfragen
                </Link>
              </div>
              
              <div className="mt-auto text-center text-sm text-gray-400 pb-4">
                <p>&copy; 2025 Rodriguez-Web</p>
                <p>Webdesign aus Cuxhaven</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
