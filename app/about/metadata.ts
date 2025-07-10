import { Metadata } from 'next';

export const metadata: Metadata = {
  // Titre optimisé avec mots-clés
  title: "À Propos | Développeur FullStack Créatif & Méthodique | Cisse Mamadou",
  
  // Description engageante avec mots-clés
  description: "Découvrez le parcours, la vision et les valeurs de Cisse Mamadou, développeur FullStack passionné par l'art de créer des expériences numériques exceptionnelles. UI/UX, React, Next.js.",
  
  // Mots-clés spécifiques à la page à propos
  keywords: [
    "à propos développeur web",
    "parcours développeur fullstack",
    "vision développement web",
    "valeurs développeur",
    "créatif méthodique passionné",
    "philosophie développement",
    "approche développeur",
    "Cisse Mamadou portrait",
    "développeur UI/UX France",
    "expérience utilisateur",
    "design technologie",
    "développeur humaniste",
    "innovation accessibilité",
    "minimalisme fonctionnel"
  ],
  
  // URL canonique
  alternates: {
    canonical: "https://cisse-mamadou.me/about",
  },
  
  // Open Graph optimisé
  openGraph: {
    title: "À Propos - Cisse Mamadou | Développeur FullStack Créatif",
    description: "Découvrez mon parcours, ma vision et mes valeurs. Développeur passionné par l'art de créer des expériences numériques exceptionnelles.",
    url: "https://cisse-mamadou.me/about",
    siteName: "Portfolio Cisse Mamadou",
    type: "profile",
    locale: "fr_FR",
    images: [
      {
        url: "https://cisse-mamadou.me/images/og/about.jpg",
        width: 1200,
        height: 630,
        alt: "Portrait de Cisse Mamadou - Développeur FullStack Créatif"
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@Mneptune_04",
    creator: "@Mneptune_04",
    title: "À Propos - Cisse Mamadou",
    description: "Développeur passionné par l'art de créer des expériences numériques exceptionnelles",
    images: "https://cisse-mamadou.me/images/og/about.jpg",
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
  
  // Métadonnées spécifiques au profil personnel
  other: {
    // Identité professionnelle
    'profile:first_name': 'Mamadou',
    'profile:last_name': 'Cissé', 
    'profile:username': 'Cisse Mamadou',
    'profile:gender': 'male',
    
    // Philosophie et approche
    'philosophy:creativity': 'Créatif dans l\'approche, méthodique dans l\'exécution',
    'philosophy:vision': 'Technologie au service de l\'humain',
    'philosophy:method': 'Comprendre, Concevoir, Développer, Affiner',
    
    // Valeurs principales
    'values:excellence': 'Excellence dans chaque aspect du travail',
    'values:ethics': 'Solutions responsables et accessibles',
    'values:innovation': 'Curiosité constante et nouvelles approches',
    'values:collaboration': 'Intelligence collective et transparence',
    
    // Spécialisations
    'specialization:primary': 'UI/UX et développement fullstack',
    'specialization:focus': 'Expériences numériques exceptionnelles',
    'specialization:stack': 'Écosystème JavaScript moderne',
    
    // Localisation
    'geo:region': 'Bourgogne-Franche-Comté',
    'geo:country': 'France',
  }
}