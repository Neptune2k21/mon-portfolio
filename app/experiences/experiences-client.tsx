"use client";

import { useRef, useState, useCallback, useMemo } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useReducedMotion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { experiences, educations } from "@/data/education";
import { projets } from "@/data/projets";


export default function ExperiencesPageClient() {
  // Références et états
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"experiences" | "education" | "projets">("experiences");
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  
  // Détection des préférences utilisateur
  const shouldReduceMotion = useReducedMotion();

  // Animations au scroll optimisées
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Transformations simplifiées
  const backgroundOpacity = useTransform(
    scrollYProgress, 
    [0, 0.2], 
    [1, shouldReduceMotion ? 1 : 0.6]
  );
  const backgroundY = useTransform(
    scrollYProgress, 
    [0, 1], 
    ["0%", shouldReduceMotion ? "0%" : "20%"]
  );

  // Callbacks mémorisés pour éviter les re-renders
  const handleTabChange = useCallback((tab: "experiences" | "education" | "projets") => {
    setActiveTab(tab);
    setExpandedItem(null); // Fermer tous les éléments étendus
  }, []);

  const handleItemToggle = useCallback((itemId: string) => {
    setExpandedItem(prev => prev === itemId ? null : itemId);
  }, []);

  // Variantes d'animation optimisées
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.6,
        staggerChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  }), [shouldReduceMotion]);

  const itemVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      x: shouldReduceMotion ? 0 : -20 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: shouldReduceMotion ? 0.2 : 0.4 
      }
    }
  }), [shouldReduceMotion]);

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0.2 : 0.6 }}
      className="relative min-h-screen bg-zinc-50 dark:bg-zinc-900 overflow-hidden pt-16"
    >
      {/* Fond simplifié pour performance */}
      {!shouldReduceMotion && (
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <motion.div 
            style={{ opacity: backgroundOpacity, y: backgroundY }}
            className="absolute inset-0"
          >
            {/* Gradients simplifiés */}
            <div className="absolute right-[-10%] top-[-5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-indigo-100/20 dark:from-indigo-900/20 to-transparent blur-2xl" />
            <div className="absolute left-[-15%] bottom-[20%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-amber-50/15 dark:from-amber-900/15 to-transparent blur-2xl" />
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
              Parcours
            </span>
            <span className="h-px flex-grow bg-gradient-to-r from-neutral-900/30 dark:from-neutral-100/30 to-transparent ml-3"></span>
          </motion.div>
          
          {/* Titre simplifié */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight tracking-tight text-neutral-900/90 dark:text-neutral-100/90 mb-6"
          >
            Expériences
          </motion.h1>
          
          {/* Description simplifiée */}
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl text-lg font-light text-neutral-900/70 dark:text-neutral-100/70 leading-relaxed"
          >
            Mon parcours professionnel et académique — chaque étape représente une évolution 
            dans mon cheminement professionnel.
          </motion.p>
        </motion.div>

        {/* Navigation simplifiée */}
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.4, delay: shouldReduceMotion ? 0 : 0.3 }}
          className="sticky top-20 z-20 py-4 bg-zinc-50/90 dark:bg-zinc-900/90 backdrop-blur-sm border-y border-neutral-900/5 dark:border-neutral-100/5"
        >
          <div className="flex overflow-x-auto gap-3 pb-2">
            {[
              { id: "experiences", label: "Expériences", icon: "lucide:briefcase" },
              { id: "education", label: "Formation", icon: "lucide:graduation-cap" },
              { id: "projets", label: "Projets", icon: "lucide:code" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id as any)}
                className={`flex items-center whitespace-nowrap px-4 py-2 rounded-full text-sm transition-colors ${
                  activeTab === tab.id 
                    ? "bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900" 
                    : "bg-neutral-100/50 dark:bg-neutral-800/50 text-neutral-900/60 dark:text-neutral-100/60 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                }`}
              >
                <Icon icon={tab.icon} className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Contenu principal optimisé */}
        <div className="py-12">
          <AnimatePresence mode="wait">
            {activeTab === "experiences" && (
              <motion.div
                key="experiences"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
                className="space-y-16"
              >
                {experiences.map((experience, index) => (
                  <motion.div
                    key={experience.company}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: shouldReduceMotion ? 0 : index * 0.1, 
                      duration: shouldReduceMotion ? 0.2 : 0.4 
                    }}
                    className="relative"
                  >
                    {/* Carte expérience simplifiée */}
                    <div 
                      onClick={() => handleItemToggle(`exp-${index}`)}
                      className={`p-6 rounded-xl cursor-pointer transition-all duration-200 ${
                        expandedItem === `exp-${index}` 
                          ? "bg-indigo-50 dark:bg-indigo-900/20 shadow-md" 
                          : "bg-white/80 dark:bg-neutral-800/80 shadow-sm hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Logo simplifié */}
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white dark:bg-neutral-900 shadow-sm border border-neutral-900/5 dark:border-neutral-100/5 flex-shrink-0">
                          {experience.isImageLogo ? (
                            <Image
                              src={experience.logo}
                              alt={experience.company}
                              width={32}
                              height={32}
                              className="w-8 h-8 object-contain"
                            />
                          ) : (
                            <Icon icon={experience.logo} className="w-6 h-6" />
                          )}
                        </div>
                        
                        {/* Contenu */}
                        <div className="flex-grow min-w-0">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium text-lg">{experience.title}</h3>
                              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                                {experience.company} • {experience.period}
                              </p>
                            </div>
                            
                            <motion.div 
                              animate={{ rotate: expandedItem === `exp-${index}` ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="text-neutral-400"
                            >

                            </motion.div>
                          </div>
                          
                          <p className="text-neutral-700 dark:text-neutral-300 mt-2 text-sm line-clamp-2">
                            {experience.description}
                          </p>
                          
                          {/* Tags simplifiés */}
                          <div className="flex flex-wrap gap-1 mt-3">
                            {experience.skills.slice(0, 4).map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-1 text-xs rounded bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
                              >
                                {skill}
                              </span>
                            ))}
                            {experience.skills.length > 4 && (
                              <span className="px-2 py-1 text-xs text-neutral-500">
                                +{experience.skills.length - 4}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Contenu étendu optimisé */}
                      <AnimatePresence>
                        {expandedItem === `exp-${index}` && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >

                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
                className="space-y-16"
              >
                {educations.map((education, index) => (
                  <motion.div
                    key={education.institution}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: shouldReduceMotion ? 0 : index * 0.1, 
                      duration: shouldReduceMotion ? 0.2 : 0.4 
                    }}
                    className="relative"
                  >
                    {/* Carte éducation simplifiée */}
                    <div 
                      onClick={() => handleItemToggle(`edu-${index}`)}
                      className={`p-6 rounded-xl cursor-pointer transition-all duration-200 ${
                        expandedItem === `edu-${index}` 
                          ? "bg-amber-50 dark:bg-amber-900/20 shadow-md" 
                          : "bg-white/80 dark:bg-neutral-800/80 shadow-sm hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Logo */}
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white dark:bg-neutral-900 shadow-sm border border-neutral-900/5 dark:border-neutral-100/5 flex-shrink-0">
                          {education.isImageLogo ? (
                            <Image
                              src={education.logo}
                              alt={education.institution}
                              width={32}
                              height={32}
                              className="w-8 h-8 object-contain"
                            />
                          ) : (
                            <Icon icon={education.logo} className="w-6 h-6" />
                          )}
                        </div>
                        
                        {/* Contenu */}
                        <div className="flex-grow min-w-0">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium text-lg">{education.title}</h3>
                              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                                {education.institution} • {education.period}
                              </p>
                            </div>
                            
                            <motion.div 
                              animate={{ rotate: expandedItem === `edu-${index}` ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="text-neutral-400"
                            >

                            </motion.div>
                          </div>
                          
                          <p className="text-neutral-700 dark:text-neutral-300 mt-2 text-sm line-clamp-2">
                            {education.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Contenu étendu */}
                      <AnimatePresence>
                        {expandedItem === `edu-${index}` && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                              <h4 className="font-medium mb-2">Description du programme</h4>
                              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                {education.description}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "projets" && (
              <motion.div
                key="projets"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
                className="space-y-16"
              >
                {projets.map((projet, index) => (
                  <motion.div
                    key={projet.id}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: shouldReduceMotion ? 0 : index * 0.1, 
                      duration: shouldReduceMotion ? 0.2 : 0.4 
                    }}
                    className="relative"
                  >
                    {/* Carte projet simplifiée */}
                    <div 
                      onClick={() => handleItemToggle(`proj-${index}`)}
                      className={`p-6 rounded-xl cursor-pointer transition-all duration-200 ${
                        expandedItem === `proj-${index}` 
                          ? "bg-emerald-50 dark:bg-emerald-900/20 shadow-md" 
                          : "bg-white/80 dark:bg-neutral-800/80 shadow-sm hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Image du projet */}
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-neutral-900/5 dark:border-neutral-100/5">
                          <Image
                            src={projet.image}
                            alt={projet.title}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Contenu */}
                        <div className="flex-grow min-w-0">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium text-lg">{projet.title}</h3>
                                {projet.type && (
                                  <span className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300">
                                    {projet.type}
                                  </span>
                                )}
                              </div>
                              {projet.role && (
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                                  {projet.role}
                                </p>
                              )}
                            </div>
                            
                            <motion.div 
                              animate={{ rotate: expandedItem === `proj-${index}` ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="text-neutral-400"
                            >
                              <Icon icon="lucide:chevron-down" className="w-5 h-5" />
                            </motion.div>
                          </div>
                          
                          <p className="text-neutral-700 dark:text-neutral-300 mt-2 text-sm line-clamp-2">
                            {projet.description}
                          </p>
                          
                          {/* Technologies simplifiées */}
                          <div className="flex flex-wrap gap-1 mt-3">
                            {projet.tech.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 text-xs rounded bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
                              >
                                {tech}
                              </span>
                            ))}
                            {projet.tech.length > 3 && (
                              <span className="px-2 py-1 text-xs text-neutral-500">
                                +{projet.tech.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Contenu étendu */}
                      <AnimatePresence>
                        {expandedItem === `proj-${index}` && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700 space-y-4">
                              <div>
                                <h4 className="font-medium mb-2">Description détaillée</h4>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                  {projet.longDesc}
                                </p>
                              </div>
                              
                              {projet.features && (
                                <div>
                                  <h4 className="font-medium mb-2">Fonctionnalités principales</h4>
                                  <ul className="list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                                    {projet.features.map((feature) => (
                                      <li key={feature}>{feature}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              
                              <div>
                                <h4 className="font-medium mb-2">Technologies utilisées</h4>
                                <div className="flex flex-wrap gap-1">
                                  {projet.tech.map((tech) => (
                                    <span
                                      key={tech}
                                      className="px-2 py-1 text-xs rounded bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              
                              {projet.github && (
                                <div className="flex justify-end">
                                  <a 
                                    href={projet.github} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline text-sm"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <Icon icon="lucide:github" className="w-4 h-4" />
                                    Voir le code
                                  </a>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Call to action simplifié */}
      <div className="border-t border-neutral-900/10 dark:border-neutral-100/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.4 }}
            className="max-w-xl mx-auto text-center"
          >
            <h3 className="text-2xl font-light mb-4">Envie de travailler ensemble ?</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Je suis actuellement à la recherche d'une alternance pour mettre en pratique mes compétences.
            </p>
            
            <Link href="/contact">
              <motion.div 
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="inline-flex items-center px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
              >
                <span className="mr-2">Me contacter</span>
                <Icon icon="lucide:arrow-right" className="w-4 h-4" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}