"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Icon } from "@iconify/react"
import {
  currentSkills,
  learningSkills,
  softSkills,
  OtherSkills,
  methods,
  languages,
  skillCategories,
  type SkillCategory,
} from "@/data/skills"
import CompetencesStructuredData from "@/components/competences-structured-data"

type CurrentSkill = (typeof currentSkills)[number]
type LearningSkill = (typeof learningSkills)[number]

const categoryDescriptions: Partial<Record<SkillCategory, string>> = {
  all: "Vue complète de ma stack actuelle.",
  Frontend: "Interfaces, design systems et expériences web fluides.",
  Backend: "APIs, bases de données et architecture applicative.",
  Design: "Sens UI, prototypage et cohérence visuelle.",
  DevOps: "Déploiement, conteneurs et automatisation.",
  Logiciels: "Langages et environnements de développement.",
}

function getCategoryCount(category: SkillCategory) {
  if (category === "all") return currentSkills.length
  return currentSkills.filter((skill) => skill.category === category).length
}

function SkillCard({ skill }: { skill: CurrentSkill }) {
  return (
    <article className="group rounded-lg border border-neutral-900/10 bg-white/70 p-4 shadow-sm transition-colors hover:border-neutral-900/20 hover:bg-white dark:border-neutral-100/10 dark:bg-neutral-900/45 dark:hover:border-neutral-100/20 dark:hover:bg-neutral-900/70">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100">
            <Icon icon={skill.icon} className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-base font-medium text-neutral-900 dark:text-neutral-100">
              {skill.name}
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">{skill.category}</p>
          </div>
        </div>
        <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
          {skill.level}%
        </span>
      </div>

      <p className="min-h-10 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        {skill.description}
      </p>

      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
        <div
          className="h-full rounded-full bg-neutral-900 transition-[width] duration-700 dark:bg-neutral-100"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </article>
  )
}

function LearningCard({ skill }: { skill: LearningSkill }) {
  return (
    <article className="rounded-lg border border-neutral-900/10 bg-white/60 p-4 shadow-sm dark:border-neutral-100/10 dark:bg-neutral-900/40">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100">
          <Icon icon={skill.icon} className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-sm font-medium text-neutral-900 dark:text-neutral-100">
            {skill.name}
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">En progression</p>
        </div>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
        {skill.description}
      </p>

      <div className="flex items-center gap-3">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
          <div
            className="h-full rounded-full bg-neutral-900 dark:bg-neutral-100"
            style={{ width: `${skill.level}%` }}
          />
        </div>
        <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">{skill.level}%</span>
      </div>
    </article>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-6">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-8 bg-neutral-900/25 dark:bg-neutral-100/25" />
        <span className="text-xs font-light uppercase tracking-[0.24em] text-neutral-500 dark:text-neutral-400">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-2xl font-light tracking-tight text-neutral-900 dark:text-neutral-100">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      )}
    </div>
  )
}

export default function CompetencesPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("all")

  const filteredSkills = useMemo(() => {
    if (selectedCategory === "all") return currentSkills
    return currentSkills.filter((skill) => skill.category === selectedCategory)
  }, [selectedCategory])

  const topSkills = useMemo(
    () => [...currentSkills].sort((a, b) => b.level - a.level).slice(0, 4),
    [],
  )

  return (
    <>
      <CompetencesStructuredData />
      <main className="relative min-h-screen overflow-hidden bg-zinc-50 pt-16 dark:bg-zinc-900">
        <div className="container mx-auto max-w-7xl px-4 pb-20 sm:px-6">
          <section className="grid gap-8 py-12 md:py-20 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end lg:py-24">
            <div>
              <div className="mb-6 flex items-center sm:mb-8">
                <span className="mr-3 h-px w-6 bg-neutral-900/30 dark:bg-neutral-100/30 sm:w-8" />
                <span className="text-xs font-light uppercase tracking-widest text-neutral-900/50 dark:text-neutral-100/50 sm:text-sm">
                  Expertise
                </span>
                <span className="ml-3 h-px flex-grow bg-gradient-to-r from-neutral-900/30 to-transparent dark:from-neutral-100/30" />
              </div>

              <h1 className="max-w-3xl text-3xl font-light leading-tight tracking-tight text-neutral-900/90 dark:text-neutral-100/90 sm:text-4xl md:text-5xl lg:text-6xl">
                Compétences
              </h1>
              <p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-neutral-900/70 dark:text-neutral-100/70 sm:mt-6 sm:text-lg">
                Une lecture plus directe de ma stack: ce que j&apos;utilise aujourd&apos;hui, ce que je renforce, et
                la manière dont je structure mon travail.
              </p>
            </div>

            <aside className="rounded-lg border border-neutral-900/10 bg-white/70 p-5 shadow-sm dark:border-neutral-100/10 dark:bg-neutral-900/40">
              <p className="mb-4 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                Vue rapide
              </p>
              <dl className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-md bg-neutral-100/70 p-3 dark:bg-neutral-800/70">
                  <dt className="text-2xl font-light text-neutral-900 dark:text-neutral-100">
                    {currentSkills.length}
                  </dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Tech
                  </dd>
                </div>
                <div className="rounded-md bg-neutral-100/70 p-3 dark:bg-neutral-800/70">
                  <dt className="text-2xl font-light text-neutral-900 dark:text-neutral-100">
                    {learningSkills.length}
                  </dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    En cours
                  </dd>
                </div>
                <div className="rounded-md bg-neutral-100/70 p-3 dark:bg-neutral-800/70">
                  <dt className="text-2xl font-light text-neutral-900 dark:text-neutral-100">
                    {methods.length}
                  </dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Méthodes
                  </dd>
                </div>
              </dl>

              <div className="mt-5 space-y-3">
                {topSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between gap-3 text-sm">
                    <span className="flex min-w-0 items-center gap-2 text-neutral-700 dark:text-neutral-300">
                      <Icon icon={skill.icon} className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">{skill.name}</span>
                    </span>
                    <span className="text-neutral-500 dark:text-neutral-400">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </aside>
          </section>

          <section className="border-t border-neutral-900/10 py-10 dark:border-neutral-100/10">
            <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Stack actuelle"
                title="Compétences techniques"
                description={categoryDescriptions[selectedCategory]}
              />

              <div className="flex flex-wrap gap-2">
                {skillCategories.map((category) => {
                  const categoryId = category.id as SkillCategory
                  const selected = selectedCategory === categoryId

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setSelectedCategory(categoryId)}
                      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm transition-colors ${
                        selected
                          ? "border-neutral-900 bg-neutral-900 text-neutral-100 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900"
                          : "border-neutral-900/10 bg-white/60 text-neutral-700 hover:border-neutral-900/25 hover:bg-white dark:border-neutral-100/10 dark:bg-neutral-900/50 dark:text-neutral-300 dark:hover:border-neutral-100/25 dark:hover:bg-neutral-900"
                      }`}
                    >
                      <Icon icon={category.icon} className="h-4 w-4" />
                      {category.name}
                      <span
                        className={`rounded-full px-1.5 text-xs ${
                          selected
                            ? "bg-white/15 text-current dark:bg-black/10"
                            : "bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"
                        }`}
                      >
                        {getCategoryCount(categoryId)}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filteredSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </section>

          <section className="grid gap-8 border-t border-neutral-900/10 py-12 dark:border-neutral-100/10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.72fr)]">
            <div>
              <SectionHeading
                eyebrow="Progression"
                title="En apprentissage"
                description="Les sujets que je consolide actuellement pour élargir mon terrain de jeu technique."
              />

              <div className="grid gap-4 sm:grid-cols-2">
                {learningSkills.map((skill) => (
                  <LearningCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Approche"
                title="Méthodes de travail"
                description="Les réflexes qui comptent autant que les outils."
              />

              <div className="space-y-3">
                {methods.map((method) => (
                  <article
                    key={method.name}
                    className="flex gap-3 rounded-lg border border-neutral-900/10 bg-white/60 p-4 dark:border-neutral-100/10 dark:bg-neutral-900/45"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-neutral-100 dark:bg-neutral-800">
                      <Icon icon={method.icon} className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                        {method.name}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                        {method.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-6 border-t border-neutral-900/10 py-12 dark:border-neutral-100/10 lg:grid-cols-3">
            <div className="rounded-lg border border-neutral-900/10 bg-white/60 p-5 dark:border-neutral-100/10 dark:bg-neutral-900/45">
              <SectionHeading eyebrow="Humain" title="Soft skills" />
              <div className="space-y-3">
                {softSkills.map((skill) => (
                  <div key={skill.name} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-neutral-100 dark:bg-neutral-800">
                      <Icon icon={skill.icon} className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{skill.name}</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-neutral-900/10 bg-white/60 p-5 dark:border-neutral-100/10 dark:bg-neutral-900/45">
              <SectionHeading eyebrow="Terrain" title="Outils" />
              <div className="flex flex-wrap gap-2">
                {OtherSkills.map((tool) => (
                  <span
                    key={tool.name}
                    className="inline-flex items-center gap-2 rounded-md bg-neutral-100 px-3 py-2 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                  >
                    <Icon icon={tool.icon} className="h-4 w-4" />
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-neutral-900/10 bg-white/60 p-5 dark:border-neutral-100/10 dark:bg-neutral-900/45">
              <SectionHeading eyebrow="Langues" title="Communication" />
              <div className="space-y-3">
                {languages.map((language) => (
                  <div
                    key={language.name}
                    className="flex items-center justify-between rounded-md bg-neutral-100 px-3 py-2 dark:bg-neutral-800"
                  >
                    <span className="flex items-center gap-3 text-sm text-neutral-800 dark:text-neutral-200">
                      <Icon icon={language.flag} className="h-5 w-5" />
                      {language.name}
                    </span>
                    <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      {language.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-lg border border-neutral-900/10 bg-white/70 px-6 py-8 shadow-sm dark:border-neutral-100/10 dark:bg-neutral-900/40 md:px-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-light tracking-tight text-neutral-900 dark:text-neutral-100">Un projet qui demande cette stack ?</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                  Je peux intervenir sur l&apos;architecture, l&apos;interface, l&apos;API ou la mise en production.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex w-max items-center rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-neutral-100 transition-colors hover:bg-neutral-900/80 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-100/80"
              >
                Me contacter
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
