"use client"
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  const socialIconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  return (
    <motion.footer 
      className="bg-neutral-100 dark:bg-neutral-900 py-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="mb-4 md:mb-0"
            variants={itemVariants}
          >
            <motion.p 
              className="text-neutral-600 dark:text-neutral-400"
              whileHover={{ scale: 1.02 }}
            >
              &copy; 2025 Cisse Mamadou. Tous droits réservés.
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex space-x-6"
            variants={itemVariants}
          >
            <motion.div whileHover="hover" initial="initial" variants={socialIconVariants}>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 ease-out" />
              </Link>
            </motion.div>

            <motion.div whileHover="hover" initial="initial" variants={socialIconVariants}>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">  
                <Linkedin className="w-6 h-6 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 ease-out" />
              </Link>
            </motion.div>

            <motion.div whileHover="hover" initial="initial" variants={socialIconVariants}>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 ease-out" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}