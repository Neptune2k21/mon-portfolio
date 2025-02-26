import { motion, AnimatePresence } from "framer-motion";
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Tab } from '@headlessui/react';

interface Skill {
  name: string;
  icon: string;
  level: number;
  description: string;
}
type SkillCategory = "all" | "frontend" | "backend" | "design" | "devops" | "software";

const skillCategories = [
  { id: "all", name: "Tout", icon: "carbon:viewport" },
  { id: "frontend", name: "Frontend", icon: "carbon:application" },
  { id: "backend", name: "Backend", icon: "carbon:server" },
  { id: "design", name: "Design", icon: "carbon:paint-brush" },
  { id: "devops", name: "Devops", icon:"carbon:cloud"  },
  { id: "software", name: "Logiciels", icon: "carbon:software" },
];

const currentSkills: (Skill & { category: SkillCategory })[] = [
  {
    name: "Next.js",
    icon: "logos:nextjs-icon",
    level: 90,
    description: "Framework React moderne",
    category: "frontend"
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
    level: 90,
    description: "Langage de programmation",
    category: "software"
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
    level: 80,
    description: "Backend JavaScript",
    category: "backend"
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
    level: 85,
    description: "Développement typé",
    category: "software"
  },
  {
    name: "React",
    icon: "logos:react",
    level: 85,
    description: "Bibliothèque UI",
    category: "frontend"
  },
  {
    name: "Csharp",
    icon: "logos:c-sharp",
    level: 70,
    description: "Langage de programmation",
    category: "software"
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
    level: 75,
    description: "Outil de déploiement et d'exécution des applications",
    category: "devops"
  }
];

const learningSkills:  (Skill & { category: SkillCategory })[] = [
  {
    name: "Rust",
    icon: "logos:rust",
    level: 40,
    description: "Langage système performant",
    category: "software"
  },
  {
    name: "C++",
    icon: "logos:c-plusplus",
    level: 50,
    description: "Langage de programmation",
    category: "software"
  },
  {
    name: "AWS",
    icon: "logos:aws",
    level: 45,
    description: "Cloud Computing",
    category: "devops"
  }
];

interface Language {
  name: string;
  flag: string;
  level: string;
}

const languages: Language[] = [
  {
    name: "Français",
    flag: "emojione:flag-for-france",
    level: "Natif"
  },
  {
    name: "Anglais",
    flag: "emojione:flag-for-united-kingdom",
    level: "B2"
  }
];

const softSkills = [
  {
    name: "Travail d'équipe",
    icon: "carbon:collaboration",
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
const OtherSkills= [
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
  {
    name: "Figma",
    icon: "logos:figma",
    level: 80,
    description: "Outil de Design d'interface",
    category: "design"
  }
];




export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("current");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isGridView, setIsGridView] = useState(true);
  const [activeFilter, setActiveFilter] = useState<SkillCategory>("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    { id: "current", name: "Stack Actuelle", icon: "carbon:application-web" },
    { id: "learning", name: "En Apprentissage", icon: "carbon:education" },
    { id: "other", name: "Autres Compétences", icon: "carbon:user-profile" },
  ];
  const filterSkills = (skills: any[], selectedTab: string) => {
    // Si on est dans "Autres Compétences", ignorer le filtre
    if (selectedTab === "other") {
      return [...languages, ...OtherSkills , ...softSkills];
    }
  
    // Récupérer le bon tableau de skills selon l'onglet
    const currentTabSkills = selectedTab === "current" ? currentSkills : learningSkills;
  
    // Si filtre "all", retourner tous les skills de l'onglet
    if (activeFilter === "all") {
      return currentTabSkills;
    }
  
    // Filtrer par catégorie
    const filteredSkills = currentTabSkills.filter(skill => 
      "category" in skill && skill.category === activeFilter
    );
  
    return filteredSkills;
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillCardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="skills" className="py-32 bg-white relative overflow-hidden">
      {/* Arrière-plan animé */}
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          background: "linear-gradient(45deg, rgba(0,0,0,0.02) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.02) 75%, rgba(0,0,0,0.02)), linear-gradient(45deg, rgba(0,0,0,0.02) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.02) 75%, rgba(0,0,0,0.02))",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">
            Mon expertise
          </span>
          <h2 className="text-6xl font-bold mt-4">
            Compétences &{" "}
            <span className="relative inline-block">
              Technologies
              <motion.div
                className="absolute bottom-0 left-0 h-3 bg-black/10 w-full -z-10"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h2>
        </motion.div>

        {/* Contrôles de vue */}
        <div className="flex justify-between items-center mb-8">
          <Tab.Group>
            <Tab.List className="flex gap-4 p-1 bg-gray-100 rounded-xl">
              {categories.map((category) => (
                <Tab
                  key={category.id}
                  className={({ selected }) =>
                    `px-6 py-3 rounded-lg font-medium transition-all ${
                      selected 
                        ? "bg-black text-white shadow-lg" 
                        : "text-gray-600 hover:bg-gray-200"
                    }`
                  }
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="flex items-center gap-2">
                    <Icon icon={category.icon} className="w-5 h-5" />
                    {category.name}
                  </div>
                </Tab>
              ))}
            </Tab.List>
          </Tab.Group>

          <div className="flex items-center gap-3 relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`
                p-2 rounded-lg transition-colors flex items-center gap-2
                ${isFilterOpen || activeFilter !== 'all' 
                  ? "bg-black text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-600"}
              `}
            >
              <Icon icon="carbon:filter" className="w-6 h-6" />
              <span className="hidden md:inline">
                {activeFilter === 'all' ? 'Filtrer' : skillCategories.find(cat => cat.id === activeFilter)?.name}
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsGridView(!isGridView)}
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <Icon 
                icon={isGridView ? "carbon:list" : "carbon:grid"} 
                className="w-6 h-6" 
              />
            </motion.button>

            {/* Menu déroulant des filtres */}
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 top-full mt-2 p-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50"
                >
                  <div className="grid grid-cols-2 gap-2 min-w-[200px]">
                    {skillCategories.map((category) => (
                      <motion.button
                        key={category.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setActiveFilter(category.id as SkillCategory);
                          setIsFilterOpen(false);
                        }}
                        className={`
                          px-3 py-2 rounded-lg font-medium transition-all flex items-center gap-2
                          ${activeFilter === category.id 
                            ? "bg-black text-white shadow-lg" 
                            : "text-gray-600 hover:bg-gray-100"}
                        `}
                      >
                        <Icon icon={category.icon} className="w-4 h-4" />
                        <span>{category.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <AnimatePresence mode='wait'>
          <motion.div
            key={`${selectedCategory}-${activeFilter}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={`grid gap-6 ${
              isGridView 
                ? "grid-cols-1 md:grid-cols-3" 
                : "grid-cols-1"
            }`}
          >
            {(() => {
              const skillsToDisplay = selectedCategory === "current" ? currentSkills :
                selectedCategory === "learning" ? learningSkills :
                [...languages, ...softSkills, ...OtherSkills];
              
              const filteredSkills = filterSkills(skillsToDisplay, selectedCategory);
              
              if (selectedCategory === "other" && activeFilter !== "all") {
                return (
                  <motion.div 
                    variants={skillCardVariants}
                    className="col-span-full min-h-[400px] bg-white/50 backdrop-blur-sm rounded-2xl border-2 border-dashed border-black/20 p-12 text-center flex flex-col items-center justify-center"
                  >
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", duration: 0.5 }}>
                      <Icon icon="carbon:filter-remove" className="w-20 h-20 mx-auto text-black/40 mb-6" />
                      <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        Filtrage Non Disponible
                      </h3>
                      <p className="text-gray-600 max-w-md mx-auto mb-6">
                        Cette section présente mes compétences générales et linguistiques, qui ne sont pas catégorisées.
                      </p>
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveFilter("all")} className="px-6 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-colors shadow-lg">
                        <div className="flex items-center gap-2">
                          <Icon icon="carbon:view-all" />
                          <span>Voir tout</span>
                        </div>
                      </motion.button>
                    </motion.div>
                  </motion.div>
                );
              }

              if (filteredSkills.length === 0 && activeFilter !== "all") {
                return (
                  <motion.div 
                    variants={skillCardVariants}
                    className="col-span-full min-h-[400px] bg-white rounded-2xl border-2 border-black/20 p-12 text-center flex flex-col items-center justify-center"
                  >
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", duration: 0.5 }}>
                      <div className="relative inline-block mb-6">
                        <Icon icon="carbon:search" className="w-20 h-20 text-black/40" />
                        <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-4 border-dashed border-black/10 rounded-full" />
                      </div>
                      <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        {selectedCategory === "current" ? "Explorer de Nouveaux Horizons" : "En Cours d'Apprentissage"}
                      </h3>
                      <p className="text-gray-600 max-w-md mx-auto mb-6">
                        {selectedCategory === "current" ? "Je n'ai pas encore de compétences dans cette catégorie, mais j'apprends constamment !" : `Je suis en train d'explorer les technologies ${skillCategories.find(cat => cat.id === activeFilter)?.name.toLowerCase()}.`}
                      </p>
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveFilter("all")} className="px-6 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-colors shadow-lg">
                        <div className="flex items-center gap-2">
                          <Icon icon="carbon:view-all" />
                          <span>Voir toutes les compétences</span>
                        </div>
                      </motion.button>
                    </motion.div>
                  </motion.div>
                );
              }
              
              return filteredSkills.map((skill: any) => (
                <motion.div
                  key={skill.name}
                  variants={skillCardVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className={`
                    p-6 rounded-xl border-2 
                    ${hoveredSkill === skill.name ? "border-black shadow-2xl" : "border-black/50"}
                    bg-white transition-all
                    ${isGridView ? "" : "flex items-center gap-8"}
                  `}
                >
                  <div className={`flex items-center gap-4 mb-4 ${isGridView ? "" : "flex-1"}`}>
                    <div className="relative">
                      <Icon icon={skill.icon || skill.flag} className="w-8 h-8" />
                      {hoveredSkill === skill.name && (
                        <motion.div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }} />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold">{skill.name}</h4>
                      <p className="text-sm text-gray-600">{skill.description || skill.level}</p>
                    </div>
                  </div>
                </motion.div>
              ));
            })()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}