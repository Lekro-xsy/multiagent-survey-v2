"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function GuidedSteps() {
  const [step1, setStep1] = useState("")
  const [step2, setStep2] = useState("")
  const [step3, setStep3] = useState("")
  const [checked, setChecked] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const isStep1Correct = step1 === "2.80 × 147"
  const isStep2Correct = step2 === "411.60"
  const isStep3Correct = step3 === "411.60 ≥ 395" || step3 === "411.60 >= 395"

  const allCorrect = isStep1Correct && isStep2Correct && isStep3Correct

  const handleCheck = () => {
    setChecked(true)
  }

  const handleReset = () => {
    setStep1("")
    setStep2("")
    setStep3("")
    setChecked(false)
    setShowHint(false)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="step1">Step 1: Substitute 147 for x in the inequality</Label>
          <div className="flex items-center gap-2 mt-2">
            <Input
              id="step1"
              value={step1}
              onChange={(e) => setStep1(e.target.value)}
              placeholder="2.80 × ..."
              className={checked ? (isStep1Correct ? "border-green-500" : "border-red-500") : ""}
            />
            {checked && isStep1Correct && <Check className="h-5 w-5 text-green-500" />}
          </div>
        </div>

        <div>
          <Label htmlFor="step2">Step 2: Calculate the left side</Label>
          <div className="flex items-center gap-2 mt-2">
            <Input
              id="step2"
              value={step2}
              onChange={(e) => setStep2(e.target.value)}
              placeholder="= ..."
              className={checked ? (isStep2Correct ? "border-green-500" : "border-red-500") : ""}
            />
            {checked && isStep2Correct && <Check className="h-5 w-5 text-green-500" />}
          </div>
        </div>

        <div>
          <Label htmlFor="step3">Step 3: Compare the result to 395</Label>
          <div className="flex items-center gap-2 mt-2">
            <Input
              id="step3"
              value={step3}
              onChange={(e) => setStep3(e.target.value)}
              placeholder="... ≥ 395"
              className={checked ? (isStep3Correct ? "border-green-500" : "border-red-500") : ""}
            />
            {checked && isStep3Correct && <Check className="h-5 w-5 text-green-500" />}
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setShowHint(!showHint)}>
          {showHint ? "Hide Hint" : "Show Hint"}
        </Button>
        <div className="space-x-2">
          <Button variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button onClick={handleCheck}>Check</Button>
        </div>
      </div>

      {showHint && (
        <div className="rounded-md bg-muted p-4">
          <p className="font-medium">Hints:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>For Step 1, replace x with 147 in the inequality 2.80x ≥ 395</li>
            <li>For Step 2, multiply 2.80 by 147</li>
            <li>For Step 3, write the complete inequality with your answer from Step 2 on the left side</li>
          </ul>
        </div>
      )}

      {checked && allCorrect && (
        <div className="rounded-md bg-green-100 p-4 text-green-800">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5" />
            <p className="font-medium">Great job!</p>
          </div>
          <p className="mt-2">
            You've correctly substituted 147 into the inequality and found that 411.60 ≥ 395, which means 147 tickets is
            a solution!
          </p>
        </div>
      )}
    </div>
  )
}
