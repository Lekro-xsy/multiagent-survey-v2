"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function NearTransfer() {
  const [inequality, setInequality] = useState("")
  const [calculation, setCalculation] = useState("")
  const [isSolution, setIsSolution] = useState<string | null>(null)
  const [checked, setChecked] = useState(false)

  const isInequalityCorrect = inequality === "3.50x ≥ 560" || inequality === "3.5x ≥ 560"
  const isCalculationCorrect = calculation === "560" || calculation === "560.0" || calculation === "560.00"
  const isSolutionCorrect = isSolution === "yes"

  const allCorrect = isInequalityCorrect && isCalculationCorrect && isSolutionCorrect

  const handleCheck = () => {
    setChecked(true)
  }

  const handleReset = () => {
    setInequality("")
    setCalculation("")
    setIsSolution(null)
    setChecked(false)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="inequality">Set up the inequality</Label>
          <div className="flex items-center gap-2 mt-2">
            <Input
              id="inequality"
              value={inequality}
              onChange={(e) => setInequality(e.target.value)}
              placeholder="3.50x ≥ ..."
              className={checked ? (isInequalityCorrect ? "border-green-500" : "border-red-500") : ""}
            />
            {checked && isInequalityCorrect && <Check className="h-5 w-5 text-green-500" />}
          </div>
        </div>

        <div>
          <Label htmlFor="calculation">Calculate: 3.50 × 160</Label>
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
          <Label>Is 160 tickets enough?</Label>
          <RadioGroup value={isSolution || ""} onValueChange={setIsSolution} className="mt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes-near" />
              <Label htmlFor="yes-near" className={checked && isSolution === "yes" ? "text-green-500 font-medium" : ""}>
                Yes, 160 tickets is enough
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no-near" />
              <Label htmlFor="no-near" className={checked && isSolution === "no" ? "text-red-500 font-medium" : ""}>
                No, 160 tickets is not enough
              </Label>
            </div>
          </RadioGroup>
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
            You've correctly set up the inequality 3.50x ≥ 560 and calculated that 3.50 × 160 = 560. Since 560 ≥ 560
            (equal to), 160 tickets is indeed enough to meet the goal.
          </p>
        </div>
      )}

      {checked && !allCorrect && (
        <div className="rounded-md bg-amber-100 p-4 text-amber-800">
          <p className="font-medium">Let's double-check your work:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            {!isInequalityCorrect && <li>The inequality should be 3.50x ≥ 560</li>}
            {!isCalculationCorrect && <li>Check your calculation of 3.50 × 160</li>}
            {!isSolutionCorrect && (
              <li>Remember, if the result is greater than or equal to 560, then 160 tickets is enough</li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
