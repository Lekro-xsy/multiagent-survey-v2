"use client"

import type React from "react"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

export default function ProblemPage() {
  const [draggedItem, setDraggedItem] = useState<string | null>(null)
  const [droppedItems, setDroppedItems] = useState<{
    known: string[]
    unknown: string[]
  }>({
    known: [],
    unknown: [],
  })
  const [showFeedback, setShowFeedback] = useState(false)

  const facts = [
    { id: "distance", text: "📏 Distance traveled: 523 miles", category: "known" },
    { id: "gas", text: "⛽ Gasoline used: 16.2 gallons", category: "known" },
    { id: "mpg", text: "❓ Question: Find miles per gallon (MPG)", category: "unknown" },
  ]

  const availableFacts = facts.filter(
    (fact) => !droppedItems.known.includes(fact.id) && !droppedItems.unknown.includes(fact.id),
  )

  const handleDragStart = (id: string) => {
    setDraggedItem(id)
  }

  const handleDrop = (category: "known" | "unknown") => {
    if (draggedItem) {
      setDroppedItems((prev) => ({
        ...prev,
        [category]: [...prev[category], draggedItem],
      }))
      setDraggedItem(null)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleReset = () => {
    setDroppedItems({ known: [], unknown: [] })
    setShowFeedback(false)
  }

  const handleCheck = () => {
    setShowFeedback(true)
  }

  const isCorrect = () => {
    const correctKnown = ["distance", "gas"]
    const correctUnknown = ["mpg"]

    return (
      correctKnown.every((id) => droppedItems.known.includes(id)) &&
      correctUnknown.every((id) => droppedItems.unknown.includes(id)) &&
      droppedItems.known.length === correctKnown.length &&
      droppedItems.unknown.length === correctUnknown.length
    )
  }

  const getFactById = (id: string) => {
    return facts.find((fact) => fact.id === id)
  }

  return (
    <PageLayout title="Key Facts We Know!" emoji="🧩">
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <p className="text-lg">
            Let's organize what we know about this problem. Drag each fact card to the correct category.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Available Facts */}
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h2 className="font-bold text-lg mb-4 text-yellow-800">Fact Cards</h2>
            <div className="space-y-3">
              {availableFacts.map((fact) => (
                <Card
                  key={fact.id}
                  draggable
                  onDragStart={() => handleDragStart(fact.id)}
                  className="p-3 cursor-move bg-yellow-100 hover:bg-yellow-200 transition-colors"
                >
                  {fact.text}
                </Card>
              ))}
              {availableFacts.length === 0 && (
                <p className="text-sm text-gray-500 italic">All facts have been categorized</p>
              )}
            </div>
          </div>

          <div className="space-y-6">
            {/* Known Information */}
            <div
              className="bg-green-50 p-4 rounded-lg border-2 border-dashed border-green-300 min-h-[120px]"
              onDrop={() => handleDrop("known")}
              onDragOver={handleDragOver}
            >
              <h2 className="font-bold text-lg mb-4 text-green-800">Known Information</h2>
              <div className="space-y-3">
                {droppedItems.known.map((id) => {
                  const fact = getFactById(id)
                  return fact ? (
                    <Card key={id} className="p-3 bg-green-100">
                      {fact.text}
                    </Card>
                  ) : null
                })}
              </div>
            </div>

            {/* What We Need to Find */}
            <div
              className="bg-blue-50 p-4 rounded-lg border-2 border-dashed border-blue-300 min-h-[120px]"
              onDrop={() => handleDrop("unknown")}
              onDragOver={handleDragOver}
            >
              <h2 className="font-bold text-lg mb-4 text-blue-800">What We Need to Find</h2>
              <div className="space-y-3">
                {droppedItems.unknown.map((id) => {
                  const fact = getFactById(id)
                  return fact ? (
                    <Card key={id} className="p-3 bg-blue-100">
                      {fact.text}
                    </Card>
                  ) : null
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Button onClick={handleReset} variant="outline">
            Reset
          </Button>
          <Button
            onClick={handleCheck}
            disabled={droppedItems.known.length + droppedItems.unknown.length !== facts.length}
            className="bg-sky-600 hover:bg-sky-700"
          >
            Check My Answer
          </Button>
        </div>

        {showFeedback && (
          <div
            className={`p-4 rounded-lg ${isCorrect() ? "bg-green-100 border border-green-300" : "bg-red-100 border border-red-300"}`}
          >
            <div className="flex items-center gap-2">
              {isCorrect() ? (
                <>
                  <Check className="h-5 w-5 text-green-600" />
                  <p className="font-medium text-green-800">
                    Great job! You've correctly identified what we know and what we need to find.
                  </p>
                </>
              ) : (
                <>
                  <X className="h-5 w-5 text-red-600" />
                  <p className="font-medium text-red-800">
                    Not quite right. Try again! Remember, we know the distance and gas used, and we need to find the
                    MPG.
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  )
}
