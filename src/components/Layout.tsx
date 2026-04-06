import { MobileNav } from "@/components/MobileNav";
import { Sidebar } from "@/components/Sidebar";
import { useEffect } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;
      const routes = ["/", "/cv", "/blog"];
      const index = parseInt(e.key) - 1;
      if (index >= 0 && index < routes.length) {
        window.location.href = routes[index];
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <MobileNav />
        <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-12 lg:py-16">
          {children}
        </main>
      </div>
    </div>
  );
}
