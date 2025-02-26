"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SocialButtonProps {
  icon: ReactNode
}

export default function SocialButton({ icon }: SocialButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: "black", color: "white" }}
      whileTap={{ scale: 0.95 }}
      className="p-3 border-2 border-black rounded-none transition-colors"
    >
      {icon}
    </motion.button>
  )
}

