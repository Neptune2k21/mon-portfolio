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
      "Réalisé en équipe lors de la 3ème année de BUT Informatique (SAE 5.01), MoveOn répond aux enjeux de mobilité urbaine et périurbaine[cite: 3]. Le projet se distingue par un modèle hybride : les trajets de moins de 30 km sont gratuits pour les passagers afin d'encourager l'usage régulier, tandis que les conducteurs sont systématiquement rémunérés pour assurer l'attractivité du service. L'application intègre également un système de détours optimisés inspiré des services de VTC pour offrir une flexibilité maximale lors des prises en charge[cite: 11, 12].",
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
    tech: ["C#", "WPF", "XAML", "SQLite"],
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
  
];
