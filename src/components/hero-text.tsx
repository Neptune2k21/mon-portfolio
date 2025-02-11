"use client"

import { Text3D, Center } from "@react-three/drei"
import { motion } from "framer-motion-3d"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import type * as THREE from "three"

export function HeroText() {
  const textRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1
    }
  })

  return (
    <Center>
      <motion.group initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 0.5 }}>
        <Text3D ref={textRef} font="/fonts/Geist_Bold.json" size={0.5} height={0.1} curveSegments={12}>
          Développeur Créatif
          <meshStandardMaterial color="#ff0080" emissive="#ff0080" emissiveIntensity={0.5} />
        </Text3D>
      </motion.group>
    </Center>
  )
}

