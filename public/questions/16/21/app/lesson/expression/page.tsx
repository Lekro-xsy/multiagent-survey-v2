"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type ExpressionPart = {
  id: string
  text: string
  position: number | null
}

export default function ExpressionPage() {
  const [expressionParts, setExpressionParts] = useState<ExpressionPart[]>([
    { id: "2.75", text: "2.75", position: null },
    { id: "times1", text: "×", position: null },
    { id: "17", text: "17", position: null },
    { id: "plus", text: "+", position: null },
    { id: "2.75_2", text: "2.75", position: null },
    { id: "times2", text: "×", position: null },
    { id: "12", text: "12", position: null },
  ])

  const [draggedPart, setDraggedPart] = useState<string | null>(null)

  const handleDragStart = (id: string) => {
    setDraggedPart(id)
  }

  const handleDrop = (position: number) => {
    if (draggedPart) {
      // Check if position is already taken
      const isPositionTaken = expressionParts.some((part) => part.position === position)
      if (isPositionTaken) return

      setExpressionParts(expressionParts.map((part) => (part.id === draggedPart ? { ...part, position } : part)))
      setDraggedPart(null)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const resetPosition = (id: string) => {
    setExpressionParts(expressionParts.map((part) => (part.id === id ? { ...part, position: null } : part)))
  }

  const isComplete = expressionParts.every((part) => part.position !== null)
  const correctOrder = ["2.75", "times1", "17", "plus", "2.75_2", "times2", "12"]
  const isCorrect =
    isComplete &&
    expressionParts.every((part, index) => {
      const sortedParts = [...expressionParts].sort((a, b) => (a.position || 0) - (b.position || 0))
      return sortedParts[index].id === correctOrder[index]
    })

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-white py-4 shadow-sm">
        <div className="container flex items-center justify-between">
          <h1 className="text-xl font-bold">Math Learning Journey</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Page 4 of 9</span>
          </div>
        </div>
      </header>
      <main className="container flex-1 py-12">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">🧮 Write the Total Earnings Expression</h1>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Step-by-step Expression Building</h2>

                  <div className="space-y-2">
                    <p className="font-medium">Calculator earnings = 2.75 × 17</p>
                    <p className="font-medium">Pocket radio earnings = 2.75 × 12</p>
                    <p className="font-medium">Total = (2.75 × 17) + (2.75 × 12)</p>
                  </div>

                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Math Concept:</h3>
                    <p>Using multiplication + addition to calculate totals with shared rates.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Drag and drop to build the expression:</h3>

                  <div className="flex flex-wrap gap-2">
                    {expressionParts
                      .filter((part) => part.position === null)
                      .map((part) => (
                        <div
                          key={part.id}
                          draggable
                          onDragStart={() => handleDragStart(part.id)}
                          className="rounded-lg border bg-card px-4 py-2 shadow-sm cursor-move hover:border-primary transition-colors"
                        >
                          {part.text}
                        </div>
                      ))}
                  </div>

                  <div className="flex items-center justify-center h-20 rounded-lg border-2 border-dashed p-4">
                    <div className="flex items-center">
                      {Array.from({ length: 7 }).map((_, index) => {
                        const part = expressionParts.find((p) => p.position === index)

                        return (
                          <div
                            key={index}
                            className="w-12 h-12 mx-1 flex items-center justify-center rounded-lg border"
                            onDragOver={handleDragOver}
                            onDrop={() => handleDrop(index)}
                          >
                            {part ? (
                              <div
                                className="w-full h-full flex items-center justify-center bg-blue-100 rounded-lg cursor-pointer"
                                onClick={() => resetPosition(part.id)}
                              >
                                {part.text}
                              </div>
                            ) : null}
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {isComplete && (
                    <div className={`p-4 rounded-lg ${isCorrect ? "bg-green-100" : "bg-red-100"}`}>
                      {isCorrect ? (
                        <p className="font-medium text-green-800">Correct! The expression is: 2.75 × 17 + 2.75 × 12</p>
                      ) : (
                        <p className="font-medium text-red-800">Not quite right. Try rearranging the parts.</p>
                      )}
                    </div>
                  )}
                </div>

                {isCorrect && (
                  <div className="pt-4">
                    <Link href="/lesson/solve">
                      <Button size="lg" className="w-full">
                        Continue to Solve the Problem
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
