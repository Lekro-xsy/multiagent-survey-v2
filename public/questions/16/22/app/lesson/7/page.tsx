"use client"

import { useState } from "react"
import { LessonLayout } from "@/components/lesson-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, Radio, Check, AlertCircle } from "lucide-react"

export default function Page7() {
  const [expression, setExpression] = useState("")
  const [answer, setAnswer] = useState("")
  const [isExpressionCorrect, setIsExpressionCorrect] = useState<boolean | null>(null)
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null)
  const [showSolution, setShowSolution] = useState(false)

  const checkAnswers = () => {
    // Check expression
    const expressionPattern = /3\.15\s*[×x*]\s*15\s*\+\s*3\.15\s*[×x*]\s*10/i
    setIsExpressionCorrect(expressionPattern.test(expression))

    // Check answer
    const numericAnswer = Number.parseFloat(answer.replace(/[^\d.]/g, ""))
    setIsAnswerCorrect(Math.abs(numericAnswer - 78.75) < 0.01)

    if (expressionPattern.test(expression) && Math.abs(numericAnswer - 78.75) < 0.01) {
      setShowSolution(true)
    }
  }

  return (
    <LessonLayout pageNumber={7} totalPages={9} title="🔄 Afternoon Sales!">
      <div className="space-y-8">
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-teal-700">Near Transfer Problem</h2>

          <div className="mt-4 rounded-lg bg-yellow-50 p-4 text-yellow-800">
            <h3 className="text-xl font-semibold">New Scenario:</h3>
            <p className="mt-2 text-lg">
              In the afternoon, the salesman sold <span className="font-semibold">15 calculators</span> and{" "}
              <span className="font-semibold">10 pocket radios</span>. Find his total commission.
            </p>
          </div>

          <div className="mt-6 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-teal-200 bg-teal-50 p-4">
                <h3 className="flex items-center text-lg font-semibold text-teal-700">
                  <Calculator className="mr-2 h-5 w-5" />
                  Afternoon Sales
                </h3>

                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Calculators:</span>
                    <span>15</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Pocket Radios:</span>
                    <span>10</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Commission per item:</span>
                    <span>$3.15</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                <h3 className="flex items-center text-lg font-semibold text-emerald-700">
                  <Radio className="mr-2 h-5 w-5" />
                  Your Task
                </h3>

                <div className="mt-3 space-y-2">
                  <p>Set up the mathematical expression and solve for the total commission.</p>
                  <p>Use the same approach as the morning sales problem.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="expression" className="text-lg font-medium">
                  1. Write the mathematical expression:
                </Label>
                <Input
                  id="expression"
                  value={expression}
                  onChange={(e) => setExpression(e.target.value)}
                  placeholder="e.g., 3.15 × 15 + 3.15 × 10"
                  className="mt-2"
                />
                {isExpressionCorrect !== null && (
                  <div
                    className={`mt-1 flex items-center text-sm ${isExpressionCorrect ? "text-green-600" : "text-red-600"}`}
                  >
                    {isExpressionCorrect ? (
                      <>
                        <Check className="mr-1 h-4 w-4" />
                        <span>Correct expression!</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="mr-1 h-4 w-4" />
                        <span>Check your expression and try again.</span>
                      </>
                    )}
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="answer" className="text-lg font-medium">
                  2. What is the total commission?
                </Label>
                <Input
                  id="answer"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="$"
                  className="mt-2"
                />
                {isAnswerCorrect !== null && (
                  <div
                    className={`mt-1 flex items-center text-sm ${isAnswerCorrect ? "text-green-600" : "text-red-600"}`}
                  >
                    {isAnswerCorrect ? (
                      <>
                        <Check className="mr-1 h-4 w-4" />
                        <span>Correct answer!</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="mr-1 h-4 w-4" />
                        <span>Check your calculation and try again.</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={checkAnswers}
                className="bg-emerald-600 hover:bg-emerald-700"
                disabled={!expression || !answer}
              >
                Check My Answer
              </Button>
            </div>

            {showSolution && (
              <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                <h3 className="text-lg font-semibold text-green-700">Solution</h3>

                <div className="mt-3 space-y-3">
                  <div>
                    <p className="font-medium">Step 1: Calculate commission from calculators</p>
                    <div className="mt-1 flex items-center gap-2">
                      <span>3.15 × 15 = 47.25</span>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium">Step 2: Calculate commission from pocket radios</p>
                    <div className="mt-1 flex items-center gap-2">
                      <span>3.15 × 10 = 31.50</span>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium">Step 3: Add both commissions for the total</p>
                    <div className="mt-1 flex items-center gap-2">
                      <span>47.25 + 31.50 = 78.75</span>
                    </div>
                  </div>

                  <div className="rounded-lg bg-white p-3 text-center">
                    <p className="text-lg font-bold text-green-700">
                      The salesman earned $78.75 in total commission in the afternoon.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>

        <div className="rounded-lg bg-blue-50 p-4 text-blue-800">
          <h3 className="font-semibold">Pattern Recognition:</h3>
          <p>
            Notice how we used the same mathematical structure to solve this new problem. This is called "near transfer"
            - applying the same strategy to a similar situation.
          </p>
        </div>
      </div>
    </LessonLayout>
  )
}
