"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, XCircle } from "lucide-react"

export default function StudentCostExpression() {
  const [costExpression, setCostExpression] = useState("")
  const [explanation, setExplanation] = useState("")
  const [isExpressionCorrect, setIsExpressionCorrect] = useState<boolean | null>(null)
  const [isExplanationSubmitted, setIsExplanationSubmitted] = useState(false)

  const checkExpression = () => {
    // Check if the expression is correct (allowing for different spacing and formatting)
    const normalizedExpression = costExpression.replace(/\s+/g, "").replace(/\$/g, "").toLowerCase()

    setIsExpressionCorrect(
      normalizedExpression === "2.59a+1.69(10-a)" ||
        normalizedExpression === "2.59×a+1.69×(10-a)" ||
        normalizedExpression === "2.59*a+1.69*(10-a)",
    )
  }

  const submitExplanation = () => {
    setIsExplanationSubmitted(true)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">✍️ Write the Total Cost Expression!</h1>
        <p className="text-lg">Now it's your turn to write the complete cost expression</p>
      </div>

      <Card className="p-6 bg-purple-50 border-purple-200">
        <h3 className="text-xl font-bold mb-4">Write the Total Cost Expression</h3>

        <div className="space-y-4">
          <div>
            <Label htmlFor="cost-expression" className="text-lg">
              Write the expression for the total cost:
            </Label>
            <div className="flex items-center mt-2">
              <p className="font-mono mr-2">Total Cost = </p>
              <div className="flex-1 relative">
                <Input
                  id="cost-expression"
                  value={costExpression}
                  onChange={(e) => setCostExpression(e.target.value)}
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
                Try again! Remember to multiply each price by its corresponding weight.
              </p>
            )}

            {isExpressionCorrect === true && (
              <p className="text-green-500 mt-2">Correct! The total cost is $2.59 × a + $1.69 × (10 - a).</p>
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
              placeholder="To find the total cost, I multiplied each price by its weight..."
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
          <p>That's right! To find the total cost, we:</p>
          <ol className="list-decimal pl-6 mt-2 space-y-1">
            <li>Multiply the price of almonds ($2.59) by the pounds of almonds (a)</li>
            <li>Multiply the price of peanuts ($1.69) by the pounds of peanuts (10 - a)</li>
            <li>Add these two costs together to get the total cost</li>
          </ol>
          <p className="mt-4">This is how we model real-world situations with algebra!</p>
        </Card>
      )}
    </div>
  )
}
