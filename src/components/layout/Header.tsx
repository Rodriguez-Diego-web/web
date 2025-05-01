'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';

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
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark/90 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="relative z-10 flex items-center">
          <div className={`relative ${isScrolled ? 'h-16 w-32' : 'h-20 w-40'}`}>
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

        {/* Burger-Button */}
        <button 
          className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          <span 
            className={`h-0.5 w-6 bg-orange-600 transition-transform duration-300 ${
              mobileMenuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span 
            className={`h-0.5 w-6 bg-orange-600 transition-opacity duration-300 ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span 
            className={`h-0.5 w-6 bg-orange-600 transition-transform duration-300 ${
              mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-lg">
          <div className="h-full flex flex-col">
            <div className="flex-grow flex flex-col items-center justify-center">
              <Navigation
                className="flex flex-col items-center space-y-6 text-xl"
                onClick={() => setMobileMenuOpen(false)}
              />
              
              <div className="mt-8 w-16 h-0.5 bg-orange-600"></div>
            </div>
            
            <div className="text-center py-6">
              <p className="text-sm text-gray-400">&copy; 2025 Rodriguez-Web</p>
              <p className="text-sm text-gray-400">Webdesign aus Cuxhaven</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
