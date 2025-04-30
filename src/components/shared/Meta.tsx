'use client';

import React from 'react';
import Head from 'next/head';

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

// Next.js App Router doesn't use next/head, it uses metadata in layout.tsx instead
// This component is kept for compatibility with pages directory if needed
const Meta = ({
  title = 'Rodriguez-Web | Professionelle Webseiten für Unternehmen',
  description = 'Professionelle Webseiten für kleine Unternehmen in nur 7 Tagen. Steigere deine Online-Sichtbarkeit ohne Technik-Stress.',
  keywords = 'webdesign, webentwicklung, websites, business, seo, responsive',
  ogImage = '/images/og-image.jpg',
}: MetaProps) => {
  const siteUrl = 'https://rodriguez-web.de'; // Replace with your actual domain

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />
    </>
  );
};

export default Meta;
