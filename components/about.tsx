import { ArrowRight } from "lucide-react"

const timeline = [
  {
    period: "Missão",
    title: "Pesquisa & Inovação",
    org: "Excelência Aplicada",
    detail:
      "Trazemos a vanguarda tecnológica para o mundo real. Cada projeto é desenvolvido com foco na qualidade e nas melhores práticas do mercado.",
  },
  {
    period: "Valores",
    title: "Excelência Técnica",
    org: "Qualidade de Entrega",
    detail:
      "Comprometimento com performance, segurança e manutenibilidade. Acreditamos que software bem feito é um ativo estratégico para a empresa.",
  },
  {
    period: "Visão",
    title: "Impacto Digital",
    org: "Soluções de Valor",
    detail:
      "Transformamos necessidades de negócio em ferramentas digitais potentes que melhoram a eficiência e escalam operações.",
  },
]

export function About() {
  return (
    <section id="sobre" className="px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-20 lg:grid-cols-12">
          {/* Left — intro */}
          <div className="lg:col-span-5">
            <p
              className="text-[13px] font-semibold uppercase tracking-widest"
              style={{ color: '#572011' }}
            >
              Sobre
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light leading-snug sm:text-5xl text-balance">
              Excelência técnica.{" "}
              <span style={{ color: '#572011' }}>Resultados reais.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A Ubuntu Web Lab é uma consultoria de engenharia de software focada em
              resolver problemas complexos com clareza. Construímos aplicações robustas
              unindo a excelência técnica com a praticidade que o mercado exige.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Cada projeto é tratado com compromisso absoluto com a qualidade, garantindo
              arquiteturas escaláveis e interfaces que geram valor real para o seu negócio.
            </p>
            <a
              href="#contato"
              className="mt-8 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-widest transition-colors hover:text-foreground"
              style={{ color: '#572011' }}
            >
              Fale Conosco
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Right — timeline */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="flex flex-col">
              {timeline.map((item, i) => (
                <div
                  key={item.title}
                  className={`flex flex-col gap-1 py-8 ${
                    i !== timeline.length - 1 ? "border-b border-border" : ""
                  } ${i === 0 ? "pt-0" : ""}`}
                >
                  <span className="text-[12px] font-medium uppercase tracking-widest text-muted-foreground">
                    {item.period}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground/80">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
