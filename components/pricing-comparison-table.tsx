"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Check, X, Calendar, Sparkles, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

interface Feature {
  name: string
  pack1: string | boolean
  pack2: string | boolean
  pack3: string | boolean
}

interface Category {
  name: string
  features: Feature[]
}

const categories: Category[] = [
  {
    name: "Site Web",
    features: [
      {
        name: "Pages sur-mesure",
        pack1: "3-4 pages",
        pack2: "Illimitées",
        pack3: "Sur-mesure"
      },
      {
        name: "Design responsive",
        pack1: true,
        pack2: true,
        pack3: true
      },
      {
        name: "SEO local de base",
        pack1: true,
        pack2: true,
        pack3: true
      },
      {
        name: "Formulaire de contact",
        pack1: true,
        pack2: true,
        pack3: true
      },
      {
        name: "Plan Google Maps",
        pack1: true,
        pack2: true,
        pack3: true
      },
      {
        name: "Hébergement + domaine (1 an)",
        pack1: true,
        pack2: true,
        pack3: true
      },
      {
        name: "Formation express",
        pack1: "30 min",
        pack2: "1h",
        pack3: "Personnalisée"
      }
    ]
  },
  {
    name: "Fonctionnalités Avancées",
    features: [
      {
        name: "Intégration Calendly",
        pack1: false,
        pack2: true,
        pack3: true
      },
      {
        name: "Auth sécurisée",
        pack1: false,
        pack2: true,
        pack3: true
      },
      {
        name: "Dashboard admin",
        pack1: false,
        pack2: true,
        pack3: true
      },
      {
        name: "Publication projets/articles",
        pack1: false,
        pack2: true,
        pack3: true
      },
      {
        name: "Upload images optimisé",
        pack1: false,
        pack2: true,
        pack3: true
      },
      {
        name: "Filtrage + catégories",
        pack1: false,
        pack2: true,
        pack3: true
      },
      {
        name: "Support après livraison",
        pack1: "30 jours",
        pack2: "30 jours",
        pack3: "6 mois"
      }
    ]
  },
  {
    name: "Social Features (Upgrade)",
    features: [
      {
        name: "Comptes utilisateurs",
        pack1: false,
        pack2: false,
        pack3: "Sur devis"
      },
      {
        name: "Likes & commentaires",
        pack1: false,
        pack2: false,
        pack3: "Sur devis"
      },
      {
        name: "Profils utilisateurs",
        pack1: false,
        pack2: false,
        pack3: "Sur devis"
      },
      {
        name: "Modération admin",
        pack1: false,
        pack2: false,
        pack3: "Sur devis"
      }
    ]
  }
]

export function PricingComparisonTable() {
  const renderCell = (value: string | boolean, isPack3: boolean = false) => {
    if (value === true) {
      return (
        <div className="flex justify-center">
          <Check className="size-5 text-primary" />
        </div>
      )
    }
    if (value === false) {
      return (
        <div className="flex justify-center">
          <X className="size-5 text-muted-foreground/30" />
        </div>
      )
    }
    if (isPack3 && value === "Sur devis") {
      return (
        <div className="flex justify-center">
          <Badge variant="outline" className="text-xs border-primary/30 text-primary">
            Sur devis
          </Badge>
        </div>
      )
    }
    return (
      <div className="text-center text-sm font-medium text-foreground">
        {value}
      </div>
    )
  }

  return (
    <section id="pricing" className="w-full max-w-[100vw] py-24 md:py-32 bg-muted/30 relative overflow-x-hidden">
      <div className="absolute inset-0 -z-10 grid-pattern-bg"></div>
      <div className="container mx-auto px-4 md:px-6 relative max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <Badge
            variant="secondary"
            className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
            data-delay="100"
          >
            <span className="mr-1 text-primary">✦</span> Comparez & Choisissez Votre Formule
          </Badge>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
            data-delay="200"
          >
            Des Solutions Adaptées à Votre Besoin
          </h2>
          <p
            className="max-w-[800px] text-muted-foreground md:text-lg scroll-animate opacity-0 translate-y-4 transition-all duration-700"
            data-delay="300"
          >
            Comparez les fonctionnalités et choisissez la formule qui correspond à vos ambitions digitales
          </p>
        </div>

        {/* Plan Headers with CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 max-w-7xl mx-auto">
          <div className="hidden md:block"></div> {/* Empty for feature column */}
          <div className="text-center scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="400">
            <h3 className="text-xl font-bold mb-2">Pack Vitrine</h3>
            <div className="text-3xl font-bold text-primary mb-1">949€</div>
            <div className="text-xs text-muted-foreground mb-4">Paiement unique</div>
            <Link href="/devis">
              <Button className="w-full h-11 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Choisir
              </Button>
            </Link>
          </div>
          <div className="text-center scroll-animate opacity-0 translate-y-4 transition-all duration-700 relative" data-delay="500">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
              Populaire
            </Badge>
            <h3 className="text-xl font-bold mb-2">Pack Portfolio</h3>
            <div className="text-3xl font-bold text-primary mb-1">1 399€</div>
            <div className="text-xs text-muted-foreground mb-4">Paiement unique</div>
            <Link href="/devis">
              <Button className="w-full h-11 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Choisir
              </Button>
            </Link>
          </div>
          <div className="text-center scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="600">
            <h3 className="text-xl font-bold mb-2">E-Commerce</h3>
            <div className="text-3xl font-bold text-muted-foreground mb-1">Bientôt</div>
            <div className="text-xs text-muted-foreground mb-4">Dès 2 700€</div>
            <Link href="/contact">
              <Button variant="outline" className="w-full h-11 rounded-full border-primary/30 hover:border-primary/50">
                Être informé
              </Button>
            </Link>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-7xl mx-auto">
          <Card className="overflow-hidden border-2 border-border/40 shadow-xl hover-lift scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="700">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-border/40 bg-gradient-to-r from-muted/50 to-muted/30">
                    <th className="text-left p-4 md:p-5 font-bold text-foreground text-sm md:text-base">Fonctionnalités</th>
                    <th className="text-center p-4 md:p-5 font-semibold text-foreground text-sm md:text-base min-w-[140px]">Pack Vitrine</th>
                    <th className="text-center p-4 md:p-5 font-semibold text-foreground text-sm md:text-base bg-primary/10 border-l border-r border-primary/20 min-w-[140px]">Pack Portfolio</th>
                    <th className="text-center p-4 md:p-5 font-semibold text-foreground text-sm md:text-base min-w-[140px]">E-Commerce</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category, categoryIndex) => (
                    <React.Fragment key={category.name}>
                      <tr className="border-b border-border/30 bg-muted/20">
                        <td colSpan={4} className="p-3 md:p-4 pl-4 md:pl-6 font-bold text-foreground text-xs md:text-sm uppercase tracking-wide">
                          {category.name}
                        </td>
                      </tr>
                      {category.features.map((feature, featureIndex) => (
                        <tr
                          key={feature.name}
                          className="border-b border-border/10 hover:bg-muted/30 transition-colors group"
                        >
                          <td className="p-3 md:p-4 pl-4 md:pl-6 text-xs md:text-sm text-foreground font-medium group-hover:text-foreground transition-colors">
                            {feature.name}
                          </td>
                          <td className="p-3 md:p-4 text-center">
                            {renderCell(feature.pack1)}
                          </td>
                          <td className="p-3 md:p-4 text-center bg-primary/5 border-l border-r border-primary/10">
                            {renderCell(feature.pack2)}
                          </td>
                          <td className="p-3 md:p-4 text-center">
                            {renderCell(feature.pack3, true)}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 border-primary/20 hover-lift">
            <div className="flex items-start gap-3">
              <Calendar className="size-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-2">Option Calendly</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Ajoutez l'intégration Calendly au Pack Vitrine pour <strong className="text-foreground">+149€</strong>
                </p>
                <p className="text-sm font-semibold text-primary">
                  Pack Vitrine Complet : 1 099€
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-primary/20 hover-lift">
            <div className="flex items-start gap-3">
              <Sparkles className="size-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-2">Upgrade Social Features</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Transformez votre Portfolio en plateforme sociale avec comptes utilisateurs, likes et commentaires
                </p>
                <p className="text-sm font-semibold text-primary">
                  À partir de 1 999€ (sur devis)
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Maintenance Option */}
        <Card className="mt-8 p-6 bg-primary/5 border-primary/20 max-w-7xl mx-auto">
          <div className="text-center">
            <h4 className="font-bold text-lg mb-2">🔧 Maintenance "Sérénité" (Optionnel)</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Mises à jour, backups, support sous 48h, surveillance uptime
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div>
                <span className="text-2xl font-bold text-primary">79€</span>
                <span className="text-sm text-muted-foreground">/mois</span>
              </div>
              <div className="text-sm text-muted-foreground">ou</div>
              <div>
                <span className="text-2xl font-bold text-primary">869€</span>
                <span className="text-sm text-muted-foreground">/an</span>
                <Badge variant="secondary" className="ml-2 text-xs">1 mois offert</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Besoin d'aide pour choisir ? Discutons-en gratuitement
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-6 md:px-10 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Phone className="mr-2 size-4" />
              Consultation Gratuite
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

