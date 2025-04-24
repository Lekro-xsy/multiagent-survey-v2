"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export function FarTransfer() {
  const [inequality, setInequality] = useState("")
  const [calculation, setCalculation] = useState("")
  const [isSolution, setIsSolution] = useState<string | null>(null)
  const [explanation, setExplanation] = useState("")
  const [checked, setChecked] = useState(false)

  const isInequalityCorrect = inequality === "8x ≥ 1200" || inequality === "8h ≥ 1200"
  const isCalculationCorrect = calculation === "1160" || calculation === "1160.0" || calculation === "1160.00"
  const isSolutionCorrect = isSolution === "no"
  const isExplanationCorrect = explanation.toLowerCase().includes("less") && explanation.toLowerCase().includes("1200")

  const allCorrect = isInequalityCorrect && isCalculationCorrect && isSolutionCorrect && isExplanationCorrect

  const handleCheck = () => {
    setChecked(true)
  }

  const handleReset = () => {
    setInequality("")
    setCalculation("")
    setIsSolution(null)
    setExplanation("")
    setChecked(false)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="inequality">Build the inequality</Label>
          <div className="flex items-center gap-2 mt-2">
            <Input
              id="inequality"
              value={inequality}
              onChange={(e) => setInequality(e.target.value)}
              placeholder="8x ≥ ..."
              className={checked ? (isInequalityCorrect ? "border-green-500" : "border-red-500") : ""}
            />
            {checked && isInequalityCorrect && <Check className="h-5 w-5 text-green-500" />}
          </div>
        </div>

        <div>
          <Label htmlFor="calculation">Calculate: 8 × 145</Label>
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
          <Label>Is 145 hours enough?</Label>
          <RadioGroup value={isSolution || ""} onValueChange={setIsSolution} className="mt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes-far" />
              <Label htmlFor="yes-far" className={checked && isSolution === "yes" ? "text-red-500 font-medium" : ""}>
                Yes, 145 hours is enough
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no-far" />
              <Label htmlFor="no-far" className={checked && isSolution === "no" ? "text-green-500 font-medium" : ""}>
                No, 145 hours is not enough
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="explanation">Explain your answer</Label>
          <Textarea
            id="explanation"
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            placeholder="Explain why 145 hours is or is not enough..."
            className={`mt-2 ${checked ? (isExplanationCorrect ? "border-green-500" : "border-red-500") : ""}`}
          />
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
            You've correctly set up the inequality 8x ≥ 1200 and calculated that 8 × 145 = 1160. Since 1160 is less than
            1200, 145 hours is not enough to meet the production goal.
          </p>
        </div>
      )}

      {checked && !allCorrect && (
        <div className="rounded-md bg-amber-100 p-4 text-amber-800">
          <p className="font-medium">Let's double-check your work:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            {!isInequalityCorrect && <li>The inequality should be 8x ≥ 1200 (where x represents hours)</li>}
            {!isCalculationCorrect && <li>Check your calculation of 8 × 145</li>}
            {!isSolutionCorrect && <li>Remember, if the result is less than 1200, then 145 hours is not enough</li>}
            {!isExplanationCorrect && <li>Your explanation should explain why 145 hours is or is not enough</li>}
          </ul>
        </div>
      )}
    </div>
  )
}
