"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Code2, 
  Palette, 
  Database, 
  Globe, 
  Smartphone,
  Zap,
  Shield,
  Rocket
} from "lucide-react"
import { useEffect } from "react"

const techCategories = [
  {
    category: "Frontend",
    icon: Palette,
    color: "blue",
    technologies: [
      { name: "Next.js", description: "Framework React pour applications performantes" },
      { name: "React", description: "Bibliothèque UI moderne et réactive" },
      { name: "TypeScript", description: "JavaScript typé pour plus de fiabilité" },
      { name: "Tailwind CSS", description: "Styling utilitaire moderne" },
    ]
  },
  {
    category: "Backend",
    icon: Code2,
    color: "green",
    technologies: [
      { name: "Node.js", description: "Runtime JavaScript côté serveur" },
      { name: "Prisma", description: "ORM moderne pour bases de données" },
      { name: "API REST", description: "Architecture d'API standardisée" },
    ]
  },
  {
    category: "Database",
    icon: Database,
    color: "purple",
    technologies: [
      { name: "PostgreSQL", description: "Base de données relationnelle robuste" },
      { name: "MongoDB", description: "Base de données NoSQL flexible" },
    ]
  },
  {
    category: "Tools & Deployment",
    icon: Rocket,
    color: "orange",
    technologies: [
      { name: "Vercel", description: "Déploiement automatique et CDN global" },
      { name: "Git", description: "Contrôle de version professionnel" },
      { name: "SEO Optimization", description: "Optimisation pour moteurs de recherche" },
    ]
  },
]

const getColorClasses = (color: string) => {
  const colors = {
    blue: {
      bg: "bg-blue-500/10",
      text: "text-blue-600",
      border: "border-blue-500/20",
      icon: "text-blue-600"
    },
    green: {
      bg: "bg-green-500/10",
      text: "text-green-600",
      border: "border-green-500/20",
      icon: "text-green-600"
    },
    purple: {
      bg: "bg-purple-500/10",
      text: "text-purple-600",
      border: "border-purple-500/20",
      icon: "text-purple-600"
    },
    orange: {
      bg: "bg-orange-500/10",
      text: "text-orange-600",
      border: "border-orange-500/20",
      icon: "text-orange-600"
    },
  }
  return colors[color as keyof typeof colors] || colors.blue
}

export function TechStackShowcase() {
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
    <section className="w-full max-w-[100vw] py-24 md:py-32 bg-gradient-to-b from-background via-muted/5 to-background relative overflow-hidden isolate noise-overlay">
      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 grid-pattern-bg opacity-20"></div>
      {/* Radial spotlights */}
      <div className="radial-spotlight-top-right"></div>
      <div className="radial-spotlight-bottom-left"></div>
      {/* Animated orbs */}
      <div className="gradient-orb gradient-orb-1"></div>
      <div className="gradient-orb gradient-orb-2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
            data-delay="100"
          >
            <Code2 className="mr-2 size-4 text-primary" />
            Stack Technique
          </Badge>
          <h2
            className="section-heading scroll-animate opacity-0 translate-y-4 transition-all duration-700"
            data-delay="200"
          >
            Technologies Modernes & Performantes
          </h2>
          <p
            className="max-w-[800px] mx-auto text-muted-foreground md:text-lg scroll-animate opacity-0 translate-y-4 transition-all duration-700"
            data-delay="300"
          >
            J'utilise les dernières technologies du marché pour créer des sites web rapides, sécurisés et évolutifs.
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {techCategories.map((category, index) => {
            const colors = getColorClasses(category.color)
            const Icon = category.icon
            
            return (
              <Card
                key={category.category}
                className={`border ${colors.border} hover-lift hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700 ${colors.bg}`}
                data-delay={400 + index * 100}
              >
                <CardContent className="p-6">
                  <div className={`${colors.icon} mb-4 flex size-12 items-center justify-center rounded-full bg-background/50`}>
                    <Icon className="size-6" />
                  </div>
                  <h3 className={`text-lg font-bold mb-4 ${colors.text}`}>
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.technologies.map((tech, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Zap className={`size-4 ${colors.icon} mt-0.5 flex-shrink-0`} />
                        <div>
                          <div className="font-semibold text-sm">{tech.name}</div>
                          <div className="text-xs text-muted-foreground">{tech.description}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Features Highlight */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="900">
          <Card className="border-primary/20 bg-primary/5 hover-lift text-center">
            <CardContent className="p-6">
              <Smartphone className="size-8 text-primary mx-auto mb-3" />
              <h4 className="font-bold mb-2">Responsive Design</h4>
              <p className="text-sm text-muted-foreground">
                Sites optimisés pour tous les appareils (mobile, tablette, desktop)
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5 hover-lift text-center">
            <CardContent className="p-6">
              <Zap className="size-8 text-primary mx-auto mb-3" />
              <h4 className="font-bold mb-2">Performance Optimale</h4>
              <p className="text-sm text-muted-foreground">
                Temps de chargement ultra-rapide grâce à l'optimisation avancée
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5 hover-lift text-center">
            <CardContent className="p-6">
              <Shield className="size-8 text-primary mx-auto mb-3" />
              <h4 className="font-bold mb-2">Sécurité Renforcée</h4>
              <p className="text-sm text-muted-foreground">
                Protection des données et conformité RGPD intégrée
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}