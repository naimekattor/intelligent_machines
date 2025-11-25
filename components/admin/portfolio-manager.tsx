"use client"

import { useState } from "react"
import { Plus, Edit2, Trash2, X, Save } from "lucide-react"

interface PortfolioItem {
  id: string
  title: string
  description: string
  image: string
}

const initialItems: PortfolioItem[] = [
  {
    id: "1",
    title: "TechFlow Dashboard",
    description: "AI-powered analytics platform for enterprise clients",
    image: "/modern-dashboard-interface-with-charts-and-analyti.jpg",
  },
  {
    id: "2",
    title: "EcoStore E-commerce",
    description: "Sustainable shopping experience with smart recommendations",
    image: "/minimal-ecommerce-website-with-products-clean-whit.jpg",
  },
  {
    id: "3",
    title: "HealthAI Portal",
    description: "Intelligent healthcare booking and management system",
    image: "/healthcare-app-interface-clean-modern-medical-desi.jpg",
  },
  {
    id: "4",
    title: "FinanceHub App",
    description: "Personal finance management with AI insights",
    image: "/finance-app-dashboard-with-graphs-and-statistics-m.jpg",
  },
]

export function PortfolioManager() {
  const [items, setItems] = useState<PortfolioItem[]>(initialItems)
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null)
  const [isAdding, setIsAdding] = useState(false)
  const [newItem, setNewItem] = useState<Omit<PortfolioItem, "id">>({
    title: "",
    description: "",
    image: "",
  })

  const handleDelete = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const handleSaveEdit = () => {
    if (editingItem) {
      setItems(items.map((item) => (item.id === editingItem.id ? editingItem : item)))
      setEditingItem(null)
    }
  }

  const handleAdd = () => {
    if (newItem.title && newItem.description) {
      setItems([...items, { ...newItem, id: Date.now().toString() }])
      setNewItem({ title: "", description: "", image: "" })
      setIsAdding(false)
    }
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Portfolio Manager</h1>
          <p className="text-muted-foreground mt-1">Add, edit, or remove portfolio items.</p>
        </div>
        <button
          onClick={() => setIsAdding(true)}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-foreground text-background rounded-xl hover:opacity-90 transition-all"
        >
          <Plus size={16} />
          Add Project
        </button>
      </div>

      {/* Add New Item Modal */}
      {isAdding && (
        <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-card border border-border rounded-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground">Add New Project</h2>
              <button
                onClick={() => setIsAdding(false)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Title</label>
                <input
                  type="text"
                  value={newItem.title}
                  onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                  placeholder="Project title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                <textarea
                  value={newItem.description}
                  onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none"
                  placeholder="Brief description"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Image URL</label>
                <input
                  type="text"
                  value={newItem.image}
                  onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                  placeholder="/images/project.jpg"
                />
              </div>
              <button
                onClick={handleAdd}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium bg-foreground text-background rounded-xl hover:opacity-90 transition-all"
              >
                <Save size={16} />
                Add Project
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Item Modal */}
      {editingItem && (
        <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-card border border-border rounded-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground">Edit Project</h2>
              <button
                onClick={() => setEditingItem(null)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Title</label>
                <input
                  type="text"
                  value={editingItem.title}
                  onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                <textarea
                  value={editingItem.description}
                  onChange={(e) =>
                    setEditingItem({
                      ...editingItem,
                      description: e.target.value,
                    })
                  }
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Image URL</label>
                <input
                  type="text"
                  value={editingItem.image}
                  onChange={(e) => setEditingItem({ ...editingItem, image: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                />
              </div>
              <button
                onClick={handleSaveEdit}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium bg-foreground text-background rounded-xl hover:opacity-90 transition-all"
              >
                <Save size={16} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Portfolio Table */}
      <div className="rounded-2xl bg-card border border-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Preview</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Title</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground hidden md:table-cell">
                Description
              </th>
              <th className="text-right px-6 py-4 text-sm font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {items.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4">
                  <div className="w-16 h-12 rounded-lg bg-secondary overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg?height=48&width=64&query=project screenshot"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-foreground">{item.title}</span>
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  <span className="text-sm text-muted-foreground">{item.description}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => setEditingItem(item)}
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
