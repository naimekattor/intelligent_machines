"use client"

import { FolderOpen, Eye, Activity, TrendingUp } from "lucide-react"

const stats = [
  {
    label: "Total Projects",
    value: "24",
    change: "+3 this month",
    icon: FolderOpen,
  },
  {
    label: "Visitors Today",
    value: "1,248",
    change: "+12% vs yesterday",
    icon: Eye,
  },
  {
    label: "Active Sessions",
    value: "89",
    change: "Live now",
    icon: Activity,
  },
  {
    label: "Page Views",
    value: "8,432",
    change: "+18% this week",
    icon: TrendingUp,
  },
]

const recentActivity = [
  { action: "Portfolio item added", item: "TechFlow Dashboard", time: "2 hours ago" },
  { action: "Settings updated", item: "Site tagline changed", time: "5 hours ago" },
  { action: "Portfolio item edited", item: "EcoStore E-commerce", time: "1 day ago" },
  { action: "Theme changed", item: "Switched to dark mode", time: "2 days ago" },
  { action: "Logo uploaded", item: "New brand logo", time: "3 days ago" },
]

export function DashboardOverview() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here&apos;s what&apos;s happening with your site.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <stat.icon size={20} className="text-foreground" />
              </div>
            </div>
            <div className="text-2xl font-semibold text-foreground mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
            <div className="text-xs text-muted-foreground mt-2">{stat.change}</div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="rounded-2xl bg-card border border-border">
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
        </div>
        <div className="divide-y divide-border">
          {recentActivity.map((activity, index) => (
            <div key={index} className="p-6 flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-foreground">{activity.action}</div>
                <div className="text-sm text-muted-foreground">{activity.item}</div>
              </div>
              <div className="text-xs text-muted-foreground">{activity.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
