import { FaPalette, FaCode, FaServer, FaSearch, FaChartLine, FaShieldAlt, FaBlog, FaStore, FaImage, FaCog, FaTools } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: IconType;
}

export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface AdditionalService {
  id: string;
  name: string;
  price: string;
  description: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'web-design',
    title: 'Webdesign',
    description: 'Maßgeschneiderte Designs, die Ihre Marke optimal repräsentieren und Besucher begeistern.',
    icon: FaPalette
  },
  {
    id: 'web-development',
    title: 'Webentwicklung',
    description: 'Moderne, responsive Websites mit optimaler Performance auf allen Geräten.',
    icon: FaCode
  },
  {
    id: 'hosting',
    title: 'Hosting & Wartung',
    description: 'Zuverlässiges Hosting mit regelmäßigen Updates und technischem Support.',
    icon: FaServer
  },
  {
    id: 'seo',
    title: 'SEO-Grundlagen',
    description: 'Optimierung für Suchmaschinen, damit Ihre Website besser gefunden wird.',
    icon: FaSearch
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description: 'Einrichtung von Tracking-Tools zur Analyse des Besucherverhaltens.',
    icon: FaChartLine
  },
  {
    id: 'security',
    title: 'Sicherheit',
    description: 'SSL-Zertifikat und Grundschutz für Ihre Website und Besucherdaten.',
    icon: FaShieldAlt
  },
  {
    id: 'blog',
    title: 'Blog-Integration',
    description: 'Professionelles Blog-System zur regelmäßigen Veröffentlichung neuer Inhalte.',
    icon: FaBlog
  },
  {
    id: 'e-commerce',
    title: 'Online-Shop',
    description: 'Verkaufen Sie Ihre Produkte online mit einer benutzerfreundlichen Shop-Lösung.',
    icon: FaStore
  },
  {
    id: 'media',
    title: 'Medienoptimierung',
    description: 'Optimierung Ihrer Bilder und Videos für schnelle Ladezeiten bei optimaler Qualität.',
    icon: FaImage
  },
  {
    id: 'maintenance',
    title: 'Wartung',
    description: 'Regelmäßige Updates und Support für Ihre Website nach dem Launch.',
    icon: FaCog
  },
  {
    id: 'wartung-plus',
    title: 'Wartung Plus',
    description: 'Regelmäßige Updates und Support für Ihre Website nach dem Launch.',
    icon: FaTools
  }
];

export const servicePackages: ServicePackage[] = [
  {
    id: 'starter',
    name: 'Starter-Paket',
    price: '€1.099',
    description: 'Komplettlösung für kleine Unternehmen',
    features: [
      'Responsive Website mit bis zu 5 Seiten',
      'Individuelles Design',
      'Kontaktformular & Google Maps',
      'Basis-SEO-Optimierung',
      'Hosting für 1 Jahr inklusive',
      'Kostenlose Domain für 1 Jahr'
    ],
    isPopular: true
  },
  {
    id: 'business',
    name: 'Business-Paket',
    price: '€1.799',
    description: 'Für wachsende Unternehmen mit erweiterten Anforderungen.',
    features: [
      'Responsive Website mit bis zu 10 Seiten',
      'Premium Design mit animierten Elementen',
      'Erweiterte Kontaktformulare',
      'Blog-Integration',
      'Umfassende SEO-Optimierung',
      'Google Analytics Integration',
      'Hosting für 1 Jahr inklusive',
      'SSL-Zertifikat'
    ],
    isPopular: true
  },
  {
    id: 'premium',
    name: 'Premium-Paket',
    price: '€3.999',
    description: 'Die Komplettlösung für anspruchsvolle Unternehmen und E-Commerce.',
    features: [
      'Responsive Website mit unbegrenzten Seiten',
      'Maßgeschneidertes Premium-Design',
      'E-Commerce-Integration (bis zu 50 Produkte)',
      'Newsletter-System',
      'Multi-Sprachen-Support',
      'Umfassende SEO-Optimierung',
      'Analytics-Dashboard',
      'Hosting für 2 Jahre inklusive',
      'Premium SSL-Zertifikat',
      'Monatliches Performance-Reporting'
    ]
  }
];

export const additionalServices: AdditionalService[] = [
  {
    id: 'content',
    name: 'Content-Erstellung',
    price: 'ab €299',
    description: 'Professionelle Texte für Ihre Website, die sowohl für Leser als auch für Suchmaschinen optimiert sind.'
  },
  {
    id: 'photo',
    name: 'Brand ID',
    price: 'ab €499',
    description: 'Professionelle Fotos Ihres Unternehmens, Ihrer Produkte oder Dienstleistungen für Ihre Website.'
  },
  {
    id: 'logo',
    name: 'Logo-Design',
    price: 'ab €299',
    description: 'Ein einzigartiges Logo, das Ihre Markenidentität widerspiegelt und auf allen Medien gut aussieht.'
  },
  {
    id: 'maintenance-package',
    name: 'Wartungspaket',
    price: '€99/Monat',
    description: 'Regelmäßige Updates, Sicherheits-Checks und kleine Änderungen an Ihrer Website.'
  },
  {
    id: 'seo-package',
    name: 'SEO-Paket',
    price: 'ab €499',
    description: 'Umfassende Optimierung Ihrer Website für Suchmaschinen mit monatlichen Reports.'
  },
  {
    id: 'seo-ongoing',
    name: 'SEO-Betreuung',
    price: 'ab €499',
    description: 'Umfassende Optimierung Ihrer Website für Suchmaschinen mit monatlichen Reports.'
  },
  {
    id: 'wartung-plus',
    name: 'Wartung Plus',
    price: 'ab €499',
    description: 'Umfassende Optimierung Ihrer Website für Suchmaschinen mit monatlichen Reports.'
  }
];
