"use client"

import { motion } from "framer-motion"

export function Scene() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-secondary"
    >
      <div className="absolute inset-0 w-full h-full mix-blend-overlay bg-gradient-to-r from-primary/20 to-secondary/20"></div>
    </motion.div>
  )
}

