"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Send, Mail, Linkedin, Phone, ArrowRight, CheckCircle2, X } from "lucide-react"
import { Toast } from "@/components/ui/toast"
import { ContactFormValues, contactFormSchema } from "@/app/types/contact"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export default function ContactPage() {
  // État pour le toast
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
    setFocus
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
  const formRef = useRef<HTMLFormElement>(null);

  // Animation au scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.6]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const formValues = watch();

  // Fermer le toast
  const closeToast = () => {
    setToast((prev) => ({ ...prev, visible: false }));
  };

  // Afficher le toast
  const showToast = (message: string, type: "success" | "error") => {
    setToast({
      visible: true,
      message,
      type,
    });
  };

  // Gestion du formulaire
  const onSubmit = async (data: ContactFormValues) => {
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
        
        // Réinitialiser après un délai
        setTimeout(() => {
          reset();
          setFormStatus("idle");
        }, 5000);
      } else {
        setFormStatus("error");
        showToast(responseData.error || "Erreur lors de l'envoi du message", "error");
      }
    } catch (error) {
      setFormStatus("error");
      showToast("Une erreur réseau s'est produite", "error");
    }
  };

  // Détection des changements de focus
  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  // Retourner au formulaire depuis le message de succès
  const handleNewMessage = () => {
    setFormStatus("idle");
    reset();
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
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

      {/* Fond artistique interactif */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div style={{ opacity: backgroundOpacity, y: backgroundY }} className="absolute inset-0">
          {/* Effet de portail lumineux */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.9, 1.1, 1],
              opacity: 0.6,
            }}
            transition={{ 
              duration: 3,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="absolute left-1/2 top-1/3 w-[40vw] h-[40vw] transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-indigo-100/20 via-amber-100/10 dark:from-indigo-900/20 dark:via-amber-900/10 to-transparent blur-3xl"
          />

          {/* Vagues fluides avec mouvement */}
          <svg className="absolute w-full h-full opacity-[0.04]" viewBox="0 0 100 100" preserveAspectRatio="none">
            {[...Array(5)].map((_, i) => (
              <motion.path
                key={i}
                initial={{ pathLength: 0, opacity: 0.3 }}
                animate={{ 
                  pathLength: 1,
                  opacity: [0.2, 0.6, 0.2],
                  y: [0, i % 2 ? 5 : -5, 0],
                }}
                transition={{ 
                  duration: 8 + i,
                  repeat: Number.POSITIVE_INFINITY, 
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
                d={`M0 ${50 + i * 10} C ${20 + i * 5} ${30 + i * 5}, ${50 - i * 3} ${60 + i * 2}, ${100 - i * 2} ${40 + i * 4}`}
                stroke="currentColor"
                strokeWidth="0.2"
                fill="none"
                strokeDasharray={i % 2 ? "0.5 2" : undefined}
              />
            ))}
          </svg>

          {/* Constellation dynamique avec points flottants */}
          <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-[0.05]">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: Math.random() * 0.5 + 0.1,
                  opacity: Math.random() * 0.8 + 0.2,
                }}
                transition={{
                  delay: i * 0.05,
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  repeatDelay: Math.random() * 8 + 2,
                }}
                className="w-1 h-1 bg-neutral-900 dark:bg-neutral-100 rounded-full"
                style={{
                  gridColumn: `${Math.floor(Math.random() * 20) + 1}`,
                  gridRow: `${Math.floor(Math.random() * 20) + 1}`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* En-tête artistique avec entrée sophistiquée */}
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div className="relative py-24 md:py-32" variants={containerVariants} initial="hidden" animate="visible">
          {/* Élément graphique décoratif - cercles orbitaux */}
          <motion.div 
            className="absolute -left-20 top-1/2 transform -translate-y-1/2 opacity-10 hidden lg:block"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="w-40 h-40 border-[1px] rounded-full border-neutral-900 dark:border-neutral-100"></div>
            <div className="absolute w-24 h-24 border-[1px] left-20 top-10 rounded-full border-neutral-900 dark:border-neutral-100"></div>
          </motion.div>
          
          {/* Tag de section avec ligne animée */}
          <motion.div variants={itemVariants} className="flex items-center mb-10">
            <span className="h-px w-12 bg-neutral-900/30 dark:bg-neutral-100/30 mr-4"></span>
            <span className="text-sm tracking-[0.2em] uppercase text-neutral-900/50 dark:text-neutral-100/50 font-light">
              Contact
            </span>
            <span className="h-px flex-grow bg-gradient-to-r from-neutral-900/30 dark:from-neutral-100/30 to-transparent ml-4"></span>
          </motion.div>

          {/* Titre principal avec animation de dévoilement */}
          <div className="overflow-hidden mb-8">
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(2.5rem,8vw,5rem)] font-light leading-[1.1] tracking-[-0.02em] text-neutral-900/90 dark:text-neutral-100/90"
            >
              <span className="block mb-1 md:mb-2 relative">
                <span className="relative z-10">Échangeons</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-[15%] left-0 h-[0.15em] bg-gradient-to-r from-indigo-300/50 dark:from-indigo-700/50 via-amber-300/40 dark:via-amber-700/40 to-transparent w-full z-0"
                ></motion.span>
              </span>
              <span className="block text-[clamp(2rem,6vw,4rem)] text-neutral-400 dark:text-neutral-500">
                des idées créatives.
              </span>
            </motion.h1>
          </div>
        </motion.div>

        {/* Contenu principal - Mise en page artistique */}
        <div className="py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
            {/* Formulaire de contact - Design moderne */}
            <motion.div
              className="lg:col-span-7 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative">
                {/* Éléments décoratifs avec effets de flou */}
                <div className="absolute -z-10 -top-10 -left-10 w-[200px] h-[200px] bg-gradient-to-br from-indigo-100/20 dark:from-indigo-900/20 to-transparent rounded-full blur-xl"></div>
                <div className="absolute -z-10 -bottom-10 -right-10 w-[200px] h-[200px] bg-gradient-to-tl from-amber-100/20 dark:from-amber-900/20 to-transparent rounded-full blur-xl"></div>

                {/* Formulaire avec design artistique */}
                <motion.form
                  ref={formRef}
                  onSubmit={handleFormSubmit(onSubmit)}
                  className="relative p-8 md:p-12 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-neutral-900/5 dark:border-neutral-100/5 overflow-hidden"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  {/* Bordures décoratives colorées */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500/40 via-amber-500/40 to-rose-500/40"></div>
                  <div className="absolute -right-1 bottom-0 w-1.5 h-20 bg-gradient-to-t from-indigo-500/30 via-amber-500/30 to-transparent"></div>
                  <div className="absolute -left-1 top-0 w-1.5 h-20 bg-gradient-to-b from-indigo-500/30 via-amber-500/30 to-transparent"></div>
                  <div className="absolute bottom-0 right-0 w-full h-1.5 bg-gradient-to-l from-indigo-500/40 via-amber-500/40 to-rose-500/40"></div>

                  <AnimatePresence mode="wait">
                    {formStatus === "success" ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center justify-center py-16 text-center"
                      >
                        {/* Icône de succès animée */}
                        <motion.div
                          initial={{ scale: 0, rotate: -20 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                          className="w-24 h-24 mb-8 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-900/40 dark:to-emerald-800/20 flex items-center justify-center"
                        >
                          <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
                        </motion.div>
                        <h3 className="text-2xl md:text-3xl font-light mb-4">Message envoyé avec succès</h3>
                        <p className="text-neutral-900/60 dark:text-neutral-100/60 max-w-md mb-10 leading-relaxed">
                          Merci pour votre message. Je vous répondrai dans les plus brefs délais pour discuter de vos idées passionnantes.
                        </p>
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                          <button
                            type="button"
                            onClick={handleNewMessage}
                            className="px-8 py-4 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 rounded-full flex items-center gap-3 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                          >
                            <span>Nouveau message</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center mb-8">
                          <div className="w-10 h-[1px] bg-gradient-to-r from-indigo-500/40 to-transparent"></div>
                          <h2 className="text-2xl font-light mx-4">Message direct</h2>
                          <div className="flex-1 h-[1px] bg-gradient-to-r from-neutral-900/10 dark:from-neutral-100/10 to-transparent"></div>
                        </div>

                        <div className="space-y-8">
                          {/* Champ Nom avec validation */}
                          <div className="relative">
                            <motion.div
                              className="absolute -z-10 inset-0 rounded-xl"
                              animate={{
                                backgroundColor:
                                  activeField === "name" ? "rgba(79, 70, 229, 0.05)" : "rgba(0, 0, 0, 0)",
                              }}
                              transition={{ duration: 0.3 }}
                            ></motion.div>

                            <div className="flex flex-col space-y-2">
                              <label
                                htmlFor="name"
                                className="text-sm font-medium text-neutral-900/70 dark:text-neutral-100/70"
                              >
                                Nom
                              </label>
                              <input
                                id="name"
                                {...register("name")}
                                onFocus={() => handleFocus("name")}
                                onBlur={handleBlur}
                                className={`px-4 py-3 bg-transparent border-b-2 ${errors.name ? 'border-rose-500 dark:border-rose-500' : 'border-neutral-900/10 dark:border-neutral-100/10 focus:border-indigo-500 dark:focus:border-indigo-400'} outline-none transition-colors text-neutral-900 dark:text-neutral-100 rounded-none`}
                                placeholder="Votre nom"
                              />
                              {errors.name && (
                                <motion.p 
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="text-rose-500 text-xs mt-1"
                                >
                                  {errors.name.message}
                                </motion.p>
                              )}
                            </div>
                          </div>

                          {/* Champ Email avec validation */}
                          <div className="relative">
                            <motion.div
                              className="absolute -z-10 inset-0 rounded-xl"
                              animate={{
                                backgroundColor:
                                  activeField === "email" ? "rgba(79, 70, 229, 0.05)" : "rgba(0, 0, 0, 0)",
                              }}
                              transition={{ duration: 0.3 }}
                            ></motion.div>

                            <div className="flex flex-col space-y-2">
                              <label
                                htmlFor="email"
                                className="text-sm font-medium text-neutral-900/70 dark:text-neutral-100/70"
                              >
                                Email
                              </label>
                              <input
                                id="email"
                                type="email"
                                {...register("email")}
                                onFocus={() => handleFocus("email")}
                                onBlur={handleBlur}
                                className={`px-4 py-3 bg-transparent border-b-2 ${errors.email ? 'border-rose-500 dark:border-rose-500' : 'border-neutral-900/10 dark:border-neutral-100/10 focus:border-indigo-500 dark:focus:border-indigo-400'} outline-none transition-colors text-neutral-900 dark:text-neutral-100 rounded-none`}
                                placeholder="votre@email.com"
                              />
                              {errors.email && (
                                <motion.p 
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="text-rose-500 text-xs mt-1"
                                >
                                  {errors.email.message}
                                </motion.p>
                              )}
                            </div>
                          </div>

                          {/* Champ Sujet avec validation */}
                          <div className="relative">
                            <motion.div
                              className="absolute -z-10 inset-0 rounded-xl"
                              animate={{
                                backgroundColor:
                                  activeField === "subject" ? "rgba(79, 70, 229, 0.05)" : "rgba(0, 0, 0, 0)",
                              }}
                              transition={{ duration: 0.3 }}
                            ></motion.div>

                            <div className="flex flex-col space-y-2">
                              <label
                                htmlFor="subject"
                                className="text-sm font-medium text-neutral-900/70 dark:text-neutral-100/70"
                              >
                                Sujet
                              </label>
                              <input
                                id="subject"
                                {...register("subject")}
                                onFocus={() => handleFocus("subject")}
                                onBlur={handleBlur}
                                className={`px-4 py-3 bg-transparent border-b-2 ${errors.subject ? 'border-rose-500 dark:border-rose-500' : 'border-neutral-900/10 dark:border-neutral-100/10 focus:border-indigo-500 dark:focus:border-indigo-400'} outline-none transition-colors text-neutral-900 dark:text-neutral-100 rounded-none`}
                                placeholder="Sujet de votre message"
                              />
                              {errors.subject && (
                                <motion.p 
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="text-rose-500 text-xs mt-1"
                                >
                                  {errors.subject.message}
                                </motion.p>
                              )}
                            </div>
                          </div>

                          {/* Champ Message avec validation et effet de saisie */}
                          <div className="relative">
                            <motion.div
                              className="absolute -z-10 inset-0 rounded-xl"
                              animate={{
                                backgroundColor:
                                  activeField === "message" ? "rgba(79, 70, 229, 0.05)" : "rgba(0, 0, 0, 0)",
                              }}
                              transition={{ duration: 0.3 }}
                            ></motion.div>

                            <div className="flex flex-col space-y-2">
                              <label
                                htmlFor="message"
                                className="text-sm font-medium text-neutral-900/70 dark:text-neutral-100/70"
                              >
                                Message
                              </label>
                              <textarea
                                id="message"
                                {...register("message")}
                                onFocus={() => handleFocus("message")}
                                onBlur={handleBlur}
                                className={`px-4 py-3 bg-transparent border-b-2 ${errors.message ? 'border-rose-500 dark:border-rose-500' : 'border-neutral-900/10 dark:border-neutral-100/10 focus:border-indigo-500 dark:focus:border-indigo-400'} outline-none transition-colors text-neutral-900 dark:text-neutral-100 min-h-[150px] resize-none rounded-none`}
                                placeholder="Détaillez votre projet ou votre message..."
                              ></textarea>
                              {errors.message && (
                                <motion.p 
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="text-rose-500 text-xs mt-1"
                                >
                                  {errors.message.message}
                                </motion.p>
                              )}
                            </div>
                          </div>

                          {/* Bouton d'envoi avec animations */}
                          <motion.div 
                            whileHover={{ scale: 1.03 }} 
                            whileTap={{ scale: 0.98 }} 
                            className="pt-6 flex justify-start"
                          >
                            <button
                              type="submit"
                              disabled={isSubmitting || formStatus === "submitting"}
                              className={`px-8 py-4 bg-gradient-to-r from-neutral-900 to-neutral-800 dark:from-neutral-100 dark:to-neutral-200 text-neutral-100 dark:text-neutral-900 rounded-full flex items-center justify-center gap-3 transition-all hover:shadow-lg ${
                                (isSubmitting || formStatus === "submitting") ? "opacity-70 cursor-not-allowed" : ""
                              }`}
                            >
                              {(isSubmitting || formStatus === "submitting") ? (
                                <>
                                  <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                    className="w-5 h-5 border-2 border-neutral-100 dark:border-neutral-900 border-t-transparent dark:border-t-transparent rounded-full"
                                  ></motion.div>
                                  <span>Traitement en cours...</span>
                                </>
                              ) : (
                                <>
                                  <span>Envoyer le message</span>
                                  <Send className="w-4 h-4" />
                                </>
                              )}
                            </button>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.form>
              </div>
            </motion.div>

            {/* Informations de contact - Design éditorial avec cartes interactives */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="h-full flex flex-col justify-between gap-8">
                {/* Carte principale de contact avec effet de profondeur */}
                <motion.div
                  className="p-8 md:p-10 bg-gradient-to-br from-neutral-950 to-neutral-900 dark:from-neutral-50 dark:to-neutral-100 text-neutral-100 dark:text-neutral-900 rounded-2xl shadow-xl relative overflow-hidden"
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Effets de lumière */}
                  <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full transform translate-x-20 -translate-y-20"></div>
                  <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-full transform -translate-x-20 translate-y-20"></div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/10 dark:bg-black/10 flex items-center justify-center mb-6">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3V8M12 8L9 5M12 8L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 16V21M12 21L9 18M12 21L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 12H8M8 12L5 9M8 12L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 12H21M21 12L18 9M21 12L18 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl font-light mb-8">Connectons-nous</h3>

                    <div className="space-y-8">
                      {/* Numéro de téléphone avec animation au survol */}
                      <motion.a
                        href="tel:+33667998877"
                        className="flex items-start gap-5 group"
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-12 h-12 rounded-xl bg-white/10 dark:bg-black/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 dark:group-hover:bg-black/20 transition-all">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-neutral-100/60 dark:text-neutral-900/60 mb-1 uppercase tracking-wider font-light">Téléphone</p>
                          <p className="font-medium group-hover:underline text-lg">+33 6 67 99 88 77</p>
                          <p className="text-xs text-neutral-100/40 dark:text-neutral-900/40 mt-1">Disponible en semaine de 9h à 18h</p>
                        </div>
                      </motion.a>

                      {/* Email avec effet de survol */}
                      <motion.a
                        href="mailto:mamadoulcisse9236@gmail.com"
                        className="flex items-start gap-5 group"
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-12 h-12 rounded-xl bg-white/10 dark:bg-black/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 dark:group-hover:bg-black/20 transition-all">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-neutral-100/60 dark:text-neutral-900/60 mb-1 uppercase tracking-wider font-light">Email</p>
                          <p className="font-medium group-hover:underline text-lg break-all">mamadoulcisse9236@gmail.com</p>
                          <p className="text-xs text-neutral-100/40 dark:text-neutral-900/40 mt-1">Réponse sous 24 à 48h</p>
                        </div>
                      </motion.a>

                      {/* LinkedIn avec animation */}
                      <motion.a
                        href="https://www.linkedin.com/in/mamadou-lamine-ciss%C3%A9/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-5 group"
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-12 h-12 rounded-xl bg-white/10 dark:bg-black/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 dark:group-hover:bg-black/20 transition-all">
                          <Linkedin className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-neutral-100/60 dark:text-neutral-900/60 mb-1 uppercase tracking-wider font-light">LinkedIn</p>
                          <p className="font-medium group-hover:underline text-lg">Mamadou Lamine Cissé</p>
                          <p className="text-xs text-neutral-100/40 dark:text-neutral-900/40 mt-1">Connectons-nous professionnellement</p>
                        </div>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>

                {/* Carte d'alternance avec effet de survol */}
                <motion.div
                  className="p-8 md:p-10 border-2 border-dashed border-neutral-900/10 dark:border-neutral-100/10 rounded-2xl bg-neutral-50/50 dark:bg-neutral-900/50 relative overflow-hidden backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute top-0 right-0 h-24 w-24 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full transform translate-x-12 -translate-y-12"></div>
                  <div className="absolute bottom-0 left-0 h-32 w-32 bg-amber-500/5 dark:bg-amber-500/10 rounded-full transform -translate-x-16 translate-y-16"></div>
                  
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-600 dark:text-indigo-400">
                          <path d="M12 14.5V16.5M7 10.5H17M7 7.5H17M8 19.5H16C17.1046 19.5 18 18.6046 18 17.5V6.5C18 5.39543 17.1046 4.5 16 4.5H8C6.89543 4.5 6 5.39543 6 6.5V17.5C6 18.6046 6.89543 19.5 8 19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-1">Recherche d'alternance</h3>
                        <p className="text-neutral-600 dark:text-neutral-300 text-sm">Disponible dès maintenant</p>
                      </div>
                    </div>
                    
                    <p className="text-neutral-900/80 dark:text-neutral-100/80 text-base leading-relaxed mb-6">
                      Je suis actuellement à la recherche d'une opportunité d'alternance en développement fullstack où je pourrai contribuer à des projets innovants tout en continuant à développer mes compétences.
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      <motion.span 
                        className="px-3 py-1 bg-indigo-100/50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-full text-xs"
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >Next.js</motion.span>
                      <motion.span 
                        className="px-3 py-1 bg-indigo-100/50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-full text-xs"
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >React</motion.span>
                      <motion.span 
                        className="px-3 py-1 bg-indigo-100/50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-full text-xs"
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >TypeScript</motion.span>
                      <motion.span 
                        className="px-3 py-1 bg-indigo-100/50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-full text-xs"
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >Node.js</motion.span>
                    </div>
                  </div>
                </motion.div>
                
                {/* Citation inspirante avec effets visuels */}
                <motion.div
                  className="p-6 md:p-8 bg-white/30 dark:bg-black/20 rounded-2xl backdrop-blur-sm shadow-sm border border-neutral-900/5 dark:border-neutral-100/5 relative overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  whileHover={{ boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-4 left-4 text-neutral-300 dark:text-neutral-700">
                    <path d="M10 11H6C4.89543 11 4 10.1046 4 9V7C4 5.89543 4.89543 5 6 5H8C9.10457 5 10 5.89543 10 7V11ZM10 11V13C10 14.1046 9.10457 15 8 15H7C5.89543 15 5 14.1046 5 13V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 11H16C14.8954 11 14 10.1046 14 9V7C14 5.89543 14.8954 5 16 5H18C19.1046 5 20 5.89543 20 7V11ZM20 11V13C20 14.1046 19.1046 15 18 15H17C15.8954 15 15 14.1046 15 13V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  
                  <blockquote className="pl-12 pr-4">
                    <motion.p 
                      className="text-neutral-800 dark:text-neutral-200 text-lg italic font-light"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.8 }}
                    >
                      Le code est comme la poésie; chaque ligne a un rythme, une intention et une beauté qui lui est propre.
                    </motion.p>
                    <motion.footer 
                      className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 }}
                    >
                      — L'art de développer avec passion
                    </motion.footer>
                  </blockquote>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Élément décoratif orbital */}
      <div className="relative pb-32 pt-20 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative">
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-xl max-h-xl"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ 
              opacity: [0, 0.1, 0.05],
              scale: [0.6, 1.2, 1],
              rotate: [0, 90],
            }}
            transition={{ 
              duration: 15,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-neutral-900 dark:text-neutral-100">
              <motion.circle 
                cx="50" cy="50" r="45" 
                stroke="currentColor" 
                strokeWidth="0.2"
                strokeDasharray="1 3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.circle 
                cx="50" cy="50" r="30" 
                stroke="currentColor" 
                strokeWidth="0.2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.circle 
                cx="50" cy="50" r="15" 
                stroke="currentColor" 
                strokeWidth="0.2"
                strokeDasharray="5 5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, rotate: 180 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
              />
            </svg>
          </motion.div>
        </div>
        
        {/* Vague décorative de bas de page */}
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-0 left-0 w-full h-24"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0 Q20,10 40,5 T80,8 T100,0"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3 }}
          />
        </motion.svg>
      </div>
    </motion.div>
  )
}