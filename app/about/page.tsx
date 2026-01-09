"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Code,
  Palette,
  Smartphone,
  Zap,
  Shield,
  Users,
  MapPin,
  Clock,
  Award,
  Target,
  Lightbulb,
  HeartHandshake,
  TrendingUp,
  CheckCircle,
  Coffee,
  Building2,
  Globe,
  Rocket
} from "lucide-react"
import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ClientLogos } from "@/components/client-logos"
import { TechStackShowcase } from "@/components/tech-stack-showcase"

export default function AboutPage() {
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

  const techStack = [
    { name: "Next.js", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Prisma", category: "Backend" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "SEO Optimization", category: "Marketing" },
    { name: "Responsive Design", category: "Design" },
    { name: "Git", category: "Tools" },
    { name: "Vercel", category: "Deployment" },
  ]

  const values = [
    {
      icon: HeartHandshake,
      title: "Proximité",
      description: "Je privilégie une relation de confiance et de transparence avec chaque client. Votre projet devient le mien.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Je reste à jour avec les dernières technologies pour vous offrir des solutions modernes et performantes.",
    },
    {
      icon: Shield,
      title: "Fiabilité",
      description: "Engagé à livrer des sites web qui fonctionnent, optimisés et maintenus dans la durée.",
    },
    {
      icon: Target,
      title: "Résultats",
      description: "Je ne me contente pas de livrer un site, mais de créer un outil qui génère des résultats pour votre business.",
    },
  ]

  return (
    <>
      <main className="flex-1 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative isolate container mx-auto w-full max-w-[100vw] py-24 md:py-32 lg:py-40">
          <div className="relative z-10 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="mx-auto max-w-2xl text-left">
                  <Badge
                    variant="secondary"
                    className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                    data-delay="100"
                  >
                    <span className="text-foreground mr-1">✦</span>
                    Qui suis-je ?
                  </Badge>

                  <h1
                    className="hero-heading mb-6 text-4xl md:text-5xl scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                    data-delay="200"
                  >
                    Votre Partenaire Web dans le Val d'Oise
                  </h1>

                  <p
                    className="text-muted-foreground mb-8 text-lg leading-relaxed md:text-xl scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                    data-delay="300"
                  >
                    Bonjour, je suis un développeur web passionné basé en Val d'Oise (95130, Franconville). 
                    Je crée des sites web sur-mesure pour les artisans, commerçants et professionnels locaux qui souhaitent développer leur présence en ligne.
                  </p>

                  <p
                    className="text-muted-foreground mb-8 text-base leading-relaxed scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                    data-delay="350"
                  >
                    Après avoir observé que de nombreux professionnels locaux peinaient à trouver des solutions web adaptées à leurs besoins et à leur budget, j'ai décidé de proposer une alternative : des sites web professionnels, modernes et accessibles, pensés pour le marché francilien.
                  </p>

                  <div
                    className="flex flex-col gap-4 sm:flex-row scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                    data-delay="400"
                  >
                    <Link href="/contact">
                      <Button size="lg" className="h-12 rounded-full px-4 md:px-8 text-sm md:text-base shadow-md hover-lift">
                        Discutons de votre projet
                        <ArrowRight className="ml-2 size-4" />
                      </Button>
                    </Link>
                    <Link href="/portfolio">
                      <Button
                        variant="outline"
                        size="lg"
                        className="h-12 rounded-full border-primary/20 px-8 text-base hover-lift hover:border-primary/50 bg-transparent"
                      >
                        Voir mes réalisations
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="500">
                  <Card className="border-border/40 hover-lift bg-muted/30">
                    <CardContent className="p-8">
                      <div className="text-center space-y-6">
                        {/* Personal Photo - Replace /placeholder-user.jpg or /profile-photo.jpg with your actual photo */}
                        <div className="mx-auto size-40 md:size-48 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center overflow-hidden border-4 border-primary/20 shadow-2xl ring-4 ring-primary/10 relative group">
                          <Image
                            src="/profile-photo.jpg"
                            alt="Photo de profil - Développeur Web Indépendant"
                            width={192}
                            height={192}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            onError={(e) => {
                              // Fallback: Try placeholder-user.jpg, then icon
                              const target = e.currentTarget as HTMLImageElement
                              if (target.src.includes('/profile-photo.jpg')) {
                                target.src = '/placeholder-user.jpg'
                                target.onerror = () => {
                                  target.style.display = 'none'
                                  const parent = target.parentElement
                                  if (parent && !parent.querySelector('.fallback-icon')) {
                                    const icon = document.createElement('div')
                                    icon.className = 'fallback-icon size-24 text-primary-foreground'
                                    icon.innerHTML = '<svg class="size-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>'
                                    parent.appendChild(icon)
                                  }
                                }
                              }
                            }}
                            priority
                          />
                          {/* Verified Badge */}
                          <div className="absolute bottom-2 right-2 bg-green-500 text-white rounded-full p-1.5 shadow-lg border-2 border-background">
                            <CheckCircle className="size-4" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold">Développeur Web Indépendant</h3>
                          <p className="text-muted-foreground">Val d'Oise, Île-de-France</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/40">
                          <div>
                            <div className="text-2xl font-bold text-primary mb-1">2+</div>
                            <div className="text-sm text-muted-foreground">Ans d'expérience</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary mb-1">15+</div>
                            <div className="text-sm text-muted-foreground">Projets livrés</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary mb-1">100%</div>
                            <div className="text-sm text-muted-foreground">Clients satisfaits</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary mb-1">12</div>
                            <div className="text-sm text-muted-foreground">Technologies</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full max-w-[100vw] py-24 md:py-32 bg-muted/30 relative overflow-hidden isolate">
          <div className="absolute inset-0 -z-10 grid-pattern-bg"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <Badge
                  variant="secondary"
                  className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                  data-delay="100"
                >
                  <span className="mr-1 text-primary">✦</span> Ma Mission
                </Badge>
                <h2
                  className="section-heading scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                  data-delay="200"
                >
                  Pourquoi je fais ce que je fais
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                <div className="scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="300">
                  <Card className="border-border/40 hover-lift h-full">
                    <CardHeader>
                      <div className="bg-primary/10 text-primary size-16 rounded-full flex items-center justify-center mb-4">
                        <Target className="size-8" />
                      </div>
                      <CardTitle className="text-2xl">Le Problème</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Beaucoup de professionnels du Val d'Oise et d'Île-de-France se retrouvent face à un dilemme : 
                        soit payer très cher une agence, soit utiliser des solutions templates qui ne correspondent pas à leurs besoins.
                        Résultat ? Des sites web qui ne génèrent pas de résultats, mal référencés, ou qui coûtent une fortune en maintenance.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="400">
                  <Card className="border-border/40 hover-lift h-full bg-primary/5">
                    <CardHeader>
                      <div className="bg-primary text-primary-foreground size-16 rounded-full flex items-center justify-center mb-4">
                        <Rocket className="size-8" />
                      </div>
                      <CardTitle className="text-2xl">Ma Solution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Je propose une troisième voie : des sites web sur-mesure, professionnels et optimisés, à des prix accessibles. 
                        Chaque projet est pensé pour votre métier, votre public cible, et votre budget.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="size-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Sites livrés en 2-3 semaines</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="size-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Prix transparents sans surprise</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="size-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Support direct et réactif</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full max-w-[100vw] py-24 md:py-32 bg-gradient-to-b from-background via-muted/5 to-background relative overflow-x-hidden isolate noise-overlay">
          {/* Grid pattern */}
          <div className="absolute inset-0 -z-10 grid-pattern-bg opacity-25"></div>
          {/* Radial spotlights */}
          <div className="radial-spotlight-top-right"></div>
          <div className="radial-spotlight-bottom-left"></div>
          {/* Animated orbs */}
          <div className="gradient-orb gradient-orb-1"></div>
          <div className="gradient-orb gradient-orb-2"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <Badge
                  variant="secondary"
                  className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                  data-delay="100"
                >
                  <span className="mr-1 text-primary">✦</span> Mes Valeurs
                </Badge>
                <h2
                  className="section-heading scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                  data-delay="200"
                >
                  Ce qui me guide au quotidien
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon
                  return (
                    <Card
                      key={index}
                      className="border-border/40 hover-lift hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                      data-delay={300 + index * 100}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="bg-primary/10 text-primary mx-auto flex size-16 items-center justify-center rounded-full mb-4">
                          <Icon className="size-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground text-sm">{value.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos Section - NEW */}
        <ClientLogos />

        {/* Tech Stack Showcase - Enhanced */}
        <TechStackShowcase />

        {/* Local Focus Section */}
        <section className="w-full max-w-[100vw] py-24 md:py-32 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-x-hidden isolate noise-overlay">
          {/* Grid pattern */}
          <div className="absolute inset-0 -z-10 grid-pattern-bg opacity-30"></div>
          {/* Radial spotlight */}
          <div className="radial-spotlight-center"></div>
          {/* Mesh gradient */}
          <div className="mesh-gradient-bg"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="100">
                  <Badge
                    variant="secondary"
                    className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow"
                  >
                    <MapPin className="mr-2 size-4 text-primary" />
                    Local Focus
                  </Badge>
                  <h2 className="section-heading mb-6 text-left">
                    Pourquoi le Val d'Oise ?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Je suis basé à Franconville (95130) et j'interviens dans tout le Val d'Oise et l'Île-de-France. 
                    Cette proximité géographique me permet de :
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="bg-primary/10 text-primary size-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Coffee className="size-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Rencontres en présentiel</h4>
                        <p className="text-sm text-muted-foreground">
                          Je peux vous rencontrer directement pour mieux comprendre votre activité et votre environnement.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-primary/10 text-primary size-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Building2 className="size-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Connaissance du marché local</h4>
                        <p className="text-sm text-muted-foreground">
                          Je comprends les spécificités du marché francilien et les attentes de votre clientèle locale.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-primary/10 text-primary size-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Globe className="size-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Référencement local optimisé</h4>
                        <p className="text-sm text-muted-foreground">
                          Je structure vos sites pour être bien référencés sur "recherche [votre métier] Val d'Oise" ou votre ville.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="200">
                  <Card className="border-border/40 hover-lift bg-gradient-to-br from-primary/5 to-primary/10">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center">
                        <MapPin className="mr-2 size-6 text-primary" />
                        Zone d'intervention
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Val d'Oise (95)</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            Franconville, Cergy, Pontoise, Argenteuil, Garges-lès-Gonesse, Sarcelles, Ermont, Bezons...
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Île-de-France</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            Paris et banlieue parisienne - Déplacements possibles pour rendez-vous en présentiel
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Travail à distance</h4>
                          <p className="text-sm text-muted-foreground">
                            Je peux aussi travailler 100% à distance avec des outils de collaboration modernes (vidéo, partage d'écran, etc.)
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section className="w-full max-w-[100vw] py-24 md:py-32 bg-muted/30 relative overflow-hidden isolate">
          <div className="absolute inset-0 -z-10 grid-pattern-bg"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <Badge
                  variant="secondary"
                  className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                  data-delay="100"
                >
                  <span className="mr-1 text-primary">✦</span> Pourquoi Me Choisir ?
                </Badge>
                <h2
                  className="section-heading scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                  data-delay="200"
                >
                  La différence Imaginatum
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card className="border-border/40 hover-lift scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="300">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <Users className="mr-2 size-5 text-primary" />
                      vs Agences
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Prix transparents sans marge d'agence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Contact direct, pas d'intermédiaire</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Délais de livraison plus courts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Relation de proximité et personnalisée</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border/40 hover-lift bg-primary/5 scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="400">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <Code className="mr-2 size-5 text-primary" />
                      vs Templates
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Design 100% sur-mesure adapté à votre activité</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Code propre et optimisé pour vos besoins</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">SEO optimisé pour votre marché local</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Fonctionnalités spécifiques à votre métier</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border/40 hover-lift scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="500">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <Zap className="mr-2 size-5 text-primary" />
                      vs Freelances
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Stack moderne et performant (Next.js, React)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Processus structuré et garanties claires</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Connaissance du marché francilien</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Support et maintenance inclus</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full max-w-[100vw] py-24 md:py-32 bg-gradient-to-r from-primary to-primary/80 overflow-x-hidden">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-2xl md:text-3xl font-bold text-white mb-6 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                Prêt à travailler ensemble ?
              </h2>
              <p
                className="text-white/90 mb-8 text-lg scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Discutons de votre projet lors d'un appel gratuit de 15-30 minutes pour voir comment je peux vous aider.
              </p>
              <div
                className="flex flex-col gap-4 sm:flex-row justify-center items-center scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="300"
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100 h-12 rounded-full px-4 md:px-8 text-sm md:text-base font-bold shadow-lg"
                  >
                    Réserver un appel gratuit
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10 h-12 rounded-full px-4 md:px-8 text-sm md:text-base font-bold"
                  >
                    Voir mes réalisations
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

