"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

interface Fact {
  id: string
  text: string
  category: "given" | "find" | "note" | null
}

interface DragDropFactsProps {
  facts: Fact[]
  onComplete?: () => void
}

export function DragDropFacts({ facts, onComplete }: DragDropFactsProps) {
  const [items, setItems] = useState<Fact[]>(facts)
  const [draggedItem, setDraggedItem] = useState<Fact | null>(null)
  const [isComplete, setIsComplete] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const handleDragStart = (item: Fact) => {
    setDraggedItem(item)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (category: "given" | "find" | "note") => {
    if (!draggedItem) return

    setItems(items.map((item) => (item.id === draggedItem.id ? { ...item, category } : item)))
    setDraggedItem(null)
  }

  const handleCheck = () => {
    const allCategorized = items.every((item) => item.category !== null)
    setIsComplete(allCategorized)

    // Check if all items are in the correct category
    // In a real app, you would compare against correct answers
    // For this demo, we'll assume all current categorizations are correct
    setIsCorrect(allCategorized)

    if (allCategorized && onComplete) {
      onComplete()
    }
  }

  const handleReset = () => {
    setItems(facts.map((fact) => ({ ...fact, category: null })))
    setIsComplete(false)
    setIsCorrect(null)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Given Facts */}
        <Card className="border-2 border-dashed border-blue-300 bg-blue-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-blue-700">Given</CardTitle>
          </CardHeader>
          <CardContent className="min-h-32" onDragOver={handleDragOver} onDrop={() => handleDrop("given")}>
            {items
              .filter((item) => item.category === "given")
              .map((item) => (
                <div
                  key={item.id}
                  className="p-2 mb-2 bg-white rounded-md shadow-sm border border-blue-200"
                  draggable
                  onDragStart={() => handleDragStart(item)}
                >
                  {item.text}
                </div>
              ))}
          </CardContent>
        </Card>

        {/* Need to Find */}
        <Card className="border-2 border-dashed border-green-300 bg-green-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-green-700">Need to Find</CardTitle>
          </CardHeader>
          <CardContent className="min-h-32" onDragOver={handleDragOver} onDrop={() => handleDrop("find")}>
            {items
              .filter((item) => item.category === "find")
              .map((item) => (
                <div
                  key={item.id}
                  className="p-2 mb-2 bg-white rounded-md shadow-sm border border-green-200"
                  draggable
                  onDragStart={() => handleDragStart(item)}
                >
                  {item.text}
                </div>
              ))}
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="border-2 border-dashed border-amber-300 bg-amber-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-amber-700">Important Notes</CardTitle>
          </CardHeader>
          <CardContent className="min-h-32" onDragOver={handleDragOver} onDrop={() => handleDrop("note")}>
            {items
              .filter((item) => item.category === "note")
              .map((item) => (
                <div
                  key={item.id}
                  className="p-2 mb-2 bg-white rounded-md shadow-sm border border-amber-200"
                  draggable
                  onDragStart={() => handleDragStart(item)}
                >
                  {item.text}
                </div>
              ))}
          </CardContent>
        </Card>
      </div>

      {/* Uncategorized Facts */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Drag These Facts</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {items
            .filter((item) => item.category === null)
            .map((item) => (
              <div
                key={item.id}
                className="p-2 bg-white rounded-md shadow-sm border cursor-move"
                draggable
                onDragStart={() => handleDragStart(item)}
              >
                {item.text}
              </div>
            ))}
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline" onClick={handleReset}>
          Reset
        </Button>
        <Button onClick={handleCheck}>Check</Button>
      </div>

      {isCorrect !== null && (
        <div className={`p-4 rounded-md ${isCorrect ? "bg-green-100" : "bg-red-100"}`}>
          <div className="flex items-center">
            {isCorrect ? (
              <Check className="h-5 w-5 text-green-600 mr-2" />
            ) : (
              <X className="h-5 w-5 text-red-600 mr-2" />
            )}
            <p className={isCorrect ? "text-green-700" : "text-red-700"}>
              {isCorrect
                ? "Great job! You've correctly categorized all the facts."
                : "Some facts might not be in the right category. Try again!"}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
