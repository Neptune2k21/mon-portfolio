export type ExperienceItem = {
    title: string
    company: string
    period: string
    description: string
    skills: string[]
    logo: string
    isImageLogo: boolean
    location?: string
  }
  
  export type EducationItem = {
    title: string
    institution: string
    period: string
    description: string
    logo: string
    isImageLogo: boolean
  }
  
  export const experiences: ExperienceItem[] = [
    {
      title: "Développeur d'outils d'automatisation",
      company: "White Crown Partners",
      period: "Mars 2026 - Aujourd'hui",
      description: "Au sein d’une banque d’affaires indépendante spécialisée en Fusions-Acquisitions dans la Tech européenne, j’ai conçu et développé des outils internes sur mesure destinés à structurer, automatiser et accélérer les processus de prospection. Ces solutions ont permis de fiabiliser la collecte de données, d’améliorer le ciblage des entreprises et de réduire significativement les tâches manuelles, augmentant ainsi l’efficacité opérationnelle des équipes.",
      skills: [ "Python","Automatisation", "Data Processing","API REST", "Web Scraping", "Git"],
      location: "Paris, France",
      logo: "/WhiteCrown.webp",
      isImageLogo: true
    },
    {
      title: "Développeur FullStack",
      company: "Davi The Humanizers",
      period: "Jan 2025 - Mars 2025",
      description: "Développement et mise à jour d’applications web, gestion d’environnements locaux avec Docker, supervision des déploiements en préproduction et production. Résolution de bugs, gestion de version avec Git et Azure DevOps, et participation à la gestion de projets en méthodologie Agile.",
      skills: ["Next.js", "TypeScript","PHP", "CI/CD","Azure DevOps","Docker"],
      location: "Varennes Vauzelles, France",
      logo: "/davi_thehumanizers_logo.jpeg",
      isImageLogo: true
    },
    {
      title: "Développeur Fullstack",
      company: "Dybys",
      period: "Janvier 2024 – Juin 2024",
      description: "Conception et développement de deux modules clés pour la plateforme Dybys : un système de gestion RGPD permettant aux professionnels de centraliser la conformité des données clients, et un module de gestion de promotions pour la création, le suivi et l’analyse de campagnes marketing.",
      skills: ["Symfony", "PHP", "TypeScript", "React", "PostgreSQL", "Docker", "API REST", "Git"],
      location: "Creteil, France",
      logo: "/dybys.ico",
      isImageLogo: true
    },
    {
      title: "Équipier Polyvalent",
      company: "McDonald's",
      period: "Avril 2024 - Aujourd'hui",
      description: "Expérience en environnement dynamique nécessitant rigueur, gestion du stress et travail en équipe, avec un fort accent sur la qualité de service et l’efficacité opérationnelle.",
      skills: ["Travail d'équipe", "Gestion du temps", "Service client", "Adaptabilité"],
      location: "Nevers, France",
      logo: "/mcdonald-s-5.svg",
      isImageLogo: true
    }

  ]
  
  export const educations: EducationItem[] = [
    {
      title: "BUT Informatique",
      institution: "IUT de Dijon",
      period: "2023 - Aujourd'hui",
      description: "Formation approfondie en développement et conception logicielle",
      logo: "/IUT-DIJON.png",
      isImageLogo: true
    },
    {
      title: "BTS SIO",
      institution: "ESTIAM Paris",
      period: "2021 - 2023",
      description: "Introduction a l'algorithmique, la gestion de projet, la sécurité informatique et la communication professionnelle.",
      logo: "/estiam.png",
      isImageLogo: true
    },
    {
      title: "Certification CCNA1",
      institution: "Cisco",
      period: "2023",
      description: "Fondamentaux des réseaux informatiques",
      logo: "simple-icons:cisco",
      isImageLogo: false
    }
  ]
