"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const projects = [
  {
    title: "Cookie Clicker",
    description: "Une application IHM C# inspirée du jeu Cookie Clicker",
    tags: ["C#", "WPF", "Microsoft Visual Studio"],
    link: "#",
    image: "/cookieClicker.png?height=200&width=300",
    details:
      "Le projet Cookie Clicker est une application WPF interactive où les joueurs cliquent sur un cookie géant pour produire des cookies virtuels. Le but est de produire le plus de cookies possible en achetant des améliorations et des automates qui augmentent le nombre de cookies générés par seconde.Il est inspiré du jeu Cookie Clicker de Orteil.",
  },
  {
    title: "Quizzine",
    description: "Une plateforme de quiz interactive",
    tags: ["Node.js","Express", "HTML5", "CSS3", "MongoDB"],
    link: "#",
    image: "/quizzine.png?height=200&width=300",
    details:
      "Quizzine est une plateforme de quiz en ligne où les utilisateurs peuvent créer, partager et jouer à des quiz interactifs. Les utilisateurs peuvent s'inscrire, créer des quiz personnalisés, jouer à des quiz créés par d'autres utilisateurs et consulter leur score en temps réel.",
  },
  {
    title: "Génération de Donjons : Application Graphique et Recherche Opérationnelle",
    description: "Une application mobile cross-platform",
    tags: ["C#", "Algo", "Microsoft Visual Studio", "Xamarin" ],
    link: "#",
    image: "/donjon.png?height=200&width=300",
    details:
      "Cette application mobile fonctionne sur iOS et Android, offrant une expérience utilisateur cohérente sur les deux plateformes. Elle intègre des notifications push, la synchronisation hors ligne et une interface utilisateur intuitive.",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-neutral-900 dark:text-white">Mes Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">En savoir plus</Button>
                  </DialogTrigger>
                  <DialogContent className="animate-fade-in">
                    <DialogHeader>
                      <DialogTitle>{project.title}</DialogTitle>
                      <DialogDescription>{project.details}</DialogDescription>
                    </DialogHeader>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Voir le projet
                      </a>
                    </Button>
                  </DialogContent>
                </Dialog>
                <Button asChild>
                  <a href={project.link}>Voir le projet</a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}