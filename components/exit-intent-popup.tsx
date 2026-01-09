"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Gift, Download, Sparkles } from "lucide-react"
import Link from "next/link"

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if user has already seen the popup (stored in localStorage)
    const hasSeenPopup = localStorage.getItem("exitIntentShown")
    if (hasSeenPopup) {
      setHasShown(true)
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving the top of the viewport
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true)
        setHasShown(true)
        localStorage.setItem("exitIntentShown", "true")
      }
    }

    // Only add listener on desktop (not mobile)
    if (window.innerWidth > 768) {
      document.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [hasShown])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // In a real implementation, send to email service
      setSubmitted(true)
      setTimeout(() => {
        setIsOpen(false)
        // Redirect to contact or download page
        window.location.href = `/contact?offer=guide&email=${encodeURIComponent(email)}`
      }, 1500)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md border-2 border-primary/30" showCloseButton={true}>
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Gift className="size-6 text-primary" />
            <DialogTitle className="text-xl font-bold">
              Attendez ! Ne Partez Pas Sans Votre Cadeau
            </DialogTitle>
          </div>
          <DialogDescription className="pt-2">
            <div className="space-y-4">
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                <div className="flex items-start gap-3">
                  <Sparkles className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Guide Gratuit : 5 Erreurs à Éviter pour Votre Site Web</h3>
                    <p className="text-sm text-muted-foreground">
                      Découvrez les pièges courants qui coûtent cher aux entrepreneurs et comment les éviter.
                    </p>
                  </div>
                </div>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Votre email professionnel"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 rounded-lg"
                  />
                  <Button
                    type="submit"
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
                  >
                    <Download className="mr-2 size-4" />
                    Télécharger le Guide Gratuit
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    🔒 100% gratuit. Pas de spam. Désinscription à tout moment.
                  </p>
                </form>
              ) : (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center">
                  <p className="text-green-800 dark:text-green-200 font-semibold">
                    ✓ Parfait ! Vérifiez votre email pour télécharger le guide.
                  </p>
                </div>
              )}

              <div className="pt-4 border-t">
                <p className="text-sm text-center text-muted-foreground mb-3">
                  Ou préférez-vous discuter directement de votre projet ?
                </p>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full h-11 rounded-lg border-primary/20 hover:border-primary/50"
                  >
                    Consultation Gratuite
                  </Button>
                </Link>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

