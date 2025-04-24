"use client"

import { useState } from "react"
import { Check, X, HelpCircle } from "lucide-react"

import { PageLayout } from "@/components/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function FarTransferPage() {
  const [formula, setFormula] = useState("")
  const [calculation, setCalculation] = useState("")
  const [answer, setAnswer] = useState("")
  const [reasoning, setReasoning] = useState("")
  const [showHint, setShowHint] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  const isFormulaCorrect =
    formula.replace(/\s+/g, "").includes("(12×16)÷(12+16)") ||
    formula.replace(/\s+/g, "").includes("(12*16)/(12+16)") ||
    formula.replace(/\s+/g, "").includes("xy/(x+y)") ||
    formula.replace(/\s+/g, "").includes("(xy)/(x+y)")

  const isCalculationCorrect =
    calculation.replace(/\s+/g, "").includes("192÷28") ||
    calculation.replace(/\s+/g, "").includes("192/28") ||
    calculation.replace(/\s+/g, "").includes("6.857")

  const isAnswerCorrect =
    answer.includes("6.86") ||
    answer.includes("6.857") ||
    answer.includes("6.9") ||
    answer.includes("7") ||
    answer.toLowerCase().includes("minutes")

  const allCorrect = isFormulaCorrect && isCalculationCorrect && isAnswerCorrect

  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold text-center">🚀 Same Math, Different World!</h1>

        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>New Scenario</CardTitle>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon">
                  <HelpCircle className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-2">
                  <h4 className="font-medium">Hint</h4>
                  <p className="text-sm">
                    Think about how this problem is similar to the sweeping and mowing problems. The faucets are
                    "working together" to fill the bathtub, just like people working together on a task.
                  </p>
                </div>
              </PopoverContent>
            </Popover>
          </CardHeader>
          <CardContent>
            <div className="p-6 bg-purple-50 rounded-lg mb-6">
              <p className="text-lg">
                A faucet can fill a bathtub in <strong>12 minutes</strong>. A second faucet can fill the same bathtub in{" "}
                <strong>16 minutes</strong>. If both faucets are turned on, how long does it take to fill the bathtub?
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="formula" className="text-lg font-medium">
                  Write the formula you'll use
                </Label>
                <Input
                  id="formula"
                  value={formula}
                  onChange={(e) => setFormula(e.target.value)}
                  placeholder="Time = ?"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="calculation" className="text-lg font-medium">
                  Show your calculation
                </Label>
                <Input
                  id="calculation"
                  value={calculation}
                  onChange={(e) => setCalculation(e.target.value)}
                  placeholder="Step by step..."
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="answer" className="text-lg font-medium">
                  Your final answer
                </Label>
                <Input
                  id="answer"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="? minutes"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="reasoning" className="text-lg font-medium">
                  Explain your reasoning
                </Label>
                <Textarea
                  id="reasoning"
                  value={reasoning}
                  onChange={(e) => setReasoning(e.target.value)}
                  placeholder="Explain why this problem uses the same mathematical model as the previous problems..."
                  className="mt-2"
                  rows={4}
                />
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setShowHint(!showHint)}>
                  {showHint ? "Hide Hint" : "Show Hint"}
                </Button>

                <Button onClick={handleSubmit} size="lg">
                  Submit Answer
                </Button>
              </div>

              {showHint && (
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium mb-2">Hint:</h3>
                  <p>
                    This is still a "working together" problem! The faucets are working together to fill the bathtub,
                    just like you and your brother were working together to sweep the floor.
                  </p>
                  <p className="mt-2">
                    Remember the formula: Time = (x × y) ÷ (x + y), where x and y are the individual times.
                  </p>
                </div>
              )}

              {isSubmitted && (
                <div
                  className={`p-4 rounded-lg ${allCorrect ? "bg-green-50 border border-green-200" : "bg-yellow-50 border border-yellow-200"}`}
                >
                  <h3 className="font-bold text-lg mb-2">{allCorrect ? "Excellent work!" : "Almost there!"}</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      {isFormulaCorrect ? (
                        <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      )}
                      <div>
                        <p className="font-medium">Formula:</p>
                        <p>The correct formula is Time = (12 × 16) ÷ (12 + 16) = 192 ÷ 28 ≈ 6.86 minutes</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      {isCalculationCorrect ? (
                        <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      )}
                      <div>
                        <p className="font-medium">Calculation:</p>
                        <p>
                          Numerator: 12 × 16 = 192
                          <br />
                          Denominator: 12 + 16 = 28
                          <br />
                          Result: 192 ÷ 28 = 6.857... minutes
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      {isAnswerCorrect ? (
                        <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      )}
                      <div>
                        <p className="font-medium">Answer:</p>
                        <p>The bathtub will fill in approximately 6.86 minutes, or about 6 minutes and 52 seconds.</p>
                      </div>
                    </div>

                    <div>
                      <p className="font-medium">Key insight:</p>
                      <p>
                        This problem demonstrates that the "working together" formula applies to many different
                        scenarios - not just people working, but also machines, faucets, or anything that completes a
                        task at a certain rate.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}
