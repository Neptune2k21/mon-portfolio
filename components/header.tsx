"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useAnimation, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { usePathname } from "next/navigation";
import { CVModal } from "./cv-modal";
import { Icon } from "@iconify/react"
import ThemeToggle from "./theme-toggle";
import { isClient } from "@/lib/utils";
import React from "react";

// Enregistrement du plugin ScrollTrigger
if (isClient) {
  gsap.registerPlugin(ScrollTrigger);
}

// Variantes d'animation optimisées pour mobile
const createMenuVariants = (shouldReduceMotion: boolean) => ({
  closed: {
    opacity: 0,
    transition: {
      duration: shouldReduceMotion ? 0.1 : 0.15,
      ease: "easeInOut",
      staggerChildren: shouldReduceMotion ? 0 : 0.02,
      staggerDirection: -1,
      when: "afterChildren"
    }
  },
  open: {
    opacity: 1,
    transition: {
      duration: shouldReduceMotion ? 0.1 : 0.2,
      ease: "easeOut",
      staggerChildren: shouldReduceMotion ? 0 : 0.03,
      delayChildren: shouldReduceMotion ? 0 : 0.02,
      when: "beforeChildren"
    }
  }
});

// Animation des éléments du menu optimisée
const createMenuItemVariants = (shouldReduceMotion: boolean) => ({
  closed: (i: number) => ({ 
    y: shouldReduceMotion ? 0 : 10, 
    opacity: 0,
    transition: { 
      duration: shouldReduceMotion ? 0.05 : 0.1,
      delay: shouldReduceMotion ? 0 : i * 0.01
    }
  }),
  open: (i: number) => ({ 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: shouldReduceMotion ? 0.1 : 0.2, 
      delay: shouldReduceMotion ? 0 : i * 0.03,
      ease: "easeOut"
    }
  })
});

// Variantes pour le menu desktop optimisées
const createNavVariants = (shouldReduceMotion: boolean) => ({
  hidden: { y: shouldReduceMotion ? 0 : -50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: shouldReduceMotion ? 0.1 : 0.4, 
      ease: "easeOut",
      staggerChildren: shouldReduceMotion ? 0 : 0.05
    }
  }
});

const createItemVariants = (shouldReduceMotion: boolean) => ({
  hidden: { y: shouldReduceMotion ? 0 : -10, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: shouldReduceMotion ? 0.1 : 0.3, 
      ease: "easeOut" 
    }
  }
});

// Formes géométriques pour l'arrière-plan optimisées
const ShapesBackground = React.memo(() => {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full bg-primary/5" />
        <div className="absolute bottom-[30%] right-[15%] w-24 h-24 rounded-full border border-primary/20" />
        <div className="absolute top-[60%] left-[25%] w-16 h-16 rounded-md bg-secondary/5 rotate-45" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full bg-primary/5"
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, 10, 0],
          rotate: [0, 45, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-[30%] right-[15%] w-24 h-24 rounded-full border border-primary/20"
        animate={{ 
          scale: [1, 0.9, 1],
          y: [0, -15, 0],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute top-[60%] left-[25%] w-16 h-16 rounded-md bg-secondary/5 rotate-45"
        animate={{ 
          rotate: [45, 135, 45],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
});

ShapesBackground.displayName = 'ShapesBackground';

// Menu mobile optimisé
const FullscreenMobileMenu = React.memo(({ 
  isOpen, 
  onClose, 
  navItems, 
  pathname, 
  onCVClick 
}: { 
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{ label: string; href: string }>;
  pathname: string;
  onCVClick: () => void;
}) => {
  const controls = useAnimation();
  const shouldReduceMotion = useReducedMotion();
  
  // Mémorisation des variantes d'animation
  const menuVariants = useMemo(() => createMenuVariants(shouldReduceMotion), [shouldReduceMotion]);
  const menuItemVariants = useMemo(() => createMenuItemVariants(shouldReduceMotion), [shouldReduceMotion]);
  
  // Callback optimisé pour la fermeture
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);
  
  const handleCVClick = useCallback(() => {
    onCVClick();
    onClose();
  }, [onCVClick, onClose]);

  // Synchroniser les contrôles avec l'état d'ouverture
  useEffect(() => {
    if (isOpen) {
      controls.start("open");
    } else {
      controls.start("closed");
    }
  }, [isOpen, controls]);

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex flex-col bg-background will-change-transform"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
          transition={{ 
            duration: shouldReduceMotion ? 0.1 : 0.2,
            ease: "easeOut"
          }}
        >
          {/* Header du menu */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <motion.div 
              className="flex items-center gap-3"
              initial={{ x: shouldReduceMotion ? 0 : -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.05, duration: shouldReduceMotion ? 0.1 : 0.2 }}
            >
              <div className="relative">
                <Image 
                  src="/neptune.svg" 
                  alt="CisseMamadou Logo" 
                  width={36} 
                  height={36} 
                  className="rounded-full" 
                  priority={true}
                />
                {!shouldReduceMotion && (
                  <motion.div 
                    className="absolute -inset-1 rounded-full bg-primary/10"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                )}
              </div>
              <span className="text-xl font-semibold text-foreground">
                Cisse<span className="font-bold">Mamadou</span>
              </span>
            </motion.div>
            
            <motion.button
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              onClick={handleClose}
              className="p-2.5 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Fermer le menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          </div>
          
          {/* Menu principal */}
          <motion.div 
            className="flex-1 flex flex-col justify-center px-8 py-10"
            variants={menuVariants}
            initial="closed"
            animate={controls}
          >
            <nav className="space-y-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  variants={menuItemVariants}
                  custom={index}
                >
                  <Link 
                    href={item.href} 
                    className="flex items-center group"
                    onClick={handleClose}
                  >
                    <motion.span 
                      className={`inline-block text-3xl md:text-4xl font-bold transition-colors ${
                        pathname === item.href 
                          ? "text-primary" 
                          : "text-foreground"
                      }`}
                      whileHover={shouldReduceMotion ? {} : { x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      {item.label}
                    </motion.span>
                    
                    <motion.div
                      initial={{ width: pathname === item.href ? 30 : 0 }}
                      whileHover={{ width: 30 }}
                      className="h-1 bg-primary ml-4 rounded-full origin-left"
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            {/* Bouton CV */}
            <motion.div 
              className="mt-12"
              variants={menuItemVariants}
            >
              <motion.button
                onClick={handleCVClick}
                className="flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -1 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }}
              >
                <span className="text-lg">Voir mon CV</span>
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  animate={shouldReduceMotion ? {} : { y: [0, -2, 0] }}
                  transition={shouldReduceMotion ? {} : { duration: 2, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-6-6m6 6l6-6" />
                </motion.svg>
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Footer */}
          <motion.div 
            className="px-8 py-6 border-t border-border flex justify-between items-center"
            variants={menuItemVariants}
          >
            <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} Cisse Mamadou</span>
            
            <div className="flex gap-3">
              <motion.a
                href="https://github.com/Neptune2k21"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mamadou-lamine-ciss%C3%A9/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

FullscreenMobileMenu.displayName = 'FullscreenMobileMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  
  // Navigation items mémorisés
  const navItems = useMemo(() => [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Compétences", href: "/competences" },
    { label: "Expériences", href: "/experiences" },
    { label: "Contact", href: "/contact" }
  ], []);

  // Animation au scroll pour le header optimisée
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.98]);
  const headerY = useTransform(scrollY, [0, 100], [0, shouldReduceMotion ? 0 : -4]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, shouldReduceMotion ? 0 : 4]);

  // Callbacks mémorisés
  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleCVModalOpen = useCallback(() => {
    setIsCVModalOpen(true);
  }, []);

  const handleCVModalClose = useCallback(() => {
    setIsCVModalOpen(false);
  }, []);

  // Mémorisation des variantes
  const navVariants = useMemo(() => createNavVariants(shouldReduceMotion), [shouldReduceMotion]);
  const itemVariants = useMemo(() => createItemVariants(shouldReduceMotion), [shouldReduceMotion]);
  
  // Effet pour détecter le défilement optimisé
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation au chargement optimisée
  useEffect(() => {
    if (shouldReduceMotion) return;
    
    const tl = gsap.timeline();
    
    tl.fromTo(
      ".logo-container",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );

    tl.fromTo(
      ".nav-item",
      { opacity: 0, y: -8 },
      { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, ease: "power2.out" },
      "-=0.3"
    );

    tl.fromTo(
      ".cv-button",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" },
      "-=0.2"
    );

    tl.fromTo(
      ".menu-trigger",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" },
      "-=0.4"
    );
  }, [shouldReduceMotion]);

  // Bouton de menu mobile optimisé
  const MenuTrigger = useCallback(() => (
    <motion.button 
      className="menu-trigger md:hidden relative w-12 h-12 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-full shadow-sm border border-border z-50"
      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
      onClick={handleMenuToggle}
      aria-label="Ouvrir le menu"
    >
      <motion.div className="relative w-6 h-6">
        {/* Animation du bouton simplifiée */}
        <motion.div 
          className="absolute top-1 w-6 h-0.5 bg-foreground rounded-full"
          animate={{ 
            rotate: isMenuOpen ? 45 : 0,
            y: isMenuOpen ? 6 : 0
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute top-3 w-5 h-0.5 bg-foreground rounded-full"
          animate={{ 
            opacity: isMenuOpen ? 0 : 1,
            x: isMenuOpen ? 10 : 0
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute top-5 w-6 h-0.5 bg-foreground rounded-full"
          animate={{ 
            rotate: isMenuOpen ? -45 : 0,
            y: isMenuOpen ? -6 : 0
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </motion.div>
    </motion.button>
  ), [isMenuOpen, handleMenuToggle, shouldReduceMotion]);

  return (
    <>
      <motion.header
        ref={headerRef}
        style={{ 
          opacity: headerOpacity,
          y: headerY,
          backdropFilter: shouldReduceMotion ? 'none' : `blur(${headerBlur}px)`
        }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 will-change-transform ${
          scrolled 
            ? "bg-background/95 shadow-sm py-2" 
            : "bg-background/80 py-3"
        }`}
      >
        <ShapesBackground />
        
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo avec animation optimisée */}
            <Link href="/" className="logo-container">
              <motion.div 
                className="flex items-center gap-3 group"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              >
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { rotate: 180 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative z-10"
                >
                  <div className="relative">
                    <Image 
                      src="/neptune.svg" 
                      alt="CisseMamadou Logo" 
                      width={32} 
                      height={32} 
                      className="rounded-full z-10 relative" 
                    />
                    {!shouldReduceMotion && (
                      <motion.div 
                        className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 z-0"
                        animate={{ 
                          rotate: [0, 360],
                        }}
                        transition={{ 
                          duration: 10, 
                          repeat: Infinity,
                          ease: "linear" 
                        }}
                      />
                    )}
                  </div>
                </motion.div>

                <motion.span 
                  className="text-lg font-semibold tracking-tight relative overflow-hidden"
                  initial={{ x: 0 }}
                  whileHover={shouldReduceMotion ? {} : { x: 2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                    Cisse<span className="font-bold">Mamadou</span>
                  </span>
                  {!shouldReduceMotion && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-secondary w-full"
                      initial={{ scaleX: 0, originX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.span>
              </motion.div>
            </Link>

            {/* Bouton de menu mobile */}
            <MenuTrigger />

            {/* Navigation desktop optimisée */}
            <motion.nav 
              className="hidden md:flex items-center gap-1" 
              variants={navVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="relative flex bg-muted/40 backdrop-blur-sm rounded-full p-1">
                {navItems.map((item) => (
                  <Link href={item.href} key={item.href} className="nav-item relative z-10">
                    <motion.div
                      variants={itemVariants}
                      className={`relative px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                        pathname === item.href 
                        ? "text-white dark:text-gray-900" 
                        : "text-muted-foreground hover:text-foreground"
                      }`}
                      whileHover={shouldReduceMotion ? {} : { y: -1 }}
                      data-section={item.href.replace('/', '')}
                    >
                      {pathname === item.href && (
                        <motion.div
                          className="absolute inset-0 bg-primary rounded-full -z-10"
                          layoutId="navActive"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30
                          }}
                        />
                      )}
                      {item.label}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.nav>

            {/* Bouton CV optimisé */}
            <motion.button
              className="cv-button hidden md:flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-black to-gray-800 text-white rounded-full font-medium shadow-sm"
              whileHover={shouldReduceMotion ? {} : { 
                scale: 1.02,
                boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.2)" 
              }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              onClick={handleCVModalOpen}
            >
              <span>Mon CV</span>
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
                animate={shouldReduceMotion ? {} : { y: [0, -1, 0] }}
                transition={shouldReduceMotion ? {} : { duration: 2, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m0 0l-6-6m6 6l6-6" />
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Menu mobile fullscreen optimisé */}
      <FullscreenMobileMenu 
        isOpen={isMenuOpen}
        onClose={handleMenuClose}
        navItems={navItems}
        pathname={pathname}
        onCVClick={handleCVModalOpen}
      />
      
      {/* Modal CV */}
      <CVModal 
        isOpen={isCVModalOpen} 
        onClose={handleCVModalClose} 
      />

      {/* Indicateurs de défilement flottants optimisés */}
      <motion.div
        initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: shouldReduceMotion ? 0 : 0.8, duration: shouldReduceMotion ? 0.1 : 0.5, ease: "easeOut" }}
        className="fixed right-6 bottom-0 z-30 hidden lg:flex flex-col items-center gap-4"
      >
        {/* Social Icons optimisés */}
        <div className="flex flex-col items-center gap-4">
          <motion.a 
            href="https://github.com/Neptune2k21"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.1 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            className="p-2.5 rounded-full bg-background/80 shadow-sm backdrop-blur-sm border border-gray-200 dark:border-gray-800 text-foreground hover:text-primary transition-colors"
          >
            <Icon icon="akar-icons:github-fill" width="18" height="18" />
          </motion.a>
          
          <motion.a 
            href="https://www.linkedin.com/in/mamadou-lamine-ciss%C3%A9/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.1 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            className="p-2.5 rounded-full bg-background/80 shadow-sm backdrop-blur-sm border border-gray-200 dark:border-gray-800 text-foreground hover:text-primary transition-colors"
          >
            <Icon icon="akar-icons:linkedin-fill" width="18" height="18" />
          </motion.a>
          
          <motion.a 
            href="mailto:contact@cissemamadou.dev"
            whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.1 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            className="p-2.5 rounded-full bg-background/80 shadow-sm backdrop-blur-sm border border-gray-200 dark:border-gray-800 text-foreground hover:text-primary transition-colors"
          >
            <Icon icon="fluent:mail-16-filled" width="18" height="18" />
          </motion.a>
        </div>
        
        {/* Vertical line optimisée */}
        <motion.div 
          className="w-px h-20 bg-gradient-to-b from-transparent via-primary/60 to-primary"
          initial={{ height: 0 }}
          animate={{ height: shouldReduceMotion ? 80 : 80 }}
          transition={{ delay: shouldReduceMotion ? 0 : 1.2, duration: shouldReduceMotion ? 0.1 : 0.8, ease: "easeOut" }}
        />
        
        {/* Theme Toggle */}
        <ThemeToggle/>
      </motion.div>
    </>
  );
}