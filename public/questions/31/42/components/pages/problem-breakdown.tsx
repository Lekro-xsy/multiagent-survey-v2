"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, PuzzleIcon as PuzzlePiece } from "lucide-react"

type FactItem = {
  id: string
  text: string
  category: "first-class" | "coach" | "general" | null
}

export function ProblemBreakdown() {
  const [facts, setFacts] = useState<FactItem[]>([
    { id: "fact1", text: "Total passengers = 330", category: "general" },
    { id: "fact2", text: "First-class passengers = 32", category: null },
    { id: "fact3", text: "Coach passengers = 330 - 32 = 298", category: null },
    { id: "fact4", text: "First-class ticket price = $860", category: null },
    { id: "fact5", text: "Coach ticket price = $360", category: null },
  ])

  const [completed, setCompleted] = useState(false)

  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData("text/plain", id)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent, category: "first-class" | "coach") => {
    e.preventDefault()
    const id = e.dataTransfer.getData("text/plain")

    setFacts(facts.map((fact) => (fact.id === id ? { ...fact, category } : fact)))

    // Check if all facts are categorized
    const updatedFacts = facts.map((fact) => (fact.id === id ? { ...fact, category } : fact))

    const allCategorized = updatedFacts.every((fact) => fact.category !== null || fact.id === "fact1")

    if (allCategorized) {
      setCompleted(true)
    }
  }

  const resetCategories = () => {
    setFacts(facts.map((fact) => (fact.id === "fact1" ? fact : { ...fact, category: null })))
    setCompleted(false)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold flex items-center">
          <PuzzlePiece className="mr-2 h-6 w-6" /> Organize the Facts
        </h2>
        <p className="text-gray-600">Drag each fact to the appropriate category.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          className="p-4 border-2 border-dashed border-yellow-300 bg-yellow-50 min-h-[200px]"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "first-class")}
        >
          <h3 className="font-bold text-yellow-800 mb-4">First Class</h3>
          <div className="space-y-2">
            {facts
              .filter((fact) => fact.category === "first-class")
              .map((fact) => (
                <div
                  key={fact.id}
                  className="p-2 bg-yellow-100 rounded border border-yellow-200 cursor-move"
                  draggable
                  onDragStart={(e) => handleDragStart(e, fact.id)}
                >
                  {fact.text}
                </div>
              ))}
          </div>
        </Card>

        <Card
          className="p-4 border-2 border-dashed border-blue-300 bg-blue-50 min-h-[200px]"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "coach")}
        >
          <h3 className="font-bold text-blue-800 mb-4">Coach</h3>
          <div className="space-y-2">
            {facts
              .filter((fact) => fact.category === "coach")
              .map((fact) => (
                <div
                  key={fact.id}
                  className="p-2 bg-blue-100 rounded border border-blue-200 cursor-move"
                  draggable
                  onDragStart={(e) => handleDragStart(e, fact.id)}
                >
                  {fact.text}
                </div>
              ))}
          </div>
        </Card>
      </div>

      <Card className="p-4 bg-gray-50">
        <h3 className="font-bold mb-2">Key Facts</h3>
        <div className="space-y-2">
          {facts
            .filter((fact) => fact.category === "general" || fact.category === null)
            .map((fact) => (
              <div
                key={fact.id}
                className={`p-2 ${fact.category === "general" ? "bg-gray-100" : "bg-white"} rounded border border-gray-200 ${fact.category === null ? "cursor-move" : ""}`}
                draggable={fact.category === null}
                onDragStart={fact.category === null ? (e) => handleDragStart(e, fact.id) : undefined}
              >
                {fact.text}
              </div>
            ))}
        </div>
      </Card>

      {completed && (
        <div className="bg-green-50 p-4 rounded-lg border border-green-200 flex items-center">
          <Check className="h-5 w-5 text-green-600 mr-2" />
          <p className="text-green-800">
            Great job organizing the facts! Now you can see which information belongs to each category.
          </p>
        </div>
      )}

      <div className="flex justify-end">
        <Button variant="outline" onClick={resetCategories}>
          Reset
        </Button>
      </div>
    </div>
  )
}
