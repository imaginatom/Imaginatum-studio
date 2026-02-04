import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { ExitIntentPopup } from "@/components/exit-intent-popup"

import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://imaginatum.fr"

export const metadata: Metadata = {
  title: "Imaginatum Studio - Développeur Web Sur-Mesure | Val d'Oise",
  description: "Création de sites web professionnels sur-mesure pour artisans et entreprises du Val d'Oise. Design moderne, SEO optimisé, mobile-first. Transformez votre présence digitale.",
  keywords: "développeur web, création site web, Val d'Oise, web design, développement sur-mesure, SEO, site vitrine, e-commerce",
  metadataBase: new URL(siteUrl),
  applicationName: "Imaginatum Studio",
  authors: [{ name: "Imaginatum Studio" }],
  creator: "Imaginatum Studio",
  publisher: "Imaginatum Studio",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Imaginatum Studio - Développeur Web Sur-Mesure",
    description: "Création de sites web professionnels sur-mesure pour artisans et entreprises du Val d'Oise.",
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Imaginatum Studio",
    images: [
      {
        url: "/optimise-outperform.png",
        alt: "Imaginatum Studio - Développeur Web Sur-Mesure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imaginatum Studio - Développeur Web Sur-Mesure",
    description: "Création de sites web professionnels sur-mesure pour artisans et entreprises du Val d'Oise.",
    images: ["/optimise-outperform.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={poppins.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Imaginatum Studio",
              url: siteUrl,
              inLanguage: "fr-FR",
            }),
          }}
        />
      </head>
      <body className={`font-sans bg-background text-foreground overflow-x-hidden antialiased`}>
        <FloatingNavbar />
        <Suspense fallback={null}>{children}</Suspense>
        <FloatingCTA />
        <ExitIntentPopup />
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
