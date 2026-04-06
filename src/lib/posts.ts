import matter from "gray-matter"

export interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
}

const postFiles = import.meta.glob("/src/posts/*.mdx", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>

const postModules = import.meta.glob("/src/posts/*.mdx") as Record<
  string,
  () => Promise<{ default: React.ComponentType }>
>

export function getAllPosts(): PostMeta[] {
  return Object.entries(postFiles)
    .map(([filepath, raw]) => {
      const slug = filepath.replace("/src/posts/", "").replace(".mdx", "")
      const { data } = matter(raw)
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        description: data.description ?? "",
      }
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getPostComponent(slug: string) {
  const key = `/src/posts/${slug}.mdx`
  const loader = postModules[key]
  if (!loader) return null
  const mod = await loader()
  return mod.default
}
