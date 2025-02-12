"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"

const educationData = [
  {
    degree: "BUT Informatique",
    institution: "Université de Bourgogne",
    year: "2023 - 2026",
    location: "Nevers, France",
    description: "Parcours approfondie en développement logiciel, bases de données et méthodes agiles. Réalisation de projets pratiques en équipe.",
  },
  {
    degree: "BTS SIO",
    institution: "Estiam",
    year: "2022 - 2023",
    location: "Paris, France",
    description: "Intégration et développement web, gestion de projets informatiques, administration des systèmes et réseaux.",
  },
  {
    degree: "Baccalauréat Serie D",
    institution: "Lycée Privée Baminata Coulibaly",
    year: "2021",
    location: "Bamako, Mali",
    description: "Baccalauréat scientifique, spécialité mathématiques.",
  }
]

export default function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-neutral-900 dark:text-white">
          Éducation
        </h2>
        <div className="relative">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
              className={`mb-12 flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } relative z-10`}
            >
              <Card className="w-full md:w-[85%] lg:w-[70%] hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{item.degree}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                      <span>{item.institution} | {item.year}</span>
                      <div className="flex items-center ml-4">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    <p className="mt-2">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          <div className="absolute h-full w-1 bg-neutral-200 dark:bg-neutral-700 left-1/2 transform -translate-x-1/2 top-0" />
        </div>
      </div>
    </motion.section>
  )
}