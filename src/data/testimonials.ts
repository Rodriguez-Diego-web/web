export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  imageSrc: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Max Mustermann',
    position: 'Inhaber',
    company: 'Mustermann GmbH',
    content: 'Rodriguez-Web hat unsere Erwartungen übertroffen. Die neue Website führte zu einer 40% höheren Conversion-Rate und einer verbesserten Kundenbindung. Das Team war äußerst professionell und das Projekt wurde in nur 6 Tagen fertiggestellt!',
    rating: 5,
    imageSrc: '/images/testimonials/client1.jpg'
  },
  {
    id: '2',
    name: 'Laura Schmidt',
    position: 'Marketing Leiterin',
    company: 'Schmidt & Partner',
    content: 'Die Zusammenarbeit mit Rodriguez-Web war ein voller Erfolg. Vom ersten Konzept bis zur fertigen Website war der Prozess reibungslos und transparent. Wir sind mit dem Ergebnis sehr zufrieden und können das Team uneingeschränkt weiterempfehlen.',
    rating: 5,
    imageSrc: '/images/testimonials/client2.jpg'
  },
  {
    id: '3',
    name: 'Thomas Weber',
    position: 'Geschäftsführer',
    company: 'Weber Consulting',
    content: 'Unsere neue Website von Rodriguez-Web sieht nicht nur fantastisch aus, sondern generiert auch deutlich mehr Anfragen. Das Team hat unsere Vision perfekt umgesetzt und uns während des gesamten Prozesses hervorragend beraten.',
    rating: 5,
    imageSrc: '/images/testimonials/client3.jpg'
  },
  {
    id: '4',
    name: 'Sophie Becker',
    position: 'Inhaberin',
    company: 'Becker Fotografie',
    content: 'Als Fotografin war mir ein visuell ansprechendes Portfolio besonders wichtig. Rodriguez-Web hat meine Vorstellungen perfekt umgesetzt und eine Website geschaffen, die meine Arbeit optimal präsentiert. Der schnelle Service und die persönliche Beratung haben mich begeistert.',
    rating: 5,
    imageSrc: '/images/testimonials/client4.jpg'
  },
  {
    id: '5',
    name: 'Martin Krause',
    position: 'Geschäftsführer',
    company: 'Krause Immobilien',
    content: 'Seit dem Launch unserer neuen Website durch Rodriguez-Web erhalten wir qualifiziertere Anfragen und können Objekte schneller vermitteln. Die intuitive Immobiliensuchfunktion und das moderne Design überzeugen sowohl uns als auch unsere Kunden.',
    rating: 4,
    imageSrc: '/images/testimonials/client5.jpg'
  }
];
