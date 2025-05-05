"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { 
  currentSkills, 
  learningSkills, 
  softSkills, 
  OtherSkills, 
  methods,
  languages,
  skillCategories,
  SkillCategory
} from "@/data/skills";

export default function CompetencesPage() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("all");
  const [activeSection, setActiveSection] = useState<string>("skills");
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  
  // Animation au scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.6]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  // Fonction de filtrage des compétences
  const filteredSkills = selectedCategory === "all" 
    ? currentSkills 
    : currentSkills.filter(skill => skill.category === selectedCategory);

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen bg-zinc-50 dark:bg-zinc-900 overflow-hidden pt-16"
    >
      {/* Canvas artistique - Fond abstrait */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div 
          style={{ opacity: backgroundOpacity, y: backgroundY }}
          className="absolute inset-0"
        >
          {/* Gradients abstraits géométriques */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-[-10%] top-[-5%] w-[50vw] h-[50vw] rounded-[40%] bg-gradient-to-tr from-indigo-100/30 dark:from-indigo-900/30 to-transparent blur-3xl"
          />
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[-15%] bottom-[20%] w-[60vw] h-[60vw] rounded-[40%] bg-gradient-to-bl from-amber-50/20 dark:from-amber-900/20 to-transparent blur-3xl"
          />
          
          {/* Motif de points raffiné */}
          <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-[0.03]">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: Math.random() * 0.4 + 0.1, 
                  opacity: Math.random() * 0.6 + 0.2 
                }}
                transition={{ 
                  delay: i * 0.03, 
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: Math.random() * 10 + 5
                }}
                className="w-1 h-1 bg-neutral-900 dark:bg-neutral-100 rounded-full"
                style={{ 
                  gridColumn: `${Math.floor(Math.random() * 20) + 1}`, 
                  gridRow: `${Math.floor(Math.random() * 20) + 1}` 
                }}
              />
            ))}
          </div>
          
          {/* Lignes artistiques fluides */}
          <svg className="absolute w-full h-full opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeOut" }}
              d="M0 50 C 20 20, 50 80, 80 40, 100 50" 
              stroke="currentColor" 
              strokeWidth="0.2" 
              fill="none" 
            />
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3.5, delay: 0.5, ease: "easeOut" }}
              d="M0 30 C 30 50, 60 20, 100 40" 
              stroke="currentColor" 
              strokeWidth="0.15" 
              fill="none" 
              strokeDasharray="0.5 2"
            />
          </svg>
        </motion.div>
      </div>

      {/* En-tête artistique avec entrée sophistiquée */}
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          ref={headerRef}
          className="relative py-24 md:py-32"
        >
          {/* Tag de section avec ligne animée */}
          <motion.div
            initial={{ opacity: 0, width: "30%" }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 1.5 }}
            className="flex items-center mb-10"
          >
            <span className="h-px w-12 bg-neutral-900/30 dark:bg-neutral-100/30 mr-4"></span>
            <span className="text-sm tracking-[0.2em] uppercase text-neutral-900/50 dark:text-neutral-100/50 font-light">Expertise</span>
            <span className="h-px flex-grow bg-gradient-to-r from-neutral-900/30 dark:from-neutral-100/30 to-transparent ml-4"></span>
          </motion.div>
          
          {/* Titre principal avec animation de dévoilement */}
          <div className="overflow-hidden mb-8">
            <motion.h1 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.5rem,8vw,5rem)] font-light leading-[1.1] tracking-[-0.02em] text-neutral-900/90 dark:text-neutral-100/90"
            >
              <span className="block mb-1 md:mb-2 relative">
                <span className="relative z-10">Savoir-faire</span>
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-[15%] left-0 h-[0.15em] bg-gradient-to-r from-indigo-300/40 dark:from-indigo-700/40 to-transparent w-full z-0"
                ></motion.span>
                <span className="text-4xl">.</span>
              </span>
            </motion.h1>
          </div>
          
          {/* Introduction élégante avec détails typographiques raffinés */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-xl text-lg font-light text-neutral-900/70 dark:text-neutral-100/70 leading-relaxed ml-0 md:ml-[5%]"
          >
            Un aperçu de mon univers technique — des compétences que je maîtrise aux méthodes 
            qui guident ma démarche. Chaque élément reflète une approche où 
            <span className="relative inline-block mx-2">
              <span className="relative z-10">précision</span>
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 h-[1px] bg-neutral-900/30 dark:bg-neutral-100/30"
              ></motion.span>
            </span> 
            et 
            <span className="relative inline-block mx-2">
              <span className="relative z-10">créativité</span>
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 h-[1px] bg-neutral-900/30 dark:bg-neutral-100/30"
              ></motion.span>
            </span>
            se rencontrent.
          </motion.p>
        </motion.div>

        {/* Navigation interne stylisée */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="sticky top-20 z-20 pt-5 pb-5 bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-sm border-y border-neutral-900/5 dark:border-neutral-100/5"
        >
          <div className="flex overflow-x-auto hide-scrollbar gap-5">
            {[
              { id: "skills", label: "Compétences", icon: <Icon icon="lucide:code" className="w-4 h-4 mr-2" /> },
              { id: "learning", label: "En apprentissage", icon: <Icon icon="lucide:book-open" className="w-4 h-4 mr-2" /> },
              { id: "soft", label: "Soft Skills", icon: <Icon icon="lucide:heart" className="w-4 h-4 mr-2" /> },
              { id: "methods", label: "Méthodes", icon: <Icon icon="lucide:filter" className="w-4 h-4 mr-2" /> },
              { id: "languages", label: "Langues", icon: <Icon icon="lucide:globe" className="w-4 h-4 mr-2" /> }
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center whitespace-nowrap px-5 py-2 rounded-full text-sm transition-all ${
                  activeSection === section.id 
                    ? "bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 shadow-md" 
                    : "bg-neutral-100/50 dark:bg-neutral-800/50 text-neutral-900/60 dark:text-neutral-100/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900/80 dark:hover:text-neutral-100/80"
                }`}
              >
                {section.icon}
                {section.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Contenu principal avec animations sophistiquées */}
        <div className="py-20">
          <AnimatePresence mode="wait">
            {activeSection === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Navigation par catégories de compétence */}
                <div className="mb-12">
                  <motion.h2 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-light mb-8 flex items-center"
                  >
                    <span className="inline-block w-8 h-[1px] bg-neutral-900/30 dark:bg-neutral-100/30 mr-3"></span>
                    Expertise technique
                  </motion.h2>
                  
                  <motion.div 
                    className="flex flex-wrap gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {skillCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id as SkillCategory)}
                        className={`group flex items-center px-5 py-2.5 rounded-md text-sm transition-all ${
                          selectedCategory === category.id
                            ? "bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900" 
                            : "bg-neutral-100/80 dark:bg-neutral-800/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900/70 dark:text-neutral-100/70 hover:text-neutral-900 dark:hover:text-neutral-100"
                        }`}
                      >
                        <Icon 
                          icon={category.icon} 
                          className={`w-4 h-4 mr-2 ${
                            selectedCategory === category.id
                              ? "text-neutral-100 dark:text-neutral-900"
                              : "text-neutral-900/50 dark:text-neutral-100/50 group-hover:text-neutral-900/80 dark:group-hover:text-neutral-100/80"
                          }`}
                        />
                        {category.name}
                      </button>
                    ))}
                  </motion.div>
                </div>

                {/* Grille de compétences avec design sophistiqué */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                  {filteredSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="group"
                    >
                      <div className="relative p-8 bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-xl shadow-sm border border-neutral-900/5 dark:border-neutral-100/5 h-full transition-all overflow-hidden hover:shadow-md">
                        {/* Fond décoratif subtil */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-neutral-900/[0.01] dark:to-neutral-100/[0.01] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        {/* Élément décoratif */}
                        <motion.div 
                          className="absolute top-0 left-0 w-full h-1 origin-left"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: skill.level / 100 }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                          style={{ 
                            background: `linear-gradient(to right, rgba(79, 70, 229, 0.3) 0%, rgba(79, 70, 229, 0.1) 100%)`,
                          }}
                        ></motion.div>
                        
                        {/* Contenu de la compétence */}
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex items-center justify-center bg-neutral-900/[0.02] dark:bg-neutral-100/[0.02] rounded-lg mr-3">
                              <Icon icon={skill.icon} className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-medium">{skill.name}</h3>
                          </div>
                          <span className="text-sm font-light opacity-60">{skill.level}%</span>
                        </div>
                        
                        <p className="text-sm text-neutral-900/60 dark:text-neutral-100/60 mb-6">{skill.description}</p>
                        
                        {/* Indicateur de niveau visuellement raffiné */}
                        <div className="h-1 w-full bg-neutral-900/5 dark:bg-neutral-100/5 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ delay: 0.7 + index * 0.05, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                          ></motion.div>
                        </div>
                        
                        {/* Badge de catégorie */}
                        <div className="absolute bottom-3 right-3">
                          <span className="inline-block px-2 py-0.5 bg-neutral-900/5 dark:bg-neutral-100/5 text-neutral-900/50 dark:text-neutral-100/50 text-xs rounded-full">
                            {skill.category}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === "learning" && (
              <motion.div
                key="learning"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h2 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-light mb-12 flex items-center"
                >
                  <span className="inline-block w-8 h-[1px] bg-neutral-900/30 dark:bg-neutral-100/30 mr-3"></span>
                  En cours d'apprentissage
                </motion.h2>
                
                {/* Visualisation alternative pour compétences en apprentissage */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {learningSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                      className="bg-gradient-to-br from-neutral-100/90 to-neutral-100/50 dark:from-neutral-800/90 dark:to-neutral-800/50 p-6 rounded-xl relative overflow-hidden border border-neutral-900/5 dark:border-neutral-100/5"
                    >
                      <div className="flex gap-4 items-start mb-5">
                        <div className="p-2 bg-neutral-900/[0.02] dark:bg-neutral-100/[0.02] rounded-lg">
                          <Icon icon={skill.icon} className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium flex items-center">
                            {skill.name}
                            <motion.div 
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="ml-2 px-2 py-0.5 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-xs rounded-full"
                            >
                              En progression
                            </motion.div>
                          </h3>
                          <p className="text-sm text-neutral-900/60 dark:text-neutral-100/60 mt-1">{skill.description}</p>
                        </div>
                      </div>
                      
                      {/* Représentation originale de l'apprentissage */}
                      <div className="relative">
                        <div className="h-1 w-full bg-neutral-900/5 dark:bg-neutral-100/5 rounded-full mb-3">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-amber-400 to-amber-300 dark:from-amber-600 dark:to-amber-700"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                          ></motion.div>
                        </div>
                        
                        <div className="flex justify-between text-xs text-neutral-900/40 dark:text-neutral-100/40">
                          <span>Débutant</span>
                          <span>Intermédiaire</span>
                          <span>Avancé</span>
                        </div>
                      </div>
                      
                      {/* Élément décoratif */}
                      <motion.div 
                        className="absolute bottom-0 right-0 w-[200px] h-[200px] rounded-full bg-gradient-to-tl from-amber-100/20 dark:from-amber-900/20 to-transparent -z-10"
                        animate={{ 
                          rotate: [0, 10, 0, -10, 0],
                          scale: [0.9, 1, 0.9]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                      ></motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {activeSection === "soft" && (
              <motion.div
                key="soft"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-16"
              >
                <div>
                  <motion.h2 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl font-light mb-12 flex items-center"
                  >
                    <span className="inline-block w-8 h-[1px] bg-neutral-900/30 dark:bg-neutral-100/30 mr-3"></span>
                    Soft Skills
                  </motion.h2>
                  
                  {/* Design créatif pour soft skills */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {softSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 * index, duration: 0.5 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="group relative p-8 border border-neutral-900/10 dark:border-neutral-100/10 rounded-xl bg-neutral-100/30 dark:bg-neutral-800/30 backdrop-blur-sm h-full"
                      >
                        {/* Forme artistique en arrière-plan */}
                        <motion.div
                          className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden rounded-xl"
                          initial={{ opacity: 0.03 }}
                          whileHover={{ opacity: 0.07, transition: { duration: 0.3 } }}
                        >
                          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                            <motion.circle 
                              cx="70" 
                              cy="30" 
                              r="40" 
                              fill="currentColor" 
                              initial={{ scale: 0.5 }}
                              animate={{ scale: [0.5, 0.55, 0.5] }}
                              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            />
                          </svg>
                        </motion.div>
                        
                        {/* Contenu */}
                        <div className="flex flex-col h-full">
                          <div className="mb-6">
                            <motion.div 
                              className="w-12 h-12 flex items-center justify-center bg-neutral-900/[0.03] dark:bg-neutral-100/[0.03] rounded-full"
                              whileHover={{ 
                                rotate: [0, 5, -5, 0],
                                transition: { duration: 0.5 } 
                              }}
                            >
                              <Icon icon={skill.icon} className="w-5 h-5 text-neutral-900/70 dark:text-neutral-100/70" />
                            </motion.div>
                          </div>
                          
                          <h3 className="text-lg font-medium mb-2">{skill.name}</h3>
                          <p className="text-sm text-neutral-900/60 dark:text-neutral-100/60">{skill.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Outils - Section complémentaire */}
                <div>
                  <h3 className="text-xl font-light mb-8 flex items-center">
                    <span className="inline-block w-5 h-[1px] bg-neutral-900/20 dark:bg-neutral-100/20 mr-3"></span>
                    Outils & environnements
                  </h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {OtherSkills.map((tool, index) => (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                        className="group px-4 py-3 bg-neutral-100/40 dark:bg-neutral-800/40 rounded-lg border border-neutral-900/5 dark:border-neutral-100/5 flex items-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
                      >
                        <Icon icon={tool.icon} className="w-5 h-5" />
                        <span className="text-sm">{tool.name}</span>
                        <span className="text-xs text-neutral-900/40 dark:text-neutral-100/40">{tool.description}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            
            {activeSection === "methods" && (
              <motion.div
                key="methods"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h2 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-light mb-12 flex items-center"
                >
                  <span className="inline-block w-8 h-[1px] bg-neutral-900/30 dark:bg-neutral-100/30 mr-3"></span>
                  Méthodes & approche
                </motion.h2>
                
                {/* Design éditorial pour les méthodologies */}
                <div className="relative">
                  {/* Ligne verticale décorative */}
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className="absolute left-[7px] md:left-[15px] top-0 w-[1px] h-full bg-gradient-to-b from-neutral-900/10 dark:from-neutral-100/10 via-neutral-900/20 dark:via-neutral-100/20 to-transparent"
                  ></motion.div>
                  
                  <div className="space-y-16">
                    {methods.map((method, index) => (
                      <motion.div
                        key={method.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 * index, duration: 0.6 }}
                        className="relative pl-8 md:pl-16"
                      >
                        {/* Point sur la ligne verticale */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.4 * index, duration: 0.3, type: "spring" }}
                          className="absolute left-0 md:left-2 top-0 w-3.5 h-3.5 rounded-full bg-neutral-100 dark:bg-neutral-800 border-2 border-neutral-900/70 dark:border-neutral-100/70 z-10"
                        ></motion.div>
                        
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 flex items-center justify-center bg-neutral-900/[0.05] dark:bg-neutral-100/[0.05] rounded-lg mr-4">
                              <Icon icon={method.icon} className="w-5 h-5 text-neutral-900/70 dark:text-neutral-100/70" />
                            </div>
                            <h3 className="text-xl font-medium">{method.name}</h3>
                          </div>
                          
                          <p className="text-neutral-900/70 dark:text-neutral-100/70 max-w-2xl">{method.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            
            {activeSection === "languages" && (
              <motion.div
                key="languages"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h2 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-light mb-12 flex items-center"
                >
                  <span className="inline-block w-8 h-[1px] bg-neutral-900/30 dark:bg-neutral-100/30 mr-3"></span>
                  Langues
                </motion.h2>
                
                {/* Design créatif pour les langues */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
                  {languages.map((language, index) => (
                    <motion.div
                      key={language.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 * index, duration: 0.5 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="relative p-8 bg-gradient-to-br from-neutral-100/80 to-neutral-100/40 dark:from-neutral-800/80 dark:to-neutral-800/40 backdrop-blur-sm rounded-xl border border-neutral-900/5 dark:border-neutral-100/5 overflow-hidden"
                    >
                      {/* Effet visuel décoratif */}
                      <motion.div 
                        className="absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-tl from-indigo-50/30 dark:from-indigo-900/30 to-transparent -z-10 rounded-full"
                        animate={{ 
                          rotate: [0, 180],
                          scale: [0.8, 1.1, 0.8],
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                      ></motion.div>
                      
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-light">{language.name}</h3>
                        <motion.div 
                          className="text-3xl"
                          animate={{ 
                            y: [0, -5, 0],
                            rotate: [0, 5, 0, -5, 0]
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Icon icon={language.flag} className="w-10 h-10" />
                        </motion.div>
                      </div>
                      
                      <div className="flex items-center">
                        <motion.div 
                          className="px-3 py-1 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 text-sm rounded-lg"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.5 + index * 0.2 }}
                        >
                          {language.level}
                        </motion.div>
                        
                        <motion.div 
                          className="ml-4 h-[1px] flex-grow bg-gradient-to-r from-neutral-900/30 dark:from-neutral-100/30 to-transparent"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.6 + index * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Pied de page artistique */}
      <div className="relative pb-40">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="border-t border-neutral-900/10 dark:border-neutral-100/10 py-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-xl mx-auto text-center"
            >
              <h3 className="text-2xl font-light mb-5">Une question sur mes compétences ?</h3>
              <p className="text-neutral-900/60 dark:text-neutral-100/60 mb-8">
                Discutons de comment je peux mettre mon expertise au service de votre projet.
              </p>
              
              <motion.a 
                href="/contact" 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 rounded-full group hover:bg-neutral-900/80 dark:hover:bg-neutral-100/80 transition-all"
              >
                <span className="mr-2">Me contacter</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </div>
        </div>
        
        {/* Élément décoratif final */}
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-0 left-0 w-full h-24"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0 Q20,10 40,5 T80,8 T100,0" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3 }}
          />
        </motion.svg>
      </div>
      
      
    </motion.div>
  );
}