import { motion } from "framer-motion";
import { X } from "lucide-react";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal = ({ isOpen, onClose }: CVModalProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="relative w-full max-w-4xl h-[90vh] bg-white rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-6 h-6" />
        </button>
        
        <iframe
          src="/cv.pdf"
          className="w-full h-full rounded-lg"
          title="CV"
        />
      </motion.div>
    </motion.div>
  );
};