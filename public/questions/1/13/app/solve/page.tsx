"use client"

import { useState } from "react"
import { Check, X, HelpCircle } from "lucide-react"

import { PageLayout } from "@/components/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function SolvePage() {
  const [expression, setExpression] = useState("")
  const [numerator, setNumerator] = useState("")
  const [denominator, setDenominator] = useState("")
  const [finalAnswer, setFinalAnswer] = useState("")
  const [showHints, setShowHints] = useState(false)

  const [expressionCorrect, setExpressionCorrect] = useState<boolean | null>(null)
  const [numeratorCorrect, setNumeratorCorrect] = useState<boolean | null>(null)
  const [denominatorCorrect, setDenominatorCorrect] = useState<boolean | null>(null)
  const [finalAnswerCorrect, setFinalAnswerCorrect] = useState<boolean | null>(null)

  const handleCheckExpression = () => {
    const isCorrect =
      expression.replace(/\s+/g, "") === "(6×8)÷(6+8)" ||
      expression.replace(/\s+/g, "") === "(6*8)/(6+8)" ||
      expression.replace(/\s+/g, "") === "(6×8)/(6+8)" ||
      expression.replace(/\s+/g, "") === "(6*8)÷(6+8)" ||
      expression.replace(/\s+/g, "") === "48÷14" ||
      expression.replace(/\s+/g, "") === "48/14"
    setExpressionCorrect(isCorrect)
  }

  const handleCheckNumerator = () => {
    const isCorrect = numerator.replace(/\s+/g, "") === "48"
    setNumeratorCorrect(isCorrect)
  }

  const handleCheckDenominator = () => {
    const isCorrect = denominator.replace(/\s+/g, "") === "14"
    setDenominatorCorrect(isCorrect)
  }

  const handleCheckFinalAnswer = () => {
    const isCorrect =
      finalAnswer.replace(/\s+/g, "") === "3.43" ||
      finalAnswer.replace(/\s+/g, "") === "3.428" ||
      finalAnswer.replace(/\s+/g, "") === "3.4285" ||
      finalAnswer.replace(/\s+/g, "") === "3.42857" ||
      finalAnswer.replace(/\s+/g, "") === "3.428571" ||
      finalAnswer.replace(/\s+/g, "") === "3.4285714" ||
      finalAnswer.replace(/\s+/g, "") === "3.42857143" ||
      finalAnswer.replace(/\s+/g, "") === "24/7" ||
      finalAnswer.replace(/\s+/g, "") === "3+3/7" ||
      finalAnswer.replace(/\s+/g, "") === "3minutes26seconds"
    setFinalAnswerCorrect(isCorrect)
  }

  const toggleHints = () => {
    setShowHints(!showHints)
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold text-center">✍️ Solve It Yourself!</h1>

        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Work Through the Solution</CardTitle>
            <Button variant="outline" onClick={toggleHints} className="gap-2">
              <HelpCircle className="h-4 w-4" />
              {showHints ? "Hide Hints" : "Show Hints"}
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <Label htmlFor="expression" className="text-lg font-medium">
                  Step 1: Write the substituted expression
                </Label>
                {showHints && (
                  <p className="text-sm text-muted-foreground mt-1 mb-2">
                    Hint: Replace x with 6 and y with 8 in the formula Time = (x × y) ÷ (x + y)
                  </p>
                )}
                <div className="flex items-center gap-2 mt-2">
                  <Input
                    id="expression"
                    value={expression}
                    onChange={(e) => setExpression(e.target.value)}
                    placeholder="(6 × 8) ÷ (6 + 8)"
                  />
                  <Button onClick={handleCheckExpression} variant="outline">
                    Check
                  </Button>
                  {expressionCorrect !== null && (
                    <span>
                      {expressionCorrect ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <Label htmlFor="numerator" className="text-lg font-medium">
                    Step 2a: Calculate the numerator
                  </Label>
                  {showHints && <p className="text-sm text-muted-foreground mt-1 mb-2">Hint: Multiply 6 × 8</p>}
                  <div className="flex items-center gap-2 mt-2">
                    <Input
                      id="numerator"
                      value={numerator}
                      onChange={(e) => setNumerator(e.target.value)}
                      placeholder="6 × 8 = ?"
                    />
                    <Button onClick={handleCheckNumerator} variant="outline">
                      Check
                    </Button>
                    {numeratorCorrect !== null && (
                      <span>
                        {numeratorCorrect ? (
                          <Check className="h-5 w-5 text-green-500" />
                        ) : (
                          <X className="h-5 w-5 text-red-500" />
                        )}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="denominator" className="text-lg font-medium">
                    Step 2b: Calculate the denominator
                  </Label>
                  {showHints && <p className="text-sm text-muted-foreground mt-1 mb-2">Hint: Add 6 + 8</p>}
                  <div className="flex items-center gap-2 mt-2">
                    <Input
                      id="denominator"
                      value={denominator}
                      onChange={(e) => setDenominator(e.target.value)}
                      placeholder="6 + 8 = ?"
                    />
                    <Button onClick={handleCheckDenominator} variant="outline">
                      Check
                    </Button>
                    {denominatorCorrect !== null && (
                      <span>
                        {denominatorCorrect ? (
                          <Check className="h-5 w-5 text-green-500" />
                        ) : (
                          <X className="h-5 w-5 text-red-500" />
                        )}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="final-answer" className="text-lg font-medium">
                  Step 3: Calculate the final answer
                </Label>
                {showHints && (
                  <p className="text-sm text-muted-foreground mt-1 mb-2">
                    Hint: Divide 48 ÷ 14 (you can use a calculator)
                  </p>
                )}
                <div className="flex items-center gap-2 mt-2">
                  <Input
                    id="final-answer"
                    value={finalAnswer}
                    onChange={(e) => setFinalAnswer(e.target.value)}
                    placeholder="48 ÷ 14 = ?"
                  />
                  <Button onClick={handleCheckFinalAnswer} variant="outline">
                    Check
                  </Button>
                  {finalAnswerCorrect !== null && (
                    <span>
                      {finalAnswerCorrect ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="explanation" className="text-lg font-medium">
                  Explain your work (optional)
                </Label>
                <Textarea
                  id="explanation"
                  placeholder="Explain how you solved this problem..."
                  className="mt-2"
                  rows={4}
                />
              </div>

              {expressionCorrect && numeratorCorrect && denominatorCorrect && finalAnswerCorrect && (
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-bold text-lg">Great job!</h3>
                  <p>
                    You've correctly solved the problem. The answer is approximately 3.43 minutes, or about 3 minutes
                    and 26 seconds.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}
