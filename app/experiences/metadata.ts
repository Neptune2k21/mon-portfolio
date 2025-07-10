import { Metadata } from 'next';

export const metadata: Metadata = {
  // Titre optimisé avec mots-clés
  title: "Expériences & Projets | Développeur FullStack React Next.js | Cisse Mamadou",
  
  // Description engageante avec mots-clés
  description: "Découvrez mon parcours professionnel, mes expériences en développement web avec React, Next.js, TypeScript et mes projets fullstack. Portfolio de Cisse Mamadou, développeur en alternance.",
  
  // Mots-clés spécifiques à la page
  keywords: [
    "expériences développeur web",
    "projets React Next.js",
    "portfolio développeur fullstack",
    "formation informatique BUT",
    "alternance développeur",
    "Cisse Mamadou projets"
  ],
  
  // URL canonique
  alternates: {
    canonical: "https://cisse-mamadou.me/experiences",
  },
  
  // Open Graph optimisé
  openGraph: {
    title: "Expériences & Projets - Cisse Mamadou | Développeur FullStack",
    description: "Parcours professionnel et projets de développement web avec React, Next.js et TypeScript",
    url: "https://cisse-mamadou.me/experiences",
    siteName: "Portfolio Cisse Mamadou",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "https://cisse-mamadou.me/images/og/experiences.jpg",
        width: 1200,
        height: 630,
        alt: "Expériences et projets de Cisse Mamadou - Développeur FullStack"
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@Mneptune_04",
    creator: "@Mneptune_04",
    title: "Expériences & Projets - Cisse Mamadou",
    description: "Découvrez mon parcours et mes projets de développement web",
    images: "https://cisse-mamadou.me/images/og/experiences.jpg",
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
}