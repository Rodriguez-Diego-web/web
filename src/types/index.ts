// Common types used throughout the application

export interface NavItem {
  label: string;
  href: string;
}

export interface MetaData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

// Form related types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  description: string;
}

export interface FormErrors {
  [key: string]: string;
}

// SEO and Analytics types
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Project specific types - these are also defined in their respective data files
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  imageSrc: string;
  images?: string[];
  tags: string[];
  link?: string;
  category: 'website' | 'e-commerce' | 'landing-page' | 'blog';
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: any; // Using any here since the icon is a React component from react-icons
}

export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  imageSrc: string;
}
