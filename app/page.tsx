"use client"

import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Twitter, Facebook, Linkedin } from "lucide-react"
import { Icon } from '@iconify/react'
import ProjectCard from "@/components/project-card"
import { motion } from "framer-motion"
import SkillCard from "@/components/skill-card"
import ExperienceCard from "@/components/experience-card"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useState } from "react"
import SkillsSection from "@/components/skill-card"

gsap.registerPlugin(ScrollTrigger)

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}


export default function Home() {
  useEffect(() => {
    // GSAP Animations
    gsap.from(".hero-text", {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "power4.out",
    })

    gsap.from(".skill-card", {
      scrollTrigger: {
        trigger: ".skills-section",
        start: "top center",
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.1,
      ease: "power3.out",
    })
  }, [])
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
<motion.header
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="fixed top-0 left-0 right-0 bg-white z-50 border-b"
>
  <div className="container mx-auto px-4 py-6">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <Image src="/neptune.svg" alt="CisseMamadou Logo" width={32} height={32} className="rounded-full" />
        <span className="text-xl font-semibold">CisseMamadou</span>
      </a>
    </div>

      {/* Menu burger pour mobile */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Menu navigation desktop */}
      <nav className="hidden md:flex items-center gap-8">
        {["about", "skills", "experience", "projects", "contact"].map((item) => (
          <motion.a
            key={item}
            whileHover={{ scale: 1.05 }}
            href={`#${item}`}
            className="text-base font-bold hover:text-gray-600"
          >
            {/* Capitaliser le texte affiché */}
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </motion.a>
        ))}
      </nav>

      {/* Menu mobile */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden"
        >
          <div className="flex flex-col items-center py-4">
            {["about", "skills", "experience", "projects", "contact"].map((item) => (
              <motion.a
                key={item}
                whileHover={{ scale: 1.05 }}
                href={`#${item}`}
                className="py-2 text-base font-bold hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {/* Capitaliser le texte affiché */}
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-2 bg-black text-white rounded-none hover:bg-black/90 transition-colors"
      >
        Mon CV ↓
      </motion.button>
    </div>
  </div>
</motion.header>


      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-6xl font-bold leading-tight">
                Salut,  Je suis
                <br />
                Cisse Mamadou.
              </h1>
              <div className="space-y-2">
              <p className="text-6xl font-bold inline-block">
                  <span className="bg-black text-white px-2">Developpeur</span>
                </p>
                <p className="text-6xl font-bold">FullStack</p>
              </div>
              <h2 className="text-6xl font-bold">Etudiant en BUT</h2>
            </div>

            <p className="text-gray-600 text-lg max-w-xl">
              Activement à la recherche d'une alternance, je me spécialise dans la réalisation d'applications avec une orientation backend et DevOps. 
              Côté développement, JavaScript est mon arme de choix… parce qu'avec son écosystème infini de frameworks et 
              ses mises à jour tous les deux jours, qui a besoin de stabilité? 😏
            </p>

            <div className="flex gap-4">
              <motion.a
                href="https://github.com/Neptune2k21"
                whileHover={{ backgroundColor: "#000", color: "#fff" }}
                className="p-4 border-2 border-black"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mamadou-lamine-ciss%C3%A9/"
                whileHover={{ backgroundColor: "#000", color: "#fff" }}
                className="p-4 border-2 border-black"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://discord.com/users/neptune2k21"
                whileHover={{ backgroundColor: "#000", color: "#fff" }}
                className="p-4 border-2 border-black"
              >
                <Icon icon="mdi:discord" className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[600px]"
          >
            <Image
              src="/Coding 9.svg"
              alt="Developer Illustration"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
{/* About Section */}
<section id="about" className="py-32 bg-white relative">
  {/* Animated background patterns */}
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      animate={{
        rotate: [0, 360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-50 to-blue-50 rounded-full opacity-30"
    />
    <motion.div
      animate={{
        rotate: [360, 0],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute -bottom-1/2 -left-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-orange-50 to-rose-50 rounded-full opacity-30"
    />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Découvrez mon univers</span>
          <h2 className="text-6xl font-bold mt-4 mb-6">
            A Propos de {" "}
            <span className="relative inline-block px-6">
              Moi
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-0 left-0 h-3 bg-black/10 -z-10"
              />
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Column - Story */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Timeline items */}
          {/* Timeline items */}
          <motion.div variants={item} className="relative flex gap-8 group">
            <div className="relative">
              <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center text-2xl transform group-hover:rotate-12 transition-transform duration-300">
                💡
              </div>
              <div className="absolute top-full left-1/2 w-1 h-12 bg-black/10 transform -translate-x-1/2 mt-4" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Vision Technique</h3>
              <p className="text-gray-600 leading-relaxed">
                Ma stack technique s'articule autour des technologies modernes : Next.js, TypeScript, NestJS. 
                Je crée des applications performantes et évolutives avec une attention particulière à la qualité du code.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="relative flex gap-8 group">
            <div className="relative">
              <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center text-2xl transform group-hover:rotate-12 transition-transform duration-300">
                🎯
              </div>
              <div className="absolute top-full left-1/2 w-1 h-12 bg-black/10 transform -translate-x-1/2 mt-4" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Objectifs</h3>
              <p className="text-gray-600 leading-relaxed">
                En quête perpétuelle d'innovation, je cherche à développer mes compétences à travers une alternance 
                et contribuer activement à des projets ambitieux dans le développement web.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="flex gap-8 group">
            <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center text-2xl transform group-hover:rotate-12 transition-transform duration-300">
              🎮
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Hobbie</h3>
              <p className="text-gray-600 leading-relaxed">
              Passionné de jeux compétitifs, notamment FIFA Ultimate Team. Ce mode m'a appris à élaborer des stratégies efficaces, à optimiser mes ressources pour construire la meilleure équipe et à faire preuve de persévérance face aux défis.
              </p>
            </div>
          </motion.div>


        </motion.div>

        {/* Right Column - Stats & Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="sticky top-32">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.06)] hover:shadow-[0_0_50px_rgba(0,0,0,0.1)] transition-shadow"
              >
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-gray-600">Technologies Maîtrisées</div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.06)] hover:shadow-[0_0_50px_rgba(0,0,0,0.1)] transition-shadow"
              >
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-gray-600">Projets Académiques</div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.06)] hover:shadow-[0_0_50px_rgba(0,0,0,0.1)] transition-shadow"
              >
                <div className="text-4xl font-bold mb-2">300+</div>
                <div className="text-gray-600">Heures de Code</div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.06)] hover:shadow-[0_0_50px_rgba(0,0,0,0.1)] transition-shadow"
              >
                <div className="text-4xl font-bold mb-2">2</div>
                <div className="text-gray-600">Stages Réalisés</div>
              </motion.div>
            </div>

            {/* Profile Image with Effects */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <Image
                src="/Rocket Boy.svg"
                alt="About me illustration"
                width={600}
                height={700}
                className="object-cover"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 flex justify-center gap-6"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="px-8 py-4 bg-black text-white font-medium rounded-xl hover:shadow-xl transition-shadow"
        >
          Parlons de votre projet →
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/cv.pdf"
          className="px-8 py-4 border-2 border-black font-medium rounded-xl hover:bg-black hover:text-white transition-colors"
        >
          Télécharger mon CV
        </motion.a>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* Skills Section */}
      
      <SkillsSection />
      
      {/* Experience Section */}
      {/* Experience Section */}
{/* Experience Section */}
<section id="experience" className="py-32 bg-white relative overflow-hidden">
  {/* Animated Background */}
  <div className="absolute inset-0 -z-10">
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 45, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute -right-1/4 top-0 w-[600px] h-[600px] bg-gradient-to-br from-gray-50 to-blue-50 rounded-full opacity-30 blur-3xl"
    />
  </div>

  <div className="container mx-auto px-4">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Mon parcours</span>
      <h2 className="text-5xl font-bold mt-4">
        Expériences &{" "}
        <span className="relative inline-block">
          Formation
          <motion.div
            className="absolute bottom-0 left-0 h-2 bg-black/10 w-full -z-10"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </span>
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
      {/* Expériences Professionnelles */}
      <div>
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Icon icon="carbon:development" className="w-6 h-6" />
          Expériences
        </h3>

        <div className="space-y-8">
          {/* Davi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white p-6 rounded-xl border-2 border-black/5 hover:border-black/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-black/5 rounded-lg group-hover:bg-black/10 transition-colors">
                  <Image
                    src="/davi_thehumanizers_logo.jpeg"
                    alt="Davi Logo"
                    width={40}
                    height={40}
                    className="rounded-md"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Stage Développeur FullStack</h4>
                  <p className="text-gray-500">Davi The Humanizers</p>
                  <p className="text-sm text-gray-400">Jan 2025 - Mars 2025</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">Développement web et déploiement d'applications</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2 py-1 text-sm bg-gray-100 rounded-md">Next.js</span>
                  <span className="px-2 py-1 text-sm bg-gray-100 rounded-md">TypeScript</span>
                  <span className="px-2 py-1 text-sm bg-gray-100 rounded-md">Docker</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* McDonald's */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white p-6 rounded-xl border-2 border-black/5 hover:border-black/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-black/5 rounded-lg group-hover:bg-black/10 transition-colors">
                  <Image
                    src="/mcdonald-s-5.svg"
                    alt="McDonald's Logo"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Équipier Polyvalent</h4>
                  <p className="text-gray-500">McDonald's</p>
                  <p className="text-sm text-gray-400">Avril 2024 - Aujourd'hui</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">Développement de compétences transversales</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2 py-1 text-sm bg-gray-100 rounded-md">Travail d'équipe</span>
                  <span className="px-2 py-1 text-sm bg-gray-100 rounded-md">Gestion du temps</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Formation & Certifications */}
      <div>
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Icon icon="carbon:certificate" className="w-6 h-6" />
          Formation & Certifications
        </h3>

        <div className="space-y-8">
          {/* BUT Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white p-6 rounded-xl border-2 border-black/5 hover:border-black/20 transition-colors">
              <div className="flex items-start gap-4">
              <div className="p-3 bg-black/5 rounded-lg group-hover:bg-black/10 transition-colors">
                  <Image
                  src="/IUT-DIJON.png"
                  alt="IUT Logo" 
                  width={40}
                  height={40}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">BUT Informatique</h4>
                  <p className="text-gray-500">IUT de Dijon</p>
                  <p className="text-sm text-gray-400">2023 - Aujourd'hui</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">Formation approfondie en développement et conception logicielle</p>
            </div>
          </motion.div>

          {/* BTS SIO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white p-6 rounded-xl border-2 border-black/5 hover:border-black/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-black/5 rounded-lg group-hover:bg-black/10 transition-colors">
                  <Image
                  src="/estiam.png"
                  alt="ESTIAM Logo" 
                  width={40}
                  height={40}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">BTS SIO</h4>
                  <p className="text-gray-500">ESTIAM Paris</p>
                  <p className="text-sm text-gray-400">2021 - 2023</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600" >Introduction a l’algorithmique, la gestion de projet, la sécurité informatique et la communication professionnelle.</p>
            </div>
          </motion.div>

          {/* CCNA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white p-6 rounded-xl border-2 border-black/5 hover:border-black/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-black/5 rounded-lg group-hover:bg-black/10 transition-colors">
                  <Icon icon="simple-icons:cisco" className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Certification CCNA1</h4>
                  <p className="text-gray-500">Cisco</p>
                  <p className="text-sm text-gray-400">2023</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">Fondamentaux des réseaux informatiques</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-16 text-center"
          >
            My Projects
          </motion.h2>
          <div className="space-y-20">
            <ProjectCard
              number="01"
              title="Quizzine - (Une plateforme de quiz interactive"
              description="Quizzine est une plateforme de quiz en ligne où les utilisateurs peuvent créer, partager et jouer à des quiz interactifs. Les utilisateurs peuvent s'inscrire, créer des quiz personnalisés, jouer à des quiz créés par d'autres utilisateurs et consulter leur score en temps réel."
              image="/quizzine.png"
              align="right"
              href="/projects/crypto-screener"
            />
            <ProjectCard
              number="02"
              title="Une application C# inspirée du jeu Cookie Clicker"
              description="Le projet Cookie Clicker est une application WPF interactive où les joueurs cliquent sur un cookie géant pour produire des cookies virtuels. Le but est de produire le plus de cookies possible en achetant des améliorations et des automates qui augmentent le nombre de cookies générés par seconde.Il est inspiré du jeu Cookie Clicker de Orteil."
              image="/cookieClicker.png"
              align="left"
              href="/projects/ecommerce-template"
            />
            <ProjectCard
              number="03"
              title="Dungeon Forge - Générateur de Donjons et Aventures"
              description="Dungeon Forge est une application qui permet de générer aléatoirement des donjons en combinant des labyrinthes parfaits (sans boucle) et imparfaits (avec des chemins multiples et impasses). L'objectif est de proposer une expérience dynamique où des groupes d’aventuriers sont envoyés dans ces donjons pour affronter des monstres, résoudre des énigmes et récolter des trésors."
              image="/donjon.png"
              align="right"
              href="/projects/blog-template"
            />
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Contact Me
          </motion.h2>
          {/*Background Illustration*/}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.form
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 bg-gray-50 p-8 border-2 border-black"
            >
              <h3 className="text-2xl font-bold mb-6">Envoi moi un message </h3>
              <Input 
                placeholder="Votre Nom" 
                className="rounded-none border-2 border-black focus:ring-black bg-white" 
              />
              <Input 
                placeholder="Votre Email" 
                type="email" 
                className="rounded-none border-2 border-black focus:ring-black bg-white" 
              />
              <Input
                placeholder="Objet"
                className="rounded-none border-2 border-black focus:ring-black bg-white"
              />
              <Textarea
                placeholder="Votre message*"
                className="rounded-none border-2 border-black min-h-[150px] focus:ring-black bg-white"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-black text-white text-lg font-bold hover:bg-black/90 transition-all"
              >
                Envoyer ➜
              </motion.button>
              <div className="flex justify-center gap-6 pt-4">
                <motion.a
                  href="#"
                  whileHover={{ y: -3 }}
                  className="p-3 border-2 border-black hover:bg-black hover:text-white transition-all"
                >
                  <Facebook className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -3 }}
                  className="p-3 border-2 border-black hover:bg-black hover:text-white transition-all"
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -3 }}
                  className="p-3 border-2 border-black hover:bg-black hover:text-white transition-all"
                >
                  <Twitter className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -3 }}
                  className="p-3 border-2 border-black hover:bg-black hover:text-white transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.form>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
            <h2 className="text-5xl font-bold mb-8">
              Discutons de{" "}
              <span className="relative inline-block">
                <span className="bg-black text-white px-4 py-1">votre</span>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-black/10"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                />
              </span>{" "}
              <br />
              <span className="relative inline-block">
                prochain projet
                <motion.div
                  className="absolute -z-10 bottom-2 left-0 w-full h-3 bg-black/10"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-black/60"
              >
                ensemble
              </motion.span>
            </h2>
              <p className="text-gray-600 mb-12 text-lg">
              Je suis toujours disposé à échanger sur des projets et à discuter de technologies. N'hésitez pas à me contacter pour en parler !
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 border-2 border-black">
                    <motion.div whileHover={{ rotate: 15 }}>
                    <a href="mailto:mamadoulcisse9236@gmail.com">
                      📧
                    </a>
                    </motion.div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Envoyer un mail à </p>
                    <p className="text-lg font-bold">mamadoulcisse9236@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 border-2 border-black">
                    <motion.div whileHover={{ rotate: 15 }}>
                    <a href="tel:+33749712283">
                      📞
                    </a>
                    </motion.div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Appelez-moi au. </p>
                    <p className="text-lg font-bold">+33 7 49 71 22 83</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 fixed bottom-0 left-0 right-0 bg-black text-white py-6 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/neptune.svg" alt="CisseMamadou Logo" width={32} height={32} className="rounded-full" />
            <span className="text-xl"></span>
          </div>
          <div className="flex items-center gap-4">
            <span>© 2025 Cisse Mamadou</span>
            <span>Tout droit reservé</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

