"use client"

import { motion } from "framer-motion"
import { SkillIcon } from "./skill-icon"

const skills = [
  {
    name: "React",
    icon: "/icons/react.svg",
    color: "#61DAFB",
    progress: 90,
  },
  {
    name: "Three.js",
    icon: "/icons/threejs.svg",
    color: "#000000",
    progress: 85,
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript.svg",
    color: "#3178C6",
    progress: 80,
  },
  {
    name: "Node.js",
    icon: "/icons/nodejs.svg",
    color: "#339933",
    progress: 75,
  },
  {
    name: "Next.js",
    icon: "/icons/nextjs.svg",
    color: "#000000",
    progress: 85,
  },
  {
    name: "TailwindCSS",
    icon: "/icons/tailwind.svg",
    color: "#06B6D4",
    progress: 90,
  },
]

export function Skills() {
  return (
    <section id="competences" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 glow"
          >
            Compétences
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-foreground/60 max-w-2xl mx-auto"
          >
            Les technologies que je maîtrise pour créer des expériences web uniques.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <SkillIcon {...skill} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

