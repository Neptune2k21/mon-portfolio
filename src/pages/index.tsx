"use client"

import { Canvas, extend } from "@react-three/fiber"
import { Effects, OrbitControls, OrthographicCamera, BakeShadows } from "@react-three/drei"
import { UnrealBloomPass } from "three-stdlib"
import { Tower } from "../components/ThreeScene"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"

extend({ UnrealBloomPass })

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <Canvas
          shadows
          gl={{ antialias: true }}
          camera={{ position: [-10, 5, -10], fov: 45 }}
          style={{ height: "100vh" }}
        >
          <color attach="background" args={["#202030"]} />
          <fog attach="fog" args={["#202030", 10, 25]} />
          <hemisphereLight intensity={0.2} color="#eaeaea" groundColor="blue" />
          <directionalLight
            castShadow
            intensity={0.2}
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
            position={[10, 10, -10]}
          />
          <Tower position={[0, -3.25, 0]} />
          <Effects disableGamma>
            <unrealBloomPass threshold={1} strength={1.0} radius={0.5} />
          </Effects>
          <BakeShadows />
          <OrthographicCamera makeDefault far={100} near={0.1} position={[-10, 2, -10]} zoom={80} />
          <OrbitControls autoRotate enableZoom={false} />
        </Canvas>
      </div>
      <div className="relative z-10">
        <Navigation />
        <div className="container mx-auto px-4">
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
    </main>
  )
}

