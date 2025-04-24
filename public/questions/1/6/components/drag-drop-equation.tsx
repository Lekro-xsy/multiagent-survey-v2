"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, RefreshCw } from "lucide-react"

export default function DragDropEquation() {
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)

  const checkAnswer = () => {
    // In a real implementation, this would check if the user's drag-and-drop
    // equation is correct. For this demo, we'll just show the answer.
    setIsCorrect(true)
    setShowAnswer(true)
  }

  const resetEquation = () => {
    setIsCorrect(null)
    setShowAnswer(false)
  }

  return (
    <div className="space-y-4">
      <div className="rounded-md bg-white p-3">
        <p className="mb-2 text-center font-medium text-indigo-800">Complete the equation:</p>

        {!showAnswer ? (
          <div className="flex flex-wrap items-center justify-center gap-2 text-indigo-800">
            <span>Total = (</span>
            <div className="h-8 w-16 rounded border border-dashed border-indigo-300 bg-indigo-50"></div>
            <span>×</span>
            <div className="h-8 w-16 rounded border border-dashed border-indigo-300 bg-indigo-50"></div>
            <span>) + (</span>
            <div className="h-8 w-16 rounded border border-dashed border-indigo-300 bg-indigo-50"></div>
            <span>×</span>
            <div className="h-8 w-16 rounded border border-dashed border-indigo-300 bg-indigo-50"></div>
            <span>)</span>
          </div>
        ) : (
          <div className="text-center font-medium text-indigo-800">Total = (1.50 × 4) + (1.20 × 3)</div>
        )}
      </div>

      {!showAnswer && (
        <div className="flex flex-wrap justify-center gap-2">
          <div className="rounded bg-indigo-100 px-2 py-1 text-indigo-800">1.50</div>
          <div className="rounded bg-indigo-100 px-2 py-1 text-indigo-800">4</div>
          <div className="rounded bg-indigo-100 px-2 py-1 text-indigo-800">1.20</div>
          <div className="rounded bg-indigo-100 px-2 py-1 text-indigo-800">3</div>
        </div>
      )}

      <div className="flex justify-center gap-2">
        {!showAnswer ? (
          <Button onClick={checkAnswer} className="bg-indigo-600 hover:bg-indigo-700">
            Check Answer
          </Button>
        ) : (
          <Button onClick={resetEquation} variant="outline" className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>
        )}
      </div>

      {isCorrect !== null && (
        <div className={`rounded-md p-3 ${isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
          {isCorrect ? (
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5" />
              <span>Correct! Great job!</span>
            </div>
          ) : (
            <div>Not quite right. Try again!</div>
          )}
        </div>
      )}
    </div>
  )
}
