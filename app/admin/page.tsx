"use client"

import { useState } from "react"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { DashboardOverview } from "@/components/admin/dashboard-overview"
import { SettingsPanel } from "@/components/admin/settings-panel"
import { PortfolioManager } from "@/components/admin/portfolio-manager"
import { ContentEditor } from "@/components/admin/content-editor"
import { AuthGuard } from "@/components/admin/auth-guard"

export type AdminView = "overview" | "settings" | "portfolio" | "content"

export default function AdminDashboard() {
  const [activeView, setActiveView] = useState<AdminView>("overview")

  return (
    <AuthGuard>
      <div className="min-h-screen bg-background flex">
        <AdminSidebar activeView={activeView} setActiveView={setActiveView} />
        <main className="flex-1 overflow-auto">
          {activeView === "overview" && <DashboardOverview />}
          {activeView === "settings" && <SettingsPanel />}
          {activeView === "portfolio" && <PortfolioManager />}
          {activeView === "content" && <ContentEditor />}
        </main>
      </div>
    </AuthGuard>
  )
}
