"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, Calculator, Radio, HelpCircle } from "lucide-react"

export default function Page2() {
  const [draggedItems, setDraggedItems] = useState({
    commission: null,
    calculators: null,
    radios: null,
    goal: null,
  })

  const [isDragging, setIsDragging] = useState(false)
  const [currentItem, setCurrentItem] = useState(null)

  const handleDragStart = (item) => {
    setIsDragging(true)
    setCurrentItem(item)
  }

  const handleDrop = (section) => {
    setIsDragging(false)

    if (currentItem) {
      setDraggedItems({
        ...draggedItems,
        [currentItem]: section,
      })
    }

    setCurrentItem(null)
  }

  const resetDragging = () => {
    setDraggedItems({
      commission: null,
      calculators: null,
      radios: null,
      goal: null,
    })
  }

  const renderCard = (item, title, icon, content) => {
    if (draggedItems[item] !== null) return null

    return (
      <Card
        className="cursor-grab border-2 border-emerald-200 p-4 shadow-md transition-transform hover:scale-105"
        draggable
        onDragStart={() => handleDragStart(item)}
      >
        <div className="flex items-center gap-3">
          {icon}
          <div>
            <h3 className="font-medium">{title}</h3>
            <p>{content}</p>
          </div>
        </div>
      </Card>
    )
  }

  const renderDroppedCard = (item, title, icon, content) => {
    return (
      <Card className="border-2 border-emerald-500 p-4 shadow-md">
        <div className="flex items-center gap-3">
          {icon}
          <div>
            <h3 className="font-medium">{title}</h3>
            <p>{content}</p>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-emerald-700">🧩 Let's Gather the Facts</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div
          className={`min-h-[200px] rounded-lg border-2 border-dashed p-4 ${
            isDragging ? "border-emerald-500 bg-emerald-50" : "border-gray-300"
          }`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop("given")}
        >
          <h3 className="mb-4 text-lg font-semibold text-emerald-700">Given Information</h3>
          <div className="grid gap-3">
            {draggedItems.commission === "given" &&
              renderDroppedCard(
                "commission",
                "💵 Commission per item",
                <DollarSign className="h-6 w-6 text-emerald-600" />,
                "$2.65",
              )}
            {draggedItems.calculators === "given" &&
              renderDroppedCard(
                "calculators",
                "🧮 Calculators sold",
                <Calculator className="h-6 w-6 text-emerald-600" />,
                "15",
              )}
            {draggedItems.radios === "given" &&
              renderDroppedCard(
                "radios",
                "📻 Pocket radios sold",
                <Radio className="h-6 w-6 text-emerald-600" />,
                "19",
              )}
            {draggedItems.goal === "given" &&
              renderDroppedCard(
                "goal",
                "❓ Goal",
                <HelpCircle className="h-6 w-6 text-emerald-600" />,
                "Find total commission",
              )}
          </div>
        </div>

        <div
          className={`min-h-[200px] rounded-lg border-2 border-dashed p-4 ${
            isDragging ? "border-emerald-500 bg-emerald-50" : "border-gray-300"
          }`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop("find")}
        >
          <h3 className="mb-4 text-lg font-semibold text-emerald-700">What We Need to Find</h3>
          <div className="grid gap-3">
            {draggedItems.commission === "find" &&
              renderDroppedCard(
                "commission",
                "💵 Commission per item",
                <DollarSign className="h-6 w-6 text-emerald-600" />,
                "$2.65",
              )}
            {draggedItems.calculators === "find" &&
              renderDroppedCard(
                "calculators",
                "🧮 Calculators sold",
                <Calculator className="h-6 w-6 text-emerald-600" />,
                "15",
              )}
            {draggedItems.radios === "find" &&
              renderDroppedCard(
                "radios",
                "📻 Pocket radios sold",
                <Radio className="h-6 w-6 text-emerald-600" />,
                "19",
              )}
            {draggedItems.goal === "find" &&
              renderDroppedCard(
                "goal",
                "❓ Goal",
                <HelpCircle className="h-6 w-6 text-emerald-600" />,
                "Find total commission",
              )}
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <h3 className="text-lg font-semibold">Available Information:</h3>
        <div className="grid gap-3 md:grid-cols-2">
          {renderCard(
            "commission",
            "💵 Commission per item",
            <DollarSign className="h-6 w-6 text-emerald-600" />,
            "$2.65",
          )}
          {renderCard("calculators", "🧮 Calculators sold", <Calculator className="h-6 w-6 text-emerald-600" />, "15")}
          {renderCard("radios", "📻 Pocket radios sold", <Radio className="h-6 w-6 text-emerald-600" />, "19")}
          {renderCard("goal", "❓ Goal", <HelpCircle className="h-6 w-6 text-emerald-600" />, "Find total commission")}
        </div>

        <div className="mt-4 text-center">
          <Button
            variant="outline"
            onClick={resetDragging}
            className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Reset Cards
          </Button>
        </div>
      </div>
    </div>
  )
}
