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
    id: 'saskia-photographie',
    title: 'Saskia Photographie',
    description: 'Website für eine traditionelle Fotografin mit Online-Bestellmöglichkeit',
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
    link: 'https://saskia-photographie.netlify.app/',
    category: 'e-commerce',
  },
  {
    id: 'kira-marie',
    title: 'Kira Marie',
    description: 'Professionelle Website für eine renommierte Autoin und Dozentinq',
    detailedDescription: 'Gestaltung und Entwicklung einer seriösen und vertrauenswürdigen Online-Präsenz für eine etablierte Autoin und Dozentinq.',
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
    link: 'https://kiramarie.netlify.app/',
    category: 'website',
  },
  {
    id: 'famfordogs',
    title: 'Famfordogs',
    description: 'Soziales Projekt des 6. Semesters',
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
    link: 'https://famfordogs.com/',
    category: 'e-commerce',
  },
  {
    id: 'frebo-media',
    title: 'Frebo Media',
    description: 'Website mit Kursbuchungssystem für ein modernes Yoga-Studio',
    detailedDescription: 'Gestaltung und Implementierung einer Website mit integriertem Buchungssystem für ein Yoga-Studio in München.',
    challenge: 'Das Studio benötigte eine benutzerfreundliche Plattform zur Kursbuchung und Mitgliederverwaltung, die sowohl auf Mobilgeräten als auch am Desktop optimal funktioniert.',
    solution: 'Wir haben eine zeitgemäße Website mit responsivem Design und einem integrierten Buchungs- und Bezahlsystem entwickelt, inklusive Mitgliederbereich und automatisierten Erinnerungen.',
    results: 'Die Online-Buchungen sind um 70% gestiegen und die administrative Arbeit für das Studiomanagement hat sich um 80% reduziert.',
    imageSrc: '/images/portfolio/yoga-main.jpg',
    images: [
      '/images/portfolio/yoga-1.jpg',
      '/images/portfolio/yoga-2.jpg',
    ],
    tags: ['Website', 'Booking System', 'Health & Fitness'],
    link: 'https://frebo-media.netlify.app/',
    category: 'website',
  },
  {
    id: 'fleyver',
    title: 'Fleyver',
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
    link: 'https://fleyver.netlify.app/',
    category: 'landing-page',
  },
  {
    id: 'interaktive-systeme',
    title: 'Interaktive Systeme',
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
    link: 'https://interaktivesysteme.fun/',
    category: 'blog',
  },
  {
    id: 'cityshare',
    title: 'CityShare',
    description: 'Innovative Plattform für urbane Gemeinschaftsbildung',
    detailedDescription: 'Entwicklung einer digitalen Plattform, die Menschen in städtischen Umgebungen verbindet und den Austausch von Ressourcen und Dienstleistungen fördert.',
    challenge: 'Die Herausforderung bestand darin, eine intuitive und sichere Plattform zu schaffen, die Menschen in der Stadt zusammenbringt und Nachbarschaftshilfe digital unterstützt.',
    solution: 'Wir haben eine benutzerfreundliche Web-App mit interaktiven Karten, Chat-Funktionen und einem Bewertungssystem entwickelt, die den lokalen Austausch erleichtert.',
    results: 'Die Plattform verzeichnet inzwischen über 5.000 aktive Nutzer und hat zu mehr als 2.000 erfolgreichen Austauschen innerhalb der Community beigetragen.',
    imageSrc: '/images/portfolio/cityshare-main.jpg',
    images: [
      '/images/portfolio/cityshare-1.jpg',
      '/images/portfolio/cityshare-2.jpg',
      '/images/portfolio/cityshare-3.jpg',
    ],
    tags: ['Web-App', 'Community', 'Sharing Economy'],
    link: 'https://cityshare.netlify.app/',
    category: 'website',
  },
  {
    id: 'safesports',
    title: 'SafeSports',
    description: 'Plattform für sichere Sportveranstaltungen und Trainingsplanung',
    detailedDescription: 'Entwicklung einer umfassenden Plattform zur Organisation sicherer Sportveranstaltungen mit integriertem Trainingsmanagement.',
    challenge: 'Der Kunde benötigte eine Lösung, um Sportveranstaltungen sicher zu planen, Teilnehmer zu verwalten und individuelle Trainingspläne zu erstellen.',
    solution: 'Wir haben eine responsive Web-Anwendung mit Veranstaltungskalender, Teilnehmerverwaltung, Trainingsplänen und Sicherheitsfeature-Integration entwickelt.',
    results: 'Die Plattform wird von über 50 Sportvereinen genutzt und hat dazu beigetragen, die Sicherheit bei Sportveranstaltungen deutlich zu erhöhen.',
    imageSrc: '/images/portfolio/safesports-main.jpg',
    images: [
      '/images/portfolio/safesports-1.jpg',
      '/images/portfolio/safesports-2.jpg',
    ],
    tags: ['Web-App', 'Sports', 'Event Management'],
    link: 'https://safesports.netlify.app/',
    category: 'website',
  }
];
