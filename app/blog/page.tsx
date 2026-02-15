import { BlogListing } from "@/components/blog-listing"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Ubuntu Web Lab",
  description:
    "Artigos e insights da equipe Ubuntu Web Lab sobre tecnologia e inovação.",
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogListing />
      </main>
      <Footer />
    </>
  )
}
