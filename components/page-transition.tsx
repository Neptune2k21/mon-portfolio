"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState, useRef } from "react";
import { useFontOptimization } from "@/hooks/use-font-optimization";
import { usePerformanceOptimizations } from "@/hooks/use-performance-optimizations";

type PageTransitionProps = {
  children: ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");
  const previousPathname = useRef(pathname);
  const { isLowPowerDevice } = usePerformanceOptimizations();
  
  // Optimisation des polices
  useFontOptimization();
  
  // Déterminer si nous devons utiliser des animations réduites pour les appareils à faible puissance
  const shouldReduceAnimations = isLowPowerDevice();
  
  // Effet pour gérer la transition en deux étapes avec optimisations
  useEffect(() => {
    // Si l'affichage actuel est différent des nouveaux enfants
    if (children !== displayChildren) {
      // Sur les appareils à faible puissance, réduire ou supprimer la transition
      if (shouldReduceAnimations) {
        // Transition simplifiée pour les appareils à faible puissance
        setDisplayChildren(children);
        setTransitionStage("fadeIn");
        return;
      }
      
      // Étape 1: Animation de sortie
      setTransitionStage("fadeOut");
      
      // Après l'animation de sortie, mettre à jour le contenu
      // Utiliser requestAnimationFrame pour une meilleure synchronisation avec le navigateur
      const frameId = requestAnimationFrame(() => {
        const timeout = setTimeout(() => {
          setDisplayChildren(children);
          setTransitionStage("fadeIn");
          previousPathname.current = pathname;
        }, 300); // Réduit à 300ms pour plus de fluidité
        
        return () => clearTimeout(timeout);
      });
      
      return () => cancelAnimationFrame(frameId);
    }
  }, [children, displayChildren, pathname, shouldReduceAnimations]);

  // Variantes d'animation optimisées
  const variants = {
    fadeIn: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceAnimations ? 0.2 : 0.3, // Durée réduite pour les appareils à faible puissance
        ease: "easeOut", // Plus simple et moins coûteux en calculs
      },
    },
    fadeOut: {
      opacity: 0,
      x: pathname === previousPathname.current ? 0 : (pathname === "/" ? -30 : 30), // Amplitude réduite pour plus de fluidité
      transition: {
        duration: shouldReduceAnimations ? 0.1 : 0.2, // Encore plus court pour les sorties
        ease: "easeIn", // Plus simple et moins coûteux en calculs
      },
    },
  };

  return (
    <div className="w-full min-h-screen">
      <motion.div
        className="page-content"
        variants={variants}
        animate={transitionStage}
        initial="fadeOut"
      >
        {displayChildren}
      </motion.div>
    </div>
  );
}