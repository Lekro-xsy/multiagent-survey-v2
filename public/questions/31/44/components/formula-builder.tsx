"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

interface FormulaBuilderProps {
  steps: {
    label: string
    formula: string
    answer: string | number
    hint?: string
  }[]
}

export function FormulaBuilder({ steps }: FormulaBuilderProps) {
  const [answers, setAnswers] = useState<(string | null)[]>(Array(steps.length).fill(null))
  const [showHints, setShowHints] = useState<boolean[]>(Array(steps.length).fill(false))
  const [feedback, setFeedback] = useState<("correct" | "incorrect" | null)[]>(Array(steps.length).fill(null))

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers]
    newAnswers[index] = value
    setAnswers(newAnswers)
  }

  const checkAnswer = (index: number) => {
    const userAnswer = answers[index]
    const correctAnswer = steps[index].answer.toString()

    const newFeedback = [...feedback]
    newFeedback[index] = userAnswer === correctAnswer ? "correct" : "incorrect"
    setFeedback(newFeedback)
  }

  const toggleHint = (index: number) => {
    const newShowHints = [...showHints]
    newShowHints[index] = !newShowHints[index]
    setShowHints(newShowHints)
  }

  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-lg">{step.label}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-md font-mono text-lg">{step.formula}</div>

              <div className="flex flex-col gap-2">
                <Label htmlFor={`answer-${index}`}>Your Answer:</Label>
                <div className="flex gap-2">
                  <Input
                    id={`answer-${index}`}
                    value={answers[index] || ""}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    className={
                      feedback[index] === "correct"
                        ? "border-green-500"
                        : feedback[index] === "incorrect"
                          ? "border-red-500"
                          : ""
                    }
                  />
                  <Button onClick={() => checkAnswer(index)}>Check</Button>
                </div>

                {feedback[index] && (
                  <div
                    className={`flex items-center gap-2 mt-2 ${
                      feedback[index] === "correct" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {feedback[index] === "correct" ? (
                      <>
                        <Check className="h-5 w-5" />
                        <span>Correct!</span>
                      </>
                    ) : (
                      <>
                        <X className="h-5 w-5" />
                        <span>Try again</span>
                      </>
                    )}
                  </div>
                )}

                {step.hint && (
                  <div className="mt-2">
                    <Button variant="outline" size="sm" onClick={() => toggleHint(index)}>
                      {showHints[index] ? "Hide Hint" : "Show Hint"}
                    </Button>
                    {showHints[index] && (
                      <div className="mt-2 p-2 bg-yellow-50 text-yellow-800 rounded">{step.hint}</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
