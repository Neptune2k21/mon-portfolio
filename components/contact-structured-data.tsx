"use client"

import { useEffect } from 'react'

export default function ContactStructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact - Cisse Mamadou",
      "description": "Page de contact pour Cisse Mamadou, développeur FullStack freelance",
      "url": "https://cisse-mamadou.me/contact",
      "mainEntity": {
        "@type": "Person",
        "name": "Cisse Mamadou",
        "jobTitle": "Développeur FullStack",
        "email": "mamadoulcisse9236@gmail.com",
        "telephone": "+33667998877",
        "url": "https://cisse-mamadou.me",
        "sameAs": [
          "https://www.linkedin.com/in/mamadou-lamine-ciss%C3%A9/",
          "https://github.com/Neptune2k21"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dijon",
          "addressRegion": "Bourgogne-Franche-Comté",
          "addressCountry": "FR"
        },
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance"
        },
        "knowsAbout": [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Node.js",
          "MongoDB",
          "PostgreSQL"
        ]
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