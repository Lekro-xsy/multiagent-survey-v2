"use client"

import { useState } from "react"
import { Calculator } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MathEquation } from "@/components/math-equation"

export default function Page4() {
  const [fixedCost, setFixedCost] = useState("")
  const [variableCost, setVariableCost] = useState("")
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState(false)

  const handleCheck = () => {
    setChecked(true)
    setCorrect(Number.parseFloat(fixedCost) === 0.43 && Number.parseFloat(variableCost) === 0.29)
  }

  const handleReset = () => {
    setFixedCost("")
    setVariableCost("")
    setChecked(false)
    setCorrect(false)
  }

  return (
    <div className="space-y-6">
      <Card className="border-2 border-teal-100 shadow-md">
        <CardHeader className="bg-gradient-to-r from-teal-50 to-emerald-50">
          <CardTitle className="flex items-center text-2xl text-teal-800">
            <Calculator className="mr-2 h-6 w-6 text-teal-600" />
            Building the Shipping Equation
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="mb-6 text-lg">Now let's build a mathematical equation to model the shipping cost.</p>

          <div className="mb-8 space-y-6">
            <div className="rounded-lg bg-teal-50 p-4">
              <h3 className="mb-4 text-center text-lg font-medium text-teal-800">Step by Step</h3>

              <div className="space-y-4">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="mb-2 font-medium text-teal-700">Step 1: Identify the fixed cost</h4>
                  <p>First ounce = $0.43 (fixed)</p>
                </div>

                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="mb-2 font-medium text-teal-700">Step 2: Identify the variable cost</h4>
                  <p>Remaining (x - 1) ounces are charged at $0.29 each</p>
                  <p className="mt-2 text-sm text-gray-600">
                    We subtract 1 from x because the first ounce is already accounted for in the fixed cost
                  </p>
                </div>

                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="mb-2 font-medium text-teal-700">Step 3: Combine the costs</h4>
                  <p>Total cost = Fixed cost + Variable cost × Number of additional ounces</p>
                  <MathEquation equation="P = 0.43 + 0.29(x - 1)" />
                </div>
              </div>
            </div>

            <div className="rounded-lg border-2 border-teal-200 p-4">
              <h3 className="mb-4 text-center text-lg font-medium text-teal-800">Your Turn: Fill in the Equation</h3>

              <p className="mb-4 text-center">
                Complete the equation for the total price P of shipping a package weighing x ounces:
              </p>

              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">P =</span>
                  <div className="w-20">
                    <Input
                      type="number"
                      step="0.01"
                      value={fixedCost}
                      onChange={(e) => setFixedCost(e.target.value)}
                      className={
                        checked ? (Number.parseFloat(fixedCost) === 0.43 ? "border-green-500" : "border-red-500") : ""
                      }
                      disabled={checked && correct}
                    />
                  </div>
                  <span className="text-xl">+</span>
                  <div className="w-20">
                    <Input
                      type="number"
                      step="0.01"
                      value={variableCost}
                      onChange={(e) => setVariableCost(e.target.value)}
                      className={
                        checked
                          ? Number.parseFloat(variableCost) === 0.29
                            ? "border-green-500"
                            : "border-red-500"
                          : ""
                      }
                      disabled={checked && correct}
                    />
                  </div>
                  <span className="text-xl">× (x - 1)</span>
                </div>

                {checked && (
                  <div className={`mt-4 rounded-lg p-4 ${correct ? "bg-green-100" : "bg-amber-100"} w-full`}>
                    {correct ? (
                      <p className="text-center font-medium text-green-800">
                        Correct! The equation is P = 0.43 + 0.29(x - 1)
                      </p>
                    ) : (
                      <p className="text-center font-medium text-amber-800">
                        Not quite right. Remember, the fixed cost is $0.43 and the variable cost is $0.29 per additional
                        ounce.
                      </p>
                    )}
                  </div>
                )}

                <div className="mt-4">
                  {!checked ? (
                    <Button
                      onClick={handleCheck}
                      className="bg-teal-600 hover:bg-teal-700"
                      disabled={!fixedCost || !variableCost}
                    >
                      Check My Answer
                    </Button>
                  ) : !correct ? (
                    <Button onClick={handleReset} variant="outline">
                      Try Again
                    </Button>
                  ) : (
                    <div className="rounded-lg bg-teal-50 p-4">
                      <h4 className="mb-2 text-center font-medium text-teal-800">Simplified Equation</h4>
                      <p className="text-center">We can expand the equation:</p>
                      <MathEquation equation="P = 0.43 + 0.29x - 0.29" />
                      <MathEquation equation="P = 0.14 + 0.29x" />
                      <p className="mt-2 text-center text-sm text-gray-600">
                        This is a linear equation in the form P = mx + b, where m = 0.29 is the slope and b = 0.14 is
                        the y-intercept.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
