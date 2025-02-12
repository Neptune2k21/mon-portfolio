"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { MapPin, Globe, Linkedin, Github, Cake } from "lucide-react"

const skills = [
  { name: "Développement Back-End", level: 85 },
  { name: "Développement Front-End", level: 70 },
  { name: "UI/UX & Design", level: 60 },
  { name: "Gestion de Projet & Collaboration", level: 90 },
]

export default function About() {
  return (
    <motion.section id="about" className="py-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <motion.div className="md:w-1/3 flex flex-col items-center gap-6">
          <div className="relative w-40 h-40">
            <Image
              src="/pp.jpg?height=200&width=200"
              alt="Votre photo"
              width={200}
              height={200}
              className="rounded-full shadow-xl border-4 border-neutral-800 dark:border-white"
            />
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
              <Globe className="w-4 h-4 mr-2" />
              <div className="flex gap-2">
                <Badge variant="secondary">Français</Badge>
                <Badge variant="secondary">Anglais</Badge>
              </div>
            </div>
            <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
              <MapPin className="w-4 h-4 mr-2" />
              <span>France, Nevers</span>
            </div>
            <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
              <Cake className="w-4 h-4 mr-2" />
              <span>20 ans</span>
            </div>
          </div>
        </motion.div>

        <div className="md:w-2/3">
          <div className="flex justify-between items-center mb-6">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl font-bold text-neutral-900 dark:text-white"
            >
              Cisse Mamadou
            </motion.h2>
            <div className="flex gap-4">
              <a href="https://github.com/votre-username" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 hover:text-blue-500 transition" />
              </a>
              <a href="https://linkedin.com/in/votre-profile" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 hover:text-blue-500 transition" />
              </a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-neutral-500 dark:text-neutral-400 mb-8"
          >
            <span className="font-semibold">Développeur Full-Stack</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="p-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{skill.name}</span>
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded-lg overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"
                  />
                </Progress>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
