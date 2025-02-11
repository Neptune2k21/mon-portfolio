import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import type React from "react" 

export const metadata: Metadata = {
  title: "Portfolio | Développeur Créatif",
  description: "Portfolio de développeur créatif",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${GeistSans.className} antialiased`}>{children}</body>
    </html>
  )
}

