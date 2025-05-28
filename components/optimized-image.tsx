"use client"

import Image, { ImageProps } from 'next/image'
import { useState, useEffect } from 'react'
import { usePerformanceOptimizations } from '@/hooks/use-performance-optimizations'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  lowQualityPlaceholder?: boolean
  lazyLoad?: boolean
}

/**
 * Composant Image optimisé qui charge les images différemment selon 
 * les capacités de l'appareil et la connexion réseau
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority,
  lowQualityPlaceholder = true,
  lazyLoad = true,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const { isLowPowerDevice } = usePerformanceOptimizations()
  const [connectionType, setConnectionType] = useState<string>('unknown')
  const [imageQuality, setImageQuality] = useState(80) // Qualité par défaut
  
  useEffect(() => {
    // Détection de la qualité de connexion
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
      // @ts-ignore - Connection API n'est pas standard dans tous les navigateurs
      const conn = navigator.connection
      if (conn) {
        // @ts-ignore
        setConnectionType(conn.effectiveType || 'unknown')
        
        // Réduire la qualité pour les connexions lentes
        // @ts-ignore
        if (conn.effectiveType === '2g' || conn.saveData || conn.effectiveType === 'slow-2g') {
          setImageQuality(60) // Qualité plus basse pour les connexions lentes
        }
      }
    }
  }, [])
  
  // Calculer si on doit utiliser un chargement prioritaire
  const shouldPrioritize = priority || 
    (!lazyLoad) || 
    (connectionType === '4g' && !isLowPowerDevice())
  
  // Classes conditionnelles pour l'effet de fade-in
  const imageClasses = `
    ${className || ''} 
    ${!isLoaded ? 'opacity-0' : 'opacity-100'} 
    transition-opacity duration-300
  `.trim()

  return (
    <div className="relative overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={imageClasses}
        loading={shouldPrioritize ? 'eager' : 'lazy'}
        quality={imageQuality}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
      {/* Placeholder pendant le chargement */}
      {lowQualityPlaceholder && !isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
          style={{ 
            borderRadius: props.style?.borderRadius || 'inherit',
          }}
        />
      )}
    </div>
  )
}
