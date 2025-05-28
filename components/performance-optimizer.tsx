"use client"

import { usePerformanceOptimizations } from "@/hooks/use-performance-optimizations"

/**
 * Composant client pour appliquer les optimisations de performance
 * Ce composant doit être importé dans le layout principal
 */
export default function PerformanceOptimizer() {
  // Ce hook applique automatiquement les optimisations
  usePerformanceOptimizations()
  return null
}
