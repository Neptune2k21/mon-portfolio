import { Metadata } from 'next';

export const metadata: Metadata = {
  // Titre optimisé avec mots-clés
  title: "Contact Développeur FullStack | Missions Freelance & Alternance | Cisse Mamadou",
  
  // Description engageante avec mots-clés
  description: "Contactez Cisse Mamadou, développeur FullStack freelance spécialisé en React, Next.js et TypeScript. Disponible pour missions freelance et recherche d'alternance BUT Informatique.",
  
  // Mots-clés spécifiques à la page contact
  keywords: [
    "contact développeur freelance",
    "mission développeur web",
    "alternance développeur fullstack",
    "freelance React Next.js",
    "développeur disponible France",
    "contact développeur TypeScript",
    "mission courte développeur",
    "alternance BUT informatique",
    "développeur web Dijon",
    "freelance JavaScript France",
    "contact Cisse Mamadou",
    "développeur MERN stack disponible",
    "mission développeur Node.js"
  ],
  
  // URL canonique
  alternates: {
    canonical: "https://cisse-mamadou.me/contact",
  },
  
  // Open Graph optimisé
  openGraph: {
    title: "Contact - Cisse Mamadou | Développeur FullStack Freelance",
    description: "Contactez-moi pour vos projets web ou opportunités d'alternance. Spécialisé en React, Next.js, TypeScript et développement fullstack.",
    url: "https://cisse-mamadou.me/contact",
    siteName: "Portfolio Cisse Mamadou",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "https://cisse-mamadou.me/images/og/contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contactez Cisse Mamadou - Développeur FullStack Freelance"
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@Mneptune_04",
    creator: "@Mneptune_04",
    title: "Contact - Cisse Mamadou",
    description: "Échangeons sur vos projets web ou opportunités d'alternance",
    images: "https://cisse-mamadou.me/images/og/contact.jpg",
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
  
  // Informations de contact structurées
  other: {
    'contact:phone_number': '+33667998877',
    'contact:email': 'mamadoulcisse9236@gmail.com',
    'contact:country_name': 'France',
    'contact:region': 'Bourgogne-Franche-Comté',
    'contact:locality': 'Dijon',
    'business:contact_data:street_address': 'Dijon, France',
    'business:contact_data:locality': 'Dijon',
    'business:contact_data:region': 'Bourgogne-Franche-Comté',
    'business:contact_data:postal_code': '21000',
    'business:contact_data:country_name': 'France',
  }
}