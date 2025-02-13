import { ThemeProvider } from "@/components/ThemeProvider"
import { GeistSans } from "geist/font/sans"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type React from "react"
import { Toaster} from "sonner"

import "@/styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning className={GeistSans.className}>
      <head />
      <body>
        <Toaster theme="system"/>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'

