"use client"
import { HexagonBackground } from '@/components/animate-ui/components/backgrounds/hexagon';
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowRight,
  Check,
  FileCode,
  Code,
  Monitor,
  ShoppingCart,
  Search,
  Phone,
  MapPin,
  Users,
  Clock,
  Shield,
  CheckCircle,
  Award,
  Target,
  ExternalLink,
  TrendingUp,
  Zap,
  Smartphone,
  Star
} from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"
import TestimonialCard from '@/components/TestimonialCard';
import TestimonialSection from '@/components/TestimonialCard';
import { LeadMagnet } from '@/components/lead-magnet';
import { GuaranteeSection } from '@/components/guarantee-section';
import { ClientLogos } from '@/components/client-logos';
import { VisualProcessFlow } from '@/components/visual-process-flow';

const testimonials = [
  {
    name: "Marie Dubois",
    title: "Gérante - Boutique de Mode",
    company: "Cergy Village",
    text: "Mon site e-commerce a augmenté mes ventes de 45% en 3 mois. Service impeccable et réactivité exceptionnelle.",
    avatar: "/avatars/marie-dubois.jpg"
  },
  {
    name: "Thomas Martin",
    title: "Directeur Marketing",
    company: "TechSolutions SAS",
    text: "Développement sur mesure qui correspond exactement à nos besoins. Un partenaire de confiance pour nos projets digitaux.",
    avatar: "/avatars/thomas-martin.jpg"
  },
  {
    name: "Sophie Lambert",
    title: "Chef d'Entreprise",
    company: "Lambert Consulting",
    text: "Site livré dans les délais, formation complète et support réactif. Je recommande sans hésitation.",
    avatar: "/avatars/sophie-lambert.jpg"
  },
  {
    name: "David Petit",
    title: "Artisan Indépendant",
    company: "DP Électricité",
    text: "Enfin visible sur internet ! Les appels affluent depuis la mise en ligne de mon site. Merci pour votre professionnalisme.",
    avatar: "/avatars/david-petit.jpg"
  },
  {
    name: "Laura Moreau",
    title: "Responsable Communication",
    company: "Institut de Beauté L'Essentiel",
    text: "Design moderne et fonctionnel qui met parfaitement en valeur nos services. Nos clients adorent la nouvelle interface.",
    avatar: "/avatars/laura-moreau.jpg"
  },
  {
    name: "Michel Bernard",
    title: "Directeur Général",
    company: "Bernard & Fils SARL",
    text: "Un investissement rentable. Le site génère du lead qualifié quotidiennement. Excellent retour sur investissement.",
    avatar: "/avatars/michel-bernard.jpg"
  }
];


export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 4

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

    // Function to observe all scroll-animate elements
    const observeElements = () => {
      const elements = document.querySelectorAll(".scroll-animate")
      elements.forEach((el) => {
        // Only observe if not already animated
        if (!el.classList.contains("animate-fade-up")) {
          observer.observe(el)
        }
      })
    }

    // Initial observe
    observeElements()

    // Re-observe after a short delay to catch any late-rendered elements
    const timeoutId = setTimeout(observeElements, 100)

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [])

  // Carousel auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Update slides when currentSlide changes
  useEffect(() => {
    // Update mockup images
    const projectImages = document.querySelectorAll('[data-project-id]')
    projectImages.forEach((img: Element, index) => {
      if (index === currentSlide) {
        img.classList.remove('opacity-0')
        img.classList.add('opacity-100')
      } else {
        img.classList.remove('opacity-100')
        img.classList.add('opacity-0')
      }
    })

    // Update background images
    const backgroundImages = document.querySelectorAll('[data-bg-theme]')
    backgroundImages.forEach((bg: Element, index) => {
      if (index === currentSlide) {
        bg.classList.remove('opacity-0')
        bg.classList.add('opacity-20')
      } else {
        bg.classList.remove('opacity-20')
        bg.classList.add('opacity-0')
      }
    })

    // Update indicator dots
    const dots = document.querySelectorAll('[data-slide-index]')
    dots.forEach((dot: Element, index) => {
      if (index === currentSlide) {
        dot.classList.add('bg-primary', 'w-8')
        dot.classList.remove('bg-gray-300', 'w-3')
      } else {
        dot.classList.remove('bg-primary', 'w-8')
        dot.classList.add('bg-gray-300', 'w-3')
      }
    })
  }, [currentSlide])

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <main className="flex-1 overflow-x-hidden">
       {/* Section Héro avec Background Dynamique */}
<section className="relative isolate overflow-hidden w-full max-w-[100vw] py-24 md:py-32 lg:py-48">
  {/* Base gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/5 z-0"></div>
  {/* Dynamic Background Images */}
  <div className="absolute inset-0 z-0">
    {[
      { id: 1, image: "/projects/project-1.png", theme: "plant" },
      { id: 2, image: "/projects/project-2.png", theme: "architecture" },
      { id: 3, image: "/projects/project-3.jpg", theme: "portfolio" },
      { id: 4, image: "/projects/project-4.png", theme: "ecommerce" }
    ].map((bg, index) => (
      <div
        key={bg.id}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          index === 0 ? 'opacity-20' : 'opacity-0'
        }`}
        data-bg-theme={bg.theme}
        style={{
          backgroundImage: `url(${bg.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)'
        }}
      />
    ))}
  </div>
  
  <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-7xl">
    <div className="grid items-center gap-12 lg:grid-cols-2 max-w-7xl mx-auto">
      <div className="mx-auto max-w-2xl text-left lg:mx-0 w-full">
        {/* Votre contenu existant reste inchangé */}
        <Badge
          variant="secondary"
          className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
          data-delay="100"
        >
          <span className="text-foreground mr-1">✦</span>
          Développeur Web Sur-Mesure | Val d'Oise
        </Badge>

        <h1
          className="hero-heading mb-2 pb-6 text-3xl md:text-5xl lg:text-6xl scroll-animate opacity-0 translate-y-4 transition-all duration-700 break-words"
          data-delay="200"
        >
          Votre Site Web Professionnel en temps record. Garanti.
        </h1>

        <p
          className="text-muted-foreground mb-8 text-base leading-relaxed md:text-xl scroll-animate opacity-0 translate-y-4 transition-all duration-700 break-words"
          data-delay="300"
        >
          De l'idée au site qui convertit, sans stress. Solutions sur-mesure pour artisans et entrepreneurs du Val d'Oise. 
          <strong className="text-foreground"> Garantie satisfaction 100%</strong> - Si vous n'êtes pas satisfait, je rembourse intégralement.
        </p>

        {/* Personal Photo + Trust Signal */}
        <div className="flex items-center gap-4 mb-8 scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="350">
          <div className="relative size-12 md:size-14 rounded-full overflow-hidden border-2 border-primary/20 shadow-md ring-2 ring-primary/10">
            <Image
              src="/profile-photo.jpg"
              alt="Développeur Web Indépendant - Imaginatum Studio"
              width={56}
              height={56}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to placeholder if profile photo doesn't exist
                const target = e.currentTarget as HTMLImageElement
                if (!target.src.includes("/placeholder-user.jpg")) {
                  target.src = "/placeholder-user.jpg"
                }
              }}
            />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">Développeur Web Indépendant</p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <MapPin className="size-3" />
              Val d&apos;Oise, Île-de-France
            </p>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">100% clients satisfaits</span>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col gap-4 sm:flex-row scroll-animate opacity-0 translate-y-4 transition-all duration-700"
          data-delay="400"
        >
          <Link href="/devis" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto h-12 rounded-full px-4 md:px-8 text-sm md:text-base shadow-md hover-lift">
              Obtenir un Devis Personnalisé
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-12 rounded-full border-primary/20 px-4 md:px-8 text-sm md:text-base hover-lift hover:border-primary/50 bg-transparent"
            >
              <Phone className="mr-2 size-4" />
              Consultation Gratuite
            </Button>
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4 md:gap-6">
          <div
            className="text-muted-foreground flex items-center gap-2 text-sm scroll-animate opacity-0 translate-y-4 transition-all duration-700"
            data-delay="500"
          >
            <Check className="text-primary size-5 flex-shrink-0" />
            <span>Design sur-mesure adapté à votre métier</span>
          </div>
          <div
            className="text-muted-foreground flex items-center gap-2 text-sm scroll-animate opacity-0 translate-y-4 transition-all duration-700"
            data-delay="600"
          >
            <Check className="text-primary size-5 flex-shrink-0" />
            <span>Référencement naturel intégré</span>
          </div>
          <div
            className="text-muted-foreground flex items-center gap-2 text-sm scroll-animate opacity-0 translate-y-4 transition-all duration-700"
            data-delay="700"
          >
            <Check className="text-primary size-5 flex-shrink-0" />
            <span>Support personnalisé et formation</span>
          </div>
        </div>

        <div
          className="mt-8 flex flex-wrap items-center gap-4 md:gap-6 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
          data-delay="800"
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium">4.9/5</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm">50+ projets livrés</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span className="text-sm">Val d'Oise</span>
          </div>
        </div>
      </div>

{/* Enhanced Mockup Section with Carousel */}
<div className="relative hidden lg:flex items-center justify-center scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="900">
  <div className="relative w-full max-w-4xl mx-auto">
    {/* Laptop Mockup Container */}
    <div className="relative">
      {/* Laptop Frame */}
      <img 
        src="/laptop-mockup.png" 
        alt="Mockup d'ordinateur portable"
        className="w-full h-auto relative z-20"
      />
      
      {/* Screen Content - Rotating Images */}
      <div className="absolute top-[9.5%] left-[13%] w-[74%] h-[78%] bg-gray-900 rounded-lg overflow-hidden">
        {[
          { id: 1, src: "/projects/project-1.png", alt: "Site e-commerce plantes" },
          { id: 2, src: "/projects/project-2.png", alt: "Portfolio architecture" },
          { id: 3, src: "/projects/project-3.jpg", alt: "Portfolio designer" },
          { id: 4, src: "/projects/project-4.png", alt: "Site vitrine entreprise locale" }
        ].map((project, index) => (
          <div
            key={project.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'translate-x-0 opacity-100' 
                : index < currentSlide 
                ? '-translate-x-full opacity-0' 
                : 'translate-x-full opacity-0'
            }`}
            data-project-id={project.id}
          >
            <img
              src={project.src}
              alt={project.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>

    {/* Project Indicator Dots */}
    <div className="flex justify-center mt-6 space-x-2">
      {[1, 2, 3, 4].map((dot, index) => (
        <button
          key={dot}
          className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
            index === currentSlide 
              ? 'bg-primary w-8' 
              : 'bg-gray-300 hover:bg-gray-400'
          }`}
          data-slide-index={index}
          onClick={() => setCurrentSlide(index)}
          aria-label={`Voir le projet ${index + 1}`}
        />
      ))}
    </div>
  </div>


</div>
    </div>
  </div>
</section>


{/* Section Avantages - REWRITTEN FOR CONVERSIONS */}
<section className="w-full max-w-[100vw] py-24 md:py-32 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden isolate noise-overlay">
  {/* Grid pattern */}
  <div className="absolute inset-0 -z-10 grid-pattern-bg opacity-30"></div>
  {/* Radial spotlights */}
  <div className="radial-spotlight-top-right"></div>
  <div className="radial-spotlight-bottom-left"></div>
  {/* Animated gradient orbs */}
  <div className="gradient-orb gradient-orb-1"></div>
  <div className="gradient-orb gradient-orb-2"></div>
  <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
      <Badge
        variant="secondary"
        className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
        data-delay="100"
      >
        <span className="mr-1 text-primary">✦</span> Avantages Concrets
      </Badge>
      <h2
        className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
        data-delay="200"
      >
        Des Résultats Mesurables pour Votre Entreprise
      </h2>
      <p
        className="max-w-[800px] mx-auto text-muted-foreground md:text-lg scroll-animate opacity-0 translate-y-4 transition-all duration-700"
        data-delay="300"
      >
        Solutions web sur-mesure qui génèrent plus de leads, améliorent votre visibilité et boostent vos ventes.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 hover-lift hover-glow border border-primary/10 bg-card/80 backdrop-blur" data-delay="400">
        <CardContent className="p-6 text-center">
          <div className="bg-primary/10 text-primary mx-auto flex size-16 items-center justify-center rounded-full mb-4">
            <TrendingUp className="size-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">+30% de Visibilité</h3>
          <p className="text-muted-foreground">
            Sites optimisés pour le référencement local et adaptés à votre marché francilien
          </p>
        </CardContent>
      </Card>

      <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 hover-lift hover-glow border border-primary/10 bg-card/80 backdrop-blur" data-delay="500">
        <CardContent className="p-6 text-center">
          <div className="bg-primary/10 text-primary mx-auto flex size-16 items-center justify-center rounded-full mb-4">
            <Zap className="size-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Déploiement Rapide</h3>
          <p className="text-muted-foreground">Solutions livrées en 2-3 semaines avec support direct</p>
        </CardContent>
      </Card>

      <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 hover-lift hover-glow border border-primary/10 bg-card/80 backdrop-blur" data-delay="600">
        <CardContent className="p-6 text-center">
          <div className="bg-primary/10 text-primary mx-auto flex size-16 items-center justify-center rounded-full mb-4">
            <Smartphone className="size-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">100% Mobile-Friendly</h3>
          <p className="text-muted-foreground">
            Expérience optimale sur tous appareils pour capter plus de clients
          </p>
        </CardContent>
      </Card>

      <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 hover-lift hover-glow border border-primary/10 bg-card/80 backdrop-blur" data-delay="700">
        <CardContent className="p-6 text-center">
          <div className="bg-primary/10 text-primary mx-auto flex size-16 items-center justify-center rounded-full mb-4">
            <Shield className="size-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Sécurité Garantie</h3>
          <p className="text-muted-foreground">
            Sites sécurisés avec hébergement français et maintenance incluse
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

{/* Section Processus - VISUAL PROCESS FLOW */}
<VisualProcessFlow />

        {/* Section Tarifs */}
        <section className="w-full max-w-[100vw] py-24 md:py-32 bg-gradient-to-b from-muted/20 via-muted/30 to-muted/10 relative overflow-hidden isolate noise-overlay">
          {/* Grid pattern */}
          <div className="absolute inset-0 -z-10 grid-pattern-bg opacity-40"></div>
          {/* Radial spotlights */}
          <div className="radial-spotlight-top-right"></div>
          <div className="radial-spotlight-bottom-left"></div>
          {/* Animated orbs */}
          <div className="gradient-orb gradient-orb-1"></div>
          <div className="gradient-orb gradient-orb-3"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <Badge
                variant="secondary"
                className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                <span className="mr-1 text-primary">✦</span> Tarifs Transparents
              </Badge>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Des Solutions Adaptées à Votre Budget
              </h2>
              <p
                className="max-w-[800px] text-muted-foreground md:text-lg scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="300"
              >
                Choisissez la formule qui correspond à vos besoins et à votre ambition digitale.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Site Vitrine */}
              <Card
                className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 hover-lift group"
                data-delay="400"
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="bg-blue-500/10 text-blue-600 mx-auto flex size-16 items-center justify-center rounded-full mb-6 group-hover:bg-blue-500/20 transition-colors">
                    <Monitor className="size-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Site Vitrine Essentiel</h3>
                  <p className="text-muted-foreground mb-6">
                    Parfait pour artisans, commerçants, professions libérales
                  </p>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">949€</div>
                    <div className="text-sm text-muted-foreground">Paiement unique</div>
                  </div>
                  <ul className="text-left space-y-3 mb-4 flex-1">
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>3-4 pages sur-mesure</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Design responsive + SEO local</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Formulaire de contact</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Plan Google Maps</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Hébergement + domaine (1 an)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Formation express 30 min</span>
                    </li>
                  </ul>
                  <div className="mb-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-xs text-muted-foreground mb-1">Option recommandée :</p>
                    <p className="text-sm font-semibold text-foreground">
                      + Calendly : <span className="text-primary">149€</span>
                    </p>
                    <p className="text-xs text-muted-foreground">→ Version complète : 1 099€</p>
                  </div>
                  <Link href="/devis">
                    <Button className="w-full h-12 rounded-full hover-scale">Choisir cette formule</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Portfolio/Blog - Mise en avant */}
              <Card
                className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 hover-lift group border-primary/50 relative"
                data-delay="500"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">Le plus populaire</Badge>
                </div>
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="bg-primary/10 text-primary mx-auto flex size-16 items-center justify-center rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                    <FileCode className="size-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Portfolio / Blog avec Admin</h3>
                  <p className="text-muted-foreground mb-6">Pour artistes, photographes, architectes, créateurs</p>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">1 399€</div>
                    <div className="text-sm text-muted-foreground">Paiement unique</div>
                  </div>
                  <ul className="text-left space-y-3 mb-4 flex-1">
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Tout du Pack Vitrine</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Auth sécurisée + Dashboard</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Publication projets/articles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Upload images optimisé</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Filtrage + catégories</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Formation 1h + Support 30j</span>
                    </li>
                  </ul>
                  <div className="mb-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-xs text-muted-foreground mb-1">Option avancée :</p>
                    <p className="text-sm font-semibold text-foreground">
                      Social Features : <span className="text-primary">dès 1 999€</span>
                    </p>
                    <p className="text-xs text-muted-foreground">(Comptes, likes, commentaires)</p>
                  </div>
                  <Link href="/devis">
                    <Button className="w-full h-12 rounded-full hover-scale bg-primary">Choisir cette formule</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* E-Commerce - Coming Soon */}
              <Card
                className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 hover-lift group border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10"
                data-delay="600"
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="bg-primary/10 text-primary mx-auto flex size-16 items-center justify-center rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                    <ShoppingCart className="size-8" />
                  </div>
                  <Badge variant="outline" className="mb-4 mx-auto border-primary/30 text-primary bg-primary/10">
                    Bientôt disponible
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2">E-Commerce & Sur-Mesure</h3>
                  <p className="text-muted-foreground mb-6">Boutique en ligne complète avec fonctionnalités avancées</p>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">Bientôt</div>
                    <div className="text-sm text-muted-foreground">À partir de 2 700€</div>
                  </div>
                  <ul className="text-left space-y-3 mb-8 flex-1">
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Boutique en ligne complète</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Dashboard vendeur</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Paiement sécurisé (Stripe/PayPal)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Gestion stocks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Automatisations avancées</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>CRM léger intégré</span>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="w-full h-12 rounded-full hover-scale border-primary/50 hover:border-primary bg-transparent"
                    >
                      Être informé du lancement
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12 max-w-3xl mx-auto">
              <p className="text-muted-foreground mb-6 text-base md:text-lg">
                Tous les tarifs incluent l'hébergement, le nom de domaine et la maintenance de base
              </p>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="rounded-full px-4 md:px-8 text-sm md:text-base bg-transparent whitespace-normal">
                  <Phone className="mr-2 size-4" />
                  <span className="hidden sm:inline">Consultation gratuite pour </span>définir vos besoins
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <GuaranteeSection />

        {/* Section Services */}
        <section id="features" className="relative isolate w-full max-w-[100vw] py-24 md:py-32 bg-gradient-to-br from-background via-muted/5 to-background overflow-x-hidden noise-overlay">
          {/* Radial spotlight center */}
          <div className="radial-spotlight-center"></div>
          {/* Animated gradient orbs */}
          <div className="gradient-orb gradient-orb-1"></div>
          <div className="gradient-orb gradient-orb-2"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <Badge
                variant="secondary"
                className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                <span className="text-foreground mr-1">✦</span> Nos Solutions
              </Badge>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Des Armes Secrètes Pour Vous Faire Décoller
              </h2>
              <p
                className="text-muted-foreground max-w-[800px] mx-auto md:text-lg scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="300"
              >
                Ne laissez plus jamais un client potentiel passer à côté
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              <Card
                className="rounded-xl border text-card-foreground shadow border-border/40 from-card to-card/50 hover:border-primary/20 group h-full overflow-hidden bg-gradient-to-b backdrop-blur transition-all hover:shadow-lg hover-lift scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="400"
              >
                <CardContent className="flex h-full flex-col p-6">
                  <div className="bg-primary/10 text-primary group-hover:bg-primary/20 mb-4 flex size-12 items-center justify-center rounded-full transition-colors duration-300 hover-scale">
                    <Monitor className="size-5" />
                  </div>
                  <h3 className="mb-2 flex items-center gap-2 text-xl font-bold">Design Mobile-First</h3>
                  <p className="text-muted-foreground text-pretty mb-6">
                    "Votre site est-il prêt pour le tsunami mobile?" +70% des Français surfent principalement sur
                    mobile.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="rounded-xl border text-card-foreground shadow border-border/40 from-card to-card/50 hover:border-primary/20 group h-full overflow-hidden bg-gradient-to-b backdrop-blur transition-all hover:shadow-lg hover-lift scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="500"
              >
                <CardContent className="flex h-full flex-col p-6">
                  <div className="bg-primary/10 text-primary group-hover:bg-primary/20 mb-4 flex size-12 items-center justify-center rounded-full transition-colors duration-300 hover-scale">
                    <Search className="size-5" />
                  </div>
                  <h3 className="mb-2 flex items-center gap-2 text-xl font-bold">Référencement Google (SEO)</h3>
                  <p className="text-muted-foreground text-pretty mb-6">
                    "Apparaissez en 1ère page quand on vous cherche". Techniques éprouvées pour sortir du lot.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="rounded-xl border text-card-foreground shadow border-border/40 from-card to-card/50 hover:border-primary/20 group h-full overflow-hidden bg-gradient-to-b backdrop-blur transition-all hover:shadow-lg hover-lift scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="600"
              >
                <CardContent className="flex h-full flex-col p-6">
                  <div className="bg-primary/10 text-primary group-hover:bg-primary/20 mb-4 flex size-12 items-center justify-center rounded-full transition-colors duration-300 hover-scale">
                    <ShoppingCart className="size-5" />
                  </div>
                  <h3 className="mb-2 flex items-center gap-2 text-xl font-bold">E-commerce Convertisseur</h3>
                  <p className="text-muted-foreground text-pretty mb-6">
                    "Vendez 24h/24 même pendant que vous dormez". Expérience d'achat simplifiée.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="rounded-xl border text-card-foreground shadow border-border/40 from-card to-card/50 hover:border-primary/20 group h-full overflow-hidden bg-gradient-to-b backdrop-blur transition-all hover:shadow-lg hover-lift scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="700"
              >
                <CardContent className="flex h-full flex-col p-6">
                  <div className="bg-primary/10 text-primary group-hover:bg-primary/20 mb-4 flex size-12 items-center justify-center rounded-full transition-colors duration-300 hover-scale">
                    <Code className="size-5" />
                  </div>
                  <h3 className="mb-2 flex items-center gap-2 text-xl font-bold">Solution Tout-en-Un</h3>
                  <p className="text-muted-foreground text-pretty mb-6">
                    "On s'occupe de tout, vous vous concentrez sur votre métier". Hébergement ultra-rapide en France.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="rounded-xl border text-card-foreground shadow border-border/40 from-card to-card/50 hover:border-primary/20 group h-full overflow-hidden bg-gradient-to-b backdrop-blur transition-all hover:shadow-lg hover-lift scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="800"
              >
                <CardContent className="flex h-full flex-col p-6">
                  <div className="bg-primary/10 text-primary group-hover:bg-primary/20 mb-4 flex size-12 items-center justify-center rounded-full transition-colors duration-300 hover-scale">
                    <FileCode className="size-5" />
                  </div>
                  <h3 className="mb-2 flex items-center gap-2 text-xl font-bold">Design Personnalisé</h3>
                  <p className="text-muted-foreground text-pretty mb-6">
                    "Enfin un site qui vous ressemble VRAIMENT". Sur-mesure, pas du prêt-à-porter.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>



      {/* Testimonials Section */}
        <section className="w-full max-w-[100vw] py-24 md:py-32 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden isolate noise-overlay">
          {/* Grid pattern */}
          <div className="absolute inset-0 -z-10 grid-pattern-bg opacity-30"></div>
          {/* Radial spotlights */}
          <div className="radial-spotlight-top-right"></div>
          <div className="radial-spotlight-bottom-left"></div>
          {/* Animated gradient orbs */}
          <div className="gradient-orb gradient-orb-1"></div>
          <div className="gradient-orb gradient-orb-2"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <Badge
                variant="secondary"
                className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                <span className="mr-1 text-primary">✦</span> Témoignages
              </Badge>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Ce que disent mes clients
              </h2>
              <p
                className="max-w-[800px] text-muted-foreground md:text-lg scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="300"
              >
                Découvrez les retours d'expérience de professionnels du Val d'Oise qui ont fait confiance à Imaginatum Studio.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 hover-lift hover-glow border border-primary/10 bg-card/80 backdrop-blur"
                  data-delay={400 + index * 100}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="size-12 border-2 border-primary/20">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-muted-foreground text-sm">{testimonial.title}</div>
                        <div className="text-muted-foreground text-xs">{testimonial.company}</div>
                      </div>
                    </div>
                    <div className="flex items-center mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-foreground italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

      {/* FAQ Section */}
        <section className="w-full max-w-[100vw] py-24 md:py-32 bg-gradient-to-br from-background via-muted/5 to-background overflow-x-hidden relative isolate noise-overlay">
          {/* Subtle radial spotlight */}
          <div className="radial-spotlight-center"></div>
          {/* Animated orbs */}
          <div className="gradient-orb gradient-orb-2"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <Badge
                variant="secondary"
                className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                <span className="mr-1 text-primary">✦</span> Questions Fréquentes
              </Badge>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Tout Ce Que Vous Voulez Savoir
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                    Combien de temps faut-il pour créer mon site web ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    Un site vitrine prend généralement 2-3 semaines, un e-commerce 4-6 semaines. Cela dépend de la
                    complexité de votre projet et de la rapidité de nos échanges. Je vous donne toujours un planning
                    précis dès le début.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-t">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                    Que se passe-t-il après la livraison de mon site ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    Vous recevez une formation complète pour gérer votre site en autonomie. Je reste disponible pour le
                    support technique et les évolutions. L'hébergement et la maintenance de base sont inclus la première
                    année.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-t">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                    Mon site sera-t-il visible sur Google ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    Absolument ! Chaque site est optimisé pour le référencement naturel (SEO) dès sa création. Structure
                    technique, contenu optimisé, vitesse de chargement... tout est pensé pour plaire à Google.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-t">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                    Puis-je modifier mon site moi-même après ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    Bien sûr ! Je vous forme à l'utilisation d'un système de gestion simple et intuitif. Vous pourrez
                    modifier vos textes, ajouter des photos, créer de nouvelles pages... en toute autonomie.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-t">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                    Travaillez-vous avec tous types d'entreprises ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    Je me spécialise dans les TPE/PME du Val d'Oise : artisans, professions libérales, commerces,
                    restaurants... Mon approche locale me permet de comprendre parfaitement vos enjeux et votre
                    clientèle.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-t">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                    Que comprend exactement votre service ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    Tout ! Conception, design, développement, hébergement, nom de domaine, formation, support... Vous
                    n'avez qu'un seul interlocuteur pour tout votre projet web. Simplicité garantie.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border-t">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                    Comment puis-je vous faire confiance sans voir de clients précédents ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    Excellente question ! C'est pourquoi j'offre une <strong>garantie satisfaction 100%</strong> : si vous n'êtes pas satisfait dans les 30 premiers jours, je vous rembourse intégralement. De plus, je construis mon propre site avec les mêmes technologies que je vous propose - vous pouvez voir la qualité de mon travail directement ici. Transparence totale : je vous montre mon processus, mes outils et mon expertise technique avant même de commencer.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border-t">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                    Que se passe-t-il si je ne suis pas satisfait ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    Vous êtes entièrement protégé par ma <strong>garantie satisfaction 100%</strong>. Si dans les 30 premiers jours après la livraison, vous n'êtes pas satisfait pour quelque raison que ce soit, je vous rembourse 100% de votre investissement. Aucune question posée, aucun frais caché. Mon objectif est votre satisfaction totale, pas seulement la livraison d'un site.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="border-t">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                    Combien ça coûte vraiment ? Y a-t-il des frais cachés ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    <strong>Zéro frais caché.</strong> Le prix que vous voyez est le prix que vous payez. Tout est inclus : conception, design, développement, hébergement (1ère année), nom de domaine (1ère année), formation complète et support. Les seuls coûts supplémentaires possibles sont les évolutions futures que vous pourriez souhaiter, mais elles seront toujours discutées et validées avec vous avant. Transparence totale, toujours.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="border-t">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                    Pourquoi vous plutôt qu'une agence ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    Avec moi, vous travaillez directement avec le développeur, pas avec un commercial puis un chef de projet puis un développeur. Résultat : <strong>communication directe</strong>, <strong>réactivité maximale</strong>, et <strong>prix sans marge d'agence</strong>. Vous avez un seul interlocuteur qui comprend votre projet de A à Z. De plus, je me spécialise dans les TPE/PME du Val d'Oise, donc je comprends vos enjeux locaux mieux qu'une grande agence parisienne.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11" className="border-t">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                    Puis-je voir des exemples de votre travail ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    Bien sûr ! Vous êtes actuellement sur un exemple concret : ce site que vous consultez. Il a été développé avec les mêmes technologies et la même approche que je propose à mes clients. Vous pouvez également consulter la page <Link href="/portfolio" className="text-primary hover:underline font-semibold">Portfolio</Link> pour voir d'autres réalisations. Et lors de notre consultation gratuite, je peux vous montrer en détail mon processus et mes compétences techniques.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">Une autre question ? Parlons-en directement !</p>
              <Link href="/contact">
                <Button size="lg" className="h-12 rounded-full px-4 md:px-8 text-sm md:text-base shadow-md hover-lift">
                  <Phone className="mr-2 size-4" />
                  Poser ma question
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

      {/* CTA Section */}
        <section className="w-full max-w-[100vw] py-24 md:py-32 bg-gradient-to-r from-primary via-primary/90 to-primary/80 relative overflow-hidden isolate">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-transparent to-primary/30 opacity-50"></div>
          {/* Radial spotlight */}
          <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)' }}></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
              <Badge
                variant="secondary"
                className="mb-6 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm bg-white/20 text-white border-white/30 hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                <span className="mr-1">✦</span>
                Prêt à passer à l'action ?
              </Badge>
              
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Transformez votre présence en ligne dès aujourd'hui
              </h2>
              
              <p
                className="text-white/90 mb-8 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="300"
              >
                Rejoignez les professionnels du Val d'Oise qui ont déjà fait confiance à Imaginatum Studio. 
                Obtenez votre devis personnalisé gratuitement et démarrez votre projet sans engagement.
              </p>

              <div
                className="flex flex-col gap-4 sm:flex-row justify-center items-center scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="400"
              >
                <Link href="/devis">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100 h-14 rounded-full px-8 text-base md:text-lg font-bold shadow-lg hover-lift hover-scale"
                  >
                    Obtenir mon devis gratuit
                    <ArrowRight className="ml-2 size-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white/10 h-14 rounded-full px-8 text-base md:text-lg font-bold backdrop-blur-sm"
                  >
                    <Phone className="mr-2 size-5" />
                    Consultation gratuite
                  </Button>
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-white/80 scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="size-5 text-white flex-shrink-0" />
                  <span className="text-sm md:text-base">Devis gratuit sous 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="size-5 text-white flex-shrink-0" />
                  <span className="text-sm md:text-base">Sans engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="size-5 text-white flex-shrink-0" />
                  <span className="text-sm md:text-base">Garantie satisfaction 100%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

    </div>
  )
}
