"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"

import { PageLayout } from "@/components/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function TransferPage() {
  const [numerator, setNumerator] = useState("")
  const [denominator, setDenominator] = useState("")
  const [result, setResult] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const handleCheck = () => {
    const isNumeratorCorrect = numerator === "150" || numerator === "10 × 15" || numerator === "10*15"
    const isDenominatorCorrect = denominator === "25" || denominator === "10 + 15"
    const isResultCorrect = result === "6" || result === "6.0" || result === "6 minutes" || result === "6 min"

    setIsCorrect(isNumeratorCorrect && isDenominatorCorrect && isResultCorrect)
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold text-center">🔁 Try a New Cleaning Challenge!</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>New Problem</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-6 bg-blue-50 rounded-lg mb-6">
              <p className="text-lg">
                You can mow the lawn in <strong>10 minutes</strong>. Your sister can mow it in{" "}
                <strong>15 minutes</strong>. How long would it take if you both mow together?
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg mb-4">Set up the formula:</h3>
                <p className="mb-4">Time = (x × y) ÷ (x + y), where x = 10 and y = 15</p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="numerator">Numerator (x × y)</Label>
                    <Input
                      id="numerator"
                      value={numerator}
                      onChange={(e) => setNumerator(e.target.value)}
                      placeholder="10 × 15 = ?"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="denominator">Denominator (x + y)</Label>
                    <Input
                      id="denominator"
                      value={denominator}
                      onChange={(e) => setDenominator(e.target.value)}
                      placeholder="10 + 15 = ?"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="result">Final Answer (Time)</Label>
                <Input
                  id="result"
                  value={result}
                  onChange={(e) => setResult(e.target.value)}
                  placeholder="? minutes"
                  className="mt-1"
                />
              </div>

              <div className="text-center">
                <Button onClick={handleCheck} size="lg">
                  Check My Answer
                </Button>
              </div>

              {isCorrect !== null && (
                <div
                  className={`p-4 rounded-lg ${isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
                >
                  {isCorrect ? (
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold">Correct!</h3>
                        <p>Great job! You've correctly applied the formula:</p>
                        <div className="mt-2 p-2 bg-white rounded">
                          <p>Time = (10 × 15) ÷ (10 + 15)</p>
                          <p>Time = 150 ÷ 25</p>
                          <p>Time = 6 minutes</p>
                        </div>
                        <p className="mt-2">You've successfully transferred your understanding to a new problem!</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold">Not quite right</h3>
                        <p>Let's review the steps:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                          <li>Numerator: 10 × 15 = 150</li>
                          <li>Denominator: 10 + 15 = 25</li>
                          <li>Time = 150 ÷ 25 = 6 minutes</li>
                        </ul>
                        <p className="mt-2">Try again with these values!</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}
