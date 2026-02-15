"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Linkedin, Mail, MapPin } from "lucide-react"
import { useState } from "react"

const serviceOptions = [
  "Desenvolvimento Web Full-Stack",
  "Software Educacional",
  "Dashboard e Análise de Dados",
  "Plataforma Imobiliária",
  "Cloud e DevOps",
  "Consultoria Técnica",
  "Outro",
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contato" className="px-6 py-28 lg:py-36" style={{ backgroundColor: '#572011' }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-5">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-background/40">
              Contato
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light leading-snug text-background sm:text-5xl text-balance">
              Vamos construir algo juntos
            </h2>
            <p className="mt-6 text-base leading-relaxed text-background/60">
              Descreva seu projeto e respondo em até 24 horas com uma proposta
              detalhada.
            </p>

            <div className="mt-12 flex flex-col gap-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "contato@ubuntuweblab.com",
                },
                {
                  icon: MapPin,
                  label: "Localização",
                  value: "São Paulo, SP — Brasil",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "Ubuntu Web Lab",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-background/15">
                    <item.icon className="h-4 w-4 text-background/60" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-widest text-background/40">
                      {item.label}
                    </p>
                    <p className="text-sm text-background/80">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-6 lg:col-start-7">
            {submitted ? (
              <div className="flex flex-col items-center justify-center border border-background/15 px-8 py-20 text-center">
                <CheckCircle2 className="h-12 w-12 text-background/60" />
                <h3 className="mt-6 font-serif text-2xl font-light text-background">
                  Mensagem enviada
                </h3>
                <p className="mt-3 text-sm text-background/60">
                  Obrigado pelo interesse. Entraremos em contato em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-[11px] font-medium uppercase tracking-widest text-background/50">
                      Nome / Empresa
                    </Label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      required
                      className="rounded-none border-background/20 bg-transparent text-background placeholder:text-background/30 focus-visible:ring-background/40"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-[11px] font-medium uppercase tracking-widest text-background/50">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      className="rounded-none border-background/20 bg-transparent text-background placeholder:text-background/30 focus-visible:ring-background/40"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone" className="text-[11px] font-medium uppercase tracking-widest text-background/50">
                      WhatsApp
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+55 (XX) XXXXX-XXXX"
                      className="rounded-none border-background/20 bg-transparent text-background placeholder:text-background/30 focus-visible:ring-background/40"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="service" className="text-[11px] font-medium uppercase tracking-widest text-background/50">
                      Tipo de Serviço
                    </Label>
                    <Select>
                      <SelectTrigger
                        id="service"
                        className="rounded-none border-background/20 bg-transparent text-background/80 focus:ring-background/40 [&>svg]:text-background/40"
                      >
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="description" className="text-[11px] font-medium uppercase tracking-widest text-background/50">
                    Sobre o Projeto
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Descreva brevemente o que você precisa..."
                    rows={5}
                    className="rounded-none border-background/20 bg-transparent text-background placeholder:text-background/30 focus-visible:ring-background/40"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 self-start border border-background px-10 py-3.5 text-[13px] font-semibold uppercase tracking-widest text-background transition-colors hover:bg-background hover:text-foreground"
                >
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
