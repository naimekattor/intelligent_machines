"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { LayoutDashboard, Settings, FolderOpen, FileText, ArrowLeft, Sun, Moon, LogOut } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { useAuth } from "@/hooks/use-auth"
import type { AdminView } from "@/app/admin/page"

interface AdminSidebarProps {
  activeView: AdminView
  setActiveView: (view: AdminView) => void
}

const navItems = [
  { id: "overview" as AdminView, label: "Dashboard", icon: LayoutDashboard },
  { id: "settings" as AdminView, label: "Site Settings", icon: Settings },
  { id: "portfolio" as AdminView, label: "Portfolio", icon: FolderOpen },
  { id: "content" as AdminView, label: "Content", icon: FileText },
]

export function AdminSidebar({ activeView, setActiveView }: AdminSidebarProps) {
  const { theme, toggleTheme } = useTheme()
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/admin/login")
  }

  return (
    <aside className="w-64 min-h-screen bg-card border-r border-border flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
            <span className="text-background font-bold text-sm">IM</span>
          </div>
          <div>
            <span className="font-semibold text-foreground text-sm">Admin</span>
            <p className="text-xs text-muted-foreground truncate max-w-[140px]">{user?.email || "Dashboard"}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              activeView === item.id
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            <item.icon size={18} />
            {item.label}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border space-y-2">
        <button
          onClick={toggleTheme}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-all"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
        <Link
          href="/"
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-all"
        >
          <ArrowLeft size={18} />
          Back to Site
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/10 transition-all"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  )
}
