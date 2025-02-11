"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Import } from "lucide-react"

const projects = [
  {
    title: "Projet 3D",
    description: "Une expérience web immersive avec Three.js",
    tags: ["React", "Three.js", "TypeScript"],
    image: "/placeholder.svg",
    github: "#",
    demo: "#",
  },
  {
    title: "E-commerce",
    description: "Site e-commerce moderne avec Next.js",
    tags: ["Next.js", "Stripe", "Tailwind"],
    image: "/placeholder.svg",
    github: "#",
    demo: "#",
  },
  {
    title: "Application Mobile",
    description: "App cross-platform innovante",
    tags: ["React Native", "Firebase", "Redux"],
    image: "/placeholder.svg",
    github: "#",
    demo: "#",
  },
]

export function Projects() {
  return (
    <section id="projets" className="py-20">
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
            Mes Projets
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-foreground/60 max-w-2xl mx-auto"
          >
            Découvrez une sélection de mes projets les plus innovants.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative overflow-hidden gradient-border h-full">
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-foreground/60">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="animated-gradient">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-end space-x-4 pt-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      className="text-foreground/60 hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      className="text-foreground/60 hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

