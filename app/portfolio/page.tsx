"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
<<<<<<< HEAD
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
=======
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
import {
  ArrowRight,
  Eye,
  Github,
  ExternalLink,
  Filter,
  Star,
  Calendar,
  Code,
  Palette,
  Smartphone,
  Zap,
  ChevronDown,
<<<<<<< HEAD
  MapPin,
  Target,
  CheckCircle,
  TrendingUp,
  Quote,
  X
=======
  MapPin
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
} from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

<<<<<<< HEAD
  // Données des projets - Utilisez vos propres images de projets
  // Images recommandées : /projects/project-[1-4].png ou /portfolio/[nom-projet].png
=======
  // Données des projets (à remplacer par vos propres projets)
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
  const projects = [
    {
      id: 1,
      title: "La Table Française",
      description: "Site vitrine pour un restaurant gastronomique avec système de réservation en ligne",
<<<<<<< HEAD
      image: "/projects/project-1.png", // Remplacez par votre screenshot réel
      fallbackImage: "/projects/project-3.jpg", // Image de fallback si la principale n'existe pas
=======
      image: "/placeholder.svg?height=400&width=600",
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
      category: "site-vitrine",
      technologies: ["Next.js", "Tailwind CSS", "Prisma"],
      featured: true,
      results: "+120% de réservations en ligne",
<<<<<<< HEAD
      challenge: "Le restaurant cherchait à augmenter ses réservations en ligne tout en modernisant son image digitale.",
      solution: "Création d'un site vitrine élégant avec intégration d'un système de réservation en temps réel, optimisation mobile-first et SEO local.",
      metrics: [
        { label: "Réservations en ligne", value: "+120%", improvement: true },
        { label: "Taux de conversion", value: "15%", improvement: true },
        { label: "Temps de chargement", value: "< 2s", improvement: true }
      ],
      clientQuote: "Le site a complètement transformé notre façon de gérer les réservations. Les clients adorent la simplicité !",
=======
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
      link: "#",
      github: "#",
      year: 2024
    },
    {
      id: 2,
      title: "Artisan Menuisier Valdoisien",
      description: "Portfolio en ligne pour un artisan menuisier avec galerie de réalisations",
<<<<<<< HEAD
      image: "/portfolio/kakachi.png", // Utilise l'image existante
      fallbackImage: "/portfolio/katachi.png",
=======
      image: "/portfolio/kakachi.png?height=400&width=600",
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
      category: "site-vitrine",
      technologies: ["React", "CSS Modules", "Node.js"],
      featured: false,
      results: "5 devis par semaine en moyenne",
<<<<<<< HEAD
      challenge: "L'artisan avait besoin d'une vitrine en ligne pour présenter ses réalisations et générer des demandes de devis.",
      solution: "Portfolio responsive avec galerie interactive, formulaire de devis optimisé et référencement local pour le Val d'Oise.",
      metrics: [
        { label: "Demandes de devis", value: "5/semaine", improvement: true },
        { label: "Visibilité locale", value: "+80%", improvement: true }
      ],
=======
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
      link: "#",
      github: "#",
      year: 2024
    },
    {
      id: 3,
      title: "Blog Littéraire",
      description: "Plateforme de blog pour un auteur avec système de commentaires et abonnements",
<<<<<<< HEAD
      image: "/projects/project-2.png", // Remplacez par votre screenshot réel
      fallbackImage: "/projects/project-4.png",
=======
      image: "/placeholder.svg?height=400&width=600",
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
      category: "blog-portfolio",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
      featured: true,
      results: "200 abonnés en 2 mois",
<<<<<<< HEAD
      challenge: "L'auteur voulait une plateforme moderne pour partager ses écrits et développer une communauté de lecteurs.",
      solution: "Blog performant avec système d'abonnements, commentaires modérés, SEO optimisé et design élégant qui met en valeur le contenu.",
      metrics: [
        { label: "Abonnés", value: "200", improvement: true },
        { label: "Engagement", value: "+65%", improvement: true },
        { label: "Temps de lecture", value: "+40%", improvement: true }
      ],
      clientQuote: "La plateforme dépasse toutes mes attentes. La communauté grandit chaque jour !",
=======
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
      link: "#",
      github: "#",
      year: 2023
    },
    {
      id: 4,
      title: "Studio de Yoga",
      description: "Site présentiel avec planning des cours et formulaire d'inscription",
<<<<<<< HEAD
      image: "/projects/project-3.jpg", // Utilise l'image existante
      fallbackImage: "/projects/project-1.png",
=======
      image: "/projects/project-3.jpg?",
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
      category: "site-vitrine",
      technologies: ["HTML/CSS", "JavaScript", "PHP"],
      featured: false,
      results: "30 nouvelles inscriptions",
<<<<<<< HEAD
      challenge: "Le studio de yoga avait besoin d'un système pour gérer les inscriptions en ligne et présenter son planning de cours.",
      solution: "Site vitrine avec calendrier interactif, système d'inscription en ligne et optimisation pour mobile.",
      metrics: [
        { label: "Nouvelles inscriptions", value: "30", improvement: true },
        { label: "Inscriptions en ligne", value: "70%", improvement: true }
      ],
=======
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
      link: "#",
      github: "#",
      year: 2023
    },
    {
      id: 5,
      title: "Portfolio Photographe",
      description: "Galerie portfolio pour un photographe professionnel avec filtres par catégorie",
<<<<<<< HEAD
      image: "/portfolio/infinit-gallery.png", // Utilise l'image existante
      fallbackImage: "/portfolio/kakachi.png",
=======
      image: "/portfolio/infinit-gallery.png?height=400&width=600",
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
      category: "blog-portfolio",
      technologies: ["React", "Framer Motion", "Firebase"],
      featured: false,
      results: "Exposition digitale des œuvres",
<<<<<<< HEAD
      challenge: "Le photographe cherchait une vitrine digitale élégante pour présenter ses œuvres et attirer de nouveaux clients.",
      solution: "Portfolio interactif avec galerie infinie, filtres par catégorie, animations fluides et formulaire de contact intégré.",
      metrics: [
        { label: "Taux de visite", value: "+90%", improvement: true },
        { label: "Demandes de contact", value: "+50%", improvement: true }
      ],
=======
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
      link: "#",
      github: "#",
      year: 2023
    },
    {
      id: 6,
      title: "Site Association",
      description: "Présentation d'une association caritative avec formulaire de dons",
<<<<<<< HEAD
      image: "/projects/project-4.png", // Remplacez par votre screenshot réel
      fallbackImage: "/projects/project-2.png",
=======
      image: "/placeholder.svg?height=400&width=600",
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
      category: "site-vitrine",
      technologies: ["WordPress", "Elementor", "Stripe"],
      featured: false,
      results: "Augmentation des dons de 40%",
<<<<<<< HEAD
      challenge: "L'association voulait moderniser son site pour faciliter les dons en ligne et augmenter sa visibilité.",
      solution: "Site vitrine moderne avec intégration sécurisée des dons, storytelling impactant et optimisation pour la conversion.",
      metrics: [
        { label: "Dons en ligne", value: "+40%", improvement: true },
        { label: "Visiteurs uniques", value: "+60%", improvement: true }
      ],
=======
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
      link: "#",
      github: "#",
      year: 2023
    }
  ]

<<<<<<< HEAD
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

=======
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
  const filters = [
    { id: "all", label: "Tous les projets" },
    { id: "site-vitrine", label: "Sites vitrine" },
    { id: "blog-portfolio", label: "Blogs & Portfolios" },
    { id: "ecommerce", label: "E-commerce (bientôt)" }
  ]

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

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
    <>
      <main className="flex-1 overflow-x-hidden">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="relative isolate container mx-auto w-full max-w-[100vw] py-24 md:py-32 lg:py-40">
          <div className="relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
=======
        <section className="relative isolate container mx-auto w-full max-w-[100vw] py-16 md:py-24 lg:py-28">
          <div className="relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
              <Badge
                variant="secondary"
                className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                <span className="text-foreground mr-1">✦</span>
                Mes Réalisations
              </Badge>

              <h1
                className="hero-heading mb-6 text-4xl md:text-5xl scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Des projets concrets pour des résultats tangibles
              </h1>

              <p
                className="text-muted-foreground mb-8 text-lg leading-relaxed md:text-xl scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="300"
              >
                Découvrez une sélection de mes réalisations pour des professionnels du Val d'Oise et d'Île-de-France.
                Chaque projet est unique et conçu sur mesure pour répondre à des besoins spécifiques.
              </p>

              <div
                className="flex flex-col gap-4 sm:flex-row justify-center scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="400"
              >
                <Link href="/contact">
                  <Button size="lg" className="h-12 rounded-full px-4 md:px-8 text-sm md:text-base shadow-md hover-lift">
                    Discuter de mon projet
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link href="#portfolio">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 rounded-full border-primary/20 px-8 text-base hover-lift hover:border-primary/50 bg-transparent"
                  >
                    Voir les projets
                    <ChevronDown className="ml-2 size-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
<<<<<<< HEAD
        <section className="w-full max-w-[100vw] py-24 md:py-32 bg-muted/30 overflow-x-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
=======
        <section className="w-full max-w-[100vw] py-16 bg-muted/30 overflow-x-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
              <div className="text-center scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="100">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Projets livrés</div>
              </div>
              <div className="text-center scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="200">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Clients satisfaits</div>
              </div>
              <div className="text-center scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="300">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2+</div>
                <div className="text-muted-foreground">Ans d'expérience</div>
              </div>
              <div className="text-center scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="400">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">12</div>
                <div className="text-muted-foreground">Technologies maîtrisées</div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
<<<<<<< HEAD
        <section id="portfolio" className="w-full max-w-[100vw] py-24 md:py-32 bg-background relative overflow-x-hidden">
=======
        <section id="portfolio" className="w-full max-w-[100vw] py-16 md:py-24 bg-background relative overflow-x-hidden">
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge
                variant="secondary"
                className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                <span className="mr-1 text-primary">✦</span> Mes Réalisations
              </Badge>
              <h2
                className="section-heading scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
<<<<<<< HEAD
                Cas clients et Résultats Concrets
=======
                Une sélection de mes projets
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
              </h2>
              <p
                className="max-w-[800px] text-muted-foreground md:text-lg scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="300"
              >
<<<<<<< HEAD
                Découvrez comment j'ai aidé des professionnels comme vous à développer leur présence en ligne avec des résultats mesurables
=======
                Découvrez comment j'ai aidé des professionnels comme vous à développer leur présence en ligne
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
              </p>
            </div>

            {/* Filters */}
            <div className="mb-12 flex flex-col items-center scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="400">
              <div className="relative inline-block">
                <Button
                  variant="outline"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="rounded-full px-6 bg-transparent"
                >
                  <Filter className="mr-2 size-4" />
                  Filtrer les projets
                  <ChevronDown className={`ml-2 size-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                </Button>
                
                {isFilterOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-background border rounded-lg shadow-lg z-10">
                    {filters.map((filter) => (
                      <button
                        key={filter.id}
                        onClick={() => {
                          setActiveFilter(filter.id)
                          setIsFilterOpen(false)
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-muted transition-colors ${
                          activeFilter === filter.id ? 'bg-primary/10 text-primary' : ''
                        }`}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {filters.map((filter) => (
                  <Badge
                    key={filter.id}
                    variant={activeFilter === filter.id ? "default" : "outline"}
                    onClick={() => setActiveFilter(filter.id)}
                    className="cursor-pointer hover-glow"
                  >
                    {filter.label}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
<<<<<<< HEAD
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
=======
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="overflow-hidden hover-lift group scroll-animate opacity-0 translate-y-4 transition-all duration-700 border-0 shadow-lg"
                  data-delay={500 + (index * 100)}
                >
                  {/* Image Section - Now reaches top with no gaps */}
                  <div className="relative h-64 w-full  m-0 p-0">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
<<<<<<< HEAD
                      onError={(e) => {
                        // Fallback to fallbackImage if main image doesn't exist
                        const target = e.currentTarget as HTMLImageElement
                        const fallbackImage = (project as any).fallbackImage
                        if (fallbackImage && !target.src.includes(fallbackImage)) {
                          target.src = fallbackImage
                        } else if (!target.src.includes("/placeholder.svg")) {
                          target.src = "/placeholder.svg"
                        }
                      }}
=======
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
                    />
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-amber-500">
                          <Star className="mr-1 size-3" />
                          Projet phare
                        </Badge>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.github && (
                        <Button size="icon" className="rounded-full h-8 w-8 bg-background/80 backdrop-blur">
                          <Github className="size-4" />
                        </Button>
                      )}
                      {project.link && (
                        <Button size="icon" className="rounded-full h-8 w-8 bg-background/80 backdrop-blur">
                          <ExternalLink className="size-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <CardHeader className="pb-3 pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <Badge variant="outline" className="flex items-center">
                        <Calendar className="mr-1 size-3" />
                        {project.year}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
<<<<<<< HEAD
                    <div className="flex items-center justify-between text-sm mb-4 p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center text-muted-foreground">
                        <TrendingUp className="mr-1 size-4 text-green-500" />
                        <span className="font-semibold">{project.results}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {project.metrics && project.metrics.slice(0, 2).map((metric, idx) => (
                        <div key={idx} className="text-center p-2 bg-primary/5 rounded border border-primary/10">
                          <div className="text-xs font-bold text-primary">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye className="mr-2 size-4" />
                      Voir le cas client
=======
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Zap className="mr-1 size-4 text-green-500" />
                      <span>{project.results}</span>
                    </div>
                    
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Eye className="mr-2 size-4" />
                      Voir les détails
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12 scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="500">
                <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Filter className="size-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Aucun projet dans cette catégorie</h3>
                <p className="text-muted-foreground">D'autres projets seront bientôt disponibles dans cette catégorie.</p>
              </div>
            )}
          </div>
        </section>

<<<<<<< HEAD
        {/* Case Study Detail Modal */}
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl md:text-3xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-base">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                {/* Challenge Section */}
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Target className="mr-2 size-5 text-primary" />
                      Le Défi
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.challenge}</p>
                  </CardContent>
                </Card>

                {/* Solution Section */}
                <Card className="border-border/40 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Code className="mr-2 size-5 text-primary" />
                      La Solution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.solution}</p>
                  </CardContent>
                </Card>

                {/* Metrics Section */}
                {selectedProject.metrics && selectedProject.metrics.length > 0 && (
                  <Card className="border-border/40">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <TrendingUp className="mr-2 size-5 text-primary" />
                        Résultats Mesurables
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        {selectedProject.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center p-4 bg-muted/50 rounded-lg border border-border/40">
                            <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                            <div className="text-sm text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Client Quote */}
                {selectedProject.clientQuote && (
                  <Card className="border-border/40 bg-gradient-to-br from-primary/10 to-primary/5">
                    <CardContent className="p-6">
                      <Quote className="size-8 text-primary mb-3 opacity-50" />
                      <p className="text-muted-foreground italic leading-relaxed text-lg mb-3">
                        "{selectedProject.clientQuote}"
                      </p>
                      <p className="text-sm text-muted-foreground">— Client {selectedProject.title}</p>
                    </CardContent>
                  </Card>
                )}

                {/* Technologies */}
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Code className="mr-2 size-5 text-primary" />
                      Technologies Utilisées
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="px-3 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/contact" className="flex-1">
                    <Button className="w-full h-12 rounded-full">
                      Demander un projet similaire
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </Link>
                  {selectedProject.link && (
                    <Link href={selectedProject.link} target="_blank" className="flex-1">
                      <Button variant="outline" className="w-full h-12 rounded-full">
                        <ExternalLink className="mr-2 size-4" />
                        Voir le site en live
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Testimonials Section */}
        <section className="w-full max-w-[100vw] py-24 md:py-32 bg-muted/30 overflow-x-hidden">
=======
        {/* Testimonials Section */}
        <section className="w-full max-w-[100vw] py-16 md:py-24 bg-muted/30 overflow-x-hidden">
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge
                variant="secondary"
                className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                <span className="mr-1 text-primary">✦</span> Témoignages
              </Badge>
              <h2
                className="section-heading scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Ce que disent mes clients
              </h2>
            </div>

<<<<<<< HEAD
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
=======
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
              <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 border-0 shadow-lg" data-delay="300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/20 text-primary flex size-12 items-center justify-center rounded-full font-bold">
                      M
                    </div>
                    <div>
                      <div className="font-semibold">Marc</div>
                      <div className="text-muted-foreground text-sm">Artisan plombier à Saint-Ouen-l'Aumône</div>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="italic text-foreground">
                    "J'ai multiplié par 5 mes demandes de devis en 3 mois! Maintenant je dois refuser du travail. Un site parfaitement adapté à mon métier."
                  </p>
                </CardContent>
              </Card>

              <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 border-0 shadow-lg" data-delay="400">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/20 text-primary flex size-12 items-center justify-center rounded-full font-bold">
                      S
                    </div>
                    <div>
                      <div className="font-semibold">Sophie</div>
                      <div className="text-muted-foreground text-sm">Créatrice de bijoux à Cergy</div>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="italic text-foreground">
                    "Mon site portfolio a vraiment mis en valeur mon travail. Les clients peuvent maintenant voir toutes mes créations et me contacter facilement."
                  </p>
                </CardContent>
              </Card>

              <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 border-0 shadow-lg" data-delay="500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/20 text-primary flex size-12 items-center justify-center rounded-full font-bold">
                      T
                    </div>
                    <div>
                      <div className="font-semibold">Thomas</div>
                      <div className="text-muted-foreground text-sm">Restaurant à Pontoise</div>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="italic text-foreground">
                    "Enfin un développeur qui parle humain! Compréhensif, patient et ultra-compétent. Mon site de réservation fonctionne parfaitement."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
<<<<<<< HEAD
        <section className="w-full max-w-[100vw] py-24 md:py-32 bg-gradient-to-br from-background via-muted/5 to-background relative overflow-x-hidden isolate noise-overlay">
          {/* Grid pattern */}
          <div className="absolute inset-0 -z-10 grid-pattern-bg opacity-20"></div>
          {/* Radial spotlight */}
          <div className="radial-spotlight-center"></div>
          {/* Animated orbs */}
          <div className="gradient-orb gradient-orb-1"></div>
          <div className="gradient-orb gradient-orb-2"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
=======
        <section className="w-full max-w-[100vw] py-16 md:py-24 bg-background relative overflow-x-hidden">
          <div className="container mx-auto px-4 md:px-6 relative">
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <Badge
                variant="secondary"
                className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                <span className="mr-1 text-primary">✦</span> Ma Méthode
              </Badge>
              <h2
                className="section-heading scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Comment je travaille sur vos projets
              </h2>
            </div>

<<<<<<< HEAD
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
=======
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
              <Card className="text-center scroll-animate opacity-0 translate-y-4 transition-all duration-700 border-0 shadow-lg" data-delay="300">
                <CardContent className="p-6">
                  <div className="bg-primary/10 text-primary mx-auto flex size-16 items-center justify-center rounded-full mb-4">
                    <Palette className="size-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Design Personnalisé</h3>
                  <p className="text-muted-foreground">
                    Création d'une identité visuelle unique qui représente parfaitement votre entreprise et attire vos clients idéaux.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center scroll-animate opacity-0 translate-y-4 transition-all duration-700 border-0 shadow-lg" data-delay="400">
                <CardContent className="p-6">
                  <div className="bg-primary/10 text-primary mx-auto flex size-16 items-center justify-center rounded-full mb-4">
                    <Code className="size-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Développement Sur-Mesure</h3>
                  <p className="text-muted-foreground">
                    Développement de solutions adaptées à vos besoins spécifiques avec les technologies les plus modernes.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center scroll-animate opacity-0 translate-y-4 transition-all duration-700 border-0 shadow-lg" data-delay="500">
                <CardContent className="p-6">
                  <div className="bg-primary/10 text-primary mx-auto flex size-16 items-center justify-center rounded-full mb-4">
                    <Smartphone className="size-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Optimisation Mobile</h3>
                  <p className="text-muted-foreground">
                    Sites parfaitement optimisés pour mobile, là où se trouvent la majorité de vos clients potentiels.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
<<<<<<< HEAD
        <section className="w-full max-w-[100vw] py-24 md:py-32 bg-gradient-to-r from-primary to-primary/80 overflow-x-hidden">
=======
        <section className="w-full max-w-[100vw] py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 overflow-x-hidden">
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-2xl md:text-3xl font-bold text-white mb-6 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                Prêt à créer votre présence en ligne ?
              </h2>
              <p
                className="text-white/90 mb-8 text-lg scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Discutons de votre projet et créons ensemble un site qui boostera votre activité
              </p>
              <div
                className="flex flex-col gap-4 sm:flex-row justify-center scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="300"
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100 h-12 rounded-full px-8 font-bold shadow-lg"
                  >
                    Discuter de mon projet
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10 h-12 rounded-full px-8 font-bold"
                  >
                    Voir mes services
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