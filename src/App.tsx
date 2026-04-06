import { Layout } from "@/components/Layout";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BlogPostPage } from "@/pages/BlogPostPage";
import { CvPage } from "@/pages/CvPage";
import { HomePage } from "@/pages/HomePage";
import { WritingPage } from "@/pages/WritingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <TooltipProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/cv"
            element={
              <Layout>
                <CvPage />
              </Layout>
            }
          />
          <Route
            path="/writing"
            element={
              <Layout>
                <WritingPage />
              </Layout>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <Layout>
                <BlogPostPage />
              </Layout>
            }
          />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  );
}
