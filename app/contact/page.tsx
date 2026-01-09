"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Linkedin, Facebook, Instagram, Calendar, ArrowRight, MailCheck } from "lucide-react"
import Link from "next/link"
  import {
  Send,
  MessageCircle,
  CheckCircle
} from "lucide-react"
import { useEffect, useState } from "react"
import { useForm, ValidationError } from "@formspree/react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Formspree hook — replace "mnnogyok" with your form ID
  const [state, handleSubmit] = useForm("mnnogyok")

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
        <section className="relative isolate container mx-auto w-full max-w-[100vw] py-24 md:py-32 lg:py-40">
          <div className="relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <Badge
                variant="secondary"
                className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                <span className="text-foreground mr-1">✦</span>
                Contactez-moi
              </Badge>

              <h1
                className="hero-heading mb-6 text-4xl md:text-5xl scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Discutons de votre projet
              </h1>

              <p
                className="text-muted-foreground mb-8 text-lg leading-relaxed md:text-xl scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="300"
              >
                Prenons 15 minutes au téléphone pour échanger sur votre projet et voir comment je peux vous aider à développer votre présence en ligne.
              </p>
              
              {/* Trust Signals */}
              <div className="flex flex-wrap items-center justify-center gap-4 scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="350">
                <Badge variant="secondary" className="px-4 py-1.5 rounded-full border-primary/20 bg-primary/5">
                  <Clock className="mr-2 size-4 text-primary" />
                  Réponse sous 2h en moyenne
                </Badge>
                <Badge variant="secondary" className="px-4 py-1.5 rounded-full border-primary/20 bg-primary/5">
                  <Calendar className="mr-2 size-4 text-primary" />
                  Consultation gratuite 15-30min
                </Badge>
                <Badge variant="secondary" className="px-4 py-1.5 rounded-full border-primary/20 bg-primary/5">
                  <CheckCircle className="mr-2 size-4 text-primary" />
                  Devis personnalisé sous 48h
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="w-full max-w-[100vw] py-24 md:py-32 bg-muted/30 relative overflow-hidden isolate">
          <div className="absolute inset-0 -z-10 grid-pattern-bg"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Quick Contact Options - NEW */}
              <div className="scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="400">
                <Card className="border-border/40 hover-lift h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Calendar className="mr-2 size-5 text-primary" />
                      Réserver un appel
                    </CardTitle>
                    <CardDescription>
                      Le moyen le plus rapide : choisissez votre créneau directement
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Link
                      href="https://calendly.com/sidahmedrose/30min"
                      target="_blank"
                      className="block"
                    >
                      <Button className="w-full h-12 rounded-full hover-scale">
                        <Calendar className="mr-2 size-4" />
                        Choisir un créneau
                        <ArrowRight className="ml-2 size-4" />
                      </Button>
                    </Link>
                    <div className="pt-4 border-t border-border/40">
                      <p className="text-sm text-muted-foreground mb-3">Ou contactez-moi directement :</p>
                      <Link href="tel:+33638050547" className="block mb-2">
                        <Button variant="outline" className="w-full justify-start">
                          <Phone className="mr-2 size-4" />
                          06 38 05 05 47
                        </Button>
                      </Link>
                      <Link href="mailto:contact@imaginatum.fr" className="block">
                        <Button variant="outline" className="w-full justify-start">
                          <Mail className="mr-2 size-4" />
                          contact@imaginatum.fr
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form Section - Updated */}
<div className="lg:col-span-2 scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="500">
  <Card className="border-border/40 hover-lift" id="contact-form">
    <CardHeader>
      <CardTitle className="text-2xl flex items-center">
        <MessageCircle className="mr-2 size-5 text-primary" />
        Envoyez-moi un message détaillé
      </CardTitle>
      <CardDescription>
        Remplissez ce formulaire et je vous réponds sous 2h (jours ouvrés)
      </CardDescription>
    </CardHeader>
    <CardContent>
      {state.succeeded ? (
        <div className="text-center py-8">
          <CheckCircle className="mx-auto size-16 text-green-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Message envoyé !</h3>
          <p className="text-muted-foreground">
            Merci pour votre message. Je vous contacte très rapidement.
          </p>
          <Button 
            onClick={() => setFormData({
              name: "",
              email: "",
              phone: "",
              service: "",
              message: ""
            })}
            className="mt-4"
            variant="outline"
          >
            Envoyer un nouveau message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nom complet *
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Votre nom"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={state.submitting}
              />
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
                className="text-red-500 text-xs"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="votre@email.com"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={state.submitting}
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="text-red-500 text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Téléphone
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="06 12 34 56 78"
                value={formData.phone}
                onChange={handleChange}
                disabled={state.submitting}
              />
              <ValidationError 
                prefix="Phone" 
                field="phone"
                errors={state.errors}
                className="text-red-500 text-xs"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium">
                Type de demande *
              </label>
              <select
                id="service"
                name="service"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={formData.service}
                onChange={handleChange}
                disabled={state.submitting}
                required
              >
                <option value="">Sélectionnez une option</option>
                <option value="question-rapide">Question rapide (5min)</option>
                <option value="consultation">Consultation gratuite (15-30min)</option>
                <option value="devis-site-vitrine">Devis Site Vitrine</option>
                <option value="devis-blog-portfolio">Devis Blog/Portfolio</option>
                <option value="devis-ecommerce">Devis E-commerce (bientôt)</option>
                <option value="autre">Autre projet</option>
              </select>
              <ValidationError 
                prefix="Service" 
                field="service"
                errors={state.errors}
                className="text-red-500 text-xs"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Votre message *
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Décrivez votre projet, vos objectifs, votre public cible..."
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              disabled={state.submitting}
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              className="text-red-500 text-xs"
            />
          </div>

          <Button 
            type="submit" 
            disabled={state.submitting}
            className="w-full h-12 rounded-full hover-scale"
          >
            {state.submitting ? (
              <>
                <div className="mr-2 size-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                Envoi en cours...
              </>
            ) : (
              <>
                <Send className="mr-2 size-4" />
                Envoyer le message
              </>
            )}
          </Button>
        </form>
      )}
    </CardContent>
  </Card>
</div>

            </div>
          </div>
        </section>

        {/* What Happens Next Section - NEW */}
        <section className="w-full max-w-[100vw] py-24 md:py-32 bg-gradient-to-br from-background via-muted/5 to-background relative overflow-x-hidden isolate noise-overlay">
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
              <div className="text-center mb-12">
                <Badge
                  variant="secondary"
                  className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow"
                >
                  <span className="mr-1 text-primary">✦</span> Processus simple et transparent
                </Badge>
                <h2 className="section-heading mb-4">
                  Que se passe-t-il après votre message ?
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Un processus clair pour vous accompagner de la première prise de contact jusqu'à la mise en ligne de votre site.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <Card className="text-center border-border/40 hover-lift">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 text-primary size-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">1</span>
                    </div>
                    <h3 className="font-semibold mb-2">Réponse rapide</h3>
                    <p className="text-sm text-muted-foreground">
                      Je vous réponds sous 2h (jours ouvrés) pour confirmer la réception de votre message.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-border/40 hover-lift">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 text-primary size-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">2</span>
                    </div>
                    <h3 className="font-semibold mb-2">Échange personnalisé</h3>
                    <p className="text-sm text-muted-foreground">
                      Nous planifions un appel (15-30min) pour comprendre vos besoins et objectifs en détail.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-border/40 hover-lift">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 text-primary size-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">3</span>
                    </div>
                    <h3 className="font-semibold mb-2">Devis détaillé</h3>
                    <p className="text-sm text-muted-foreground">
                      Sous 48h, vous recevez un devis transparent avec planning et détails de la solution proposée.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-border/40 hover-lift">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 text-primary size-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">4</span>
                    </div>
                    <h3 className="font-semibold mb-2">Démarrage projet</h3>
                    <p className="text-sm text-muted-foreground">
                      Après validation, je démarre votre projet sous 1-2 semaines avec un planning clair.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full max-w-[100vw] py-24 md:py-32 bg-muted/30 relative overflow-x-hidden">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 max-w-7xl mx-auto">
              <Badge
                variant="secondary"
                className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                <span className="mr-1 text-primary">✦</span> Questions Fréquentes
              </Badge>
              <h2
                className="section-heading scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Questions sur le processus
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <MailCheck className="mr-2 size-5 text-primary" />
                    Quel est votre délai de réponse ?
                  </h3>
                  <p className="text-muted-foreground">
                    Je réponds à tous les emails sous 2h en moyenne (jours ouvrés, 9h-18h). Pour les appels, je vous propose généralement un créneau dans les 24-48h via Calendly.
                  </p>
                </CardContent>
              </Card>

              <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="400">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Calendar className="mr-2 size-5 text-primary" />
                    Proposez-vous une première consultation gratuite ?
                  </h3>
                  <p className="text-muted-foreground">
                    Absolument ! Nous pouvons planifier un appel de 15 à 30 minutes pour discuter de votre projet sans engagement.
                  </p>
                </CardContent>
              </Card>

              <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="500">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <MapPin className="mr-2 size-5 text-primary" />
                    Travaillez-vous à distance ou en présentiel ?
                  </h3>
                  <p className="text-muted-foreground">
                    Les deux ! Je peux vous rencontrer dans le Val d'Oise ou travailler à distance avec des outils de collaboration modernes.
                  </p>
                </CardContent>
              </Card>

              <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="600">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Clock className="mr-2 size-5 text-primary" />
                    Quel est le délai pour commencer un projet ?
                  </h3>
                  <p className="text-muted-foreground">
                    Généralement 1 à 2 semaines après validation du devis, selon ma disponibilité et la complexité de votre projet.
                  </p>
                </CardContent>
              </Card>
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
                Prêt à donner vie à votre projet ?
              </h2>
              <p
                className="text-white/90 mb-8 text-lg scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Contactez-moi aujourd'hui et obtenez un devis personnalisé pour votre site web
              </p>
              <div
                className="flex flex-col gap-4 sm:flex-row justify-center items-stretch sm:items-center scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="300"
              >
                <Link href="tel:+33612345678" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 h-12 rounded-full px-4 md:px-8 text-sm md:text-base font-bold shadow-lg"
                  >
                    <Phone className="mr-2 size-4" />
                    Appeler maintenant
                  </Button>
                </Link>
                <Link href="#contact-form" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-white text-white hover:bg-white/10 h-12 rounded-full px-4 md:px-8 text-sm md:text-base font-bold"
                  >
                    <Mail className="mr-2 size-4" />
                    Envoyer un message
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
