"use client"

import { useState } from "react"
import { PenLine } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Page5() {
  const [equation, setEquation] = useState("")
  const [explanation, setExplanation] = useState("")
  const [checked, setChecked] = useState(false)
  const [equationCorrect, setEquationCorrect] = useState(false)
  const [explanationCorrect, setExplanationCorrect] = useState(false)

  const correctEquations = ["P = 0.43 + 0.29(x - 1)", "P = 0.14 + 0.29x", "P = 0.29x + 0.14", "P = 0.29x - 0.29 + 0.43"]

  const handleCheck = () => {
    setChecked(true)

    // Check if equation is correct (allowing for different forms)
    const cleanedEquation = equation.replace(/\s+/g, "").toLowerCase()
    const isEquationCorrect = correctEquations.some((eq) => cleanedEquation === eq.replace(/\s+/g, "").toLowerCase())
    setEquationCorrect(isEquationCorrect)

    // Check if explanation mentions key concepts
    const explanationLower = explanation.toLowerCase()
    const hasFixedCost = explanationLower.includes("fixed") || explanationLower.includes("first ounce")
    const hasVariableCost = explanationLower.includes("variable") || explanationLower.includes("additional")
    const hasSubtractOne =
      explanationLower.includes("x-1") ||
      explanationLower.includes("x - 1") ||
      explanationLower.includes("subtract") ||
      explanationLower.includes("minus one")

    setExplanationCorrect(hasFixedCost && hasVariableCost && hasSubtractOne)
  }

  const handleReset = () => {
    setEquation("")
    setExplanation("")
    setChecked(false)
    setEquationCorrect(false)
    setExplanationCorrect(false)
  }

  return (
    <div className="space-y-6">
      <Card className="border-2 border-teal-100 shadow-md">
        <CardHeader className="bg-gradient-to-r from-teal-50 to-emerald-50">
          <CardTitle className="flex items-center text-2xl text-teal-800">
            <PenLine className="mr-2 h-6 w-6 text-teal-600" />
            Your Turn: Write and Explain
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="mb-6 text-lg">
            Now it's your turn to write the complete equation for the shipping cost and explain your reasoning.
          </p>

          <div className="space-y-6">
            <div className="space-y-4">
              <Label htmlFor="equation" className="text-lg">
                Write the equation for the total price P:
              </Label>
              <Input
                id="equation"
                placeholder="P = ..."
                value={equation}
                onChange={(e) => setEquation(e.target.value)}
                className={checked ? (equationCorrect ? "border-green-500" : "border-red-500") : ""}
                disabled={checked && equationCorrect && explanationCorrect}
              />
              {checked && !equationCorrect && (
                <p className="text-sm text-red-600">
                  Your equation isn't quite right. Remember the fixed cost for the first ounce and the variable cost for
                  additional ounces.
                </p>
              )}
            </div>

            <div className="space-y-4">
              <Label htmlFor="explanation" className="text-lg">
                Explain your reasoning:
              </Label>
              <Textarea
                id="explanation"
                placeholder="The equation represents..."
                rows={4}
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                className={checked ? (explanationCorrect ? "border-green-500" : "border-red-500") : ""}
                disabled={checked && equationCorrect && explanationCorrect}
              />
              {checked && !explanationCorrect && (
                <p className="text-sm text-red-600">
                  Your explanation should mention the fixed cost, variable cost, and why we subtract 1 from x.
                </p>
              )}
            </div>

            {checked && equationCorrect && explanationCorrect && (
              <div className="rounded-lg bg-green-100 p-4">
                <h3 className="mb-2 font-medium text-green-800">Excellent work!</h3>
                <p>
                  You've correctly written and explained the shipping cost equation. Your understanding of how to model
                  this real-world situation mathematically is spot on!
                </p>
              </div>
            )}

            <div className="flex justify-center">
              {!checked ? (
                <Button
                  onClick={handleCheck}
                  className="bg-teal-600 hover:bg-teal-700"
                  disabled={!equation || !explanation}
                >
                  Check My Answer
                </Button>
              ) : !(equationCorrect && explanationCorrect) ? (
                <Button onClick={handleReset} variant="outline">
                  Try Again
                </Button>
              ) : (
                <div className="rounded-lg bg-teal-50 p-4 text-center">
                  <p className="font-medium text-teal-800">
                    You've mastered this concept! Continue to the next page to explore the domain of this equation.
                  </p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
