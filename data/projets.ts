export type Projet = {
  id: string;
  title: string;
  description: string;
  longDesc: string;
  image: string;
  tech: string[];
  github: string | null;
  features: string[];
  type?: "web" | "mobile" | "desktop" | "jeu" | "IA" | "3D";
  role?: string;
  site?: string;
};

export const projets: Projet[] = [
  {
    id: "moveon",
    title: "MoveOn",
    description:
      "Une plateforme de covoiturage innovante optimisée pour les trajets quotidiens, offrant la gratuité sur les courtes distances et une rémunération garantie pour les conducteurs.",
    longDesc:
      "Réalisé en équipe lors de la 3ème année de BUT Informatique (SAE 5.01), MoveOn répond aux enjeux de mobilité urbaine et périurbaine. Le projet se distingue par un modèle hybride : les trajets de moins de 30 km sont gratuits pour les passagers afin d'encourager l'usage régulier, tandis que les conducteurs sont systématiquement rémunérés pour assurer l'attractivité du service. L'application intègre également un système de détours optimisés inspiré des services de VTC pour offrir une flexibilité maximale lors des prises en charge.",
    image: "/moveon.png",
    tech: ["Nest.js","Next.js", "TypeScript", "Docker", "CI/CD", "Digital Ocean","PostgreSQL"],
    github: "https://github.com/neptune2k21/moveon-backend",
    features: [
      "Système tarifaire progressif et hybride",
      "Gestion de détours optimisés (VTC style)",
      "Architecture basée sur le Domain-Driven Design (DDD) et CQRS",
      "Déploiement conteneurisé avec Docker",
    ],
    type: "web",
    role: "Leader technique et développeur backend",
    site: "https://moveons.app"
  },
  {
    id: "coordina",
    title: "Coordina",
    description:
      "Une plateforme SaaS de collaboration et de gestion de projet, pensée autour des workspaces, des rôles utilisateurs et de tableaux Kanban par projet.",
    longDesc:
      "Coordina est une application fullstack en cours de développement, actuellement en phase pre-MVP. Le projet pose les bases techniques d’une plateforme collaborative moderne : authentification, workspaces multi-utilisateurs, invitations à usage unique, gestion de projets et tableaux Kanban personnalisables. Le backend repose sur une API ASP.NET Core modulaire avec PostgreSQL et Entity Framework Core, tandis que le frontend React propose un shell SaaS authentifié avec onboarding, gestion des workspaces, projets, membres et boards. Le projet met aussi l’accent sur la maintenabilité avec Docker, migrations EF Core, documentation OpenAPI/Scalar, tests d’intégration, tests frontend, Playwright et une quality gate CI.",
    image: "/coordina.png",
    tech: [
      ".NET 9",
      "C#",
      "PostgreSQL",
      "Entity Framework Core",
      "React",
      "Tailwind CSS",
      "Docker",
      "GitHub Actions"
    ],
    github: "https://github.com/Neptune2k21/Coordina",
    features: [
      "Workspaces multi-utilisateurs",
      "Invitations à usage unique",
      "Gestion de projets et tableaux Kanban personnalisables",
      "API RESTful avec documentation OpenAPI/Scalar",
      "Tests d’intégration backend et tests frontend avec Playwright",
    ],
    type: "web",
    role: "Créateur et développeur fullstack"
  },
  {
    id: "featured",
    title: "Quizzine",
    description:
      "Une plateforme moderne de quiz interactifs construite avec les technologies web JavaScript. Les utilisateurs peuvent créer, partager et participer à des quiz sur divers sujets.",
    longDesc:
      "Développé en équipe dans le cadre d'un projet universitaire, Quizzine offre une expérience utilisateur optimisée grâce à une interface intuitive et des fonctionnalités avancées. Il permet notamment la création de quiz en temps réel, l'affichage détaillé des résultats et un système de connexion qui facilite la gestion et la modification de nouveaux projets.",
    image: "/quizzine.png",
    tech: ["Node Js", "MongoDb", "Boostrap CSS", "Docker"],
    github: "https://github.com/BUSCH-Leo/SAE-S3-2024-2025-site-de-quizz",
    features: [
      "Auth avec Passeport Js",
      "Base de données relationnelle",
      "API REST",
      "Architecture MVC",
    ],
    type: "web",
    role: "Développeur FullStack",
  },
  {
    id: "cookie",
    title: "Cookie Clicker",
    description:
      "Application WPF interactive inspirée du célèbre jeu Cookie Clicker, avec des fonctionnalités similaires au vrai jeu.",
    longDesc:
      "Le projet Cookie Clicker est une application WPF interactive où les joueurs cliquent sur un cookie géant pour produire des cookies virtuels. Le but est de produire le plus de cookies possible en achetant des améliorations et des automates qui augmentent le nombre de cookies générés par seconde.",
    image: "/cookieClicker.png",
    tech: ["C#", "WPF", "XAML", "SQL Server"],
    github: "https://github.com/4keezix/SAE_DEV_CookieClicker",
    features: [
      "Interface personnalisable",
      "Système de Back office",
      "Achievements",
    ],
    type: "desktop",
    role: "Développeur backend",
  },
  {
    id: "dungeon",
    title: "Dungeon Forge",
    description:
      "Générateur procédural de donjons utilisant des algorithmes avancés pour créer des niveaux uniques.",
    longDesc:
      "Un projet technique qui combine des algorithmes de génération procédurale pour créer des donjons jouables et équilibrés. L’objectif de ce projet était de créer un générateur aléatoire de donjons, où l’on peut envoyer des groupes d’aventuriers pour affronter des monstres et récolter des trésors. Nous avons plus ou moins réussi le projet car nous avons créé le générateur de labyrinthe parfait et imparfait.",
    image: "/donjon.png",
    tech: ["C#", "Algorithmes", "Notion de Graph"],
    github: "https://github.com/Neptune2k21/BUT1-S2.02",
    features: [
      "Génération procédurale",
      "Djikistra",
      "Level Design dynamique",
    ],
    type: "jeu",
    role: "Développeur backend",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "Le site que vous êtes en train de visiter, construit avec Next.js et TypeScript pour présenter mes projets et compétences en développement web.",
    longDesc:
      "Ce portfolio a été créé pour présenter mes réalisations et mes compétences en développement web. Il inclut une section dédiée à mes projets, ainsi qu'une description détaillée de chaque projet.",
    image: "/miniature.png",
    tech: ["TypeScript", "React", "Tailwind CSS"],
    github: "https://github.com/Neptune2k21/mon-portfolio",
    features: [
      "Design responsive",
      "Animations CSS",
      "Intégration API",
    ],
    type: "web",
    role: "Développeur frontend"
  }
  
];
