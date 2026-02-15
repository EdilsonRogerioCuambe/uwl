"use client"

import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20">
      {/* Subtle decorative line */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-border/50" />
      <div className="absolute top-3/4 left-0 w-full h-px bg-border/50" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Logo mark */}
        <div className="mb-10">
          <Image
            src="/images/logo.png"
            alt="UBW"
            width={80}
            height={80}
            className="h-16 w-auto"
          />
        </div>

        {/* Headline using Pirou for the brand feel */}
        <h1 className="font-pirou text-5xl leading-tight sm:text-6xl md:text-7xl lg:text-8xl text-balance" style={{ color: '#572011' }}>
          Transformamos complexidade em excelência digital
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Construímos softwares de alta performance, e-commerces escaláveis e sistemas sob medida que impulsionam o crescimento do seu negócio.
        </p>

        {/* Company Focus tags */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] uppercase tracking-widest text-muted-foreground">
          <span>Consultoria Especializada</span>
          <span className="hidden sm:inline" aria-hidden="true">/</span>
          <span>Desenvolvimento Full-Stack</span>
          <span className="hidden sm:inline" aria-hidden="true">/</span>
          <span>Soluções Customizadas</span>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#contato"
            className="inline-flex items-center px-10 py-4 text-[13px] font-semibold uppercase tracking-widest text-background transition-colors"
            style={{ backgroundColor: '#572011' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#6B2A16')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#572011')}
          >
            Iniciar Projeto
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center px-10 py-4 text-[13px] font-semibold uppercase tracking-widest text-foreground border border-foreground/20 transition-colors hover:border-foreground"
          >
            Ver Trabalhos
          </a>
        </div>

        {/* Stats */}
        <div className="mt-24 grid w-full max-w-lg grid-cols-3 border-t border-border pt-10">
          {[
            { value: "5+", label: "Anos" },
            { value: "15+", label: "Projetos" },
            { value: "2", label: "Publicacoes" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl font-light sm:text-4xl" style={{ color: '#572011' }}>
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[11px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  )
}
