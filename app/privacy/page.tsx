import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <header className="mb-16 border-b border-border pb-8">
            <h1 className="font-cormorant text-5xl font-light tracking-tight text-foreground sm:text-6xl" style={{ color: '#572011' }}>
              Política de Privacidade
            </h1>
            <p className="mt-4 text-sm uppercase tracking-widest text-muted-foreground">
              Última atualização: 13 de Fevereiro de 2026
            </p>
          </header>

          <div className="space-y-12 font-inter text-base leading-relaxed text-muted-foreground">
            <section>
              <h2 className="font-cormorant text-2xl font-medium text-foreground mb-4">1. Introdução</h2>
              <p>
                A <span className="text-foreground font-medium">Ubuntu Web Lab</span> está empenhada em proteger a sua privacidade. Esta Política de Privacidade explica como recolhemos, utilizamos e salvaguardamos as suas informações quando visita o nosso website.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-medium text-foreground mb-4">2. Recolha de Informações</h2>
              <p>
                Podemos recolher informações pessoais que nos fornece voluntariamente, tais como o seu nome, endereço de e-mail e informações de contacto quando preenche o nosso formulário de contacto ou se inscreve na nossa newsletter.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-medium text-foreground mb-4">3. Uso de Informações</h2>
              <p>
                As informações que recolhemos são utilizadas para:
              </p>
              <ul className="mt-4 list-none space-y-3 pl-0">
                {[
                  "Fornecer, operar e manter o nosso website;",
                  "Melhorar, personalizar e expandir o nosso website;",
                  "Compreender e analisar como utiliza o nosso website;",
                  "Desenvolver novos produtos, serviços, características e funcionalidades;",
                  "Comunicar consigo, quer diretamente quer através de um dos nossos parceiros."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-medium text-foreground mb-4">4. Cookies</h2>
              <p>
                Utilizamos cookies para melhorar a sua experiência no nosso sítio. Pode optar por desativar os cookies através das definições do seu navegador, mas isso pode afetar a funcionalidade de certas partes do website.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-medium text-foreground mb-4">5. Segurança</h2>
              <p>
                Utilizamos medidas de segurança administrativas, técnicas e físicas para ajudar a proteger as suas informações pessoais. Embora tenhamos tomado medidas razoáveis para proteger as informações pessoais que nos fornece, esteja ciente de que nenhum sistema de segurança é perfeito ou impenetrável.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-medium text-foreground mb-4">6. Alterações a Esta Política</h2>
              <p>
                Podemos atualizar a nossa Política de Privacidade de tempos a tempos. Notificaremos o utilizador de quaisquer alterações, publicando a nova Política de Privacidade nesta página.
              </p>
            </section>

            <section className="border-t border-border pt-12">
              <h2 className="font-cormorant text-2xl font-medium text-foreground mb-4">7. Contacto</h2>
              <p>
                Se tiver alguma dúvida sobre esta Política de Privacidade, contacte-nos através do e-mail: <br />
                <a href="mailto:contato@ubuntuweblab.com" className="text-foreground font-medium underline underline-offset-4 hover:text-accent transition-colors">
                  contato@ubuntuweblab.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
