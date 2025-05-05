"use client"
 
 import { useEffect, RefObject } from "react"
 import gsap from "gsap"
 import { ScrollTrigger } from "gsap/ScrollTrigger"
 import { ScrollToPlugin } from "gsap/ScrollToPlugin"
 
 // Assurez-vous que GSAP est enregistré avec ses plugins
 if (typeof window !== "undefined") {
   gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
 }
 
 interface UseHeroAnimationsProps {
   heroRef: RefObject<HTMLElement>
   isMounted?: boolean
 }
 
 export function useHeroAnimations({ heroRef, isMounted = true }: UseHeroAnimationsProps) {
   useEffect(() => {
     // Vérifier que le DOM est bien chargé
     if (!heroRef.current || !isMounted) return;
 
     // Créer un contexte GSAP pour éviter les conflits
     const ctx = gsap.context(() => {
       // Délai réduit pour une réponse plus rapide
       const timer = setTimeout(() => {
         try {
           // Animation séquence principale - simplifiée et plus rapide
           const tl = gsap.timeline({
             defaults: {
               duration: 0.7, // Durée réduite pour toutes les animations
               ease: "power2.out"
             }
           })
 
           // Animation séquentielle plus rapide
           tl.from(".hero-name", {
             opacity: 0,
             y: 30, // Distance réduite
             duration: 0.8,
           })
             .from(
               ".hero-title",
               {
                 opacity: 0,
                 y: 20,
               },
               "-=0.5"
             )
             .from(
               ".hero-badge",
               {
                 opacity: 0,
                 scale: 0.9,
                 ease: "back.out(1.5)",
               },
               "-=0.4"
             )
             .from(
               [".hero-desc", ".alternance-banner"],
               {
                 opacity: 0,
                 y: 15,
                 stagger: 0.1,
               },
               "-=0.3"
             )
             .from(
               ".hero-socials a",
               {
                 opacity: 0,
                 x: -10,
                 stagger: 0.08,
                 duration: 0.4,
               },
               "-=0.3"
             )
             .from(
               ".hero-image-container",
               {
                 opacity: 0,
                 x: 20,
                 duration: 0.8,
               },
               "-=0.6"
             )
 
           // Animation des formes flottantes - optimisée
           const floatingShapes = document.querySelectorAll(".floating-shape")
           floatingShapes.forEach((shape, index) => {
             // Animation plus légère pour les formes flottantes
             gsap.to(shape, {
               y: `${5 + (index % 3) * 3}px`, // Amplitude réduite
               rotation: index % 2 === 0 ? 3 : -3, // Rotation réduite
               duration: 2 + index * 0.3,
               repeat: -1,
               yoyo: true,
               ease: "sine.inOut",
               delay: index * 0.1,
             })
           })
 
           // Configuration des ScrollTriggers - optimisée
           if (heroRef.current) {
             // Effet parallax plus léger
             gsap.to(".parallax-layer", {
               y: 50, // Valeur réduite pour un effet moins intense
               scrollTrigger: {
                 trigger: heroRef.current,
                 start: "top top",
                 end: "bottom top",
                 scrub: 0.5, // Valeur réduite pour une réponse plus rapide
               },
             })
           }
         } catch (error) {
           console.error("Erreur dans les animations:", error)
         }
       }, 50) // Délai réduit
 
       // Nettoyage des animations lors du démontage du composant
       return () => {
         clearTimeout(timer)
       }
     }, heroRef) // Scope limité au heroRef
 
     return () => {
       ctx.revert() // Nettoie proprement toutes les animations
     }
   }, [heroRef])
 }