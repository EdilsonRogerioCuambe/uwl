import type { BlogPost } from "@/lib/blog-data"
import { formatDate, getRelatedPosts } from "@/lib/blog-data"
import { ArrowLeft, ArrowRight, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function BlogPostView({ post }: { post: BlogPost }) {
  const related = getRelatedPosts(post.slug, 3)

  return (
    <>
      {/* Header */}
      <article className="px-6 pt-36 pb-20 lg:pt-44">
        <div className="mx-auto max-w-3xl">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao Blog
          </Link>

          {/* Category & Meta */}
          <div className="mt-10 flex items-center gap-4">
            <span
              className="text-[11px] font-bold uppercase tracking-widest"
              style={{ color: "#572011" }}
            >
              {post.category}
            </span>
            <span className="text-[11px] text-muted-foreground">
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-6 font-serif text-4xl font-light leading-tight sm:text-5xl lg:text-[3.25rem] text-balance">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>

          {/* Divider */}
          <div className="mt-10 flex items-center gap-4">
            <div
              className="h-px flex-1"
              style={{ backgroundColor: "#572011" }}
            />
            <div
              className="h-1.5 w-1.5 rotate-45"
              style={{ backgroundColor: "#572011" }}
            />
            <div
              className="h-px flex-1"
              style={{ backgroundColor: "#572011" }}
            />
          </div>
        </div>

        {/* Featured Image */}
        <div className="mx-auto mt-10 max-w-4xl">
          <div className="relative aspect-[21/9] overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto mt-14 max-w-3xl">
          <div className="flex flex-col gap-6">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className={`text-base leading-[1.8] text-foreground/85 ${
                  i === 0
                    ? "first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-5xl first-letter:font-light first-letter:leading-none"
                    : ""
                }`}
                style={i === 0 ? { color: "#572011" } : undefined}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Author removed for company focus */}
        </div>
      </article>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="border-t border-border px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p
              className="text-[13px] font-semibold uppercase tracking-widest"
              style={{ color: "#572011" }}
            >
              Continue lendo
            </p>
            <h2 className="mt-4 font-serif text-3xl font-light sm:text-4xl">
              Artigos relacionados
            </h2>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col border border-t-0 border-border bg-card p-6">
                    <span
                      className="text-[11px] font-bold uppercase tracking-widest"
                      style={{ color: "#572011" }}
                    >
                      {relatedPost.category}
                    </span>
                    <h3 className="mt-3 font-serif text-lg font-normal leading-snug text-foreground text-balance">
                      {relatedPost.title}
                    </h3>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {relatedPost.readTime}
                      </span>
                      <span
                        className="text-[12px] font-medium uppercase tracking-widest transition-colors group-hover:text-foreground"
                        style={{ color: "#572011" }}
                      >
                        Ler
                        <ArrowRight className="ml-1 inline h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
