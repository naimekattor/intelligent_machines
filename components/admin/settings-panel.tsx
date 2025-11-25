"use client"

import { useState } from "react"
import { Upload, Save, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function SettingsPanel() {
  const { theme, toggleTheme } = useTheme()
  const [settings, setSettings] = useState({
    siteTitle: "Intelligent Machines",
    tagline: "AI-Powered Digital Solutions",
    logoUrl: "",
  })
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-foreground">Site Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your website&apos;s basic information and appearance.</p>
      </div>

      <div className="max-w-2xl space-y-8">
        {/* Logo Upload */}
        <div className="rounded-2xl bg-card border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Logo</h2>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center border-2 border-dashed border-border">
              {settings.logoUrl ? (
                <img
                  src={settings.logoUrl || "/placeholder.svg"}
                  alt="Logo"
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center">
                  <span className="text-background font-bold text-sm">IM</span>
                </div>
              )}
            </div>
            <div>
              <label className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-secondary text-foreground rounded-xl hover:bg-secondary/80 transition-colors cursor-pointer">
                <Upload size={16} />
                Upload Logo
                <input type="file" accept="image/*" className="hidden" />
              </label>
              <p className="text-xs text-muted-foreground mt-2">Recommended: 200x200px, PNG or SVG</p>
            </div>
          </div>
        </div>

        {/* Site Information */}
        <div className="rounded-2xl bg-card border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Site Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Site Title</label>
              <input
                type="text"
                value={settings.siteTitle}
                onChange={(e) => setSettings({ ...settings, siteTitle: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/20 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Tagline</label>
              <input
                type="text"
                value={settings.tagline}
                onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/20 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Theme Settings */}
        <div className="rounded-2xl bg-card border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Default Theme</h2>
          <div className="flex gap-4">
            <button
              onClick={() => theme === "dark" && toggleTheme()}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-all ${
                theme === "light"
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background text-foreground border-border hover:border-foreground/20"
              }`}
            >
              <Sun size={18} />
              Light
            </button>
            <button
              onClick={() => theme === "light" && toggleTheme()}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-all ${
                theme === "dark"
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background text-foreground border-border hover:border-foreground/20"
              }`}
            >
              <Moon size={18} />
              Dark
            </button>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-foreground text-background rounded-xl hover:opacity-90 transition-all"
        >
          <Save size={16} />
          {saved ? "Saved!" : "Save Changes"}
        </button>
      </div>
    </div>
  )
}
