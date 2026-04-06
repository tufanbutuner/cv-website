import { Sidebar } from "@/components/Sidebar"
import { MobileNav } from "@/components/MobileNav"
import { About } from "@/components/sections/About"
import { Experience } from "@/components/sections/Experience"
import { Skills } from "@/components/sections/Skills"
import { Education } from "@/components/sections/Education"
import { Certifications } from "@/components/sections/Certifications"
import { Blog } from "@/components/sections/Blog"
import { useActiveSection } from "@/hooks/useActiveSection"
import { useEffect } from "react"

export function HomePage() {
  const activeSection = useActiveSection()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      const sectionIds = ["about", "experience", "skills", "education", "certifications", "writing"]
      const index = parseInt(e.key) - 1
      if (index >= 0 && index < sectionIds.length) {
        const el = document.getElementById(sectionIds[index])
        if (el) el.scrollIntoView({ behavior: "smooth" })
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="flex min-h-screen">
      <Sidebar activeSection={activeSection} />
      <div className="flex-1 flex flex-col">
        <MobileNav activeSection={activeSection} />
        <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-12 lg:py-16 space-y-16">
          <About />
          <Experience />
          <Skills />
          <Education />
          <Certifications />
          <Blog />
        </main>
      </div>
    </div>
  )
}
