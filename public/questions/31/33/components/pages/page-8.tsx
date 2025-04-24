"use client"

import { useState } from "react"
import { RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MathEquation } from "@/components/math-equation"

export default function Page8() {
  const [equation, setEquation] = useState("")
  const [explanation, setExplanation] = useState("")
  const [checked, setChecked] = useState(false)
  const [equationCorrect, setEquationCorrect] = useState(false)
  const [explanationCorrect, setExplanationCorrect] = useState(false)

  const correctEquations = ["C = 0.50 + 0.35(x - 1)", "C = 0.15 + 0.35x", "C = 0.35x + 0.15", "C = 0.35x - 0.35 + 0.50"]

  const handleCheck = () => {
    setChecked(true)

    // Check if equation is correct (allowing for different forms)
    const cleanedEquation = equation.replace(/\s+/g, "").toLowerCase()
    const isEquationCorrect = correctEquations.some((eq) => cleanedEquation === eq.replace(/\s+/g, "").toLowerCase())
    setEquationCorrect(isEquationCorrect)

    // Check if explanation mentions key concepts
    const explanationLower = explanation.toLowerCase()
    const hasFixedCost = explanationLower.includes("fixed") || explanationLower.includes("first pound")
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
            <RefreshCw className="mr-2 h-6 w-6 text-teal-600" />
            Try a Similar Shipping Problem!
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="mb-6 rounded-lg bg-teal-50 p-4">
            <h3 className="mb-4 text-center text-lg font-medium text-teal-800">New Scenario</h3>
            <p className="text-lg">
              A courier charges <span className="font-medium text-teal-700">$0.50 for the first pound</span> and{" "}
              <span className="font-medium text-teal-700">$0.35 for each additional pound</span>.
            </p>
            <p className="mt-2 text-lg">Write an equation for total cost C based on x pounds shipped.</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <Label htmlFor="equation" className="text-lg">
                Write the equation for the total cost C:
              </Label>
              <Input
                id="equation"
                placeholder="C = ..."
                value={equation}
                onChange={(e) => setEquation(e.target.value)}
                className={checked ? (equationCorrect ? "border-green-500" : "border-red-500") : ""}
                disabled={checked && equationCorrect && explanationCorrect}
              />
              {checked && !equationCorrect && (
                <p className="text-sm text-red-600">
                  Your equation isn't quite right. Remember the fixed cost for the first pound and the variable cost for
                  additional pounds.
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
                  You've correctly applied the same mathematical structure to a new problem. This shows you understand
                  the underlying pattern!
                </p>
                <div className="mt-4 rounded-lg bg-white p-3">
                  <h4 className="mb-2 font-medium text-teal-700">Solution:</h4>
                  <MathEquation equation="C = 0.50 + 0.35(x - 1)" />
                  <p className="mt-2">Which simplifies to:</p>
                  <MathEquation equation="C = 0.15 + 0.35x" />
                  <p className="mt-2 text-sm text-gray-600">Domain: x ∈ ℤ, x ≥ 1</p>
                </div>
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
                    Great job! Continue to the next page to try a different context with the same mathematical
                    structure.
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
