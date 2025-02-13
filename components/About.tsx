"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Globe, Cake, Github, Linkedin, MapPin } from "lucide-react"
import { useState } from "react"

const skills = [
  { name: "Front-end", description: "Développement Frontend avec HTML, CSS et JavaScript,création d'interfaces modernes et interactives avec React et Next.js", icon: "FrontendIcon", level: 90 },
  {
    name: "Back-end",
    description: "Maîtrise de Node.js, Express, et bases de données",
    icon: "BackendIcon",
    level: 85,
  },
  { name: "DevOps", description: "Expérience avec Docker, gestion du versioning avec Git et déploiement d’applications en production et préproduction via Plesk.", icon: "DevOpsIcon", level: 75 },
  { name: "Mobile", description: "Développement d'applications en C# avec WPF", icon: "MobileIcon", level: 60 },
]

const SkillIcon = ({ name }) => {
  const icons = {
    FrontendIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-blue-500"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    BackendIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-green-500"
      >
        <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
        <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
        <line x1="12" y1="20" x2="12" y2="20"></line>
      </svg>
    ),
    MobileIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-purple-500"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12" y2="18"></line>
      </svg>
    ),
    DevOpsIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-orange-500"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
  }

  return icons[name] || null
}

const SkillBlock = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-lg cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        className="mb-2"
      >
        <SkillIcon name={skill.icon} />
      </motion.div>
      <motion.h3
        className="text-lg font-semibold mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
      >
        {skill.name}
      </motion.h3>
      <motion.div
        className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
      >
        <motion.div
          className="h-full bg-blue-500 dark:bg-blue-400"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.8, ease: "easeInOut" }}
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="text-sm text-neutral-600 dark:text-neutral-300 mt-2"
      >
        {skill.description}
      </motion.p>
    </motion.div>
  )
}

export default function About() {
  const sentence = "Étudiant en BUT Informatique à la recherche d’une alternance, je me spécialise dans la réalisation d’applications avec une orientation backend et DevOps. Côté développement, JavaScript est mon arme de choix… parce qu’avec son écosystème infini de frameworks et ses mises à jour tous les deux jours, qui a besoin de stabilité ? 😏".split(" ")

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    tap: {
      scale: 0.8,
      rotate: -360,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  }

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          <motion.div
            className="w-48"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/pp.jpg?height=200&width=200"
              alt="Cisse Mamadou"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
            <div className="flex flex-col mt-4 space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  <span>FR, EN</span>
                </div>
                <div className="flex items-center">
                  <Cake className="w-5 h-5 mr-2" />
                  <span>20</span>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>France, Nevers</span>
              </div>
            </div>
          </motion.div>
          <div className="md:flex-1">
            <div className="flex justify-between items-center">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-bold mb-2 text-neutral-900 dark:text-white font-geist"
              >
                Cisse Mamadou
              </motion.h2>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/Neptune2k21"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={iconVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Github className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/mamadou-lamine-ciss%C3%A9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={iconVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Linkedin className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
                </motion.a>
              </div>
            </div>
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl mb-4 text-neutral-600 dark:text-neutral-300 font-geist"
            >
              Développeur Full Stack
            </motion.h3>
            <div className="mb-6">
              {sentence.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="inline-block mr-1 text-lg text-neutral-700 dark:text-neutral-300"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillBlock key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

