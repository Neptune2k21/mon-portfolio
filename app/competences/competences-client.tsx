"use client";

import React, { useState, useRef, useMemo, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useReducedMotion } from "framer-motion";
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
import CompetencesStructuredData from "@/components/competences-structured-data";



// Optimisation: Composant mémorisé pour les compétences
const SkillCard = React.memo(({ skill, index, delay }: { 
  skill: any; 
  index: number; 
  delay: number;
}) => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: shouldReduceMotion ? 0 : delay, 
        duration: shouldReduceMotion ? 0.2 : 0.6 
      }}
      whileHover={shouldReduceMotion ? {} : { y: -2 }}
      className="group"
    >
      <div className="relative p-6 bg-neutral-100/80 dark:bg-neutral-800/80 rounded-xl shadow-sm border border-neutral-900/5 dark:border-neutral-100/5 h-full transition-all overflow-hidden hover:shadow-md">
        {/* Barre de progression simplifiée */}
        <div className="absolute top-0 left-0 h-1 bg-indigo-500 opacity-30 rounded-t-xl"
             style={{ width: `${skill.level}%` }} />
        
        {/* Contenu */}
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 flex items-center justify-center bg-neutral-900/5 dark:bg-neutral-100/5 rounded-lg mr-3">
            <Icon icon={skill.icon} className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-medium">{skill.name}</h3>
          <span className="ml-auto text-sm opacity-60">{skill.level}%</span>
        </div>
        
        <p className="text-sm text-neutral-900/60 dark:text-neutral-100/60 mb-4">
          {skill.description}
        </p>
        
        {/* Badge de catégorie */}
        <span className="inline-block px-2 py-1 bg-neutral-900/5 dark:bg-neutral-100/5 text-neutral-900/50 dark:text-neutral-100/50 text-xs rounded-full">
          {skill.category}
        </span>
      </div>
    </motion.div>
  );
});

SkillCard.displayName = 'SkillCard';

// Composant simplifié pour l'apprentissage
const LearningCard = React.memo(({ skill, index }: { skill: any; index: number }) => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: shouldReduceMotion ? 0 : 0.1 * index, 
        duration: shouldReduceMotion ? 0.2 : 0.5 
      }}
      className="bg-gradient-to-br from-neutral-100/90 to-neutral-100/50 dark:from-neutral-800/90 dark:to-neutral-800/50 p-6 rounded-xl border border-neutral-900/5 dark:border-neutral-100/5"
    >
      <div className="flex gap-4 items-start mb-4">
        <div className="p-2 bg-neutral-900/5 dark:bg-neutral-100/5 rounded-lg">
          <Icon icon={skill.icon} className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-medium flex items-center">
            {skill.name}
            <span className="ml-2 px-2 py-0.5 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-xs rounded-full">
              En cours
            </span>
          </h3>
          <p className="text-sm text-neutral-900/60 dark:text-neutral-100/60 mt-1">
            {skill.description}
          </p>
        </div>
      </div>
      
      {/* Barre de progression simplifiée */}
      <div className="h-1 w-full bg-neutral-900/5 dark:bg-neutral-100/5 rounded-full">
        <div 
          className="h-full bg-gradient-to-r from-amber-400 to-amber-300 dark:from-amber-600 dark:to-amber-700 rounded-full transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </motion.div>
  );
});

LearningCard.displayName = 'LearningCard';

export default function CompetencesPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("all");
  const [activeSection, setActiveSection] = useState<string>("skills");
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Animation au scroll optimisée
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Transformations simplifiées pour mobile
  const backgroundOpacity = useTransform(
    scrollYProgress, 
    [0, 0.3], 
    [1, shouldReduceMotion ? 1 : 0.8]
  );

  // Filtrage mémorisé
  const filteredSkills = useMemo(() => {
    return selectedCategory === "all" 
      ? currentSkills 
      : currentSkills.filter(skill => skill.category === selectedCategory);
  }, [selectedCategory]);

  // Callback pour changement de catégorie
  const handleCategoryChange = useCallback((category: SkillCategory) => {
    setSelectedCategory(category);
  }, []);

  // Callback pour changement de section
  const handleSectionChange = useCallback((section: string) => {
    setActiveSection(section);
  }, []);

  // Variantes d'animation simplifiées
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.5,
        staggerChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  }), [shouldReduceMotion]);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.5
      }
    }
  }), [shouldReduceMotion]);

  return (
    <>
    <CompetencesStructuredData/>
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0.1 : 0.4 }}
      className="relative min-h-screen bg-zinc-50 dark:bg-zinc-900 pt-16"
    >
      {/* Fond simplifié pour performance */}
      {!shouldReduceMotion && (
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <motion.div 
            style={{ opacity: backgroundOpacity }}
            className="absolute inset-0"
          >
            {/* Un seul gradient pour performance */}
            <div className="absolute right-[-10%] top-[-5%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-indigo-100/20 dark:from-indigo-900/20 to-transparent blur-3xl" />
          </motion.div>
        </div>
      )}

      {/* En-tête optimisé */}
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative py-16 md:py-24"
        >
          {/* Tag de section simplifié */}
          <motion.div
            variants={itemVariants}
            className="flex items-center mb-8"
          >
            <span className="h-px w-8 bg-neutral-900/30 dark:bg-neutral-100/30 mr-3"></span>
            <span className="text-sm tracking-widest uppercase text-neutral-900/50 dark:text-neutral-100/50 font-light">
              Expertise
            </span>
            <span className="h-px flex-grow bg-gradient-to-r from-neutral-900/30 dark:from-neutral-100/30 to-transparent ml-3"></span>
          </motion.div>
          
          {/* Titre simplifié */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight tracking-tight text-neutral-900/90 dark:text-neutral-100/90 mb-6"
          >
            Savoir-faire
          </motion.h1>
          
          {/* Description simplifiée */}
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl text-lg font-light text-neutral-900/70 dark:text-neutral-100/70 leading-relaxed"
          >
            Un aperçu de mon univers technique — des compétences que je maîtrise aux méthodes 
            qui guident ma démarche créative.
          </motion.p>
        </motion.div>

        {/* Navigation simplifiée et performante */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.1 : 0.6, delay: shouldReduceMotion ? 0 : 0.3 }}
          className="sticky top-20 z-20 py-4 bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-sm border-y border-neutral-900/5 dark:border-neutral-100/5"
        >
          <div className="flex overflow-x-auto gap-3 pb-2">
            {[
              { id: "skills", label: "Compétences", icon: "lucide:code" },
              { id: "learning", label: "Apprentissage", icon: "lucide:book-open" },
              { id: "soft", label: "Soft Skills", icon: "lucide:heart" },
              { id: "methods", label: "Méthodes", icon: "lucide:filter" },
              { id: "languages", label: "Langues", icon: "lucide:globe" }
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionChange(section.id)}
                className={`flex items-center whitespace-nowrap px-4 py-2 rounded-full text-sm transition-colors ${
                  activeSection === section.id 
                    ? "bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900" 
                    : "bg-neutral-100/50 dark:bg-neutral-800/50 text-neutral-900/60 dark:text-neutral-100/60 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                }`}
              >
                <Icon icon={section.icon} className="w-4 h-4 mr-2" />
                {section.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Contenu principal optimisé */}
        <div className="py-12">
          <AnimatePresence mode="wait">
            {activeSection === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
              >
                {/* Navigation par catégories optimisée */}
                <div className="mb-8">
                  <h2 className="text-xl font-light mb-6 flex items-center">
                    <span className="w-6 h-px bg-neutral-900/30 dark:bg-neutral-100/30 mr-3"></span>
                    Expertise technique
                  </h2>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryChange(category.id as SkillCategory)}
                        className={`flex items-center px-4 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === category.id
                            ? "bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900" 
                            : "bg-neutral-100/80 dark:bg-neutral-800/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900/70 dark:text-neutral-100/70"
                        }`}
                      >
                        <Icon icon={category.icon} className="w-4 h-4 mr-2" />
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grille optimisée */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSkills.map((skill, index) => (
                    <SkillCard 
                      key={skill.name}
                      skill={skill}
                      index={index}
                      delay={0.1 + index * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === "learning" && (
              <motion.div
                key="learning"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
              >
                <h2 className="text-xl font-light mb-8 flex items-center">
                  <span className="w-6 h-px bg-neutral-900/30 dark:bg-neutral-100/30 mr-3"></span>
                  En cours d'apprentissage
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {learningSkills.map((skill, index) => (
                    <LearningCard 
                      key={skill.name}
                      skill={skill}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            )}
            
            {activeSection === "soft" && (
              <motion.div
                key="soft"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
              >
                <h2 className="text-xl font-light mb-8 flex items-center">
                  <span className="w-6 h-px bg-neutral-900/30 dark:bg-neutral-100/30 mr-3"></span>
                  Soft Skills
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: shouldReduceMotion ? 0 : 0.1 * index, duration: shouldReduceMotion ? 0.2 : 0.5 }}
                      className="p-6 border border-neutral-900/10 dark:border-neutral-100/10 rounded-xl bg-neutral-100/30 dark:bg-neutral-800/30"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-neutral-900/5 dark:bg-neutral-100/5 rounded-lg mr-3">
                          <Icon icon={skill.icon} className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-medium">{skill.name}</h3>
                      </div>
                      <p className="text-sm text-neutral-900/60 dark:text-neutral-100/60">
                        {skill.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Outils section simplifiée */}
                <div className="mt-12">
                  <h3 className="text-lg font-light mb-6 flex items-center">
                    <span className="w-4 h-px bg-neutral-900/20 dark:bg-neutral-100/20 mr-3"></span>
                    Outils & environnements
                  </h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {OtherSkills.map((tool, index) => (
                      <div
                        key={tool.name}
                        className="px-3 py-2 bg-neutral-100/40 dark:bg-neutral-800/40 rounded-lg border border-neutral-900/5 dark:border-neutral-100/5 flex items-center gap-2"
                      >
                        <Icon icon={tool.icon} className="w-4 h-4" />
                        <span className="text-sm">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            
            {activeSection === "methods" && (
              <motion.div
                key="methods"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
              >
                <h2 className="text-xl font-light mb-8 flex items-center">
                  <span className="w-6 h-px bg-neutral-900/30 dark:bg-neutral-100/30 mr-3"></span>
                  Méthodes & approche
                </h2>
                
                <div className="space-y-8">
                  {methods.map((method, index) => (
                    <motion.div
                      key={method.name}
                      initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: shouldReduceMotion ? 0 : 0.2 * index, duration: shouldReduceMotion ? 0.2 : 0.6 }}
                      className="flex gap-4"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-neutral-900/5 dark:bg-neutral-100/5 rounded-lg flex-shrink-0">
                        <Icon icon={method.icon} className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">{method.name}</h3>
                        <p className="text-neutral-900/70 dark:text-neutral-100/70">
                          {method.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {activeSection === "languages" && (
              <motion.div
                key="languages"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
              >
                <h2 className="text-xl font-light mb-8 flex items-center">
                  <span className="w-6 h-px bg-neutral-900/30 dark:bg-neutral-100/30 mr-3"></span>
                  Langues
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
                  {languages.map((language, index) => (
                    <motion.div
                      key={language.name}
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: shouldReduceMotion ? 0 : 0.1 * index, duration: shouldReduceMotion ? 0.2 : 0.5 }}
                      className="p-6 bg-gradient-to-br from-neutral-100/80 to-neutral-100/40 dark:from-neutral-800/80 dark:to-neutral-800/40 rounded-xl border border-neutral-900/5 dark:border-neutral-100/5"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-light">{language.name}</h3>
                        <Icon icon={language.flag} className="w-8 h-8" />
                      </div>
                      
                      <div className="flex items-center">
                        <span className="px-3 py-1 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 text-sm rounded-lg">
                          {language.level}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Footer simplifié */}
      <div className="border-t border-neutral-900/10 dark:border-neutral-100/10 py-12">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl text-center">
          <h3 className="text-xl font-light mb-4">Une question sur mes compétences ?</h3>
          <p className="text-neutral-900/60 dark:text-neutral-100/60 mb-6">
            Discutons de comment je peux mettre mon expertise au service de votre projet.
          </p>
          
          <motion.a 
            href="/contact" 
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="inline-flex items-center px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 rounded-full hover:bg-neutral-900/80 dark:hover:bg-neutral-100/80 transition-colors"
          >
            <span className="mr-2">Me contacter</span>
            <span>→</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
    </>
  );
}