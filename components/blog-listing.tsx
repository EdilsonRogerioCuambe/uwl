"use client"

import {
    blogPosts,
    formatDate,
    getCategories,
    getFeaturedPost,
} from "@/lib/blog-data"
import { ArrowRight, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function BlogListing() {
  const featured = getFeaturedPost()
  const categories = getCategories()
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredPosts = activeCategory
    ? blogPosts.filter(
        (p) => p.category === activeCategory && !p.featured
      )
    : blogPosts.filter((p) => !p.featured)

  return (
    <>
      {/* Featured Post Hero */}
      <section className="px-6 pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <p
            className="text-[13px] font-semibold uppercase tracking-widest"
            style={{ color: "#572011" }}
          >
            Blog
          </p>
          <h1 className="mt-4 font-serif text-5xl font-light leading-tight sm:text-6xl lg:text-7xl text-balance">
            Ideias & Engenharia
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Reflexões sobre desenvolvimento de software, educação e tecnologia
            — fundamentadas em pesquisa acadêmica e experiência prática.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid gap-8 border border-border bg-card transition-colors hover:bg-secondary/50 lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center px-8 py-10 lg:px-12 lg:py-14">
              <div className="flex items-center gap-4">
                <span
                  className="text-[11px] font-bold uppercase tracking-widest"
                  style={{ color: "#572011" }}
                >
                  Destaque
                </span>
                <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  {featured.category}
                </span>
              </div>
              <h2 className="mt-5 font-serif text-3xl font-light leading-snug sm:text-4xl text-balance">
                {featured.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {featured.excerpt}
              </p>
              <div className="mt-8 flex items-center gap-6">
                <span className="inline-flex items-center gap-1.5 text-[12px] text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {featured.readTime}
                </span>
                <span className="text-[12px] text-muted-foreground">
                  {formatDate(featured.date)}
                </span>
              </div>
              <div className="mt-8">
                <span
                  className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-widest transition-colors group-hover:text-foreground"
                  style={{ color: "#572011" }}
                >
                  Ler artigo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Category Filters + Grid */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          {/* Category pills */}
          <div className="flex flex-wrap items-center gap-3 border-b border-border pb-8">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-5 py-2 text-[12px] font-medium uppercase tracking-widest transition-colors ${
                activeCategory === null
                  ? "bg-foreground text-background"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground"
              }`}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() =>
                  setActiveCategory(activeCategory === cat ? null : cat)
                }
                className={`px-5 py-2 text-[12px] font-medium uppercase tracking-widest transition-colors ${
                  activeCategory === cat
                    ? "bg-foreground text-background"
                    : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col border border-t-0 border-border bg-card p-6">
                  <div className="flex items-center gap-4">
                    <span
                      className="text-[11px] font-bold uppercase tracking-widest"
                      style={{ color: "#572011" }}
                    >
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 font-serif text-xl font-normal leading-snug text-foreground text-balance">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt.length > 120
                      ? post.excerpt.slice(0, 120) + "..."
                      : post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[12px] text-muted-foreground">
                      {formatDate(post.date)}
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

          {filteredPosts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-muted-foreground">
                Nenhum artigo encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
