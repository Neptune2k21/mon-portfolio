"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/Button"
import { Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-foreground/60">Vous avez un projet en tête ? N&apos;hésitez pas à me contacter.</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Envoyez-moi un message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nom
                </label>
                <Input id="name" placeholder="Votre nom" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="votre@email.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Votre message" className="min-h-[150px]" />
              </div>
              <Button className="w-full group">
                Envoyer
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

