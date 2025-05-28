"use client"
import { useEffect, useCallback } from 'react'

/**
 * Hook permettant d'optimiser les performances du site
 * en désactivant certaines animations sur mobile ou en
 * adaptant le comportement pour les appareils à faible puissance
 */
export function usePerformanceOptimizations() {
  // Détection des appareils à faible puissance
  const isLowPowerDevice = useCallback(() => {
    if (typeof window === 'undefined') return false
    
    // Vérifier si c'est un appareil mobile
    const isMobile = window.innerWidth < 768 || 
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    
    // Vérifier si le navigateur supporte la détection de batterie faible (indice de performance faible)
    // @ts-ignore - L'API navigator.deviceMemory n'est pas encore standardisée
    const hasLowMemory = navigator.deviceMemory && navigator.deviceMemory < 4
    
    return isMobile || hasLowMemory
  }, [])

  // Optimisation des animations et des ressources visuelles
  const optimizeResources = useCallback(() => {
    if (typeof window === 'undefined') return
    
    if (isLowPowerDevice()) {
      // 1. Ajouter des classes CSS pour désactiver certaines animations
      document.documentElement.classList.add('low-power-device')
      
      // 2. Désactiver les animations non-essentielles
      document.querySelectorAll('.floating-shape').forEach(el => {
        el.classList.add('reduced-animation')
      })
      
      // 3. Réduire la résolution des images de fond si nécessaire
      document.querySelectorAll('.parallax-layer').forEach(el => {
        el.classList.add('reduced-quality')
      })
    }
  }, [isLowPowerDevice])

  // Optimisation de la gestion des événements scroll
  const optimizeEventHandlers = useCallback(() => {
    if (typeof window === 'undefined') return
    
    // Fonction throttled pour les événements de scroll et resize
    let timeout: any = null
    let lastRun = 0
    
    const throttledHandler = (handler: Function, delay: number) => {
      return (...args: any[]) => {
        const now = Date.now()
        
        if (now - lastRun >= delay) {
          lastRun = now
          handler(...args)
        } else {
          clearTimeout(timeout)
          timeout = setTimeout(() => {
            lastRun = now
            handler(...args)
          }, delay)
        }
      }
    }
    
    // Appliquer le throttling aux événements de scroll
    const originalScroll = window.onscroll
    window.onscroll = function(e) {
      if (originalScroll) {
        throttledHandler(originalScroll, 100)(e)
      }
    }
    
    // Throttling pour les événements de resize
    const originalResize = window.onresize
    window.onresize = function(e) {
      if (originalResize) {
        throttledHandler(originalResize, 200)(e)
      }
    }
  }, [])

  useEffect(() => {
    // Appliquer toutes les optimisations au chargement
    optimizeResources()
    optimizeEventHandlers()
    
    // Créer un MutationObserver pour appliquer les optimisations
    // sur les éléments dynamiquement ajoutés
    const observer = new MutationObserver((mutations) => {
      optimizeResources()
    })
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
    
    return () => {
      observer.disconnect()
    }
  }, [optimizeResources, optimizeEventHandlers])

  return { isLowPowerDevice }
}
