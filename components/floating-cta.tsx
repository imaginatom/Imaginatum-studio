"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isMinimized ? "translate-y-0 opacity-100" : "translate-y-0 opacity-100"
      }`}
    >
      {!isMinimized ? (
        <div className="bg-card border-2 border-primary/30 rounded-2xl shadow-2xl p-4 max-w-xs animate-in slide-in-from-bottom-5">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-bold text-sm mb-1">Besoin d'aide ?</h3>
              <p className="text-xs text-muted-foreground">
                Consultation gratuite de 30 min
              </p>
            </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Minimiser"
            >
              <X className="size-4" />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/contact">
              <Button
                size="sm"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm"
              >
                <MessageCircle className="mr-2 size-4" />
                Discuter maintenant
              </Button>
            </Link>
            <Link href="tel:+33612345678">
              <Button
                variant="outline"
                size="sm"
                className="w-full rounded-full text-sm border-primary/20 hover:border-primary/50"
              >
                <Phone className="mr-2 size-4" />
                Appeler
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-2xl hover-lift transition-all"
          aria-label="Ouvrir l'aide"
        >
          <MessageCircle className="size-6" />
        </button>
      )}
    </div>
  )
}

