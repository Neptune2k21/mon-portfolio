"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const ThemeAmbiance = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === "dark";
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  return (
    <>
      {/* Particules flottantes qui changent selon le thème */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`ambiance-particle-${i}`}
            className={`absolute rounded-full ${
              isDark 
                ? "bg-blue-400/10" 
                : "bg-amber-400/10"
            }`}
            initial={{ 
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
              rotate: [0, 180, 360],
            }}
            transition={{ 
              duration: Math.random() * 60 + 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              filter: `blur(${Math.random() * 5 + 2}px)`
            }}
          />
        ))}
      </div>
      
      {/* Gradients d'ambiance qui changent selon le thème */}
      <motion.div 
        className="fixed inset-0 z-[-1] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.6,
          background: isDark 
            ? "radial-gradient(circle at 80% 20%, rgba(30, 64, 175, 0.15), transparent 50%), radial-gradient(circle at 20% 80%, rgba(79, 70, 229, 0.1), transparent 50%)"
            : "radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.1), transparent 50%), radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.08), transparent 50%)"
        }}
        transition={{ duration: 1.5 }}
      />

      {/* Effet de vignette subtil qui change avec le thème */}
      <motion.div 
        className="fixed inset-0 z-[-1] pointer-events-none"
        animate={{ 
          boxShadow: isDark
            ? "inset 0 0 150px rgba(0, 0, 0, 0.8)" 
            : "inset 0 0 150px rgba(0, 0, 0, 0)"
        }}
        transition={{ duration: 1.5 }}
      />
    </>
  );
};

export default ThemeAmbiance;