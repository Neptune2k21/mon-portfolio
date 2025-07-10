const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Cisse Mamadou",
  "jobTitle": "Développeur FullStack Freelance",
  "description": "Développeur web freelance spécialisé en React, Next.js et TypeScript",
  "url": "https://cisse-mamadou.me",
  "sameAs": [
    "https://github.com/Neptune2k21",
    "https://www.linkedin.com/in/mamadou-lamine-cissé/"
  ],
  "knowsAbout": ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  "availableLanguage": "French",
  "workLocation": "France",
  "seeks": {
    "@type": "JobPosting",
    "jobTitle": "Alternance Développeur Web"
  }
}

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
