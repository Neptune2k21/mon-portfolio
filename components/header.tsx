"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Download, Github, Linkedin, Mail, Menu, X } from "lucide-react"
import { CVModal } from "./cv-modal"
import ThemeToggle from "./theme-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCVModalOpen, setIsCVModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = useMemo(
    () => [
      { label: "Accueil", href: "/" },
      { label: "À propos", href: "/about" },
      { label: "Compétences", href: "/competences" },
      { label: "Expériences", href: "/experiences" },
      { label: "Contact", href: "/contact" },
    ],
    [],
  )

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)
  const openCV = () => setIsCVModalOpen(true)

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-40 border-b border-transparent transition-[background-color,box-shadow,padding] duration-200 ${
          scrolled
            ? "bg-background/95 py-2 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-background/85"
            : "bg-background/80 py-3 backdrop-blur-sm supports-[backdrop-filter]:bg-background/70"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="group flex items-center gap-3" onClick={closeMenu}>
              <span className="relative flex h-9 w-9 items-center justify-center">
                <Image
                  src="/neptune.svg"
                  alt="CisseMamadou Logo"
                  width={32}
                  height={32}
                  className="relative z-10 rounded-full"
                />
                <span className="absolute inset-0 rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Cisse<span className="font-bold">Mamadou</span>
              </span>
            </Link>

            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-sm transition-colors hover:bg-muted md:hidden"
              onClick={() => setIsMenuOpen((value) => !value)}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
              <div className="flex rounded-full bg-muted/40 p-1 backdrop-blur-sm">
                {navItems.map((item) => {
                  const active = pathname === item.href

                  return (
                    <Link
                      href={item.href}
                      key={item.href}
                      className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                        active
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </nav>

            <button
              type="button"
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-black to-gray-800 px-5 py-2 font-medium text-white shadow-sm transition-transform hover:-translate-y-0.5 md:flex"
              onClick={openCV}
            >
              <span>Mon CV</span>
              <Download className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background md:hidden">
          <div className="flex items-center justify-between border-b border-border p-6">
            <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
              <Image
                src="/neptune.svg"
                alt="CisseMamadou Logo"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="text-xl font-semibold text-foreground">
                Cisse<span className="font-bold">Mamadou</span>
              </span>
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              className="rounded-full bg-muted p-2.5 text-foreground transition-colors hover:bg-muted/80"
              aria-label="Fermer le menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center space-y-6 px-8 py-10" aria-label="Menu mobile">
            {navItems.map((item) => {
              const active = pathname === item.href

              return (
                <Link
                  href={item.href}
                  key={item.href}
                  className={`flex items-center text-3xl font-bold transition-colors ${
                    active ? "text-primary" : "text-foreground"
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                  {active && <span className="ml-4 h-1 w-8 rounded-full bg-primary" aria-hidden="true" />}
                </Link>
              )
            })}

            <button
              type="button"
              onClick={() => {
                openCV()
                closeMenu()
              }}
              className="mt-6 flex w-max items-center gap-3 rounded-lg bg-primary px-6 py-3 text-lg font-medium text-primary-foreground"
            >
              Voir mon CV
              <Download className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>

          <div className="flex items-center justify-between border-t border-border px-8 py-6">
            <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} Cisse Mamadou</span>
            <div className="flex gap-3">
              <a
                href="https://github.com/Neptune2k21"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-muted p-2 text-foreground transition-colors hover:bg-muted/80"
                aria-label="GitHub"
              >
                <Github className="h-[18px] w-[18px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/mamadou-lamine-ciss%C3%A9/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-muted p-2 text-foreground transition-colors hover:bg-muted/80"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>
        </div>
      )}

      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />

      <div className="fixed bottom-0 right-6 z-30 hidden flex-col items-center gap-4 lg:flex">
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://github.com/Neptune2k21"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-200 bg-background/80 p-2.5 text-foreground shadow-sm backdrop-blur-sm transition-transform hover:-translate-y-0.5 hover:text-primary dark:border-gray-800"
            aria-label="GitHub"
          >
            <Github className="h-[18px] w-[18px]" />
          </a>

          <a
            href="https://www.linkedin.com/in/mamadou-lamine-ciss%C3%A9/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-200 bg-background/80 p-2.5 text-foreground shadow-sm backdrop-blur-sm transition-transform hover:-translate-y-0.5 hover:text-primary dark:border-gray-800"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-[18px] w-[18px]" />
          </a>

          <a
            href="mailto:contact@cissemamadou.dev"
            className="rounded-full border border-gray-200 bg-background/80 p-2.5 text-foreground shadow-sm backdrop-blur-sm transition-transform hover:-translate-y-0.5 hover:text-primary dark:border-gray-800"
            aria-label="Email"
          >
            <Mail className="h-[18px] w-[18px]" />
          </a>
        </div>

        <div className="h-20 w-px bg-gradient-to-b from-transparent via-primary/60 to-primary" />
        <ThemeToggle />
      </div>
    </>
  )
}
