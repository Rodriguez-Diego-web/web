'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioItems } from '@/data/portfolio';
import Button from '@/components/ui/Button';

export default function PortfolioDetailPage({ params }: { params: { id: string } }) {
  // Find the portfolio item based on the ID from the URL
  const project = portfolioItems.find(item => item.id === params.id);

  // If project not found, show 404 page
  if (!project) {
    notFound();
  }
  
  // Refs for parallax scrolling effects
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  
  // Animation variants
  const fadeIn = {
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
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  // Get recommended projects (excluding current project)
  const recommendedProjects = portfolioItems
    .filter(item => item.id !== project.id)
    .filter(item => item.category === project.category)
    .slice(0, 3);
  
  // If we don't have enough projects in the same category, add from other categories
  if (recommendedProjects.length < 3) {
    const additionalProjects = portfolioItems
      .filter(item => item.id !== project.id && !recommendedProjects.some(p => p.id === item.id))
      .slice(0, 3 - recommendedProjects.length);
    
    recommendedProjects.push(...additionalProjects);
  }

  return (
    <>
      <motion.header 
        ref={headerRef}
        className="relative w-full h-[60vh] overflow-hidden bg-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero image with parallax effect */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y, scale }}
        >
          <Image 
            src={project.imageSrc} 
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent"></div>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <motion.div 
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent z-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        ></motion.div>
        
        <div className="absolute inset-0 flex items-end z-10">
          <div className="container mx-auto px-4 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl"
            >
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link 
                  href="/portfolio" 
                  className="inline-flex items-center text-white hover:text-primary transition-colors mb-8"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span>Zurück zum Portfolio</span>
                </Link>
              </motion.div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <motion.span 
                    key={index} 
                    className="px-3 py-1 text-sm rounded-full bg-primary/80 text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {project.title}
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {project.description}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.header>
      
      <main className="bg-dark text-white">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <motion.div 
                className="lg:col-span-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.h2 
                  className="text-2xl font-bold mb-6 text-gradient"
                  variants={fadeIn}
                >
                  Projektbeschreibung
                </motion.h2>
                
                <motion.div 
                  className="prose prose-lg prose-invert mb-8"
                  variants={fadeIn}
                >
                  <p className="text-gray-300">
                    {project.detailedDescription}
                  </p>
                </motion.div>
                
                <motion.div 
                  className="mb-12"
                  variants={fadeIn}
                >
                  <h3 className="text-xl font-bold mb-4">Die Herausforderung</h3>
                  <p className="text-gray-300 mb-6">{project.challenge}</p>
                  
                  <h3 className="text-xl font-bold mb-4">Unsere Lösung</h3>
                  <p className="text-gray-300 mb-6">{project.solution}</p>
                  
                  <h3 className="text-xl font-bold mb-4">Ergebnisse</h3>
                  <p className="text-gray-300">{project.results}</p>
                </motion.div>
                
                {project.link && (
                  <motion.div
                    variants={fadeIn}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="glow"
                    >
                      Website besuchen
                    </Button>
                  </motion.div>
                )}
              </motion.div>
              
              <motion.div
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div 
                  className="glass-card p-6 border border-gray-800"
                  variants={fadeIn}
                >
                  <h3 className="text-xl font-bold mb-4 text-gradient">Projektdetails</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm text-gray-400">Kategorie</h4>
                      <p className="text-white">{project.category === 'e-commerce' ? 'E-Commerce' : 
                                              project.category === 'landing-page' ? 'Landing Page' : 
                                              project.category === 'blog' ? 'Blog' : 'Website'}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400">Technologien</h4>
                      <p className="text-white">
                        {project.category === 'e-commerce' ? 'Next.js, React, Stripe, TailwindCSS' : 
                        project.category === 'landing-page' ? 'HTML, CSS, JavaScript, Framer Motion' : 
                        project.category === 'blog' ? 'WordPress, PHP, MySQL' : 'React, TailwindCSS, Framer Motion'}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400">Fertigstellung</h4>
                      <p className="text-white">2024</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="glass-card p-6 border border-gray-800"
                  variants={fadeIn}
                >
                  <h3 className="text-xl font-bold mb-4 text-gradient">Haben Sie ein ähnliches Projekt?</h3>
                  <p className="text-gray-300 mb-4">Lassen Sie uns besprechen, wie wir Ihnen helfen können, Ihre Vision zu verwirklichen.</p>
                  
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button href="/contact" className="w-full">
                      Kontakt aufnehmen
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Project gallery */}
        {project.images && project.images.length > 0 && (
          <section className="py-16 bg-gradient-to-b from-dark to-black">
            <div className="container mx-auto px-4">
              <motion.h2 
                className="text-3xl font-bold mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-gradient">Projekt</span> Galerie
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.images.map((image, index) => (
                  <motion.div 
                    key={index}
                    className="relative aspect-video overflow-hidden rounded-lg glass-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: '0 0 20px rgba(255, 107, 0, 0.3)'
                    }}
                  >
                    <Image 
                      src={image} 
                      alt={`${project.title} - Bild ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Recommendations */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-gradient">Ähnliche</span> Projekte
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recommendedProjects.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/portfolio/${item.id}`} className="block">
                    <motion.div 
                      className="glass-card overflow-hidden border border-gray-800 rounded-xl hover:border-primary/50 transition-colors duration-300"
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
                          <Image
                            src={item.imageSrc}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                        </motion.div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                        <p className="text-gray-300 mb-4 line-clamp-2">{item.description}</p>
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
            </div>
            
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button href="/portfolio" variant="outline" className="mx-auto">
                Alle Projekte ansehen
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
