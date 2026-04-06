import { profile, sections } from "@/data/cv"
import { Mail, Menu, X } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { useState } from "react"

export function MobileNav({ activeSection }: { activeSection: string }) {
  const [open, setOpen] = useState(false)

  const handleClick = (id: string) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="lg:hidden sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <p className="text-sm font-semibold">{profile.name}</p>
          <p className="text-xs text-muted-foreground">{profile.title}</p>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-md hover:bg-accent transition-colors"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border px-4 py-3 space-y-1">
          {sections.map((section, i) => (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm w-full text-left transition-colors ${
                activeSection === section.id
                  ? "bg-accent text-accent-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="text-xs font-mono text-muted-foreground w-4">
                {i + 1}
              </span>
              {section.label}
            </button>
          ))}
          <div className="flex items-center gap-2 pt-3 border-t border-border mt-2">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
