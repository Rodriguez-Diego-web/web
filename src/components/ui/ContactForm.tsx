'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from './Button';
import { trackFormSubmission } from '@/lib/analytics';

type FormData = {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  description: string;
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError('');
    
    try {
      console.log('Formular wird abgesendet mit Daten:', data);
      // Vorbereiten der Formulardaten
      const formData = new FormData();
      
      // Besonders wichtig: form-name muss gesetzt sein
      formData.append('form-name', 'kontakt');
      
      // Hinzufügen aller Formularfelder
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string);
        console.log(`Feld: ${key}, Wert: ${value}`);
      });
      
      // Sendet die Daten über fetch
      console.log('Sende Anfrage an Netlify...');
      const response = await fetch('/', {
        method: 'POST',
        // Diese Header sind wichtig für Netlify
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded' 
        },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      console.log('Antwort erhalten:', response.status, response.statusText);
      
      if (!response.ok) {
        throw new Error(`Formular konnte nicht gesendet werden. Status: ${response.status}`);
      }
      
      console.log('Formular erfolgreich abgesendet!');
      trackFormSubmission('contact');
      
      // Reset the form and show success state
      reset();
      setIsSubmitted(true);
      
      // Hide the success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Fehler beim Senden des Formulars:', err);
      setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-dark/50 border border-primary/20 rounded-xl shadow-lg p-6 md:p-8">
      {isSubmitted ? (
        <div className="text-center py-8">
          <svg
            className="w-16 h-16 text-primary mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h3 className="text-2xl font-bold mb-2 text-light">Vielen Dank!</h3>
          <p className="text-gray-300">
            Ihre Anfrage wurde erfolgreich übermittelt. Wir werden uns in Kürze bei Ihnen melden.
          </p>
        </div>
      ) : (
        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className="space-y-6" 
          name="kontakt"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/"
        >
          <input type="hidden" name="form-name" value="kontakt" />
          <div className="hidden">
            <label>
              Nicht ausfüllen, wenn Sie ein Mensch sind: <input name="bot-field" />
            </label>
          </div>
          
          <h3 className="text-2xl font-bold mb-6 text-light">Kontaktieren Sie uns</h3>
          
          {error && (
            <div className="bg-red-900/30 text-red-400 p-4 rounded-lg mb-6 border border-red-800">
              {error}
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium text-gray-300">
                Name *
              </label>
              <input
                id="name"
                type="text"
                className={`w-full px-4 py-2 bg-dark/80 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition text-gray-100 ${
                  errors.name ? 'border-red-500' : 'border-gray-700'
                }`}
                placeholder="Ihr Name"
                {...register('name', { required: 'Name ist erforderlich' })}
              />
              {errors.name && (
                <p className="mt-1 text-red-400 text-sm">{errors.name.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-gray-300">
                E-Mail *
              </label>
              <input
                id="email"
                type="email"
                className={`w-full px-4 py-2 bg-dark/80 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition text-gray-100 ${
                  errors.email ? 'border-red-500' : 'border-gray-700'
                }`}
                placeholder="Ihre E-Mail-Adresse"
                {...register('email', {
                  required: 'E-Mail ist erforderlich',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Ungültige E-Mail-Adresse',
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-red-400 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="phone" className="block mb-2 font-medium text-gray-300">
              Telefon (optional)
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full px-4 py-2 bg-dark/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition text-gray-100"
              placeholder="Ihre Telefonnummer"
              {...register('phone')}
            />
          </div>
          
          <div>
            <label htmlFor="projectType" className="block mb-2 font-medium text-gray-300">
              Projekttyp *
            </label>
            <select
              id="projectType"
              className={`w-full px-4 py-2 bg-dark/80 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition text-gray-100 ${
                errors.projectType ? 'border-red-500' : 'border-gray-700'
              }`}
              {...register('projectType', { required: 'Bitte wählen Sie einen Projekttyp' })}
            >
              <option value="">-- Bitte wählen --</option>
              <option value="website">Neue Website</option>
              <option value="redesign">Redesign bestehender Website</option>
              <option value="webshop">Webshop / E-Commerce</option>
              <option value="seo">SEO-Optimierung</option>
              <option value="other">Sonstiges</option>
            </select>
            {errors.projectType && (
              <p className="mt-1 text-red-400 text-sm">{errors.projectType.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="description" className="block mb-2 font-medium text-gray-300">
              Projektbeschreibung *
            </label>
            <textarea
              id="description"
              rows={5}
              className={`w-full px-4 py-2 bg-dark/80 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition text-gray-100 ${
                errors.description ? 'border-red-500' : 'border-gray-700'
              }`}
              placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage"
              {...register('description', { required: 'Projektbeschreibung ist erforderlich' })}
            ></textarea>
            {errors.description && (
              <p className="mt-1 text-red-400 text-sm">{errors.description.message}</p>
            )}
          </div>
          
          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              className="px-8 py-3 bg-primary text-dark hover:bg-primary/90 focus:ring-4 focus:ring-primary/50 font-medium rounded-lg text-lg transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
