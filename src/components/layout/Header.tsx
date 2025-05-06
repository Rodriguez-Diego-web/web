'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

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
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="relative">
      <header
        className={`fixed w-full z-30 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark shadow-lg py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="relative flex items-center z-40">
            <div className={`relative ${isScrolled ? 'h-14 w-28' : 'h-16 w-32'}`}>
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
            </div>
          </Link>

          {/* Desktop Navigation */}
          <Navigation className="hidden md:flex" />

          {/* Mobile Menu Toggle */}
          {!mobileMenuOpen ? (
            <button 
              className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none z-40"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Menü öffnen"
            >
              <span className="h-0.5 w-5 bg-primary" />
              <span className="h-0.5 w-5 bg-primary" />
              <span className="h-0.5 w-5 bg-primary" />
            </button>
          ) : (
            <button 
              className="md:hidden w-10 h-10 flex justify-center items-center focus:outline-none z-40"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Menü schließen"
            >
              <IoClose className="text-primary text-2xl" />
            </button>
          )}
        </div>
      </header>

      {/* Fullscreen Mobile Menu im Jung v. Matt Stil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-dark z-30 flex flex-col md:hidden overflow-hidden"
          >
            {/* X-Button oben rechts */}
            <button 
              className="absolute top-6 right-6 w-10 h-10 flex justify-center items-center focus:outline-none z-50"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Menü schließen"
            >
              <IoClose className="text-primary text-2xl" />
            </button>
            
            {/* Transparentes Logo im Hintergrund */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="w-[80%] max-w-xs opacity-10">
                <img
                  src="/images/Rodriguez_web_logo.png"
                  alt=""
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="flex-grow flex flex-col justify-center items-center text-center pt-20 z-10">
              {/* Hauptmenüpunkte im großen Stil */}
              <motion.nav 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="space-y-8"
              >
                <Link 
                  href="/" 
                  className="block text-4xl font-bold text-white hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HOME
                </Link>
                <Link 
                  href="/portfolio" 
                  className="block text-4xl font-bold text-white hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  PORTFOLIO
                </Link>
                <Link 
                  href="/services" 
                  className="block text-4xl font-bold text-white hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  LEISTUNGEN
                </Link>
                <Link 
                  href="/about" 
                  className="block text-4xl font-bold text-white hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ÜBER UNS
                </Link>
                <Link 
                  href="/contact" 
                  className="block text-4xl font-bold text-white hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  KONTAKT
                </Link>
              </motion.nav>
            </div>
            
            {/* Footer-Links wie im Jung v. Matt Menü */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="pb-10 px-8"
            >
              <div className="border-t border-gray-800 pt-6 flex flex-col space-y-3">
                <Link 
                  href="/contact" 
                  className="text-sm text-gray-400 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kostenlose Beratung
                </Link>
                <Link 
                  href="/impressum" 
                  className="text-sm text-gray-400 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Impressum
                </Link>
                <Link 
                  href="/datenschutz" 
                  className="text-sm text-gray-400 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Datenschutz
                </Link>
                <div className="flex items-center mt-3">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <p className="text-xs text-gray-400">Webdesign aus Cuxhaven</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
