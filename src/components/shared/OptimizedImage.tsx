'use client';

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { useInView } from 'framer-motion';

// Diese Komponente erweitert die Next.js Image-Komponente mit:
// - Lazy Loading Unterstützung
// - Optimierte Ladestrategien (blur/progressive loading)
// - Automatische Größenanpassung für bessere Core Web Vitals

interface OptimizedImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
  loadingStrategy?: 'eager' | 'lazy';
  blur?: boolean;
  threshold?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  loadingStrategy = 'lazy',
  blur = true,
  threshold = 0.1,
  className = '',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [blurDataUrl, setBlurDataUrl] = useState<string | undefined>(undefined);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  // Generiere ein einfaches Blur-Placeholder für schnelleres Laden
  useEffect(() => {
    if (blur && typeof src === 'string' && src.includes('/images/')) {
      // Sehr einfacher Placeholder für Demonstration
      // In Produktion sollte man tatsächliche Blur-Daten verwenden
      setBlurDataUrl('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkcGisBwABNQDSuErTXAAAAABJRU5ErkJggg==');
    }
  }, [src, blur]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {isInView && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          placeholder={blur && blurDataUrl ? 'blur' : 'empty'}
          blurDataURL={blurDataUrl}
          priority={loadingStrategy === 'eager'}
          loading={loadingStrategy === 'lazy' ? 'lazy' : undefined}
          {...props}
        />
      )}
      {(!isInView || !isLoaded) && (
        <div 
          className="absolute inset-0 bg-gray-900/20 animate-pulse"
          style={{ 
            aspectRatio: width && height ? `${width}/${height}` : 'auto',
          }}
        ></div>
      )}
    </div>
  );
};

export default OptimizedImage;
