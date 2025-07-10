import { Metadata } from 'next';

export const metadata: Metadata = {
  // Titre optimisé avec mots-clés
  title: "Compétences Développeur FullStack | React Next.js TypeScript | Cisse Mamadou",
  
  // Description engageante avec mots-clés
  description: "Découvrez les compétences techniques de Cisse Mamadou : React, Next.js, TypeScript, Node.js, PostgreSQL, MongoDB. Expertise en développement fullstack, méthodes agiles et soft skills.",
  
  // Mots-clés spécifiques aux compétences
  keywords: [
    "compétences développeur fullstack",
    "expertise React Next.js",
    "développeur TypeScript France",
    "compétences JavaScript Node.js",
    "savoir-faire développement web",
    "technologies modernes frontend",
    "backend PostgreSQL MongoDB",
    "méthodes agiles Scrum",
    "soft skills développeur",
    "portfolio compétences techniques",
    "Cisse Mamadou compétences",
    "développeur MERN stack expertise",
    "formation développement web",
    "apprentissage nouvelles technologies"
  ],
  
  // URL canonique
  alternates: {
    canonical: "https://cisse-mamadou.me/competences",
  },
  
  // Open Graph optimisé
  openGraph: {
    title: "Compétences - Cisse Mamadou | Développeur FullStack",
    description: "Expertise technique complète : React, Next.js, TypeScript, Node.js et plus. Découvrez mes compétences en développement fullstack.",
    url: "https://cisse-mamadou.me/competences",
    siteName: "Portfolio Cisse Mamadou",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "https://cisse-mamadou.me/images/og/competences.jpg",
        width: 1200,
        height: 630,
        alt: "Compétences techniques de Cisse Mamadou - Développeur FullStack"
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@Mneptune_04",
    creator: "@Mneptune_04",
    title: "Compétences - Cisse Mamadou",
    description: "Expertise technique : React, Next.js, TypeScript, Node.js et développement fullstack",
    images: "https://cisse-mamadou.me/images/og/competences.jpg",
  },
  
  // Directives robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Métadonnées spécifiques aux compétences
  other: {
    // Technologies principales
    'skills:frontend': 'React, Next.js, TypeScript, JavaScript, Tailwind CSS',
    'skills:backend': 'Node.js, Express.js, PostgreSQL, MongoDB',
    'skills:tools': 'Git, VSCode, Trello, Linux',
    'skills:methods': 'Agile, Scrum, Clean Code, UX Thinking',
    'skills:languages': 'Français (Natif), Anglais (Intermédiaire)',
    
    // Niveaux d'expertise
    'expertise:react': '95%',
    'expertise:nextjs': '90%',
    'expertise:typescript': '85%',
    'expertise:nodejs': '80%',
    
    // Catégories
    'category:primary': 'Développeur FullStack',
    'category:specialization': 'Frontend React/Next.js',
    'category:learning': 'DevOps, Cloud Computing',
  }
}