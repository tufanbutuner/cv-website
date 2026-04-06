export interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
}

interface PostModule {
  default: React.ComponentType
  frontmatter: {
    title?: string
    date?: string
    description?: string
  }
}

const postModules = import.meta.glob("/src/posts/*.mdx", {
  eager: true,
}) as Record<string, PostModule>

export function getAllPosts(): PostMeta[] {
  return Object.entries(postModules)
    .map(([filepath, mod]) => {
      const slug = filepath.replace("/src/posts/", "").replace(".mdx", "")
      const fm = mod.frontmatter ?? {}
      return {
        slug,
        title: fm.title ?? slug,
        date: fm.date ?? "",
        description: fm.description ?? "",
      }
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostComponent(slug: string): React.ComponentType | null {
  const key = `/src/posts/${slug}.mdx`
  const mod = postModules[key]
  if (!mod) return null
  return mod.default
}
