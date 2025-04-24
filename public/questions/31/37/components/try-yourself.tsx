"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function TryYourself() {
  const [calculation, setCalculation] = useState("")
  const [isSolution, setIsSolution] = useState<string | null>(null)
  const [explanation, setExplanation] = useState("")
  const [checked, setChecked] = useState(false)

  const isCalculationCorrect = calculation === "411.60" || calculation === "411.6"
  const isSolutionCorrect = isSolution === "yes"
  const isExplanationCorrect =
    explanation.toLowerCase().includes("greater") && explanation.toLowerCase().includes("395")

  const allCorrect = isCalculationCorrect && isSolutionCorrect && isExplanationCorrect

  const handleCheck = () => {
    setChecked(true)
  }

  const handleReset = () => {
    setCalculation("")
    setIsSolution(null)
    setExplanation("")
    setChecked(false)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="calculation">Calculate: 2.80 × 147</Label>
          <div className="flex items-center gap-2 mt-2">
            <Input
              id="calculation"
              value={calculation}
              onChange={(e) => setCalculation(e.target.value)}
              placeholder="Enter your answer"
              className={checked ? (isCalculationCorrect ? "border-green-500" : "border-red-500") : ""}
            />
            {checked && isCalculationCorrect && <Check className="h-5 w-5 text-green-500" />}
          </div>
        </div>

        <div>
          <Label>Is 147 a solution?</Label>
          <RadioGroup value={isSolution || ""} onValueChange={setIsSolution} className="mt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes" className={checked && isSolution === "yes" ? "text-green-500 font-medium" : ""}>
                Yes, 147 is a solution
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no" className={checked && isSolution === "no" ? "text-red-500 font-medium" : ""}>
                No, 147 is not a solution
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="explanation">Explain your answer</Label>
          <div className="flex items-center gap-2 mt-2">
            <Input
              id="explanation"
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              placeholder="Since ___ ≥ 395, 147 is/is not a solution"
              className={checked ? (isExplanationCorrect ? "border-green-500" : "border-red-500") : ""}
            />
            {checked && isExplanationCorrect && <Check className="h-5 w-5 text-green-500" />}
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={handleReset}>
          Reset
        </Button>
        <Button onClick={handleCheck}>Check</Button>
      </div>

      {checked && allCorrect && (
        <div className="rounded-md bg-green-100 p-4 text-green-800">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5" />
            <p className="font-medium">Excellent work!</p>
          </div>
          <p className="mt-2">
            You've correctly calculated that 2.80 × 147 = 411.60, which is greater than 395. Therefore, 147 tickets is
            indeed a solution to the inequality 2.80x ≥ 395.
          </p>
        </div>
      )}

      {checked && !allCorrect && (
        <div className="rounded-md bg-amber-100 p-4 text-amber-800">
          <p className="font-medium">Let's double-check your work:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            {!isCalculationCorrect && <li>Check your calculation of 2.80 × 147</li>}
            {!isSolutionCorrect && (
              <li>Remember, if the result is greater than or equal to 395, then 147 is a solution</li>
            )}
            {!isExplanationCorrect && <li>Your explanation should mention why 147 is or is not a solution</li>}
          </ul>
        </div>
      )}
    </div>
  )
}
