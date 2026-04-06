import type { ComponentType } from "react";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
}

interface PostModule {
  default: ComponentType;
  frontmatter: {
    title?: string;
    date?: string;
    description?: string;
  };
}

const postModules = import.meta.glob("/src/posts/*.mdx", {
  eager: true,
}) as Record<string, PostModule>;

const slugFromFilepath = (filepath: string) =>
  filepath.replace("/src/posts/", "").replace(".mdx", "");

export const postComponentsBySlug = Object.fromEntries(
  Object.entries(postModules).map(([filepath, mod]) => [
    slugFromFilepath(filepath),
    mod.default,
  ]),
) as Record<string, ComponentType>;

export function getAllPosts(): PostMeta[] {
  return Object.entries(postModules)
    .map(([filepath, mod]) => {
      const slug = slugFromFilepath(filepath);
      const fm = mod.frontmatter ?? {};
      return {
        slug,
        title: fm.title ?? slug,
        date: fm.date ?? "",
        description: fm.description ?? "",
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostComponent(slug: string): ComponentType | null {
  return postComponentsBySlug[slug] ?? null;
}
