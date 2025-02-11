"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Palette, Zap } from "lucide-react"
import { Suspense } from "react"

const Hero3D = dynamic(() => import("@/components/hero-3d").then((mod) => mod.Hero3D), {
  ssr: false,
  loading: () => <div className="h-[200px] flex items-center justify-center">Chargement...</div>,
})

const features = [
  {
    icon: Code2,
    title: "Développement Web",
    description: "Création d'applications web modernes et performantes",
  },
  {
    icon: Palette,
    title: "Design Créatif",
    description: "Interfaces utilisateur uniques et immersives",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Utilisation des dernières technologies web",
  },
]

export function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex flex-col items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center space-y-16">
        <Suspense fallback={<div className="h-[200px] flex items-center justify-center">Chargement...</div>}>
          <Hero3D />
        </Suspense>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-foreground/80 max-w-2xl mx-auto"
        >
          Je crée des expériences web uniques et immersives en combinant design et technologie.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <Button size="lg" className="group animated-gradient">
            Voir mes projets
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
            >
              <feature.icon className="w-8 h-8 mx-auto mb-4 text-primary group-hover:text-foreground transition-colors" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/60">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

