'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

type FormState = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const inputVariants = {
    focus: { 
      scale: 1.01,
      borderColor: 'rgba(255, 107, 0, 0.8)',
      boxShadow: '0 0 0 1px rgba(255, 107, 0, 0.2)'
    }
  };

  const formItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const contactItems = [
    {
      icon: <FaEnvelope className="text-primary text-2xl" />,
      title: 'E-Mail',
      content: 'diego@rodriguez-web.de',
      link: 'mailto:diego@rodriguez-web.de'
    },
    {
      icon: <FaPhone className="text-primary text-2xl" />,
      title: 'Telefon',
      content: '+49 123 456 7890',
      link: 'tel:+491234567890'
    },
    {
      icon: <FaMapMarkerAlt className="text-primary text-2xl" />,
      title: 'Adresse',
      content: 'Musterstraße 123, 12345 Berlin',
      link: 'https://maps.google.com/?q=Berlin'
    }
  ];

  return (
    <section className="py-20 relative bg-gradient-to-b from-black to-dark overflow-hidden" id="contact">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gradient">Kontakt</span> aufnehmen
          </h2>
          <p className="text-lg text-gray-300">
            Bereit, Ihre Online-Präsenz auf das nächste Level zu bringen? 
            Kontaktieren Sie uns für eine unverbindliche Beratung.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gradient">Schreiben Sie uns</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div 
                variants={formItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <motion.input
                  whileFocus="focus"
                  variants={inputVariants}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark/50 border border-gray-700 text-white rounded-lg focus:outline-none glass-card"
                  placeholder="Ihr Name"
                />
              </motion.div>
              
              <motion.div 
                variants={formItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  E-Mail
                </label>
                <motion.input
                  whileFocus="focus"
                  variants={inputVariants}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark/50 border border-gray-700 text-white rounded-lg focus:outline-none glass-card"
                  placeholder="Ihre E-Mail Adresse"
                />
              </motion.div>
              
              <motion.div 
                variants={formItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Nachricht
                </label>
                <motion.textarea
                  whileFocus="focus"
                  variants={inputVariants}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark/50 border border-gray-700 text-white rounded-lg focus:outline-none glass-card"
                  placeholder="Wie können wir Ihnen helfen?"
                />
              </motion.div>
              
              <motion.div 
                variants={formItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'glow'
                  }`}
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>
                
                {submitStatus === 'success' && (
                  <motion.p 
                    className="text-green-400 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Ihre Nachricht wurde erfolgreich gesendet.
                  </motion.p>
                )}
                
                {submitStatus === 'error' && (
                  <motion.p 
                    className="text-red-400 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.
                  </motion.p>
                )}
              </motion.div>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:pl-12"
          >
            <h3 className="text-xl font-semibold mb-6 text-gradient">Kontaktdaten</h3>
            
            <div className="space-y-6 mb-8">
              {contactItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start glass-card p-4 border border-gray-800 hover:border-primary/50"
                  whileHover={{ scale: 1.02, borderColor: 'rgba(255, 107, 0, 0.5)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="mr-4 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-medium text-white mb-1">{item.title}</h4>
                    <a 
                      href={item.link} 
                      className="text-gray-300 hover:text-primary transition-colors"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.content}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 text-gradient">Geschäftszeiten</h3>
              <div className="glass-card p-5 border border-gray-800">
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <span className="text-gray-300">Montag - Freitag:</span>
                  <span className="text-white">9:00 - 17:00 Uhr</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-gray-300">Samstag - Sonntag:</span>
                  <span className="text-white">Geschlossen</span>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video rounded-xl overflow-hidden glass-card border border-gray-800">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.411557470272!2d13.37979!3d52.5169155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c4b639cdd7%3A0x68c85ae5cb351699!2sBrandenburg%20Gate!5e0!3m2!1sen!2sde!4v1634121675292!5m2!1sen!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
