import { Experience } from "@/components/sections/Experience"
import { Skills } from "@/components/sections/Skills"
import { Education } from "@/components/sections/Education"
import { Certifications } from "@/components/sections/Certifications"
import { profile } from "@/data/cv"

export function CvPage() {
  return (
    <div className="space-y-16">
      <section id="cv" className="scroll-mt-16">
        <h1 className="text-3xl font-semibold tracking-tight lg:text-4xl">
          {profile.name}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mt-2">
          {profile.title} &middot; {profile.location}
        </p>
      </section>
      <Experience />
      <Skills />
      <Education />
      <Certifications />
    </div>
  )
}
