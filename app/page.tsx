"use client"

import Image from "next/image"
import { Github, Linkedin, Search, Zap } from "lucide-react"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useHeroAnimations } from "@/hooks/use-hero-animation"

export default function Home() {
  const heroRef = useRef(null)
  
  useHeroAnimations({ heroRef })

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 overflow-hidden">
      {/* Éléments décoratifs - optimisés avec moins de filtres flou */}
      <div className="fixed w-full h-full overflow-hidden opacity-30 pointer-events-none">
        {/* Formes abstraites - blur réduit */}
        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-200 dark:from-indigo-700 to-transparent blur-2xl parallax-layer"></div>
        <div className="absolute -left-20 bottom-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-amber-100 dark:from-amber-700 to-transparent blur-2xl parallax-layer"></div>
        <div className="absolute left-1/2 top-1/3 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-rose-100 dark:from-rose-700 to-transparent blur-2xl parallax-layer"></div>
        <div className="absolute right-1/4 bottom-1/4 w-[250px] h-[250px] rounded-full bg-gradient-to-bl from-emerald-100 dark:from-emerald-700 to-transparent blur-2xl parallax-layer"></div>

        {/* Motif de points - réduit */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-indigo-500 floating-shape"></div>
          <div className="absolute top-[15%] right-[20%] w-3 h-3 rounded-full bg-amber-500 floating-shape"></div>
          <div className="absolute top-[30%] left-[25%] w-5 h-5 rounded-full bg-rose-500 floating-shape"></div>
          <div className="absolute bottom-[20%] right-[30%] w-4 h-4 rounded-full bg-emerald-500 floating-shape"></div>
          {/* Réduit le nombre d'éléments flottants */}
        </div>

        {/* Lignes décoratives - simplifiées */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
        </div>
      </div>

      {/* Section héro */}
      <section className="relative min-h-screen" ref={heroRef}>
        <div className="container mx-auto px-6 md:px-12 py-32 md:py-40 min-h-screen flex flex-col justify-center relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
            {/* Contenu textuel */}
            <div className="space-y-8 md:space-y-10">
              <div className="space-y-6">
                <motion.h1
                  className="hero-name font-serif text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-gray-50 leading-none"
                  whileHover={{ letterSpacing: "0.01em" }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  Mamadou
                  <span className="text-4xl md:text-5xl lg:text-6xl font-light block text-right opacity-60 -mt-1">
                    Cissé
                  </span>
                </motion.h1>

                <div className="flex flex-col">
                  <h2 className="hero-title text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-800 dark:text-gray-100 leading-tight">
                    Développeur <span className="text-indigo-700 dark:text-indigo-400">FullStack</span>
                  </h2>
                  <span className="hero-badge inline-flex mt-3 px-4 py-2 bg-black/90 dark:bg-white/90 text-white dark:text-black text-sm tracking-wider rounded-full w-max">
                    Étudiant en BUT Informatique
                  </span>
                </div>
              </div>

              {/* Description mise en évidence - transitions optimisées */}
              <motion.div
                className="hero-desc relative p-6 md:p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700"
                whileHover={{ 
                  y: -5, // Valeur réduite
                  boxShadow: "0 15px 30px -10px rgba(79, 70, 229, 0.15)", 
                }}
                transition={{ duration: 0.2 }} // Transition plus courte
              >
                {/* Éléments décoratifs */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl rotate-12 flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-white drop-shadow-md transform -rotate-12" />
                </div>
                
                {/* Contenu principal */}
                <div className="ml-6 relative">
                  <p className="text-gray-700 dark:text-gray-200 text-lg md:text-xl leading-relaxed tracking-wide">
                    Je me spécialise dans la création d'applications orientées 
                    <span className="relative inline-block mx-1">
                      <span className="relative z-10 font-bold text-indigo-700 dark:text-indigo-400">backend</span>
                      <span className="absolute bottom-1 left-0 w-full h-2 bg-indigo-100 dark:bg-indigo-700/30 rounded-sm -z-0"></span>
                    </span> 
                    et 
                    <span className="relative inline-block mx-1">
                      <span className="relative z-10 font-bold text-indigo-700 dark:text-indigo-400">DevOps</span>
                      <span className="absolute bottom-1 left-0 w-full h-2 bg-indigo-100 dark:bg-indigo-700/30 rounded-sm -z-0"></span>
                    </span>,
                    en m'appuyant sur l'écosystème 
                    <span className="font-bold text-indigo-700 dark:text-indigo-400 mx-1">JavaScript</span> 
                    pour sa polyvalence et sa performance.
                  </p>
                </div>

                {/* Bannière alternance - simplifiée */}
                <motion.div 
                  className="alternance-banner mt-6 p-4 bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/20 border-l-4 border-amber-400 dark:border-amber-600 rounded-xl relative"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.15 }} // Transition ultra rapide
                >                  
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-400/20 dark:bg-amber-500/20 rounded-full flex items-center justify-center">
                      <Search className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <p className="text-amber-800 dark:text-amber-300 font-medium">
                      Activement à la recherche d'une 
                      <span className="font-bold relative mx-1">
                        alternance
                        <motion.span 
                          className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500 dark:bg-amber-400"
                          animate={{ width: ["0%", "100%", "0%"] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        ></motion.span>
                      </span> 
                      pour mettre en pratique mes compétences
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Boutons sociaux - transitions optimisées */}
              <div className="hero-socials flex gap-5 items-center">
                {/* GitHub */}
                <motion.a
                  href="https://github.com/Neptune2k21"
                  className="relative group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }} // Transitions ultra rapides
                  aria-label="GitHub Profile"
                >
                    <div className="relative flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-800 border-2 border-gray-900 dark:border-gray-200 rounded-full shadow-md hover:shadow-lg group-hover:-translate-y-1 transition-all duration-200">
                    <Icon icon="akar-icons:github-fill" className="w-5 h-5 text-gray-900 dark:text-gray-200" />
                    </div>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/mamadou-lamine-ciss%C3%A9/"
                  className="relative group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  aria-label="LinkedIn Profile"
                >
                    <div className="relative flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-800 border-2 border-gray-900 dark:border-gray-200 rounded-full shadow-md hover:shadow-lg group-hover:-translate-y-1 transition-all duration-200">
                    <Icon icon="akar-icons:linkedin-fill" className="w-5 h-5 text-gray-900 dark:text-gray-200" />
                    </div>
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:contact@mamadoulcisse9236@gmail.com"
                  className="relative group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  aria-label="Email Contact"
                >
                  <div className="relative flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-800 border-2 border-gray-900 dark:border-gray-200 rounded-full shadow-md hover:shadow-lg group-hover:-translate-y-1 transition-all duration-200">
                    <Icon icon="mdi:email" className="w-5 h-5 text-gray-900 dark:text-gray-200" />
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Image/Illustration - animations simplifiées */}
            <motion.div
              className="hero-image-container relative w-full aspect-square max-w-lg mx-auto"
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
            >
              {/* Éléments décoratifs autour de l'image */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-indigo-200 via-amber-100 to-rose-100 dark:from-indigo-800 dark:via-amber-800 dark:to-rose-800 rounded-3xl transform -rotate-3 scale-95 opacity-50 blur-xl"></div>
              <div className="absolute -z-10 inset-0 border-2 border-black/80 dark:border-white/80 rounded-3xl transform rotate-3 scale-95"></div>

              {/* Formes décoratives */}
              <div className="absolute -z-10 -right-10 top-1/4 w-16 h-16 bg-indigo-100 dark:bg-indigo-800 rounded-full border-2 border-indigo-200 dark:border-indigo-700 floating-shape"></div>
              <div className="absolute -z-10 -left-8 bottom-1/3 w-12 h-12 bg-amber-100 dark:bg-amber-800 rounded-full border-2 border-amber-200 dark:border-amber-700 floating-shape"></div>
              <div className="absolute -z-10 right-1/4 -bottom-6 w-14 h-14 bg-rose-100 dark:bg-rose-800 rounded-full border-2 border-rose-200 dark:border-rose-700 floating-shape"></div>

              {/* Image principale */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl border-4 border-black/90 dark:border-white/80">
                <Image
                  src="/web.jpg"
                  alt="Mamad Cissé - Développeur FullStack"
                  fill
                  className="object-cover transform transition-transform duration-4000 hover:scale-105"
                  priority
                />

                {/* Motif décoratif sur l'image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_60%,_rgba(0,0,0,0.2))]"></div>
              </div>

              {/* Badges réduits */}
              <div className="absolute -bottom-5 -right-5 bg-white dark:bg-slate-800 py-2 px-5 rounded-full text-sm font-bold border-2 border-black dark:border-white/80 shadow-lg">
                <motion.span
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="text-gray-900 dark:text-gray-100"
                >
                  ✨ JavaScript Enthusiast
                </motion.span>
              </div>
              <div className="absolute -top-5 -left-5 bg-white dark:bg-slate-800 py-2 px-5 rounded-full text-sm font-bold border-2 border-black dark:border-white/80 shadow-lg transform rotate-[-5deg]">
                <motion.span
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                >
                  🚀 
                </motion.span>
              </div>
              
              {/* Badge alternance */}
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-amber-400 dark:bg-amber-600 py-2 px-4 rounded-lg text-sm font-bold border-2 border-amber-600 dark:border-amber-800 shadow-lg rotate-[5deg]">
                <motion.div
                  animate={{ scale: [0.95, 1.03, 0.95] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center gap-1"
                >
                  <Search className="w-4 h-4 text-amber-800 dark:text-amber-200" />
                  <span className="text-amber-900 dark:text-amber-100">Alternance</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}