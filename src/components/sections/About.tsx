'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Animation values based on scroll
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
  const rotateImage = useTransform(scrollYProgress, [0, 1], [5, -5]);

  return (
    <motion.section 
      ref={sectionRef}
      className="py-20 bg-dark relative overflow-hidden" 
      style={{ opacity }}
      id="about"
    >
      {/* Decorative elements */}
      <div className="absolute top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-gradient">Über</span> Rodriguez-Web
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Wir sind ein Team von erfahrenen Webdesignern und -entwicklern, 
              die sich auf die Erstellung maßgeschneiderter Websites für kleine 
              und mittelständische Unternehmen spezialisiert haben.
            </p>
            
            <p className="text-lg text-gray-300 mb-6">
              Mit mehr als 5 Jahren Erfahrung in der Branche verstehen wir die 
              Bedürfnisse unserer Kunden und liefern Lösungen, die nicht nur gut 
              aussehen, sondern auch Ergebnisse bringen.
            </p>
            
            <p className="text-lg text-gray-300">
              Unser Fokus liegt auf der Kombination von ansprechendem Design, technischer Exzellenz 
              und Business-Strategie, um Websites zu erstellen, die nicht nur gut aussehen, 
              sondern auch messbare Ergebnisse für unsere Kunden liefern.
            </p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-8 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="glass-card px-4 py-3 border border-primary/20"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 107, 0, 0.5)' }}
              >
                <p className="text-2xl font-bold text-primary">50+</p>
                <p className="text-gray-300">Projekte</p>
              </motion.div>
              <motion.div 
                className="glass-card px-4 py-3 border border-primary/20"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 107, 0, 0.5)' }}
              >
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-gray-300">Kundenzufriedenheit</p>
              </motion.div>
              <motion.div 
                className="glass-card px-4 py-3 border border-primary/20"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 107, 0, 0.5)' }}
              >
                <p className="text-2xl font-bold text-primary">7</p>
                <p className="text-gray-300">Tage Lieferzeit</p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button href="/about" className="glow">Mehr über uns</Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{ rotate: rotateImage }}
          >
            <motion.div 
              className="aspect-square relative rounded-xl overflow-hidden shadow-xl border border-gray-800"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/about/team.jpg"
                alt="Das Rodriguez-Web Team"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
            </motion.div>
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-primary text-dark p-4 rounded glass-card shadow-lg hidden md:block border border-primary/20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255, 107, 0, 0.5)' }}
            >
              <p className="font-bold">Zertifizierte Experten</p>
              <p className="text-sm">Web Design & Development</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
