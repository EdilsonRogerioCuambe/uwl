"use client"

import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Publicações", href: "#publicacoes" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "#contato" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Ubuntu Web Lab"
            width={44}
            height={44}
            className="h-9 w-auto"
          />
          <span className="font-pirou text-lg tracking-wider" style={{ color: '#572011' }}>
            Ubuntu Web Lab
          </span>
        </a>

        <ul className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden items-center rounded-none border border-foreground px-6 py-2.5 text-[13px] font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background lg:inline-flex"
        >
          Fale Conosco
        </a>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-6 pb-8 lg:hidden">
          <ul className="flex flex-col gap-6 pt-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="inline-flex items-center border border-foreground px-6 py-2.5 text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Fale Conosco
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
