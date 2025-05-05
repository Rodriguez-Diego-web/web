'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface GoogleReview {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description?: string;
  author_url?: string;
  translated?: boolean;
}

interface GoogleReviewsData {
  name: string;
  rating: number;
  reviews: GoogleReview[];
}

interface GoogleReviewsProps {
  limit?: number;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
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
      duration: 0.5
    }
  }
};

const GoogleReviews: React.FC<GoogleReviewsProps> = ({ limit = 3, className = '' }) => {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [rating, setRating] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Verhindert Hydration-Probleme
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/google-reviews');
        
        if (!response.ok) {
          throw new Error(`Fehler beim Abrufen der Bewertungen. Status: ${response.status}`);
        }
        
        const data: GoogleReviewsData = await response.json();
        
        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews.slice(0, limit));
          setRating(data.rating);
        } else {
          setError('Keine Bewertungen gefunden');
        }
      } catch (err) {
        console.error('Fehler beim Laden der Google-Bewertungen:', err);
        setError('Fehler beim Laden der Bewertungen');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [limit, mounted]);

  // Formatiert den Zeitstempel in ein lesbares Datum
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Verhindert Hydration-Probleme
  if (!mounted) {
    return null;
  }

  if (loading) {
    return (
      <div className={`text-center py-10 ${className}`}>
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <p className="mt-4 text-gray-400">Bewertungen werden geladen...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`text-center py-10 ${className}`}>
        <p className="text-gray-400">{error}</p>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className={`text-center py-10 ${className}`}>
        <p className="text-gray-400">Keine Bewertungen gefunden</p>
      </div>
    );
  }

  return (
    <motion.div 
      className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${className}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {reviews.map((review, index) => (
        <motion.div 
          key={`${review.author_name}-${index}`}
          className="bg-white/5 border border-gray-800 p-8 rounded-xl relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.02, 
            boxShadow: "0 0 30px rgba(255, 156, 40, 0.1)",
            borderColor: "rgba(255, 156, 40, 0.4)"
          }}
        >
          {/* Google Icon */}
          <div className="flex items-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" className="mr-2">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            <span className="text-gray-400 text-sm font-medium">Google Bewertung</span>
          </div>
          
          {/* Star Rating */}
          <div className="flex mb-4">
            {Array(5).fill(0).map((_, i) => (
              <svg 
                key={i} 
                className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 6.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
          
          <p className="text-gray-300 mb-6 relative z-10">{review.text ? `"${review.text}"` : "★★★★★"}</p>
          
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700 mr-3 relative">
              {review.profile_photo_url && (
                <Image
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              )}
            </div>
            <div>
              <h4 className="font-medium text-light">{review.author_name}</h4>
              <p className="text-gray-400 text-sm">
                {review.relative_time_description || formatDate(review.time)}
              </p>
            </div>
          </div>
          
          <motion.div 
            className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mt-20 -mr-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity, delay: index * 2 }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GoogleReviews;
