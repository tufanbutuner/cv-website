import { getAllPosts } from "@/lib/posts";
import { Link } from "react-router-dom";

export function Blog() {
  const posts = getAllPosts();

  if (posts.length === 0) return null;

  const grouped = posts.reduce<Record<string, typeof posts>>((acc, post) => {
    const year = new Date(post.date).getFullYear().toString();
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});

  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <section id="writing" className="scroll-mt-16">
      <h2 className="text-lg font-semibold tracking-tight text-muted-foreground mb-6">
        Blog
      </h2>
      <div className="space-y-8">
        {years.map((year) => (
          <div key={year}>
            <p className="text-sm font-mono text-muted-foreground mb-3">
              {year}
            </p>
            <div className="space-y-1">
              {grouped[year].map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="flex items-baseline justify-between gap-4 px-3 py-2.5 -mx-3 rounded-md hover:bg-accent/50 transition-colors group"
                >
                  <span className="text-sm font-medium group-hover:text-foreground transition-colors">
                    {post.title}
                  </span>
                  <span className="text-xs text-muted-foreground shrink-0">
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
