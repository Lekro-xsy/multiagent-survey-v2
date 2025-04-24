"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

export function PageThree() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, boolean>>({})
  const [showFeedback, setShowFeedback] = useState(false)

  const examples = [
    { id: "ex1", expression: "2x + 99", isExpression: true },
    { id: "ex2", expression: "5y - 3", isExpression: true },
    { id: "ex3", expression: "2x + 99 = 250", isExpression: false },
    { id: "ex4", expression: "3(a + b)", isExpression: true },
    { id: "ex5", expression: "x² + 2x = 15", isExpression: false },
  ]

  const handleSelect = (id: string, isExpression: boolean) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [id]: isExpression,
    })
  }

  const checkAnswers = () => {
    setShowFeedback(true)
  }

  const resetQuiz = () => {
    setSelectedAnswers({})
    setShowFeedback(false)
  }

  const getScore = () => {
    let correct = 0
    examples.forEach((ex) => {
      if (selectedAnswers[ex.id] === ex.isExpression) {
        correct++
      }
    })
    return correct
  }

  return (
    <div className="space-y-6">
      <h1 className="text-center text-3xl font-bold text-sky-700">🧮 What Is an Algebraic Expression?</h1>

      <div className="rounded-lg bg-sky-50 p-6">
        <h2 className="mb-4 text-xl font-semibold text-sky-700">Definition:</h2>
        <p className="text-lg leading-relaxed">
          "An algebraic expression is a mathematical phrase that contains variables, numbers, and operations, but no
          equal sign."
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-sky-700">Examples:</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-4">
              <h3 className="mb-2 font-medium">Expressions:</h3>
              <ul className="space-y-2 pl-5">
                <li className="text-lg">2x + 99</li>
                <li className="text-lg">5y - 3</li>
                <li className="text-lg">3(a + b)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-4">
              <h3 className="mb-2 font-medium">Not Expressions (Equations):</h3>
              <ul className="space-y-2 pl-5">
                <li className="text-lg">2x + 99 = 250</li>
                <li className="text-lg">x² + 2x = 15</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="rounded-lg border border-sky-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-sky-700">Mini Quiz: Identify the Expressions</h2>
        <div className="space-y-3">
          {examples.map((ex) => (
            <div key={ex.id} className="flex items-center justify-between rounded-lg border p-3">
              <span className="text-lg font-medium">{ex.expression}</span>
              <div className="flex gap-2">
                {showFeedback ? (
                  <div className="flex items-center gap-2">
                    {selectedAnswers[ex.id] === ex.isExpression ? (
                      <span className="flex items-center gap-1 text-green-600">
                        <Check size={16} /> Correct
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-red-600">
                        <X size={16} /> Incorrect
                      </span>
                    )}
                  </div>
                ) : (
                  <>
                    <Button
                      variant={selectedAnswers[ex.id] === true ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleSelect(ex.id, true)}
                    >
                      Expression
                    </Button>
                    <Button
                      variant={selectedAnswers[ex.id] === false ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleSelect(ex.id, false)}
                    >
                      Not Expression
                    </Button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-4">
          {showFeedback ? (
            <>
              <div className="rounded-lg bg-sky-100 px-4 py-2 text-center">
                <p className="font-medium">
                  Your score: {getScore()}/{examples.length}
                </p>
              </div>
              <Button onClick={resetQuiz}>Try Again</Button>
            </>
          ) : (
            <Button onClick={checkAnswers} disabled={Object.keys(selectedAnswers).length < examples.length}>
              Check Answers
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
