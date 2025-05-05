"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Fonction pour suivre la position de la souris
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Fonction pour détecter les éléments interactifs
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName.toLowerCase() === "a" || 
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") !== null || 
        target.closest("button") !== null ||
        target.classList.contains("interactive");
      
      setIsHovering(isInteractive);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    
    // Masquer le curseur par défaut
    document.body.style.cursor = "none";
    
    // Nettoyage
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      {/* Cercle extérieur (plus grand et transparent) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 pointer-events-none z-50"
        style={{
          translateX: mousePosition.x - 16,
          translateY: mousePosition.y - 16,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: 0.5,
        }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 100,
          duration: 0.2,
        }}
      />
      
      {/* Point central (petit et opaque) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full dark:bg-white bg-black pointer-events-none z-50"
        style={{
          translateX: mousePosition.x - 4,
          translateY: mousePosition.y - 4,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 150,
          duration: 0.15,
        }}
      />
    </>
  );
}