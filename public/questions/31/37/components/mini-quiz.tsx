"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function MiniQuiz() {
  const [q1, setQ1] = useState<string | null>(null)
  const [q2, setQ2] = useState<string | null>(null)
  const [checked, setChecked] = useState(false)

  const isQ1Correct = q1 === "true"
  const isQ2Correct = q2 === "greater-equal"

  const allCorrect = isQ1Correct && isQ2Correct

  const handleCheck = () => {
    setChecked(true)
  }

  const handleReset = () => {
    setQ1(null)
    setQ2(null)
    setChecked(false)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <div>
          <Label className="font-medium">
            1. True or False: To check a solution, substitute the value and compare.
          </Label>
          <RadioGroup value={q1 || ""} onValueChange={setQ1} className="mt-2 space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="true" id="q1-true" />
              <Label htmlFor="q1-true" className={checked && q1 === "true" ? "text-green-500 font-medium" : ""}>
                True
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="false" id="q1-false" />
              <Label htmlFor="q1-false" className={checked && q1 === "false" ? "text-red-500 font-medium" : ""}>
                False
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="font-medium">2. What does "at least" mean mathematically?</Label>
          <RadioGroup value={q2 || ""} onValueChange={setQ2} className="mt-2 space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="greater" id="q2-greater" />
              <Label htmlFor="q2-greater" className={checked && q2 === "greater" ? "text-red-500 font-medium" : ""}>
                Greater than (>)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="less" id="q2-less" />
              <Label htmlFor="q2-less" className={checked && q2 === "less" ? "text-red-500 font-medium" : ""}>
                Less than (&lt;)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="greater-equal" id="q2-greater-equal" />
              <Label
                htmlFor="q2-greater-equal"
                className={checked && q2 === "greater-equal" ? "text-green-500 font-medium" : ""}
              >
                Greater than or equal to (≥)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="less-equal" id="q2-less-equal" />
              <Label
                htmlFor="q2-less-equal"
                className={checked && q2 === "less-equal" ? "text-red-500 font-medium" : ""}
              >
                Less than or equal to (≤)
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
            <p className="font-medium">Perfect score!</p>
          </div>
          <p className="mt-2">
            You've correctly answered all questions. You understand how to check solutions to inequalities and what "at
            least" means mathematically.
          </p>
        </div>
      )}

      {checked && !allCorrect && (
        <div className="rounded-md bg-amber-100 p-4 text-amber-800">
          <p className="font-medium">Let's review:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            {!isQ1Correct && (
              <li>To check a solution to an inequality, we substitute the value and compare the results</li>
            )}
            {!isQ2Correct && <li>"At least" means "greater than or equal to" (≥)</li>}
          </ul>
        </div>
      )}
    </div>
  )
}
