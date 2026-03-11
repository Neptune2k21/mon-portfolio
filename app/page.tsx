"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { Icon } from "@iconify/react"
import { Search, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useHeroAnimations } from "@/hooks/use-hero-animation"

export default function Home() {
  const heroRef = useRef(null)
  const containerRef = useRef(null)
  const [isMounted, setIsMounted] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  useHeroAnimations({ heroRef, isMounted })

  // Animations au scroll subtiles
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "15%"])
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7])

  return (
    <main ref={containerRef} className="min-h-screen bg-zinc-50 dark:bg-zinc-900 overflow-hidden">
      {/* Fond artistique minimaliste - aligné avec les autres pages */}
      {!shouldReduceMotion && (
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <motion.div 
            style={{ y: backgroundY, opacity: backgroundOpacity }}
            className="absolute inset-0"
          >
            {/* Gradients subtils */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.03 }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -right-[15%] -top-[20%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-tr from-indigo-900 to-blue-500 dark:from-indigo-800 dark:to-blue-400 blur-3xl"
            />
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.02 }}
              transition={{ duration: 2.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-[5%] bottom-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-amber-700 to-indigo-800 dark:from-amber-600 dark:to-indigo-700 blur-3xl"
            />

            {/* Lignes artistiques subtiles */}
            <svg className="absolute top-1/3 left-0 w-screen h-[60vh] opacity-[0.03] dark:opacity-[0.04]" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 0.5, ease: "easeOut" }}
                d="M0 40 Q 25 20 50 40 T 100 40"
                stroke="currentColor" 
                strokeWidth="0.3" 
                fill="none" 
              />
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 0.8, ease: "easeOut" }}
                d="M0 60 Q 25 80 50 60 T 100 60" 
                stroke="currentColor" 
                strokeWidth="0.3" 
                fill="none" 
              />
            </svg>
          </motion.div>
        </div>
      )}

      {/* Section héro */}
      <section className="relative min-h-screen" ref={heroRef}>
        <div className="container mx-auto px-6 md:px-12 py-32 md:py-40 min-h-screen flex flex-col justify-center relative max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
            {/* Contenu textuel */}
            <div className="space-y-10 md:space-y-12">
              {/* Nom - sans animation bizarre */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Ligne décorative supérieure */}
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent"
                />
                
                <h1 className="font-light text-6xl md:text-7xl lg:text-8xl tracking-tight text-zinc-900 dark:text-zinc-50 leading-none">
                  Mamadou
                  <span className="text-4xl md:text-5xl lg:text-6xl font-light block text-right opacity-50 mt-2">
                    Cissé
                  </span>
                </h1>

                <div className="flex flex-col space-y-4 pt-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-zinc-800 dark:text-zinc-100">
                    Développeur{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 font-normal text-zinc-900 dark:text-zinc-50">Logiciel & DevOps</span>
                      <span className="absolute bottom-0 left-0 w-full h-2 bg-indigo-500/20 dark:bg-indigo-400/20 -z-0"></span>
                    </span>
                  </h2>
                  
                  <span className="inline-flex px-4 py-2 bg-zinc-900/90 dark:bg-zinc-100/90 text-zinc-50 dark:text-zinc-900 text-sm font-light tracking-wide rounded-full w-max border border-zinc-900 dark:border-zinc-100">
                    Futur étudiant en mastère en ingénierie logicielle
                  </span>
                </div>
              </motion.div>

              {/* Description - style épuré */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative p-8 bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm rounded-2xl border border-zinc-900/5 dark:border-zinc-100/5 shadow-sm"
              >
                {/* Barre latérale décorative */}
                <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-indigo-500 to-amber-500 rounded-full opacity-40"></div>
                
                <div className="pl-4">
                  <p className="text-zinc-700 dark:text-zinc-200 text-lg leading-relaxed font-light">
                    Je me passionne pour l'ingénierie{" "}
                    <span className="font-normal text-zinc-900 dark:text-zinc-50">logicielle</span> et la culture{" "}
                    <span className="font-normal text-zinc-900 dark:text-zinc-50">DevOps</span>,
                    en concevant des architectures robustes et en automatisant les déploiements via les outils{" "}
                    <span className="font-normal text-indigo-600 dark:text-indigo-400">Cloud & CI/CD</span>.
                  </p>

                  {/* Bannière alternance - simplifiée */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-6 p-4 bg-amber-50/80 dark:bg-amber-900/20 border-l-2 border-amber-500/40 rounded-lg"
                  >                  
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-amber-500/10 rounded-full flex items-center justify-center">
                        <Search className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <p className="text-sm font-normal text-amber-900 dark:text-amber-100">
                          Recherche d'alternance
                        </p>
                        <p className="text-xs text-amber-700 dark:text-amber-300 mt-0.5">
                          À partir de septembre 2026 - Ingénierie Logicielle / DevOps
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Boutons sociaux - design épuré */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex gap-4 items-center"
              >
                <a
                  href="https://github.com/Neptune2k21"
                  className="group flex items-center justify-center w-11 h-11 bg-zinc-100 dark:bg-zinc-800 border border-zinc-900/10 dark:border-zinc-100/10 rounded-full transition-all hover:bg-zinc-900 dark:hover:bg-zinc-100 hover:border-zinc-900 dark:hover:border-zinc-100"
                  aria-label="GitHub Profile"
                >
                  <Icon icon="akar-icons:github-fill" className="w-5 h-5 text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-100 dark:group-hover:text-zinc-900 transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/mamadou-lamine-ciss%C3%A9/"
                  className="group flex items-center justify-center w-11 h-11 bg-zinc-100 dark:bg-zinc-800 border border-zinc-900/10 dark:border-zinc-100/10 rounded-full transition-all hover:bg-zinc-900 dark:hover:bg-zinc-100 hover:border-zinc-900 dark:hover:border-zinc-100"
                  aria-label="LinkedIn Profile"
                >
                  <Icon icon="akar-icons:linkedin-fill" className="w-5 h-5 text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-100 dark:group-hover:text-zinc-900 transition-colors" />
                </a>

                <a
                  href="mailto:mamadoulcisse9236@gmail.com"
                  className="group flex items-center justify-center w-11 h-11 bg-zinc-100 dark:bg-zinc-800 border border-zinc-900/10 dark:border-zinc-100/10 rounded-full transition-all hover:bg-zinc-900 dark:hover:bg-zinc-100 hover:border-zinc-900 dark:hover:border-zinc-100"
                  aria-label="Email Contact"
                >
                  <Icon icon="mdi:email" className="w-5 h-5 text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-100 dark:group-hover:text-zinc-900 transition-colors" />
                </a>

                <div className="h-px w-16 bg-gradient-to-r from-zinc-900/20 dark:from-zinc-100/20 to-transparent"></div>

                <Link 
                  href="/contact"
                  className="group flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 rounded-full text-sm font-light tracking-wide transition-all hover:gap-3"
                >
                  Me contacter
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Image - design minimaliste */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full aspect-square max-w-lg mx-auto"
            >
              {/* Éléments décoratifs minimalistes */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-indigo-100/30 via-amber-100/20 to-rose-100/30 dark:from-indigo-900/20 dark:via-amber-900/10 dark:to-rose-900/20 rounded-3xl transform -rotate-3 scale-95 blur-2xl"></div>
              
              {/* Cadre simple */}
              <div className="absolute -z-10 inset-0 border border-zinc-900/10 dark:border-zinc-100/10 rounded-3xl transform rotate-2 scale-95"></div>

              {/* Formes géométriques subtiles */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -z-10 -right-8 top-1/4 w-12 h-12 border border-indigo-200 dark:border-indigo-800 rounded-full"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -z-10 -left-6 bottom-1/3 w-10 h-10 border border-amber-200 dark:border-amber-800 rounded-full"
              />

              {/* Image principale */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl border border-zinc-900/10 dark:border-zinc-100/10">
                <Image
                  src="/web.jpg"
                  alt="Mamadou Cissé - Développeur Logiciel & DevOps"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay subtil */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent"></div>
              </div>

              {/* Badge simple et élégant */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-zinc-800 py-2.5 px-6 rounded-full text-sm font-light border border-zinc-900/10 dark:border-zinc-100/10 shadow-lg"
              >
                <span className="text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                  JavaScript Fans
                </span>
              </motion.div>
              
              {/* Badge alternance */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-amber-400 dark:bg-amber-500 py-2 px-4 rounded-lg text-sm font-normal border border-amber-500 dark:border-amber-600 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-amber-900 dark:text-amber-950" />
                  <span className="text-amber-900 dark:text-amber-950">Alternance</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}