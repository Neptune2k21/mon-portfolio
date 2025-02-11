"use client"

import { Canvas } from "@react-three/fiber"
import { HeroText } from "./hero-text"

export function Hero3D() {
  return (
    <div className="h-[200px] relative">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <HeroText />
      </Canvas>
    </div>
  )
}

