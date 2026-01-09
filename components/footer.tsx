import Link from "next/link"
<<<<<<< HEAD
import { MapPin, Phone, Star, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
=======
import { Code, MapPin, Phone, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254

export function Footer() {
  return (
    <footer className="w-full max-w-[100vw] bg-background border-t border-border/40 overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
<<<<<<< HEAD
            <div className="flex items-center gap-3 mb-4">
              <div className="relative size-12 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Imaginatum Studio Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-primary via-pink-500 to-primary bg-clip-text text-transparent">
                Imaginatum Studio
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed text-base">
              Développeur web spécialisé dans la création de sites sur-mesure pour les professionnels du Val d'Oise.
              Votre succès digital commence ici.
            </p>
            <div className="flex flex-wrap items-center gap-6">
=======
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-full">
                <Code className="size-5" />
              </div>
              <span className="text-xl font-bold">DevWeb95</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Développeur web spécialisé dans la création de sites sur-mesure pour les professionnels du Val d'Oise.
              Votre succès digital commence ici.
            </p>
            <div className="flex items-center gap-4">
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Val d'Oise, Île-de-France</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
<<<<<<< HEAD
                <span className="text-sm text-muted-foreground">06 38 05 05 47</span>
=======
                <span className="text-sm text-muted-foreground">06 XX XX XX XX</span>
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Sites Vitrine
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Référencement SEO
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  À propos
=======
                <Link href="/devis" className="text-muted-foreground hover:text-primary transition-colors">
                  Devis Gratuit
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<<<<<<< HEAD
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <p className="text-sm text-muted-foreground">© 2024 Imaginatum Studio. Tous droits réservés.</p>
=======
          <div className="flex items-center gap-6">
            <p className="text-sm text-muted-foreground">© 2024 DevWeb95. Tous droits réservés.</p>
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
            <div className="flex items-center gap-4 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Mentions légales
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>

<<<<<<< HEAD
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Badge variant="secondary" className="px-3 py-1.5">
              <Sparkles className="w-3 h-3 text-primary mr-1.5" />
              <span className="text-sm">Développé avec passion</span>
            </Badge>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-xs text-muted-foreground ml-1 font-medium">4.9/5</span>
=======
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="px-3 py-1">
              <span className="text-primary mr-1">✦</span>
              Développé avec passion
            </Badge>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-xs text-muted-foreground ml-1">4.9/5</span>
>>>>>>> 964c0af6842e469a214be30f28ffe7241d52c254
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
