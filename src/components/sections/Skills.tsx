import { skills } from "@/data/cv"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16">
      <h2 className="text-lg font-semibold tracking-tight text-muted-foreground mb-6">
        Skills
      </h2>
      <div className="space-y-5">
        {skills.map((category) => (
          <div key={category.name}>
            <p className="text-sm font-medium mb-2">{category.name}</p>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="font-normal">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
