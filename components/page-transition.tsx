"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");
  
  // Effet pour gérer la transition en deux étapes
  useEffect(() => {
    // Si l'affichage actuel est différent des nouveaux enfants
    if (children !== displayChildren) {
      // Étape 1: Animation de sortie
      setTransitionStage("fadeOut");
      
      // Après l'animation de sortie, mettre à jour le contenu
      const timeout = setTimeout(() => {
        setDisplayChildren(children);
        setTransitionStage("fadeIn");
      }, 500); // Correspond à la durée de l'animation de sortie
      
      return () => clearTimeout(timeout);
    }
  }, [children, displayChildren]);

  // Variantes d'animation pour l'effet de livre
  const variants = {
    fadeIn: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    fadeOut: {
      opacity: 0,
      x: pathname === "/" ? -100 : 100, // Direction basée sur le chemin
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
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