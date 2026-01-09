"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

interface ClientLogo {
  name: string
  logo: string
  alt: string
  url?: string
}

// Placeholder client logos - replace with actual client logos
// For now, using placeholder structure that will display branded placeholders
const clientLogos: ClientLogo[] = [
  {
    name: "Client 1",
    logo: "/placeholder-logo.svg",
    alt: "Logo client 1",
  },
  {
    name: "Client 2",
    logo: "/placeholder-logo.svg",
    alt: "Logo client 2",
  },
  {
    name: "Client 3",
    logo: "/placeholder-logo.svg",
    alt: "Logo client 3",
  },
  {
    name: "Client 4",
    logo: "/placeholder-logo.svg",
    alt: "Logo client 4",
  },
  {
    name: "Client 5",
    logo: "/placeholder-logo.svg",
    alt: "Logo client 5",
  },
]

export function ClientLogos() {
  const [isVisible, setIsVisible] = useState(false)

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

    const element = document.getElementById("client-logos-section")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <section
      id="client-logos-section"
      className="w-full max-w-[100vw] py-16 md:py-24 bg-gradient-to-b from-background via-muted/5 to-background relative overflow-hidden isolate"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-12 scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="100">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
            Ils nous font confiance
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">
            Des clients satisfaits dans le Val d&apos;Oise
          </h2>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {clientLogos.map((client, index) => (
            <div
              key={client.name}
              className="flex items-center justify-center w-full max-w-[160px] h-20 md:h-24 relative group"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {client.url ? (
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={160}
                    height={80}
                    className="object-contain w-full h-full max-w-[160px] max-h-[80px]"
                    onError={(e) => {
                      // Fallback to text-based logo if image doesn't exist
                      const target = e.currentTarget
                      target.style.display = "none"
                      const parent = target.parentElement
                      if (parent && !parent.querySelector(".fallback-logo")) {
                        const fallback = document.createElement("div")
                        fallback.className = "fallback-logo text-xs text-muted-foreground font-medium text-center"
                        fallback.textContent = client.name
                        parent.appendChild(fallback)
                      }
                    }}
                  />
                </a>
              ) : (
                <div className="w-full h-full flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={160}
                    height={80}
                    className="object-contain w-full h-full max-w-[160px] max-h-[80px]"
                    onError={(e) => {
                      // Fallback to text-based logo if image doesn't exist
                      const target = e.currentTarget
                      target.style.display = "none"
                      const parent = target.parentElement
                      if (parent && !parent.querySelector(".fallback-logo")) {
                        const fallback = document.createElement("div")
                        fallback.className = "fallback-logo text-xs text-muted-foreground font-medium text-center"
                        fallback.textContent = client.name
                        parent.appendChild(fallback)
                      }
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call-to-action text */}
        <div className="text-center mt-12 scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="600">
          <p className="text-sm text-muted-foreground">
            Rejoignez ces entreprises qui ont choisi Imaginatum Studio
          </p>
        </div>
      </div>
    </section>
  )
}
