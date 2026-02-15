export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string[]
  date: string
  readTime: string
  category: string
  image: string
  featured: boolean
}

export const blogPosts: BlogPost[] = [
  {
    slug: "gamificacao-ensino-algoritmos",
    title: "Gamificação no Ensino de Algoritmos: Resultados de Implementação em Escala",
    excerpt:
      "Como a aplicação de mecânicas de jogo transformou o engajamento e a retenção de alunos em disciplinas de Estrutura de Dados — dados concretos de nossas implementações em ambientes educacionais.",
    content: [
      "A gamificação no ensino de computação não é apenas uma tendência pedagógica — é uma resposta baseada em evidências para um dos maiores desafios da área: a alta taxa de evasão em disciplinas introdutórias de programação. Ao longo de nossa jornada de desenvolvimento, nossa equipe desenvolveu e testou uma plataforma que integra mecânicas de jogo ao currículo de Algoritmos e Estrutura de Dados.",
      "O problema que motivou o projeto era claro: turmas com mais de 40% de desistência antes da metade do semestre. Os alunos relatavam frustração com a curva de aprendizado, falta de feedback imediato e a distância entre exercícios práticos e aplicações reais. A gamificação ofereceu um framework para atacar cada um desses pontos.",
      "A plataforma utiliza um sistema de progressão por níveis, onde cada tópico do currículo corresponde a uma 'fase'. Dentro de cada fase, os alunos resolvem desafios de codificação com dificuldade crescente, recebem feedback instantâneo sobre corretude e eficiência, e acumulam pontos de experiência que desbloqueiam conteúdos avançados.",
      "Os resultados foram significativos. Nas turmas que utilizaram a plataforma, a taxa de desistência caiu drasticamente. O tempo médio gasto pelos alunos com exercícios fora da sala de aula aumentou em 65%. E, talvez mais importante, a grande maioria dos alunos reportou maior confiança ao enfrentar problemas novos de programação.",
      "Tecnicamente, a plataforma foi construída com React no frontend, Node.js no backend, e PostgreSQL para persistência. O sistema de avaliação automática executa os códigos dos alunos em containers Docker isolados, garantindo segurança e escalabilidade. A arquitetura foi projetada para ser reutilizável por outras instituições.",
      "O próximo passo da nossa inovação contínua é integrar modelos de Inteligência Artificial para personalizar os caminhos de aprendizado. A ideia é que o sistema identifique automaticamente os pontos fracos de cada aluno e sugira exercícios específicos — transformando uma ferramenta de gamificação em um tutor inteligente adaptativo.",
    ],
    date: "2025-12-15",
    readTime: "8 min",
    category: "Educacao",
    image: "/images/blog/gamificacao.jpg",
    featured: true,
  },
  {
    slug: "construindo-dashboards-tempo-real",
    title: "Como Construir Dashboards em Tempo Real que Escalam",
    excerpt:
      "Lições aprendidas ao desenvolver o dashboard COVID-19 que processava milhares de atualizações diárias — arquitetura, escolhas técnicas e armadilhas comuns.",
    content: [
      "Dashboards em tempo real parecem simples na teoria: pegue dados, visualize-os, atualize periodicamente. Na prática, cada uma dessas etapas esconde desafios de engenharia que podem comprometer a experiência do usuário e a confiabilidade do sistema. Compartilhamos aqui as lições aprendidas ao construir dashboards de alta performance.",
      "Uma decisão crítica é a arquitetura de ingestão de dados. Em projetos de monitoramento epidemiológico, por exemplo, os dados governamentais são atualizados em intervalos irregulares. Construímos pipelines de ETL resilientes que validam, normalizam e armazenam dados com fallbacks inteligentes.",
      "Para a camada de visualização, optamos frequentemente pela stack Python/Dash para prototipagem rápida e produção robusta. Gráficos renderizados server-side reduzem a carga no navegador e melhoram o desempenho em dispositivos móveis.",
      "O principal desafio técnico é o gerenciamento de estado. Com múltiplos filtros, cada combinação gera consultas complexas. Implementamos sistemas de caching em camadas: Redis para consultas frequentes e pré-computação para agregações pesadas.",
      "Evitamos a tentação de WebSockets desnecessários. Para dados que atualizam periodicamente, polling com intervalos inteligentes é mais simples, confiável e escalável. Reservamos tempo real crítico para cenários onde a latência sub-segundo é genuinamente necessária.",
      "O resultado são dashboards que atendem milhares de usuários simultâneos com tempo de carregamento inferior a 2 segundos. A experiência reafirma um princípio que guia a Ubuntu Web Lab: a melhor arquitetura é aquela que resolve o problema real.",
    ],
    date: "2025-11-20",
    readTime: "7 min",
    category: "Engenharia",
    image: "/images/blog/dashboard.jpg",
    featured: false,
  },
  {
    slug: "nextjs-aplicacoes-corporativas",
    title: "Next.js para Aplicações Corporativas: Por que e Como",
    excerpt:
      "Um guia prático sobre como estruturar aplicações Next.js para ambientes corporativos — autenticação, permissões, integração com APIs legadas e deploy seguro.",
    content: [
      "O ecossistema React é vasto, mas quando se trata de aplicações corporativas — onde segurança, performance e manutenibilidade são inegociáveis — o Next.js se destaca por oferecer uma estrutura opinada que reduz decisões de arquitetura e acelera o desenvolvimento.",
      "O primeiro aspecto que faz o Next.js ideal para contextos corporativos é o modelo de renderização híbrido. Páginas públicas podem ser geradas estaticamente (SSG), enquanto painéis administrativos usam renderização server-side (SSR) para garantir segurança total dos dados.",
      "A autenticação em ambientes corporativos raramente é simples. Integramos nossas soluções com Identity Providers (IdP) existentes como Azure AD, Okta ou Keycloak via protocolos OAuth 2.0 e SAML.",
      "Outro ponto crítico é a gestão de permissões. Implementamos middlewares que interceptam cada requisição e verificam as permissões do usuário de forma centralizada. Isso evita duplicação de lógica e aumenta a segurança.",
      "A integração com APIs legadas é facilitada pelas API Routes do Next.js, funcionando como um BFF (Backend for Frontend). Isso protege o frontend de mudanças bruscas em sistemas antigos.",
      "Por fim, o deploy. Configuramos pipelines CI/CD que garantem builds consistentes e deploys seguros em containers Docker (AWS) ou plataformas edge como Vercel, dependendo da necessidade do cliente.",
    ],
    date: "2025-10-08",
    readTime: "9 min",
    category: "Desenvolvimento",
    image: "/images/blog/nextjs.jpg",
    featured: false,
  },
  {
    slug: "aws-serverless-startups",
    title: "Arquitetura Serverless na AWS: Guia para Quem Começa",
    excerpt:
      "Lambda, API Gateway, DynamoDB, S3 — como montar uma infraestrutura serverless que custa centavos no início e escala automaticamente quando o negócio cresce.",
    content: [
      "Serverless não é ausência de servidores — é a transferência da responsabilidade de gerenciá-los para o provedor cloud. Para empresas que buscam agilidade, isso significa focar 100% no produto enquanto a infraestrutura escala automaticamente.",
      "O ponto de partida é o AWS Lambda. Cada função deve ser pequena e stateless. Um erro comum é criar funções sobrecarregadas, o que dificulta o debug e o reuso em escala.",
      "O API Gateway atua como a porta de entrada, gerenciando rotas, controle de tráfego e autenticação. No Ubuntu Web Lab, priorizamos arquiteturas que protejam o backend de picos inesperados.",
      "Para persistência, o DynamoDB escala horizontalmente sem intervenção manual. A modelagem deve ser feita baseada nos padrões de acesso para maximizar a performance do NoSQL.",
      "O S3 completa a stack para armazenamento de arquivos. Combinado com CloudFront, servimos assets com latência mínima global.",
      "Em termos de custo, serverless é extremamente eficiente. O segredo é monitoramento constante com CloudWatch para evitar surpresas. É uma escolha economicamente previsível quando bem arquitetada.",
    ],
    date: "2025-09-14",
    readTime: "6 min",
    category: "Cloud",
    image: "/images/blog/aws.jpg",
    featured: false,
  },
  {
    slug: "typescript-projetos-grandes",
    title: "TypeScript em Projetos Grandes: Padrões que Fazem a Diferença",
    excerpt:
      "Tipos genéricos, branded types, discriminated unions — padrões avançados de TypeScript que melhoram a segurança e a documentação viva do código.",
    content: [
      "Em codebases extensas, o TypeScript é ferramenta de sobrevivência. A diferença entre um projeto que ajuda e um que atrapalha está nos padrões adotados pela equipe desde o dia zero.",
      "Branded Types eliminam bugs de lógica ao criar tipos nominais únicos para IDs e strings específicas. Isso transforma erros silenciosos em erros de compilação claros.",
      "Discriminated Unions são o padrão mais poderoso para modelar estados complexos. Garantimos que todos os estados possíveis (Loading, Error, Success) sejam tratados de forma exaustiva.",
      "Generics com constraints permitem criar componentes reutilizáveis sem sacrificar a segurança de tipos. É a base de bibliotecas robustas e sistemas escaláveis.",
      "Validadores como Zod complementam o TypeScript garantindo que dados externos (APIs, formulários) respeitem os contratos definidos em tempo de execução.",
      "Seguimos rigorosamente o padrão de inversão de dependência via interfaces. Isso facilita testes unitários e permite trocar implementações de infraestrutura com zero impacto no core do negócio.",
    ],
    date: "2025-08-22",
    readTime: "7 min",
    category: "Desenvolvimento",
    image: "/images/blog/typescript.jpg",
    featured: false,
  },
  {
    slug: "inteligencia-artificial-educacao",
    title: "IA na Educação: Além do Hype, Aplicações que Funcionam",
    excerpt:
      "Uma visão fundamentada sobre como a Inteligência Artificial pode (e não pode) melhorar o ensino — baseada em evidências de mercado, não em promessas de marketing.",
    content: [
      "A Inteligência Artificial na educação vive um momento de grandes expectativas. Separar o que é marketing do que realmente agrega valor é essencial para instituições de ensino sérias.",
      "Uma aplicação promissora é o feedback automático de código. Sistemas que identificam erros comuns e sugerem correções específicas reduzem drasticamente o tempo de aprendizado e a carga sobre os instrutores.",
      "Tutores adaptativos que ajustam o ritmo com base no desempenho do aluno mostram resultados sólidos. A adaptação precisa ser granular, identificando lacunas específicas de conhecimento.",
      "É preciso cautela com geração de conteúdo pura por LLMs. Confiabilidade é mais importante que fluência em contextos educacionais. Todo conteúdo gerado por IA na Ubuntu Web Lab passa por curadoria especializada.",
      "A privacidade de dados educacionais é inegociável. Sistemas adaptativos exigem políticas claras de anonimização e consentimento para proteger a jornada do estudante.",
      "O futuro é a IA como assistente, não substituta. Ferramentas que automatizam o repetitivo liberam o educador para a mentoria e a inspiração. A tecnologia amplifica o potencial humano.",
    ],
    date: "2025-07-30",
    readTime: "8 min",
    category: "Educacao",
    image: "/images/blog/ia-educacao.jpg",
    featured: false,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getFeaturedPost(): BlogPost {
  return blogPosts.find((post) => post.featured) || blogPosts[0]
}

export function getCategories(): string[] {
  const categories = new Set(blogPosts.map((post) => post.category))
  return Array.from(categories)
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(currentSlug)
  if (!current) return blogPosts.slice(0, limit)

  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .sort((a, b) => (a.category === current.category ? -1 : b.category === current.category ? 1 : 0))
    .slice(0, limit)
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}
