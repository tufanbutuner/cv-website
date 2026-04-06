import { profile, experience, skills } from "@/data/cv"
import { getAllPosts } from "@/lib/posts"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, FileText, PenLine, Briefcase, Code } from "lucide-react"

export function HomePage() {
  const posts = getAllPosts()
  const latestPost = posts[0]
  const currentRole = experience[0]
  const topSkills = skills[0]

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section>
        <h1 className="text-3xl font-semibold tracking-tight lg:text-4xl">
          Hey, I'm {profile.name.split(" ")[0]} 👋
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
          {profile.summary}
        </p>
      </section>

      {/* Quick cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Current role */}
        <div className="rounded-lg border border-border p-5">
          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="w-4 h-4 text-muted-foreground" />
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              Current Role
            </p>
          </div>
          <p className="text-sm font-semibold">{currentRole.role}</p>
          <p className="text-sm text-muted-foreground">
            {currentRole.company}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {currentRole.period}
          </p>
        </div>

        {/* Top skills */}
        <div className="rounded-lg border border-border p-5">
          <div className="flex items-center gap-2 mb-3">
            <Code className="w-4 h-4 text-muted-foreground" />
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              Core Stack
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {topSkills.skills.map((s) => (
              <Badge key={s} variant="secondary" className="font-normal text-xs">
                {s}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <Separator />

      {/* Navigation cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          to="/cv"
          className="group rounded-lg border border-border p-5 hover:bg-accent/30 transition-colors"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-muted-foreground" />
              <p className="text-sm font-semibold">CV</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Experience, skills, education, and certifications — the full picture.
          </p>
        </Link>

        <Link
          to="/writing"
          className="group rounded-lg border border-border p-5 hover:bg-accent/30 transition-colors"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <PenLine className="w-4 h-4 text-muted-foreground" />
              <p className="text-sm font-semibold">Writing</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {posts.length} {posts.length === 1 ? "post" : "posts"} on front-end architecture, testing, and career.
          </p>
        </Link>
      </div>

      {/* Latest post */}
      {latestPost && (
        <>
          <Separator />
          <section>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-4">
              Latest Post
            </p>
            <Link
              to={`/blog/${latestPost.slug}`}
              className="group block rounded-lg border border-border p-5 hover:bg-accent/30 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <p className="text-sm font-semibold group-hover:text-foreground transition-colors">
                  {latestPost.title}
                </p>
                <span className="text-xs text-muted-foreground shrink-0">
                  {new Date(latestPost.date).toLocaleDateString("en-GB", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              {latestPost.description && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {latestPost.description}
                </p>
              )}
            </Link>
          </section>
        </>
      )}
    </div>
  )
}
