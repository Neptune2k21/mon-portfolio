import type React from "react"
import type { Metadata } from "next"
import { geist } from "@/lib/font"
import "./globals.css"
import "../styles/performance-optimizations.css"
import Header from "@/components/header"
import CustomCursor from "@/components/cursor"
import { ThemeProvider } from "@/components/theme-provider"
import ThemeAmbiance from "@/components/theme-ambiance"
import { SpeedInsights } from "@vercel/speed-insights/next"
import PerformanceOptimizer from "@/components/performance-optimizer"
import { Analytics } from "@vercel/analytics/next"
import StructuredData from "@/components/structured-data"





export const metadata: Metadata = {
  metadataBase: new URL("https://cisse-mamadou.me"),
  title: "Cisse Mamadou | Développeur FullStack | Portfolio",
  description: "Portfolio de Cisse Mamadou, développeur FullStack spécialisé en Next.js, TypeScript et DevOps. Découvrez mes projets et compétences en développement web.",
  keywords: [
    "Cisse Mamadou",
    "Mamadou Cisse",
    "développeur web France",
    "développeur freelance France", 
    "développeur Next.js France",
    "mission développeur web",
    "freelance développeur TypeScript",
    "développeur React freelance",
    "mission freelance Next.js",
    "développeur web Bourgogne",
    "développeur Dijon disponible",
    "freelance développeur JavaScript France",
    "alternance développeur web 2024",
    "alternance développeur fullstack",
    "mission développeur React",
    "projet développeur Next.js",
    "développeur web disponible",
    "freelance mission courte",
    "développeur junior alternance",
    "stage développeur web",
    "contrat développeur JavaScript",
    "développeur web",
    "developpeur Nevers",
    "developpeur freelance",
    "développeur freelance Nevers",
    "développeur fullstack",
    "développeur MERN stack",
    "développeur JAMstack",
    "développeur API REST",
    "développeur Node.js freelance",
    "développeur PostgreSQL",
    "développeur MongoDB freelance",
    "développeur Express.js",
    "développeur Tailwind CSS freelance",
    "Cisse Mamadou développeur",
    "Cisse Mamadou portfolio",
    "Cisse Mamadou développeur web",
    "Cisse Mamadou développeur fullstack",
    "Cisse Mamadou portfolio développeur",
    "Cisse Mamadou portfolio développeur web",
    "création site web sur mesure",
    "développement application web",
    "refonte site internet",
    "développeur e-commerce",
    "développeur SaaS",
    "développeur MVP",
    "développeur landing page",
    "développeur site vitrine",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <StructuredData />
      </head>      
      <body className={`${geist.className} auto-optimize`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={true}
        >
          <PerformanceOptimizer />
          <ThemeAmbiance />
          <Header />
          {children}
          <SpeedInsights/>
          <Analytics />
          {/* Custom cursor component */}
          {/* <CustomCursor /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}