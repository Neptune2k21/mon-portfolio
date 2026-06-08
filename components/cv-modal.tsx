"use client"

import { X } from "lucide-react"

interface CVModalProps {
  isOpen: boolean
  onClose: () => void
}

export const CVModal = ({ isOpen, onClose }: CVModalProps) => {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="CV"
    >
      <div
        className="relative h-[90vh] w-full max-w-4xl rounded-lg bg-white shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-gray-900 shadow-sm transition-colors hover:bg-gray-100"
          aria-label="Fermer le CV"
        >
          <X className="h-6 w-6" />
        </button>

        <iframe src="/cv.pdf" className="h-full w-full rounded-lg" title="CV" loading="lazy" />
      </div>
    </div>
  )
}
