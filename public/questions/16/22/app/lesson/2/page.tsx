"use client"

import type React from "react"

import { useState } from "react"
import { LessonLayout } from "@/components/lesson-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Hash, Target } from "lucide-react"

export default function Page2() {
  const [draggedItem, setDraggedItem] = useState<string | null>(null)
  const [givenInfo, setGivenInfo] = useState<string[]>([])
  const [targetInfo, setTargetInfo] = useState<string[]>([])
  const [isCorrect, setIsCorrect] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)

  const facts = ["Commission per item: $3.15", "Calculators sold: 12", "Pocket radios sold: 16", "Total commission"]

  const handleDragStart = (item: string) => {
    setDraggedItem(item)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDropOnGiven = () => {
    if (draggedItem && !givenInfo.includes(draggedItem) && draggedItem !== "Total commission") {
      setGivenInfo([...givenInfo, draggedItem])
      setDraggedItem(null)
    }
  }

  const handleDropOnTarget = () => {
    if (draggedItem && !targetInfo.includes(draggedItem) && draggedItem === "Total commission") {
      setTargetInfo([...targetInfo, draggedItem])
      setDraggedItem(null)
    }
  }

  const handleRemoveFromGiven = (item: string) => {
    setGivenInfo(givenInfo.filter((i) => i !== item))
  }

  const handleRemoveFromTarget = (item: string) => {
    setTargetInfo(targetInfo.filter((i) => i !== item))
  }

  const checkAnswer = () => {
    const correctGiven =
      givenInfo.length === 3 &&
      givenInfo.includes("Commission per item: $3.15") &&
      givenInfo.includes("Calculators sold: 12") &&
      givenInfo.includes("Pocket radios sold: 16")

    const correctTarget = targetInfo.length === 1 && targetInfo.includes("Total commission")

    setIsCorrect(correctGiven && correctTarget)
    setShowFeedback(true)
  }

  return (
    <LessonLayout pageNumber={2} totalPages={9} title="🧩 What Are We Given?">
      <div className="space-y-8">
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-teal-700">Breaking Down the Information</h2>

          <p className="mt-4 text-lg">
            Let's organize what we know and what we need to find. Drag each piece of information to the correct
            category.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* Facts to drag */}
            <div className="rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-4">
              <h3 className="mb-3 font-semibold text-gray-700">Available Facts</h3>
              <div className="flex flex-wrap gap-2">
                {facts.map((fact) => {
                  const isInGiven = givenInfo.includes(fact)
                  const isInTarget = targetInfo.includes(fact)

                  if (!isInGiven && !isInTarget) {
                    return (
                      <div
                        key={fact}
                        draggable
                        onDragStart={() => handleDragStart(fact)}
                        className="cursor-grab rounded-lg bg-yellow-100 p-3 shadow-sm transition-transform hover:scale-105 active:cursor-grabbing"
                      >
                        {fact}
                      </div>
                    )
                  }
                  return null
                })}
              </div>
            </div>

            <div className="space-y-6">
              {/* Given Info Drop Zone */}
              <div
                className="rounded-lg border-2 border-dashed border-teal-300 bg-teal-50 p-4"
                onDragOver={handleDragOver}
                onDrop={handleDropOnGiven}
              >
                <h3 className="mb-3 flex items-center font-semibold text-teal-700">
                  <Hash className="mr-1 h-5 w-5" />
                  Given Information
                </h3>
                <div className="min-h-20 flex flex-wrap gap-2">
                  {givenInfo.map((item) => (
                    <div key={item} className="group flex items-center rounded-lg bg-teal-100 p-3 pr-2">
                      {item}
                      <button
                        onClick={() => handleRemoveFromGiven(item)}
                        className="ml-2 rounded-full p-1 text-teal-700 opacity-50 hover:bg-teal-200 hover:opacity-100"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Info Drop Zone */}
              <div
                className="rounded-lg border-2 border-dashed border-emerald-300 bg-emerald-50 p-4"
                onDragOver={handleDragOver}
                onDrop={handleDropOnTarget}
              >
                <h3 className="mb-3 flex items-center font-semibold text-emerald-700">
                  <Target className="mr-1 h-5 w-5" />
                  Target (Find This)
                </h3>
                <div className="min-h-20 flex flex-wrap gap-2">
                  {targetInfo.map((item) => (
                    <div key={item} className="group flex items-center rounded-lg bg-emerald-100 p-3 pr-2">
                      {item}
                      <button
                        onClick={() => handleRemoveFromTarget(item)}
                        className="ml-2 rounded-full p-1 text-emerald-700 opacity-50 hover:bg-emerald-200 hover:opacity-100"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              onClick={checkAnswer}
              className="bg-emerald-600 hover:bg-emerald-700"
              disabled={givenInfo.length + targetInfo.length !== 4}
            >
              Check My Answer
            </Button>
          </div>

          {showFeedback && (
            <div
              className={`mt-4 rounded-lg p-4 ${isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
            >
              {isCorrect ? (
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5" />
                  <span>Great job! You've correctly identified what we know and what we need to find.</span>
                </div>
              ) : (
                <div>
                  <p>Not quite right. Try again!</p>
                  <p className="mt-1 text-sm">
                    Hint: We know the commission per item, the number of calculators sold, and the number of pocket
                    radios sold. We need to find the total commission.
                  </p>
                </div>
              )}
            </div>
          )}
        </Card>

        <div className="rounded-lg bg-blue-50 p-4 text-blue-800">
          <h3 className="font-semibold">Key Insight:</h3>
          <p>Breaking down a problem into what we know and what we need to find is the first step in solving it.</p>
        </div>
      </div>
    </LessonLayout>
  )
}
