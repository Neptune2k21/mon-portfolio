import type React from "react"
import type { Metadata } from "next"
import { geist } from "@/lib/font"
import "./globals.css"
import  Header  from "@/components/header"
import CustomCursor from "@/components/cursor"
import { ThemeProvider } from "@/components/theme-provider"
import  ThemeAmbiance from "@/components/theme-ambiance"
import { SpeedInsights } from "@vercel/speed-insights/next"



export const metadata: Metadata = {
  metadataBase: new URL("https://cisse-mamadou.me"),
  title: "Cisse Mamadou | Développeur FullStack | Portfolio",
  description: "Portfolio de Cisse Mamadou, développeur FullStack spécialisé en Next.js, TypeScript et DevOps. Découvrez mes projets et compétences en développement web.",
  keywords: [
    "Cisse Mamadou",
    "Mamadou Cisse",
    "développeur web",
    "développeur fullstack",
    "Cisse Mamadou développeur",
    "Cisse Mamadou portfolio",
    "Cisse Mamadou développeur web",
    "Cisse Mamadou développeur fullstack",
    "Cisse Mamadou portfolio développeur",
    "Cisse Mamadou portfolio développeur web",
    "portfolio",
    "Next.js",
    "TypeScript",
    "DevOps",
    "BUT Informatique",
    "développeur frontend",
    "développeur backend",
    "développeur JavaScript",
    "Davi",
    "Davi The Humanizers",
    "Dijon",
    "France",
    "Bourgogne-Franche-Comté",
    "IUT Dijon",
    "IUT Dijon-Auxerre",
    "IUT Dijon-Auxerre Informatique",
    "site web",
    "site internet",
    "application web bamako",
    "application mobile bamako",
    "application mobile",
    "application web",
    "application",
  ],
  authors: [{ name: "Cisse Mamadou" }],
  creator: "Cisse Mamadou",
  publisher: "Cisse Mamadou",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    title: "Cisse Mamadou | Portfolio Développeur FullStack",
    description: "Portfolio de Cisse Mamadou, développeur FullStack passionné par Next.js, TypeScript et DevOps",
    url: "https://cisse-mamadou.me/",
    siteName: "Portfolio Cisse Mamadou",
    locale: "fr_FR",
    type: "website",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Cisse Mamadou - Développeur FullStack"
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Mneptune_04",
    creator: "@Mneptune_04",
    title: "Cisse Mamadou | Développeur FullStack",
    description: "Portfolio de Cisse Mamadou, développeur FullStack",
    images: "/og-image.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: "https://cisse-mamadou.me/",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://cisse-mamadou.me/" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={geist.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ThemeAmbiance />
          <Header />
          {children}
          <SpeedInsights/>
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  )
}