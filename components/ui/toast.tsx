import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, XCircle } from "lucide-react"
import { useEffect } from "react"

interface ToastProps {
  message: string
  type: "success" | "error"
  onClose: () => void
}

export function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, x: "-50%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-8 left-1/2 z-50"
      >
        <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-3 rounded-lg">
          <div className="flex items-center gap-3">
            {type === "success" ? (
              <CheckCircle className="w-5 h-5 text-black" />
            ) : (
              <XCircle className="w-5 h-5 text-black" />
            )}
            <p className="font-medium text-black">
              {message}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}