"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-neutral-900 dark:text-white">Contactez-moi</h2>
        <form className="space-y-6">
          <div>
            <Input type="text" placeholder="Votre nom" />
          </div>
          <div>
            <Input type="email" placeholder="Votre email" />
          </div>
          <div>
            <Textarea placeholder="Votre message" rows={5} />
          </div>
          <Button type="submit" className="w-full">
            Envoyer
          </Button>
        </form>
      </div>
    </motion.section>
  )
}

