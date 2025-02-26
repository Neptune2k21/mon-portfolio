"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  number: string
  title: string
  description: string
  image: string
  align: "left" | "right"
  href: string
}

export default function ProjectCard({ number, title, description, image, align, href }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${align === "left" ? "md:flex-row-reverse" : ""}`}
    >
      {align === "right" && (
        <div className="relative h-[300px]">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover rounded-lg" />
        </div>
      )}
      <div className="space-y-4">
        <span className="text-6xl font-bold">{number}</span>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <Link href={href}>
          <motion.div whileHover={{ x: 10 }} className="inline-flex items-center gap-2 text-black hover:text-gray-700">
            Read More <ArrowRight className="h-4 w-4" />
          </motion.div>
        </Link>
      </div>
      {align === "left" && (
        <div className="relative h-[300px]">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover rounded-lg" />
        </div>
      )}
    </motion.div>
  )
}

