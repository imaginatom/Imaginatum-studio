"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
]

export function FloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  // Init theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme === "dark") {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev
      if (next) document.documentElement.classList.add("dark")
      else document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", next ? "dark" : "light")
      return next
    })
  }

  // Scroll detection
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 mx-auto w-full max-w-[100vw] px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div
          className={`bg-background/70 backdrop-blur-md border border-border/30 rounded-2xl shadow-lg transition-all duration-300 ${
            isScrolled ? "py-2" : "py-3"
          }`}
        >
          <div className="flex items-center justify-between px-4 sm:px-6">
            {/* Logo */}
            <Link
              href="/"
              className="text-foreground font-bold text-xl flex items-center hover:opacity-90 transition-opacity"
            >
              <span
                className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
              >
                KarateDojo
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-foreground/80 hover:text-primary hover:shadow-md rounded-full px-3 py-2 font-medium transition-all duration-300 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  } hover:-translate-y-0.5`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme Switch */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="p-2 hover:bg-muted/20 dark:hover:bg-muted/40 rounded-full transition-colors"
              >
                {darkMode ? <Sun className="size-5" /> : <Moon className="size-5" />}
              </Button>

              {/* Contact */}
              <Link href="/contact">
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-4 md:px-6 py-2 text-xs md:text-sm shadow-md hover:shadow-lg transition-all"
                  size="sm"
                >
                  Contactez-moi
                </Button>
              </Link>
            </div>

            {/* Mobile toggle */}
            <div className="lg:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="p-2 hover:bg-muted/20 dark:hover:bg-muted/40 rounded-full transition-colors"
              >
                {darkMode ? <Sun className="size-5" /> : <Moon className="size-5" />}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-background/95 backdrop-blur-md border border-border/30 rounded-2xl shadow-lg overflow-hidden animate-fade-in">
              <div className="py-2">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-6 py-3 text-foreground/80 hover:text-primary hover:bg-muted/20 transition-all duration-300 text-sm font-medium ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-border/30 mt-2 pt-2 px-6">
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Contactez-moi
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
