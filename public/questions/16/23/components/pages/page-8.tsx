"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CheckCircle, XCircle } from "lucide-react"

export default function Page8() {
  const [expression, setExpression] = useState("")
  const [calculation1, setCalculation1] = useState("")
  const [calculation2, setCalculation2] = useState("")
  const [total, setTotal] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [feedback, setFeedback] = useState({
    expression: null,
    calculations: null,
    total: null,
  })

  const checkAnswer = () => {
    setSubmitted(true)

    // Check expression
    const expressionCorrect =
      expression.replace(/\s/g, "").includes("(1.75*25)+(1.75*30)") ||
      expression.replace(/\s/g, "").includes("(1.75×25)+(1.75×30)") ||
      expression.replace(/\s/g, "").includes("1.75*25+1.75*30") ||
      expression.replace(/\s/g, "").includes("1.75×25+1.75×30")

    // Check calculations
    const calc1Correct = calculation1.includes("43.75") && calculation1.includes("1.75") && calculation1.includes("25")
    const calc2Correct = calculation2.includes("52.5") && calculation2.includes("1.75") && calculation2.includes("30")

    // Check total
    const totalCorrect = total.includes("96.25")

    setFeedback({
      expression: expressionCorrect,
      calculations: calc1Correct && calc2Correct,
      total: totalCorrect,
    })
  }

  const resetForm = () => {
    setExpression("")
    setCalculation1("")
    setCalculation2("")
    setTotal("")
    setSubmitted(false)
    setFeedback({
      expression: null,
      calculations: null,
      total: null,
    })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-emerald-700">🚀 New Situation: Same Math Thinking!</h2>

      <Card className="p-6">
        <div className="mb-6 rounded-lg bg-amber-50 p-4">
          <h3 className="mb-2 text-lg font-semibold text-amber-700">New Scenario:</h3>
          <p className="mb-4">
            A baker earns <span className="font-bold text-amber-600">$1.75</span> for each loaf of bread sold. One
            morning, they sold <span className="font-bold text-amber-600">25 loaves of rye bread</span> and
            <span className="font-bold text-amber-600"> 30 loaves of wheat bread</span>. What was the total earning?
          </p>

          <div className="mt-4 rounded-lg bg-white p-3 shadow-sm">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Goal:</span> Identify the same structure: (unit price × quantity 1) + (unit
              price × quantity 2)
            </p>
          </div>
        </div>

        <div className="mb-6 space-y-4">
          <div>
            <label className="mb-2 block font-medium">Write the mathematical expression:</label>
            <div className="relative">
              <Input
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                placeholder="(1.75 × 25) + (1.75 × 30)"
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
              <p className="mt-1 text-sm text-red-500">Try again! The expression should be (1.75×25)+(1.75×30)</p>
            )}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-medium">Calculate: 1.75 × 25 =</label>
              <div className="relative">
                <Input
                  value={calculation1}
                  onChange={(e) => setCalculation1(e.target.value)}
                  placeholder="43.75"
                  className={`pr-10 ${
                    submitted && feedback.calculations !== null
                      ? feedback.calculations
                        ? "border-green-500 focus-visible:ring-green-500"
                        : "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }`}
                  disabled={submitted}
                />
                {submitted && feedback.calculations !== null && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    {feedback.calculations ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="mb-2 block font-medium">Calculate: 1.75 × 30 =</label>
              <div className="relative">
                <Input
                  value={calculation2}
                  onChange={(e) => setCalculation2(e.target.value)}
                  placeholder="52.50"
                  className={`pr-10 ${
                    submitted && feedback.calculations !== null
                      ? feedback.calculations
                        ? "border-green-500 focus-visible:ring-green-500"
                        : "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }`}
                  disabled={submitted}
                />
              </div>
            </div>
          </div>

          <div>
            <label className="mb-2 block font-medium">Calculate the total earnings:</label>
            <div className="relative">
              <Input
                value={total}
                onChange={(e) => setTotal(e.target.value)}
                placeholder="96.25"
                className={`pr-10 ${
                  submitted && feedback.total !== null
                    ? feedback.total
                      ? "border-green-500 focus-visible:ring-green-500"
                      : "border-red-500 focus-visible:ring-red-500"
                    : ""
                }`}
                disabled={submitted}
              />
              {submitted && feedback.total !== null && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {feedback.total ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                </div>
              )}
            </div>
            {submitted && !feedback.total && (
              <p className="mt-1 text-sm text-red-500">The total should be 43.75 + 52.50 = 96.25</p>
            )}
          </div>
        </div>

        <div className="flex justify-center gap-4">
          {!submitted ? (
            <Button
              onClick={checkAnswer}
              className="bg-amber-600 hover:bg-amber-700"
              disabled={!expression || !calculation1 || !calculation2 || !total}
            >
              Submit Answer
            </Button>
          ) : (
            <Button onClick={resetForm} className="bg-amber-600 hover:bg-amber-700">
              Try Again
            </Button>
          )}
        </div>

        {submitted && feedback.expression && feedback.calculations && feedback.total && (
          <div className="mt-6 rounded-lg bg-green-50 p-4 text-center text-green-800">
            <h3 className="mb-2 text-lg font-semibold">Amazing Transfer! 🌟</h3>
            <p>You've successfully applied the same mathematical structure to a completely different scenario!</p>
          </div>
        )}
      </Card>
    </div>
  )
}
