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

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'berlin-bakery',
    title: 'Berlin Bakery',
    description: 'Website für eine traditionelle Bäckerei mit Online-Bestellmöglichkeit',
    detailedDescription: 'Entwicklung einer modernen, benutzerfreundlichen Website für eine traditionelle Bäckerei mit der Möglichkeit, Produkte online zu bestellen.',
    challenge: 'Die Herausforderung bestand darin, das traditionelle Handwerk mit modernem E-Commerce zu verbinden und dabei ein authentisches Markenerlebnis zu schaffen.',
    solution: 'Wir haben eine responsive Website mit integriertem Bestellsystem und Bildergalerien entwickelt, die das handwerkliche Können und die Qualität der Produkte hervorhebt.',
    results: 'Die Online-Bestellungen machen mittlerweile 30% des Gesamtumsatzes aus, und die Besucherzahlen im Geschäft sind um 20% gestiegen.',
    imageSrc: '/images/portfolio/bakery-main.jpg',
    images: [
      '/images/portfolio/bakery-1.jpg',
      '/images/portfolio/bakery-2.jpg',
      '/images/portfolio/bakery-3.jpg',
    ],
    tags: ['Website', 'E-Commerce', 'Food'],
    link: 'https://example.com/berlin-bakery',
    category: 'e-commerce',
  },
  {
    id: 'schmidt-rechtsanwalt',
    title: 'Schmidt Rechtsanwälte',
    description: 'Professionelle Website für eine renommierte Anwaltskanzlei',
    detailedDescription: 'Gestaltung und Entwicklung einer seriösen und vertrauenswürdigen Online-Präsenz für eine etablierte Anwaltskanzlei.',
    challenge: 'Die Kanzlei benötigte eine Website, die Professionalität und Expertise ausstrahlt und gleichzeitig potenzielle Mandanten zugänglich und verständlich über Rechtsthemen informiert.',
    solution: 'Wir haben eine elegante, übersichtliche Website entwickelt mit Fokus auf klare Informationsarchitektur und einem benutzerfreundlichen Terminbuchungssystem.',
    results: 'Die Anzahl der Anfragen hat sich verdoppelt, und die durchschnittliche Zeit bis zur Kontaktaufnahme nach dem ersten Besuch hat sich um 40% verkürzt.',
    imageSrc: '/images/portfolio/law-main.jpg',
    images: [
      '/images/portfolio/law-1.jpg',
      '/images/portfolio/law-2.jpg',
      '/images/portfolio/law-3.jpg',
    ],
    tags: ['Website', 'Professional Services', 'Law'],
    link: 'https://example.com/schmidt-rechtsanwalt',
    category: 'website',
  },
  {
    id: 'green-garden',
    title: 'Green Garden',
    description: 'E-Commerce Shop für nachhaltige Gartenprodukte',
    detailedDescription: 'Entwicklung eines umfassenden Online-Shops für umweltfreundliche Gartenprodukte mit Fokus auf Nachhaltigkeit.',
    challenge: 'Der Kunde wollte einen Online-Shop, der nicht nur funktional ist, sondern auch die umweltbewussten Werte des Unternehmens widerspiegelt und dabei eine reibungslose Benutzerführung bietet.',
    solution: 'Wir haben einen modernen E-Commerce-Shop mit natürlichem Design, umfangreicher Produktfilterung und einem Nachhaltigkeits-Blog entwickelt.',
    results: 'Der Shop erreicht eine Konversionsrate von 4,8%, was deutlich über dem Branchendurchschnitt liegt, und eine Warenkorbabbruchrate von nur 15%.',
    imageSrc: '/images/portfolio/garden-main.jpg',
    images: [
      '/images/portfolio/garden-1.jpg',
      '/images/portfolio/garden-2.jpg',
      '/images/portfolio/garden-3.jpg',
    ],
    tags: ['E-Commerce', 'Sustainability', 'Retail'],
    link: 'https://example.com/green-garden',
    category: 'e-commerce',
  },
  {
    id: 'munich-yoga',
    title: 'Munich Yoga Studio',
    description: 'Website mit Kursbuchungssystem für ein modernes Yoga-Studio',
    detailedDescription: 'Gestaltung und Implementierung einer Website mit integriertem Buchungssystem für ein Yoga-Studio in München.',
    challenge: 'Das Studio benötigte eine benutzerfreundliche Plattform zur Kursbuchung und Mitgliederverwaltung, die sowohl auf Mobilgeräten als auch am Desktop optimal funktioniert.',
    solution: 'Wir haben eine zeitgemäße Website mit responsivem Design und einem integrierten Buchungs- und Bezahlsystem entwickelt, inklusive Mitgliederbereich und automatisierten Erinnerungen.',
    results: 'Die Online-Buchungen sind um 70% gestiegen und die administrative Arbeit für das Studiomanagement hat sich um 80% reduziert.',
    imageSrc: '/images/portfolio/yoga-main.jpg',
    images: [
      '/images/portfolio/yoga-1.jpg',
      '/images/portfolio/yoga-2.jpg',
      '/images/portfolio/yoga-3.jpg',
    ],
    tags: ['Website', 'Booking System', 'Health & Fitness'],
    link: 'https://example.com/munich-yoga',
    category: 'website',
  },
  {
    id: 'eco-cosmetics',
    title: 'Eco Cosmetics',
    description: 'Elegante Landing Page für eine neue Naturkosmetik-Linie',
    detailedDescription: 'Entwicklung einer überzeugenden Landing Page für den Launch einer neuen Naturkosmetik-Produktlinie.',
    challenge: 'Die Marke benötigte eine ansprechende Landing Page, die das Alleinstellungsmerkmal der neuen Produktlinie kommuniziert und Besucher zum Kauf motiviert.',
    solution: 'Wir haben eine visuell beeindruckende Landing Page mit klaren Handlungsaufforderungen, Produktvisualisierungen und überzeugenden Testimonials gestaltet.',
    results: 'Die Conversion Rate von Besuchern zu E-Mail-Anmeldungen liegt bei 18%, und 30% der Besucher klicken auf den "Jetzt kaufen" Button.',
    imageSrc: '/images/portfolio/cosmetics-main.jpg',
    images: [
      '/images/portfolio/cosmetics-1.jpg',
      '/images/portfolio/cosmetics-2.jpg',
    ],
    tags: ['Landing Page', 'Beauty', 'Product Launch'],
    link: 'https://example.com/eco-cosmetics',
    category: 'landing-page',
  },
  {
    id: 'tech-blog',
    title: 'Future Tech Blog',
    description: 'Moderner Tech-Blog mit personalisierten Inhaltsempfehlungen',
    detailedDescription: 'Gestaltung und Entwicklung eines zeitgemäßen Tech-Blogs mit Fokus auf Leserengagement und Content-Discovery.',
    challenge: 'Der Kunde wünschte sich einen technisch fortschrittlichen Blog, der sich von der Masse abhebt und Leser länger auf der Seite hält.',
    solution: 'Wir haben einen Blog mit modernem Design, personalisierten Inhaltsempfehlungen, Kategorien-Navigation und eingebetteten Interaktionsmöglichkeiten entwickelt.',
    results: 'Die durchschnittliche Verweildauer auf der Seite hat sich auf über 4 Minuten erhöht, und die Absprungrate konnte um 25% reduziert werden.',
    imageSrc: '/images/portfolio/blog-main.jpg',
    images: [
      '/images/portfolio/blog-1.jpg',
      '/images/portfolio/blog-2.jpg',
      '/images/portfolio/blog-3.jpg',
    ],
    tags: ['Blog', 'Content', 'Technology'],
    link: 'https://example.com/future-tech',
    category: 'blog',
  }
];
