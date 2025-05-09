"use client";

import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Code, Compass, Heart, Lightbulb, Users } from "lucide-react";


export default function AboutPage() {
  // Références et hooks
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const bioRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" });
  const isBioInView = useInView(bioRef, { once: true, margin: "-100px" });
  
  // Animation au scroll avancée
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.6, 1, 1, 0.6]);
  const rotateBackground = useTransform(scrollYProgress, [0, 1], ["0deg", "5deg"]);
  const scaleBackground = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);
  
  // État pour l'animation de la photo et les interactions
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeBioSection, setActiveBioSection] = useState("identity");
  
  // Effet pour charger progressivement les éléments
  useEffect(() => {
    const timer = setTimeout(() => setImageLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Parallaxe pour les éléments de premier plan
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const titleScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

  return (
    <motion.section 
      ref={containerRef} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-[200vh] bg-zinc-50 dark:bg-zinc-900 overflow-hidden"
    >
      {/* Canvas artistique - Fond dynamique avec nouvelles formes géométriques */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          style={{ 
            y: backgroundY, 
            rotate: rotateBackground,
            scale: scaleBackground
          }}
          className="absolute w-full h-full"
        >
          {/* Gradients organiques superposés avec nouvelles couleurs */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.04 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -right-[15%] -top-[20%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-tr from-indigo-900 to-blue-500 dark:from-indigo-800 dark:to-blue-400 blur-[60px]"
          />
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.025 }}
            transition={{ duration: 2.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[5%] bottom-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-bl from-pink-700 to-indigo-800 dark:from-pink-600 dark:to-indigo-700 blur-[80px]"
          />
          
          {/* Nouvelles formes géométriques */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.03, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-[15%] right-[10%] w-48 h-48 border border-black/20 dark:border-white/20 rotate-45"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.02, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="absolute bottom-[25%] left-[15%] w-64 h-64 border border-black/20 dark:border-white/20 rounded-full"
          />
          
          {/* Lignes artistiques fluides */}
          <svg className="absolute top-1/3 left-0 w-screen h-[70vh] opacity-[0.04] dark:opacity-[0.06] overflow-visible text-current" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 0.5, ease: "easeOut" }}
              d="M0 40 Q 25 20 50 40 T 100 40"
              stroke="currentColor" 
              strokeWidth="0.5" 
              fill="none" 
            />
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 0.8, ease: "easeOut" }}
              d="M0 60 Q 25 80 50 60 T 100 60" 
              stroke="currentColor" 
              strokeWidth="0.5" 
              fill="none" 
            />
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 1.1, ease: "easeOut" }}
              d="M0 50 C 20 20, 40 80, 60 50 S 80 20, 100 50" 
              stroke="currentColor" 
              strokeWidth="0.3" 
              fill="none" 
              strokeDasharray="1 2"
            />
          </svg>
          
          {/* Points et particules avec un motif plus dense */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-8 opacity-[0.04] dark:opacity-[0.06]">
            {[...Array(48)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: Math.random() * 0.6 + 0.2, 
                  opacity: Math.random() * 0.7 + 0.3 
                }}
                transition={{ 
                  delay: i * 0.02, 
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: Math.random() * 5 + 3
                }}
                className="w-1 h-1 bg-black dark:bg-white rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Contenu principal avec composition artistique */}
      <motion.div 
        style={{ y: contentY }}
        className="container relative mx-auto px-6 py-32 max-w-7xl"
      >
        {/* Section d'introduction - Composition asymétrique améliorée */}
        <div ref={headingRef} className="mb-40 pt-16 md:pt-32">
          <motion.div 
            style={{ opacity, scale: titleScale }}
            className="max-w-4xl mx-auto"
          >
            {/* Tag de section avec ligne animée */}
            <motion.div
              initial={{ opacity: 0, width: "30%" }}
              animate={isHeadingInView ? { opacity: 1, width: "100%" } : { opacity: 0, width: "30%" }}
              transition={{ duration: 1.5 }}
              className="flex items-center mb-12"
            >
              <span className="h-px w-12 bg-black/30 dark:bg-white/30 mr-4"></span>
              <span className="text-sm tracking-[0.2em] uppercase text-black/50 dark:text-white/50 font-light">Portrait</span>
              <span className="h-px flex-grow bg-gradient-to-r from-black/30 dark:from-white/30 to-transparent ml-4"></span>
            </motion.div>
            
            {/* Titre principal avec animation de dévoilement sophistiquée */}
            <div className="overflow-hidden mb-6">
              <motion.h1 
                initial={{ y: 100 }}
                animate={isHeadingInView ? { y: 0 } : { y: 100 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="text-[clamp(2.8rem,9vw,5.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-black/90 dark:text-white/90"
              >
                <span className="block mb-1 md:mb-2 relative">
                  <span className="relative z-10">Créatif</span>
                  <motion.span 
                    initial={{ width: 0 }}
                    animate={isHeadingInView ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 1.2, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-[15%] left-0 h-[0.15em] bg-gradient-to-r from-blue-500/30 dark:from-blue-400/30 to-transparent w-full z-0"
                  ></motion.span>
                  <span className="text-5xl">.</span>
                </span>
                
                <span className="block mb-1 md:mb-2 relative md:ml-[10%]">
                  <span className="inline-flex items-baseline relative z-10">
                    Méthodique
                    <motion.span
                      initial={{ width: 0 }}
                      animate={isHeadingInView ? { width: "100%" } : { width: 0 }}
                      transition={{ duration: 1.4, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      className="inline-block h-0.5 bg-black/10 dark:bg-white/10 ml-2 w-12 self-end mb-3"
                    ></motion.span>
                  </span>
                  <span className="text-5xl">.</span>
                </span>
                
                <span className="block text-black/70 dark:text-white/70 md:ml-[20%]">
                  Passionné<span className="text-5xl">.</span>
                </span>
              </motion.h1>
            </div>
            
            {/* Phrase d'accroche avec apparition délicate et soulignement subtil */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="mt-12 text-lg md:text-xl font-light text-black/70 dark:text-white/70 max-w-2xl leading-relaxed md:ml-[5%]"
            >
              Je façonne des expériences numériques où chaque pixel et chaque ligne de code servent 
              un objectif précis — <span className="relative inline-block">
                conjuguer l'esthétique et la fonction
                <motion.span 
                  initial={{ width: 0 }}
                  animate={isHeadingInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 1, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-black/30 dark:from-white/30 to-transparent"
                ></motion.span>
              </span> au service de l'utilisateur.
            </motion.p>
          </motion.div>
        </div>

        {/* Section de présentation principale - Design décalé et original */}
        <div ref={bioRef} className="relative">
          {/* Ligne décorative verticale avec animation améliorée */}
          <motion.div 
            initial={{ height: 0 }}
            animate={isBioInView ? { height: "80%" } : { height: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute left-0 top-0 w-px bg-gradient-to-b from-transparent via-black/20 dark:via-white/20 to-transparent h-full hidden lg:block"
          ></motion.div>
          
          {/* Points de repère sur la ligne verticale */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isBioInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            className="absolute left-[-3px] top-[20%] w-[6px] h-[6px] rounded-full bg-black/30 dark:bg-white/30 hidden lg:block"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isBioInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.4, delay: 1.4 }}
            className="absolute left-[-3px] top-[50%] w-[6px] h-[6px] rounded-full bg-black/30 dark:bg-white/30 hidden lg:block"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isBioInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.4, delay: 1.6 }}
            className="absolute left-[-3px] top-[80%] w-[6px] h-[6px] rounded-full bg-black/30 dark:bg-white/30 hidden lg:block"
          />
          
          {/* Sections biographiques avec navigation interactive */}
          <div className="ml-0 lg:ml-8 mb-32 grid grid-cols-1 md:grid-cols-12 gap-x-16 gap-y-24">
            {/* Navigation latérale pour petits écrans et verticale pour grands écrans */}
            <div className="md:col-span-3 lg:sticky lg:top-32 self-start">
              {/* Photo et effet artistique */}
              <div className="relative aspect-[4/5] mb-16 mx-auto max-w-xs">
                <motion.div 
                  className="absolute inset-0 bg-black/5 dark:bg-white/5 -z-10 rounded-md transform -rotate-2 scale-[0.97] translate-y-2"
                  initial={{ opacity: 0, rotate: -1 }}
                  animate={isBioInView ? { opacity: 1, rotate: -2 } : { opacity: 0, rotate: -1 }}
                  transition={{ delay: 0.6, duration: 1 }}
                />
                <div className="relative h-full w-full overflow-hidden rounded-md">
                  {/* Calque de révélation amélioré */}
                  <motion.div 
                    initial={{ scaleY: 1 }}
                    animate={isBioInView ? { scaleY: 0 } : { scaleY: 1 }}
                    transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 bg-zinc-50 dark:bg-zinc-900 origin-top z-10"
                  />
                  
                  <Image 
                    src="/Rocket Boy.svg"
                    alt="Portrait de Mamadou Cisse"
                    width={600}
                    height={750}
                    priority
                    onLoad={() => setImageLoaded(true)}
                    className={`object-cover w-full h-full transform transition-all duration-1000 ${imageLoaded ? 'scale-100' : 'scale-110'}`}
                  />
                  
                  {/* Éléments décoratifs artistiques sur l'image */}
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={isBioInView ? { height: "70%" } : { height: 0 }}
                    transition={{ delay: 1, duration: 1.2 }}
                    className="absolute left-4 top-4 w-[1px] bg-white/50 mix-blend-overlay"
                  />
                  
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={isBioInView ? { width: "30%" } : { width: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute left-4 top-4 h-[1px] bg-white/50 mix-blend-overlay"
                  />
                  
                  {/* Élément décoratif circulaire en rotation */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={isBioInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 1.5, duration: 0.6, type: "spring" }}
                    className="absolute right-4 bottom-4 w-8 h-8 border border-white/30 rounded-full flex items-center justify-center"
                  >
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-full h-full"
                    >
                      <span className="block absolute top-0 left-1/2 -ml-px w-[1px] h-1/2 bg-white/30 origin-bottom"></span>
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Badge avec animation subtile */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={isBioInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                  className="absolute -bottom-6 -right-6 bg-black dark:bg-white text-white dark:text-black text-xs tracking-wider py-2 px-4 font-light"
                >
                  Développeur Web
                </motion.div>
              </div>
              
              {/* Navigation interactive entre sections avec icônes */}
              <nav className="mt-12 space-y-4 pl-4">
                {[
                  { id: "identity", label: "Identité", icon: <Users className="w-3.5 h-3.5 mr-2 opacity-70" /> },
                  { id: "vision", label: "Vision", icon: <Lightbulb className="w-3.5 h-3.5 mr-2 opacity-70" /> },
                  { id: "values", label: "Valeurs", icon: <Heart className="w-3.5 h-3.5 mr-2 opacity-70" /> },
                  { id: "method", label: "Approche", icon: <Compass className="w-3.5 h-3.5 mr-2 opacity-70" /> },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveBioSection(item.id)}
                    className={`block text-sm tracking-wider group transition-all pl-4 py-2 border-l-2 flex items-center ${
                      activeBioSection === item.id
                        ? "border-black dark:border-white text-black dark:text-white font-medium"
                        : "border-black/10 dark:border-white/10 text-black/40 dark:text-white/40 hover:border-black/30 hover:text-black/60 dark:hover:border-white/30 dark:hover:text-white/60"
                    }`}
                  >
                    {item.icon}
                    <motion.span
                      initial={{ x: 0 }}
                      animate={{ x: activeBioSection === item.id ? 5 : 0 }}
                      className="inline-block"
                    >
                      {item.label}
                    </motion.span>
                  </button>
                ))}
              </nav>
              
              {/* Citation personnelle avec typographie expressive */}
              <motion.blockquote 
                initial={{ opacity: 0 }}
                animate={isBioInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.6, duration: 1 }}
                className="mt-16 relative pl-5 border-l border-black/10 dark:border-white/10 mx-auto"
              >
                <p className="text-sm leading-relaxed text-black/60 dark:text-white/60 italic">
                  "Je crois que la technologie doit rester humaine. Derrière chaque projet, 
                  je cherche à créer des connexions significatives entre les personnes et les interfaces."
                </p>
              </motion.blockquote>
            </div>
            
            {/* Contenu principal avec animation entre sections */}
            <div className="md:col-span-9 relative">
              <AnimatePresence mode="wait">
                {activeBioSection === "identity" && (
                  <motion.div 
                    key="identity"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12"
                  >
                    <div className="space-y-6">
                      <h2 className="font-light text-3xl tracking-tight">
                        <span className="inline-block w-10 h-[1px] bg-black/30 dark:bg-white/30 mr-3 align-middle"></span>
                        Qui je suis
                      </h2>
                      <div className="space-y-6 text-black/70 dark:text-white/70 leading-relaxed pl-0 lg:pl-14">
                        <p>
                          Développeur web passionné par l'art de créer des expériences numériques exceptionnelles, 
                          j'évolue à l'intersection du design et de la technologie. Avec une sensibilité particulière pour 
                          l'UI/UX et une expertise technique solide, je façonne des interfaces qui allient esthétique et performance.
                        </p>
                        <p>
                          Mon parcours m'a amené à maîtriser l'écosystème JavaScript moderne — particulièrement 
                          React et Next.js — tout en restant constamment à l'affût des avancées technologiques et 
                          des meilleures pratiques de l'industrie.
                        </p>
                        
                        {/* Nouvelle section personnelle */}
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="bg-white/50 dark:bg-black/50 rounded-lg p-5 shadow-sm"
                          >
                            <div className="text-xl font-light mb-2">Au-delà du code</div>
                            <p className="text-sm text-black/60 dark:text-white/60">
                              Quand je ne code pas, j'explore l'univers et les phénomènes spatiaux qui me fascinent, ou je me détends en jouant à FIFA Ultimate Team mon PSN(M_neptune04).
                            </p>
                          </motion.div>
                          
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="bg-white/50 dark:bg-black/50 rounded-lg p-5 shadow-sm"
                          >
                            <div className="text-xl font-light mb-2">Ce qui m'anime</div>
                            <p className="text-sm text-black/60 dark:text-white/60">
                              La rencontre entre esthétique épurée et fonctionnalité intuitive, la résolution créative de problèmes, et le pouvoir de la technologie bien pensée.
                            </p>
                          </motion.div>
                        </div>
                        
                        <p className="text-black/50 dark:text-white/50 text-sm border-l-2 border-black/10 dark:border-white/10 pl-4 italic mt-8">
                          Mon approche du développement est façonnée par ma conviction profonde que le meilleur code est celui qui s'efface pour laisser place à l'expérience utilisateur.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {activeBioSection === "vision" && (
                  <motion.div 
                    key="vision"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12"
                  >
                    <div className="space-y-6">
                      <h2 className="font-light text-3xl tracking-tight">
                        <span className="inline-block w-10 h-[1px] bg-black/30 dark:bg-white/30 mr-3 align-middle"></span>
                        Ma vision
                      </h2>
                      <div className="space-y-6 text-black/70 dark:text-white/70 leading-relaxed pl-0 lg:pl-14">
                        <p>
                          Je crois fermement que la technologie doit être au service de l'humain, et non l'inverse. 
                          Chaque projet que j'entreprends est guidé par cette conviction : créer des produits qui apportent 
                          une valeur réelle et durable, tout en respectant l'utilisateur.
                        </p>
                        
                        <p>
                          Mon approche allie rigueur technique et sensibilité créative. Je m'efforce de trouver l'équilibre 
                          parfait entre innovation et accessibilité, entre audace visuelle et expérience utilisateur intuitive.
                        </p>
                        
                        {/* Nouvelles cartes avec animations améliorées */}
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            whileHover={{ y: -3, transition: { duration: 0.2 } }}
                            className="p-6 bg-white/50 dark:bg-white/5 rounded-lg shadow-sm border border-black/5 dark:border-white/10"
                          >
                            <h3 className="font-medium mb-3 flex items-center">
                              <span className="w-1 h-1 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                              Technologie humanisée
                            </h3>
                            <p className="text-sm text-black/60 dark:text-white/60">
                              Le numérique doit enrichir l'expérience humaine, non la déshumaniser. J'approche chaque projet avec cette sensibilité.
                            </p>
                          </motion.div>
                          
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            whileHover={{ y: -3, transition: { duration: 0.2 } }}
                            className="p-6 bg-white/50 dark:bg-white/5 rounded-lg shadow-sm border border-black/5 dark:border-white/10"
                          >
                            <h3 className="font-medium mb-3 flex items-center">
                              <span className="w-1 h-1 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                              Minimalisme fonctionnel
                            </h3>
                            <p className="text-sm text-black/60 dark:text-white/60">
                              La complexité doit rester invisible. Je privilégie l'élégance et la simplicité comme vecteurs d'efficacité.
                            </p>
                          </motion.div>
                        </div>
                        
                        {/* Citation inspirante */}
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6, duration: 0.8 }}
                          className="mt-10 py-6"
                        >
                          <div className="flex">
                            <div className="text-3xl text-black/20 dark:text-white/20 mr-4">"</div>
                            <div>
                              <p className="italic text-black/60 dark:text-white/60 text-lg">
                                La technologie la plus profonde est celle qui disparaît. Elle s'intègre dans la trame de la vie quotidienne jusqu'à ce qu'on ne puisse plus l'en distinguer.
                              </p>
                              <p className="text-right mt-2 text-sm text-black/40 dark:text-white/40">— Mark Weiser</p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {activeBioSection === "values" && (
                  <motion.div 
                    key="values"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12"
                  >
                    <div className="space-y-6">
                      <h2 className="font-light text-3xl tracking-tight">
                        <span className="inline-block w-10 h-[1px] bg-black/30 dark:bg-white/30 mr-3 align-middle"></span>
                        Mes valeurs
                      </h2>
                      <div className="pl-0 lg:pl-14">
                        {/* Nouvelles cartes de valeurs avec des animations enrichies */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
                          {[
                            {
                              name: "Excellence",
                              description: "Je m'efforce d'atteindre l'excellence dans chaque aspect de mon travail, des détails visuels à la qualité du code.",
                              icon: "✦"
                            },
                            {
                              name: "Éthique",
                              description: "Je m'engage à créer des solutions responsables qui respectent la vie privée et l'accessibilité pour tous.",
                              icon: "◎"
                            },
                            {
                              name: "Innovation",
                              description: "Je cultive une curiosité constante et cherche à explorer de nouvelles approches pour résoudre des problèmes complexes.",
                              icon: "◈"
                            },
                            {
                              name: "Collaboration",
                              description: "Je crois au pouvoir de l'intelligence collective et valorise le travail d'équipe ouvert et transparent.",
                              icon: "◬"
                            }
                          ].map((value, i) => (
                            <motion.div 
                              key={value.name}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1, duration: 0.5 }}
                              whileHover={{ 
                                y: -5, 
                                backgroundColor: "rgba(255,255,255,0.8)",
                                transition: { duration: 0.2 } 
                              }}
                              className="relative group p-5 rounded-lg transition-colors duration-300 dark:hover:bg-white/10"
                            >
                              <div className="absolute -left-10 top-0 text-2xl text-black/20 dark:text-white/20 group-hover:text-black/40 dark:group-hover:text-white/40 transition-colors">
                                {value.icon}
                              </div>
                              <h3 className="text-base font-medium mb-3">{value.name}</h3>
                              <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">{value.description}</p>
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-px w-full bg-gradient-to-r from-black/10 dark:from-white/10 to-transparent mt-4"
                              />
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Cadre philosophique artistique */}
                        <div className="mt-16 py-8 px-6 bg-black/5 dark:bg-white/5 rounded-lg relative overflow-hidden">
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="relative z-10"
                          >
                            <h3 className="text-sm uppercase tracking-wider text-black/50 dark:text-white/50 mb-2">Ma philosophie</h3>
                            <p className="text-lg text-black/80 dark:text-white/80 leading-relaxed font-light">
                              "Le vrai minimalisme n'est pas l'absence, mais la présence de l'essentiel."
                            </p>
                          </motion.div>
                          
                          {/* Élément décoratif dynamique */}
                          <motion.div 
                            animate={{ 
                              rotate: [0, 5, 0, -5, 0],
                              scale: [1, 1.05, 1, 1.05, 1]
                            }}
                            transition={{ 
                              duration: 12, 
                              ease: "easeInOut", 
                              repeat: Infinity,
                            }}
                            className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-tr from-black/5 dark:from-white/5 to-transparent rounded-full opacity-50"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {activeBioSection === "method" && (
                  <motion.div 
                    key="method"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12"
                  >
                    <div className="space-y-6">
                      <h2 className="font-light text-3xl tracking-tight">
                        <span className="inline-block w-10 h-[1px] bg-black/30 dark:bg-white/30 mr-3 align-middle"></span>
                        Ma méthode
                      </h2>
                      <div className="pl-0 lg:pl-14">
                        {/* Étapes de travail enrichies visuellement */}
                        <div className="flex flex-col space-y-8">
                          {[
                            { 
                              num: "01", 
                              title: "Comprendre", 
                              desc: "Immersion profonde dans chaque projet pour saisir ses enjeux essentiels et les besoins des utilisateurs.",
                              detail: "Je consacre un temps significatif à l'écoute et l'analyse avant de commencer à concevoir."
                            },
                            { 
                              num: "02", 
                              title: "Concevoir", 
                              desc: "Élaboration d'architectures robustes et d'interfaces élégantes, privilégiant l'harmonie et la simplicité.",
                              detail: "Chaque élément est pensé dans sa relation à l'ensemble, créant une cohérence globale."
                            },
                            { 
                              num: "03", 
                              title: "Développer", 
                              desc: "Implémentation avec des standards élevés : code propre, optimisé et maintenable.",
                              detail: "Je construis des fondations solides qui permettront l'évolution du projet dans le temps."
                            },
                            { 
                              num: "04", 
                              title: "Affiner", 
                              desc: "Processus continu d'itération et d'amélioration basé sur les tests et retours utilisateurs.",
                              detail: "La perfection réside dans les détails et dans la capacité à s'adapter aux besoins réels."
                            },
                          ].map((step, i) => (
                            <motion.div 
                              key={step.num}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                              whileHover={{ x: 3, transition: { duration: 0.2 } }}
                              className="flex group"
                            >
                              <div className="mr-8 flex-shrink-0">
                                <motion.div 
                                  whileHover={{ 
                                    scale: 1.05, 
                                    backgroundColor: "rgba(0,0,0,0.03)",
                                    borderColor: "rgba(0,0,0,0.3)",
                                    color: "rgba(0,0,0,0.6)"
                                  }}
                                  transition={{ duration: 0.2 }}
                                  className="flex items-center justify-center w-14 h-14 rounded-full border border-black/10 dark:border-white/10 text-sm text-black/40 dark:text-white/40 group-hover:border-black/30 dark:group-hover:border-white/30 group-hover:text-black/60 dark:group-hover:text-white/60 transition-all dark:hover:bg-white/5"
                                >
                                  {step.num}
                                </motion.div>
                              </div>
                              <div className="pt-1">
                                <h3 className="font-medium text-xl mb-2">{step.title}</h3>
                                <p className="text-black/70 dark:text-white/70 leading-relaxed max-w-lg mb-2">{step.desc}</p>
                                <p className="text-sm text-black/50 dark:text-white/50 italic">{step.detail}</p>
                                
                                <motion.div 
                                  initial={{ width: 0 }}
                                  whileInView={{ width: "100%" }}
                                  transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                  className="h-px w-full bg-gradient-to-r from-black/10 dark:from-white/10 to-transparent mt-6 mb-8"
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Carte de signature professionnelle */}
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.8 }}
                          whileHover={{ 
                            y: -3,
                            borderColor: "rgba(0,0,0,0.2)",
                            transition: { duration: 0.2 } 
                          }}
                          className="mt-12 p-6 border-l-2 border-black/10 dark:border-white/10 bg-gradient-to-br from-white/80 dark:from-white/5 to-transparent rounded-r-lg"
                        >
                          <h3 className="text-base font-medium mb-3 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-black/40 dark:text-white/40" />
                            Ma signature
                          </h3>
                          <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">
                            Je considère chaque projet comme une œuvre à part entière, méritant attention et personnalité.
                            Mon approche équilibre pragmatisme et créativité, technique et émotion.
                          </p>
                          
                          {/* Nouveau - Tags signature */}
                          <div className="flex flex-wrap gap-2 mt-4">
                            {["Élégance", "Précision", "Optimisation", "Innovation"].map((tag, i) => (
                              <motion.span
                                key={tag}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1 + (i * 0.1), duration: 0.4 }}
                                className="inline-block px-3 py-1 text-xs bg-black/5 dark:bg-white/5 rounded-full text-black/60 dark:text-white/60"
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        {/* Section appel à l'action - Design artistique */}
        <div className="py-32 max-w-4xl mx-auto text-center relative z-10">
          {/* Élément décoratif supérieur amélioré */}
          <motion.svg 
            initial={{ opacity: 0 }}
            animate={isBioInView ? { opacity: 0.15 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute left-1/2 top-0 -translate-x-1/2 w-40 h-40 text-black dark:text-white"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.3" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.2" />
            <motion.path
              d="M50,5 L50,95 M5,50 L95,50"
              stroke="currentColor"
              strokeWidth="0.2"
              strokeDasharray="1 3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 2 }}
            />
          </motion.svg>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isBioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="relative inline-block"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-10">Prêt à collaborer ?</h2>
            <div className="absolute bottom-1 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-black/20 dark:via-white/20 to-transparent"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isBioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-16"
          >
            <Link 
              href="/contact" 
              className="group relative inline-flex h-14 overflow-hidden rounded-full bg-black dark:bg-white px-8 py-4 hover:pr-14 transition-all duration-300"
            >
              <span className="relative flex items-center justify-center text-sm tracking-wider text-white dark:text-black z-10">
                Démarrons un projet
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-0 group-hover:w-5 transition-all duration-300 ml-0 group-hover:ml-2 opacity-0 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute right-0 top-0 bottom-0 w-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4"
                >
                  <span className="block absolute top-0 left-1/2 -ml-px w-[1px] h-1/2 bg-white/60 dark:bg-black/60 origin-bottom"></span>
                </motion.div>
              </span>
            </Link>
            
            <Link 
              href="/cv.pdf" 
              className="group text-sm tracking-wider underline underline-offset-4 decoration-black/20 dark:decoration-white/20 hover:decoration-black/60 dark:hover:decoration-white/60 transition-all relative py-2"
            >
              <span className="relative z-10">Consulter mon CV</span>
              <motion.span 
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 h-[2px] w-full bg-black/5 dark:bg-white/5 origin-left"
              ></motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Indicateur de scroll artistique enrichi */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="fixed bottom-8 right-8 flex flex-col items-center space-y-2 z-10 mix-blend-difference"
      >
        <motion.div 
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.3, 1, 0.3],
            height: [10, 16, 10]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-[1px] h-16 bg-white"
        ></motion.div>
        <span className="text-xs uppercase tracking-widest text-white rotate-90 origin-center translate-x-6">scroll</span>
      </motion.div>
    </motion.section>
  );
}