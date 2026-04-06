import { certifications } from "@/data/cv"
import { Award } from "lucide-react"

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-16">
      <h2 className="text-lg font-semibold tracking-tight text-muted-foreground mb-6">
        Certifications
      </h2>
      <div className="space-y-3">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="rounded-lg border border-border p-5 flex gap-4 items-start"
          >
            <div className="w-10 h-10 rounded-md bg-accent flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold">{cert.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
