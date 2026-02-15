import { ArrowUpRight } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Desenvolvimento Web Full-Stack",
    description:
      "Aplicações corporativas escaláveis com React, Next.js, Node.js e TypeScript. APIs RESTful, integrações LDAP e arquiteturas modernas.",
    capabilities: ["React / Next.js", "Node.js / Express", "TypeScript", "APIs REST"],
  },
  {
    number: "02",
    title: "Software Educacional",
    description:
      "Plataformas gamificadas de aprendizagem com sistemas de progressão, feedback instrucional automatizado e ambientes interativos de ensino.",
    capabilities: ["Gamificação", "EdTech", "Algoritmos", "Pesquisa Acadêmica"],
  },
  {
    number: "03",
    title: "Dashboards e Análise de Dados",
    description:
      "Painéis de monitoramento em tempo real, visualização de dados complexos e soluções para saúde pública e gestão corporativa.",
    capabilities: ["Dash (Python)", "Analytics", "Real-time", "Data Viz"],
  },
  {
    number: "04",
    title: "Plataformas Imobiliárias",
    description:
      "Integração com Google Maps, Street View, Mapbox e Matterport. Firebase, Docker, CI/CD e Prisma ORM.",
    capabilities: ["Google Maps API", "Firebase", "Docker", "Prisma ORM"],
  },
  {
    number: "05",
    title: "Cloud e DevOps",
    description:
      "Arquitetura cloud-native na AWS, deploy automatizado, escalabilidade, otimização de custos e migração para nuvem.",
    capabilities: ["AWS", "Docker", "GitHub Actions", "CI/CD"],
  },
  {
    number: "06",
    title: "Consultoria Técnica",
    description:
      "Arquitetura de software, modelagem de dados, code review, definição de boas práticas e mentoria para equipes de desenvolvimento.",
    capabilities: ["Arquitetura", "Code Review", "MySQL", "Mentoria"],
  },
]

export function Services() {
  return (
    <section id="servicos" className="px-6 py-28 lg:py-36" style={{ backgroundColor: '#572011' }}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-widest text-background/40">
              Serviços
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light leading-snug text-background sm:text-5xl text-balance">
              O que construímos
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-background/50 lg:text-right">
            Do planejamento à entrega, com a qualidade de quem une pesquisa
            acadêmica e prática de mercado.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-background/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="group flex flex-col justify-between p-8 transition-colors hover:bg-background/5 lg:p-10"
              style={{ backgroundColor: '#572011' }}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-light text-background/20">
                    {service.number}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-background/20 transition-all group-hover:text-background group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-background">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-background/60">
                  {service.description}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {service.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="rounded-none border border-background/15 px-3 py-1 text-[11px] uppercase tracking-wider text-background/50"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
