"use client";

import React, { useState, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { experiences, educations } from "@/data/education";
import { projets, type Projet } from "@/data/projets";
import { getTechIcon, projectTypeBadge } from "@/data/tech-icons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ExperiencesPageClient() {
  const [selectedProject, setSelectedProject] = useState<Projet | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const selectedProjectBadge = selectedProject?.type
    ? projectTypeBadge[selectedProject.type]
    : null;

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0.2 : 0.6 }}
      className="relative min-h-screen bg-zinc-50 dark:bg-zinc-900 pt-16"
    >
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
            {projets.map((projet, index) => {
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
                  className="group overflow-hidden rounded-lg border border-neutral-900/10 bg-white/70 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-900/20 hover:bg-white dark:border-neutral-100/10 dark:bg-neutral-900/40 dark:hover:border-neutral-100/20 dark:hover:bg-neutral-900/70"
                >
                  {/* Image */}
                  <div className="relative h-36 sm:h-44 bg-neutral-100 dark:bg-neutral-950 overflow-hidden">
                    <Image
                      src={projet.image}
                      alt={projet.title}
                      fill
                      priority={index === 0}
                      quality={72}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                    {typeBadge && (
                      <div className="absolute left-3 top-3">
                        <div
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium backdrop-blur-md ${typeBadge.color}`}
                        >
                          <Icon icon={typeBadge.icon} className="h-3.5 w-3.5" />
                          {typeBadge.label}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Contenu */}
                  <div className="flex min-h-[280px] flex-col p-4 sm:p-5">
                    <div className="mb-3">
                      <h3 className="mb-1 text-lg font-medium text-neutral-900 dark:text-neutral-100">
                        {projet.title}
                      </h3>
                      {projet.role && (
                        <p className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                          <Icon icon="lucide:user-circle" className="h-3.5 w-3.5 flex-shrink-0" />
                          {projet.role}
                        </p>
                      )}
                    </div>

                    <p className="mb-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                      {projet.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-5">
                      <div className="flex flex-wrap gap-1.5">
                        {projet.tech.slice(0, 6).map((tech) => (
                          <div
                            key={tech}
                            className="inline-flex items-center gap-1 rounded-md bg-neutral-100 px-2 py-1 text-xs dark:bg-neutral-800"
                          >
                            <Icon icon={getTechIcon(tech)} className="h-3.5 w-3.5 flex-shrink-0" />
                            <span className="font-medium text-neutral-700 dark:text-neutral-300">
                              {tech}
                            </span>
                          </div>
                        ))}
                        {projet.tech.length > 6 && (
                          <div className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                            +{projet.tech.length - 6}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-auto flex items-center gap-2 border-t border-neutral-900/10 pt-4 dark:border-neutral-100/10">
                      <button
                        onClick={() => setSelectedProject(projet)}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-neutral-100 transition-colors hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus:ring-neutral-100/20"
                      >
                        <Icon icon="lucide:panel-top-open" className="h-4 w-4" />
                        Voir les détails
                      </button>
                      {projet.site && (
                        <a
                          href={projet.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Ouvrir le site de ${projet.title}`}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-900/10 text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-100/10 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                        >
                          <Icon icon="lucide:external-link" className="h-4 w-4" />
                        </a>
                      )}
                      {projet.github && (
                        <a
                          href={projet.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Ouvrir le code de ${projet.title}`}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-900/10 text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-100/10 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                        >
                          <Icon icon="lucide:github" className="h-4 w-4" />
                        </a>
                      )}
                    </div>
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

          <div className="space-y-3 sm:space-y-4">
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
                className="group rounded-lg border border-neutral-900/10 bg-white/60 p-4 shadow-sm transition-all hover:border-neutral-900/20 hover:bg-white dark:border-neutral-100/10 dark:bg-neutral-900/40 dark:hover:border-neutral-100/20 dark:hover:bg-neutral-900/70 sm:p-5"
              >
                {/* Layout : logo + contenu */}
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Logo */}
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-neutral-900/10 bg-white shadow-sm dark:border-neutral-100/10 dark:bg-neutral-950 sm:h-14 sm:w-14">
                    {experience.isImageLogo ? (
                      <Image
                        src={experience.logo}
                        alt={experience.company}
                        width={48}
                        height={48}
                        className="h-8 w-8 rounded-md object-contain sm:h-10 sm:w-10"
                      />
                    ) : (
                      <Icon icon={experience.logo} className="h-6 w-6 sm:h-8 sm:w-8" />
                    )}
                  </div>

                  {/* Contenu */}
                  <div className="flex-grow min-w-0">
                    {/* Ligne titre / période — empilé sur mobile, côte à côte sur sm+ */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-2 sm:mb-2">
                      <div className="min-w-0">
                        <h3 className="text-base font-medium leading-snug text-neutral-900 dark:text-neutral-100 sm:text-lg">
                          {experience.title}
                        </h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light">
                          {experience.company}
                        </p>
                      </div>

                      {/* Période + localisation groupées, alignées à droite sur sm+ */}
                      <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-1 flex-shrink-0">
                        <span className="inline-flex items-center gap-1 whitespace-nowrap text-xs text-neutral-500 dark:text-neutral-400">
                          <Icon icon="lucide:calendar" className="h-3.5 w-3.5 flex-shrink-0" />
                          {experience.period}
                        </span>
                        {experience.location && (
                          <span className="inline-flex items-center gap-1 text-xs text-neutral-400 dark:text-neutral-500 whitespace-nowrap">
                            <Icon icon="lucide:map-pin" className="h-3 w-3 flex-shrink-0 sm:h-3.5 sm:w-3.5" />
                            {experience.location}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="mb-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 sm:mb-4">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5">
                      {experience.skills.map((skill) => (
                        <div
                          key={skill}
                          className="inline-flex items-center gap-1 rounded-md bg-neutral-100 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                        >
                          <Icon icon={getTechIcon(skill)} className="h-3.5 w-3.5 flex-shrink-0" />
                          <span>{skill}</span>
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

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                className="group rounded-lg border border-neutral-900/10 bg-white/60 p-4 shadow-sm transition-all hover:border-neutral-900/20 hover:bg-white dark:border-neutral-100/10 dark:bg-neutral-900/40 dark:hover:border-neutral-100/20 dark:hover:bg-neutral-900/70 sm:p-5"
              >
                {/* Mobile : horizontal / sm+ : centré vertical */}
                <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:text-center">
                  {/* Logo */}
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-neutral-900/10 bg-white shadow-sm dark:border-neutral-100/10 dark:bg-neutral-950 sm:mb-4 sm:h-16 sm:w-16">
                    {education.isImageLogo ? (
                      <Image
                        src={education.logo}
                        alt={education.institution}
                        width={56}
                        height={56}
                        className="h-9 w-9 rounded-md object-contain sm:h-12 sm:w-12"
                      />
                    ) : (
                      <Icon icon={education.logo} className="h-7 w-7 sm:h-9 sm:w-9" />
                    )}
                  </div>

                  {/* Texte */}
                  <div className="min-w-0">
                    <span className="mb-1 inline-flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                      <Icon icon="lucide:calendar" className="h-3 w-3 flex-shrink-0 sm:h-3.5 sm:w-3.5" />
                      {education.period}
                    </span>
                    <h3 className="mb-0.5 text-sm font-medium leading-snug text-neutral-900 dark:text-neutral-100 sm:mb-1 sm:text-base">
                      {education.title}
                    </h3>
                    <p className="mb-2 text-xs font-light text-neutral-600 dark:text-neutral-400 sm:mb-3 sm:text-sm">
                      {education.institution}
                    </p>
                    <p className="text-xs leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-sm">
                      {education.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <Dialog
        open={Boolean(selectedProject)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedProject(null);
          }
        }}
      >
        <DialogContent className="max-h-[92vh] w-[calc(100%-1rem)] max-w-4xl gap-0 overflow-hidden rounded-lg border-neutral-900/10 bg-white p-0 shadow-2xl dark:border-neutral-100/10 dark:bg-neutral-950 sm:w-full">
          {selectedProject && (
            <div className="max-h-[92vh] overflow-y-auto">
              <div className="border-b border-neutral-900/10 p-5 pr-14 dark:border-neutral-100/10 sm:p-6 sm:pr-16">
                <DialogHeader className="space-y-3 text-left">
                  <div className="flex flex-wrap items-center gap-2">
                    {selectedProjectBadge && (
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${selectedProjectBadge.color}`}
                      >
                        <Icon icon={selectedProjectBadge.icon} className="h-3.5 w-3.5" />
                        {selectedProjectBadge.label}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300">
                      <Icon icon="lucide:layers" className="h-3.5 w-3.5" />
                      {selectedProject.tech.length} technos
                    </span>
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl">
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {selectedProject.role ?? "Projet de développement"}
                    </DialogDescription>
                  </div>
                </DialogHeader>
              </div>

              <div className="relative h-48 bg-neutral-100 dark:bg-neutral-900 sm:h-64">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  quality={72}
                  className="object-cover"
                  sizes="(min-width: 1024px) 896px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>

              <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
                <div className="space-y-6">
                  <section>
                    <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      <Icon icon="lucide:file-text" className="h-4 w-4" />
                      Description détaillée
                    </h3>
                    <p className="text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                      {selectedProject.longDesc}
                    </p>
                  </section>

                  {selectedProject.features.length > 0 && (
                    <section>
                      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        <Icon icon="lucide:sparkles" className="h-4 w-4" />
                        Fonctionnalités clés
                      </h3>
                      <div className="grid gap-2">
                        {selectedProject.features.map((feature, index) => (
                          <div
                            key={feature}
                            className="flex items-start gap-3 rounded-lg bg-neutral-50 p-3 text-sm text-neutral-700 dark:bg-neutral-900/70 dark:text-neutral-300"
                          >
                            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-neutral-900 text-[11px] font-medium text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900">
                              {index + 1}
                            </span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                </div>

                <aside className="space-y-5">
                  <div className="rounded-lg border border-neutral-900/10 bg-neutral-50 p-4 dark:border-neutral-100/10 dark:bg-neutral-900/70">
                    <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      <Icon icon="lucide:code-2" className="h-4 w-4" />
                      Stack
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-950 dark:text-neutral-300"
                        >
                          <Icon icon={getTechIcon(tech)} className="h-3.5 w-3.5" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-neutral-900/10 bg-neutral-50 p-4 dark:border-neutral-100/10 dark:bg-neutral-900/70">
                    <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      <Icon icon="lucide:mouse-pointer-click" className="h-4 w-4" />
                      Accès
                    </h3>
                    <div className="grid gap-2">
                      {selectedProject.site && (
                        <a
                          href={selectedProject.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-neutral-100 transition-colors hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                        >
                          <Icon icon="lucide:external-link" className="h-4 w-4" />
                          Voir le site
                        </a>
                      )}
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-900/10 px-4 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-white hover:text-neutral-900 dark:border-neutral-100/10 dark:text-neutral-300 dark:hover:bg-neutral-950 dark:hover:text-neutral-100"
                        >
                          <Icon icon="lucide:github" className="h-4 w-4" />
                          Code source
                        </a>
                      )}
                    </div>
                  </div>
                </aside>
              </div>

              <DialogFooter className="sticky bottom-0 border-t border-neutral-900/10 bg-white/95 p-4 backdrop-blur dark:border-neutral-100/10 dark:bg-neutral-950/95 sm:justify-end sm:space-x-0">
                <DialogClose asChild>
                  <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-900/10 px-4 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-100/10 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-neutral-100">
                    <Icon icon="lucide:x" className="h-4 w-4" />
                    Fermer
                  </button>
                </DialogClose>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>

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
