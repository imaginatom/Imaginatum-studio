"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Shield, 
  CheckCircle, 
  Award, 
  Clock,
  Globe,
  Lock,
  FileCheck,
  Zap,
  Server,
  Code
} from "lucide-react"
import { useEffect } from "react"

const trustBadges = [
  {
    icon: Shield,
    title: "Hébergement Français",
    description: "Données sécurisées et protégées",
    color: "blue",
    verified: true
  },
  {
    icon: Lock,
    title: "RGPD Conforme",
    description: "Protection des données personnelles",
    color: "green",
    verified: true
  },
  {
    icon: FileCheck,
    title: "Support Réactif",
    description: "Réponse sous 24h garantie",
    color: "purple",
    verified: true
  },
  {
    icon: Award,
    title: "Formation Incluse",
    description: "Autonomie totale après livraison",
    color: "orange",
    verified: true
  },
  {
    icon: Server,
    title: "Hébergement Sécurisé",
    description: "SSL/HTTPS inclus",
    color: "blue",
    verified: true
  },
  {
    icon: Code,
    title: "Code Propre",
    description: "Standards industriels respectés",
    color: "green",
    verified: true
  },
]

const certifications = [
  {
    name: "Next.js",
    description: "Framework React moderne",
    icon: "⚡"
  },
  {
    name: "TypeScript",
    description: "Code typé et sécurisé",
    icon: "📘"
  },
  {
    name: "Vercel",
    description: "Déploiement professionnel",
    icon: "▲"
  },
  {
    name: "SEO",
    description: "Optimisation moteurs de recherche",
    icon: "🔍"
  },
]

const getColorClasses = (color: string) => {
  const colors = {
    blue: {
      bg: "bg-blue-500/10",
      text: "text-blue-600",
      icon: "text-blue-600",
      border: "border-blue-500/20"
    },
    green: {
      bg: "bg-green-500/10",
      text: "text-green-600",
      icon: "text-green-600",
      border: "border-green-500/20"
    },
    purple: {
      bg: "bg-purple-500/10",
      text: "text-purple-600",
      icon: "text-purple-600",
      border: "border-purple-500/20"
    },
    orange: {
      bg: "bg-orange-500/10",
      text: "text-orange-600",
      icon: "text-orange-600",
      border: "border-orange-500/20"
    },
  }
  return colors[color as keyof typeof colors] || colors.blue
}

export function TrustBadges() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute("data-delay") || "0"
          setTimeout(() => {
            entry.target.classList.add("animate-fade-up")
          }, Number.parseInt(delay))
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="w-full max-w-[100vw] py-16 md:py-24 bg-gradient-to-b from-background via-muted/5 to-background relative overflow-hidden isolate noise-overlay">
      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 grid-pattern-bg opacity-15"></div>
      {/* Radial spotlight */}
      <div className="radial-spotlight-center"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-12">
          <Badge
            variant="secondary"
            className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
            data-delay="100"
          >
            <Shield className="mr-2 size-4 text-primary" />
            Garanties & Certifications
          </Badge>
          <h2
            className="text-2xl md:text-3xl font-bold tracking-tight mb-4 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
            data-delay="200"
          >
            Votre Tranquillité d'Esprit
          </h2>
          <p
            className="max-w-[600px] mx-auto text-muted-foreground text-sm md:text-base scroll-animate opacity-0 translate-y-4 transition-all duration-700"
            data-delay="300"
          >
            Des garanties claires et des technologies de pointe pour votre projet
          </p>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-12 max-w-6xl mx-auto">
          {trustBadges.map((badge, index) => {
            const colors = getColorClasses(badge.color)
            const Icon = badge.icon
            
            return (
              <Card
                key={badge.title}
                className={`border ${colors.border} hover-lift hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700 ${colors.bg} group cursor-pointer`}
                data-delay={400 + index * 100}
              >
                <CardContent className="p-4 md:p-6 text-center">
                  {/* Verified Badge */}
                  {badge.verified && (
                    <div className="absolute top-2 right-2">
                      <CheckCircle className="size-4 text-green-600" />
                    </div>
                  )}
                  
                  {/* Icon */}
                  <div className={`${colors.icon} mb-3 flex size-12 md:size-14 items-center justify-center rounded-full bg-background/50 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="size-6 md:size-7" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-semibold text-sm md:text-base mb-1">
                    {badge.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-tight">
                    {badge.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Certifications Section */}
        <div className="max-w-4xl mx-auto scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="900">
          <Card className="border-primary/20 bg-primary/5 backdrop-blur">
            <CardContent className="p-6 md:p-8">
              <div className="text-center mb-6">
                <Badge variant="secondary" className="mb-3">
                  <Award className="mr-2 size-4 text-primary" />
                  Technologies Certifiées
                </Badge>
                <h3 className="text-xl font-bold mb-2">Stack Technique Reconnu</h3>
                <p className="text-sm text-muted-foreground">
                  J'utilise uniquement des technologies modernes, éprouvées et maintenues par des équipes de renom.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={cert.name}
                    className="text-center p-4 rounded-lg bg-background/50 border border-border/40 hover:border-primary/40 transition-colors"
                  >
                    <div className="text-3xl mb-2">{cert.icon}</div>
                    <div className="font-semibold text-sm mb-1">{cert.name}</div>
                    <div className="text-xs text-muted-foreground">{cert.description}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
