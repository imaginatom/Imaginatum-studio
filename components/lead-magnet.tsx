"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, CheckCircle, ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function LeadMagnet() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send to your email service
    // For now, redirect to contact form with pre-filled service
    if (email) {
      window.location.href = `/contact?service=audit&email=${encodeURIComponent(email)}`
    }
  }

  return (
    <section className="w-full max-w-[100vw] py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5 relative overflow-x-hidden isolate noise-overlay">
      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 grid-pattern-bg opacity-25"></div>
      {/* Radial spotlight */}
      <div className="radial-spotlight-center"></div>
      {/* Animated orbs */}
      <div className="gradient-orb gradient-orb-1"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <Card className="border-2 border-primary/30 shadow-xl hover-lift scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="100">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Content */}
              <div>
                <Badge
                  variant="secondary"
                  className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm"
                >
                  <Sparkles className="mr-1 size-3 text-primary" />
                  Offre Limitée
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Audit Gratuit de Votre Présence Digitale
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Découvrez comment améliorer votre visibilité en ligne avec un audit personnalisé de 10 points.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="size-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Analyse complète de votre site actuel (si existant)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="size-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">10 recommandations actionnables et prioritaires</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="size-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Rapport PDF détaillé envoyé par email</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="size-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Conseils personnalisés pour votre secteur</span>
                  </div>
                </div>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        type="email"
                        placeholder="Votre email professionnel"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1 h-12 rounded-full border-primary/20 focus:border-primary"
                      />
                      <Button
                        type="submit"
                        size="lg"
                        className="h-12 px-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover-lift"
                      >
                        Obtenir Mon Audit
                        <ArrowRight className="ml-2 size-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      🔒 100% gratuit, sans engagement. Vos données sont protégées.
                    </p>
                  </form>
                ) : (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <p className="text-green-800 dark:text-green-200 font-semibold">
                      ✓ Merci ! Votre audit sera envoyé dans les 24h.
                    </p>
                  </div>
                )}
              </div>

              {/* Right Side - Visual */}
              <div className="hidden md:block">
                <div className="bg-primary/10 rounded-2xl p-8 text-center">
                  <div className="bg-primary/20 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                    <FileText className="size-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Rapport Complet</h3>
                  <p className="text-muted-foreground text-sm">
                    Analyse détaillée + Plan d'action personnalisé
                  </p>
                  <div className="mt-6 pt-6 border-t border-primary/20">
                    <div className="text-3xl font-bold text-primary mb-1">GRATUIT</div>
                    <div className="text-sm text-muted-foreground">Valeur: 150€</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

