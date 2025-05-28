"use client"

import { useEffect } from 'react'

/**
 * Hook pour optimiser le chargement des polices
 */
export function useFontOptimization() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Précharger les polices critiques
      const fonts = [
        // Ajoutez les chemins de vos polices principales ici
        '/fonts/Geist-Black.woff2',
        '/fonts/Geist-Regular.woff2',
      ]
      
      // Création des liens de préchargement pour les polices principales
      fonts.forEach(fontUrl => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = fontUrl
        link.as = 'font'
        link.type = 'font/woff2'
        link.crossOrigin = 'anonymous'
        document.head.appendChild(link)
      })
      
      // Ajouter le support de Font Loading API si disponible
      if ('fonts' in document) {
        // Promise.all pour attendre le chargement des polices
        // @ts-ignore - FontFaceSet.load n'est pas reconnu par TypeScript
        Promise.all([
          document.fonts.load('1rem "Geist"'),
        ])
          .then(() => {
            // Marquer que les polices sont chargées
            document.documentElement.classList.add('fonts-loaded')
          })
          .catch(err => {
            console.error('Erreur lors du chargement des polices:', err)
          })
      }
    }
  }, [])
  
  return null
}
