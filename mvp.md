# Projektstruktur für das MVP

website-mvp/
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero-bg.jpg
│   │   ├── portfolio/
│   │   │   ├── project1.jpg
│   │   │   ├── project2.jpg
│   │   │   └── project3.jpg
│   │   └── testimonials/
│   │       ├── client1.jpg
│   │       ├── client2.jpg
│   │       └── client3.jpg
│   └── favicon.ico
└── src/
    ├── app/
    │   ├── page.tsx            // Landing page
    │   ├── portfolio/
    │   │   └── page.tsx        // Portfolio page
    │   ├── services/
    │   │   └── page.tsx        // Services & pricing page
    │   ├── about/
    │   │   └── page.tsx        // About page
    │   ├── contact/
    │   │   └── page.tsx        // Contact page
    │   ├── layout.tsx          // Root layout
    │   └── globals.css         // Global styles
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx      // Navigation header
    │   │   ├── Footer.tsx      // Footer component
    │   │   └── Navigation.tsx  // Navigation menu
    │   ├── ui/
    │   │   ├── Button.tsx      // Reusable button component
    │   │   ├── Card.tsx        // Card component for portfolio etc.
    │   │   └── ContactForm.tsx // Contact form component
    │   ├── sections/
    │   │   ├── Hero.tsx        // Hero section component
    │   │   ├── Portfolio.tsx   // Portfolio section
    │   │   ├── Services.tsx    // Services section
    │   │   ├── About.tsx       // About section
    │   │   └── Testimonials.tsx // Testimonials section
    │   └── shared/
    │       ├── Meta.tsx        // Meta tags component
    │       └── Analytics.tsx   // Analytics component
    ├── data/
    │   ├── portfolio.ts        // Portfolio data
    │   ├── services.ts         // Services data
    │   └── testimonials.ts     // Testimonials data
    ├── lib/
    │   └── analytics.ts        // Analytics utility functions
    ├── hooks/
    │   └── useForm.ts          // Custom hook for form handling
    └── types/
        └── index.ts            // TypeScript type definitions
        