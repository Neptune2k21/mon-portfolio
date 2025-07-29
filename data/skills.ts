export interface Skill {
    name: string;
    icon: string;
    level: number;
    description: string;
}
export type SkillCategory = "all" | "Frontend" | "Backend" | "Design" | "DevOps" | "Logiciels";

export const skillCategories = [
    { id: "all", name: "Tout", icon: "lucide:layers"  },
    { id: "Frontend", name: "Frontend", icon: "lucide:monitor-smartphone" },
    { id: "Backend", name: "Backend", icon: "lucide:server" },
    { id: "Design", name: "Design", icon: "carbon:paint-brush" },
    { id: "DevOps", name: "DevOps", icon:"lucide:terminal"  },
    { id: "Logiciels", name: "Logiciels", icon: "line-md:cog-filled-loop" },
];

export const currentSkills: (Skill & { category: SkillCategory })[] = [
    {
        name: "Next.js",
        icon: "logos:nextjs-icon",
        level: 90,
        description: "Framework React moderne",
        category: "Frontend"
    },
    {
        name: "JavaScript",
        icon: "logos:javascript",
        level: 90,
        description: "Langage de programmation",
        category: "Logiciels"
    },
    {
        name: "TypeScript",
        icon: "logos:typescript-icon",
        level: 85,
        description: "Développement typé",
        category: "Logiciels"
    },
    {
        name: "Tailwind CSS",
        icon: "logos:tailwindcss-icon",
        level: 85,
        description: "Framework CSS",
        category: "Frontend"
    },
    {
        name: "PostgreSQL",
        icon: "logos:postgresql",
        level: 80,
        description: "Système de gestion de base de données relationnelle",
        category: "Backend"
    },
    {
        name: "Express.js",
        icon: "devicon:express-wordmark",
        level: 80,
        description: "Framework Node.js",
        category: "Backend"
    },
    {
        name: "Csharp",
        icon: "logos:c-sharp",
        level: 70,
        description: "Langage de programmation",
        category: "Logiciels"
    },
    {
        name: "Docker",
        icon: "logos:docker-icon",
        level: 75,
        description: "Outil de déploiement et d'exécution des applications",
        category: "DevOps"
    },
    {
        name: "Figma",
        icon: "logos:figma",
        level: 80,
        description: "Outil de Design d'interface",
        category: "Design"
    },
    {
        name: "React Native",
        icon: "logos:react",
        level: 75,
        description: "Développement d'applications mobiles avec React",
        category: "Frontend"
    },
    {
        name: "Expo",
        icon: "logos:expo-icon",
        level: 70,
        description: "Framework et outil pour apps React Native",
        category: "Frontend"
    },

];

export const learningSkills:  (Skill & { category: SkillCategory })[] = [
    {
        name:"Python",
        icon: "logos:python",
        level: 60,
        description: "Langage de programmation",
        category: "Logiciels"
    },
    {
        name: "AWS",
        icon: "logos:aws",
        level: 40,
        description: "Cloud Computing",
        category: "DevOps"
    },
    {
        name: "kubernetes",
        icon: "logos:kubernetes",
        level: 20,
        description: "Orchestration de conteneurs",
        category: "DevOps"
    },
    {
        name: "Golang",
        icon: "logos:go",
        level: 30,
        description: "Langage de programmation",
        category: "Logiciels"
    },
    {
        name: "C++",
        icon: "logos:c-plusplus",
        level: 50,
        description: "Langage de programmation",
        category: "Logiciels"
    },
];

export interface Language {
    name: string;
    flag: string;
    level: string;
}

export const languages: Language[] = [
    {
        name: "Français",
        flag: "emojione:flag-for-france",
        level: "Natif"
    },
    {
        name: "Bambara",
        flag: "emojione:flag-for-mali",
        level: "Natif"
    },
    {
        name: "Anglais",
        flag: "emojione:flag-for-united-kingdom",
        level: "Intermédiaire"
    }
];

export const softSkills = [
    {
        name: "Travail d'équipe",
        icon: "carbon:group",
        description: "Collaboration efficace"
    },
    {
        name: "Communication",
        icon: "carbon:chat",
        description: "Claire et précise"
    },
    {
        name: "Adaptabilité",
        icon: "carbon:growth",
        description: "Apprentissage rapide"
    }
];

export const OtherSkills = [
    {
        name: "Git",
        icon: "logos:git-icon",
        description: "Gestion de version"
    },
    {
        name: "Trello",
        icon: "logos:trello",
        description: "Gestion de projet"
    },
    {
        name: "VSCode",
        icon: "logos:visual-studio-code",
        description: "Éditeur de code"
    },
];
export const methods = [
    {
    name: "Clean Code & Maintenabilité",
    description: "J'attache une importance particulière à la qualité et à la lisibilité du code",
    icon: "carbon:script"
    },
    {
    name: "Méthodologie Agile",
    description: "Expérience en Scrum et adaptation aux besoins évolutifs des projets",
    icon: "lucide:kanban"
    },
    {
    name: "UX Thinking",
    description: "Conception centrée utilisateur et sensibilité au design d'expérience",
    icon: "carbon:user-filled"
    },
    {
    name: "Tests & Qualité",
    description: "Tests unitaires, e2e et approche orientée qualité",
    icon: "carbon:checkbox-checked"
    }
]
