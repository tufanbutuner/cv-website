import { BrowserRouter, Routes, Route } from "react-router-dom"
import { TooltipProvider } from "@/components/ui/tooltip"
import { HomePage } from "@/pages/HomePage"
import { BlogPostPage } from "@/pages/BlogPostPage"

export default function App() {
  return (
    <BrowserRouter>
      <TooltipProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  )
}
