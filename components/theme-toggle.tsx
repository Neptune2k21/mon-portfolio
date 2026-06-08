"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <span className="h-12 w-12 rounded-full bg-muted" aria-hidden="true" />
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      aria-label={isDark ? "Passer au mode clair" : "Passer au mode sombre"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full shadow-md transition-transform hover:scale-105 active:scale-95"
    >
      <span
        className={`absolute inset-0 rounded-full transition-colors duration-300 ${
          isDark ? "bg-slate-950" : "bg-amber-100"
        }`}
      />
      <span
        className={`relative flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 ${
          isDark ? "bg-slate-200 text-slate-900 shadow-[0_0_10px_rgba(226,232,240,0.7)]" : "bg-amber-300 text-amber-950 shadow-[0_0_15px_rgba(251,191,36,0.65)]"
        }`}
      >
        {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </span>
    </button>
  )
}
