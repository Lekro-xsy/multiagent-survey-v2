"use client"

import { useState } from "react"
import { LessonLayout } from "@/components/lesson-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Package, Check, AlertCircle } from "lucide-react"
import Image from "next/image"

export default function Page8() {
  const [expression, setExpression] = useState("")
  const [answer, setAnswer] = useState("")
  const [explanation, setExplanation] = useState("")
  const [isExpressionCorrect, setIsExpressionCorrect] = useState<boolean | null>(null)
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null)
  const [isExplanationValid, setIsExplanationValid] = useState<boolean | null>(null)
  const [showSolution, setShowSolution] = useState(false)

  const checkAnswers = () => {
    // Check expression
    const expressionPattern = /5\.25\s*[×x*]\s*18\s*\+\s*5\.25\s*[×x*]\s*22/i
    setIsExpressionCorrect(expressionPattern.test(expression))

    // Check answer
    const numericAnswer = Number.parseFloat(answer.replace(/[^\d.]/g, ""))
    setIsAnswerCorrect(Math.abs(numericAnswer - 210) < 0.01)

    // Check explanation
    setIsExplanationValid(explanation.length >= 20)

    if (expressionPattern.test(expression) && Math.abs(numericAnswer - 210) < 0.01 && explanation.length >= 20) {
      setShowSolution(true)
    }
  }

  return (
    <LessonLayout pageNumber={8} totalPages={9} title="🚀 Switching Jobs: Same Math!">
      <div className="space-y-8">
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-teal-700">Far Transfer Problem</h2>

          <div className="mt-4 rounded-lg bg-orange-50 p-4 text-orange-800">
            <h3 className="text-xl font-semibold">New Context:</h3>
            <p className="mt-2 text-lg">
              A worker earns <span className="font-semibold">$5.25</span> for each delivery made. One day, they
              delivered <span className="font-semibold">18 packages</span> in the morning and
              <span className="font-semibold"> 22 packages</span> in the afternoon. How much did they earn?
            </p>
          </div>

          <div className="mt-6 space-y-6">
            <div className="relative mx-auto h-48 w-full overflow-hidden rounded-xl bg-gray-100 md:h-64">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <Image
                  src="/package-delivery.png"
                  alt="Delivery worker with packages and truck"
                  width={800}
                  height={256}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
                <h3 className="flex items-center text-lg font-semibold text-orange-700">
                  <Package className="mr-2 h-5 w-5" />
                  Delivery Information
                </h3>

                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Morning deliveries:</span>
                    <span>18 packages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Afternoon deliveries:</span>
                    <span>22 packages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Payment per delivery:</span>
                    <span>$5.25</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-purple-200 bg-purple-50 p-4">
                <h3 className="text-lg font-semibold text-purple-700">Your Task</h3>

                <div className="mt-3 space-y-2">
                  <p>Recognize the same mathematical structure as our previous problems.</p>
                  <p>Set up the expression and solve for the total earnings.</p>
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
                  placeholder="e.g., 5.25 × 18 + 5.25 × 22"
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
                  2. What are the total earnings?
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

              <div>
                <Label htmlFor="explanation" className="text-lg font-medium">
                  3. Explain how this problem is similar to the salesman problem:
                </Label>
                <Textarea
                  id="explanation"
                  value={explanation}
                  onChange={(e) => setExplanation(e.target.value)}
                  placeholder="Both problems involve..."
                  className="mt-2 min-h-24"
                />
                {isExplanationValid !== null && (
                  <div
                    className={`mt-1 flex items-center text-sm ${isExplanationValid ? "text-green-600" : "text-red-600"}`}
                  >
                    {isExplanationValid ? (
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

            <div className="flex justify-center">
              <Button
                onClick={checkAnswers}
                className="bg-purple-600 hover:bg-purple-700"
                disabled={!expression || !answer || !explanation}
              >
                Check My Answer
              </Button>
            </div>

            {showSolution && (
              <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                <h3 className="text-lg font-semibold text-green-700">Solution</h3>

                <div className="mt-3 space-y-3">
                  <div>
                    <p className="font-medium">Step 1: Calculate earnings from morning deliveries</p>
                    <div className="mt-1 flex items-center gap-2">
                      <span>5.25 × 18 = 94.50</span>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium">Step 2: Calculate earnings from afternoon deliveries</p>
                    <div className="mt-1 flex items-center gap-2">
                      <span>5.25 × 22 = 115.50</span>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium">Step 3: Add both earnings for the total</p>
                    <div className="mt-1 flex items-center gap-2">
                      <span>94.50 + 115.50 = 210.00</span>
                    </div>
                  </div>

                  <div className="rounded-lg bg-white p-3 text-center">
                    <p className="text-lg font-bold text-green-700">The worker earned $210.00 in total.</p>
                  </div>

                  <div className="rounded-lg bg-purple-100 p-3">
                    <p className="font-medium text-purple-700">Mathematical Pattern:</p>
                    <p className="mt-1">
                      Both problems follow the same structure: (rate × quantity1) + (rate × quantity2)
                    </p>
                    <p className="mt-1">
                      This pattern applies to many real-world situations where a fixed rate is applied to different
                      quantities.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>

        <div className="rounded-lg bg-blue-50 p-4 text-blue-800">
          <h3 className="font-semibold">Far Transfer:</h3>
          <p>
            Recognizing the same mathematical structure in completely different contexts is a powerful skill. This is
            called "far transfer" - applying your knowledge to new situations.
          </p>
        </div>
      </div>
    </LessonLayout>
  )
}
