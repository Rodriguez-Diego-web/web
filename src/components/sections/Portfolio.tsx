'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { motion, useScroll, useTransform } from 'framer-motion';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
}

interface PortfolioProps {
  items?: PortfolioItem[];
  showViewAll?: boolean;
  limit?: number;
}

const Portfolio = ({ items = [], showViewAll = true, limit = 3 }: PortfolioProps) => {
  const displayItems = items.slice(0, limit);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax and animation values based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <motion.section 
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dark z-0 hidden md:block">
        <div 
          className="absolute w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 107, 0, 0.15) 0%, transparent 50%)`,
            transform: `rotate(-5deg) scale(1.5)`
          }}
        />
        <div 
          className="absolute w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 75% 75%, rgba(255, 107, 0, 0.1) 0%, transparent 50%)`,
            transform: `rotate(5deg) scale(1.5)`
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          style={{ y }}
        >
          <h2 className="text-3xl font-bold mb-4"><span className="text-gradient">Unsere</span> Erfolgsgeschichten</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Eine Auswahl unserer maßgeschneiderten Webseitenlösungen für verschiedene Branchen.
          </p>
        </motion.div>
        
        {displayItems.length > 0 ? (
          <>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {displayItems.map((item) => (
                <motion.div 
                  key={item.id} 
                  variants={itemVariants}
                  className="hover-lift"
                >
                  <Card
                    title={item.title}
                    description={item.description}
                    imageSrc={item.imageSrc}
                    tags={item.tags}
                    href={`/portfolio/${item.id}`}
                  />
                </motion.div>
              ))}
            </motion.div>
            
            {showViewAll && (
              <motion.div 
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Button href="/portfolio" variant="outline">
                  Alle Projekte ansehen
                </Button>
              </motion.div>
            )}
          </>
        ) : (
          <div className="text-center py-12 text-gray-400">
            <p>Noch keine Portfolio-Einträge vorhanden</p>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Portfolio;
