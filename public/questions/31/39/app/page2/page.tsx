"use client"

import type React from "react"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Fact {
  id: string
  text: string
  type: "known" | "unknown"
  category: "target" | "rate" | "time"
}

export default function Page2() {
  const [facts, setFacts] = useState<Fact[]>([
    { id: "fact1", text: "Target amount: $650", type: "known", category: "target" },
    { id: "fact2", text: "Saving rate: $50 per month", type: "known", category: "rate" },
    { id: "fact3", text: "Number of months needed", type: "unknown", category: "time" },
  ])

  const [draggedFact, setDraggedFact] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const handleDragStart = (id: string) => {
    setDraggedFact(id)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (targetType: "known" | "unknown") => {
    if (draggedFact) {
      setFacts((prev) => prev.map((fact) => (fact.id === draggedFact ? { ...fact, type: targetType } : fact)))
      setDraggedFact(null)
    }
  }

  const checkAnswer = () => {
    const isFactsCorrect = facts.every(
      (fact) =>
        (fact.category === "target" && fact.type === "known") ||
        (fact.category === "rate" && fact.type === "known") ||
        (fact.category === "time" && fact.type === "unknown"),
    )

    setIsCorrect(isFactsCorrect)
  }

  const resetFacts = () => {
    setFacts([
      { id: "fact1", text: "Target amount: $650", type: "known", category: "target" },
      { id: "fact2", text: "Saving rate: $50 per month", type: "known", category: "rate" },
      { id: "fact3", text: "Number of months needed", type: "unknown", category: "time" },
    ])
    setIsCorrect(null)
  }

  return (
    <PageLayout title="🧩 Let's Gather the Facts" pageNumber={2} totalPages={9} prevPage="/page1" nextPage="/page3">
      <div className="space-y-8">
        <div className="rounded-lg bg-blue-50 p-6">
          <h2 className="mb-4 text-xl font-semibold text-blue-800">Key Facts:</h2>
          <div className="space-y-2">
            {facts.map((fact) => (
              <div
                key={fact.id}
                draggable
                onDragStart={() => handleDragStart(fact.id)}
                className="cursor-move rounded-md bg-white p-3 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-center">
                  {fact.category === "target" && <span className="mr-2 text-xl">🎯</span>}
                  {fact.category === "rate" && <span className="mr-2 text-xl">💵</span>}
                  {fact.category === "time" && <span className="mr-2 text-xl">❓</span>}
                  <span className="text-lg">{fact.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div
            onDragOver={handleDragOver}
            onDrop={() => handleDrop("known")}
            className="flex min-h-[200px] flex-col rounded-lg border-2 border-dashed border-blue-300 bg-blue-50 p-4"
          >
            <h3 className="mb-4 text-center text-lg font-semibold text-blue-700">Known Facts</h3>
            <div className="flex-1 space-y-2">
              {facts
                .filter((f) => f.type === "known")
                .map((fact) => (
                  <div key={fact.id} className="rounded-md bg-white p-3 shadow-sm">
                    <div className="flex items-center">
                      {fact.category === "target" && <span className="mr-2 text-xl">🎯</span>}
                      {fact.category === "rate" && <span className="mr-2 text-xl">💵</span>}
                      {fact.category === "time" && <span className="mr-2 text-xl">❓</span>}
                      <span>{fact.text}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div
            onDragOver={handleDragOver}
            onDrop={() => handleDrop("unknown")}
            className="flex min-h-[200px] flex-col rounded-lg border-2 border-dashed border-purple-300 bg-purple-50 p-4"
          >
            <h3 className="mb-4 text-center text-lg font-semibold text-purple-700">Unknown Facts</h3>
            <div className="flex-1 space-y-2">
              {facts
                .filter((f) => f.type === "unknown")
                .map((fact) => (
                  <div key={fact.id} className="rounded-md bg-white p-3 shadow-sm">
                    <div className="flex items-center">
                      {fact.category === "target" && <span className="mr-2 text-xl">🎯</span>}
                      {fact.category === "rate" && <span className="mr-2 text-xl">💵</span>}
                      {fact.category === "time" && <span className="mr-2 text-xl">❓</span>}
                      <span>{fact.text}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {isCorrect !== null && (
          <Card className={isCorrect ? "bg-green-50" : "bg-red-50"}>
            <CardContent className="p-4 text-center">
              {isCorrect ? (
                <p className="text-lg font-medium text-green-700">
                  Correct! You've identified the known and unknown facts properly.
                </p>
              ) : (
                <p className="text-lg font-medium text-red-700">Not quite right. Try again!</p>
              )}
            </CardContent>
          </Card>
        )}

        <div className="flex justify-center space-x-4">
          <Button onClick={checkAnswer} className="bg-blue-600 hover:bg-blue-700">
            Check Answer
          </Button>
          <Button variant="outline" onClick={resetFacts} className="border-blue-300 text-blue-700 hover:bg-blue-100">
            Reset
          </Button>
        </div>

        <div className="rounded-lg bg-yellow-50 p-4">
          <h3 className="mb-2 font-semibold text-yellow-800">Hint:</h3>
          <p className="text-yellow-700">
            Drag each fact to the appropriate category. Known facts are the ones given in the problem, while unknown
            facts are what we need to find out.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
