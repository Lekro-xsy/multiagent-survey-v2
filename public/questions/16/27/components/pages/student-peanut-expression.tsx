"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, XCircle } from "lucide-react"

export default function StudentPeanutExpression() {
  const [peanutExpression, setPeanutExpression] = useState("")
  const [explanation, setExplanation] = useState("")
  const [isExpressionCorrect, setIsExpressionCorrect] = useState<boolean | null>(null)
  const [isExplanationSubmitted, setIsExplanationSubmitted] = useState(false)

  const checkExpression = () => {
    // Check if the expression is correct (allowing for different spacing)
    const normalizedExpression = peanutExpression.replace(/\s+/g, "").toLowerCase()
    setIsExpressionCorrect(
      normalizedExpression === "10-a" || normalizedExpression === "10-a" || normalizedExpression === "(10-a)",
    )
  }

  const submitExplanation = () => {
    setIsExplanationSubmitted(true)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">✍️ Your Turn: Write and Explain!</h1>
        <p className="text-lg">Now it's your turn to write the expression and explain your thinking</p>
      </div>

      <Card className="p-6 bg-purple-50 border-purple-200">
        <h3 className="text-xl font-bold mb-4">Write the Expression for Peanuts' Weight</h3>

        <div className="space-y-4">
          <div>
            <Label htmlFor="peanut-expression" className="text-lg">
              Write the expression for peanuts' weight:
            </Label>
            <div className="flex items-center mt-2">
              <p className="font-mono mr-2">Peanuts weight = </p>
              <div className="flex-1 relative">
                <Input
                  id="peanut-expression"
                  value={peanutExpression}
                  onChange={(e) => setPeanutExpression(e.target.value)}
                  placeholder="Enter your expression"
                  className="pr-10"
                />
                {isExpressionCorrect !== null && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    {isExpressionCorrect ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                )}
              </div>
              <Button onClick={checkExpression} className="ml-2" variant="outline">
                Check
              </Button>
            </div>

            {isExpressionCorrect === false && (
              <p className="text-red-500 mt-2">
                Try again! Remember, we need to express the weight of peanuts in terms of a.
              </p>
            )}

            {isExpressionCorrect === true && (
              <p className="text-green-500 mt-2">Correct! The peanuts' weight is 10 - a pounds.</p>
            )}
          </div>

          <div className="mt-6">
            <Label htmlFor="explanation" className="text-lg">
              Explain your thinking:
            </Label>
            <Textarea
              id="explanation"
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              placeholder="Since the total is 10 pounds and almonds weigh a pounds, peanuts must weigh..."
              className="mt-2"
              rows={3}
            />
            <Button
              onClick={submitExplanation}
              className="mt-2"
              disabled={explanation.length < 10 || !isExpressionCorrect}
            >
              Submit Explanation
            </Button>
          </div>
        </div>
      </Card>

      {isExplanationSubmitted && (
        <Card className="p-6 bg-green-50 border-green-200">
          <h3 className="text-lg font-bold mb-2">Great Explanation!</h3>
          <p>
            That's right! Since the total mix weighs 10 pounds and the almonds weigh a pounds, the peanuts must weigh
            (10 - a) pounds to make up the difference.
          </p>
          <p className="mt-2">
            This is a common pattern in algebra: when you know the total and one part, you can find the other part by
            subtracting.
          </p>
        </Card>
      )}
    </div>
  )
}
