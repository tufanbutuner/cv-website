import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { navItems, profile } from "@/data/cv";
import { FileText, Home, Mail, Menu, PenLine, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  cv: FileText,
  writing: PenLine,
};

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const getIsActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="lg:hidden sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-4 py-3">
        <Link to="/" onClick={() => setOpen(false)}>
          <p className="text-sm font-semibold">{profile.name}</p>
          <p className="text-xs text-muted-foreground">{profile.title}</p>
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-md hover:bg-accent transition-colors"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border px-4 py-3 space-y-1">
          {navItems.map((item, i) => {
            const Icon = icons[item.id];
            const active = getIsActive(item.path);
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm w-full transition-colors ${
                  active
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                <span className="flex-1">{item.label}</span>
                <span className="text-xs font-mono text-muted-foreground w-4 text-right">
                  {i + 1}
                </span>
              </Link>
            );
          })}

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
  );
}
