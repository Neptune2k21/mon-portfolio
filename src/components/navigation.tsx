"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Twitter, Linkedin } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = ["Accueil", "Projets", "Compétences", "Contact"]
  const socials = [
    { icon: Github, href: "#", label: "Github" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-primary/20" : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="container mx-auto px-4 h-20">
          <div className="flex items-center justify-between h-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold relative"
            >
              <span className="glow">Portfolio</span>
              <motion.div
                className="absolute -bottom-2 left-0 h-0.5 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-8">
                {menuItems.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="relative group"
                  >
                    <a href={`#${item.toLowerCase()}`} className="nav-link text-base font-medium">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="flex items-center space-x-4">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden text-foreground/60 hover:text-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-md">
              <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-2xl font-bold hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </a>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex space-x-6 mt-8"
                >
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a key={label} href={href} className="text-foreground/60 hover:text-primary transition-colors">
                      <Icon className="h-6 w-6" />
                    </a>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

