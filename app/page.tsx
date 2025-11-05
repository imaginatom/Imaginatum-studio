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
import { useEffect, useState } from "react"
import Link from "next/link"
import TestimonialCard from '@/components/TestimonialCard';
import TestimonialSection from '@/components/TestimonialCard';

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

    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
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
<section className="relative isolate overflow-hidden w-full max-w-[100vw] py-20 md:py-32 lg:py-40">
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
  
  <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-[100vw]">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div className="mx-auto max-w-2xl text-left lg:mx-0">
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
          Des Sites Web Exceptionnels pour Professionnels Exigeants
        </h1>

        <p
          className="text-muted-foreground mb-8 text-base leading-relaxed md:text-xl scroll-animate opacity-0 translate-y-4 transition-all duration-700 break-words"
          data-delay="300"
        >
          Transformez votre expertise en une présence en ligne qui inspire confiance et convertit vos visiteurs
          en clients. Solutions sur-mesure pour artisans, professions libérales et entreprises du Val d'Oise.
        </p>

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

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <div
            className="text-muted-foreground flex items-center gap-2 text-sm scroll-animate opacity-0 translate-y-4 transition-all duration-700"
            data-delay="500"
          >
            <Check className="text-primary size-5" />
            <span>Design sur-mesure adapté à votre métier</span>
          </div>
          <div
            className="text-muted-foreground flex items-center gap-2 text-sm scroll-animate opacity-0 translate-y-4 transition-all duration-700"
            data-delay="600"
          >
            <Check className="text-primary size-5" />
            <span>Référencement naturel intégré</span>
          </div>
          <div
            className="text-muted-foreground flex items-center gap-2 text-sm scroll-animate opacity-0 translate-y-4 transition-all duration-700"
            data-delay="700"
          >
            <Check className="text-primary size-5" />
            <span>Support personnalisé et formation</span>
          </div>
        </div>

        <div
          className="mt-8 flex items-center gap-6 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
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
<div className="relative hidden lg:block scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="900">
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
<section className="w-full max-w-[100vw] py-20 md:py-32 bg-muted/30 relative overflow-hidden isolate">
  <div className="absolute inset-0 -z-10 grid-pattern-bg"></div>
  <div className="container mx-auto px-4 md:px-6 relative">
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
      <Badge
        variant="secondary"
        className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate  translate-y-4 transition-all duration-700"
        data-delay="100"
      >
        <span className="mr-1 text-primary">✦</span> Avantages Concrets
      </Badge>
      <h2
        className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 scroll-animate  translate-y-4 transition-all duration-700"
        data-delay="200"
      >
        Des Résultats Mesurables pour Votre Entreprise
      </h2>
      <p
        className="max-w-[800px] text-muted-foreground md:text-lg scroll-animate  translate-y-4 transition-all duration-700"
        data-delay="300"
      >
        Solutions web sur-mesure qui génèrent plus de leads, améliorent votre visibilité et boostent vos ventes.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="scroll-animate  translate-y-4 transition-all duration-700" data-delay="400">
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

      <Card className="scroll-animate  translate-y-4 transition-all duration-700" data-delay="500">
        <CardContent className="p-6 text-center">
          <div className="bg-primary/10 text-primary mx-auto flex size-16 items-center justify-center rounded-full mb-4">
            <Zap className="size-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Déploiement Rapide</h3>
          <p className="text-muted-foreground">Solutions livrées en 2-3 semaines avec support direct</p>
        </CardContent>
      </Card>

      <Card className="scroll-animate  translate-y-4 transition-all duration-700" data-delay="600">
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

      <Card className="scroll-animate  translate-y-4 transition-all duration-700" data-delay="700">
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

{/* Section Processus - CLEAN & PROFESSIONAL */}
<section id="how-it-works" className="w-full max-w-[100vw] py-20 md:py-32 bg-background relative overflow-x-hidden">
  
  <div className="container mx-auto px-4 md:px-6 relative">
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

    <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
      {/* Step 1 */}
      <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 hover-lift group border-0 shadow-lg" data-delay="400">
        <CardContent className="p-8 text-center">
          <div className="bg-blue-50 text-blue-600 mx-auto flex size-20 items-center justify-center rounded-full mb-6 group-hover:bg-blue-100 transition-colors">
            <Phone className="size-10" />
          </div>
          <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-4 mx-auto">
            1
          </div>
          <h3 className="text-xl font-bold mb-4 text-blue-600">Consultation Stratégique</h3>
          <p className="text-muted-foreground leading-relaxed">
            Nous analysons vos objectifs et définissons une stratégie digitale sur-mesure pour votre succès.
          </p>
        </CardContent>
      </Card>

      {/* Step 2 */}
      <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 hover-lift group border-0 shadow-lg" data-delay="600">
        <CardContent className="p-8 text-center">
          <div className="bg-green-50 text-green-600 mx-auto flex size-20 items-center justify-center rounded-full mb-6 group-hover:bg-green-100 transition-colors">
            <Code className="size-10" />
          </div>
          <div className="bg-green-100 text-green-600 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-4 mx-auto">
            2
          </div>
          <h3 className="text-xl font-bold mb-4 text-green-600">Développement Sur-Mesure</h3>
          <p className="text-muted-foreground leading-relaxed">
            Création de votre site avec technologies modernes, design unique et optimisation complète.
          </p>
        </CardContent>
      </Card>

      {/* Step 3 */}
      <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 hover-lift group border-0 shadow-lg" data-delay="800">
        <CardContent className="p-8 text-center">
          <div className="bg-purple-50 text-purple-600 mx-auto flex size-20 items-center justify-center rounded-full mb-6 group-hover:bg-purple-100 transition-colors">
            <CheckCircle className="size-10" />
          </div>
          <div className="bg-purple-100 text-purple-600 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-4 mx-auto">
            3
          </div>
          <h3 className="text-xl font-bold mb-4 text-purple-600">Livraison & Formation</h3>
          <p className="text-muted-foreground leading-relaxed">
            Votre site est livré clé en main avec formation complète pour une autonomie totale.
          </p>
        </CardContent>
      </Card>
    </div>

    {/* Connection Dots for Visual Flow */}
    <div className="hidden md:flex justify-center items-center mt-8 space-x-4">
      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
      <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
      <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
    </div>
    
    {/* CTA Button */}
    <div className="text-center mt-12 scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="900">
      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 md:px-8 py-3 text-sm md:text-lg rounded-full shadow-lg hover-lift">
        <Phone className="mr-2 size-5" />
        Démarrer Mon Projet
      </Button>
    </div>
  </div>
</section>

        {/* Section Tarifs */}
        <section className="w-full max-w-[100vw] py-20 md:py-32 bg-muted/30 relative overflow-hidden isolate">
          <div className="absolute inset-0 -z-10 grid-pattern-bg"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
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

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Site Vitrine */}
              <Card
                className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 hover-lift group"
                data-delay="400"
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="bg-blue-500/10 text-blue-600 mx-auto flex size-16 items-center justify-center rounded-full mb-6 group-hover:bg-blue-500/20 transition-colors">
                    <Monitor className="size-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Site Vitrine</h3>
                  <p className="text-muted-foreground mb-6">
                    Parfait pour présenter votre activité et attirer de nouveaux clients
                  </p>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">1 200€</div>
                    <div className="text-sm text-muted-foreground">Paiement unique</div>
                  </div>
                  <ul className="text-left space-y-3 mb-8 flex-1">
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Design responsive sur-mesure</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Optimisation SEO de base</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Formulaire de contact</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Hébergement 1 an inclus</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Formation à la gestion</span>
                    </li>
                  </ul>
                  <Link href="/devis">
                    <Button className="w-full h-12 rounded-full hover-scale">Choisir cette formule</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* E-commerce - Mise en avant */}
              <Card
                className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 hover-lift group border-primary/50 relative"
                data-delay="500"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">Le plus populaire</Badge>
                </div>
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="bg-primary/10 text-primary mx-auto flex size-16 items-center justify-center rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                    <ShoppingCart className="size-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">E-commerce</h3>
                  <p className="text-muted-foreground mb-6">Vendez en ligne 24h/24 avec une boutique professionnelle</p>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">2 500€</div>
                    <div className="text-sm text-muted-foreground">Paiement unique</div>
                  </div>
                  <ul className="text-left space-y-3 mb-8 flex-1">
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Boutique en ligne complète</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Paiement sécurisé intégré</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Gestion des stocks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>SEO e-commerce avancé</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Formation complète</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Support prioritaire 3 mois</span>
                    </li>
                  </ul>
                  <Link href="/devis">
                    <Button className="w-full h-12 rounded-full hover-scale bg-primary">Choisir cette formule</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Solution Premium */}
              <Card
                className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 hover-lift group"
                data-delay="600"
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="bg-purple-500/10 text-purple-600 mx-auto flex size-16 items-center justify-center rounded-full mb-6 group-hover:bg-purple-500/20 transition-colors">
                    <Target className="size-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Solution Premium</h3>
                  <p className="text-muted-foreground mb-6">Projet sur-mesure avec fonctionnalités avancées</p>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">Sur devis</div>
                    <div className="text-sm text-muted-foreground">À partir de 4 000€</div>
                  </div>
                  <ul className="text-left space-y-3 mb-8 flex-1">
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Développement sur-mesure</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Intégrations complexes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Application web avancée</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>SEO technique poussé</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Support dédié 6 mois</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600 size-5 flex-shrink-0" />
                      <span>Maintenance incluse</span>
                    </li>
                  </ul>
                  <Link href="/devis">
                    <Button
                      variant="outline"
                      className="w-full h-12 rounded-full hover-scale border-primary/50 hover:border-primary bg-transparent"
                    >
                      Discutons de votre projet
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
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

        {/* Section Services */}
        <section id="features" className="relative isolate w-full max-w-[100vw] py-20 md:py-32 overflow-x-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(from_var(--primary)_r_g_b_/_0.03),transparent_70%)]"></div>
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <Badge
                variant="secondary"
                className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                <span className="text-foreground mr-1">✦</span> Nos Solutions
              </Badge>
              <h2
                className="from-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Des Armes Secrètes Pour Vous Faire Décoller
              </h2>
              <p
                className="text-muted-foreground max-w-[800px] md:text-lg scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="300"
              >
                Ne laissez plus jamais un client potentiel passer à côté
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card
                className="rounded-xl border text-card-foreground shadow border-border/40 from-card to-card/50 hover:border-primary/20 group h-full overflow-hidden bg-gradient-to-b backdrop-blur transition-all hover:shadow-lg hover-lift scroll-animate opacity-0 translate-y-4  duration-700"
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
                className="rounded-xl border text-card-foreground shadow border-border/40 from-card to-card/50 hover:border-primary/20 group h-full overflow-hidden bg-gradient-to-b backdrop-blur transition-all hover:shadow-lg hover-lift scroll-animate opacity-0 translate-y-4  duration-700"
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
                className="rounded-xl border text-card-foreground shadow border-border/40 from-card to-card/50 hover:border-primary/20 group h-full overflow-hidden bg-gradient-to-b backdrop-blur  hover:shadow-lg hover-lift scroll-animate opacity-0 translate-y-4 transition-all duration-700"
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
                className="rounded-xl border text-card-foreground shadow border-border/40 from-card to-card/50 hover:border-primary/20 group h-full overflow-hidden bg-gradient-to-b backdrop-blur  hover:shadow-lg hover-lift scroll-animate opacity-0 translate-y-4 transition-all duration-700"
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
                className="rounded-xl border text-card-foreground shadow border-border/40 from-card to-card/50 hover:border-primary/20 group h-full overflow-hidden bg-gradient-to-b backdrop-blur  hover:shadow-lg hover-lift scroll-animate opacity-0 translate-y-4 transition-all duration-700"
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
              <Card
                className="rounded-xl border text-card-foreground shadow border-border/40 from-card to-card/50 hover:border-primary/20 group h-full overflow-hidden bg-gradient-to-b backdrop-blur hover:shadow-lg hover-lift scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="400"
              >
                <CardContent className="flex h-full flex-col p-6">
                  <div className="bg-primary/10 text-primary group-hover:bg-primary/20 mb-4 flex size-12 items-center justify-center rounded-full transition-colors duration-300 hover-scale">
                    <Monitor className="size-5" />
                  </div>
                  <h3 className="mb-2 flex items-center gap-2 text-xl font-bold">Design Mobile-First</h3>
                  <p className="text-muted-foreground text-pretty mb-6 ">
                    "Votre site est-il prêt pour le tsunami mobile?" +70% des Français surfent principalement sur
                    mobile.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

{/* Testimonials Section */}
<div>
      {/* Other components */}
      <TestimonialSection />
    </div>
      {/* FAQ Section */}
        <section className="w-full max-w-[100vw] py-16 md:py-24 bg-background overflow-x-hidden">
          <div className="container mx-auto px-4 md:px-6">
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
{/* Section CTA Finale */}
<section className="relative w-full max-w-[100vw] py-20 overflow-hidden bg-primary">
  {/* Animated Hexagon Background */}
  <HexagonBackground
  className="absolute inset-0 z-0"
  hexagonSize={70}
  hexagonMargin={4}
  hexagonProps={{
    style: {
      backgroundColor: '#ff6347', // Tomato color
      opacity: 0.8,
    },
  }}
/>



  {/* CTA Content */}
  <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
    <div className="max-w-3xl mx-auto">
      <h2
        className="text-2xl md:text-3xl font-bold text-stone-900 mb-6 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
        data-delay="100"
      >
        ⚠️ Vous Lisez Encore? ⚠️
      </h2>

      <p
        className="text-stone-900 mb-8 text-lg scroll-animate opacity-0 translate-y-4 transition-all duration-700"
        data-delay="200"
      >
        Pendant ce temps... Vos concurrents optimisent leur site • Google référence leurs pages • Leurs clients
        leur envoient des emails
      </p>

      <p
        className="text-stone-900 font-semibold mb-10 text-xl scroll-animate opacity-0 translate-y-4 transition-all duration-700"
        data-delay="300"
      >
        Votre Projet Mérite D'exister En Ligne. Aujourd'hui.
      </p>

      <Link href="/devis">
        <Button
          size="lg"
          className="bg-stone-900 text-secondary hover:bg-gray-100 h-12 md:h-14 rounded-full px-4 md:px-10 text-sm md:text-lg font-bold shadow-lg scroll-animate opacity-0 translate-y-4 transition-all duration-700 whitespace-normal text-center"
          data-delay="400"
        >
          <span className="block md:inline">🚀</span> <span className="hidden sm:inline">JE VEUX MON </span>DEVIS GRATUIT <span className="block md:inline">🚀</span>
        </Button>
      </Link>

      <p
        className="text-white/80 mt-4 text-sm scroll-animate opacity-0 translate-y-4 transition-all duration-700"
        data-delay="500"
      >
        (15 minutes au téléphone = une stratégie claire pour vous)
      </p>
    </div>
  </div>
</section>
      </main>

    </div>
  )
}
