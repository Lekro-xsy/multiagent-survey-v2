"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Page5() {
  const [answers, setAnswers] = useState({
    expression: "",
    parentheses: "",
    final: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field: keyof typeof answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">✍️ Now It's Your Turn!</h1>

      <div className="mb-8 text-center max-w-xl">
        <p className="text-lg mb-4">
          Let's calculate the perimeter of our rectangle with length 3 meters and width 2 meters.
        </p>
        <p className="text-lg">Fill in each step of the calculation.</p>
      </div>

      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <Label htmlFor="expression">Write the full expression:</Label>
          <Input
            id="expression"
            placeholder="2(3 + 2)"
            value={answers.expression}
            onChange={(e) => handleChange("expression", e.target.value)}
            disabled={submitted}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="parentheses">Simplify inside the parentheses:</Label>
          <Input
            id="parentheses"
            placeholder="2(5)"
            value={answers.parentheses}
            onChange={(e) => handleChange("parentheses", e.target.value)}
            disabled={submitted}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="final">Multiply to find the perimeter:</Label>
          <Input
            id="final"
            placeholder="10"
            value={answers.final}
            onChange={(e) => handleChange("final", e.target.value)}
            disabled={submitted}
          />
        </div>

        {!submitted && (
          <Button
            onClick={handleSubmit}
            className="w-full"
            disabled={!answers.expression || !answers.parentheses || !answers.final}
          >
            Submit My Work
          </Button>
        )}

        {submitted && (
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="font-medium mb-2">You've completed your work!</p>
            <p>On the next page, we'll check your answers together.</p>
          </div>
        )}
      </div>
    </div>
  )
}
