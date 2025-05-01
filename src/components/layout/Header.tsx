'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import { motion } from 'framer-motion';

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

  return (
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

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-10 text-light"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="block w-6">
            <span 
              className={`block h-0.5 w-6 bg-primary mb-1.5 transition-all ${
                mobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span 
              className={`block h-0.5 w-6 bg-primary mb-1.5 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span 
              className={`block h-0.5 w-6 bg-primary ${
                mobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-dark/95 backdrop-blur-lg z-0 transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full justify-center items-center space-y-8 pt-16">
            <Navigation
              className="flex flex-col space-y-6 text-xl"
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
