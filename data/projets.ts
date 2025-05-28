export type Projet = {
    id: string;
    title: string;
    description: string;
    longDesc: string;
    image: string;
    tech: string[];
    github: string;
    features: string[];
    type?: "web" | "mobile" | "desktop" | "jeu" | "IA" | "3D";
    role?: string;
  };
  
  export const projets: Projet[] = [
    {
      id: "featured",
      title: "Quizzine",
      description: "Une plateforme moderne de quiz interactifs construite avec les technologies web JavaScript. Les utilisateurs peuvent créer, partager et participer à des quiz sur divers sujets.",
      longDesc: "Développé en équipe dans le cadre d'un projet universitaire, Quizzine offre une expérience utilisateur optimisée grâce à une interface intuitive et des fonctionnalités avancées. Il permet notamment la création de quiz en temps réel, l'affichage détaillé des résultats et un système de connexion qui facilite la gestion et la modification de nouveaux projets.",
      image: "/quizzine.png",
      tech: ["Node Js", "MongoDb", "Boostrap CSS", "Docker"],
      github: "https://github.com/BUSCH-Leo/SAE-S3-2024-2025-site-de-quizz",
      features: ["Auth avec Passeport Js", "Base de données relationnelle", "API REST", "Architecture MVC"],
      type: "web",
      role: "Développeur FullStack",
    },
    {
      id: "cookie",
      title: "Cookie Clicker",
      description: "Application WPF interactive inspirée du célèbre jeu Cookie Clicker, avec des fonctionnalités similaire au vrai jeu.",
      longDesc: "Le projet Cookie Clicker est une application WPF interactive où les joueurs cliquent sur un cookie géant pour produire des cookies virtuels. Le but est de produire le plus de cookies possible en achetant des améliorations et des automates qui augmentent le nombre de cookies générés par seconde.",
      image: "/cookieClicker.png",
      tech: ["C#", "WPF", "XAML", "SQLite"],
      github: "https://github.com/4keezix/SAE_DEV_CookieClicker",
      features: ["Interface personnalisable", "Système de Back office", "Achievements"],
      type: "desktop",
      role: "Développeur backend",
    },
    {
      id: "dungeon",
      title: "Dungeon Forge",
      description: "Générateur procédural de donjons utilisant des algorithmes avancés pour créer des niveaux uniques.",
      longDesc: "Un projet technique qui combine des algorithmes de génération procédurale pour créer des donjons jouables et équilibrés.L’objectif de ce projet était de créer un générateur aléatoire de donjons, où l’on peut envoyer des groupes d’aventuriers pour affronter des monstres et récolter des trésors. Nous avons plus ou moins réussi le projet car nous avons créé le générateur de labyrinthe parfait et imparfait.",
      image: "/donjon.png",
      tech: ["C#", "Algorithmes", "Notion de Graph"],
      github: "https://github.com/Neptune2k21/BUT1-S2.02",
      features: ["Génération procédurale", "Djikistra", "Level Design dynamique"],
      type: "jeu",
      role: "Développeur backend",
    }
  ];