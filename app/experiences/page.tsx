"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { experiences, educations } from "@/data/education";
import { projets } from "@/data/projets";

export default function ExperiencesPage() {
  // Références et états
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"experiences" | "education" | "projets">("experiences");
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  // Animations au scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.6]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

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

          {/* Motif graphique sophistiqué */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
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

            {/* Points et particules */}
            <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)]">
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
          </div>
        </motion.div>
      </div>

      {/* En-tête artistique avec entrée sophistiquée */}
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div className="relative py-24 md:py-32">
          {/* Tag de section avec ligne animée */}
          <motion.div
            initial={{ opacity: 0, width: "30%" }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 1.5 }}
            className="flex items-center mb-10"
          >
            <span className="h-px w-12 bg-neutral-900/30 dark:bg-neutral-100/30 mr-4"></span>
            <span className="text-sm tracking-[0.2em] uppercase text-neutral-900/50 dark:text-neutral-100/50 font-light">Parcours</span>
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
                <span className="relative z-10">Expériences</span>
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
            Mon parcours professionnel et académique — chaque étape représente une 
            <span className="relative inline-block mx-2">
              <span className="relative z-10">aventure</span>
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 h-[1px] bg-neutral-900/30 dark:bg-neutral-100/30"
              ></motion.span>
            </span> 
            et une 
            <span className="relative inline-block mx-2">
              <span className="relative z-10">évolution</span>
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 h-[1px] bg-neutral-900/30 dark:bg-neutral-100/30"
              ></motion.span>
            </span>
            dans mon cheminement professionnel.
          </motion.p>
        </motion.div>

        {/* Navigation à onglets stylisée */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="sticky top-20 z-20 pt-5 pb-5 bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-sm border-y border-neutral-900/5 dark:border-neutral-100/5"
        >
          <div className="flex overflow-x-auto hide-scrollbar gap-5">
            <button
              onClick={() => setActiveTab("experiences")}
              className={`flex items-center whitespace-nowrap px-5 py-2 rounded-full text-sm transition-all ${
                activeTab === "experiences" 
                  ? "bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 shadow-md" 
                  : "bg-neutral-100/50 dark:bg-neutral-800/50 text-neutral-900/60 dark:text-neutral-100/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900/80 dark:hover:text-neutral-100/80"
              }`}
            >
              <Icon icon="lucide:briefcase" className="w-4 h-4 mr-2" />
              Expériences professionnelles
            </button>
            
            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center whitespace-nowrap px-5 py-2 rounded-full text-sm transition-all ${
                activeTab === "education" 
                  ? "bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 shadow-md" 
                  : "bg-neutral-100/50 dark:bg-neutral-800/50 text-neutral-900/60 dark:text-neutral-100/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900/80 dark:hover:text-neutral-100/80"
              }`}
            >
              <Icon icon="lucide:graduation-cap" className="w-4 h-4 mr-2" />
              Parcours académique
            </button>

            {/* Nouvel onglet pour les projets */}
            <button
              onClick={() => setActiveTab("projets")}
              className={`flex items-center whitespace-nowrap px-5 py-2 rounded-full text-sm transition-all ${
                activeTab === "projets" 
                  ? "bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 shadow-md" 
                  : "bg-neutral-100/50 dark:bg-neutral-800/50 text-neutral-900/60 dark:text-neutral-100/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900/80 dark:hover:text-neutral-100/80"
              }`}
            >
              <Icon icon="lucide:code" className="w-4 h-4 mr-2" />
              Projets réalisés
            </button>
          </div>
        </motion.div>

        {/* Contenu principal avec timeline artistique */}
        <div className="py-20 relative">
          {/* Ligne verticale de la timeline */}
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute left-[7px] md:left-[15px] top-0 w-[1px] h-full bg-gradient-to-b from-neutral-900/10 dark:from-neutral-100/10 via-neutral-900/20 dark:via-neutral-100/20 to-transparent"
          />
          
          <motion.svg
            className="absolute left-0 top-0 h-full w-8"
            viewBox="0 0 10 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M5,0 L5,100"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray="1 3"
              className="text-neutral-900/20 dark:text-neutral-100/20"
              style={{ pathLength }}
            />
          </motion.svg>

          <AnimatePresence mode="wait">
            {activeTab === "experiences" ? (
              <motion.div
                key="experiences"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-24 pl-8 md:pl-16"
              >
                {experiences.map((experience, index) => (
                  <motion.div
                    key={`${experience.company}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 * index, duration: 0.6 }}
                    className="relative"
                    whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                  >
                    {/* Point de timeline */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 * index, duration: 0.3, type: "spring" }}
                      className="absolute -left-10 md:-left-16 top-0 w-5 h-5 rounded-full bg-neutral-100 dark:bg-neutral-800 border-2 border-neutral-900/70 dark:border-neutral-100/70 z-10 shadow-md"
                    />

                    {/* Carte expérience */}
                    <div 
                      onClick={() => setExpandedItem(expandedItem === `exp-${index}` ? null : `exp-${index}`)}
                      className={`group p-6 md:p-8 rounded-xl relative overflow-hidden cursor-pointer transition-all duration-300
                        ${expandedItem === `exp-${index}` 
                          ? "bg-gradient-to-br from-indigo-50 to-indigo-100/50 dark:from-indigo-900/30 dark:to-indigo-800/20 shadow-lg" 
                          : "bg-white/80 dark:bg-neutral-800/80 shadow-sm hover:shadow-md"
                        }
                      `}
                    >
                      {/* Effet sur la carte au survol */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 dark:from-indigo-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        layoutId={`bg-${index}`}
                      />
                      
                      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 relative z-10">
                        {/* Logo de l'entreprise */}
                        <div className="shrink-0">
                          <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center bg-white dark:bg-neutral-900/80 shadow-sm p-3 border border-neutral-900/5 dark:border-neutral-100/5">
                            {experience.isImageLogo ? (
                              <Image
                                src={experience.logo}
                                alt={experience.company}
                                width={72}
                                height={72}
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              <Icon icon={experience.logo} className="w-10 h-10" />
                            )}
                          </div>
                        </div>
                        
                        {/* Détails de l'expérience */}
                        <div className="space-y-4 flex-grow">
                          <div>
                            <h3 className="text-xl md:text-2xl font-medium">{experience.title}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1">
                              <span className="text-lg text-neutral-900/70 dark:text-neutral-100/70">{experience.company}</span>
                              <span className="hidden sm:block text-neutral-500">•</span>
                              <span className="text-sm text-neutral-600 dark:text-neutral-400 font-light">{experience.period}</span>
                            </div>
                          </div>

                          <p className="text-neutral-700 dark:text-neutral-300 font-light line-clamp-2">{experience.description}</p>

                          {/* Stack technique */}
                          <div className="flex flex-wrap gap-2">
                            {experience.skills.map((skill) => (
                              <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                                className="px-3 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Indicateur pour voir plus */}
                        <div className="absolute top-4 right-4 md:static md:self-start">
                          <motion.div 
                            animate={{ rotate: expandedItem === `exp-${index}` ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="h-8 w-8 rounded-full bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center text-neutral-500 dark:text-neutral-300"
                          >
                            <Icon icon="lucide:chevron-down" className="w-5 h-5" />
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Contenu étendu - détails additionnels */}
                      <AnimatePresence>
                        {expandedItem === `exp-${index}` && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <motion.div 
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.1, duration: 0.3 }}
                              className="mt-8 pt-6 border-t border-neutral-900/10 dark:border-neutral-100/10"
                            >
                              <div className="prose prose-sm dark:prose-invert max-w-none">
                                <h4 className="text-lg font-medium mb-2">Compétences développées</h4>
                                <ul className="list-disc pl-4 space-y-1">
                                  {experience.skills.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                  ))}
                                </ul>
                                
                                <div className="mt-4 flex justify-end">
                                  <Link href="/contact" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline text-sm">
                                    Me contacter pour plus d'informations
                                    <Icon icon="lucide:arrow-right" className="w-4 h-4" />
                                  </Link>
                                </div>
                              </div>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : activeTab === "education" ? (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-24 pl-8 md:pl-16"
              >
                {educations.map((education, index) => (
                  <motion.div
                    key={`${education.institution}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 * index, duration: 0.6 }}
                    className="relative"
                    whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                  >
                    {/* Point de timeline éducation */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 * index, duration: 0.3, type: "spring" }}
                      className="absolute -left-10 md:-left-16 top-0 w-5 h-5 rounded-full bg-neutral-100 dark:bg-neutral-800 border-2 border-neutral-900/70 dark:border-neutral-100/70 z-10"
                    />

                    {/* Carte éducation */}
                    <div 
                      onClick={() => setExpandedItem(expandedItem === `edu-${index}` ? null : `edu-${index}`)}
                      className={`group p-6 md:p-8 rounded-xl relative overflow-hidden cursor-pointer transition-all duration-300
                        ${expandedItem === `edu-${index}` 
                          ? "bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-900/30 dark:to-amber-800/20 shadow-lg" 
                          : "bg-white/80 dark:bg-neutral-800/80 shadow-sm hover:shadow-md"
                        }
                      `}
                    >
                      {/* Effet sur la carte au survol */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-amber-500/5 dark:from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        layoutId={`bg-edu-${index}`}
                      />
                      
                      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 relative z-10">
                        {/* Logo de l'institution */}
                        <div className="shrink-0">
                          <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center bg-white dark:bg-neutral-900/80 shadow-sm p-3 border border-neutral-900/5 dark:border-neutral-100/5">
                            {education.isImageLogo ? (
                              <Image
                                src={education.logo}
                                alt={education.institution}
                                width={72}
                                height={72}
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              <Icon icon={education.logo} className="w-10 h-10" />
                            )}
                          </div>
                        </div>
                        
                        {/* Détails de l'éducation */}
                        <div className="space-y-4 flex-grow">
                          <div>
                            <h3 className="text-xl md:text-2xl font-medium">{education.title}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1">
                              <span className="text-lg text-neutral-900/70 dark:text-neutral-100/70">{education.institution}</span>
                              <span className="hidden sm:block text-neutral-500">•</span>
                              <span className="text-sm text-neutral-600 dark:text-neutral-400 font-light">{education.period}</span>
                            </div>
                          </div>

                          <p className="text-neutral-700 dark:text-neutral-300 font-light line-clamp-2">{education.description}</p>
                        </div>
                        
                        {/* Indicateur pour voir plus */}
                        <div className="absolute top-4 right-4 md:static md:self-start">
                          <motion.div 
                            animate={{ rotate: expandedItem === `edu-${index}` ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="h-8 w-8 rounded-full bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center text-neutral-500 dark:text-neutral-300"
                          >
                            <Icon icon="lucide:chevron-down" className="w-5 h-5" />
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Contenu étendu - détails additionnels */}
                      <AnimatePresence>
                        {expandedItem === `edu-${index}` && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <motion.div 
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.1, duration: 0.3 }}
                              className="mt-8 pt-6 border-t border-neutral-900/10 dark:border-neutral-100/10"
                            >
                              <div className="prose prose-sm dark:prose-invert max-w-none">
                                <h4 className="text-lg font-medium mb-2">Description du programme</h4>
                                <p>{education.description}</p>
                                
                                <div className="mt-4 flex justify-end">
                                  <Link href="/contact" className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:underline text-sm">
                                    Me contacter pour plus d'informations
                                    <Icon icon="lucide:arrow-right" className="w-4 h-4" />
                                  </Link>
                                </div>
                              </div>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              // Nouvel onglet Projets
              <motion.div
                key="projets"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-24 pl-8 md:pl-16"
              >
                {projets.map((projet, index) => (
                  <motion.div
                    key={`${projet.id}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 * index, duration: 0.6 }}
                    className="relative"
                    whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                  >
                    {/* Point de timeline projet */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 * index, duration: 0.3, type: "spring" }}
                      className="absolute -left-10 md:-left-16 top-0 w-5 h-5 rounded-full bg-neutral-100 dark:bg-neutral-800 border-2 border-emerald-500/70 dark:border-emerald-400/70 z-10 shadow-md"
                    />

                    {/* Carte projet */}
                    <div 
                      onClick={() => setExpandedItem(expandedItem === `proj-${index}` ? null : `proj-${index}`)}
                      className={`group p-6 md:p-8 rounded-xl relative overflow-hidden cursor-pointer transition-all duration-300
                        ${expandedItem === `proj-${index}` 
                          ? "bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-900/30 dark:to-emerald-800/20 shadow-lg" 
                          : "bg-white/80 dark:bg-neutral-800/80 shadow-sm hover:shadow-md"
                        }
                      `}
                    >
                      {/* Effet sur la carte au survol */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 dark:from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        layoutId={`bg-proj-${index}`}
                      />
                      
                      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 relative z-10">
                        {/* Image du projet */}
                        <div className="shrink-0">
                          <div className="w-16 h-16 md:w-24 md:h-24 rounded-xl flex items-center justify-center bg-white dark:bg-neutral-900/80 shadow-sm p-1 border border-neutral-900/5 dark:border-neutral-100/5 overflow-hidden">
                            <Image
                              src={projet.image}
                              alt={projet.title}
                              width={120}
                              height={120}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                        </div>
                        
                        {/* Détails du projet */}
                        <div className="space-y-4 flex-grow">
                          <div>
                            <div className="flex items-center gap-3">
                              <h3 className="text-xl md:text-2xl font-medium">{projet.title}</h3>
                              {projet.type && (
                                <span className={`
                                  px-3 py-1 text-xs rounded-full 
                                  ${projet.type === "web" ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-800/30 dark:text-emerald-200" : ""}
                                  ${projet.type === "mobile" ? "bg-violet-100 text-violet-800 dark:bg-violet-800/30 dark:text-violet-200" : ""}
                                  ${projet.type === "desktop" ? "bg-sky-100 text-sky-800 dark:bg-sky-800/30 dark:text-sky-200" : ""}
                                  ${projet.type === "jeu" ? "bg-amber-100 text-amber-800 dark:bg-amber-800/30 dark:text-amber-200" : ""}
                                  ${projet.type === "IA" ? "bg-rose-100 text-rose-800 dark:bg-rose-800/30 dark:text-rose-200" : ""}
                                  ${projet.type === "3D" ? "bg-indigo-100 text-indigo-800 dark:bg-indigo-800/30 dark:text-indigo-200" : ""}
                                `}
                                >
                                  {projet.type}
                                </span>
                              )}
                            </div>
                            {projet.role && (
                              <div className="mt-1">
                                <span className="text-sm text-neutral-600 dark:text-neutral-400 font-light">{projet.role}</span>
                              </div>
                            )}
                          </div>

                          <p className="text-neutral-700 dark:text-neutral-300 font-light line-clamp-2">{projet.description}</p>

                          {/* Technologies utilisées */}
                          <div className="flex flex-wrap gap-2">
                            {projet.tech.map((tech) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                                className="px-3 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Indicateur pour voir plus */}
                        <div className="absolute top-4 right-4 md:static md:self-start">
                          <motion.div 
                            animate={{ rotate: expandedItem === `proj-${index}` ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="h-8 w-8 rounded-full bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center text-neutral-500 dark:text-neutral-300"
                          >
                            <Icon icon="lucide:chevron-down" className="w-5 h-5" />
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Contenu étendu - détails additionnels */}
                    <AnimatePresence>
                        {expandedItem === `proj-${index}` && (
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <motion.div 
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1, duration: 0.3 }}
                                    className="mt-8 pt-6 border-t border-neutral-900/10 dark:border-neutral-100/10"
                                >
                                    <div className="prose prose-sm dark:prose-invert max-w-none">
                                        <h4 className="text-lg font-medium mb-2">Description détaillée</h4>
                                        <p>{projet.longDesc}</p>
                                        
                                        <h4 className="text-lg font-medium mt-4 mb-2">Fonctionnalités principales</h4>
                                        <ul className="list-disc pl-4 space-y-1">
                                            {projet.features.map((feature) => (
                                                <li key={feature}>{feature}</li>
                                            ))}
                                        </ul>
                                        
                                        <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                            {projet.github ? (
                                                <a 
                                                    href={projet.github} 
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <Icon icon="lucide:github" className="w-5 h-5" />
                                                    Voir sur GitHub
                                                </a>
                                            ) : (
                                                <span className="text-neutral-500 dark:text-neutral-400 text-sm italic">
                                                    Code source privé
                                                </span>
                                            )}
                                            
                                            <Link 
                                                href="/contact" 
                                                className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline text-sm"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                Plus d'informations
                                                <Icon icon="lucide:arrow-right" className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
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
      
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="border-t border-neutral-900/10 dark:border-neutral-100/10 py-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-xl mx-auto text-center"
            >
              <h3 className="text-2xl font-light mb-5">Envie de travailler ensemble ?</h3>
              <p className="text-neutral-900/60 dark:text-neutral-100/60 mb-8">
                Je suis actuellement à la recherche d'une alternance pour mettre en pratique mes compétences.
              </p>
              
              <Link href="/contact" passHref>
                <motion.a 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 rounded-full group hover:bg-neutral-900/80 dark:hover:bg-neutral-100/80 transition-all"
                >
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </Link>
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
      </motion.div>
    );
}