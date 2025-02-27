// app/not-found.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="relative w-full h-[400px] mb-8">
            <Image
              src="/404.svg"
              alt="404 Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>

          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-6">Page non trouvée</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Oups ! Il semble que la page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>

          <Link href="/">
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-black/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l&apos;accueil
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}