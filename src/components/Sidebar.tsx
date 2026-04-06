import { profile, sections } from "@/data/cv"
import { Mail, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface SidebarProps {
  activeSection: string
}

export function Sidebar({ activeSection }: SidebarProps) {
  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <aside className="hidden lg:flex flex-col w-64 shrink-0 sticky top-0 h-screen border-r border-border p-6">
      <div className="mb-6">
        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-semibold mb-3">
          TB
        </div>
        <h2 className="text-base font-semibold tracking-tight">
          {profile.name}
        </h2>
        <p className="text-sm text-muted-foreground">{profile.title}</p>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
          <MapPin className="w-3 h-3" />
          {profile.location}
        </div>
      </div>

      <Separator className="mb-4" />

      <nav className="flex flex-col gap-1 flex-1">
        {sections.map((section, i) => (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors text-left cursor-pointer ${
              activeSection === section.id
                ? "bg-accent text-accent-foreground font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
            }`}
          >
            <span className="text-xs font-mono text-muted-foreground w-4">
              {i + 1}
            </span>
            {section.label}
          </button>
        ))}
      </nav>

      <Separator className="my-4" />

      <div className="flex items-center gap-1">
        <p className="text-xs text-muted-foreground mr-2">Online</p>
        <Tooltip>
          <TooltipTrigger
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
            render={<a href={profile.links.github} target="_blank" rel="noopener noreferrer" />}
          >
            <GithubIcon className="w-4 h-4" />
          </TooltipTrigger>
          <TooltipContent>GitHub</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
            render={<a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" />}
          >
            <LinkedinIcon className="w-4 h-4" />
          </TooltipTrigger>
          <TooltipContent>LinkedIn</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
            render={<a href={`mailto:${profile.email}`} />}
          >
            <Mail className="w-4 h-4" />
          </TooltipTrigger>
          <TooltipContent>Email</TooltipContent>
        </Tooltip>
      </div>
    </aside>
  )
}
