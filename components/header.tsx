"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { usePathname } from "next/navigation";
import { CVModal } from "./cv-modal";
import { Icon } from "@iconify/react"
import ThemeToggle from "./theme-toggle";
import { isClient } from "@/lib/utils";

// Enregistrement du plugin ScrollTrigger
if (isClient) {
  gsap.registerPlugin(ScrollTrigger);
}
// Variantes d'animation pour le menu mobile
const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

// Animation des éléments du menu
const menuItemVariants = {
    closed: { 
      y: 20, 
      opacity: 0,
      transition: { duration: 0.2 }
    },
    open: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    }
  };

// Variantes pour le menu desktop
const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

// Formes géométriques pour l'arrière-plan
const ShapesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full bg-primary/5"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          rotate: [0, 90, 0]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-[30%] right-[15%] w-24 h-24 rounded-full border border-primary/20"
        animate={{ 
          scale: [1, 0.8, 1],
          y: [0, -30, 0],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute top-[60%] left-[25%] w-16 h-16 rounded-md bg-secondary/5 rotate-45"
        animate={{ 
          rotate: [45, 225, 45],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};


  
  // Nouveau menu mobile plein écran
  const FullscreenMobileMenu = ({ 
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
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex flex-col bg-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header du menu */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center gap-3">
                <Image 
                  src="/neptune.svg" 
                  alt="CisseMamadou Logo" 
                  width={36} 
                  height={36} 
                  className="rounded-full" 
                />
                <span className="text-xl font-semibold">
                  Cisse<span className="font-bold">Mamadou</span>
                </span>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-full bg-gray-100"
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
              animate="open"
              exit="closed"
            >
              <nav className="space-y-8">
                {navItems.map((item) => (
                  <motion.div
                    key={item.href}
                    variants={menuItemVariants}
                  >
                    <Link 
                      href={item.href} 
                      className="flex items-center group"
                      onClick={onClose}
                    >
                      <motion.span 
                        className={`inline-block text-4xl font-bold transition-colors ${
                          pathname === item.href 
                            ? "text-primary" 
                            : "text-gray-800"
                        }`}
                        whileHover={{ x: 10 }}
                      >
                        {item.label}
                      </motion.span>
                      
                      <motion.div
                        initial={{ width: pathname === item.href ? 40 : 0 }}
                        whileHover={{ width: 40 }}
                        className="h-1 bg-primary ml-4 rounded-full"
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              {/* Bouton CV */}
              <motion.div 
                className="mt-16"
                variants={menuItemVariants}
              >
                <motion.button
                  onClick={() => {
                    onClose();
                    onCVClick();
                  }}
                  className="flex items-center gap-3 px-8 py-4 bg-black text-white rounded-lg font-medium"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="text-lg">Voir mon CV</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-6-6m6 6l6-6" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
            
            {/* Footer du menu */}
            <motion.div 
              className="px-8 py-6 border-t flex justify-between items-center"
              variants={menuItemVariants}
            >
              <span className="text-sm text-gray-500">© 2023 Cisse Mamadou</span>
              
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/Neptune2k21"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-3 rounded-full bg-gray-100"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/mamadou-lamine-ciss%C3%A9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-3 rounded-full bg-gray-100"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
  };

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef(null);
  
  // Navigation items
  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Compétences", href: "/competences" },
    { label: "Expériences", href: "/experiences" },
    { label: "Contact", href: "/contact" }
  ];

  // Animation au scroll pour le header
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.98]);
  const headerY = useTransform(scrollY, [0, 100], [0, -8]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 8]);
  
  // Indicateur de section active au scroll
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sections = navItems.map(item => item.href).filter(href => href !== '/');
      
      const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Mettre à jour la section active
            const activeSectionId = entry.target.id;
            const activeNavLink = document.querySelector(`[data-section="${activeSectionId}"]`);
            
            if (activeNavLink) {
              // Animer le lien actif
              gsap.to(activeNavLink, {
                scale: 1.1,
                color: 'var(--primary)',
                duration: 0.3,
                ease: 'power1.out'
              });
            }
          }
        });
      }, observerOptions);

      // Observer chaque section
      sections.forEach(section => {
        const element = document.getElementById(section.replace('/', ''));
        if (element) observer.observe(element);
      });

      return () => {
        sections.forEach(section => {
          const element = document.getElementById(section.replace('/', ''));
          if (element) observer.unobserve(element);
        });
      };
    }
  }, [navItems]);

  // Effet pour détecter le défilement et appliquer des styles différents
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation au chargement de la page
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      ".logo-container",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
    );

    tl.fromTo(
      ".nav-item",
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "back.out(1.5)" },
      "-=0.4"
    );

    tl.fromTo(
      ".cv-button",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "elastic.out(1, 0.5)" },
      "-=0.2"
    );

    tl.fromTo(
      ".menu-trigger",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "elastic.out(1, 0.5)" },
      "-=0.6"
    );

    // Animation des marqueurs décoratifs
    gsap.fromTo(
      ".nav-marker",
      { width: 0 },
      { 
        width: "100%", 
        duration: 0.8, 
        ease: "power2.inOut",
        delay: 1 
      }
    );
  }, []);

  // Nouveau bouton de menu mobile créatif
  const MenuTrigger = () => (
    <motion.button 
      className="menu-trigger md:hidden relative w-14 h-14 flex items-center justify-center bg-background rounded-full shadow-md overflow-hidden z-50"
      whileHover={{ scale: 1.05, rotate: 5 }}
      whileTap={{ scale: 0.95, rotate: -5 }}
      onClick={() => setIsMenuOpen(true)}
      aria-label="Ouvrir le menu"
    >
      <motion.div 
        className="relative w-7 h-7"
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
      >
        {/* Animation du bouton créative */}
        <motion.div 
          className="absolute top-0 w-7 h-0.5 bg-foreground rounded-full"
          animate={{ 
            rotate: isMenuOpen ? 45 : 0,
            y: isMenuOpen ? 3 : 0
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute top-3 w-5 h-0.5 bg-foreground rounded-full"
          animate={{ 
            x: isMenuOpen ? 100 : 0,
            opacity: isMenuOpen ? 0 : 1
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute top-6 w-7 h-0.5 bg-foreground rounded-full"
          animate={{ 
            rotate: isMenuOpen ? -45 : 0,
            y: isMenuOpen ? -3 : 0
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      
      {/* Élément décoratif du bouton */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );

  return (
    <>
      <motion.header
        ref={headerRef}
        style={{ 
          opacity: headerOpacity,
          y: headerY,
          backdropFilter: `blur(${headerBlur}px)`
        }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? "bg-background/90 shadow-md py-3" 
            : "bg-background/80 py-4"
        }`}
      >
        <ShapesBackground />
        
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo avec animation */}
            <Link href="/" className="logo-container">
              <motion.div 
                className="flex items-center gap-3 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, ease: "anticipate" }}
                  className="relative z-10"
                >
                  <div className="relative">
                    <Image 
                      src="/neptune.svg" 
                      alt="CisseMamadou Logo" 
                      width={36} 
                      height={36} 
                      className="rounded-full z-10 relative" 
                    />
                    <motion.div 
                      className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 z-0"
                      animate={{ 
                        rotate: [0, 360],
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        ease: "linear" 
                      }}
                    />
                  </div>
                </motion.div>

                <motion.span 
                  className="text-xl font-semibold tracking-tight relative overflow-hidden"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                    Cisse<span className="font-bold">Mamadou</span>
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-secondary w-full"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.span>
              </motion.div>
            </Link>

            {/* Bouton de menu mobile optimisé */}
            <MenuTrigger />

            {/* Navigation desktop optimisée */}
            <motion.nav 
              className="hidden md:flex items-center gap-1" 
              variants={navVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="relative flex bg-muted/40 backdrop-blur-sm rounded-full p-1">
                {navItems.map((item, index) => (
                  <Link href={item.href} key={item.href} className="nav-item relative z-10">
                    <motion.div
                      variants={itemVariants}
                      className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                        pathname === item.href 
                        ? "text-white dark:text-gray-900" 
                        : "text-muted-foreground hover:text-foreground"
                      }`}
                      whileHover={{ y: -2 }}
                      data-section={item.href.replace('/', '')}
                    >
                      {pathname === item.href && (
                        <motion.div
                          className="absolute inset-0 bg-primary rounded-full -z-10"
                          layoutId="navActive"
                          transition={{
                            type: "spring",
                            stiffness: 350,
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

            {/* Bouton CV */}
            <motion.button
              className="cv-button hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-black to-gray-800 text-white rounded-full font-medium shadow-md"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCVModalOpen(true)}
            >
              <span>Mon CV</span>
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m0 0l-6-6m6 6l6-6" />
              </motion.svg>
            </motion.button>
          </div>
        </div>

        {/* Indicateur de défilement */}
        <motion.div 
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary/60 via-primary to-secondary/60"
          style={{
            scaleX: useTransform(
              scrollY, 
              [0, document.body?.scrollHeight - window.innerHeight || 1000], 
              [0, 1]
            ),
            transformOrigin: "left"
          }}
        />
      </motion.header>

      {/* Nouveau menu mobile fullscreen */}
      <FullscreenMobileMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navItems={navItems}
        pathname={pathname}
        onCVClick={() => setIsCVModalOpen(true)}
      />
      
      {/* Modal CV */}
      <CVModal 
        isOpen={isCVModalOpen} 
        onClose={() => setIsCVModalOpen(false)} 
      />

      {/* Indicateurs de défilement flottants */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        className="fixed right-8 bottom-0 z-30 hidden lg:flex flex-col items-center gap-6"
      >
        {/* Social Icons with hover effects */}
        <div className="flex flex-col items-center gap-6">
          <motion.a 
        href="https://github.com/Neptune2k21"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -5, scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="p-3 rounded-full bg-background/80 shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-800 text-foreground hover:text-primary transition-colors"
          >
        <Icon icon="akar-icons:github-fill" width="20" height="20" />
          </motion.a>
          
          <motion.a 
        href="https://www.linkedin.com/in/mamadou-lamine-ciss%C3%A9/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -5, scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="p-3 rounded-full bg-background/80 shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-800 text-foreground hover:text-primary transition-colors"
          >
        <Icon icon="akar-icons:linkedin-fill" width="20" height="20" />
          </motion.a>
          
          <motion.a 
        href="mailto:contact@cissemamadou.dev"
        whileHover={{ y: -5, scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="p-3 rounded-full bg-background/80 shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-800 text-foreground hover:text-primary transition-colors"
          >
        <Icon icon="fluent:mail-16-filled" width="20" height="20" />
          </motion.a>
        </div>
        
        {/* Vertical line with animation */}
        <motion.div 
          className="w-px h-24 bg-gradient-to-b from-transparent via-primary/80 to-primary"
          initial={{ height: 0 }}
          animate={{ height: 80 }}
          transition={{ delay: 1.8, duration: 1.2, ease: "easeOut" }}
        />
        
        {/* Theme Toggle */}
        <ThemeToggle/>
        
      </motion.div>
    </>
  );
}