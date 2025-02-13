"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ContactFormSchema } from "@/lib/contact"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { useState } from "react"
import { Toaster, toast } from "sonner"
import { cn } from "@/lib/utils"

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  })

  async function onSubmit(data: z.infer<typeof ContactFormSchema>) {
    setIsLoading(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data)
      })
      
      if (!response.ok) throw new Error("Erreur d'envoi")
      
      form.reset()
      toast.success("Message envoyé avec succès ! ✨", {
        description: "Je vous répondrai dans les plus brefs délais.",
        duration: 5000,
      })
    } catch (error) {
      toast.error("Oups ! Une erreur s'est produite 😅", {
        description: "Veuillez réessayer ultérieurement.",
        duration: 5000,
      })
    }
    setIsLoading(false)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <Toaster position="top-center" expand={true} richColors />
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-neutral-900 dark:text-white">
          Contactez-moi
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Votre nom" {...field} classeName={cn( "transition-colors duration-200",
                      form.formState.errors.name && "input-error"
                    )}  />
                  </FormControl>
                  <FormMessage classeName="form-message"/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="Votre email" {...field} classeName={cn( "transition-colors duration-200",
                      form.formState.errors.email && "input-error"
                    )} />
                  </FormControl>
                  <FormMessage className="form-message" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Votre message" rows={5} {...field} classeName={cn( "transition-colors duration-200",
                      form.formState.errors.message && "input-error"
                    )}  />
                  </FormControl>
                  <FormMessage className="form-message" />
                </FormItem>
              )}
            />
             <Button 
            type="submit" 
            className={cn(
              "w-full transition-all duration-200",
              isLoading && "opacity-70"
            )} 
            disabled={isLoading}
          >
            {isLoading ? "Envoi en cours..." : "Envoyer"}
          </Button>
          </form>
        </Form>
      </div>
    </motion.section>
  )
}