'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();

  // Animation variants
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-40 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div variants={childVariants}>
            <div className="mb-6">
              <Image 
                src="/images/Rodriguez_web_logo.png" 
                alt="Rodriguez-Web Logo" 
                width={180} 
                height={48}
                className="mb-4"
              />
            </div>
            <p className="mb-6 text-gray-300">
              Professionelle Websites für kleine Unternehmen in 7 Tagen. Steigere deine Online-Sichtbarkeit ohne Technik-Stress.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, color: '#FF6B00' }}
              >
                <FaLinkedin className="w-6 h-6 transition-all" />
              </motion.a>
              <motion.a 
                href="https://instagram.com/" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram"
                whileHover={{ scale: 1.2, color: '#FF6B00' }}
              >
                <FaInstagram className="w-6 h-6 transition-all" />
              </motion.a>
              <motion.a 
                href="mailto:info@rodriguez-web.de" 
                aria-label="Email"
                whileHover={{ scale: 1.2, color: '#FF6B00' }}
              >
                <FaEnvelope className="w-6 h-6 transition-all" />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div variants={childVariants}>
            <h3 className="text-xl font-bold mb-6 text-gradient">Navigation</h3>
            <nav className="flex flex-col space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Leistungen', href: '/services' },
                { label: 'Über Uns', href: '/about' },
                { label: 'Kontakt', href: '/contact' }
              ].map((link, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
          
          <motion.div variants={childVariants}>
            <h3 className="text-xl font-bold mb-6 text-gradient">Kontakt</h3>
            <div className="space-y-4 text-gray-300">
              <motion.p 
                className="flex items-center"
                whileHover={{ x: 5, color: '#FF6B00' }}
              >
                <FaPhone className="mr-3 text-primary" /> +49 123 456789
              </motion.p>
              <motion.p 
                className="flex items-center"
                whileHover={{ x: 5, color: '#FF6B00' }}
              >
                <FaEnvelope className="mr-3 text-primary" /> info@rodriguez-web.de
              </motion.p>
              <motion.p 
                className="flex items-start"
                whileHover={{ x: 5, color: '#FF6B00' }}
              >
                <FaMapMarkerAlt className="mr-3 text-primary mt-1" />
                <span>
                  Musterstraße 123<br />
                  12345 Musterstadt<br />
                  Deutschland
                </span>
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16 pt-8 flex flex-col md:flex-row justify-between text-gray-400 text-sm relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          <p> {year} Rodriguez-Web. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/datenschutz" className="hover:text-primary transition-colors">
              Datenschutz
            </Link>
            <Link href="/impressum" className="hover:text-primary transition-colors">
              Impressum
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
