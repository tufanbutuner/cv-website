import { Sidebar } from "@/components/Sidebar"
import { MobileNav } from "@/components/MobileNav"
import { BlogPost } from "@/components/BlogPost"

export function BlogPostPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar activeSection="writing" />
      <div className="flex-1 flex flex-col">
        <MobileNav activeSection="writing" />
        <BlogPost />
      </div>
    </div>
  )
}
