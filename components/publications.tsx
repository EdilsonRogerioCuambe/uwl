
const pillars = [
  {
    title: "Gamificação & Engajamento",
    description:
      "Desenvolvemos sistemas que utilizam mecânicas de jogos para aumentar o engajamento e a retenção de usuários em plataformas diversas.",
    type: "Arquitetura Proativa",
  },
  {
    title: "Visualização de Dados Complexos",
    description:
      "Transformamos grandes volumes de dados em dashboards intuitivos e acionáveis para tomadas de decisão estratégica.",
    type: "Análise Avançada",
  },
]

const services = [
  "Desenvolvimento Web Full-Stack",
  "Software Educacional e Gamificado",
  "Dashboards Corporativos",
  "Consultoria em Arquitetura de Software",
  "Soluções Cloud e DevOps",
]

export function Publications() {
  return (
    <section id="publicacoes" className="px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-20 lg:grid-cols-2">
          {/* Pillars */}
          <div>
            <p
              className="text-[13px] font-semibold uppercase tracking-widest"
              style={{ color: '#572011' }}
            >
              Pilares de Inovação
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light leading-snug sm:text-5xl text-balance">
              Como Pensamos
            </h2>

            <div className="mt-10 flex flex-col gap-8">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="border-l-2 pl-6" style={{ borderColor: '#572011' }}>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] uppercase tracking-wider text-muted-foreground/60">
                      {pillar.type}
                    </span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Services */}
          <div>
            <p
              className="text-[13px] font-semibold uppercase tracking-widest"
              style={{ color: '#572011' }}
            >
              Nossa Expertise
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light leading-snug sm:text-5xl text-balance">
              Áreas de Atuação
            </h2>

            <ul className="mt-10 flex flex-col gap-5">
              {services.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 text-base text-muted-foreground"
                >
                  <span
                    className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: '#572011' }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            {/* Credibility block */}
            <div className="mt-12 border border-border bg-card p-8">
              <p className="font-serif text-xl font-light italic text-foreground leading-relaxed">
                {'"A qualidade de um software reflete a disciplina e a excelência de quem o constrói."'}
              </p>
              <p className="mt-4 text-[12px] font-medium uppercase tracking-widest text-muted-foreground">
                Ubuntu Web Lab
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
