"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useEffect, useState } from "react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }

    const handleShowBanner = () => setIsVisible(true)
    window.addEventListener("show-cookie-banner", handleShowBanner)
    return () => window.removeEventListener("show-cookie-banner", handleShowBanner)
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[100] mx-auto max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="relative overflow-hidden border border-border bg-background/95 p-8 shadow-2xl backdrop-blur-md">
        {/* Subtle decorative element */}
        <div className="absolute top-0 left-0 h-1 w-full bg-accent" />

        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl text-accent">🍪</span>
            <h3 className="font-cormorant text-xl font-bold tracking-tight text-foreground">
              Aviso de Privacidade
            </h3>
          </div>

          <p className="font-inter text-sm leading-relaxed text-muted-foreground">
            Utilizamos tecnologias para melhorar a sua experiência e analisar o tráfego do site.
            Ao continuar a navegar, você concorda com o uso destas ferramentas.
            Leia nossa{" "}
            <a href="/privacy" className="font-medium text-foreground underline underline-offset-4 decoration-accent hover:text-accent transition-colors">
              Política de Privacidade
            </a>
            .
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
            <Button
              onClick={acceptCookies}
              className="w-full sm:flex-1 rounded-none bg-foreground text-background hover:bg-foreground/90 font-medium uppercase tracking-widest text-[11px] h-11"
            >
              Aceitar Cookies
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsVisible(false)}
              className="w-full sm:flex-1 rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background font-medium uppercase tracking-widest text-[11px] h-11"
            >
              Gerenciar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
