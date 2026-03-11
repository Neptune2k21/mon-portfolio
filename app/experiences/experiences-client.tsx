"use client";

import React, { useState, useRef, useMemo, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useReducedMotion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { experiences, educations } from "@/data/education";
import { projets } from "@/data/projets";
import { getTechIcon, projectTypeBadge } from "@/data/tech-icons";

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
    setExpandedItem(null);
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
            <div className="absolute right-[-10%] top-[-5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-indigo-100/20 dark:from-indigo-900/20 to-transparent blur-2xl" />
            <div className="absolute left-[-15%] bottom-[20%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-amber-50/15 dark:from-amber-900/15 to-transparent blur-2xl" />
          </motion.div>
        </div>
      )}

      {/* En-tête */}
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative py-16 md:py-24"
        >
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
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight tracking-tight text-neutral-900/90 dark:text-neutral-100/90 mb-6"
          >
            Expériences
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl text-lg font-light text-neutral-900/70 dark:text-neutral-100/70 leading-relaxed"
          >
            Mon parcours professionnel et académique — chaque étape représente une évolution 
            dans mon cheminement professionnel.
          </motion.p>
        </motion.div>

        {/* Navigation */}
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

        {/* Contenu principal */}
        <div className="py-12">
          <AnimatePresence mode="wait">
            {/* SECTION EXPÉRIENCES */}
            {activeTab === "experiences" && (
              <motion.div
                key="experiences"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
                className="space-y-8"
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
                    className="group bg-white/80 dark:bg-neutral-800/80 rounded-2xl p-6 shadow-sm border border-neutral-900/5 dark:border-neutral-100/5 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-6">
                      {/* Logo */}
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white dark:bg-neutral-900 shadow-sm border border-neutral-900/5 dark:border-neutral-100/5 flex-shrink-0">
                        {experience.isImageLogo ? (
                          <Image
                            src={experience.logo}
                            alt={experience.company}
                            width={48}
                            height={48}
                            className="w-12 h-12 object-contain rounded-lg"
                          />
                        ) : (
                          <Icon icon={experience.logo} className="w-8 h-8" />
                        )}
                      </div>
                      
                      {/* Contenu */}
                      <div className="flex-grow min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                              {experience.title}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 font-light">
                              {experience.company}
                            </p>
                          </div>
                          <span className="text-sm text-neutral-500 dark:text-neutral-400 whitespace-nowrap flex items-center gap-1">
                            <Icon icon="lucide:calendar" className="w-4 h-4" />
                            {experience.period}
                          </span>
                        </div>
                        
                        <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                          {experience.description}
                        </p>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill) => (
                            <div
                              key={skill}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-700/50 rounded-lg text-sm"
                            >
                              <Icon icon={getTechIcon(skill)} className="w-4 h-4" />
                              <span className="text-neutral-700 dark:text-neutral-300">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* SECTION ÉDUCATION */}
            {activeTab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
                className="space-y-8"
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
                    className="group bg-white/80 dark:bg-neutral-800/80 rounded-2xl p-6 shadow-sm border border-neutral-900/5 dark:border-neutral-100/5 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-6">
                      {/* Logo */}
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white dark:bg-neutral-900 shadow-sm border border-neutral-900/5 dark:border-neutral-100/5 flex-shrink-0">
                        {education.isImageLogo ? (
                          <Image
                            src={education.logo}
                            alt={education.institution}
                            width={48}
                            height={48}
                            className="w-12 h-12 object-contain rounded-lg"
                          />
                        ) : (
                          <Icon icon={education.logo} className="w-8 h-8" />
                        )}
                      </div>
                      
                      {/* Contenu */}
                      <div className="flex-grow min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                              {education.title}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 font-light">
                              {education.institution}
                            </p>
                          </div>
                          <span className="text-sm text-neutral-500 dark:text-neutral-400 whitespace-nowrap flex items-center gap-1">
                            <Icon icon="lucide:calendar" className="w-4 h-4" />
                            {education.period}
                          </span>
                        </div>
                        
                        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                          {education.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* SECTION PROJETS - OPTION 1: CARDS VERTICALES MODERNES */}
            {activeTab === "projets" && (
              <motion.div
                key="projets"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {projets.map((projet, index) => {
                  const isExpanded = expandedItem === `proj-${index}`;
                  const typeBadge = projet.type ? projectTypeBadge[projet.type] : null;
                  
                  return (
                    <motion.div
                      key={projet.id}
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: shouldReduceMotion ? 0 : index * 0.1, 
                        duration: shouldReduceMotion ? 0.2 : 0.4 
                      }}
                      className="group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg border border-neutral-900/5 dark:border-neutral-100/5 hover:shadow-2xl transition-all duration-300"
                    >
                      {/* Image du projet - Grande et en haut */}
                      <div className="relative h-72 bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
                        <Image
                          src={projet.image}
                          alt={projet.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Overlay gradient pour meilleure lisibilité */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        
                        {/* Badge de type en haut à gauche */}
                        {typeBadge && (
                          <div className="absolute top-4 left-4">
                            <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-md ${typeBadge.color}`}>
                              <Icon icon={typeBadge.icon} className="w-4 h-4" />
                              {typeBadge.label}
                            </div>
                          </div>
                        )}

                        {/* Boutons d'action en overlay - Apparaissent au hover */}
                        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {projet.site && (
                            <a
                              href={projet.site}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 hover:bg-white text-neutral-900 rounded-lg transition-all text-sm font-medium shadow-lg backdrop-blur-sm"
                            >
                              <Icon icon="lucide:external-link" className="w-4 h-4" />
                              Site
                            </a>
                          )}
                          {projet.github && (
                            <a
                              href={projet.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900/95 hover:bg-neutral-900 text-white rounded-lg transition-all text-sm font-medium shadow-lg backdrop-blur-sm"
                            >
                              <Icon icon="lucide:github" className="w-4 h-4" />
                              Code
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Contenu du projet */}
                      <div className="p-6">
                        {/* Titre et rôle */}
                        <div className="mb-4">
                          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                            {projet.title}
                          </h3>
                          {projet.role && (
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-1.5">
                              <Icon icon="lucide:user-circle" className="w-4 h-4" />
                              {projet.role}
                            </p>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-5 line-clamp-3">
                          {projet.description}
                        </p>

                        {/* Technologies - Style chips compacts */}
                        <div className="mb-5">
                          <div className="flex flex-wrap gap-2">
                            {projet.tech.map((tech) => (
                              <div
                                key={tech}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-100 dark:bg-neutral-700/50 rounded-md text-xs group/tech hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                                title={tech}
                              >
                                <Icon icon={getTechIcon(tech)} className="w-4 h-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                                  {tech}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Séparateur */}
                        <div className="h-px bg-neutral-200 dark:bg-neutral-700 mb-4" />

                        {/* Bouton pour voir plus */}
                        <button
                          onClick={() => handleItemToggle(`proj-${index}`)}
                          className="w-full flex items-center justify-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors py-2"
                        >
                          <span className="font-medium">{isExpanded ? "Voir moins" : "En savoir plus"}</span>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Icon icon="lucide:chevron-down" className="w-4 h-4" />
                          </motion.div>
                        </button>

                        {/* Contenu étendu */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-6 space-y-5">
                                {/* Description détaillée */}
                                <div>
                                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2 flex items-center gap-2">
                                    <Icon icon="lucide:file-text" className="w-4 h-4" />
                                    Description détaillée
                                  </h4>
                                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    {projet.longDesc}
                                  </p>
                                </div>

                                {/* Fonctionnalités */}
                                {projet.features && projet.features.length > 0 && (
                                  <div>
                                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3 flex items-center gap-2">
                                      <Icon icon="lucide:sparkles" className="w-4 h-4" />
                                      Fonctionnalités clés
                                    </h4>
                                    <div className="space-y-2">
                                      {projet.features.map((feature, idx) => (
                                        <div
                                          key={idx}
                                          className="flex items-start gap-2 text-sm"
                                        >
                                          <Icon 
                                            icon="lucide:check-circle-2" 
                                            className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" 
                                          />
                                          <span className="text-neutral-700 dark:text-neutral-300">
                                            {feature}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Call to action */}
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