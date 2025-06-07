export interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
  description?: string;
  category?: string;
}

export const partners: Partner[] = [
  {
    id: 'cuxsnack',
    name: 'CuxSnack',
    logo: '/images/partners/cuxsnack.png',
    website: 'https://cuxsnack.netlify.app/',
    description: 'All-in-One Snackshop aus Cuxhaven. Für CuxSnack wurde ein innovatives Slot-Gewinnspiel entwickelt.',
    category: 'E-Commerce'
  },
  {
    id: 'famfordogs',
    name: 'Fam for Dogs',
    logo: '/images/partners/fam.png',
    website: 'https://famfordogs.com/',
    description: 'Gemeinnütziges Projekt für Hunde in Not. Webauftritt, Spendenplattform und Patenschaftsvermittlung.',
    category: 'Soziales Projekt'
  },
  {
    id: 'planpanda',
    name: 'Planpanda',
    logo: '/images/partners/planpanda.png',
    website: 'https://planpanda.de/',
    description: 'Die smarte To-Do Planer App für effizientes Aufgabenmanagement.',
    category: 'App'
  },
  {
    id: 'saskia',
    name: 'Photographie Saskia Läntzsch',
    logo: '/images/partners/saskia.png',
    website: '',
    description: 'Kreative Fotografie aus Cuxhaven – modern, authentisch und mit Liebe zum Detail.',
    category: 'Fotografie'
  },
  {
    id: 'kira',
    name: 'Kira Marie Cremer',
    logo: '/images/partners/kira.webp',
    website: 'https://kiramarie.netlify.app/',
    description: 'Autorin, Dozentin & Influencerin. Persönliche Landingpage und Tierschutz-Engagement.',
    category: 'Persönliche Marke'
  }
]; 