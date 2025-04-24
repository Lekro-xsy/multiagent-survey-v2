"use client"

import { useState } from "react"
import { Rocket } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MathEquation } from "@/components/math-equation"

export default function Page9() {
  const [equation, setEquation] = useState("")
  const [explanation, setExplanation] = useState("")
  const [checked, setChecked] = useState(false)
  const [equationCorrect, setEquationCorrect] = useState(false)
  const [explanationCorrect, setExplanationCorrect] = useState(false)

  const correctEquations = ["T = 5 + 3(x - 1)", "T = 2 + 3x", "T = 3x + 2", "T = 3x - 3 + 5"]

  const handleCheck = () => {
    setChecked(true)

    // Check if equation is correct (allowing for different forms)
    const cleanedEquation = equation.replace(/\s+/g, "").toLowerCase()
    const isEquationCorrect = correctEquations.some((eq) => cleanedEquation === eq.replace(/\s+/g, "").toLowerCase())
    setEquationCorrect(isEquationCorrect)

    // Check if explanation mentions key concepts
    const explanationLower = explanation.toLowerCase()
    const hasFixedCost = explanationLower.includes("fixed") || explanationLower.includes("first ride")
    const hasVariableCost = explanationLower.includes("variable") || explanationLower.includes("additional")
    const hasSameStructure =
      explanationLower.includes("same") ||
      explanationLower.includes("similar") ||
      explanationLower.includes("pattern") ||
      explanationLower.includes("structure")

    setExplanationCorrect(hasFixedCost && hasVariableCost && hasSameStructure)
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
            <Rocket className="mr-2 h-6 w-6 text-teal-600" />
            Different Story, Same Math!
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="mb-6 rounded-lg bg-teal-50 p-4">
            <h3 className="mb-4 text-center text-lg font-medium text-teal-800">New Scenario</h3>
            <p className="text-lg">
              An amusement park charges <span className="font-medium text-teal-700">$5 for the first ride</span> and{" "}
              <span className="font-medium text-teal-700">$3 for each additional ride</span>.
            </p>
            <p className="mt-2 text-lg">Write an equation for total cost T after x rides.</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <Label htmlFor="equation" className="text-lg">
                Write the equation for the total cost T:
              </Label>
              <Input
                id="equation"
                placeholder="T = ..."
                value={equation}
                onChange={(e) => setEquation(e.target.value)}
                className={checked ? (equationCorrect ? "border-green-500" : "border-red-500") : ""}
                disabled={checked && equationCorrect && explanationCorrect}
              />
              {checked && !equationCorrect && (
                <p className="text-sm text-red-600">
                  Your equation isn't quite right. Remember the fixed cost for the first ride and the variable cost for
                  additional rides.
                </p>
              )}
            </div>

            <div className="space-y-4">
              <Label htmlFor="explanation" className="text-lg">
                Explain how this problem has the same mathematical structure:
              </Label>
              <Textarea
                id="explanation"
                placeholder="This problem has the same structure because..."
                rows={4}
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                className={checked ? (explanationCorrect ? "border-green-500" : "border-red-500") : ""}
                disabled={checked && equationCorrect && explanationCorrect}
              />
              {checked && !explanationCorrect && (
                <p className="text-sm text-red-600">
                  Your explanation should discuss how this problem has the same structure as the shipping problems, with
                  a fixed cost and a variable cost.
                </p>
              )}
            </div>

            {checked && equationCorrect && explanationCorrect && (
              <div className="rounded-lg bg-green-100 p-4">
                <h3 className="mb-2 font-medium text-green-800">Excellent work!</h3>
                <p>
                  You've recognized that even though the context is completely different, the mathematical structure is
                  the same. This is a powerful skill in mathematical modeling!
                </p>
                <div className="mt-4 rounded-lg bg-white p-3">
                  <h4 className="mb-2 font-medium text-teal-700">Solution:</h4>
                  <MathEquation equation="T = 5 + 3(x - 1)" />
                  <p className="mt-2">Which simplifies to:</p>
                  <MathEquation equation="T = 2 + 3x" />
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
                    Fantastic! You've demonstrated that you can recognize and apply this mathematical pattern in
                    different contexts.
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
