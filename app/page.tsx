"use client"

import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Twitter, Facebook, Linkedin } from "lucide-react"
import { Icon } from '@iconify/react'
import { motion } from "framer-motion"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger, } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useState } from "react"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { ContactFormValues, contactFormSchema } from "@/app/types/contact"
import SkillsSection from "@/components/skill-card"
import {Toast} from "@/components/ui/toast"
import { CVModal } from "@/components/cv-modal"

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
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const ProjectSection = () => {
    const projects = [
      {
        id: "featured",
        title: "Quizzine",
        tag: "Projet Phare",
        tagColor: "bg-purple-100 text-purple-700",
        description: "Une plateforme moderne de quiz interactifs construite avec les technologies web JavaScript. Les utilisateurs peuvent créer, partager et participer à des quiz sur divers sujets.",
        longDesc: "Développé en équipe dans le cadre d'un projet universitaire, Quizzine offre une expérience utilisateur optimisée grâce à une interface intuitive et des fonctionnalités avancées. Il permet notamment la création de quiz en temps réel, l'affichage détaillé des résultats et un système de connexion qui facilite la gestion et la modification de nouveaux projets.",
        image: "/quizzine.png",
        tech: ["Node Js", "MongoDb", "Boostrap CSS", "Docker"],
        github: "https://github.com/BUSCH-Leo/SAE-S3-2024-2025-site-de-quizz",
        gradient: "from-gray-600 to-gray-700", 
        features: ["Auth avec Passeport Js", "Base de données relationnelle", "API REST", "Architecture MVC"]
      },
      {
        id: "cookie",
        title: "Cookie Clicker",
        tag: "Application Desktop",
        tagColor: "bg-blue-100 text-blue-700",
        description: "Application WPF interactive inspirée du célèbre jeu Cookie Clicker, avec des fonctionnalités similaire au vrai jeu.",
        longDesc: "Un projet personnel qui m'a permis d'explorer le développement d'applications desktop avec WPF et d'implémenter des mécaniques de jeu complexes.",
        image: "/cookieClicker.png",
        tech: ["C#", "WPF", "XAML", "SQLite"],
        github: "https://github.com/4keezix/SAE_DEV_CookieClicker",
        gradient:"from-gray-800 to-black",
        features: ["Interface personnalisable", "Système de Back office", "Achievements"]
      },
      {
        id: "dungeon",
        title: "Dungeon Forge",
        tag: "Game Dev",
        tagColor: "bg-emerald-100 text-emerald-700",
        description: "Générateur procédural de donjons utilisant des algorithmes avancés pour créer des niveaux uniques.",
        longDesc: "Un projet technique qui combine des algorithmes de génération procédurale pour créer des donjons jouables et équilibrés.",
        image: "/donjon.png",
        tech: ["C#", "Algorithmes", "Notion de Graph"],
        github: "https://github.com/Neptune2k21/BUT1-S2.02",
        gradient: "from-gray-700 to-gray-800",
        features: ["Génération procédurale", "Djikistra", "Level Design dynamique"]
      }
    ];
  
    return (
      <section id="projects" className="min-h-screen py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-100/30 to-blue-100/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, -5, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-100/30 to-blue-100/30 rounded-full blur-3xl"
          />
        </div>
  
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Portfolio</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 relative inline-block">
              Mes Projets
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                className="absolute -z-10 bottom-0 left-0 h-3 bg-gradient-to-r from-purple-100 to-blue-100"
              />
            </h2>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Une sélection de projets les plus recents , démontrant ma maîtrise des technologies modernes 
              et ma capacité à réaliser des applications complexes.
            </p>
          </motion.div>
  
          {/* Projects Grid */}
          <div className="space-y-32">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Image Section */}
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl transform rotate-2 group-hover:rotate-3 transition-all duration-300`} />
                    <div className="relative bg-white p-2 rounded-2xl transform -rotate-2 group-hover:-rotate-3 transition-all duration-300">
                      <div className="aspect-video rounded-xl overflow-hidden">
                        <Image
                          src={project.image}
                          alt={`${project.title} Preview`}
                          width={600}
                          height={400}
                          className="object-cover group-hover:scale-110 transition-all duration-500"
                        />
                      </div>
                    </div>
                  </div>
  
                  {/* Content Section */}
                  <div className="space-y-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${project.tagColor}`}>
                      {project.tag}
                    </span>
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                    <p className="text-gray-500 text-sm">{project.longDesc}</p>
                    
                    {/* Features List */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">Fonctionnalités clés:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                            <Icon icon="lucide:check-circle" className="w-4 h-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
  
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
  
                    {/* CTA */}
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-all"
                    >
                      <Github className="w-5 h-5" />
                      <span>Explorer le projet</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

// Dans la section contact...
const [isSubmitting, setIsSubmitting] = useState(false)
const [toast, setToast] = useState<{
  type: "success" | "error"
  message: string
} | null>(null)

const form = useForm<ContactFormValues>({
  resolver: zodResolver(contactFormSchema),
  defaultValues: {
    name: "",
    email: "",
    subject: "",
    message: ""
  }
})

const onSubmit = async (data: ContactFormValues) => {
  setIsSubmitting(true)
  try {
    const response = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || "Une erreur est survenue")
    }

    setToast({
      type: "success",
      message: "Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais."
    })
    form.reset()
  } catch (error) {
    setToast({
      type: "error",
      message: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer."
    })
  } finally {
    setIsSubmitting(false)
  }
}








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
<div className="min-h-screen bg-white flex flex-col">
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


{/* Menu burger pour mobile avec animation */}
<motion.button 
  className="md:hidden"
  whileTap={{ scale: 0.9 }}
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  <motion.svg 
    className="w-6 h-6" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    animate={isMenuOpen ? { rotate: 90 } : { rotate: 0 }}
    transition={{ duration: 0.3 }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </motion.svg>
</motion.button>

{/* Menu navigation desktop avec animations GSAP */}
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
      whileHover={{ 
        scale: 1.05,
        y: -2
      }}
      onClick={(e) => {
        e.preventDefault();
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: href,
            offsetY: 70
          },
          ease: "power4.inOut"
        });
      }}
      className="text-base font-bold relative group"
    >
      <span className="relative z-10">
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </span>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-black origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  ))}
</nav>

{/* Menu mobile avec animations */}
{isMenuOpen && (
  <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden"
  >
    <motion.div 
      className="flex flex-col items-center py-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {[
        ["accueil", "#hero"],
        ["à propos", "#about"],
        ["compétences", "#skills"],
        ["expérience", "#experience"],
        ["projets", "#projects"],
        ["contact", "#contact"]
      ].map(([label, href], index) => (
        <motion.a
          key={href}
          variants={item}
          whileHover={{ scale: 1.05, x: 10 }}
          onClick={(e) => {
            e.preventDefault();
            setIsMenuOpen(false);
            gsap.to(window, {
              duration: 1,
              scrollTo: {
                y: href,
                offsetY: 70
              },
              ease: "power4.inOut"
            });
          }}
          className="py-2 px-4 w-full text-center text-base font-bold hover:bg-black hover:text-white transition-colors"
        >
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </motion.a>
      ))}
    </motion.div>
  </motion.div>
)}

{/* Bouton CV moderne */}
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => setIsCVModalOpen(true)}
  className="px-6 py-2 bg-black text-white relative group overflow-hidden"
>
  <motion.span
    className="relative z-10 flex items-center gap-2"
    whileHover={{ x: 5 }}
  >
    Mon CV
    <motion.svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      className="relative z-10"
      animate={{ 
        y: [0, -2, 0],
      }}
      transition={{ 
        duration: 1,
        repeat: Infinity,
      }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </motion.svg>
  </motion.span>
  
  <motion.div
    className="absolute inset-0 bg-white"
    initial={{ y: "100%" }}
    whileHover={{ y: 0 }}
    transition={{ duration: 0.3 }}
  />
  
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500"
    initial={{ x: "100%" }}
    whileHover={{ x: 0 }}
    transition={{ duration: 0.3, delay: 0.1 }}
  />
</motion.button>

    {/*  modal cv */}
    <CVModal 
      isOpen={isCVModalOpen} 
      onClose={() => setIsCVModalOpen(false)} 
    />
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
            Actuellement à la recherche d'une alternance, je me spécialise dans la création d'applications avec une orientation backend et DevOps.
            Si JavaScript est mon langage de prédilection grâce à son écosystème riche et en constante évolution, je suis polyvalent et capable de m'adapter rapidement aux différentes technologies en fonction des besoins du projet.
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
<ProjectSection/>












{/* Contact Section - dernière section */}
<section id="contact" className="py-32 pb-16 relative overflow-hidden bg-white">
  
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
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Votre Nom*</label>
                <Input 
                  {...form.register("name")}
                  placeholder="Jean Dupont" 
                  className="rounded-none border-2 border-black focus:ring-black bg-white h-12" 
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Votre Email*</label>
                <Input
                  {...form.register("email")} 
                  type="email"
                  placeholder="jean@example.com" 
                  className="rounded-none border-2 border-black focus:ring-black bg-white h-12" 
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Sujet*</label>
              <Input
                {...form.register("subject")}
                placeholder="Le sujet de votre message"
                className="rounded-none border-2 border-black focus:ring-black bg-white h-12"
              />
              {form.formState.errors.subject && (
                <p className="text-red-500 text-sm">{form.formState.errors.subject.message}</p>
                )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Votre Message*</label>
              <Textarea
                {...form.register("message")}
                placeholder="Détaillez votre projet..."
                className="rounded-none border-2 border-black min-h-[200px] focus:ring-black bg-white"
              />
              {form.formState.errors.message && (
                <p className="text-red-500 text-sm">{form.formState.errors.message.message}</p>
              )}
            </div>

            <motion.button
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 bg-black text-white text-lg font-bold transition-all flex items-center justify-center gap-2 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-black/90"
              }`}
              type="submit"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <>
                  <span>Envoyer le message</span>
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ➜
                  </motion.span>
                </>
              )}
            </motion.button>
          </form>
          {/* Toast notification */}

          {toast && (
            <Toast
              message={toast.message}
              type={toast.type}
              onClose={() => setToast(null)}
            />
          )}
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

    </div>
  )
}

