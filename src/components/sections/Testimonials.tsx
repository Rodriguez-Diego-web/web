'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  imageSrc: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

const Testimonials = ({ testimonials = [] }: TestimonialsProps) => {
  // Default testimonials if none provided
  const defaultTestimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Max Mustermann',
      position: 'Inhaber',
      company: 'Mustermann GmbH',
      content: 'Rodriguez-Web hat unsere Erwartungen übertroffen. Die neue Website führte zu einer 40% höheren Conversion-Rate und einer verbesserten Kundenbindung. Das Team war äußerst professionell und das Projekt wurde in nur 6 Tagen fertiggestellt!',
      rating: 5,
      imageSrc: '/images/testimonials/client1.jpg'
    },
    {
      id: '2',
      name: 'Laura Schmidt',
      position: 'Marketing Leiterin',
      company: 'Schmidt & Partner',
      content: 'Die Zusammenarbeit mit Rodriguez-Web war ein voller Erfolg. Vom ersten Konzept bis zur fertigen Website war der Prozess reibungslos und transparent. Wir sind mit dem Ergebnis sehr zufrieden und können das Team uneingeschränkt weiterempfehlen.',
      rating: 5,
      imageSrc: '/images/testimonials/client2.jpg'
    },
    {
      id: '3',
      name: 'Thomas Weber',
      position: 'Geschäftsführer',
      company: 'Weber Consulting',
      content: 'Unsere neue Website von Rodriguez-Web sieht nicht nur fantastisch aus, sondern generiert auch deutlich mehr Anfragen. Das Team hat unsere Vision perfekt umgesetzt und uns während des gesamten Prozesses hervorragend beraten.',
      rating: 5,
      imageSrc: '/images/testimonials/client3.jpg'
    }
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;
  
  // Ref for scroll animations
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Animation values based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  // Staggered card animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };
  
  const quoteVariants = {
    hover: {
      rotate: [0, -5, 5, -5, 0],
      scale: 1.2,
      color: "#FF6B00",
      transition: {
        duration: 0.5
      }
    }
  };
  
  const starVariants = {
    initial: { scale: 0 },
    animate: (i: number) => ({
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    })
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-black to-dark relative overflow-hidden" 
      style={{ opacity }}
      id="testimonials"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-gradient">Das sagen</span> unsere Kunden
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Erfolgsgeschichten und Erfahrungen unserer zufriedenen Kunden.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {displayTestimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              className="glass-card p-6 border border-gray-800 hover:border-primary/50"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <motion.div 
                    className="w-14 h-14 rounded-full overflow-hidden relative mr-4 border-2 border-primary"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <Image
                      src={testimonial.imageSrc}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-300">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <motion.div variants={quoteVariants} whileHover="hover">
                  <FaQuoteLeft className="text-primary/40 text-3xl" />
                </motion.div>
              </div>
              
              <p className="text-gray-300 mb-4">{testimonial.content}</p>
              
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <motion.div key={i} custom={i} variants={starVariants} initial="initial" animate="animate">
                    <FaStar
                      className={i < testimonial.rating ? 'text-primary' : 'text-gray-700'}
                      size={18}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-xl font-semibold mb-10 text-gradient">Kunden, mit denen wir zusammenarbeiten</h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[1, 2, 3, 4, 5].map((num) => (
              <motion.div 
                key={num} 
                className="glass-card p-5 border border-gray-800/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: num * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(255, 107, 0, 0.5)',
                  boxShadow: '0 0 15px rgba(255, 107, 0, 0.3)'
                }}
              >
                <Image 
                  src={`/images/logos/client-logo${num}.png`} 
                  alt="Client Logo" 
                  width={140} 
                  height={70} 
                  className="object-contain h-14 filter-none" 
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
