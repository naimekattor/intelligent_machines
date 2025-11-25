"use client"

import { useState } from "react"
import { Save } from "lucide-react"

export function ContentEditor() {
  const [content, setContent] = useState({
    mission:
      "To empower businesses through intelligent, AI-driven website automation that streamlines operations and enhances customer engagement.",
    vision:
      "To become the global leader in AI-created digital experiences, setting new standards for innovation and excellence in web technology.",
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
        <h1 className="text-2xl font-semibold text-foreground">Content Editor</h1>
        <p className="text-muted-foreground mt-1">Update your website&apos;s mission and vision statements.</p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Mission */}
        <div className="rounded-2xl bg-card border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Mission Statement</h2>
          <textarea
            value={content.mission}
            onChange={(e) => setContent({ ...content, mission: e.target.value })}
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/20 transition-all resize-none"
          />
        </div>

        {/* Vision */}
        <div className="rounded-2xl bg-card border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Vision Statement</h2>
          <textarea
            value={content.vision}
            onChange={(e) => setContent({ ...content, vision: e.target.value })}
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/20 transition-all resize-none"
          />
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
