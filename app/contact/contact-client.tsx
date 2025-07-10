"use client"

import React, { useState, useRef, useCallback, useMemo } from "react"
import { motion, useScroll, useTransform, AnimatePresence, useReducedMotion } from "framer-motion"
import { Send, Mail, Linkedin, Phone, ArrowRight, CheckCircle2 } from "lucide-react"
import { Toast } from "@/components/ui/toast"
import { ContactFormValues, contactFormSchema } from "@/app/types/contact"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import ContactStructuredData from "@/components/contact-structured-data"

export default function ContactPageClient() {
  // Détection des préférences utilisateur pour réduire les animations
  const shouldReduceMotion = useReducedMotion()
  
  // État pour le toast - optimisé
  const [toast, setToast] = useState<{
    visible: boolean;
    message: string;
    type: "success" | "error";
  }>({
    visible: false,
    message: "",
    type: "success",
  });

  // État du formulaire avec React Hook Form + Zod
  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const [activeField, setActiveField] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // Références pour les animations
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation au scroll - optimisée avec throttling
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transformations optimisées - réduit les calculs
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Callbacks mémorisés pour éviter les re-renders
  const closeToast = useCallback(() => {
    setToast((prev) => ({ ...prev, visible: false }));
  }, []);

  const showToast = useCallback((message: string, type: "success" | "error") => {
    setToast({
      visible: true,
      message,
      type,
    });
  }, []);

  // Gestion du formulaire optimisée
  const onSubmit = useCallback(async (data: ContactFormValues) => {
    setFormStatus("submitting");

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        setFormStatus("success");
        showToast("Message envoyé avec succès!", "success");
        
        // Réinitialiser après un délai réduit
        setTimeout(() => {
          reset();
          setFormStatus("idle");
        }, 3000);
      } else {
        setFormStatus("error");
        showToast(responseData.error || "Erreur lors de l'envoi du message", "error");
      }
    } catch (error) {
      setFormStatus("error");
      showToast("Une erreur réseau s'est produite", "error");
    }
  }, [reset, showToast]);

  // Gestion du focus optimisée
  const handleFocus = useCallback((fieldName: string) => {
    setActiveField(fieldName);
  }, []);

  const handleBlur = useCallback(() => {
    setActiveField(null);
  }, []);

  // Variants d'animation optimisées avec conditions de motion réduite
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.4,
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  }), [shouldReduceMotion]);

  const itemVariants = useMemo(() => ({
    hidden: { y: shouldReduceMotion ? 0 : 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: shouldReduceMotion ? 0.1 : 0.3,
        ease: "easeOut"
      },
    },
  }), [shouldReduceMotion]);

  // Retourner au formulaire depuis le message de succès
  const handleNewMessage = useCallback(() => {
    setFormStatus("idle");
    reset();
  }, [reset]);

  return (
    <>
    <ContactStructuredData />
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0.1 : 0.4 }}
      className="relative min-h-screen bg-zinc-50 dark:bg-zinc-900 overflow-hidden pt-16"
    >
      {/* Toast de notification */}
      {toast.visible && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={closeToast} 
        />
      )}

      {/* Fond artistique simplifié pour mobile */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div 
          style={{ 
            opacity: shouldReduceMotion ? 0.8 : backgroundOpacity, 
            y: shouldReduceMotion ? 0 : backgroundY 
          }} 
          className="absolute inset-0"
        >
          {/* Gradient simplifié */}
          <div className="absolute left-1/2 top-1/3 w-[60vw] h-[60vw] max-w-md max-h-md transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-indigo-100/10 via-amber-100/5 dark:from-indigo-900/10 dark:via-amber-900/5 to-transparent blur-2xl" />

          {/* Pattern simple pour performance */}
          {!shouldReduceMotion && (
            <div className="absolute inset-0 opacity-[0.02]">
              <div className="absolute inset-0 grid grid-cols-[repeat(8,1fr)] grid-rows-[repeat(8,1fr)] gap-4">
                {Array.from({ length: 16 }, (_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-neutral-900 dark:bg-neutral-100 rounded-full"
                    style={{
                      gridColumn: `${Math.floor(Math.random() * 8) + 1}`,
                      gridRow: `${Math.floor(Math.random() * 8) + 1}`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* En-tête simplifié */}
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div 
          className="relative py-16 md:py-24" 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
        >
          {/* Tag de section simplifié */}
          <motion.div variants={itemVariants} className="flex items-center mb-8">
            <span className="h-px w-8 bg-neutral-900/20 dark:bg-neutral-100/20 mr-3"></span>
            <span className="text-xs tracking-[0.15em] uppercase text-neutral-900/50 dark:text-neutral-100/50 font-light">
              Contact
            </span>
            <span className="h-px flex-grow bg-gradient-to-r from-neutral-900/20 dark:from-neutral-100/20 to-transparent ml-3"></span>
          </motion.div>

          {/* Titre optimisé */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight tracking-tight text-neutral-900/90 dark:text-neutral-100/90 mb-6"
          >
            <span className="block">Échangeons</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl text-neutral-400 dark:text-neutral-500">
              des idées créatives.
            </span>
          </motion.h1>
        </motion.div>

        {/* Contenu principal optimisé */}
        <div className="pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Formulaire de contact optimisé */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.4, delay: shouldReduceMotion ? 0 : 0.2 }}
            >
              <motion.form
                onSubmit={handleFormSubmit(onSubmit)}
                className="relative p-6 md:p-8 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm rounded-xl shadow-lg border border-neutral-900/5 dark:border-neutral-100/5"
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.3, delay: shouldReduceMotion ? 0 : 0.3 }}
              >
                {/* Bordure décorative simplifiée */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500/30 via-amber-500/30 to-rose-500/30"></div>

                <AnimatePresence mode="wait">
                  {formStatus === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="w-16 h-16 mb-6 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-light mb-3">Message envoyé</h3>
                      <p className="text-neutral-600 dark:text-neutral-400 max-w-sm mb-8 text-sm">
                        Merci pour votre message. Je vous répondrai rapidement.
                      </p>
                      <button
                        type="button"
                        onClick={handleNewMessage}
                        className="px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 rounded-full flex items-center gap-2 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                      >
                        <span>Nouveau message</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center mb-6">
                        <h2 className="text-xl font-light">Message direct</h2>
                        <div className="flex-1 h-px bg-neutral-900/10 dark:bg-neutral-100/10 ml-4"></div>
                      </div>

                      <div className="space-y-6">
                        {/* Champ Nom */}
                        <div className="relative">
                          {!shouldReduceMotion && (
                            <motion.div
                              className="absolute -z-10 inset-0 rounded-lg"
                              animate={{
                                backgroundColor: activeField === "name" ? "rgba(79, 70, 229, 0.03)" : "rgba(0, 0, 0, 0)",
                              }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                          <div className="space-y-2">
                            <label
                              htmlFor="name"
                              className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                            >
                              Nom
                            </label>
                            <input
                              id="name"
                              {...register("name")}
                              onFocus={() => handleFocus("name")}
                              onBlur={handleBlur}
                              className={`w-full px-3 py-2.5 bg-transparent border-b ${
                                errors.name 
                                  ? 'border-rose-500' 
                                  : 'border-neutral-200 dark:border-neutral-700 focus:border-indigo-500'
                              } outline-none transition-colors text-neutral-900 dark:text-neutral-100`}
                              placeholder="Votre nom"
                            />
                            {errors.name && (
                              <p className="text-rose-500 text-xs mt-1">
                                {errors.name.message}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Champ Email */}
                        <div className="relative">
                          {!shouldReduceMotion && (
                            <motion.div
                              className="absolute -z-10 inset-0 rounded-lg"
                              animate={{
                                backgroundColor: activeField === "email" ? "rgba(79, 70, 229, 0.03)" : "rgba(0, 0, 0, 0)",
                              }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                          <div className="space-y-2">
                            <label
                              htmlFor="email"
                              className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                            >
                              Email
                            </label>
                            <input
                              id="email"
                              type="email"
                              {...register("email")}
                              onFocus={() => handleFocus("email")}
                              onBlur={handleBlur}
                              className={`w-full px-3 py-2.5 bg-transparent border-b ${
                                errors.email 
                                  ? 'border-rose-500' 
                                  : 'border-neutral-200 dark:border-neutral-700 focus:border-indigo-500'
                              } outline-none transition-colors text-neutral-900 dark:text-neutral-100`}
                              placeholder="votre@email.com"
                            />
                            {errors.email && (
                              <p className="text-rose-500 text-xs mt-1">
                                {errors.email.message}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Champ Sujet */}
                        <div className="relative">
                          {!shouldReduceMotion && (
                            <motion.div
                              className="absolute -z-10 inset-0 rounded-lg"
                              animate={{
                                backgroundColor: activeField === "subject" ? "rgba(79, 70, 229, 0.03)" : "rgba(0, 0, 0, 0)",
                              }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                          <div className="space-y-2">
                            <label
                              htmlFor="subject"
                              className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                            >
                              Sujet
                            </label>
                            <input
                              id="subject"
                              {...register("subject")}
                              onFocus={() => handleFocus("subject")}
                              onBlur={handleBlur}
                              className={`w-full px-3 py-2.5 bg-transparent border-b ${
                                errors.subject 
                                  ? 'border-rose-500' 
                                  : 'border-neutral-200 dark:border-neutral-700 focus:border-indigo-500'
                              } outline-none transition-colors text-neutral-900 dark:text-neutral-100`}
                              placeholder="Sujet de votre message"
                            />
                            {errors.subject && (
                              <p className="text-rose-500 text-xs mt-1">
                                {errors.subject.message}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Champ Message */}
                        <div className="relative">
                          {!shouldReduceMotion && (
                            <motion.div
                              className="absolute -z-10 inset-0 rounded-lg"
                              animate={{
                                backgroundColor: activeField === "message" ? "rgba(79, 70, 229, 0.03)" : "rgba(0, 0, 0, 0)",
                              }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                          <div className="space-y-2">
                            <label
                              htmlFor="message"
                              className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                            >
                              Message
                            </label>
                            <textarea
                              id="message"
                              {...register("message")}
                              onFocus={() => handleFocus("message")}
                              onBlur={handleBlur}
                              className={`w-full px-3 py-2.5 bg-transparent border-b ${
                                errors.message 
                                  ? 'border-rose-500' 
                                  : 'border-neutral-200 dark:border-neutral-700 focus:border-indigo-500'
                              } outline-none transition-colors text-neutral-900 dark:text-neutral-100 min-h-[120px] resize-none`}
                              placeholder="Détaillez votre projet ou votre message..."
                            />
                            {errors.message && (
                              <p className="text-rose-500 text-xs mt-1">
                                {errors.message.message}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Bouton d'envoi optimisé */}
                        <div className="pt-4 flex justify-start">
                          <button
                            type="submit"
                            disabled={isSubmitting || formStatus === "submitting"}
                            className={`px-6 py-3 bg-gradient-to-r from-neutral-900 to-neutral-800 dark:from-neutral-100 dark:to-neutral-200 text-neutral-100 dark:text-neutral-900 rounded-full flex items-center justify-center gap-2 transition-all ${
                              (isSubmitting || formStatus === "submitting") ? "opacity-70 cursor-not-allowed" : "hover:shadow-md"
                            }`}
                          >
                            {(isSubmitting || formStatus === "submitting") ? (
                              <>
                                <div className="w-4 h-4 border-2 border-neutral-100 dark:border-neutral-900 border-t-transparent rounded-full animate-spin"></div>
                                <span>Envoi...</span>
                              </>
                            ) : (
                              <>
                                <span>Envoyer</span>
                                <Send className="w-4 h-4" />
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.form>
            </motion.div>

            {/* Informations de contact optimisées */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.4, delay: shouldReduceMotion ? 0 : 0.4 }}
            >
              <div className="space-y-6">
                {/* Carte principale simplifiée */}
                <div className="p-6 md:p-8 bg-gradient-to-br from-neutral-900 to-neutral-800 dark:from-neutral-100 dark:to-neutral-50 text-neutral-100 dark:text-neutral-900 rounded-xl shadow-lg">
                  <h3 className="text-xl font-light mb-6">Connectons-nous</h3>

                  <div className="space-y-6">
                    {/* Téléphone */}
                    <a
                      href="tel:+33667998877"
                      className="flex items-start gap-4 group hover:translate-x-1 transition-transform"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/10 dark:bg-black/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-100/60 dark:text-neutral-900/60 mb-1 uppercase tracking-wide font-light">Téléphone</p>
                        <p className="font-medium group-hover:underline">+33 6 67 99 88 77</p>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:mamadoulcisse9236@gmail.com"
                      className="flex items-start gap-4 group hover:translate-x-1 transition-transform"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/10 dark:bg-black/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-100/60 dark:text-neutral-900/60 mb-1 uppercase tracking-wide font-light">Email</p>
                        <p className="font-medium group-hover:underline break-all text-sm">mamadoulcisse9236@gmail.com</p>
                      </div>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/mamadou-lamine-ciss%C3%A9/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group hover:translate-x-1 transition-transform"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/10 dark:bg-black/10 flex items-center justify-center flex-shrink-0">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-100/60 dark:text-neutral-900/60 mb-1 uppercase tracking-wide font-light">LinkedIn</p>
                        <p className="font-medium group-hover:underline">Mamadou Lamine Cissé</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Carte alternance simplifiée */}
                <div className="p-6 border border-dashed border-neutral-200 dark:border-neutral-700 rounded-xl bg-neutral-50/50 dark:bg-neutral-900/50">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-indigo-600 dark:text-indigo-400">
                        <path d="M12 14.5V16.5M7 10.5H17M7 7.5H17M8 19.5H16C17.1046 19.5 18 18.6046 18 17.5V6.5C18 5.39543 17.1046 4.5 16 4.5H8C6.89543 4.5 6 5.39543 6 6.5V17.5C6 18.6046 6.89543 19.5 8 19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Recherche d'alternance</h3>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm">Disponible dès maintenant</p>
                    </div>
                  </div>
                  
                  <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-4">
                    Je recherche une opportunité d'alternance en développement fullstack.
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-1 bg-indigo-100/50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded text-xs">Next.js</span>
                    <span className="px-2 py-1 bg-indigo-100/50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-indigo-100/50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded text-xs">TypeScript</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
    </>
  )
}