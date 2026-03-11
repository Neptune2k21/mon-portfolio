export const techIconMap: Record<string, string> = {
  // Frontend
  "Next.js": "logos:nextjs-icon",
  "React": "logos:react",
  "React Native": "logos:react",
  "Tailwind CSS": "logos:tailwindcss-icon",
  "Boostrap CSS": "logos:bootstrap",
  "Bootstrap CSS": "logos:bootstrap",
  
  // Backend
  "Nest.js": "logos:nestjs",
  "NestJS": "logos:nestjs",
  "Node Js": "logos:nodejs-icon",
  "Node.js": "logos:nodejs-icon",
  "Express.js": "devicon:express-wordmark",
  "Symfony": "logos:symfony",
  "PHP": "logos:php",
  "PhP": "logos:php",
  
  // Langages
  "TypeScript": "logos:typescript-icon",
  "JavaScript": "logos:javascript",
  "C#": "logos:csharp",
  "Python": "logos:python",
  
  // Bases de données
  "PostgreSQL": "logos:postgresql",
  "MongoDb": "logos:mongodb-icon",
  "MongoDB": "logos:mongodb-icon",
  "SQLite": "simple-icons:sqlite",
  
  // DevOps & Cloud
  "Docker": "logos:docker-icon",
  "CI/CD": "lucide:git-merge",
  "Digital Ocean": "logos:digitalocean-icon",
  "DigitalOcean": "logos:digitalocean-icon",
  "AWS": "logos:aws",
  "Kubernetes": "logos:kubernetes",
  
  // Outils & Autres
  "Git": "logos:git-icon",
  "API REST": "lucide:api",
  "Figma": "logos:figma",
  "WPF": "mdi:microsoft-windows",
  "XAML": "mdi:microsoft-windows",
  
  // Concepts & Méthodologies
  "Algorithmes": "lucide:binary",
  "Notion de Graph": "lucide:network",
  "DDD": "lucide:box",
  "CQRS": "lucide:split",
};

// Fonction helper pour obtenir l'icône d'une technologie
export const getTechIcon = (techName: string): string => {
  return techIconMap[techName] || "lucide:code";
};

// Badge de type de projet
export const projectTypeBadge: Record<string, { icon: string; color: string; label: string }> = {
  web: { icon: "lucide:globe", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300", label: "Web" },
  mobile: { icon: "lucide:smartphone", color: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300", label: "Mobile" },
  desktop: { icon: "lucide:monitor", color: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300", label: "Desktop" },
  jeu: { icon: "lucide:gamepad-2", color: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300", label: "Jeu" },
  IA: { icon: "lucide:brain", color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300", label: "IA" },
  "3D": { icon: "lucide:box", color: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300", label: "3D" },
};