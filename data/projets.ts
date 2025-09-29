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
  {
    id: "dybys",
    title: "Dybys",
    description:
      "Application mobile de réservation avec un réseau social intégré pour connecter clients et créateurs.",
    longDesc:
      "Dybys est une application mobile de réservation inspirée de Planity, mais enrichie d'une dimension sociale. Les utilisateurs peuvent non seulement réserver des services ou trajets interurbains, mais aussi interagir avec les créateurs et les entreprises via un fil d'actualité dédié.\n\nJ'ai participé au développement de Dybys en tant que développeur backend et data engineer. Mon rôle principal a été de mettre en place la conformité RGPD pour assurer la protection et la gestion sécurisée des données utilisateurs. J'ai également travaillé sur la récupération, la structuration et l'intégration d'un volume important de données afin de permettre à la plateforme de démarrer avec du contenu dès son lancement.\n\nSur le plan technique, j'ai conçu et implémenté une architecture asynchrone avec RabbitMQ pour gérer les traitements en arrière-plan (file d'attente, notifications, intégrations externes). Le backend a été développé avec Symfony, et j'ai utilisé Python pour la collecte et la transformation des données.",
    image: "/dybys.jpeg",
    tech: ["Symfony", "RabbitMQ", "Python", "PostgreSQL"],
    github: null,
    features: [
      "Système de réservation avancé",
      "Fil d'actualité et partage de contenu entre clients et créateurs",
      "Conformité RGPD et gestion sécurisée des données",
      "Traitements asynchrones via RabbitMQ",
      "Backend robuste et scalable développé avec Symfony",
    ],
    type: "mobile",
    role: "Développeur Backend & Data",
    site: "https://dybys.com/",
  },
];
