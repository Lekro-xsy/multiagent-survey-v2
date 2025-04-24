"use client"

import { useState } from "react"
import { Brain, Check, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

export default function Page6() {
  const [value, setValue] = useState([1])
  const [selectedValues, setSelectedValues] = useState<number[]>([])
  const [checked, setChecked] = useState(false)

  const calculateCost = (ounces: number) => {
    return 0.43 + Math.max(0, ounces - 1) * 0.29
  }

  const handleValueChange = (newValue: number[]) => {
    setValue(newValue)
  }

  const handleSelectValue = (val: number) => {
    if (selectedValues.includes(val)) {
      setSelectedValues(selectedValues.filter((v) => v !== val))
    } else {
      setSelectedValues([...selectedValues, val])
    }
  }

  const handleCheck = () => {
    setChecked(true)
  }

  const isCorrect = () => {
    // Only whole numbers >= 1 are valid
    const validValues = [1, 2, 3, 4, 5]
    const invalidValues = [-1, -0.5, 0, 0.5, 5.5]

    const allValidSelected = validValues.every((v) => selectedValues.includes(v))
    const noInvalidSelected = invalidValues.every((v) => !selectedValues.includes(v))

    return allValidSelected && noInvalidSelected
  }

  return (
    <div className="space-y-6">
      <Card className="border-2 border-teal-100 shadow-md">
        <CardHeader className="bg-gradient-to-r from-teal-50 to-emerald-50">
          <CardTitle className="flex items-center text-2xl text-teal-800">
            <Brain className="mr-2 h-6 w-6 text-teal-600" />
            What Values Make Sense for x?
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="mb-6 text-lg">
            Let's explore what values of x (package weight in ounces) make sense in this problem.
          </p>

          <div className="mb-8 space-y-6">
            <div className="rounded-lg bg-teal-50 p-4">
              <h3 className="mb-4 text-center text-lg font-medium text-teal-800">Explore Different Values</h3>

              <div className="mb-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium">Package Weight:</span>
                  <span className="text-xl font-bold text-teal-700">{value[0]} ounces</span>
                </div>

                <Slider min={-1} max={6} step={0.5} value={value} onValueChange={handleValueChange} className="py-4" />

                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium">Shipping Cost:</span>
                  <span className="text-xl font-bold text-teal-700">
                    ${value[0] >= 1 ? calculateCost(value[0]).toFixed(2) : "N/A"}
                  </span>
                </div>

                {value[0] < 1 && (
                  <div className="rounded-lg bg-amber-100 p-3">
                    <p className="text-amber-800">
                      This value doesn't make sense in our context. The post office can't ship a package with zero or
                      negative weight.
                    </p>
                  </div>
                )}

                {!Number.isInteger(value[0]) && (
                  <div className="rounded-lg bg-amber-100 p-3">
                    <p className="text-amber-800">
                      The post office charges by whole ounces, so fractional values don't make sense in this context.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-lg border-2 border-teal-200 p-4">
              <h3 className="mb-4 text-center text-lg font-medium text-teal-800">Select Valid Values for x</h3>

              <p className="mb-4 text-center">
                Click on all the values that make sense for x in this shipping cost problem:
              </p>

              <div className="mb-6 grid grid-cols-3 gap-3 sm:grid-cols-5">
                {[-1, 0, 0.5, 1, 2, 3, 4, 5, 5.5].map((val) => (
                  <Button
                    key={val}
                    variant={selectedValues.includes(val) ? "default" : "outline"}
                    className={selectedValues.includes(val) ? "bg-teal-600 hover:bg-teal-700" : ""}
                    onClick={() => handleSelectValue(val)}
                  >
                    {val}
                  </Button>
                ))}
              </div>

              {checked && (
                <div className={`rounded-lg p-4 ${isCorrect() ? "bg-green-100" : "bg-amber-100"}`}>
                  {isCorrect() ? (
                    <div className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-green-800">
                          Correct! The valid values for x in this problem are whole numbers greater than or equal to 1.
                        </p>
                        <p className="mt-2 text-green-700">This is the domain of our equation: x ∈ ℤ, x ≥ 1</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start">
                      <X className="mr-2 h-5 w-5 text-amber-600" />
                      <div>
                        <p className="font-medium text-amber-800">
                          Not quite right. Think about what values make sense in the context of shipping packages.
                        </p>
                        <ul className="mt-2 list-disc pl-5 text-amber-700">
                          <li>Can a package have negative weight?</li>
                          <li>Can a package have zero weight?</li>
                          <li>Does the post office charge for partial ounces?</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-4 flex justify-center">
                {!checked ? (
                  <Button
                    onClick={handleCheck}
                    className="bg-teal-600 hover:bg-teal-700"
                    disabled={selectedValues.length === 0}
                  >
                    Check My Answer
                  </Button>
                ) : !isCorrect() ? (
                  <Button
                    onClick={() => {
                      setSelectedValues([])
                      setChecked(false)
                    }}
                    variant="outline"
                  >
                    Try Again
                  </Button>
                ) : (
                  <div className="rounded-lg bg-teal-50 p-4 text-center">
                    <p className="font-medium text-teal-800">
                      Great job understanding the domain constraints! Continue to the next page to see the full
                      solution.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
