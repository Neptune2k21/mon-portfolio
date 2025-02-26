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
import { ScrollTrigger, } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useState } from "react"
import SkillsSection from "@/components/skill-card"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin);
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
  const projects = [
    {
      title: "Quizzine",
      category: "01 / FULLSTACK",
      description: "Une plateforme moderne permettant aux utilisateurs de créer et partager des quiz interactifs.",
      image: "/quizzine.png",
      href: "https://github.com/BUSCH-Leo/SAE-S3-2024-2025-site-de-quizz",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Cookie Clicker",
      category: "02 / DESKTOP",
      description: "Application WPF interactive inspirée du célèbre jeu Cookie Clicker.",
      image: "/cookieClicker.png",
      href: "https://github.com/4keezix/SAE_DEV_CookieClicker",
      technologies: ["C#", "WPF"],
    },
    {
      title: "Dungeon Forge",
      category: "03 / GAME DEV",
      description: "Générateur procédural de donjons combinant des algorithmes de création de labyrinthes.",
      image: "/donjon.png",
      href: "https://github.com/Neptune2k21/BUT1-S2.02",
      technologies: ["Unity", "C#", "Algorithmes"],
    },
  ];
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
    <motion.div 
  className="flex items-center gap-2"
  initial={{ opacity: 1 }}
  whileHover={{ scale: 1.05 }}
>
  <motion.button
    onClick={() => {
      // Animation GSAP plus sophistiquée
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: "#hero",
          offsetY: 0
        },
        ease: "power4.inOut"
      });
      
      // Animation du logo pendant le scroll
      gsap.to("button img", {
        duration: 0.5,
        rotate: 360,
        scale: 1.2,
        yoyo: true,
        repeat: 1,
        ease: "back.out(1.7)"
      });
    }}
    className="flex items-center gap-2 relative group"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <motion.div
      className="absolute -inset-2 bg-black/5 rounded-lg z-0"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    />
    
    <motion.div
      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
      transition={{ duration: 0.5 }}
    >
      <Image 
        src="/neptune.svg" 
        alt="CisseMamadou Logo" 
        width={32} 
        height={32} 
        className="rounded-full relative z-10" 
      />
    </motion.div>

    <motion.span 
      className="text-xl font-semibold relative z-10"
      initial={{ x: 0 }}
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      CisseMamadou
    </motion.span>

    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent"
      initial={{ x: "-100%" }}
      whileHover={{ x: "100%" }}
      transition={{ duration: 0.6 }}
    />
  </motion.button>
</motion.div>

      {/* Menu burger pour mobile */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Menu navigation desktop */}
      <nav className="hidden md:flex items-center gap-8">
        {[
          ["accueil", "#hero"],
          ["à propos", "#about"],
          ["compétences", "#skills"], 
          ["expérience", "#experience"],
          ["projets", "#projects"],
          ["contact", "#contact"]
        ].map(([label, href]) => (
          <motion.a
            key={href}
            whileHover={{ scale: 1.05 }}
            href={href}
            className="text-base font-bold hover:text-gray-600"
          >
            {/* Capitaliser le texte affiché */}
            {label.charAt(0).toUpperCase() + label.slice(1)}
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
      {[
        ["accueil", "#hero"],
        ["à propos", "#about"],
        ["compétences", "#skills"],
        ["expérience", "#experience"],
        ["projets", "#projects"],
        ["contact", "#contact"]
      ].map(([label, href]) => (
        <motion.a
          key={href}
          whileHover={{ scale: 1.05 }}
          href={href}
          className="py-2 text-base font-bold hover:text-gray-600"
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Capitaliser le texte affiché */}
          {label.charAt(0).toUpperCase() + label.slice(1)}
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
      <section className="container mx-auto px-4 py-20" id="hero">
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
<section id="projects" className="py-32 bg-white relative overflow-hidden">
  {/* Background Animation */}
  <div className="absolute inset-0 -z-10">
    <motion.div
      animate={{
        rotate: [0, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute -left-1/3 top-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-50 to-blue-50 rounded-full opacity-30 blur-3xl"
    />
    <motion.div
      animate={{
        rotate: [360, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute -right-1/4 -bottom-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-orange-50 to-rose-50 rounded-full opacity-30 blur-3xl"
    />
  </div>

  <div className="container mx-auto px-4">
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
          <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Réalisations</span>
          <h2 className="text-5xl font-bold mt-4">
            Mes{" "}
            <span className="relative inline-block px-6">
              Projets
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

      {/* Projects Grid - Desktop */}
      <div className="hidden md:grid grid-cols-12 gap-8">
        {/* Project 1 - Large */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-8 group"
        >
          <div className="bg-white p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="aspect-video relative overflow-hidden rounded-xl mb-6">
              <Image
                src="/quizzine.png"
                alt="Quizzine Preview"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.a
                  href="https://github.com/BUSCH-Leo/SAE-S3-2024-2025-site-de-quizz"
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-white text-black font-medium rounded-full"
                >
                  Voir le projet →
                </motion.a>
              </div>
            </div>
            <span className="text-sm font-bold text-gray-400">01 / FULLSTACK</span>
            <h3 className="text-2xl font-bold mt-2 mb-4">Quizzine - Plateforme de Quiz Interactive</h3>
            <p className="text-gray-600 mb-6 line-clamp-2">
              Une plateforme moderne permettant aux utilisateurs de créer et partager des quiz interactifs.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-black/5 rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-black/5 rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-black/5 rounded-full text-sm">Tailwind CSS</span>
            </div>
          </div>
        </motion.div>

        {/* Project 2 - Small */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="col-span-4 group"
        >
          <div className="bg-white p-6 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="aspect-square relative overflow-hidden rounded-xl mb-6">
              <Image
                src="/cookieClicker.png"
                alt="Cookie Clicker Preview"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.a
                  href="https://github.com/4keezix/SAE_DEV_CookieClicker"
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-white text-black font-medium rounded-full"
                >
                  Voir le projet →
                </motion.a>
              </div>
            </div>
            <span className="text-sm font-bold text-gray-400">02 / DESKTOP</span>
            <h3 className="text-xl font-bold mt-2 mb-4">Cookie Clicker</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-black/5 rounded-full text-sm">C#</span>
              <span className="px-3 py-1 bg-black/5 rounded-full text-sm">WPF</span>
            </div>
          </div>
        </motion.div>

        {/* Project 3 - Full Width */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="col-span-12 group"
        >
          <div className="bg-white p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="grid grid-cols-2 gap-8">
              <div className="aspect-video relative overflow-hidden rounded-xl">
                <Image
                  src="/donjon.png"
                  alt="Dungeon Forge Preview"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-sm font-bold text-gray-400">03 / GAME DEV</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">Dungeon Forge</h3>
                <p className="text-gray-600 mb-6">
                  Générateur procédural de donjons combinant des algorithmes de création de labyrinthes pour une expérience unique à chaque partie.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-black/5 rounded-full text-sm">Unity</span>
                  <span className="px-3 py-1 bg-black/5 rounded-full text-sm">C#</span>
                  <span className="px-3 py-1 bg-black/5 rounded-full text-sm">Algorithmes</span>
                </div>
                <motion.a
                  href="https://github.com/Neptune2k21/BUT1-S2.02"
                  whileHover={{ scale: 1.02 }}
                  className="self-start px-6 py-3 bg-black text-white font-medium rounded-full"
                >
                  Découvrir le projet →
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Projects List - Mobile */}
      <div className="md:hidden space-y-8">
        {/* Version mobile simplifiée des projets */}
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
              <Image
                src={project.image}
                alt={`${project.title} Preview`}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm font-bold text-gray-400">{project.category}</span>
            <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-black/5 rounded-full text-xs">{tech}</span>
              ))}
            </div>
            <motion.a
              href={project.href}
              whileHover={{ scale: 1.02 }}
              className="inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-full"
            >
              Voir le projet →
            </motion.a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>











      {/* Contact Section */}
<section id="contact" className="py-32 relative overflow-hidden bg-white">
  {/* Animated Background */}
  <div className="absolute inset-0 -z-10">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 15, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute -right-1/4 -top-1/4 w-[800px] h-[800px] bg-gradient-to-br from-gray-50 to-blue-50 rounded-full opacity-30 blur-3xl"
    />
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, -10, 0],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute -left-1/4 -bottom-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-gray-50 to-rose-50 rounded-full opacity-30 blur-3xl"
    />
  </div>

  <div className="container mx-auto px-4 relative">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Me contacter</span>
      <h2 className="text-5xl font-bold mt-4">
        Commençons une{" "}
        <span className="relative inline-block">
          conversation
          <motion.div
            className="absolute bottom-0 left-0 h-3 bg-black/10 w-full -z-10"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </span>
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start max-w-7xl mx-auto">
      {/* Contact Form - 3 columns */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-3 relative"
      >
        <div className="bg-white p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Votre Nom*</label>
                <Input 
                  placeholder="Jean Dupont" 
                  className="rounded-none border-2 border-black focus:ring-black bg-white h-12" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Votre Email*</label>
                <Input 
                  type="email"
                  placeholder="jean@example.com" 
                  className="rounded-none border-2 border-black focus:ring-black bg-white h-12" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Sujet*</label>
              <Input
                placeholder="Le sujet de votre message"
                className="rounded-none border-2 border-black focus:ring-black bg-white h-12"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Votre Message*</label>
              <Textarea
                placeholder="Détaillez votre projet..."
                className="rounded-none border-2 border-black min-h-[200px] focus:ring-black bg-white"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-black text-white text-lg font-bold hover:bg-black/90 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Envoyer le message</span>
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ➜
              </motion.span>
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* Contact Info - 2 columns */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-2 space-y-8"
      >
        {/* Direct Contact Cards */}
        <div className="bg-white p-6 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-xl font-bold mb-6">Contact Direct</h3>
          <div className="space-y-4">
            <motion.a
              href="mailto:mamadoulcisse9236@gmail.com"
              className="flex items-center gap-4 p-4 hover:bg-black/5 transition-colors rounded-lg group"
              whileHover={{ x: 4 }}
            >
              <div className="p-3 border-2 border-black group-hover:bg-black group-hover:text-white transition-colors">
                📧
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-bold">mamadoulcisse9236@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+33749712283"
              className="flex items-center gap-4 p-4 hover:bg-black/5 transition-colors rounded-lg group"
              whileHover={{ x: 4 }}
            >
              <div className="p-3 border-2 border-black group-hover:bg-black group-hover:text-white transition-colors">
                📞
              </div>
              <div>
                <p className="text-sm text-gray-600">Téléphone</p>
                <p className="font-bold">+33 7 49 71 22 83</p>
              </div>
            </motion.a>
          </div>
        </div>

        {/* Social Media */}
        <div className="bg-white p-6 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-xl font-bold mb-6">Réseaux Sociaux</h3>
          <div className="grid grid-cols-2 gap-4">
            <motion.a
              href="https://github.com/Neptune2k21"
              target="_blank"
              whileHover={{ y: -4 }}
              className="p-4 border-2 border-black flex items-center gap-3 hover:bg-black hover:text-white transition-all group"
            >
              <Github className="h-5 w-5" />
              <span className="font-medium">GitHub</span>
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/mamadou-lamine-ciss%C3%A9/"
              target="_blank"
              whileHover={{ y: -4 }}
              className="p-4 border-2 border-black flex items-center gap-3 hover:bg-black hover:text-white transition-all"
            >
              <Linkedin className="h-5 w-5" />
              <span className="font-medium">LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://twitter.com/"
              target="_blank"
              whileHover={{ y: -4 }}
              className="p-4 border-2 border-black flex items-center gap-3 hover:bg-black hover:text-white transition-all"
            >
              <Twitter className="h-5 w-5" />
              <span className="font-medium">Twitter</span>
            </motion.a>

            <motion.a
              href="https://discord.com/users/neptune2k21"
              target="_blank"
              whileHover={{ y: -4 }}
              className="p-4 border-2 border-black flex items-center gap-3 hover:bg-black hover:text-white transition-all"
            >
              <Icon icon="mdi:discord" className="h-5 w-5" />
              <span className="font-medium">Discord</span>
            </motion.a>
          </div>
        </div>

        {/* Availability Status */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-green-50 p-6 border-2 border-green-500 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
            <p className="font-medium text-green-700">
              Disponible pour une alternance
            </p>
          </div>
          <p className="text-green-600 mt-2 text-sm">
            Je recherche activement une alternance en développement web
          </p>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>
      








      {/* Footer */}
      <footer className="bg-black text-white py-6 fixed bottom-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          {/* Desktop layout */}
          <div className="hidden md:flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image src="/neptune.svg" alt="CisseMamadou Logo" width={32} height={32} className="rounded-full" />
              <span className="text-xl"></span>
            </div>
            <div className="flex items-center gap-4">
              <span>© 2025 Cisse Mamadou</span>
              <span>Tout droit reservé</span>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden flex flex-col items-center gap-2 text-center">
            <div className="flex items-center gap-2">
              <Image src="/neptune.svg" alt="CisseMamadou Logo" width={24} height={24} className="rounded-full" />
            </div>
            <div className="flex flex-col text-sm">
              <span>© 2025 Cisse Mamadou</span>
              <span>Tout droit reservé</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

