"use client"

import { Phone, Code, CheckCircle, ArrowRight, Clock, FileText, Palette, Zap, Users, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const processSteps = [
  {
    id: 1,
    title: "Consultation Stratégique",
    subtitle: "Semaine 1",
    icon: Phone,
    color: "blue",
    description: "Nous analysons vos objectifs et définissons une stratégie digitale sur-mesure pour votre succès.",
    details: [
      "Analyse approfondie de votre marché et concurrents",
      "Définition de vos objectifs business précis",
      "Audit de votre présence digitale actuelle",
      "Stratégie de contenu sur-mesure",
    ],
    deliverables: [
      "Cahier des charges détaillé",
      "Plan stratégique digital",
      "Personas clients définis",
      "Calendrier de projet",
    ],
  },
  {
    id: 2,
    title: "Développement Sur-Mesure",
    subtitle: "Semaine 2-3",
    icon: Code,
    color: "green",
    description: "Création de votre site avec technologies modernes, design unique et optimisation complète.",
    details: [
      "Création de l'architecture du site (sitemap)",
      "Design d'interface sur-mesure et responsive",
      "Développement avec technologies de pointe",
      "Optimisation SEO et performances",
    ],
    deliverables: [
      "Maquettes interactives validées",
      "Site web fonctionnel",
      "Tests qualité et compatibilité",
      "Documentation technique",
    ],
  },
  {
    id: 3,
    title: "Livraison & Formation",
    subtitle: "Semaine 3",
    icon: CheckCircle,
    color: "purple",
    description: "Votre site est livré clé en main avec formation complète pour une autonomie totale.",
    details: [
      "Livraison du site finalisé et optimisé",
      "Formation complète (1h) à la gestion du site",
      "Support technique 30 jours inclus",
      "Documentation utilisateur détaillée",
    ],
    deliverables: [
      "Site web en ligne",
      "Formation personnalisée",
      "Support réactif",
      "Autonomie totale acquise",
    ],
  },
]

export function VisualProcessFlow() {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="w-full max-w-[100vw] py-24 md:py-32 bg-gradient-to-br from-background via-background to-muted/5 relative overflow-x-hidden isolate noise-overlay"
    >
      {/* Subtle radial spotlight */}
      <div className="radial-spotlight-center"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <Badge
            variant="secondary"
            className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
            data-delay="100"
          >
            <span className="mr-1 text-primary">✦</span> Notre Processus
          </Badge>
          <h2
            className="section-heading scroll-animate opacity-0 translate-y-4 transition-all duration-700"
            data-delay="200"
          >
            Votre Projet en 3 Étapes Claires
          </h2>
          <p
            className="max-w-[800px] text-muted-foreground md:text-lg scroll-animate opacity-0 translate-y-4 transition-all duration-700"
            data-delay="300"
          >
            Un parcours transparent et professionnel pour transformer votre vision en réalité digitale.
          </p>
        </div>

        {/* Visual Timeline - Desktop */}
        <div className="hidden md:block max-w-6xl mx-auto mb-16">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 opacity-20 transform -translate-y-1/2"></div>
            <div
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 transform -translate-y-1/2 transition-all duration-1000 ease-out"
              style={{
                width: isVisible ? `${(activeStep / (processSteps.length - 1)) * 100}%` : "0%",
              }}
            ></div>

            {/* Steps */}
            <div className="relative flex justify-between items-center">
              {processSteps.map((step, index) => {
                const Icon = step.icon
                const isActive = activeStep >= index
                const colorMap = {
                  blue: "bg-blue-500 border-blue-500 text-blue-600",
                  green: "bg-green-500 border-green-500 text-green-600",
                  purple: "bg-purple-500 border-purple-500 text-purple-600",
                }

                return (
                  <div
                    key={step.id}
                    className="flex flex-col items-center flex-1"
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    {/* Step Circle */}
                    <div
                      className={`relative z-10 w-20 h-20 rounded-full border-4 transition-all duration-300 ${
                        isActive
                          ? `${colorMap[step.color as keyof typeof colorMap]} scale-110 shadow-lg`
                          : "bg-background border-muted text-muted-foreground scale-100"
                      } flex items-center justify-center mb-4 cursor-pointer group`}
                    >
                      <Icon className={`w-8 h-8 ${isActive ? "text-white" : "text-muted-foreground"} group-hover:scale-110 transition-transform`} />
                      {isActive && (
                        <div className="absolute -inset-2 rounded-full border-2 border-current opacity-30 animate-ping"></div>
                      )}
                    </div>

                    {/* Step Info */}
                    <div
                      className={`text-center transition-all duration-300 ${
                        isActive ? "opacity-100 translate-y-0" : "opacity-60 translate-y-2"
                      }`}
                    >
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {step.subtitle}
                      </Badge>
                      <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden mb-12">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-purple-500 opacity-20"></div>
            <div
              className="absolute left-6 top-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-purple-500 transition-all duration-1000 ease-out"
              style={{
                height: isVisible ? `${((activeStep + 1) / processSteps.length) * 100}%` : "0%",
              }}
            ></div>

            {/* Steps */}
            <div className="space-y-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon
                const isActive = activeStep >= index
                const colorMap = {
                  blue: "bg-blue-500 border-blue-500",
                  green: "bg-green-500 border-green-500",
                  purple: "bg-purple-500 border-purple-500",
                }

                return (
                  <div
                    key={step.id}
                    className="flex items-start gap-4 relative"
                    onTouchStart={() => setActiveStep(index)}
                  >
                    {/* Step Circle */}
                    <div
                      className={`relative z-10 w-12 h-12 rounded-full border-4 transition-all duration-300 flex-shrink-0 ${
                        isActive
                          ? `${colorMap[step.color as keyof typeof colorMap]} shadow-lg scale-110`
                          : "bg-background border-muted scale-100"
                      } flex items-center justify-center`}
                    >
                      <Icon className={`w-6 h-6 ${isActive ? "text-white" : "text-muted-foreground"}`} />
                    </div>

                    {/* Step Info */}
                    <div className="flex-1 pt-1">
                      <Badge variant="secondary" className="mb-1 text-xs">
                        {step.subtitle}
                      </Badge>
                      <h3 className="font-bold text-base mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Active Step Details */}
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {processSteps.map((step, index) => {
              if (index !== activeStep) return null

              const Icon = step.icon
              const colorMap = {
                blue: {
                  bg: "bg-blue-50 dark:bg-blue-950/20",
                  text: "text-blue-600 dark:text-blue-400",
                  border: "border-blue-200 dark:border-blue-800",
                },
                green: {
                  bg: "bg-green-50 dark:bg-green-950/20",
                  text: "text-green-600 dark:text-green-400",
                  border: "border-green-200 dark:border-green-800",
                },
                purple: {
                  bg: "bg-purple-50 dark:bg-purple-950/20",
                  text: "text-purple-600 dark:text-purple-400",
                  border: "border-purple-200 dark:border-purple-800",
                },
              }

              const colors = colorMap[step.color as keyof typeof colorMap]

              return (
                <Card key={step.id} className="hover-lift hover-glow border-primary/10 bg-card/80 backdrop-blur shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`${colors.bg} ${colors.text} rounded-full p-4`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-1">
                          {step.subtitle}
                        </Badge>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-primary" />
                          Ce que nous faisons :
                        </h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <FileText className="w-4 h-4 text-primary" />
                          Livrables :
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {step.deliverables.map((deliverable, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Connection Dots for Visual Flow */}
        <div className="hidden md:flex justify-center items-center mt-12 space-x-4">
          {processSteps.map((step, index) => {
            const colorMap = {
              blue: "bg-blue-400",
              green: "bg-green-400",
              purple: "bg-purple-400",
            }
            return (
              <div
                key={step.id}
                className={`w-3 h-3 rounded-full ${colorMap[step.color as keyof typeof colorMap]} transition-all duration-300 ${
                  activeStep >= index ? "scale-125 opacity-100" : "scale-100 opacity-40"
                }`}
                onMouseEnter={() => setActiveStep(index)}
              ></div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 max-w-7xl mx-auto scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="900">
          <div className="mb-4">
            <Badge variant="secondary" className="mb-2">
              ⚡ 3 Créneaux Disponibles Cette Semaine
            </Badge>
          </div>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-10 py-6 text-base md:text-lg rounded-full shadow-lg hover-lift">
              <Phone className="mr-2 size-5" />
              Réserver Ma Consultation Gratuite (30 min)
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            Sans engagement • Réponse sous 24h • Garantie satisfaction
          </p>
        </div>
      </div>
    </section>
  )
}
