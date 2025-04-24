"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function PageFour() {
  const [step, setStep] = useState(1)
  const [nValue, setNValue] = useState("")
  const [formulaValue, setFormulaValue] = useState("")
  const [calculationValue, setCalculationValue] = useState("")

  const checkStep = (currentStep: number) => {
    if (currentStep === 1) {
      return nValue === "25"
    } else if (currentStep === 2) {
      return formulaValue === "25(25+1)/2" || formulaValue === "25(26)/2" || formulaValue === "25×26/2"
    } else if (currentStep === 3) {
      return calculationValue === "650/2" || calculationValue === "325"
    }
    return false
  }

  const advanceStep = () => {
    if (checkStep(step)) {
      setStep(step + 1)
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-center text-2xl font-bold text-blue-800">🧮 Setting Up the Mathematical Model</h2>

      <Card className="p-6">
        <h3 className="mb-4 text-xl font-semibold text-blue-700">Step-by-Step Solution</h3>

        <div className="space-y-6">
          <div className={`rounded-lg p-4 ${step === 1 ? "bg-yellow-50" : "bg-gray-50"}`}>
            <h4 className="mb-2 font-medium">Step 1: Identify the number of terms (n)</h4>
            <div className="flex items-center gap-3">
              <p>n = </p>
              <Input
                value={nValue}
                onChange={(e) => setNValue(e.target.value)}
                className="w-20"
                placeholder="?"
                disabled={step !== 1}
              />
              <Button onClick={() => advanceStep()} disabled={!checkStep(1) || step !== 1} size="sm">
                Check
              </Button>
            </div>
            {step > 1 && <p className="mt-2 text-green-600">Correct! We have 25 rows in our pyramid.</p>}
          </div>

          <div className={`rounded-lg p-4 ${step === 2 ? "bg-yellow-50" : "bg-gray-50"}`}>
            <h4 className="mb-2 font-medium">Step 2: Apply the formula for sum of first n integers</h4>
            <div className="flex items-center gap-3">
              <p>Sum = </p>
              <Input
                value={formulaValue}
                onChange={(e) => setFormulaValue(e.target.value)}
                className="w-40"
                placeholder="n(n+1)/2"
                disabled={step !== 2}
              />
              <Button onClick={() => advanceStep()} disabled={!checkStep(2) || step !== 2} size="sm">
                Check
              </Button>
            </div>
            {step > 2 && (
              <p className="mt-2 text-green-600">Correct! We substitute n = 25 into the formula n(n+1)/2.</p>
            )}
          </div>

          <div className={`rounded-lg p-4 ${step === 3 ? "bg-yellow-50" : "bg-gray-50"}`}>
            <h4 className="mb-2 font-medium">Step 3: Calculate the result</h4>
            <div className="flex items-center gap-3">
              <p>Sum = </p>
              <Input
                value={calculationValue}
                onChange={(e) => setCalculationValue(e.target.value)}
                className="w-40"
                placeholder="Calculate"
                disabled={step !== 3}
              />
              <Button onClick={() => advanceStep()} disabled={!checkStep(3) || step !== 3} size="sm">
                Check
              </Button>
            </div>
            {step > 3 && <p className="mt-2 text-green-600">Correct! 25(26)/2 = 650/2 = 325</p>}
          </div>

          {step > 3 && (
            <div className="rounded-lg bg-green-100 p-4 text-center">
              <p className="text-xl font-bold text-green-800">The total number of cartons needed is 325!</p>
            </div>
          )}
        </div>
      </Card>

      <div className="rounded-lg bg-blue-50 p-4">
        <h4 className="mb-2 font-semibold text-blue-700">Formula Explanation:</h4>
        <p>
          The formula <strong>n(n+1)/2</strong> gives us the sum of consecutive integers from 1 to n.
        </p>
        <p className="mt-2">For our pyramid with 25 rows, we're finding the sum: 1 + 2 + 3 + ... + 23 + 24 + 25</p>
      </div>
    </div>
  )
}
