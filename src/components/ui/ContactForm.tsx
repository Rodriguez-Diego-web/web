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
      // In a real application, you would send the form data to your backend
      // For demo purposes, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', data);
      trackFormSubmission('contact');
      
      // Reset the form and show success state
      reset();
      setIsSubmitted(true);
      
      // Hide the success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      {isSubmitted ? (
        <div className="text-center py-8">
          <svg
            className="w-16 h-16 text-green-500 mx-auto mb-4"
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
          <h3 className="text-2xl font-bold mb-2">Vielen Dank!</h3>
          <p className="text-gray-600">
            Ihre Anfrage wurde erfolgreich übermittelt. Wir werden uns in Kürze bei Ihnen melden.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h3 className="text-2xl font-bold mb-6">Kontaktieren Sie uns</h3>
          
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Name *
              </label>
              <input
                id="name"
                type="text"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Ihr Name"
                {...register('name', { required: 'Name ist erforderlich' })}
              />
              {errors.name && (
                <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                E-Mail *
              </label>
              <input
                id="email"
                type="email"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
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
                <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="phone" className="block mb-2 font-medium">
              Telefon (optional)
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
              placeholder="Ihre Telefonnummer"
              {...register('phone')}
            />
          </div>
          
          <div>
            <label htmlFor="projectType" className="block mb-2 font-medium">
              Projekttyp *
            </label>
            <select
              id="projectType"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition ${
                errors.projectType ? 'border-red-500' : 'border-gray-300'
              }`}
              {...register('projectType', { required: 'Bitte wählen Sie einen Projekttyp' })}
            >
              <option value="">Bitte wählen</option>
              <option value="new-website">Neue Website</option>
              <option value="website-redesign">Website-Redesign</option>
              <option value="e-commerce">E-Commerce / Online-Shop</option>
              <option value="other">Sonstiges</option>
            </select>
            {errors.projectType && (
              <p className="mt-1 text-red-500 text-sm">{errors.projectType.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="description" className="block mb-2 font-medium">
              Projektbeschreibung *
            </label>
            <textarea
              id="description"
              rows={5}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage"
              {...register('description', {
                required: 'Projektbeschreibung ist erforderlich',
                minLength: {
                  value: 10,
                  message: 'Bitte geben Sie mindestens 10 Zeichen ein',
                },
              })}
            ></textarea>
            {errors.description && (
              <p className="mt-1 text-red-500 text-sm">{errors.description.message}</p>
            )}
          </div>
          
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
