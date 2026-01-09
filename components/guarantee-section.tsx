"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, Award, Clock, Phone } from "lucide-react"
import Link from "next/link"

export function GuaranteeSection() {
  return (
    <section className="w-full max-w-[100vw] py-24 md:py-32 bg-gradient-to-br from-background via-muted/5 to-background relative overflow-x-hidden isolate noise-overlay">
      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 grid-pattern-bg opacity-20"></div>
      {/* Radial spotlights */}
      <div className="radial-spotlight-top-right"></div>
      <div className="radial-spotlight-bottom-left"></div>
      {/* Mesh gradient */}
      <div className="mesh-gradient-bg"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Badge
            variant="secondary"
            className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
            data-delay="100"
          >
            <span className="mr-1 text-primary">🛡️</span> Garanties & Engagement
          </Badge>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
            data-delay="200"
          >
            Votre Tranquillité, Mon Engagement
          </h2>
          <p
            className="max-w-[800px] text-muted-foreground md:text-lg scroll-animate opacity-0 translate-y-4 transition-all duration-700"
            data-delay="300"
          >
            Je prends tous les risques pour que vous puissiez investir en toute sérénité
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {/* Satisfaction Guarantee */}
          <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 hover-lift border-2 border-primary/20 hover:border-primary/40" data-delay="400">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary rounded-full p-3 flex-shrink-0">
                  <Shield className="size-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="default" className="bg-primary text-primary-foreground">
                      Garantie Satisfaction 100%
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Remboursement Intégral</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Si vous n'êtes pas satisfait de votre site dans les <strong>30 premiers jours</strong> après la livraison, 
                    je vous rembourse <strong>100%</strong> de votre investissement. Aucune question posée.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="size-4 text-green-600" />
                    <span>Sans conditions cachées</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SEO Guarantee */}
          <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 hover-lift border-2 border-primary/20 hover:border-primary/40" data-delay="500">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary rounded-full p-3 flex-shrink-0">
                  <Award className="size-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="default" className="bg-primary text-primary-foreground">
                      Garantie Résultats SEO
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Visible sur Google</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Votre site apparaîtra sur Google dans les <strong>90 jours</strong> suivant la mise en ligne, 
                    ou je continue à travailler gratuitement jusqu'à ce qu'il le soit.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="size-4 text-green-600" />
                    <span>Optimisation SEO incluse</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="text-center scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="600">
            <div className="bg-muted rounded-full p-4 mb-3 inline-block">
              <Shield className="size-6 text-primary mx-auto" />
            </div>
            <p className="text-sm font-semibold">Hébergement Français</p>
            <p className="text-xs text-muted-foreground">Données sécurisées</p>
          </div>
          <div className="text-center scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="700">
            <div className="bg-muted rounded-full p-4 mb-3 inline-block">
              <Clock className="size-6 text-primary mx-auto" />
            </div>
            <p className="text-sm font-semibold">Support Réactif</p>
            <p className="text-xs text-muted-foreground">Réponse sous 24h</p>
          </div>
          <div className="text-center scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="800">
            <div className="bg-muted rounded-full p-4 mb-3 inline-block">
              <Award className="size-6 text-primary mx-auto" />
            </div>
            <p className="text-sm font-semibold">Formation Incluse</p>
            <p className="text-xs text-muted-foreground">Autonomie totale</p>
          </div>
          <div className="text-center scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="900">
            <div className="bg-muted rounded-full p-4 mb-3 inline-block">
              <CheckCircle className="size-6 text-primary mx-auto" />
            </div>
            <p className="text-sm font-semibold">RGPD Conforme</p>
            <p className="text-xs text-muted-foreground">Protection des données</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="1000">
          <p className="text-muted-foreground mb-6">
            Prêt à investir en toute sérénité ? Discutons de votre projet
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-10 py-6 text-base md:text-lg rounded-full shadow-lg hover-lift">
              <Phone className="mr-2 size-5" />
              Consultation Gratuite
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

