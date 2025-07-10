"use client"

import { useEffect } from 'react'

export default function CompetencesStructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "name": "Compétences - Cisse Mamadou",
      "description": "Page des compétences techniques et soft skills de Cisse Mamadou",
      "url": "https://cisse-mamadou.me/competences",
      "mainEntity": {
        "@type": "Person",
        "name": "Cisse Mamadou",
        "jobTitle": "Développeur FullStack",
        "knowsAbout": [
          {
            "@type": "Thing",
            "name": "React",
            "description": "Bibliothèque JavaScript pour interfaces utilisateur"
          },
          {
            "@type": "Thing", 
            "name": "Next.js",
            "description": "Framework React pour applications web"
          },
          {
            "@type": "Thing",
            "name": "TypeScript", 
            "description": "Langage de programmation typé"
          },
          {
            "@type": "Thing",
            "name": "Node.js",
            "description": "Environnement d'exécution JavaScript côté serveur"
          },
          {
            "@type": "Thing",
            "name": "PostgreSQL",
            "description": "Système de gestion de base de données relationnelle"
          },
          {
            "@type": "Thing",
            "name": "MongoDB",
            "description": "Base de données NoSQL orientée documents"
          }
        ],
        "hasSkill": [
          "Développement Frontend",
          "Développement Backend", 
          "Architecture Web",
          "Méthodes Agiles",
          "Clean Code",
          "UX/UI Design"
        ],
        "url": "https://cisse-mamadou.me",
        "sameAs": [
          "https://www.linkedin.com/in/mamadou-lamine-ciss%C3%A9/",
          "https://github.com/Neptune2k21"
        ]
      },
      "about": {
        "@type": "Thing",
        "name": "Compétences en Développement Web",
        "description": "Expertise technique complète en développement fullstack moderne"
      }
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}