"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useState } from "react"

interface SkillIconProps {
  icon: string
  name: string
  color: string
  progress: number
}

export function SkillIcon({ icon, name, color, progress }: SkillIconProps) {
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(event.clientX - centerX)
    mouseY.set(event.clientY - centerY)
  }

  return (
    <motion.div
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        className="w-32 h-32 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/20 flex flex-col items-center justify-center gap-2"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.1 }}
      >
        <div
          className="w-16 h-16 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${color}20` }}
        >
          <img src={icon || "/placeholder.svg"} alt={name} className="w-10 h-10" />
        </div>
        <span className="text-sm font-medium">{name}</span>
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ backgroundColor: color }}
        />
      </motion.div>
    </motion.div>
  )
}

