import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
<<<<<<< HEAD
import { FloatingCTA } from "@/components/floating-cta"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
=======
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254

import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

<<<<<<< HEAD
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Imaginatum Studio - Développeur Web Sur-Mesure | Val d'Oise",
  description: "Création de sites web professionnels sur-mesure pour artisans et entreprises du Val d'Oise. Design moderne, SEO optimisé, mobile-first. Transformez votre présence digitale.",
  keywords: "développeur web, création site web, Val d'Oise, web design, développement sur-mesure, SEO, site vitrine, e-commerce",
  authors: [{ name: "Imaginatum Studio" }],
  creator: "Imaginatum Studio",
  publisher: "Imaginatum Studio",
  openGraph: {
    title: "Imaginatum Studio - Développeur Web Sur-Mesure",
    description: "Création de sites web professionnels sur-mesure pour artisans et entreprises du Val d'Oise.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imaginatum Studio - Développeur Web Sur-Mesure",
    description: "Création de sites web professionnels sur-mesure pour artisans et entreprises du Val d'Oise.",
  },
=======
const libreBaskerville = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
<<<<<<< HEAD
    <html lang="fr" className={poppins.variable}>
      <head>
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
  <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
</head>
      <body className={`font-sans bg-background text-foreground overflow-x-hidden antialiased`}>
      <FloatingNavbar />
        <Suspense fallback={null}>{children}</Suspense>
        <FloatingCTA />
        <ExitIntentPopup />
=======
    <html lang="en" className={libreBaskerville.variable}>
      <body className={`font-sans bg-background text-foreground overflow-x-hidden`}>
      <FloatingNavbar />
        <Suspense fallback={null}>{children}</Suspense>
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
        <Analytics />
        <Footer/>
      </body>
    </html>
  )
}
