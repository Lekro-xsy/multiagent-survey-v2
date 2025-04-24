"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CheckCircle, XCircle } from "lucide-react"

export default function Page7() {
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
      expression.replace(/\s/g, "").includes("(2.65*20)+(2.65*14)") ||
      expression.replace(/\s/g, "").includes("(2.65×20)+(2.65×14)") ||
      expression.replace(/\s/g, "").includes("2.65*20+2.65*14") ||
      expression.replace(/\s/g, "").includes("2.65×20+2.65×14")

    // Check calculations
    const calc1Correct = calculation1.includes("53") && calculation1.includes("2.65") && calculation1.includes("20")
    const calc2Correct = calculation2.includes("37.1") && calculation2.includes("2.65") && calculation2.includes("14")

    // Check total
    const totalCorrect = total.includes("90.1") || total.includes("90.10")

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
      <h2 className="text-2xl font-bold text-emerald-700">🔄 Another Successful Afternoon!</h2>

      <Card className="p-6">
        <div className="mb-6 rounded-lg bg-emerald-50 p-4">
          <h3 className="mb-2 text-lg font-semibold text-emerald-700">New Scenario:</h3>
          <p className="mb-4">
            Later, the salesman sold <span className="font-bold text-emerald-600">20 calculators</span> and
            <span className="font-bold text-emerald-600"> 14 pocket radios</span>. Find his commission using the same{" "}
            <span className="font-bold text-emerald-600">$2.65</span> per item.
          </p>
        </div>

        <div className="mb-6 space-y-4">
          <div>
            <label className="mb-2 block font-medium">Write the mathematical expression:</label>
            <div className="relative">
              <Input
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                placeholder="(2.65 × 20) + (2.65 × 14)"
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
              <p className="mt-1 text-sm text-red-500">Try again! The expression should be (2.65×20)+(2.65×14)</p>
            )}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-medium">Calculate: 2.65 × 20 =</label>
              <div className="relative">
                <Input
                  value={calculation1}
                  onChange={(e) => setCalculation1(e.target.value)}
                  placeholder="53.00"
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
              <label className="mb-2 block font-medium">Calculate: 2.65 × 14 =</label>
              <div className="relative">
                <Input
                  value={calculation2}
                  onChange={(e) => setCalculation2(e.target.value)}
                  placeholder="37.10"
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
            <label className="mb-2 block font-medium">Calculate the total commission:</label>
            <div className="relative">
              <Input
                value={total}
                onChange={(e) => setTotal(e.target.value)}
                placeholder="90.10"
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
              <p className="mt-1 text-sm text-red-500">The total should be 53.00 + 37.10 = 90.10</p>
            )}
          </div>
        </div>

        <div className="flex justify-center gap-4">
          {!submitted ? (
            <Button
              onClick={checkAnswer}
              className="bg-emerald-600 hover:bg-emerald-700"
              disabled={!expression || !calculation1 || !calculation2 || !total}
            >
              Submit Answer
            </Button>
          ) : (
            <Button onClick={resetForm} className="bg-emerald-600 hover:bg-emerald-700">
              Try Again
            </Button>
          )}
        </div>

        {submitted && feedback.expression && feedback.calculations && feedback.total && (
          <div className="mt-6 rounded-lg bg-green-50 p-4 text-center text-green-800">
            <h3 className="mb-2 text-lg font-semibold">Excellent! 🎉</h3>
            <p>You've correctly applied the same mathematical model to a new scenario.</p>
          </div>
        )}
      </Card>
    </div>
  )
}
