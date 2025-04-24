"use client"

import { useState } from "react"
import { LessonLayout } from "@/components/lesson-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check, AlertCircle } from "lucide-react"

export default function Page5() {
  const [expression, setExpression] = useState("")
  const [calculation, setCalculation] = useState("")
  const [reasoning, setReasoning] = useState("")
  const [isExpressionCorrect, setIsExpressionCorrect] = useState<boolean | null>(null)
  const [isCalculationCorrect, setIsCalculationCorrect] = useState<boolean | null>(null)
  const [isReasoningValid, setIsReasoningValid] = useState<boolean | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const checkAnswers = () => {
    // Check expression
    const expressionPattern = /3\.15\s*[×x*]\s*12\s*\+\s*3\.15\s*[×x*]\s*16/i
    setIsExpressionCorrect(expressionPattern.test(expression))

    // Check calculation
    const calculationLines = calculation.split("\n").map((line) => line.trim())
    const hasFirstStep = calculationLines.some((line) => /3\.15\s*[×x*]\s*12\s*=\s*37\.8/i.test(line))
    const hasSecondStep = calculationLines.some((line) => /3\.15\s*[×x*]\s*16\s*=\s*50\.4/i.test(line))
    const hasThirdStep = calculationLines.some((line) => /37\.8\s*\+\s*50\.4\s*=\s*88\.2/i.test(line))
    setIsCalculationCorrect(hasFirstStep && hasSecondStep && hasThirdStep)

    // Check reasoning
    setIsReasoningValid(reasoning.length >= 20)

    setShowFeedback(true)
  }

  const allCorrect = isExpressionCorrect && isCalculationCorrect && isReasoningValid

  return (
    <LessonLayout pageNumber={5} totalPages={9} title="✍️ Now You Solve It!">
      <div className="space-y-8">
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-teal-700">Your Turn to Solve</h2>

          <p className="mt-4 text-lg">
            Now it's your turn to write out the full mathematical expression and solve the problem step by step.
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <Label htmlFor="expression" className="text-lg font-medium">
                1. Write the full mathematical expression:
              </Label>
              <Input
                id="expression"
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                placeholder="e.g., 3.15 × 12 + 3.15 × 16"
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
              <Label htmlFor="calculation" className="text-lg font-medium">
                2. Calculate step-by-step:
              </Label>
              <Textarea
                id="calculation"
                value={calculation}
                onChange={(e) => setCalculation(e.target.value)}
                placeholder="Step 1: 3.15 × 12 = 37.80&#10;Step 2: 3.15 × 16 = 50.40&#10;Step 3: 37.80 + 50.40 = 88.20"
                className="mt-2 min-h-32"
              />
              {isCalculationCorrect !== null && (
                <div
                  className={`mt-1 flex items-center text-sm ${isCalculationCorrect ? "text-green-600" : "text-red-600"}`}
                >
                  {isCalculationCorrect ? (
                    <>
                      <Check className="mr-1 h-4 w-4" />
                      <span>Correct calculation steps!</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="mr-1 h-4 w-4" />
                      <span>Make sure to show all steps clearly.</span>
                    </>
                  )}
                </div>
              )}
            </div>

            <div>
              <Label htmlFor="reasoning" className="text-lg font-medium">
                3. Explain your reasoning:
              </Label>
              <Textarea
                id="reasoning"
                value={reasoning}
                onChange={(e) => setReasoning(e.target.value)}
                placeholder="I multiplied to find subtotal commissions, then added them for the total."
                className="mt-2 min-h-24"
              />
              {isReasoningValid !== null && (
                <div
                  className={`mt-1 flex items-center text-sm ${isReasoningValid ? "text-green-600" : "text-red-600"}`}
                >
                  {isReasoningValid ? (
                    <>
                      <Check className="mr-1 h-4 w-4" />
                      <span>Good explanation!</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="mr-1 h-4 w-4" />
                      <span>Please provide a more detailed explanation.</span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              onClick={checkAnswers}
              className="bg-emerald-600 hover:bg-emerald-700"
              disabled={!expression || !calculation || !reasoning}
            >
              Check My Work
            </Button>
          </div>

          {showFeedback && allCorrect && (
            <div className="mt-4 rounded-lg bg-green-100 p-4 text-green-800">
              <h3 className="font-semibold">Excellent work!</h3>
              <p>You've correctly set up the expression, calculated the answer, and explained your reasoning.</p>
              <p className="mt-2">Continue to the next page to see the full solution and explanation.</p>
            </div>
          )}
        </Card>

        <div className="rounded-lg bg-blue-50 p-4 text-blue-800">
          <h3 className="font-semibold">Learning Tip:</h3>
          <p>
            Writing out your mathematical thinking step by step helps you organize your thoughts and avoid mistakes.
          </p>
        </div>
      </div>
    </LessonLayout>
  )
}
