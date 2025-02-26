"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface ExperienceCardProps {
  logo: string
  company: string
  role: string
  period: string
  description: string
}

export default function ExperienceCard({ logo, company, role, period, description }: ExperienceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 rounded-lg border-2 border-black/10 hover:border-black/20 transition-colors"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-4">
          <div className="relative w-8 h-8">
            <Image src={logo || "/placeholder.svg"} alt={company} fill className="object-contain" />
          </div>
          <div>
            <h3 className="text-xl font-bold">{role}</h3>
            <p className="text-gray-600">{company}</p>
          </div>
        </div>
        <span className="text-sm text-gray-600">{period}</span>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

