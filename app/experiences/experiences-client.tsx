"use client";

import React, { useState, useRef, useCallback, useMemo } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useReducedMotion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { experiences, educations } from "@/data/education";
import { projets } from "@/data/projets";
import { getTechIcon, projectTypeBadge } from "@/data/tech-icons";

export default function ExperiencesPageClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

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

  const handleItemToggle = useCallback((itemId: string) => {
    setExpandedItem((prev) => (prev === itemId ? null : itemId));
  }, []);

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: shouldReduceMotion ? 0.2 : 0.6,
          staggerChildren: shouldReduceMotion ? 0 : 0.1,
        },
      },
    }),
    [shouldReduceMotion]
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: shouldReduceMotion ? 0.2 : 0.4 },
      },
    }),
    [shouldReduceMotion]
  );

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0.2 : 0.6 }}
      className="relative min-h-screen bg-zinc-50 dark:bg-zinc-900 overflow-hidden pt-16"
    >
      {/* Fond simplifié */}
      {!shouldReduceMotion && (
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <motion.div
            style={{ opacity: backgroundOpacity, y: backgroundY }}
            className="absolute inset-0"
          >
            <div className="absolute right-[-10%] top-[-5%] w-[60vw] h-[60vw] sm:w-[40vw] sm:h-[40vw] rounded-full bg-gradient-to-tr from-neutral-200/20 dark:from-neutral-800/20 to-transparent blur-2xl" />
            <div className="absolute left-[-15%] bottom-[20%] w-[70vw] h-[70vw] sm:w-[50vw] sm:h-[50vw] rounded-full bg-gradient-to-bl from-neutral-100/15 dark:from-neutral-800/15 to-transparent blur-2xl" />
          </motion.div>
        </div>
      )}

      {/* En-tête */}
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative py-12 md:py-20 lg:py-24"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center mb-6 sm:mb-8"
          >
            <span className="h-px w-6 sm:w-8 bg-neutral-900/30 dark:bg-neutral-100/30 mr-3" />
            <span className="text-xs sm:text-sm tracking-widest uppercase text-neutral-900/50 dark:text-neutral-100/50 font-light">
              Parcours
            </span>
            <span className="h-px flex-grow bg-gradient-to-r from-neutral-900/30 dark:from-neutral-100/30 to-transparent ml-3" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-neutral-900/90 dark:text-neutral-100/90 mb-4 sm:mb-6"
          >
            Projets, Expériences
            <br />
            <span className="text-neutral-500 dark:text-neutral-400">
              &amp; Formation
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base sm:text-lg font-light text-neutral-900/70 dark:text-neutral-100/70 leading-relaxed"
          >
            Mon parcours professionnel et académique — chaque étape représente
            une évolution dans mon cheminement professionnel.
          </motion.p>
        </motion.div>

        {/* ─── SECTION PROJETS ─── */}
        <section className="pb-16 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.4, delay: 0.2 }}
            className="flex items-center mb-8 sm:mb-10"
          >
            <span className="h-px w-6 sm:w-8 bg-neutral-900/30 dark:bg-neutral-100/30 mr-3" />
            <span className="text-xs sm:text-sm tracking-widest uppercase text-neutral-900/50 dark:text-neutral-100/50 font-light">
              Projets
            </span>
            <span className="h-px flex-grow bg-gradient-to-r from-neutral-900/30 dark:from-neutral-100/30 to-transparent ml-3" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projets.map((projet, index) => {
              const isExpanded = expandedItem === `proj-${index}`;
              const typeBadge = projet.type ? projectTypeBadge[projet.type] : null;

              return (
                <motion.div
                  key={projet.id}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : index * 0.1 + 0.3,
                    duration: shouldReduceMotion ? 0.2 : 0.4,
                  }}
                  className="group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-sm border border-neutral-900/5 dark:border-neutral-100/5 hover:shadow-lg transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-44 sm:h-52 md:h-56 bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
                    <Image
                      src={projet.image}
                      alt={projet.title}
                      fill
                      priority={index === 0}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {typeBadge && (
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                        <div
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium backdrop-blur-md ${typeBadge.color}`}
                        >
                          <Icon icon={typeBadge.icon} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          {typeBadge.label}
                        </div>
                      </div>
                    )}

                    {/* Liens — toujours visibles sur mobile, hover sur desktop */}
                    <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex gap-2 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                      {projet.site && (
                        <a
                          href={projet.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/95 hover:bg-white text-neutral-900 rounded-lg transition-all text-xs sm:text-sm font-medium shadow-lg backdrop-blur-sm"
                        >
                          <Icon icon="lucide:external-link" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          <span className="hidden xs:inline">Site</span>
                        </a>
                      )}
                      {projet.github && (
                        <a
                          href={projet.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-neutral-900/95 hover:bg-neutral-900 text-white rounded-lg transition-all text-xs sm:text-sm font-medium shadow-lg backdrop-blur-sm"
                        >
                          <Icon icon="lucide:github" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          <span className="hidden xs:inline">Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-4 sm:p-6">
                    <div className="mb-4">
                      <h3 className="text-lg sm:text-xl font-medium text-neutral-900 dark:text-neutral-100 mb-1.5">
                        {projet.title}
                      </h3>
                      {projet.role && (
                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-1.5">
                          <Icon icon="lucide:user-circle" className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                          {projet.role}
                        </p>
                      )}
                    </div>

                    <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4 sm:mb-5">
                      {projet.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4 sm:mb-5">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {projet.tech.map((tech) => (
                          <div
                            key={tech}
                            className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-2.5 bg-neutral-100 dark:bg-neutral-700/50 rounded-md text-xs"
                          >
                            <Icon icon={getTechIcon(tech)} className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                            <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="h-px bg-neutral-200 dark:bg-neutral-700 mb-3 sm:mb-4" />

                    {/* Toggle */}
                    <button
                      onClick={() => handleItemToggle(`proj-${index}`)}
                      className="w-full flex items-center justify-center gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors py-1.5 sm:py-2"
                    >
                      <span className="font-medium">
                        {isExpanded ? "Voir moins" : "En savoir plus"}
                      </span>
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
                          <div className="pt-5 sm:pt-6 space-y-4 sm:space-y-5">
                            <div>
                              <h4 className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2 flex items-center gap-2">
                                <Icon icon="lucide:file-text" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                Description détaillée
                              </h4>
                              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                {projet.longDesc}
                              </p>
                            </div>

                            {projet.features && projet.features.length > 0 && (
                              <div>
                                <h4 className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2 sm:mb-3 flex items-center gap-2">
                                  <Icon icon="lucide:sparkles" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                  Fonctionnalités clés
                                </h4>
                                <div className="space-y-1.5 sm:space-y-2">
                                  {projet.features.map((feature, idx) => (
                                    <div
                                      key={idx}
                                      className="flex items-start gap-2 text-xs sm:text-sm"
                                    >
                                      <Icon
                                        icon="lucide:check-circle-2"
                                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-600 dark:text-neutral-400 flex-shrink-0 mt-0.5"
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
          </div>
        </section>

        {/* ─── SECTION EXPÉRIENCES ─── */}
        <section className="pb-16 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.4 }}
            className="flex items-center mb-8 sm:mb-10"
          >
            <span className="h-px w-6 sm:w-8 bg-neutral-900/30 dark:bg-neutral-100/30 mr-3" />
            <span className="text-xs sm:text-sm tracking-widest uppercase text-neutral-900/50 dark:text-neutral-100/50 font-light">
              Expériences
            </span>
            <span className="h-px flex-grow bg-gradient-to-r from-neutral-900/30 dark:from-neutral-100/30 to-transparent ml-3" />
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                  duration: shouldReduceMotion ? 0.2 : 0.4,
                }}
                className="group bg-white/80 dark:bg-neutral-800/80 rounded-2xl p-4 sm:p-6 shadow-sm border border-neutral-900/5 dark:border-neutral-100/5 hover:shadow-md transition-all"
              >
                {/* Layout : logo + contenu */}
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Logo */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center bg-white dark:bg-neutral-900 shadow-sm border border-neutral-900/5 dark:border-neutral-100/5 flex-shrink-0">
                    {experience.isImageLogo ? (
                      <Image
                        src={experience.logo}
                        alt={experience.company}
                        width={48}
                        height={48}
                        className="w-8 h-8 sm:w-12 sm:h-12 object-contain rounded-lg"
                      />
                    ) : (
                      <Icon icon={experience.logo} className="w-6 h-6 sm:w-8 sm:h-8" />
                    )}
                  </div>

                  {/* Contenu */}
                  <div className="flex-grow min-w-0">
                    {/* Ligne titre / période — empilé sur mobile, côte à côte sur sm+ */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-2 sm:mb-2">
                      <div className="min-w-0">
                        <h3 className="text-base sm:text-xl font-medium text-neutral-900 dark:text-neutral-100 leading-snug">
                          {experience.title}
                        </h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light">
                          {experience.company}
                        </p>
                      </div>

                      {/* Période + localisation groupées, alignées à droite sur sm+ */}
                      <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-1 flex-shrink-0">
                        <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
                          <Icon icon="lucide:calendar" className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                          {experience.period}
                        </span>
                        {experience.location && (
                          <span className="inline-flex items-center gap-1 text-xs text-neutral-400 dark:text-neutral-500 whitespace-nowrap">
                            <Icon icon="lucide:map-pin" className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                            {experience.location}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 mb-3 sm:mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {experience.skills.map((skill) => (
                        <div
                          key={skill}
                          className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-neutral-100 dark:bg-neutral-700/50 rounded-lg text-xs sm:text-sm"
                        >
                          <Icon icon={getTechIcon(skill)} className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="text-neutral-700 dark:text-neutral-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── SECTION FORMATION ─── */}
        <section className="pb-16 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.4 }}
            className="flex items-center mb-8 sm:mb-10"
          >
            <span className="h-px w-6 sm:w-8 bg-neutral-900/30 dark:bg-neutral-100/30 mr-3" />
            <span className="text-xs sm:text-sm tracking-widest uppercase text-neutral-900/50 dark:text-neutral-100/50 font-light">
              Formation
            </span>
            <span className="h-px flex-grow bg-gradient-to-r from-neutral-900/30 dark:from-neutral-100/30 to-transparent ml-3" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {educations.map((education, index) => (
              <motion.div
                key={education.institution}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                  duration: shouldReduceMotion ? 0.2 : 0.4,
                }}
                className="group bg-white/80 dark:bg-neutral-800/80 rounded-2xl p-5 sm:p-6 shadow-sm border border-neutral-900/5 dark:border-neutral-100/5 hover:shadow-md transition-all"
              >
                {/* Mobile : horizontal / sm+ : centré vertical */}
                <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:text-center">
                  {/* Logo */}
                  <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center bg-white dark:bg-neutral-900 shadow-sm border border-neutral-900/5 dark:border-neutral-100/5 flex-shrink-0 sm:mb-4 sm:mb-5">
                    {education.isImageLogo ? (
                      <Image
                        src={education.logo}
                        alt={education.institution}
                        width={56}
                        height={56}
                        className="w-10 h-10 sm:w-14 sm:h-14 object-contain rounded-lg"
                      />
                    ) : (
                      <Icon icon={education.logo} className="w-8 h-8 sm:w-10 sm:h-10" />
                    )}
                  </div>

                  {/* Texte */}
                  <div className="min-w-0">
                    <span className="inline-flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                      <Icon icon="lucide:calendar" className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                      {education.period}
                    </span>
                    <h3 className="text-sm sm:text-base lg:text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-0.5 sm:mb-1 leading-snug">
                      {education.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-light mb-2 sm:mb-3">
                      {education.institution}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {education.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Call to action */}
      <div className="border-t border-neutral-900/10 dark:border-neutral-100/10 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.4 }}
            className="max-w-xl mx-auto text-center"
          >
            <h3 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4 text-neutral-900 dark:text-neutral-100">
              Envie de travailler ensemble ?
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-5 sm:mb-6">
              Je suis actuellement à la recherche d'une alternance pour mettre
              en pratique mes compétences.
            </p>

            <Link href="/contact">
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors text-sm sm:text-base"
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