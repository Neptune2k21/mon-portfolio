export type ExperienceItem = {
    title: string
    company: string
    period: string
    description: string
    skills: string[]
    logo: string
    isImageLogo: boolean
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
      title: "Stage Développeur FullStack",
      company: "Davi The Humanizers",
      period: "Jan 2025 - Mars 2025",
      description: "Développement web et déploiement d'applications",
      skills: ["Next.js", "TypeScript", "Docker"],
      logo: "/davi_thehumanizers_logo.jpeg",
      isImageLogo: true
    },
    {
      title: "Équipier Polyvalent",
      company: "McDonald's",
      period: "Avril 2024 - Aujourd'hui",
      description: "Développement de compétences transversales",
      skills: ["Travail d'équipe", "Gestion du temps"],
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