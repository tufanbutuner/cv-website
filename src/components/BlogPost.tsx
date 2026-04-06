import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getPostComponent, getAllPosts } from "@/lib/posts"
import { ArrowLeft } from "lucide-react"

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const [Content, setContent] = useState<React.ComponentType | null>(null)
  const meta = getAllPosts().find((p) => p.slug === slug)

  useEffect(() => {
    if (!slug) return
    getPostComponent(slug).then((component) => {
      if (component) setContent(() => component)
    })
  }, [slug])

  if (!Content || !meta) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-muted-foreground">
          {Content === null && meta ? "Loading..." : "Post not found."}
        </p>
      </div>
    )
  }

  return (
    <div className="flex-1 max-w-2xl mx-auto w-full px-6 py-12 lg:py-16">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>

      <header className="mb-10">
        <time className="text-sm text-muted-foreground">
          {new Date(meta.date).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h1 className="text-3xl font-semibold tracking-tight mt-2">
          {meta.title}
        </h1>
        {meta.description && (
          <p className="text-muted-foreground mt-2">{meta.description}</p>
        )}
      </header>

      <article className="prose">
        <Content />
      </article>
    </div>
  )
}
