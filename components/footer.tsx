import { Github, Linkedin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        {/* Brand */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Ubuntu Web Lab"
              width={36}
              height={36}
              className="h-8 w-auto"
            />
            <span className="font-pirou text-base tracking-wider" style={{ color: '#572011' }}>
              Ubuntu Web Lab
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Desenvolvimento de software com base acadêmica e experiência
            prática. São Paulo, SP.
          </p>
        </div>

        {/* Navigation columns */}
        <div className="flex flex-wrap gap-16">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-foreground">
              Navegação
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {[
                { label: "Sobre", href: "#sobre" },
                { label: "Serviços", href: "#servicos" },
                { label: "Portfólio", href: "#portfolio" },
                { label: "Publicações", href: "#publicacoes" },
                { label: "Blog", href: "/blog" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-foreground">
              Conectar
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ubuntuweblab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-foreground">
              Legal
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Privacidade
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Termos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
        <p className="text-[12px] text-muted-foreground">
          {"Ubuntu Web Lab \u00A9 2024 - 2026"}
        </p>
        <p className="text-[12px] text-muted-foreground">
          Desenvolvido com Next.js
        </p>
      </div>
    </footer>
  )
}
