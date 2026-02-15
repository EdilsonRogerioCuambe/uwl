import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <header className="mb-16 border-b border-border pb-8">
            <h1 className="font-cormorant text-5xl font-light tracking-tight text-foreground sm:text-6xl" style={{ color: '#572011' }}>
              Termos de Uso
            </h1>
            <p className="mt-4 text-sm uppercase tracking-widest text-muted-foreground">
              Última atualização: 13 de Fevereiro de 2026
            </p>
          </header>

          <div className="space-y-12 font-inter text-base leading-relaxed text-muted-foreground">
            <section>
              <h2 className="font-cormorant text-2xl font-medium text-foreground mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao aceder e utilizar este website (Ubuntu Web Lab), o utilizador concorda em cumprir e estar vinculado aos seguintes termos e condições de utilização. Se não concordar com qualquer parte destes termos, não deverá utilizar o nosso website.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-medium text-foreground mb-4">2. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo deste website, incluindo textos, gráficos, logótipos e imagens, é propriedade da <span className="text-foreground font-medium">Ubuntu Web Lab</span> ou dos seus licenciadores e está protegido por leis de direitos de autor e outras leis de propriedade intelectual.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-medium text-foreground mb-4">3. Uso Permitido</h2>
              <p>
                O utilizador tem permissão para visualizar e descarregar temporariamente uma cópia dos materiais no website apenas para visualização transitória pessoal e não comercial.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-medium text-foreground mb-4">4. Limitação de Responsabilidade</h2>
              <p>
                A Ubuntu Web Lab não será responsável por quaisquer danos resultantes do uso ou da incapacidade de usar os materiais no website, mesmo que a Ubuntu Web Lab tenha sido notificada da possibilidade de tais danos.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-medium text-foreground mb-4">5. Links de Terceiros</h2>
              <p>
                O nosso website pode conter links para websites de terceiros. Estes links são fornecidos para sua conveniência e não implicam o endosso do conteúdo desses websites pela Ubuntu Web Lab. Não temos controlo sobre o conteúdo desses sites e não assumimos qualquer responsabilidade por eles.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-medium text-foreground mb-4">6. Modificações dos Termos</h2>
              <p>
                A Ubuntu Web Lab reserva-se o direito de rever estes termos de utilização a qualquer momento sem aviso prévio. Ao utilizar este website, o utilizador concorda em estar vinculado à versão atual destes Termos de Uso.
              </p>
            </section>

            <section className="border-t border-border pt-12">
              <h2 className="font-cormorant text-2xl font-medium text-foreground mb-4">7. Lei Aplicável</h2>
              <p>
                Qualquer reclamação relativa ao website da Ubuntu Web Lab será regida pelas leis do Brasil, sem consideração ao seu conflito de disposições legais.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
