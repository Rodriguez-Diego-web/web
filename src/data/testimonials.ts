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
    name: 'Katharina Meyer',
    position: 'Inhaberin',
    company: 'Nordlicht Café',
    content: 'Die Zusammenarbeit mit Diego war großartig! Er hat unseren Online-Auftritt komplett modernisiert und dabei genau verstanden, wie wir unser Café präsentieren wollten. Die neue Website hat bereits in den ersten Wochen zu mehr Tischreservierungen geführt.',
    rating: 5,
    imageSrc: '/images/testimonials/client1.jpg'
  },
  {
    id: '2',
    name: 'Markus Brandt',
    position: 'Geschäftsführer',
    company: 'Brandt & Söhne Bootsbau',
    content: 'Unsere alte Website war veraltet und nicht mobilfähig. Rodriguez-Web hat uns eine moderne, responsive Website erstellt, die perfekt zu unserem traditionellen Bootsbau-Handwerk passt. Besonders beeindruckt hat uns die lokale SEO-Optimierung für Cuxhaven.',
    rating: 5,
    imageSrc: '/images/testimonials/client2.jpg'
  },
  {
    id: '3',
    name: 'Julia Schröder',
    position: 'Marketing Leiterin',
    company: 'Nordsee-Apartments',
    content: 'Die neue Buchungsplattform, die Diego für uns entwickelt hat, ist ein Gamechanger für unser Vermietungsgeschäft. Benutzerfreundlich, schnell und mit integriertem Zahlungssystem. Die Conversion-Rate ist um 35% gestiegen und die Buchungen laufen nun vollautomatisch.',
    rating: 5,
    imageSrc: '/images/testimonials/client3.jpg'
  },
  {
    id: '4',
    name: 'Thorsten Kruse',
    position: 'Inhaber',
    company: 'Kruse Haustechnik',
    content: 'Als Handwerksbetrieb in Cuxhaven war uns eine professionelle Webpräsenz wichtig. Diego hat uns nicht nur eine tolle Website erstellt, sondern auch die Google-Optimierung perfekt umgesetzt. Dadurch bekommen wir jetzt wesentlich mehr qualifizierte Anfragen aus der Region.',
    rating: 5,
    imageSrc: '/images/testimonials/client4.jpg'
  },
  {
    id: '5',
    name: 'Marie Theissen',
    position: 'Geschäftsführerin',
    company: 'Strandhotel Duhnen',
    content: 'Die Zusammenarbeit mit Rodriguez-Web war von Anfang an unkompliziert und professionell. Trotz unserer speziellen Anforderungen im Hotelbereich hat Diego eine Website geschaffen, die sowohl unsere Gäste als auch uns begeistert. Auch nach dem Launch ist er immer ansprechbar.',
    rating: 5,
    imageSrc: '/images/testimonials/client5.jpg'
  }
];
