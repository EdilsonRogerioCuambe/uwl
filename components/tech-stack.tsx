const categories = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "AdonisJS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Python", "Dash", "APIs REST"],
  },
  {
    title: "Banco de Dados",
    items: ["MySQL", "Firebase", "Prisma ORM", "PostgreSQL"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (Lambda, S3, EC2)", "Docker", "CI/CD", "Vercel", "DigitalOcean"],
  },
  {
    title: "Pagamentos & Comunicação",
    items: ["Mercado Pago", "Stripe", "Resend", "Twilio", "WhatsApp API"],
  },
]

export function TechStack() {
  return (
    <section className="border-y border-border bg-secondary/50 px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p
              className="text-[13px] font-semibold uppercase tracking-widest"
              style={{ color: '#572011' }}
            >
              Tecnologias
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light leading-snug sm:text-5xl text-balance">
              Tecnologias que utilizamos
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3
                className="text-[12px] font-bold uppercase tracking-widest"
                style={{ color: '#572011' }}
              >
                {cat.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
