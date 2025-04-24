"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, XCircle } from "lucide-react"

export default function Page5() {
  const [expression, setExpression] = useState("")
  const [steps, setSteps] = useState("")
  const [explanation, setExplanation] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [feedback, setFeedback] = useState({
    expression: null,
    steps: null,
    explanation: null,
  })

  const checkAnswer = () => {
    setSubmitted(true)

    // Check expression
    const expressionCorrect =
      expression.replace(/\s/g, "").includes("(2.65*15)+(2.65*19)") ||
      expression.replace(/\s/g, "").includes("(2.65×15)+(2.65×19)") ||
      expression.replace(/\s/g, "").includes("2.65*15+2.65*19") ||
      expression.replace(/\s/g, "").includes("2.65×15+2.65×19")

    // Check steps - looking for calculations of 39.75 and 50.35
    const stepsCorrect = steps.includes("39.75") && steps.includes("50.35") && steps.includes("90.10")

    // Check explanation - looking for keywords
    const explanationCorrect =
      explanation.toLowerCase().includes("multiply") &&
      (explanation.toLowerCase().includes("add") || explanation.toLowerCase().includes("sum"))

    setFeedback({
      expression: expressionCorrect,
      steps: stepsCorrect,
      explanation: explanationCorrect,
    })
  }

  const resetForm = () => {
    setExpression("")
    setSteps("")
    setExplanation("")
    setSubmitted(false)
    setFeedback({
      expression: null,
      steps: null,
      explanation: null,
    })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-emerald-700">✍️ Solve It Yourself!</h2>

      <Card className="p-6">
        <div className="mb-6 space-y-4">
          <div>
            <label className="mb-2 block font-medium">Write the full mathematical expression:</label>
            <div className="relative">
              <Input
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                placeholder="(2.65 × 15) + (2.65 × 19)"
                className={`pr-10 ${
                  submitted && feedback.expression !== null
                    ? feedback.expression
                      ? "border-green-500 focus-visible:ring-green-500"
                      : "border-red-500 focus-visible:ring-red-500"
                    : ""
                }`}
                disabled={submitted}
              />
              {submitted && feedback.expression !== null && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {feedback.expression ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                </div>
              )}
            </div>
            {submitted && !feedback.expression && (
              <p className="mt-1 text-sm text-red-500">Try again! The expression should be (2.65×15)+(2.65×19)</p>
            )}
          </div>

          <div>
            <label className="mb-2 block font-medium">Show your step-by-step work:</label>
            <div className="relative">
              <Textarea
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                placeholder="Step 1: Calculate 2.65 × 15 = 39.75
Step 2: Calculate 2.65 × 19 = 50.35
Step 3: Add 39.75 + 50.35 = 90.10"
                className={`min-h-[120px] pr-10 ${
                  submitted && feedback.steps !== null
                    ? feedback.steps
                      ? "border-green-500 focus-visible:ring-green-500"
                      : "border-red-500 focus-visible:ring-red-500"
                    : ""
                }`}
                disabled={submitted}
              />
              {submitted && feedback.steps !== null && (
                <div className="absolute right-3 top-6">
                  {feedback.steps ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                </div>
              )}
            </div>
            {submitted && !feedback.steps && (
              <p className="mt-1 text-sm text-red-500">
                Make sure to show all calculations: 2.65×15=39.75, 2.65×19=50.35, 39.75+50.35=90.10
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block font-medium">Write a short explanation of your solution:</label>
            <div className="relative">
              <Textarea
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                placeholder="I multiplied the commission rate by the number of items sold for each type, then added the subtotals to find the total commission."
                className={`min-h-[100px] pr-10 ${
                  submitted && feedback.explanation !== null
                    ? feedback.explanation
                      ? "border-green-500 focus-visible:ring-green-500"
                      : "border-red-500 focus-visible:ring-red-500"
                    : ""
                }`}
                disabled={submitted}
              />
              {submitted && feedback.explanation !== null && (
                <div className="absolute right-3 top-6">
                  {feedback.explanation ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                </div>
              )}
            </div>
            {submitted && !feedback.explanation && (
              <p className="mt-1 text-sm text-red-500">
                Explain how you multiplied the rate by quantity and then added the subtotals.
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-center gap-4">
          {!submitted ? (
            <Button
              onClick={checkAnswer}
              className="bg-emerald-600 hover:bg-emerald-700"
              disabled={!expression || !steps || !explanation}
            >
              Submit Answer
            </Button>
          ) : (
            <Button onClick={resetForm} className="bg-emerald-600 hover:bg-emerald-700">
              Try Again
            </Button>
          )}
        </div>

        {submitted && feedback.expression && feedback.steps && feedback.explanation && (
          <div className="mt-6 rounded-lg bg-green-50 p-4 text-center text-green-800">
            <h3 className="mb-2 text-lg font-semibold">Great job! 🎉</h3>
            <p>You've correctly solved the problem and explained your thinking.</p>
          </div>
        )}
      </Card>
    </div>
  )
}
