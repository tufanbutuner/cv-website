import { experience } from "@/data/cv"
import { Separator } from "@/components/ui/separator"

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16">
      <h2 className="text-lg font-semibold tracking-tight text-muted-foreground mb-6">
        Experience
      </h2>
      <div className="space-y-8">
        {experience.map((job) => (
          <div key={`${job.company}-${job.role}`}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h3 className="text-base font-semibold">
                {job.role}{" "}
                <span className="text-muted-foreground font-normal">
                  @ {job.company}
                </span>
              </h3>
              <span className="text-sm text-muted-foreground shrink-0">
                {job.period}
              </span>
            </div>

            {job.description && (
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {job.description}
              </p>
            )}

            {job.responsibilities && (
              <div className="mb-4">
                <p className="text-sm font-medium mb-2">
                  Core responsibilities
                </p>
                <ul className="space-y-1.5">
                  {job.responsibilities.map((r) => (
                    <li
                      key={r}
                      className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-muted-foreground/30"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {job.projects && (
              <div>
                <p className="text-sm font-medium mb-3">
                  Selected project highlights
                </p>
                <div className="grid gap-3">
                  {job.projects.map((p) => (
                    <div
                      key={p.name}
                      className="rounded-lg border border-border p-4 hover:bg-accent/30 transition-colors"
                    >
                      <p className="text-sm font-medium mb-1">{p.name}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <Separator className="mt-8" />
          </div>
        ))}
      </div>
    </section>
  )
}
