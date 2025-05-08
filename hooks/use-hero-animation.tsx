"use client"

import { useEffect, RefObject } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

// Enregistrement des plugins uniquement côté client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
}

interface UseHeroAnimationsProps {
  heroRef: RefObject<HTMLElement>
  isMounted?: boolean
}

export function useHeroAnimations({ heroRef, isMounted = true }: UseHeroAnimationsProps) {
  useEffect(() => {

    if (!heroRef.current || !isMounted) return;
    const animationId = requestAnimationFrame(() => {

      const ctx = gsap.context(() => {
        try {

          const tl = gsap.timeline({
            defaults: {
              duration: 0.6, 
              ease: "power2.out",
              clearProps: "transform" 
            }
          })

          tl.from(".hero-name", {
            opacity: 0,
            y: 20, 
            duration: 0.6,
            force3D: true,
          })
            .from(
              ".hero-title",
              {
                opacity: 0,
                y: 15,
                force3D: true,
              },
              "-=0.4" 
            )
            .from(
              ".hero-badge",
              {
                opacity: 0,
                scale: 0.9,
                ease: "back.out(1.5)",
                force3D: true,
              },
              "-=0.3"
            )
            .from(
              [".hero-desc", ".alternance-banner"],
              {
                opacity: 0,
                y: 10, 
                stagger: 0.08, 
                force3D: true,
              },
              "-=0.2"
            )
            .from(
              ".hero-socials a",
              {
                opacity: 0,
                x: -8,
                stagger: 0.05, 
                duration: 0.3,
                force3D: true,
              },
              "-=0.2"
            )
            .from(
              ".hero-image-container",
              {
                opacity: 0,
                x: 15, 
                duration: 0.6,
                force3D: true,
              },
              "-=0.4"
            )
          const isMobile = window.innerWidth < 768;
          if (!isMobile) {
            const floatingShapes = document.querySelectorAll(".floating-shape");
            const shapesToAnimate = Array.from(floatingShapes).slice(0, 4);
            
            shapesToAnimate.forEach((shape, index) => {
              // Animation beaucoup plus légère
              gsap.to(shape, {
                y: `${3 + (index % 2) * 2}px`, // Amplitude minimale
                rotation: index % 2 === 0 ? 2 : -2, // Rotation minimale
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 0.2,
                force3D: true,
              })
            })
          }
          if (!isMobile && heroRef.current) {

            gsap.to(".parallax-layer", {
              y: 30, // Valeur réduite 
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 0.8, 
              },
              force3D: true,
            })
          }
        } catch (error) {
          console.error("Erreur dans les animations:", error)
        }
      }, heroRef)

      return () => {
        ctx.revert()
      }
    })

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [heroRef, isMounted])
}