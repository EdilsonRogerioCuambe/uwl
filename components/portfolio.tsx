import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Painel de Monitoramento COVID-19",
    category: "Dashboard",
    year: "2021",
    description:
      "Dashboard web para monitoramento epidemiológico com visualização de dados em tempo real e automatização de coleta. Impacto direto em diversas regiões atendidas.",
    tech: ["Python", "Dash", "APIs Governamentais"],
    impact: "Monitoramento em tempo real para saúde pública",
  },
  {
    title: "Plataforma Gamificada de Ensino",
    category: "Software Educacional",
    year: "2023",
    description:
      "Sistema de progressão e conquistas com feedback instrucional automatizado para ensino de Algoritmos e Desenvolvimento.",
    tech: ["React", "Gamificação", "EdTech"],
    impact: "Engajamento e retenção de alunos otimizados",
  },
  {
    title: "Gestão de Arquivos Corporativa",
    category: "Sistema Corporativo",
    year: "2022",
    description:
      "Aplicação corporativa com autenticação LDAP, APIs REST em Node.js/Express, interface AdonisJS v5 e modelagem MySQL.",
    tech: ["Node.js", "AdonisJS", "MySQL", "LDAP"],
    impact: "Autenticação empresarial integrada",
  },
  {
    title: "Plataforma Imobiliária",
    category: "Full-Stack",
    year: "2023",
    description:
      "Plataforma com integração de múltiplos serviços de mapas, Firebase Realtime Database, Prisma com migrations, Docker e GitHub Actions.",
    tech: ["Next.js", "Firebase", "Docker", "Prisma"],
    impact: "Deploy automatizado com CI/CD",
  },
  {
    title: "Marina Beauty Hair",
    category: "E-commerce / Plataforma de Vendas",
    year: "2024",
    description:
      "Plataforma e-commerce robusta especializada na venda de cabelos, laces e acessórios. Sistema completo com gestão de catálogo, pagamentos integrados e experiência de compra premium.",
    tech: ["Next.js", "Tailwind CSS", "Mercado Pago", "Resend"],
    impact: "Expansão de vendas digitais e otimização da gestão de estoque",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <p
          className="text-[13px] font-semibold uppercase tracking-widest"
          style={{ color: '#572011' }}
        >
          Portfólio
        </p>
        <h2 className="mt-4 font-serif text-4xl font-light leading-snug sm:text-5xl text-balance">
          Trabalhos selecionados
        </h2>

        <div className="mt-16 flex flex-col">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group grid gap-6 py-10 lg:grid-cols-12 lg:gap-10 ${
                i !== projects.length - 1 ? "border-b border-border" : ""
              } ${i === 0 ? "pt-0" : ""}`}
            >
              {/* Left metadata */}
              <div className="flex items-start justify-between lg:col-span-3 lg:flex-col lg:justify-start">
                <div>
                  <span className="text-[12px] font-medium uppercase tracking-widest text-muted-foreground">
                    {project.year}
                  </span>
                  <p
                    className="mt-1 text-[12px] font-medium uppercase tracking-widest"
                    style={{ color: '#572011' }}
                  >
                    {project.category}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 lg:mt-6" />
              </div>

              {/* Center content */}
              <div className="lg:col-span-6">
                <h3 className="font-serif text-2xl font-medium text-foreground sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>

              {/* Right tech */}
              <div className="lg:col-span-3 lg:text-right">
                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="border border-border px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-[12px] leading-relaxed text-muted-foreground/60">
                  {project.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
