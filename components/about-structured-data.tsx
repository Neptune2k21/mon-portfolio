"use client"

import { useEffect } from 'react'

export default function AboutStructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "À Propos - Cisse Mamadou",
      "description": "Page À propos de Cisse Mamadou, développeur FullStack créatif et méthodique",
      "url": "https://cisse-mamadou.me/about",
      "mainEntity": {
        "@type": "Person",
        "name": "Cisse Mamadou",
        "alternateName": "Mamadou Lamine Cissé",
        "jobTitle": "Développeur FullStack",
        "description": "Développeur passionné par l'art de créer des expériences numériques exceptionnelles",
        "url": "https://cisse-mamadou.me",
        "image": "https://cisse-mamadou.me/images/portrait.jpg",
        "sameAs": [
          "https://www.linkedin.com/in/mamadou-lamine-ciss%C3%A9/",
          "https://github.com/Neptune2k21",
          "https://twitter.com/Mneptune_04"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dijon",
          "addressRegion": "Bourgogne-Franche-Comté",
          "addressCountry": "FR"
        },
        "email": "mamadoulcisse9236@gmail.com",
        "telephone": "+33667998877",
        "knowsAbout": [
          {
            "@type": "Thing",
            "name": "Développement Frontend",
            "description": "React, Next.js, TypeScript, UI/UX"
          },
          {
            "@type": "Thing",
            "name": "Développement Backend", 
            "description": "Node.js, Express.js, API REST"
          },
          {
            "@type": "Thing",
            "name": "Bases de données",
            "description": "PostgreSQL, MongoDB"
          }
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Développeur FullStack",
          "description": "Création d'expériences numériques exceptionnelles",
          "skills": [
            "JavaScript",
            "TypeScript", 
            "React",
            "Next.js",
            "Node.js",
            "UI/UX Design"
          ]
        },
        "memberOf": {
          "@type": "EducationalOrganization",
          "name": "IUT Dijon-Auxerre",
          "description": "BUT Informatique"
        },
        "seeks": {
          "@type": "JobPosting",
          "title": "Alternance Développeur FullStack",
          "description": "Recherche d'alternance en développement web",
          "employmentType": "INTERN"
        }
      },
      "about": [
        {
          "@type": "Thing",
          "name": "Vision",
          "description": "La technologie doit être au service de l'humain"
        },
        {
          "@type": "Thing", 
          "name": "Philosophie",
          "description": "Le vrai minimalisme n'est pas l'absence, mais la présence de l'essentiel"
        },
        {
          "@type": "Thing",
          "name": "Méthode",
          "description": "Comprendre, Concevoir, Développer, Affiner"
        }
      ]
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