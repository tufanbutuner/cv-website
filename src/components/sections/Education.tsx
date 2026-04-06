import { education } from "@/data/cv"
import { GraduationCap } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="scroll-mt-16">
      <h2 className="text-lg font-semibold tracking-tight text-muted-foreground mb-6">
        Education
      </h2>
      <div className="rounded-lg border border-border p-5 flex gap-4 items-start">
        <div className="w-10 h-10 rounded-md bg-accent flex items-center justify-center shrink-0">
          <GraduationCap className="w-5 h-5 text-muted-foreground" />
        </div>
        <div>
          <p className="text-sm font-semibold">{education.degree}</p>
          <p className="text-sm text-muted-foreground">
            {education.classification}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            {education.institution}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {education.period}
          </p>
        </div>
      </div>
    </section>
  )
}
