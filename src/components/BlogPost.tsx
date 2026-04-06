import { getAllPosts, postComponentsBySlug } from "@/lib/posts";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const meta = getAllPosts().find((p) => p.slug === slug);
  const Content = slug ? postComponentsBySlug[slug] : null;

  if (!Content || !meta) {
    return <p className="text-muted-foreground">Post not found.</p>;
  }

  return (
    <div>
      <Link
        to="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
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
  );
}
