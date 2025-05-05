"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === "dark";
  
  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const handleThemeToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  // Pour éviter les problèmes d'hydration
  if (!mounted) return null;

  return (
    <motion.button
      aria-label={isDark ? "Passer au mode clair" : "Passer au mode sombre"}
      onClick={handleThemeToggle}
      className="relative h-12 w-12 rounded-full overflow-hidden shadow-md"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Fond dynamique du bouton */}
      <motion.div 
        className="absolute inset-0 rounded-full"
        animate={{
          background: isDark 
            ? "radial-gradient(circle, rgba(30, 64, 175, 0.7) 0%, rgba(15, 23, 42, 0.95) 90%)"
            : "radial-gradient(circle, rgba(251, 191, 36, 0.7) 0%, rgba(250, 250, 249, 0.95) 90%)"
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Cercle principal (soleil/lune) */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          rotate: isDark ? 180 : 0
        }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 20
        }}
      >
        <motion.div
          className="relative w-6 h-6 rounded-full"
          animate={{
            background: isDark 
              ? "linear-gradient(145deg, #dfe6e9 0%, #b2bec3 100%)" 
              : "linear-gradient(145deg, #f9ca24 0%, #f6e58d 100%)",
            boxShadow: isDark
              ? "0 0 10px rgba(226, 232, 240, 0.7)"
              : "0 0 15px rgba(251, 191, 36, 0.8)"
          }}
          transition={{ duration: 0.5 }}
        >
          {/* Éléments du soleil/lune */}
          <AnimatePresence mode="wait">
            {/* Éléments du soleil (rayons) */}
            {!isDark && (
              <>
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`ray-${i}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 4 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="absolute w-0.5 bg-amber-300"
                    style={{ 
                      transformOrigin: "bottom center",
                      left: "calc(50% - 1px)",
                      top: "-5px",
                      transform: `rotate(${i * 45}deg) translateY(-50%)` 
                    }}
                  />
                ))}
              </>
            )}
            
            {/* Éléments de la lune (cratères) */}
            {isDark && (
              <>
                {[
                  { x: "25%", y: "30%", size: "w-1 h-1" },
                  { x: "60%", y: "20%", size: "w-1.5 h-1.5" },
                  { x: "40%", y: "60%", size: "w-1 h-1" }
                ].map((crater, i) => (
                  <motion.div
                    key={`crater-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className={`absolute rounded-full ${crater.size}`}
                    style={{ 
                      left: crater.x, 
                      top: crater.y,
                      background: "rgba(148, 163, 184, 0.5)"
                    }}
                  />
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute right-0 top-0 w-4 h-4 rounded-full"
                  style={{
                    background: "radial-gradient(circle at center, transparent 0%, rgba(15, 23, 42, 0.4) 100%)",
                    transform: "translate(25%, -25%)"
                  }}
                />
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;