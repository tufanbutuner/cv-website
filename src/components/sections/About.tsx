import { profile } from "@/data/cv"

export function About() {
  return (
    <section id="about" className="scroll-mt-16">
      <h1 className="text-3xl font-semibold tracking-tight lg:text-4xl">
        {profile.name}
      </h1>
      <p className="text-lg text-muted-foreground leading-relaxed mt-4">
        {profile.summary}
      </p>
    </section>
  )
}
