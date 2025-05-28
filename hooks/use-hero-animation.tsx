"use client"

import { useEffect, RefObject, useCallback } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

// Chargement différé des plugins uniquement côté client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  // Configuration de GSAP pour des performances optimales
  gsap.defaults({
    overwrite: "auto",
    force3D: true,
  })
}

interface UseHeroAnimationsProps {
  heroRef: RefObject<HTMLElement>
  isMounted?: boolean
}

export function useHeroAnimations({ heroRef, isMounted = true }: UseHeroAnimationsProps) {
  // Fonction pour détecter le mode mobile avec debounce
  const checkMobile = useCallback(() => {
    return window.innerWidth < 768;
  }, []);

  // Animation des éléments principaux
  const animateMainElements = useCallback((ctx: gsap.Context) => {
    // Grouper les éléments pour réduire le nombre de manipulations DOM
    const elements = {
      name: ".hero-name",
      title: ".hero-title",
      badge: ".hero-badge",
      textGroup: [".hero-desc", ".alternance-banner"],
      socials: ".hero-socials a",
      image: ".hero-image-container"
    };

    // Timeline optimisée avec batchUpdate pour grouper les modifications DOM
    const tl = gsap.timeline({
      defaults: {
        duration: 0.5,  // Légèrement réduit pour plus de fluidité
        ease: "power2.out",
        clearProps: "transform", // Libère la mémoire après l'animation
      }
    });

    // Animation plus légère et optimisée
    tl.fromTo(elements.name, { opacity: 0, y: 10 }, { opacity: 1, y: 0 })
      .fromTo(elements.title, { opacity: 0, y: 8 }, { opacity: 1, y: 0 }, "-=0.3")
      .fromTo(elements.badge, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, ease: "back.out(1.2)" }, "-=0.25")
      .fromTo(elements.textGroup, { opacity: 0, y: 5 }, { opacity: 1, y: 0, stagger: 0.05 }, "-=0.2")
      .fromTo(elements.socials, { opacity: 0, x: -5 }, { opacity: 1, x: 0, stagger: 0.03, duration: 0.25 }, "-=0.15")
      .fromTo(elements.image, { opacity: 0, x: 10 }, { opacity: 1, x: 0 }, "-=0.3");

    return tl;
  }, []);

  // Animation des formes flottantes - seulement sur desktop
  const animateFloatingShapes = useCallback((ctx: gsap.Context, isMobile: boolean) => {
    if (isMobile) return;
    
    // Limiter le nombre d'animations
    const floatingShapes = document.querySelectorAll(".floating-shape");
    const shapesToAnimate = Array.from(floatingShapes).slice(0, 3); // Réduit à 3 maximum
    
    shapesToAnimate.forEach((shape, index) => {
      // Animation ultra-légère
      gsap.to(shape, {
        y: `${2 + (index % 2)}px`, // Encore plus minimaliste
        rotation: index % 2 === 0 ? 1 : -1, // Rotation minimale
        duration: 3,  // Plus lent = moins de calculs
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
      });
    });
  }, []);

  // Setup du parallax avec optimisation de performance
  const setupParallax = useCallback((ctx: gsap.Context, heroElement: HTMLElement | null, isMobile: boolean) => {
    if (isMobile || !heroElement) return;

    // Utilisation d'un debounce pour le parallax via ScrollTrigger
    gsap.to(".parallax-layer", {
      y: 20, // Valeur encore réduite pour moins de calculs 
      scrollTrigger: {
        trigger: heroElement,
        start: "top top",
        end: "bottom top",
        scrub: 1.2, // Plus lent = moins d'updates
        invalidateOnRefresh: false, // Évite les re-calculs fréquents
      },
    });
  }, []);

  // Hook principal
  useEffect(() => {
    if (!heroRef.current || !isMounted) return;
    
    let timeoutId: number;
    let ctx: gsap.Context | null = null;
    
    // Utilisation de setTimeout au lieu de requestAnimationFrame pour les animations initiales
    // ce qui permet un meilleur timing avec le rendu du DOM
    timeoutId = window.setTimeout(() => {
      // Détection mobile une seule fois au chargement
      const isMobile = checkMobile();
      
      // Création d'un context GSAP pour gérer proprement les memory leaks
      ctx = gsap.context(() => {
        try {
          // 1. Animer les éléments principaux
          const mainTl = animateMainElements(ctx!);
          
          // 2. Animer les formes flottantes (desktop uniquement)
          if (!isMobile) {
            // Attendre que l'animation principale soit terminée
            mainTl.then(() => {
              animateFloatingShapes(ctx!, isMobile);
            });
          }
          
          // 3. Setup du parallax (desktop uniquement)
          setupParallax(ctx!, heroRef.current, isMobile);
        } catch (error) {
          console.error("Erreur dans les animations:", error);
        }
      }, heroRef);
    }, 100); // Petit délai pour s'assurer que le DOM est prêt

    // Nettoyage
    return () => {
      clearTimeout(timeoutId);
      if (ctx) ctx.revert();
    };
  }, [heroRef, isMounted, animateMainElements, animateFloatingShapes, setupParallax, checkMobile]);
}